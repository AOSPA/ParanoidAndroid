const getToday = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`;
};

const humanSize = (bytes) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes == 0) return '0 Byte';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
};

const humanDate = (timestamp) => {
  const d = new Date(timestamp * 1000);
  const mm = (`0${d.getUTCMonth() + 1}`).slice(-2);
  const dd = (`0${d.getUTCDate()}`).slice(-2);
  return `${d.getFullYear()}/${mm}/${dd}`;
};

const getTimestamp = () => {
  const d = new Date();
  return Math.floor(d.getTime() / 1000);
};

export {
  getToday, humanDate, humanSize, getTimestamp,
};
