const FREE_WARNING =('Free shipping only applies to single customer orders');
const BANNED_WARNING = ('Unfortunately we do not ship to your country of residence');

const customers = ('1');
const Location = ('RSA');


let shipping; 
if (Location === 'RSA' ) {
   shipping = 400;
}
else if (Location === 'NAM' ) {
   shipping = 600;
}
else if (location === 'NK') {
   shipping = null;
console.log(BANNED_WARNING); 

}

else {shipping = 800;}



let currency; 
if (Location === 'RSA' ) {
   currency = R;
}
else if (Location === 'NAM' ) {
   currency = $;
}
else if (Location === 'NK') {
   currency = $;
}


else {shipping = 800;}


const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * 0;
const batteries = 35 * 2;
const pens = 5 *0 ;


const subtotal = (shoes + toys + shirts + batteries + pens);

if (subtotal >= 1000 && customers === 1) {
   if (location === 'RSA' || location === 'NAM'){
      shipping = 0;
   }
   else {
      console.log(FREE_WARNING);
   }
}

if (shipping === 0 && customers !== 1) {
   console.log(FREE_WARNING);
}

if (shipping === null) {
   console.log('Price:', currency, subtotal + shipping)
   
}
console.log('Price:', currency, subtotal + shipping)

