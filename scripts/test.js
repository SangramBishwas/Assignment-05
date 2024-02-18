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
        //-------------Color------------------
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
        selectedTicket.appendChild(tr);
        //------------------Total/Grand total Price------------------
        sumOfTicketPrice('total-price', price);
        sumOfTicketPrice('grand-total', price);

    })
}

function setNumberById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerHTML = value;
}

function sumOfTicketPrice(elementId, value) {
    const priceText = document.getElementById(elementId).innerHTML;
    const priceNum = parseInt(priceText);
    const total = priceNum + value;
    setNumberById(elementId, total);
}