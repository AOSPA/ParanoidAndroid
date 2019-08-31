import request from '../helpers/request';
import { getToday } from '../helpers/utils';

const baseURL = 'https://sourceforge.net/projects/krakenproject';

const fetchDownloadsCount = async (filename, codename) => {
  try {
    const res = await request(`${baseURL}/files/${codename}/${filename}/stats/json?start_date=2019-04-06&end_date=${getToday()}`);
    return res.total;
  } catch (err) {
    return 0;
  }
};

export { fetchDownloadsCount };
