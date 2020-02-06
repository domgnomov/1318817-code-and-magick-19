'use strict';

(function () {
  var setupWizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var fireballElement = document.querySelector('.setup-fireball-wrap');

  var init = function() {
    wizardCoatElement.addEventListener('click', function () {
      wizardCoatElement.style.fill = window.colorFactory.getCoatColor();
    });

    wizardEyesElement.addEventListener('click', function () {
      wizardEyesElement.style.fill = window.colorFactory.getEyesColor();
    });

    fireballElement.addEventListener('click', function () {
      var inputElement = fireballElement.querySelector('input');
      var color = window.colorFactory.getFireballColor();
      fireballElement.style.backgroundColor = color;
      inputElement.value = color;
    });
  };

  window.wizardSettings = {
    init: init
  }
})();
