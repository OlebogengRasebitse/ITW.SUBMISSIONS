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

