"use strict";

require("./slider");

var _modals = _interopRequireDefault(require("./modules/modals"));

var _tabs = _interopRequireDefault(require("./modules/tabs"));

var _forms = _interopRequireDefault(require("./modules/forms"));

var _changeModalState = _interopRequireDefault(require("./modules/changeModalState"));

var _timer = _interopRequireDefault(require("./modules/timer"));

var _images = _interopRequireDefault(require("./modules/images"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener("DOMContentLoaded", function () {
  "use strict";

  var modalState = {
    form: "0",
    type: "tree"
  };
  var deadline = '2022-07-18';
  (0, _changeModalState["default"])(modalState);
  (0, _modals["default"])(modalState);
  (0, _tabs["default"])('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
  (0, _tabs["default"])('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  (0, _tabs["default"])('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
  (0, _forms["default"])(modalState);
  (0, _timer["default"])('.container1', deadline);
  (0, _images["default"])();
});