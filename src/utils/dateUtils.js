const days = [
  "Mon",
  "Tue",
  "Wed",
  "Thurs",
  "Fri",
  "Sat",
  "Sun",
];
const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEPT",
  "OCT",
  "NOV",
  "DEC",
];
function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + ampm;
  return strTime;
}

export const getDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const getDateTime = (dataString) => {
  const date = new Date(dataString);
  return `${days[date.getDay()]} ${date.toLocaleDateString()}  ${formatAMPM(date) }`;
};

export const timeName = (date = new Date()) => {
  const hrs = date.getHours();
  if (hrs < 12) return "morning";
  else if (hrs >= 12 && hrs <= 17) return "afternoon";
  else if (hrs >= 17 && hrs <= 24) return "evening";
  else return 'day'
};
