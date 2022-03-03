function createEmployeeRecord(array) {
  return {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: [],
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

  // Push the parsed time and date to the timeInEvents key
  recordObj.timeInEvents.push({ type: "TimeIn", hour: hour, date: date });

  return recordObj;
}

function createTimeOutEvent(recordObj, timeString) {
  // Pull the hour and date from timeString
  const hour = parseInt(timeString.slice(-4));
  const date = timeString.slice(0, 10);

  // Push the parsed time and date to the timeInEvents key
  recordObj.timeOutEvents.push({ type: "TimeOut", hour: hour, date: date });

  return recordObj;
}

function hoursWorkedOnDate(recordObj, dateString) {
  let hourIn = recordObj.timeInEvents.find(function (e) {
    return e.date === dateString;
  });

  let hourOut = recordObj.timeOutEvents.find(function (e) {
    return e.date === dateString;
  });

  return (hourOut.hour - hourIn.hour) / 100;
}

function wagesEarnedOnDate(recordObj, dateString) {
  // Retrieve # of hours from hoursWorkedOnDate.
  const hours = hoursWorkedOnDate(recordObj, dateString);

  // Multiply this number by the records payPerHour
  // and return result.
  return hours * recordObj.payPerHour;
}

function allWagesFor(recordObj) {
  let dailyWages = [];

  // Retrieve wage earned on each date.
  recordObj.timeInEvents.forEach(e => {
    dailyWages.push(wagesEarnedOnDate(recordObj, e.date));
  });

  // Return the sum of all of these daily wages as a number
  return dailyWages.reduce((accumulator, current) => accumulator + current);
}

function calculatePayroll(allEmployeesArray) {
  let allEmployeePay = [];

  allEmployeesArray.forEach(e => {
    allEmployeePay.push(allWagesFor(e));
  });

  return allEmployeePay.reduce((accumulator, current) => accumulator + current);
}
