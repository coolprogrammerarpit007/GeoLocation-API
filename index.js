`use strict`;

// JavaScript Geolocation API

const getUserLocaton = function () {
  const sucessCallBack = function (position) {
    console.log(position);
  };

  const faliureCallBack = function (error) {
    console.log(error);
  };

  navigator.geolocation.getCurrentPosition(sucessCallBack, faliureCallBack);
};

getUserLocaton();
