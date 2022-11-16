import request from "../helpers/request";
import { humanDate, humanSize } from "../helpers/utils";

const baseURL = "https://raw.githubusercontent.com/AOSPA";

const fetchDevices = async () => {
  try {
    const res = await request(`${baseURL}/ota/master/devices`, true);

    const brands = [];
    const devices = [];

    res.devices.forEach(device => !brands.includes(device.manufacturer) && brands.push(device.manufacturer));

    brands.forEach(brand => devices.push({
      name: brand,
      devices: res.devices.filter(device => device.manufacturer === brand),
    }));

    devices.forEach((brand) => {
      brand.devices.sort((a, b) => b.name.localeCompare(a.name));
    });

    return devices.sort((a, b) => a.name.localeCompare(b.name));
  } catch (e) {
    console.log("devices fetch failed");
  }
};

const fetchBuilds = async (codename, build_type) => {
  try {
    const res = await request(`${baseURL}/ota/master/updates/${codename}`, true);

    const filteredArray = res.updates.filter(updates => updates.build_type === build_type);
    filteredArray.sort((a, b) => parseFloat(b.datetime) - parseFloat(a.datetime));

    const promises = filteredArray.map(async (build) => {
      //const changelog = await fetchChangelog(codename, build.build_type, build.version, build.version_code) || "";
      //const info = await fetchInfo(codename, build.filename);

      return {
        ...build,
        size: humanSize(build.size), // info.size for getting the builds size from GH releases
        datetime: humanDate(build.datetime),
        sha256: build.id,
        downloads: "",
        // downloads: info.download_count, // info.download_count for tracking downloads from GH releases.
        changelog: build.changelog_device,
        spl: build.android_spl
      };
    })

    console.log(promises)

    return await Promise.all(promises);
  } catch (e) {
    return [];
  }
};

const fetchChangelog = async (codename, build_type, version, version_code) => {
  try {
    const res = await request(`${baseURL}/ota/master/updates/${codename}_changelog`, true);

    for (let index = 0; index < res.changelogs.length; index += 1) {
      const element = res.changelogs[index];
      if (element.build_type === build_type && element.version === version && element.version_code === version_code) {
        return element.text;
      }
    }
  } catch (err) {
    return null;
  }
};

const fetchROMChangelog = async () => {
  const res = await request(`${baseURL}/ota/master/changelog`, true);

  for (let index = 0; index < res.changelog.length; index += 1) {
    const element = res.changelog[index];
    element.md = await fetchChangelogMD(element.id);
  }

  return res;
};

const fetchChangelogMD = async (changeID) => {
  const res = await request(`${baseURL}/ota/master/changelogs/${changeID}.md`, false);
  return res;
};

const fetchTeamInfo = async () => {
  const res = await request(`${baseURL}/ota/master/team.md`, false);
  return res;
};

const fetchBlogPosts = async () => {
  const res = await request(`${baseURL}/ota/master/blog`, true);

  for (let index = 0; index < res.posts.length; index += 1) {
    const element = res.posts[index];
    element.md = await fetchPostMD(element.id);
  }

  return res;
};

const fetchPostMD = async (postID) => {
  const res = await request(`${baseURL}/ota/master/posts/${postID}.md`, false);
  return res;
};

const generateDownloadURL = (filename, version, build_type, version_code, codename) => {
  const downloadVersion = `${version.toLowerCase()}-${build_type.toLowerCase()}-${version_code.toLowerCase()}`;
  const downloadBase = `https://github.com/aospa-releases/${codename}/releases/download/${downloadVersion}/${filename}`;
  return `${downloadBase}`;
};

const fetchInfo = async (codename, filename) => {
  const deviceReleases = await request(`https://api.github.com/repos/aospa-releases/${codename}/releases`, true);

  for (let i = 0; i < deviceReleases.length; i += 1) {
    const release = deviceReleases[i];
    for (let j = 0; j < release.assets.length; j += 1) {
      const build = release.assets[j];
      if (build.name === filename) {
        return build;
      }
    }
  }

  return 0;
};

export {
  fetchDevices, fetchBuilds, fetchROMChangelog, fetchChangelogMD, fetchTeamInfo, fetchBlogPosts, fetchPostMD, generateDownloadURL, fetchInfo,
};
