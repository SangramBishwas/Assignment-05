const moveBtn = document.getElementById('move-btn')
const whereToMove = document.getElementById('where-to-move');
moveBtn.addEventListener('click', function () {
    whereToMove.scrollIntoView({ behavior: 'smooth' })
});
const seatNumbers = document.getElementsByClassName('seat-number');
let seatCount = 40;
let seatSelect = 0;
const price = 550;
for (const seat of seatNumbers) {
    seat.addEventListener('click', function (event) {
        
        seat.setAttribute('disabled', true);
        //-------------------Color--------------------
        seat.classList.add('bg-lime-500');
        seat.classList.add('text-white');

        //-------------increament/decreament-----------
        seatCount -= 1;
        seatSelect += 1;
        setNumberById('seat-count', seatCount);
        setNumberById('seat-selected', seatSelect);

        //------------------Append Child-------------------
        const selectedTicket = document.getElementById('selected-ticket')
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = seat.innerHTML;
        const td2 = document.createElement('td');
        td2.innerHTML = 'Economy';
        const td3 = document.createElement('td');
        td3.innerHTML = price;
        tr.appendChild(td);
        tr.appendChild(td2);
        tr.appendChild(td3);
        selectedTicket.appendChild(tr, false);

        //-------------------Can't selec more than 4---------------
        if (seatSelect > 4) {
            const alertNotice = document.getElementById('alert-notice');
            alertNotice.classList.remove('hidden');
            const tableHidden = document.getElementById('table-container');
            tableHidden.classList.add('hidden');
        }

        //------------------Show Cupon Field----------------------- 
        const cuponField = document.getElementById('cupon-container');
        cuponField.classList.remove('hidden');

        //------------------Total/Grand total Price------------------
        sumOfTicketPrice('total-price', price);
        sumOfTicketPrice('grand-total', price);

        //---------------Next Button-----------
        const nextButton = document.getElementById('next-btn');
        const inputNumber = document.getElementById('input-number');
        inputNumber.addEventListener('input', function () {
            if (inputNumber.value !== '') {
                nextButton.disabled = false;
            }
        })
        const headerContainer = document.getElementById('header-container');
        const mainContainer = document.getElementById('main-container');
        const successContainer = document.getElementById('success-container');
        nextButton.addEventListener('click', function () {
            headerContainer.classList.add('hidden');
            mainContainer.classList.add('hidden');
            successContainer.classList.remove('hidden');
        })

    })
}
//--------------cupon code--------------------
// const applyBtn = document.getElementById('apply-btn');
// const inputCupon = document.getElementById('input-cupon');
// applyBtn.addEventListener('click', function () {
//     const cuponCode = inputCupon.value;
//     const cuponContainer = document.getElementById('cupon-container')
//     if (cuponCode === 'NEW15') {
//         cuponContainer.classList.add('hidden');
//     }
// })
//---------Set Number Value---------------
function setNumberById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerHTML = value;
}
//-------------for sum of ticket-------------
function sumOfTicketPrice(elementId, value) {
    const priceText = document.getElementById(elementId).innerHTML;
    const priceNum = parseInt(priceText);
    const total = priceNum + value;
    setNumberById(elementId, total);
}
//-----------------for cupon------------------
function discountPrice() {
    const priceText = document.getElementById('total-price').innerHTML;
    let GrandTotalPrice = parseInt(priceText);
    setNumberById('grand-total', GrandTotalPrice);
    if (document.getElementById('input-cupon').value === 'NEW15') {
        setNumberById('grand-total', GrandTotalPrice -= GrandTotalPrice * (15 / 100));
        document.getElementById('cupon-container').classList.add('hidden');
    } else if (document.getElementById('input-cupon').value === 'Couple 20') {
        setNumberById('grand-total', GrandTotalPrice -= GrandTotalPrice * (20 / 100));
        document.getElementById('cupon-container').classList.add('hidden');
    } else {
        alert('Invaild Cupon Code');
    }
}
// //---------------Next Button-----------
// const nextButton = document.getElementById('next-btn');
// const inputNumber = document.getElementById('input-number');
// inputNumber.addEventListener('input', function() {
// if(inputNumber.value !== ''){
//     nextButton.disabled = false;
// }
// })
// const headerContainer = document.getElementById('header-container');
// const mainContainer = document.getElementById('main-container');
// const successContainer = document.getElementById('success-container');
// nextButton.addEventListener('click', function(){
//     headerContainer.classList.add('hidden');
//     mainContainer.classList.add('hidden');
//     successContainer.classList.remove('hidden');
// })