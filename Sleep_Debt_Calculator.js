const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
      break;
    case "Tuesday":
      return 7;
      break;
    case "Wednesday":
      return 8;
      break;
    case "Thursday":
      return 10;
      break;
    case "Friday":
      return 11;
      break;
    case "Saturday":
      return 7;
      break;
    case "Sunday":
      return 8;
      break;
  }
};
//console.log(getSleepHours('Sunday'));
const getActualSleepHours = () => 8 + 7 + 8 + 10 + 11 + 7 + 8;

/*getSleepHours('Monday')
    + getSleepHours('Tuesday')
    +  getSleepHours('Wednesday')
    +  getSleepHours('Thursday')
    +  getSleepHours('Friday')
    +  getSleepHours('Saturday')
    +  getSleepHours('Sunday')*/

const getIdealSleepHours = (idealHours) => idealHours * 7;
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep! Keep it up!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (actualSleepHours - idealSleepHours) +
        " more sleep than needed Reduce your sleep Hours."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  }
};
calculateSleepDebt();
