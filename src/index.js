/*
1) (This has a DEMO solution.)
Create a variable that stores the name of your cafe.
Print out a greeting such as "Welcome to Technigo Cafe! What would you like to order today?"
Where Technigo Cafe is replaced by the name of your cafe that is stored in the variable.
*/
const cafeName = "Cafe Mango";
document.getElementById("app").textContent = `Welcome to ${cafeName}! What would you like to order today?`;

/*
2)
Create a variable that stores the price of a coffee.
Create a variable that stores how many coffees the customer wants.
Print out the total price such as "There you go, that'll be 10 euros"
Where 10 is replaced by the calculation of the total price.
*/

/*Integer*/
const price = 25;
const order = 2;
let totalPrice = price * order
document.getElementById("app").textContent = `There you go, that'll be ${totalPrice} euros`;

/*
3)
Create a variable that stores a boolean.
Print out "You said this coffee is the best, that was actually true"
Where true is replaced by your varible
*/
/*Boolean*/
const isAwsome = true
document.getElementById("app").textContent = `You said this coffee is the best, that was actually ${isAwsome}`;
/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
Assign it a new value.
Print it out. => This should give you the new value.
*/
/*Integer*/
let numberOfGuests = 18;
document.getElementById("app").textContent = `We have ${numberOfGuests} guests`;
numberOfGuests = 30;
document.getElementById("app").textContent = `We have ${numberOfGuests} guests`;

/*
5)
Create a variable called maxGuests, that shows us how many guests are allowed in the cafe.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you an error because it shouldn't be able to be changed.
*/
const maxGuests = 45;
document.getElementById("app").textContent = `Number of guests allowed in the Cafe = ${maxGuests}`;
maxGuests = 50;
document.getElementById("app").textContent = `Number of guests allowed in the Cafe = ${maxGuests}`;
/* This error makes everything below not show*/
/*
6)
Create a variable that stores a string.
Print out that string in only UPPERCASE letters.
*/
const message = "Kaffe";
document.getElementById("app").textContent = message.toUpperCase();
/*
7)
Print out the same string in only lowercase letters.
*/
const nyttOrd = "Kaffe";
document.getElementById("app").textContent = nyttOrd.toLowerCase();
/*
8) **BONUS**
Print out the string "Today we have a special summer deal!". 
Then figure out a way to replace the word "summer" in the string with the word "winter"
Should give you => "Today we have a special winter deal!"
(check for a specific string method...)
*/
const deal = "Today we have a special summer deal!";
document.getElementById("app").textContent = deal;

const winterDeal = deal.replace("summer", "winter");
document.getElementById("app").textContent = winterDeal;