document.addEventListener('DOMContentLoaded', function() {
    let modal = document.querySelector('.modal-container');
    let closeButton = document.querySelector('.close');
    let modalTriggers = document.querySelectorAll('[data-trigger]');
    let isModalOpen = false;
    let pageYOffset = 0;

    let openModal = function() {
        pageYOffset = window.pageYOffset;
        modal.classList.add('is-open');
        isModalOpen = true;
    }

    let closeModal = function() {
        modal.classList.remove('is-open');
        isModalOpen = false;
      }

    let onScroll = function(e) {
        if (isModalOpen) {
        e.preventDefault();
        window.scrollTo(0, pageYOffset);
        }
    }

    let openModal = function() {
        modal.classList.add('is-open');
    }

    let closeModal = function () {
        modal.classList.remove('is-open')
    }

    modalTriggers.forEach(function(item) {
        item.addEventListener('click', openModal)
    })

    closeButton.addEventListener('click', closeModal)

//    let xhr = new XMLHttpRequest();
//
//    xhr.addEventListener('load', function (event) {
//        console.log(event);
//    }, false)
//
//    xhr.open('GET', 'https://stepik.org/certificate/98b8ecf04ebb15a6fdbbf0bd3dd74b2bb955010a.png?resolution=low', true)
//    xhr.send()

//    xhr.open('get', 'https://stepik.org/certificate/98b8ecf04ebb15a6fdbbf0bd3dd74b2bb955010a.png?resolution=low')
//
//    xhr.onreadystatechange = function () {
//        if (xhr.readyState === 4) {
//            console.log(xhr.responseText);
//    }};
//
//    xhr.send();

//    fetch('https://stepik.org/cert/1926633', {
//        method: 'GET',
//        headers: {
//            'Accept': 'application/json',
//            'Access-Control-Allow-Origin': 'https://chimchimster.github.io'
//        }
//    })

//    .then(response => response.text())
//    .then(text => console.log(text))
});