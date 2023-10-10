import "../css/style.css";

// const fireplaces = [
//   {

//     title: 'Подвесной камин "Готланд"',
//     images: ['/public/images/image2.png', '/public/images/image2.png', '/public/images/image2.png',],
//     description: 'Мы изготавливаем этот подвесной камин из стали повышенной жаростойкости толщиной 6 мм — это гарантирует эксплуатацию более 20 лет без специального обслуживания. Покрытие из натуральной огнестойкой эмали. Подвесной камин безопасен в использовании, станет приятным и полезным дополнением вашей загородной жизни. Камин оснащен двойной стенкой, для минимизации нагревания камина и дымохода. В дымоходе присутствует заслонка, которая сохраняет тепло, за счет чего тяга даже в начале розжига камина хорошая. Камин оснащен поворотным механизмом',
//     sizes: [
//       {
//         'Диаметр 800 мм': '250 000 ₽',
//       },
//       {
//         'Диаметр 800 мм': '250 000 ₽',
//       },
//       {
//         'Ваш размер': 'После согласования',
//       },
//     ]
//   }
// ]

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  mousewheel: {
    sensitivity: 1,
  },

  slidesPerView: 4.5,
  spaceBetween: 20,

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.3,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 4.3,
    },
    1600: {
      slidesPerView: 5.3,
    }
  }
});

const modalTrigger1 = document.getElementsByClassName("trigger")[0];
const modalTrigger2 = document.getElementsByClassName("trigger")[1];
const modalTrigger3 = document.getElementsByClassName("trigger")[2];
const modalTrigger4 = document.getElementsByClassName("trigger")[3];
const modalTrigger5 = document.getElementsByClassName("trigger")[4];
const modalTrigger6 = document.getElementsByClassName("trigger")[5];
const modalTrigger7 = document.getElementsByClassName("trigger")[6];

const orderTriggersHtmlCollection = document.getElementsByClassName("orderTrigger");
const orderTriggers = Array.prototype.slice.call(orderTriggersHtmlCollection)

// получаем ширину отображенного содержимого и толщину ползунка прокрутки
const windowInnerWidth = document.documentElement.clientWidth;
const scrollbarWidth = parseInt(window.innerWidth) - parseInt(document.documentElement.clientWidth);

// привязываем необходимые элементы
const bodyElementHTML = document.getElementsByTagName("body")[0];
const modalBackground1 = document.getElementsByClassName("modalBackground")[0];
const modalBackground2 = document.getElementsByClassName("modalBackground")[1];
const modalBackground3 = document.getElementsByClassName("modalBackground")[2];
const modalBackground4 = document.getElementsByClassName("modalBackground")[3];
const modalBackground5 = document.getElementsByClassName("modalBackground")[4];
const modalBackground6 = document.getElementsByClassName("modalBackground")[5];
const modalBackground7 = document.getElementsByClassName("modalBackground")[6];
const modalBackground8 = document.getElementsByClassName("modalBackground")[7];

const modalClose1 = document.getElementsByClassName("modalClose")[0];
const modalClose2 = document.getElementsByClassName("modalClose")[1];
const modalClose3 = document.getElementsByClassName("modalClose")[2];
const modalClose4 = document.getElementsByClassName("modalClose")[3];
const modalClose5 = document.getElementsByClassName("modalClose")[4];
const modalClose6 = document.getElementsByClassName("modalClose")[5];
const modalClose7 = document.getElementsByClassName("modalClose")[6];
const modalClose8 = document.getElementsByClassName("modalClose")[7];

orderTriggers.forEach(element => {
  element.addEventListener("click", function () {
    modalBackground8.style.display = "block";
    if (windowInnerWidth >= 1366) {
        bodyMargin();
    }
  })
});
modalClose8.addEventListener("click", function () {
  modalBackground8.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground8.addEventListener("click", function (event) {
  if (event.target === modalBackground8) {
      modalBackground8.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});

function bodyMargin() {
  bodyElementHTML.style.marginRight = "-" + scrollbarWidth + "px";
}

modalTrigger1.addEventListener("click", function () {
  modalBackground1.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose1.addEventListener("click", function () {
  modalBackground1.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground1.addEventListener("click", function (event) {
  if (event.target === modalBackground1) {
      modalBackground1.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger2.addEventListener("click", function () {
  modalBackground2.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose2.addEventListener("click", function () {
  modalBackground2.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground2.addEventListener("click", function (event) {
  if (event.target === modalBackground2) {
      modalBackground2.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger3.addEventListener("click", function () {
  modalBackground3.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose3.addEventListener("click", function () {
  modalBackground3.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground3.addEventListener("click", function (event) {
  if (event.target === modalBackground3) {
      modalBackground3.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger4.addEventListener("click", function () {
  modalBackground4.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose4.addEventListener("click", function () {
  modalBackground4.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground4.addEventListener("click", function (event) {
  if (event.target === modalBackground4) {
      modalBackground4.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger5.addEventListener("click", function () {
  modalBackground5.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose5.addEventListener("click", function () {
  modalBackground5.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground5.addEventListener("click", function (event) {
  if (event.target === modalBackground5) {
      modalBackground5.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger6.addEventListener("click", function () {
  modalBackground6.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose6.addEventListener("click", function () {
  modalBackground6.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground6.addEventListener("click", function (event) {
  if (event.target === modalBackground6) {
      modalBackground6.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});


modalTrigger7.addEventListener("click", function () {
  modalBackground7.style.display = "block";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalClose7.addEventListener("click", function () {
  modalBackground7.style.display = "none";
  if (windowInnerWidth >= 1366) {
      bodyMargin();
  }
});
modalBackground7.addEventListener("click", function (event) {
  if (event.target === modalBackground7) {
      modalBackground7.style.display = "none";
      if (windowInnerWidth >= 1366) {
          bodyMargin();
      }
  }
});

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;

  fetch('../../public/send_form.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams(new FormData(form)).toString(),
  })
    .then((response) => response.text())
    .then((data) => {
      // console.log(data);
    })
    .catch((error) => {
      console.error('Ошибка при отправке формы:', error);
    });
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
