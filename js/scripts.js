function enterNumber(number){
  var userInput = document.getElementById('number').value
  var results = document.getElementById('results')
  var listElement = document.createElement('ul')
  results.appendChild(listElement)
  var inputValue = parseInt(userInput)
  for (var count = 1; count <= inputValue; count++) {
    var listItem = document.createElement('li');
    listItem.innerHTML = divisiblebyThree(count);
    listElement.appendChild(listItem)
  }
}

  function divisiblebyThree(number) {
    if (number % 3 === 0) {
      return "ping"

    }
    return divisiblebyFifteen(number);
  }
  function divisiblebyFifteen(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      return "pingpong"

    }
    return divisiblebyFive(number)
  }

    function divisiblebyFive(number) {
      if (number % 5 === 0) {
        return "pong"

      }
      return number;
    }
