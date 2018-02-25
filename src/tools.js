function updateRecopy(justWrote, element) {
  if (!element) {
    return;
  }

  const newTextToRecopy = document.createTextNode(justWrote);

  if (element.hasChildNodes()) {
    const previousTextToRecopy = element.firstChild;
    element.replaceChild(newTextToRecopy, previousTextToRecopy);
    return;
  }

  element.appendChild(newTextToRecopy);
}

export default updateRecopy;
