
 function moveHands() {

 	d = new Date();

          h = 30 * (d.getHours()) // 30 degrees hour
          m = 6 * d.getMinutes(); // 6 degrees every minute
          s = 6 * d.getSeconds(); // 6 degrees every second
          document.getElementById('seconds').style.cssText = "transform:rotate(" + s + "deg);";
          document.getElementById('minutes').style.cssText = "transform:rotate(" + m + "deg);";
          document.getElementById('hours').style.cssText = "transform:rotate(" + h + "deg);";

          setTimeout(moveHands, 1000); // calling the function every second
      
  }

  window.onload = moveHands; // making sure the function starts on load of webpage