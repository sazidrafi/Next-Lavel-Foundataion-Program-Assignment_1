//question 1
const describeValue = (input) => {
    if (input > 0 && input != null) return `${typeof input} | truthy`;
    else return `${typeof input} | falsy`;
};

//question 2
const getDayType = (input) => {
    input = input.toLowerCase();
    switch (input) {
        case "friday":
            return "Weekend"
            break;
        case "sunday":
            return "Working Day"
            break;
        case "monday":
            return "Working Day"
            break;
        case "tuesday":
            return "Working Day"
            break;
        case "wednesday":
            return "Working Day"
            break;
        case "thursday":
            return "Working Day"
            break;
        default:
            return "Invalid Day"
            break;
    }
};

//question 3
const validateUsername  = (input) => {
    const input_length = input.length
    input = input.toLowerCase();
    //condition1
    if (input_length < 4) return "Too Short"
    //condition2
    if (input.includes(" ")) return "No Space Allowed"
    //condition3
    if (input.includes("admin")) return "Reserved Word"
    //condition4
    return "Available"
};

//question 4
const getCngFare = (distance, ...restof) => {
    const [isNight, waitingMinutes] = restof;
    const minimumFair = 50;
    if (distance <= 2) {
        if (isNight == undefined) return minimumFair;
        else if (isNight == false)
            if (waitingMinutes == undefined)
                return minimumFair;
            else
                return ((minimumFair + waitingMinutes * 2));
        else if (isNight == true) {
            if (waitingMinutes == undefined)
                return (minimumFair+minimumFair*.2);
            else
                return (minimumFair+minimumFair*.2+waitingMinutes*2);
        }
    }
    else {
        if (isNight == undefined) return (minimumFair+(distance-2)*15);
        else if (isNight == false)
            if (waitingMinutes == undefined)
                return (minimumFair+(distance-2)*15);
            else
                return (minimumFair+(distance-2)*15+waitingMinutes*2);
        else if (isNight == true) {
            if (waitingMinutes == undefined)
                return ((minimumFair+(distance-2)*15)+(minimumFair+(distance-2)*15)*.2);
            else
                return ((minimumFair+(distance-2)*15+waitingMinutes*2)+(minimumFair+(distance-2)*15+waitingMinutes*2)*.2);
        }
    }
};

//question 5
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