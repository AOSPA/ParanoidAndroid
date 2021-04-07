import request from '../helpers/request';
import { getToday, getTimestamp } from '../helpers/utils';

const baseURL = 'https://sourceforge.net/projects/aospk';

const fetchDownloadsCount = async (filename, codename) => {
  try {
    const res = await request(`${baseURL}/files/${codename}/${filename}/stats/json?start_date=2019-04-06&end_date=${getToday()}`);
    return res.total;
  } catch (err) {
    return 0;
  }
};

const generateDownloadURL = (filename, codename, romtype) => {
  const downloadBase = `https://download.aospk.org/eleven/${codename}/${romtype}/${filename}`;
  return `${downloadBase}`;
};

export { fetchDownloadsCount, generateDownloadURL };
