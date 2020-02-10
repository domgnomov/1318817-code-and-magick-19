'use strict';

(function () {
  var WIZARD_ARRAY_LENGTH = 4;

  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var getWizardData = function () {
    window.backend.load(successHandler, window.backend.errorHandler);
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < WIZARD_ARRAY_LENGTH; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  var showSimilarWizards = function () {
    userDialogElement.classList.remove('hidden');
    userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.wizardData = {
    showSimilarWizards: showSimilarWizards,
    getWizardData: getWizardData
  };
})();
