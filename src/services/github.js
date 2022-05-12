import request from "../helpers/request";
import { humanDate, humanSize } from "../helpers/utils";

const baseURL = "https://raw.githubusercontent.com/Herna1994";

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

const fetchBuilds = async (codename, variant) => {
  try {
    const res = await request(`${baseURL}/ota/master/updates/${codename}`, true);

    const filteredArray = res.updates.filter(updates => updates.variant === variant);
    filteredArray.sort((a, b) => new Date(a.date) - new Date(b.date));

    const promises = filteredArray.map(async (build) => {
      const changelog = await fetchChangelog(codename, build.variant, build.major, build.minor) || "";
      const info = await fetchInfo(codename, build.filename);

      return {
        ...build,
        size: humanSize(build.size), // info.size for getting the builds size from GH releases
        datetime: humanDate(build.datetime),
        md5: build.id,
        downloads: info.download_count, // info.download_count for tracking downloads from GH releases.
        changelog,
      };
    }).reverse();

    return await Promise.all(promises);
  } catch (e) {
    return [];
  }
};

const fetchChangelog = async (codename, variant, major, minor) => {
  try {
    const res = await request(`${baseURL}/ota/master/updates/${codename}_changelog`, true);

    for (let index = 0; index < res.changelogs.length; index += 1) {
      const element = res.changelogs[index];
      if (element.variant === variant && element.major === major && element.minor === minor) {
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

const fetchTeamMD = async () => {
  const res = await request(`${baseURL}/ota/master/team.md`, false);
  console.log(res);
  return res;
};

const generateDownloadURL = (filename, major, variant, minor, codename) => {
  const downloadVersion = `${major.toLowerCase()}-${variant.toLowerCase()}-${minor.toLowerCase()}`;
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
  fetchDevices, fetchBuilds, fetchROMChangelog, fetchChangelogMD, fetchTeamMD, generateDownloadURL, fetchInfo,
};
