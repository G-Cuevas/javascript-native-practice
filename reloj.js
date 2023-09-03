let clock = 0
let interval = 1000
let next = true
let working = false
let timeOut;

document.querySelector('#start').addEventListener('click', function (e) {
    if (!working) {
        working = true
        timeOut = setInterval(ticktock, interval)
    }
});

document.querySelector('#stop').addEventListener('click', function (e) {
    working = false
    clearInterval(timeOut)
});

document.querySelector('#reset').addEventListener('click', function (e) {
    clearInterval(timeOut)
    document.querySelector('#clock').innerHTML = 0
    clock = 0
    timeOut = setInterval(ticktock, interval)
});

const ticktock = () => {
    console.log('ticktock')
    clock++
    document.querySelector('#clock').innerHTML = clock
    next = true
}

