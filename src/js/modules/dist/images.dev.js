"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var images = function images() {
  var imgPopup = document.createElement('div'),
      workSection = document.querySelector('.works'),
      bigImage = document.createElement('img');
  imgPopup.classList.add('popup');
  bigImage.classList.add('img--big');
  workSection.appendChild(imgPopup);
  imgPopup.style.justifyContent = 'center';
  imgPopup.style.alignItems = 'center';
  imgPopup.style.display = 'none';
  imgPopup.appendChild(bigImage);
  workSection.addEventListener('click', function (e) {
    e.preventDefault();
    var target = e.target;

    if (target && target.classList.contains('preview')) {
      imgPopup.style.display = 'flex';
      var path = target.parentNode.getAttribute('href');
      bigImage.setAttribute('src', path);
      document.body.style.overflow = 'hidden';
    }

    if (target && target.matches('div.popup')) {
      imgPopup.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
};

var _default = images;
exports["default"] = _default;