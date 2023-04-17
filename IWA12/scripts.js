// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//Variables
const statusE = document.querySelectorAll('.status');
const reserveButton = document.querySelectorAll('.reserve');
const checkoutButton = document.querySelectorAll('.checkout');
const checkinButton = document.querySelectorAll('.checkin');

//Update each book's elements based on its status
statusE.forEach((statusE, index) => {
    const status = statusE.textContent;
    statusE.style.color = STATUS_MAP[status].color;
    reserveButton[index].disabled = !STATUS_MAP[status].canReserve;
    checkoutButton[index].disabled = !STATUS_MAP[status].canCheckout;
    checkinButton[index].disabled = !STATUS_MAP[status].canCheckIn;

    reserveButton[index].style.filter = 'grayscale(100%)';
    checkoutButton[index].style.filter = 'grayscale(100%)';
    checkinButton[index].style.filter = 'grayscale(100%)';
});


document.querySelector("#book2 .reserve").disabled = true;
document.querySelector("#book2 .checkout").disabled = false;
document.querySelector("#book2 .checkin").disabled = true;





//Buttons 1
// const status1 = document.querySelector ('#book1 .status')
//  const reserve1 = document.querySelector('#book1 .reserve')
//  const checkout1 = document.querySelector('#book1 .checkout')
//  const checkin1 = document.querySelector('#book1 .checkin')


// //Buttons 2
//  const status2 = document.querySelector('#book2 .status')
//  const reserve2 = document.querySelector('#book2 .reserve')
// const checkout2 = document.querySelector('#book2 .checkout')
//  const checkin2 = document.querySelector('#book2 .checkin')

//  //Buttons 3
// const status3 = document.querySelector('#book3 .status')
// const reserve3 = document.querySelector('#book3 .reserve')
// const checkout3 = document.querySelector('#book3 .checkout')
// const checkin3 = document.querySelector('#book3 .checkin')

// //Overdue
//  checkin1.style.color = '';
//  status1.style.color = 'red';
//  document.querySelector("#book1 .reserve").disabled = true
//  document.querySelector("#book1 .checkout").disabled = true
//  document.querySelector("#book1 .checkin").disabled = false

// //Reserved
//  checkin2.style.color = '';
//  status2.style.color = 'blue'
//  document.querySelector("#book2 .reserve").disabled = true;
//  document.querySelector("#book2 .checkout").disabled =  false ;
//  document.querySelector("#book2 .checkin").disabled = true;

// //Shelf
//  checkin3.style.color = '';
//  status3.style.color = 'green';
//  document.querySelector("#book3 .reserve").disabled = false;
//  document.querySelector("#book3 .checkout").disabled = false;
//  document.querySelector("#book3 .checkin").disabled = true;

