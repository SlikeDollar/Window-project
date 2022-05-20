"use strict";

require("./slider");

var _modals = _interopRequireDefault(require("./modules/modals"));

var _tabs = _interopRequireDefault(require("./modules/tabs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener("DOMContentLoaded", function () {
  (0, _modals["default"])();
  (0, _tabs["default"])('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  (0, _tabs["default"])('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
});