// const hiddenDiv = document.getElementById('hiddenDiv');
const loginButton = document.getElementById('loginButton');
const body = document.getElementById('bodyy');
const show = document.getElementById('lekeaa');
const hide = document.getElementById('chupa');
const classes = document.getElementById('aclass');
const isa = document.getElementById('isa');
const invalid = document.getElementById('invalid');




loginButton.addEventListener('click', () => {
    const correctPassword = /^01fe24bcs\d{3}$/; // Replace with the actual password
    const userPassword = document.getElementById("username").value.replace(/\s+/g, '');
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;

    if ((!correctPassword.test(userPassword))) {
        console.log('cm');
        invalid.classList.remove('see');
    }
    else if (day === 'Day') {
        invalid.classList.remove('see');
    }
    else if (month ==='month') {
        invalid.classList.remove('see');
    }
    else if (year === 'year') {
        invalid.classList.remove('see');
    }
    else {
        show.classList.remove('see');
        show.classList.remove('lastx');
        body.classList.remove('givecolour');
        hide.classList.add('see');
    }
});


isa.addEventListener('click', () => {
    if (classes.classList.contains('lol')) {
        classes.classList.remove('lol');
    }
    else {
        classes.classList.add('lol');
    }
});