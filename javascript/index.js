const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('stop')) {
    chronometer.stop();
    const element = document.querySelector('#btnLeft');
    element.classList.remove('stop');
    element.classList.add('start')
    element.innerHTML = 'START'
  }
}

function setSplitBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    chronometer.split();
    const element = document.querySelector('#btnRight');
    element.classList.remove('split');
    element.classList.add('reset');
    element.innerHTML = 'RESET';
  }
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(() => {
      const minUni = document.querySelector('#minUni');
      const minDec = document.querySelector('#minDec');
      const secUni = document.querySelector('#secUni');
      const secDec = document.querySelector('#secDec');

      const computedMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
      const computedSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
 
      minDec.innerHTML = computedMinutes[0];
      minUni.innerHTML = computedMinutes[1];

      secDec.innerHTML = computedSeconds[0];
      secUni.innerHTML = computedSeconds[1];
    });

    const element = document.querySelector('#btnLeft');
    element.classList.remove('start');
    element.classList.add('stop')
    element.innerHTML = 'STOP'
  }
}

function setResetBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    const element = document.querySelector('#btnRight');
    element.classList.remove('reset');
    element.classList.add('split')
    element.innerHTML = 'SPLIT'
  }
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) setStartBtn();
  else if (btnLeftElement.classList.contains('stop')) setStopBtn();
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) setResetBtn();
  else if (btnRightElement.classList.contains('split')) setSplitBtn();
});
