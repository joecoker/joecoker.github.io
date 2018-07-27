let scrollPosition = window.scrollY;

window.onscroll = function addClass() {
    scrollPosition = window.scrollY;

    const header = document.querySelector("header")
    const body = document.querySelector("body")
    console.log(header);

    if (scrollPosition > 48) {
      header.classList.add('header--sticky')
      body.classList.add('is-scrolling')
    }
    else {

      header.classList.remove('header--sticky')
      body.classList.remove('is-scrolling')

    }
};
