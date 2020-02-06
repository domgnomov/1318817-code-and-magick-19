'use strict';

(function () {
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var COAT_COLORS = ['rgba(101, 137, 164)', 'rgba(241, 43, 107)', 'rgba(146, 100, 161)', 'rgba(56, 159, 117)', 'rgba(215, 210, 55)', 'rgba(0, 0, 0)'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var getEyesColor = function () {
    return window.util.getRandomValue(EYES_COLORS);
  };

  var getCoatColor = function () {
    return window.util.getRandomValue(COAT_COLORS);
  };

  var getFireballColor = function () {
    return window.util.getRandomValue(FIREBALL_COLORS);
  };

  window.colorFactory = {
    getEyesColor: getEyesColor,
    getCoatColor: getCoatColor,
    getFireballColor: getFireballColor
  };
})();
