
// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.css";


const app = document.querySelector('input#app');
const icon = document.querySelector('.icon-Vector-1');
const icon2 = document.querySelector('.icon-Vector');

app.addEventListener('click', onClick);

function onClick() {
  if (onClick) {
    app.classList.add('input-focus')
    icon.classList.add('icon-vector-open');
    icon2.classList.add('icon-vector-open-2');
  }
  // else if () {
  //   app.classList.remove('input-focus')
  //   icon.classList.remove('icon-vector-open');
  //   icon2.classList.remove('icon-vector-open-2');}

  }


const options = {
  locale: {
        firstDayOfWeek: 1
    },

  defaultDate: new Date(),

    dateFormat: "d/m/Y",

};

flatpickr(app, options);

