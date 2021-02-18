//JS for navbar movement
window.addEventListener('scroll', function () {
    var div = document.querySelector('div');
    div.classList.toggle('sticky', window.scrollY > 0);
});

var cartItems = JSON.parse(localStorage.getItem('items'));
var table = document.getElementById('cart-table');



for (let index = 0; index < cartItems.length; index++) {
    var tableRow = document.createElement('tr');
    var img = document.createElement('img');
    img.setAttribute('src', cartItems[index].img);
    for (let j = 0; j < 4; j++) {
        var qty = 0;
        if (j === 0) {
            var par = document.createElement('p');
            par.textContent = cartItems[index].name;
            var tableData = document.createElement('td');
            tableRow.appendChild(tableData);
            tableData.appendChild(img);
            tableData.appendChild(par);
            table.appendChild(tableRow);
        } else if (j === 1) {
            var tableData = document.createElement('td');
            var par = document.createElement('p');
            par.textContent = `${cartItems[index].price} JD`;
            tableData.appendChild(par);
            tableRow.appendChild(tableData);
        } else if (j === 2) {
            var inputQuantity = document.createElement('input');
            inputQuantity.setAttribute('type', 'number');
            inputQuantity.setAttribute('min', '0');
            inputQuantity.setAttribute('class', cartItems[index].name);
            var tableData = document.createElement('td');
            tableData.appendChild(inputQuantity);
            tableRow.appendChild(tableData);
        }
    }
}
var lastValue = 0;
var lastValueArray = [];
var totalButton = document.getElementById('total-price');
var inputField = [];
for (let index = 0; index < cartItems.length; index++) {
    inputField.push(document.getElementsByClassName(cartItems[index].name)[0]);
    console.log(document.getElementsByClassName(cartItems[index].name)[0]);
}
totalButton.addEventListener('click', function (event) {
    for (let index = 0; index < inputField.length; index++) {
        inputField[index].addEventListener('change', function (event) {
            console.log(event.target.value);
            lastValue = event.target.value;
            lastValueArray.push(lastValue);
        });
        localStorage.setItem('value', lastValueArray);
    }

});
// var inputField = document.getElementsByTagName('input');






// function quantity(event) {
//     var number = event.target.value;
//     total += number;

// }
