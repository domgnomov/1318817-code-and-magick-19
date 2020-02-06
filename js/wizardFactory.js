'use strict';

(function () {
  var userDialogElement = document.querySelector('.setup');
  var similarListElement = userDialogElement.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomWizardArray = function (length) {
    var wizardArray = [];
    for (var i = 0; i < length; i++) {
      wizardArray.push({
        name: window.nameFactory.getWizardName(),
        coatColor: window.colorFactory.getCoatColor(),
        eyesColor: window.colorFactory.getEyesColor()
      });
    }
    return wizardArray;
  };

  var init = function () {
    var wizards = getRandomWizardArray(4);

    var renderWizard = function (wizard) {
      var wizardElement = similarWizardTemplate.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
      return wizardElement;
    };

    var fragment = document.createDocumentFragment();
    wizards.forEach(function (element) {
      fragment.appendChild(renderWizard(element));
    });

    similarListElement.appendChild(fragment);
  };

  var showSimilarWizards = function () {
    userDialogElement.classList.remove('hidden');
    userDialogElement.querySelector('.setup-similar').classList.remove('hidden');
  };

  window.wizardFactory = {
    init: init,
    showSimilarWizards: showSimilarWizards
  }
})();
