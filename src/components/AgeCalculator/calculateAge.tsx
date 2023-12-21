import isLeapYear from './isLeapYear';

const calculateAge = (year:number, month:number, day:number, currentYear:number, currentMonth:number, currentDay:number) => {

  // Calculate Years
  let years = currentYear - year;
  if (currentYear == year && currentMonth == month && currentDay < day) {
    years-=1;
  }
  if (currentMonth == month) {
    if (day > currentDay) {
      years-= 1;
    }
  } 

  // Calculate Months
  let months = month - currentMonth;
  if (months < 0) {
    months = currentMonth - month - 1;
    if (day <= currentDay) {
      months+= 1;
    }      
  }
  if (currentMonth == month) {
    if (day > currentDay) {
      months = 11;
    }
  }      

  // Calculate Days
  const monthDays = [31,isLeapYear(currentYear) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];      
  let days = currentDay - day;
  if (days < 0) {
    const totalDays = monthDays[month-1];
    const daysLeft = totalDays - day;
    days = currentDay + daysLeft;
  }

  return {
    years,
    months,
    days
  }
}

export default calculateAge;