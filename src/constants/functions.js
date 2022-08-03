const formatTime = (sec) => {
  const padTime = (num, size) => `000${num}`.slice(size * -1);
  const time = parseFloat(sec).toFixed(3);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);
  return `${padTime(minutes, 1)}:${padTime(seconds, 2)}`;
};

export default {
  formatTime,
};
