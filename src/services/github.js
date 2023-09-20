import request from "../helpers/request";
import { humanDate, humanSize } from "../helpers/utils";

const baseURL = "https://api.paranoidandroid.co";

const fetchDevices = async () => {
  try {
    const res = await request(`${baseURL}/devices`, true);

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

const fetchBuilds = async (codename) => {
  try {
    const res = await request(`${baseURL}/updates/${codename}`, true);

    const filteredArray = res.updates.sort((a, b) => {
      if (a.version !== b.version) {
        return b.version.localeCompare(a.version);
      }
      return parseFloat(b.datetime) - parseFloat(a.datetime);
    });

    const promises = filteredArray.map(async (build) => {
      //const changelog = await fetchChangelog(codename, build.build_type, build.version, build.version_code) || "";
      //const info = await fetchInfo(codename, build.filename);

      return {
        ...build,
        size: humanSize(build.size), // info.size for getting the builds size from GH releases
        datetime: humanDate(build.datetime),
        recovery_sha256: build.recovery_sha256,
        fastboot_sha256: build.fastboot_sha256,
        downloads: "",
        // downloads: info.download_count, // info.download_count for tracking downloads from GH releases.
        changelog: build.changelog_device,
        spl: build.android_spl,
        inactive: build.inactive
      };
    })

    return await Promise.all(promises);
  } catch (e) {
    return [];
  }
};

const fetchROMChangelog = async () => {
  const res = await request(`${baseURL}/changelog`, true);

  for (let index = 0; index < res.changelog.length; index += 1) {
    const element = res.changelog[index];
    element.md = await fetchChangelogMD(element.id);
  }

  return res;
};

const fetchChangelogMD = async (changeID) => {
  const res = await request(`${baseURL}/changelogs/${changeID}.md`, false);
  return res;
};

const fetchTeamInfo = async () => {
  const res = await request(`${baseURL}/team.md`, false);
  return res;
};

const fetchBlogPosts = async () => {
  const res = await request(`${baseURL}/blog`, true);

  const posts = []

  for (let index = 0; index < res.posts.length; index += 1) {
    const element = res.posts[index];
    element.md = await fetchPostMD(element.id);
  }

  return res;
};

const fetchPostMD = async (postID) => {
  const res = await request(`${baseURL}/posts/${postID}.md`, false);
  return res;
};

export {
  fetchDevices, fetchBuilds, fetchROMChangelog, fetchChangelogMD, fetchTeamInfo, fetchBlogPosts, fetchPostMD
};
