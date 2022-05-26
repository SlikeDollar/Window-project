"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _checkNumInputs = _interopRequireDefault(require("./checkNumInputs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var changeModalState = function changeModalState(state) {
  var windowForm = document.querySelectorAll('.balcon_icons_img'),
      windowWidth = document.querySelectorAll('#width'),
      windowHeight = document.querySelectorAll('#height'),
      windowType = document.querySelectorAll('#view_type'),
      windowProfile = document.querySelectorAll('.checkbox');
  (0, _checkNumInputs["default"])('#width');
  (0, _checkNumInputs["default"])('#height');

  function bindActionToElems(event, elem, prop) {
    elem.forEach(function (item, i) {
      item.addEventListener(event, function () {
        switch (item.nodeName) {
          case 'SPAN':
            state[prop] = i;
            break;

          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое';
              elem.forEach(function (box, j) {
                box.checked = false;

                if (i === j) {
                  box.checked = true;
                }
              });
            } else {
              state[prop] = item.value;
            }

            break;

          case 'SELECT':
            state[prop] = item.value;
            break;
        }

        console.log(state);
      });
    });
  }

  bindActionToElems('click', windowForm, 'form');
  bindActionToElems('input', windowWidth, 'width');
  bindActionToElems('input', windowHeight, 'height');
  bindActionToElems('change', windowType, 'type');
  bindActionToElems('change', windowProfile, 'profile');
};

var _default = changeModalState;
exports["default"] = _default;