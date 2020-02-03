'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var COAT_COLORS = ['rgba(101, 137, 164)', 'rgba(241, 43, 107)', 'rgba(146, 100, 161)', 'rgba(56, 159, 117)', 'rgba(215, 210, 55)', 'rgba(0, 0, 0)'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


var getName = function () {
  return getRandomValue(WIZARD_FIRST_NAMES) + ' ' + getRandomValue(WIZARD_SECOND_NAMES);
};

var getEyesColor = function () {
  return getRandomValue(EYES_COLORS);
};

var getCoatColor = function () {
  return getRandomValue(COAT_COLORS);
};

var getFireballColor = function () {
  return getRandomValue(FIREBALL_COLORS);
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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');


var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

setupUserName.addEventListener('keydown', function (evt) {
  if (evt.key === ESC_KEY) {
    evt.stopPropagation();
  }
});

if (setupUserName.validity.tooShort) {
  setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
} else if (setupUserName.validity.tooLong) {
  setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
} else if (setupUserName.validity.valueMissing) {
  setupUserName.setCustomValidity('Обязательное поле');
} else {
  setupUserName.setCustomValidity('');
}

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getCoatColor();
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getEyesColor();
});

fireball.addEventListener('click', function () {
  var input = fireball.querySelector('input');
  var color = getFireballColor();
  fireball.style.backgroundColor = color;
  input.value = color;
});


