function enterNumber(number) {

  while (isNaN(parseInt(number))) {
    number= parseInt(prompt("Please enter a number: "));
  }

  for (var count = 1; count<= number; count++) {
    if (count%3===0 && count%5===0) {
      document.write("PingPong"+ "<br>");
      continue;
    }
     else if (count%3===0) {
      document.write("Ping" + "<br>");
      continue;
    }
    else if (count%5===0 ) {
      document.write("Pong" + "<br>");
      continue;
    }  else {
        document.write(count + "<br>");
        continue;
      }
    }
  }
