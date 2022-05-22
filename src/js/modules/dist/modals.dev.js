"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _function = require("core-js/core/function");

var modals = function modals() {
  function bindModal(triggerSelector, modalSelector, closeBtn) {
    var closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeBtn),
        windows = document.querySelectorAll('[data-modal]');
    trigger.forEach(function (item) {
      item.addEventListener('click', function (event) {
        if (event.target) {
          event.preventDefault();
        }

        windows.forEach(function (item) {
          item.style.display = 'none';
        });
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    });
    close.addEventListener('click', function () {
      modal.style.display = 'none';
      document.body.style.overflow = '';
      windows.forEach(function (item) {
        item.style.display = 'none';
      });
    });
    modal.addEventListener("click", function (event) {
      if (event.target === modal && closeClickOverlay) {
        windows.forEach(function (item) {
          item.style.display = 'none';
        });
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = 'hidden';
    }, time);
  }

  bindModal(".popup_engineer_btn", ".popup_engineer", ".popup_engineer .popup_close");
  bindModal(".phone_link", '.popup', '.popup .popup_close');
  bindModal(".popup_calc_btn", ".popup_calc", ".popup_calc_close", false);
  bindModal(".popup_calc_button", ".popup_calc_profile", '.popup_calc_profile_close', false);
  bindModal(".popup_calc_profile_button", ".popup_calc_end", ".popup_calc_end_close", false); // showModalByTime(".popup", 60000);
};

var _default = modals;
exports["default"] = _default;