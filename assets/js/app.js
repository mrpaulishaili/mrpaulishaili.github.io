// element toggle function
var elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};
// sidebar variables
var sidebar = document.querySelector("[data-sidebar]"), sidebarBtn = document.querySelector("[data-sidebar-btn]"), 
// testimonials variables
testimonialsItem = document.querySelectorAll("[data-testimonials-item]"), modalContainer = document.querySelector("[data-modal-container]"), modalCloseBtn = document.querySelector("[data-modal-close-btn]"), overlay = document.querySelector("[data-overlay]"), 
// modal variable
modalImg = document.querySelector("[data-modal-img]"), modalTitle = document.querySelector("[data-modal-title]"), modalText = document.querySelector("[data-modal-text]"), 
// custom select variables
select = document.querySelector("[data-select]"), selectItems = document.querySelectorAll("[data-select-item]"), selectValue = document.querySelector("[data-selecct-value]"), filterBtn = document.querySelectorAll("[data-filter-btn]");
// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});
// modal toggle function
var testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};
// add click event to all modal items
for (var i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
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
for (var i = 0; i < selectItems.length; i++) {
    selectItems[i].addEventListener("click", function () {
        var selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        elementToggleFunc(select);
        filterFunc(selectedValue);
    });
}
// filter variables
var filterItems = document.querySelectorAll("[data-filter-item]");
var filterFunc = function (selectedValue) {
    for (var i = 0; i < filterItems.length; i++) {
        if (selectedValue === "all") {
            filterItems[i].classList.add("active");
        }
        else if (selectedValue === filterItems[i].dataset.category) {
            filterItems[i].classList.add("active");
        }
        else {
            filterItems[i].classList.remove("active");
        }
    }
};
// add event in all filter button items for large screen
var lastClickedBtn = filterBtn[0];
for (var i = 0; i < filterBtn.length; i++) {
    filterBtn[i].addEventListener("click", function () {
        var selectedValue = this.innerText.toLowerCase();
        selectValue.innerText = this.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        this.classList.add("active");
        lastClickedBtn = this;
    });
}
// contact form variables
var form = document.querySelector("[data-form]");
var formInputs = document.querySelectorAll("[data-form-input]");
var formBtn = document.querySelector("[data-form-btn]");
// add event to all form input field
for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        // check form validation
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        }
        else {
            formBtn.setAttribute("disabled", "");
        }
    });
}
// page navigation variables
var navigationLinks = document.querySelectorAll("[data-nav-link]");
var pages = document.querySelectorAll("[data-page]");
// add event to all nav link
for (var i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (var i_1 = 0; i_1 < pages.length; i_1++) {
            if (this.innerHTML.toLowerCase() === pages[i_1].dataset.page) {
                pages[i_1].classList.add("active");
                navigationLinks[i_1].classList.add("active");
                window.scrollTo(0, 0);
            }
            else {
                pages[i_1].classList.remove("active");
                navigationLinks[i_1].classList.remove("active");
            }
        }
    });
}
