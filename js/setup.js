'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = ['rgba(101, 137, 164)', 'rgba(241, 43, 107)', 'rgba(146, 100, 161)', 'rgba(56, 159, 117)', 'rgba(215, 210, 55)', 'rgba(0, 0, 0)'];


var getName = function () {
  return getRandomValue(WIZARD_FIRST_NAMES) + ' ' + getRandomValue(WIZARD_SECOND_NAMES);
};

var getEyesColor = function () {
  return getRandomValue(EYES_COLORS);
};

var getCoatColor = function () {
  return getRandomValue(COAT_COLORS);
};

var getRandomValue = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizardArray = function (length) {
  var wizardArray = [];
  for (var i = 0; i < length; i++) {
    wizardArray.push({
      name: getName(),
      coatColor: getCoatColor(),
      eyesColor: getEyesColor()
    });
  }
  return wizardArray;
};

var userDialog = document.querySelector('.setup');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

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

userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
