function createEmployeeRecord(array) {
  const firstName = array[0];

  const familyName = array[1];

  const title = array[2];

  const payPerHour = array[3];

  const timeInEvents = [];

  const timeOutEvents = [];

  return {
    firstName: firstName,
    familyName: familyName,
    title: title,
    payPerHour: payPerHour,
    timeInEvents: timeInEvents,
    timeOutEvents: timeOutEvents,
  };
}

function createEmployeeRecords(arrayOfArrays) {
  const recordArray = [];

  arrayOfArrays.forEach(array => {
    const recordObject = createEmployeeRecord(array);
    recordArray.push(recordObject);
  });

  return recordArray;
}

function createTimeInEvent(recordObj, timeString) {
  // Pull the hour and date from timeString
  const hour = parseInt(timeString.slice(-4));
  const date = timeString.slice(0, 10);

  // Send recordObj to createEmployeeRecord for organizing
  recordObj = createEmployeeRecord(recordObj);

  // Push the parsed time and date to the timeInEvents key
  recordObj.timeInEvents.push({ type: "TimeIn", hour: hour, date: date });

  return recordObj;
}

function createTimeOutEvent(recordObj, timeString) {
  // Pull the hour and date from timeString
  const hour = parseInt(timeString.slice(-4));
  const date = timeString.slice(0, 10);

  // Send recordObj to createEmployeeRecord for organizing
  recordObj = createEmployeeRecord(recordObj);

  // Push the parsed time and date to the timeInEvents key
  recordObj.timeOutEvents.push({ type: "TimeOut", hour: hour, date: date });

  return recordObj;
}

function hoursWorkedOnDate(recordObj, dateString) {
  /*
  hoursWorkedOnDate
  Argument(s)
  An employee record Object
  A date of the form "YYYY-MM-DD"
  Returns
  Hours worked, an Integer
  Behavior
  Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent
  */

  console.log(recordObj.timeInEvents.find(dateString);
  //Object.keys(recordObj.timeInEvents[0]).find(key => recordObj[key] === dateString)

  //return hoursWorkedInt;
}

/* TEST ----------------------------------------------------
   --------------------------------------------------------- */

//console.log(createEmployeeRecord(["Julius", "Caesar", "General", 1000]));

let record = {
  firstName: "Joe",
  familyName: "Mo",
  title: "Unemployed",
  payPerHour: 20000,
  timeInEvents: [{ timeIn: "0044-03-15 0900" }],
  timeOutEvents: [{ timeOut: "0044-03-15 1100" }],
};

console.log(hoursWorkedOnDate(record, "0044-03-15"));
