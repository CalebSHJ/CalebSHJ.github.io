let display = document.getElementById('display');
let result = document.getElementById('result');
let buttons = Array.from(document.getElementsByClassName('button'));
let log = document.getElementById('log_display');
let clearLog = document.querySelector('.btn');

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch(e.target.innerHTML) {
      case "C":
        display.innerHTML = "";
        result.innerHTML = "";
      break;
      case "←":
        display.innerHTML = display.innerHTML.slice(0, -1);
        log.innerHTML = log.innerHTML.slice(0, -1);
      break;
      case "=":
        try {
          result.innerHTML = eval(display.innerHTML);
          log.innerHTML = "<p>" + log.innerHTML + "=" + eval(display.innerHTML) + "</p>";
          display.innerHTML = "";
        } catch {
          display.innerHTML = 'Error';
          log.innerHTML = 'Error';
        }  
        display.innerHTML = "";
      break;
      default:
        display.innerHTML += e.target.innerHTML;
        log.innerHTML += e.target.innerHTML; 
    }
  })
})

clearLog.addEventListener('click', () => {
  log.innerText = "";
})

function keyboardInput(key) {
  if (key.which < 0) {
      return false;
  } else if (key.shiftKey) {
      if (key.which === 57) {
        display.innerHTML+= "(";
        log.innerHTML += "("};
      if (key.which === 48) {
        display.innerHTML += ")";
        log.innerHTML += ")"}; 
      if (key.which === 56) {
        display.innerHTML += "*";
        log.innerHTML += "*"}; 
      if (key.which === 187) {
        display.innerHTML += "+";
        log.innerHTML += "+"}; 
  } else {
      key.preventDefault();
      if (key.which === 48 || key.which === 96) {
          display.innerHTML += "0";
          log.innerHTML += "0";
      } else if (key.which === 49 || key.which === 97 ) {
          display.innerHTML += "1";
          log.innerHTML += "1";
      } else if (key.which === 50 || key.which === 98) {
          display.innerHTML += "2";
          log.innerHTML += "2";
      } else if (key.which === 51 || key.which === 99) {
          display.innerHTML += "3";
          log.innerHTML += "3";
      } else if (key.which === 52 || key.which === 100) {
          display.innerHTML += "4";
          log.innerHTML += "4";
      } else if (key.which === 53 || key.which === 101) {
          display.innerHTML += "5";
          log.innerHTML += "5";
      } else if (key.which === 54 || key.which === 102) {
          display.innerHTML += "6";
          log.innerHTML += "6";
      } else if (key.which === 55 || key.which === 103) {
          display.innerHTML += "7";
          log.innerHTML += "7";
      } else if (key.which === 56 || key.which === 104) {
          display.innerHTML += "8";
          log.innerHTML += "8";
      } else if (key.which === 57 || key.which === 105) {
            display.innerHTML += "9";
            log.innerHTML += "9";   
      } else if (key.which === 190 || key.which === 110) {
          display.innerHTML += ".";
          log.innerHTML += "10";
      } else if (key.which === 106) {
          display.innerHTML += "*";
          log.innerHTML += "*";
      } else if (key.which === 111 || key.which === 191) {
          display.innerHTML += "/";
          log.innerHTML += "/";
      } else if (key.which === 107) {
          display.innerHTML += "+";
          log.innerHTML += "+";
      } else if (key.which === 109 || key.which === 189) {
          display.innerHTML += "-";
          log.innerHTML += "-";
      } else if (key.which === 13 || key.which === 187) {
          try {
            result.innerHTML = eval(display.innerHTML);
            log.innerHTML = "<p>" + log.innerHTML + "=" + eval(display.innerHTML) + "</p>";
            display.innerHTML = "";
          } catch {
            display.innerHTML = 'Error';
            log.innerHTML = 'Error';
          }  
          display.innerHTML = "";
      } else if (key.which === 27 || key.which === 144) {
          display.innerHTML = "";
          result.innerHTML = "";
      } else if (key.which === 8 || key.which === 46) {
          display.innerHTML = display.innerHTML.slice(0, -1);
          log.innerHTML = log.innerHTML.slice(0, -1);
      } else {
          display.innerHTML = display.innerHTML;
      }
      return true;
  }
}

document.addEventListener('keydown', (e) => {
  keyboardInput(e);
})