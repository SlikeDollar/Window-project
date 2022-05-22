"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var forms = function forms() {
  var form = document.querySelectorAll('form'),
      inputs = document.querySelectorAll('input'),
      phoneInputs = document.querySelectorAll('input[name="user_phone"]');
  phoneInputs.forEach(function (item) {
    item.addEventListener("input", function () {
      item.value = item.value.replace(/\D/, '');
    });
  });
  var message = {
    loading: 'Загрузка...',
    success: 'Форма отправлена',
    failure: 'Что-то пошло не так...'
  };

  var postData = function postData(url, data) {
    var result;
    return regeneratorRuntime.async(function postData$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            document.querySelector('.status').textContent = message.loading;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch(url, {
              method: "POST",
              body: data
            }));

          case 3:
            result = _context.sent;
            _context.next = 6;
            return regeneratorRuntime.awrap(result.text());

          case 6:
            return _context.abrupt("return", _context.sent);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    });
  };

  form.forEach(function (item) {
    item.addEventListener('submit', function (event) {
      event.preventDefault();
      var statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      var formData = new FormData(item);
      postData('assets/server.php', formData).then(function (res) {
        console.log(res);
        statusMessage.textContent = message.success;
      })["catch"](function (error) {
        statusMessage.textContent = message.failure;
        throw error;
      })["finally"](function () {
        inputs.forEach(function (item) {
          return item.value = '';
        });
        setTimeout(function () {
          statusMessage.remove();
        }, 3000);
      });
    });
  });
};

var _default = forms;
exports["default"] = _default;