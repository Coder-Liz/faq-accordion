const toggleButtons = document.querySelectorAll('.faq__toggle-btn');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    const answerId = button.getAttribute('aria-controls');
    const answerElement = document.getElementById(answerId);

    // Toggle current item
    button.setAttribute('aria-expanded', !isExpanded);
    if (answerElement) {
      answerElement.classList.toggle('hidden');
    }

    // Toggle the SVG icon
    const icon = button.querySelector('.faq__toggle-icon');
    if (icon) {
      icon.src = isExpanded ? '/img/icon-plus.svg' : '/img/icon-minus.svg';
      icon.alt = isExpanded ? 'icon plus' : 'icon minus';
    }

    // Close other items and reset their icons
    toggleButtons.forEach((otherButton) => {
      if (
        otherButton !== button &&
        otherButton.getAttribute('aria-expanded') === 'true'
      ) {
        otherButton.setAttribute('aria-expanded', 'false');

        const otherAnswerId = otherButton.getAttribute('aria-controls');
        const otherAnswerElement = document.getElementById(otherAnswerId);
        if (otherAnswerElement) {
          otherAnswerElement.classList.add('hidden');
        }

        // Reset icons for other items
        const otherIcon = otherButton.querySelector('.faq__toggle-icon');
        if (otherIcon) {
          otherIcon.src = '/img/icon-plus.svg';
          otherIcon.alt = 'icon plus';
        }
      }
    });
  });
});

// Handle the initial open item
const initialOpenButton = document.querySelector(
  '.faq__item-open .faq__toggle-btn'
);
if (initialOpenButton) {
  initialOpenButton.setAttribute('aria-expanded', 'true');

  const initialOpenAnswerId = initialOpenButton.getAttribute('aria-controls');
  const initialOpenAnswerElement = document.getElementById(initialOpenAnswerId);
  if (initialOpenAnswerElement) {
    initialOpenAnswerElement.classList.remove('hidden');
  }

  // Ensure the initial open item has the minus icon
  const initialIcon = initialOpenButton.querySelector('.faq__toggle-icon');
  if (initialIcon) {
    initialIcon.src = '/img/icon-minus.svg';
    initialIcon.alt = 'icon minus';
  }
}
