'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElement = document.querySelector('.setup-open');
  var setupCloseElement = setupElement.querySelector('.setup-close');
  var setupUserNameElement = setupElement.querySelector('.setup-user-name');
  var setupFormElement = setupElement.querySelector('.setup-wizard-form');

  var initValidation = function () {
    setupUserNameElement.addEventListener('input', function () {
      if (setupUserNameElement.validity.tooShort) {
        setupUserNameElement.setCustomValidity('Имя должно состоять минимум из 2-х символов');
      } else if (setupUserNameElement.validity.tooLong) {
        setupUserNameElement.setCustomValidity('Имя не должно превышать 25-ти символов');
      } else if (setupUserNameElement.validity.valueMissing) {
        setupUserNameElement.setCustomValidity('Обязательное поле');
      } else {
        setupUserNameElement.setCustomValidity('');
      }
    });
  };

  var onPopupEscPress = function (evt) {
    window.keyboardUtil.isEscEvent(evt, closeSetupDialog);
  };

  var openSetupDialog = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.wizardData.getWizardData();
    window.wizardData.showSimilarWizards();
    window.setupDialogMoving.initDefaultPosition();
  };

  var closeSetupDialog = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setupDialogMoving.setDefaultPosition();

  };

  var initOpenSetupDialogEvent = function () {
    setupOpenElement.addEventListener('click', function () {
      openSetupDialog();
    });

    setupOpenElement.addEventListener('keydown', function (evt) {
      window.keyboardUtil.isEnterEvent(evt, openSetupDialog);
    });
  };

  var initCloseSetupDialogEvent = function () {
    setupCloseElement.addEventListener('click', function () {
      closeSetupDialog();
    });

    setupCloseElement.addEventListener('keydown', function (evt) {
      window.keyboardUtil.isEscEvent(evt, closeSetupDialog);
    });
  };

  var initSetupUserNameElement = function () {
    setupUserNameElement.addEventListener('keydown', function (evt) {
      window.keyboardUtil.isEscEvent(evt, function (keyEvt) {
        keyEvt.stopPropagation();
      });
    });
  };

  var initSubmitFormElement = function () {
    setupFormElement.addEventListener('submit', function (evt) {
      window.backend.save(new FormData(setupFormElement), function () {
        setupElement.classList.add('hidden');
      });
      evt.preventDefault();
    });
  };

  var init = function () {
    initOpenSetupDialogEvent();
    initCloseSetupDialogEvent();
    initSetupUserNameElement();
    initValidation();
    initSubmitFormElement();
    window.setupDialogMoving.init();
  };

  window.setupDialog = {
    init: init
  };
})();
