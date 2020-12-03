let swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 40,
    slidesPerGroup: 3,
    loop: true,
    speed: 500,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


//Vue

let vm = new Vue({
    el: '#app',
    data: {
        cards: [
            {title: 'Lorem Ipsum is simply dummy text', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting']},
            {title: 'Lorem Ipsum is text', description: 'look at its layout.look at its layout.look at its layout.look at its layout.look at its layout.look at its layout.', list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting', 'Lorem Ipsum has been the industry\'s ']},
            {title: 'Lorem Ipsum is simply dummy', description: 'It is a long established fact It is a long established fact It is a long established fact It is a long established fact ', list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But typesetting']},
            {title: 'Lorem Ipsum is simply dummy text', description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting']},
            {title: 'Lorem Ipsum is simply dummy', description: 'It is a long established established established established ', list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But typesetting']},
        ],
    }
})


