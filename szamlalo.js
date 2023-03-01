function updateTime() {
    const now = new Date();
  
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateFormatted = `${day}. ${month}. ${year}.`;
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    // Add leading zeroes to minutes and seconds
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
  
    const timeFormatted = `${hours}:${minutes}:${seconds}`;
  
    // Update the HTML elements with the new values
    document.querySelector(".date").innerHTML = dateFormatted;
    document.querySelector(".time").innerHTML = timeFormatted;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  