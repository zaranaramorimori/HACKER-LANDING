export type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const calculateTimeLeft = () => {
  const year = 2022;
  const month = 5;
  const day = 10;

  const difference = +new Date(`${year}-${month}-${day}`) - +new Date();

  let timeLeft: TimeLeft = {} as TimeLeft;

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  } else {
    timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return timeLeft;
};
