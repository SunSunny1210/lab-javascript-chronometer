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
    btnLeftElement.classList.remove('stop');
    btnLeftElement.classList.add('start');
    btnLeftElement.innerHTML = 'START';

    btnRightElement.classList.remove('reset');
    btnRightElement.classList.add('split');
    btnRightElement.innerHTML = 'SPLIT';
  }
}

function setSplitBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('split')) {
    chronometer.split();
    const li = document.createElement('li');
    li.innerHTML = chronometer.split();
    splitsElement.appendChild(li);
  }
}

function setStartBtn() {
  // ... your code goes here
  if (btnLeftElement.classList.contains('start')) {
    chronometer.start(() => {
      const computedMinutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
      const computedSeconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
      const computedMilliseconds = chronometer.computeTwoDigitNumber(Math.floor(chronometer.getMilliseconds() / 10))
 
      minDecElement.innerHTML = computedMinutes[0];
      minUniElement.innerHTML = computedMinutes[1];

      secDecElement.innerHTML = computedSeconds[0];
      secUniElement.innerHTML = computedSeconds[1];

      milDecElement.innerHTML = computedMilliseconds[0];
      milUniElement.innerHTML = computedMilliseconds[1];
    });

    btnLeftElement.classList.remove('start');
    btnLeftElement.classList.add('stop');
    btnLeftElement.innerHTML = 'STOP';

    btnRightElement.classList.remove('split');
    btnRightElement.classList.add('reset');
    btnRightElement.innerHTML = 'RESET';
  }
}

function setResetBtn() {
  // ... your code goes here
  if (btnRightElement.classList.contains('reset')) {
    chronometer.reset();
    [minDecElement, minUniElement, secDecElement, secUniElement, milDecElement, milUniElement].forEach((el) => el.innerHTML = '0'); 
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
