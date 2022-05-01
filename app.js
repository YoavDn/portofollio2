'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const letsTalkBtn = document.querySelector('.lets-talk-btn');
const btnCloseModal = document.querySelector('.btn-close-modal');
const homeText = document.querySelector('.main-text-plus-btn');

const showTitle = function (e) {
  e.prevent.default();
  homeText.classList.remove('hidden');
  console.log('should work');
};

showTitle(e);
