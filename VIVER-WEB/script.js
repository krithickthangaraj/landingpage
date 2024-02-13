(function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
    // Set the target date to February 28, 2024
    const targetDate = new Date('February 28, 2024 00:00:00').getTime();
  
    const x = setInterval(function() {    
  
      const now = new Date().getTime(),
            distance = targetDate - now;
  
      // Calculate remaining days, hours, minutes, and seconds
      document.getElementById("days").innerText = Math.floor(distance / (day)),
      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
      // Do something when the target date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's the target date!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0)
  })();
  