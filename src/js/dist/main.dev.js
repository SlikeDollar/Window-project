"use strict";

require("./slider");

var _modals = _interopRequireDefault(require("./modules/modals"));

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _changeModalState = _interopRequireDefault(require("./modules/changeModalState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var modalState = {};
  (0, _changeModalState["default"])(modalState);
  (0, _modals["default"])();
  (0, _tabs["default"])('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  (0, _tabs["default"])('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  (0, _tabs["default"])('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  (0, _forms["default"])(modalState);
});