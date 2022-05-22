"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var tabs = function tabs(headerSelector, tabSelector, contentSelector, activeClass) {
  var display = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'block';
  var tabsHeader = document.querySelector(headerSelector),
      tabs = document.querySelectorAll(tabSelector),
      tabsContent = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    tabsContent.forEach(function (item) {
      item.style.display = 'none';
    });
    tabs.forEach(function (tab) {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent() {
    var i = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    tabsContent[i].style.display = display;
    tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();
  tabsHeader.addEventListener('click', function (event) {
    var target = event.target;

    if (target && target.classList.contains(tabSelector.replace(/\./, '')) || target && target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tabs.forEach(function (tab, i) {
        if (tab === target || target.parentNode === tab) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
};

var _default = tabs;
exports["default"] = _default;