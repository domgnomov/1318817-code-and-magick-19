'use strict';

(function () {
  var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var getWizardName = function () {
    return window.util.getRandomValue(WIZARD_FIRST_NAMES) + ' ' + window.util.getRandomValue(WIZARD_SECOND_NAMES);
  };

  window.nameFactory = {
    getWizardName: getWizardName
  };
})();
