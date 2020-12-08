//input fields

const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const privacyPolicy = document.getElementById('privacyPolicy');
//form

const form = document.getElementById('contactForm');

//handle form

form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (
        validateFirstName() &&
        validatePhoneNumber() &&
        validateEmail() &&
        validatePrivacyPolicy()
    ) {
        let userInfo = {
            userName: name.value,
            userPhone: phone.value,
            userEmail: email.value,
            userAgreement: true
        }

        fetch('/form-sending', {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((response) => (response.json()))
            .then((response) => {
                console.log(response);
            })
            .catch(function (error) {
                alert(error);
            })
    }
})

//validators

function validateFirstName() {
    if (checkIfEmpty(name)) return;
    if (!checkIfOnlyLetters(name)) return;
    return true;
}

function validateEmail() {
    if (checkIfEmpty(email)) return;
    if (!containsCharacters(email, 1)) return;
    return true;
}

function validatePhoneNumber() {
    if (checkIfEmpty(phone)) return;
    if (!containsCharacters(phone, 2)) return;
    return true;
}

function validatePrivacyPolicy() {
    if (ifPrivacyPolicyChecked(privacyPolicy)) return;
    return true;
}

function setInvalid(field, message) {
    field.class = 'invalid';
    field.nextElementSibling.nextElementSibling.innerHTML = message;
}

function setValid(field) {
    field.class = 'valid';
    field.nextElementSibling.nextElementSibling.innerHTML = '';
}

function checkIfEmpty(field) {
    if (isEmpty(field.value.trim())) {
        setInvalid(field, `<span class="star" >*</span>This field is required`);
        return true;
    } else {
        setValid(field);
        return false;
    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function checkIfOnlyLetters(field) {
    if (/^[a-zA-Z ]+$/.test(field.value)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, `<span class="star" >*</span> ${field.name} must contain only letters`);
        return false;
    }
}

function ifPrivacyPolicyChecked(field) {
    if (field.checked) {
        setValid(field);
        return false;
    } else {
        setInvalid(field, `<span class="star" >*</span>This field is required`);
        return true;
    }
}

function containsCharacters(field, code) {
    let regEx;
    switch (code) {
        case 1:
            // email pattern
            regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return matchWithRegEx(regEx, field, `<span class="star" >*</span>Enter a valid email address`);
        case 2:
            //phone pattern
            regEx = /^\+?3?8?(\([0]{1}[0\d]{2}\)[0\d]{3}[-][0\d]{2}[-][0\d]{2})$/;
            return matchWithRegEx(regEx, field, `<span class="star" >*</span> ${field.name} should be in format +38(0XX)XXX-XX-XX`);
        default:
            return false;
    }
}

function matchWithRegEx(regEx, field, message) {
    if (field.value.match(regEx)) {
        setValid(field);
        return true;
    } else {
        setInvalid(field, message);
        return false;
    }
}




