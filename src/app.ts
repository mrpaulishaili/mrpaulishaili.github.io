// element toggle function
const elementToggleFunc = function (elem: HTMLElement) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar: HTMLElement = document.querySelector("[data-sidebar]")!,
  sidebarBtn: HTMLElement = document.querySelector("[data-sidebar-btn]")!,
  // testimonials variables
  testimonialsItem: NodeListOf<HTMLElement> = document.querySelectorAll(
    "[data-testimonials-item]"
  )!,
  modalContainer: HTMLElement = document.querySelector(
    "[data-modal-container]"
  )!,
  modalCloseBtn: HTMLElement = document.querySelector(
    "[data-modal-close-btn]"
  )!,
  overlay: HTMLElement = document.querySelector("[data-overlay]")!,
  // modal variable
  modalImg: HTMLImageElement = document.querySelector("[data-modal-img]")!,
  modalTitle: HTMLElement = document.querySelector("[data-modal-title]")!,
  modalText: HTMLElement = document.querySelector("[data-modal-text]")!,
  // custom select variables
  select: HTMLElement = document.querySelector("[data-select]")!,
  selectItems: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-select-item]")!,
  selectValue: HTMLElement = document.querySelector("[data-selecct-value]")!,
  filterBtn: NodeListOf<HTMLElement> =
    document.querySelectorAll("[data-filter-btn]")!;

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]")!.src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]")!.alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    )!.innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    )!.innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue: string) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form: HTMLInputElement = document.querySelector("[data-form]")!;
const formInputs = document.querySelectorAll("[data-form-input]")!;
const formBtn = document.querySelector("[data-form-btn]")!;

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks: NodeListOf<HTMLElement> =
  document.querySelectorAll("[data-nav-link]");
const pages: NodeListOf<HTMLElement> = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
