'use strict';

(function () {
  var StatusCode = {
    OK: 200
  };

  var statusHandler = function (xhr, onLoad, onError) {
    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  var load = function (onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var TIMEOUT_IN_MS = 10000;

    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    statusHandler(xhr, onLoad, onError);

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.open('GET', URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var URL = 'https://js.dump.academy/code-and-magick';
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    statusHandler(xhr, onLoad, onError);

    xhr.open('POST', URL);
    xhr.send(data);
  };


  window.backend = {
    load: load,
    save: save,
    errorHandler: errorHandler
  };
})();
