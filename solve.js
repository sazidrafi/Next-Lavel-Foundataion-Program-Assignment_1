const getChaseVerdict = (target, scored, ballsLeft) => {
  let runsNeeded = target - scored;
  if (runsNeeded <= 0) return "Won";
  else if (ballsLeft == 0) return "Lost";

  let requiredRate = (runsNeeded / ballsLeft) * 6;
  if (requiredRate <= 6) {
    //Comfortable
    return `Need ${target - scored} runs in ${ballsLeft} balls | Comfortable`;
  } else if (requiredRate > 6 && requiredRate <= 12) {
    //Tough
    return `Need ${target - scored} runs in ${ballsLeft} balls | Tough`;
  } else if (requiredRate > 12) {
    //Almost Impossible
    return `Need ${target - scored} runs in ${ballsLeft} balls | Almost Impossible`;
  }
};

console.log(getChaseVerdict(100, 90, 12));
