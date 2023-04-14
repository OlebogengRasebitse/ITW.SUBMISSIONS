// script.js

//Order 1
const dataKeys1 = document.querySelector('body > section:nth-child(3) > dl');

 const biscuits1 = document.querySelector('body > section:nth-child(3) > dl > div.biscuits > dd')
 biscuits1.innerText = dataKeys1.dataset.biscuits;

 const donuts1 = document.querySelector('body > section:nth-child(3) > dl > div.donuts > dd')
 donuts1.innerText = dataKeys1.dataset.donuts

 const pancakes1 = document.querySelector('body > section:nth-child(3) > dl > div.pancakes > dd')
 pancakes1.innerText = dataKeys1.dataset.donuts

 const status1 = document.querySelector('body > section:nth-child(3) > dl > div.status > dd')

 // Set the text of the element to "Pending"
 status1.innerText = dataKeys1.dataset.delivered === 'true' ? 'Delivered' : 'Pending'


 //Order 2
 const dataKeys2 = document.querySelector('body > section:nth-child(4) > dl');
  const biscuits2 = document.querySelector('body > section:nth-child(4) > dl > div.biscuits > dd')
  biscuits2.innerText = dataKeys2.dataset.biscuits

  const donuts2 = document.querySelector('body > section:nth-child(4) > dl > div.donuts > dd')
  donuts2.innerText = dataKeys2.dataset.donuts

  const pancakes2 = document.querySelector('body > section:nth-child(4) > dl > div.pancakes > dd')
  pancakes2.innerText = dataKeys2.dataset.pancakes

  const status2 = document.querySelector('body > section:nth-child(4) > dl > div.status > dd')
  status2.innerText = dataKeys2.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

//Oder3
const dataKeys3 = document.querySelector('body > section:nth-child(5) > dl')
  const biscuits3 = document.querySelector('body > section:nth-child(5) > dl > div.biscuits > dd')
  biscuits3.innerText = dataKeys3.dataset.biscuits

  const donuts3 = document.querySelector('body > section:nth-child(5) > dl > div.donuts > dd')
  donuts3.innerText = dataKeys3.dataset.donuts

  const pancakes3 = document.querySelector('body > section:nth-child(5) > dl > div.pancakes > dd')
  pancakes3.innerText = dataKeys3.dataset.pancakes

  const status3 = document.querySelector('body > section:nth-child(5) > dl > div.status > dd')
  status3.innerText = dataKeys3.dataset.delivered === 'true' ? 'Delivered' : 'Pending'

 

