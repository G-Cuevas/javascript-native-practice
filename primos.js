
document.querySelector('#list').addEventListener('click', function (e) {

    const target = e.target;

    let counter = target.innerText;
    counter = parseInt(counter);
    counter++;

    if (primo(counter)) {
        target.style.backgroundColor = 'white';
    } else {
        target.style.backgroundColor = 'red';
    }

    target.innerText = counter;
});


const primo = (num) => {
    let divisores = 0;

    for (i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }

    if (divisores === 2 || num === 1) {
        console.log(`${num} es primo`)
        return true;
    }

    console.log(`${num} no es primo`)
    return false;
}

