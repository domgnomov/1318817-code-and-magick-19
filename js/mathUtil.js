'use strict';

(function () {
  var getRandomValue = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  window.util = {
    getRandomValue: getRandomValue
  };
})();
