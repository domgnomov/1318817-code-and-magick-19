'use strict';

(function () {
  var setupWizardElement = document.querySelector('.setup-wizard');
  var wizardCoatElement = setupWizardElement.querySelector('.wizard-coat');
  var wizardEyesElement = setupWizardElement.querySelector('.wizard-eyes');
  var fireballElement = document.querySelector('.setup-fireball-wrap');

  var init = function () {
    wizardCoatElement.addEventListener('click', function () {
      wizardCoatElement.style.fill = window.colorFactory.getCoatColor();
      window.debounce(window.wizardData.updateSimilarWizards)();
    });

    wizardEyesElement.addEventListener('click', function () {
      wizardEyesElement.style.fill = window.colorFactory.getEyesColor();
      window.debounce(window.wizardData.updateSimilarWizards)();
    });

    fireballElement.addEventListener('click', function () {
      var inputElement = fireballElement.querySelector('input');
      var color = window.colorFactory.getFireballColor();
      fireballElement.style.backgroundColor = color;
      inputElement.value = color;
    });
  };

  var getWizardCoatColor = function () {
    return wizardCoatElement.style.fill;
  };

  var getWizardEyesColor = function () {
    return wizardEyesElement.style.fill;
  };

  window.wizardSettings = {
    init: init,
    getWizardCoatColor: getWizardCoatColor,
    getWizardEyesColor: getWizardEyesColor
  };
})();
