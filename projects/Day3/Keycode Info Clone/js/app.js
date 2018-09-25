const keycode = document.getElementById('keycode');
const eventKey = document.querySelector('.event-key')
const eventWhich = document.querySelector('.event-which')
const eventCode = document.querySelector('.event-code')

window.addEventListener('keydown', function(e) {
    eventKey.textContent = e.key;
    eventWhich.textContent = e.which;
    eventCode.textContent = e.code;

    console.log(e.key);
    console.log(e.code);
    console.log(e.which);
});