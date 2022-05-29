"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var timer = function timer(id, deadline) {
  var addZero = function addZero(num) {
    if (num < 10) {
      num = "0".concat(num);
      return num;
    } else {
      return num;
    }
  };

  var getTimeRemaining = function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / 1000 / 60 / 60 % 24),
        days = Math.floor(t / 1000 / 60 / 60 / 24);
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(selector, endtime) {
    var timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(function () {
      updateClock();
    }, 1000);
    updateClock();

    function updateClock() {
      var t = getTimeRemaining(endtime);
      days.textContent = addZero(t.days);
      hours.textContent = addZero(t.hours);
      minutes.textContent = addZero(t.minutes);
      seconds.textContent = addZero(t.seconds);

      if (t.total < 0) {
        days.textContent = '0';
        hours.textContent = '0';
        minutes.textContent = '0';
        seconds.textContent = '0';
        clearInterval(timeInterval);
      }
    }
  };

  setClock(id, deadline);
};

var _default = timer;
exports["default"] = _default;