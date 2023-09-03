document.querySelector('#list').addEventListener('click', function (e) {

    const target = e.target;

    let counter = target.innerText;
    counter = parseInt(counter);
    target.innerText = counter + 1;

    let newElement = target.cloneNode(true);
    newElement.innerText = counter;

    document.querySelector('#list').appendChild(newElement);
});