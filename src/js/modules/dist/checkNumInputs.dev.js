"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var checkNumInputs = function checkNumInputs(inputsSelector) {
  var numInputs = document.querySelectorAll(inputsSelector);
  numInputs.forEach(function (item) {
    item.addEventListener("input", function () {
      item.value = item.value.replace(/\D/, '');
    });
  });
};

var _default = checkNumInputs;
exports["default"] = _default;