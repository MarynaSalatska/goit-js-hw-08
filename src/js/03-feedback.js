import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const textAreaEl = document.querySelector('textArea');