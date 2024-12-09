function timeConversion(s) {
  let hour = parseInt(s.substring(0, 2));
  let minute = s.substring(3, 5);
  let second = s.substring(6, 8);
  let period = s.substring(8, 10);

  if (period === "AM" && hour === 12) {
    hour = 0;
  }
  if (period === "PM" && hour !== 12) {
    hour += 12;
  }
  return `${hour.toString().padStart(2, "0")}:${minute}:${second}`;
}
console.log(timeConversion("07:05:45PM"));
