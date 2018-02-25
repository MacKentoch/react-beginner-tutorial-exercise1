import './index.css';

// No React here,
// so all html content is in html file (/public/index.html)

(function() {
  // reference to elements (input and <p> where we will recopy input value):
  const input = document.querySelector('.form-control');
  const recopy = document.querySelector('.recopy-text');

  // state of the application (to mimic React state)
  const state = {
    wrote: '',
  };

  // attach input event to <input /> element
  attachOnInputEvent();

  function attachOnInputEvent() {
    input.addEventListener('input', onWriting);
  }

  // input event callback:
  function onWriting(event) {
    // setState would set value to application state
    // and apply change everywhere this state is used
    state.wrote = event.target.value;
    // we have to apply manually the state change
    // to each element it is needed
    // (AND here is a simple case with just 1 element bound to wrote state value)
    applyOnWriting(event.target.value);
  }

  // without React we have to manually manage
  // the input value recopy into <p> element
  function applyOnWriting(justWrote) {
    const newTextToRecopy = document.createTextNode(justWrote);
    if (recopy.hasChildNodes()) {
      const previousTextToRecopy = recopy.firstChild;
      recopy.replaceChild(newTextToRecopy, previousTextToRecopy);
      return;
    }
    recopy.appendChild(newTextToRecopy);
  }
})();
