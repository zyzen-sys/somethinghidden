document.querySelectorAll('.step-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var currentStep = parseInt(this.dataset.step, 10);
    var nextButton = document.querySelector('.step-btn[data-step="' + (currentStep + 1) + '"]');
    var finalMessage = document.querySelector('.final-message');
	

    // Disable the clicked button so it can't be pressed again
    this.disabled = true;
    this.style.opacity = '0.5';
    this.style.cursor = 'default';


    // Show the next button or the final message
    if (nextButton) {
      nextButton.hidden = false;
    } else if (currentStep === 4) {
      finalMessage.hidden = false;
    }
  });
});