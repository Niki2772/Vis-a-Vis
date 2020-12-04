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
const item = Vue.component('item', {
    props: ['card'],
    template: '<div class="infoCardWrap">\n' +
        '                            <div class="photoFrameWrap">\n' +
        '                                <div class="photoFrame">\n' +
        '                                    <i class="k-spinner--spin"></i>\n' +
        '                                </div>\n' +
        '                            </div>\n' +
        '                            <h3 class="titleH3">{{card.title}}</h3>\n' +
        '                            <div class="generalInfoDescription">{{card.description}}</div>\n' +
        '                            <ul class="swiperElUl">\n' +
        '                                <li v-for="list in card.list">{{list}}</li>\n' +
        '                            </ul>\n' +
        '                        </div>\n'
})

const items = Vue.component('items', {
    props: ['cards'],
    template: '        <div class="infoCardsContainerWrap">\n' +
        '            <div class="container">\n' +
        '                <ul class="infoCardsContainer">\n' +
        '                    <li v-for="card in shuffle(cards)">\n' +
        '                        <item v-bind:card="card"></item>\n' +
        '                    </li>\n' +
        '                </ul>\n' +
        '            </div>\n' +
        '        </div>\n',
    methods: {
        shuffle: function (array) {
            let currentIndex = array.length, temporaryValue, randomIndex;
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
    }

})

let app = new Vue({
    el: '#app',
    components: {items},
    data: {
        name: 'Niki',
        cards: [
            {
                title: 'Lorem Ipsum is simply dummy text',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting']
            },
            {
                title: 'Lorem  is text',
                description: 'look at its layout.look at its layout.look at its layout.look at its layout.look at its layout.look at its layout.',
                list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting', 'Lorem Ipsum has been the industry\'s ']
            },
            {
                title: 'Ipsum is simply dummy',
                description: 'It is a long established fact It is a long established fact It is a long established fact It is a long established fact ',
                list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But typesetting']
            },
            {
                title: 'Lorem Ipsum is simply dummy text',
                description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But also the leap into electronic typesetting']
            },
            {
                title: 'Lorem Ipsum is simply dummy',
                description: 'It is a long established established established established ',
                list: ['Lorem Ipsum has been the industry\'s ', 'Standard dummy text ever since', 'But typesetting']
            },
        ],

    }
});

new Vue({
    el: '#rangeSlider',
    components: {
        VueSlider: window['vue-slider-component']
    },
    data: function () {
        return {
            value: 2500
        }
    }
})








