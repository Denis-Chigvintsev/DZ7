let burger_button_open = document.getElementById("1");
let burger_window = document.getElementById("101");
let burger_button_close = document.getElementById("102");

burger_window_open = () => {
  burger_window.classList.remove("close");
  burger_window.classList.add("open");
};

burger_window_close = () => {
  burger_window.classList.remove("open");
  burger_window.classList.add("close");
};

burger_button_open.addEventListener("click", burger_window_open);
burger_button_close.addEventListener("click", burger_window_close);
