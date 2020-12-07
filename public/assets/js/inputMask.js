const element = document.getElementById('phone');
const maskOptions = {
    mask: '+{38}(000)000-00-00',
    lazy: true
};
const mask = IMask(element, maskOptions);