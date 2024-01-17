
getItems()
const searchBox = document.getElementById('search-box')
const searchIcon = document.getElementById('searchIcon')
searchIcon.addEventListener('click', ()=>{
	getSearchItems()
	console.log(searchBox.value);
})



					// ----------------------------- FUNCTION TO GET ALL ITEMS -------------------------------------//




async function getItems(){
try {
const response = await fetch(
	`http://localhost:305/register/explore`)

const data = await response.json()
const userId = localStorage.getItem('id')
const Trial = document.getElementById('Trial');
	Trial.innerHTML = '';
	data.forEach((item)=>{
		const frame = document.createElement("div")
			frame.className = "frame";
			frame.id = item.id;
			frame.value = item
		const NameOfItem = item.itemname
		const NameOfPotter = item.localname
		const itemIda = item.id
		console.log(item);

frame.innerHTML = `
<div class="imageHolder">
	<img class"imageClass" src=${item.images} alt="">
</div>
<div class="tag">
<div class="show">
<span>Item:<p>${NameOfItem.charAt(0).toUpperCase() + NameOfItem.slice(1)}</p></span>
	<span>Category:<p>${item.categoryvalue}</p></span>
	<span>Potter:<p>${NameOfPotter.charAt(0).toUpperCase() + NameOfPotter.slice(1)}</p></span>
	</div>
	<div class="hidden">
	<span>Price: <p>$${item.price}</p></span>
	<div class="frameButtons">
	<button class="cart" onclick="addingToCart(${itemIda}, ${userId})">Add to Cart</button>
	<button class="detailsBtn" onclick="detail('${item.images}','${item.itemname}', '${item.categoryvalue}',${item.price}, ${item.datevalue},'${item.itemdescription}', '${item.suitablefor}')">See Details</button>
		
		</div>
	</div>
	`


	Trial.appendChild(frame);
	function addingToCart(a, b){
	const CartUrl = `http://localhost:305/cart/getCartItem`
	const CartItems = {
		userId: b,
		itemId: a
	}
	postCartItems(CartUrl, CartItems)
}

	})

} catch (error) {
console.log(error);
}
}




					// ----------------------------- FUNCTION TO GET SEARCHED ITEMS -------------------------------------//




async function getSearchItems(){
try {
const response = await fetch(
	`http://localhost:305/register/explore/category/${searchBox.value}`)
	const data = await response.json()
	const userId = localStorage.getItem('id')
	const Trial = document.getElementById('Trial');
		Trial.innerHTML = '';
		data.forEach((item)=>{
			const frame = document.createElement("div")
				frame.className = "frame";
				frame.id = item.id;
				frame.value = item
			const NameOfItem = item.itemname
			const NameOfPotter = item.localname
			const itemIda = item.id


frame.innerHTML = `
	<div class="imageHolder">
		<img class"imageClass" src=${item.images} alt="">
	</div>
	<div class="tag">
	<div class="show">
	<span>Item:<p>${NameOfItem.charAt(0).toUpperCase() + NameOfItem.slice(1)}</p></span>
		<span>Category:<p>${item.categoryvalue}</p></span>
		<span>Potter:<p>${NameOfPotter.charAt(0).toUpperCase() + NameOfPotter.slice(1)}</p></span>
		</div>
		<div class="hidden">
		<span>Price: <p>$${item.price}</p></span>
		<div class="frameButtons">
		<button class="cart" onclick="addingToCart(${itemIda}, ${userId})">Add to Cart</button>
		<button class="detailsBtn" onclick="detail('${item.images}','${item.itemname}',${item.datevalue}, '${item.categoryvalue}', ${item.price},'${item.itemdescription}', '${item.suitablefor}')">See Details</button>
			
			</div>
		</div>
		`
Trial.appendChild(frame);
	})

} catch (error) {
console.log(error);
}
}






function addingToCart(a, b){
const CartUrl = `http://localhost:305/cart/getCartItem`
const CartItems = {
userId: b,
itemId: a
}
console.log(a, b);
postCartItems(CartUrl, CartItems)
}


function detail(a, b, c, d, e, f, g){
const detailsid = document.getElementById('details')
const modal = document.getElementById('modal')

// console.log(cardData.id);
const details = document.createElement("div")
details.className = "details"
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

details.innerHTML = `
<div class="detailsLeftSide">
<div class="detailsImage">
<img src=${a} alt="">

</div>
<div class="detailstext">
<div class="name">
<span>Name:   <p>${b}</p></span>
</div>
<div class="category">
<span>Category:  <p>${c}</p></span>
</div>
<div class="price">
<span>Price:  <p>${d}</p></span>
</div>
<div class="date">
<span>Date:   <p>${e}</p></span>
</div>
</div>
</div>
<div class="detailsRightSide">
<h6>Item Description:</h6>
<div class="textsidearea">${f}</div>
<div class="suitablefor">
<span>Suitable for: <p>${g}</p></span>
</div>
</div>
<button class="closeX">Close</button>
<i class='bx bx-x' style="color: red; font-size: 3vh; display: inline; position: absolute; z-index: 5; align-items: end; justify-self: flex-end; margin-left: 83vh; margin-top: -1vh; cursor: pointer;" id="closeBtn"></i>`


modal.appendChild(details)


const collectionSection = document.getElementById('collectionSection')
details.style.display = "flex"
modal.style.display= "flex"

const closeX = document.querySelectorAll('.closeX')

closeX.forEach((item)=>{item.addEventListener('click', ()=>{
detailsid.style.display = "none"
modal.style.display= "none"
})})
}













					//----------------------------- FUNCTION TO ADD ITEMS INTO CART ------------------------------//


async function postCartItems(url, data) {
try {
const res = await fetch(url, {
	method: "POST",
	headers: {
	"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
});



	const bodydata = await res.json();
	console.log(bodydata);
	console.log(bodydata.message);
	if (bodydata.message == "Success") {
		alert("Item has been added to Cart")
	}else{
		alert("Item already in cart")
	}
	getuserCartItem()


} catch (err) {
	console.error(`Error: ${err}`);
}
}

const currentUserId = localStorage.getItem("id")
console.log(currentUserId);
const AddCart = document.querySelector('.AddCart')












async function getuserCartItem(){
try {
console.log("Get All Items");
const userId = localStorage.getItem('id')
console.log(userId);
const Total = document.getElementById('Total')
const response = await fetch(
`http://localhost:305/cart/getuserCartItem/${userId}`
)
const data = await response.json()
const cartNumber = document.getElementById('cartNumber')
cartNumber.innerHTML = data.length
const CartHolder = document.getElementById('CartHolder');
let totalPrice = 0;
Total.innerHTML = ''
CartHolder.innerHTML = 0;
data.forEach((item)=>{
	const item1 = document.createElement("div")
	item1.className = "item1";
	item1.id = item.id;
	item1.value = item
	const price = Number(item.price);
	totalPrice += price; // Accumulate price
	item1.innerHTML = `
	<div class="itemDescription">
	<div class="ItemCartImage">
	<img src=${item.images} alt="">
	</div>
	<p class="itemName">${item.itemname}</p>
	<p class="itemPrice">${item.price}</p>
	</div>
	<div id="deleteIcon" onclick="deleteItem(${item.id});"><img src="../IMAGES/delete.svg" alt=""></div>
	`
	
	CartHolder.appendChild(item1);
	Total.innerHTML = totalPrice;
	console.log(Total)
})

} catch (error) {

}
}


getuserCartItem()



// FUNCTION TO F=GET ALL CARTS ITEMS


async function getAllCartItems(){
try {
const response = await fetch(
`http://localhost:305/cart/getAllCartItems`
)
console.log(response);
const data = await response.json()
console.log(data);	
console.log(data[0].id);
data.forEach((item)=>{
	const frame = document.createElement("div")
	frame.className = "frame";
	frame.id = item.id;
	frame.value = item
	frame.addEventListener("click",(e)=>checking(e));
	console.log(frame);
frame.innerHTML = `
<div class="Tag">
	<h6 class="tagName">${item.itemname}</h6>
	<p class="tagPrice">${item.categoryvalue}</p>
</div>
`;
	Trial2.appendChild(frame);
})

} catch (error) {

}
}


const logoName = document.getElementById('logoName');
logoName.addEventListener('click', ()=>{
window.location.href = '../HTMLS/trial_index.html'
})


const cartSign = document.getElementById('cartSign');
const cartContainer = document.querySelector('.cartContainer')


cartSign.addEventListener('click', ()=>{

console.log("Working");
cartContainer.classList.toggle('active')
Trial.classList.toggle('active')

})

console.log("reachingijj");

const cartLink = document.querySelector('#cartLink')
cartLink.addEventListener('click', ()=>{

console.log("Working");
cartContainer.classList.toggle('active')
Trial.classList.toggle('active')
searchForm.classList.remove('active')
navbar.classList.remove('active')
Trial.classList.remove('active')


})







//-------------- Delete from Cart--------------//;



async function deleteCartItems(url, data) {
try {
const res = await fetch(url, {
method: "DELETE",
headers: {
"Content-Type": "application/json",

},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(item =>{
console.log(item);
})
getuserCartItem()

} catch (err) {
console.error(`Error: ${err}`);
}
}


function deleteItem(item_Id){
console.log("checking 3");
const DeleteUrl = `http://localhost:305/cart/deleteCartItem`
const user_Id = localStorage.getItem('id')
console.log(item_Id);
const CartItems = {
userId: user_Id,
itemId: item_Id
}
console.log(user_Id);
console.log(item_Id);
console.log(CartItems);
console.log("checking 4");

deleteCartItems(DeleteUrl, CartItems);
console.log(item_Id);

console.log("checking 5");
}
									
					



//----------------------------- FUNCTION TO ADD ITEMS INTO PURCHASE TABLE ------------------------------//




const Checkout = document.getElementById('Checkout')
Checkout.addEventListener('click',()=>{
movePurchasedItems()
deleteAllItem()
cartContainer.style.transform = 'translateX(200vh)'
Trial.style.filter = "blur(0px)"
Trial.style.pointerEvents = "all"

})
			

async function postPurchasedItems(url, data) {
try {
const res = await fetch(url, {
	method: "POST",
	headers: {
	"Content-Type": "application/json",
	},
	body: JSON.stringify(data),
});
const bodydata = await res.json();
console.log(bodydata);
console.log(bodydata.message);
} catch (err) {
	console.error(`Error: ${err}`);
}
}

function addingToPurchaseTable(a, b){
const PurchaseUrl = `http://localhost:305/cart/purchasedTable`
const CartItems = {
	userId: b,
	itemId: a
}
console.log(a, b);
postPurchasedItems(PurchaseUrl, CartItems)
}



async function movePurchasedItems(){
try {
	const userId = localStorage.getItem('id')
	const response = await fetch(
		`http://localhost:305/cart/getuserCartItem/${userId}`
		)
		const data = await response.json()
		console.log(data);
		data.forEach((item)=>{

	console.log(item.id);
	console.log(userId);

	addingToPurchaseTable(item.id, userId)



})

console.log("checking 1");

} catch (error) {

}
}
			
			
			
										
		



let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');


document.querySelector('#menu-btn').onclick = () =>{
searchForm.classList.remove('active')
cartContainer.classList.remove('active')
navbar.classList.toggle('active')
}


window.onscroll = () => {
navbar.classList.remove('active')
searchForm.classList.remove('active')
}




document.querySelector('#search-btn').onclick = () =>{
searchForm.classList.toggle('active')
navbar.classList.remove('active')
}




const token = localStorage.getItem('token')
const localName = localStorage.getItem('username');
const localRole = localStorage.getItem('roles');
// const profileIcon = document.getElementById('profileIcon');
const userbtn  = document.getElementById('user-btn');
// const profileLetter = document.getElementById('profileLetter');
console.log(localName);








//-------------- Delete  All from Cart table--------------//;



async function deleteAllCartItems(url, data) {
try {
const res = await fetch(url, {
method: "DELETE",
headers: {
"Content-Type": "application/json",

},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(item =>{
console.log(item);
})
getuserCartItem()

} catch (err) {
console.error(`Error: ${err}`);
}
}


function deleteAllItem(){
console.log("checking 3 all items");
const DeleteUrl = `http://localhost:305/cart/deleteAllCartItem`
const user_Id = localStorage.getItem('id')
const CartItems = {
userId: user_Id,
}
console.log(user_Id);

deleteAllCartItems(DeleteUrl, CartItems);

}


									
					



















































const signUp = document.getElementById('sign-up');

signUp.addEventListener('click', ()=>{
window.location.href = '../HTMLS/register.html'
})
const login = document.getElementById('login');

login.addEventListener('click', ()=>{
window.location.href = '../HTMLS/login.html'
})



if(!token){
console.log("No token");
profileIcon.style.display = "none";
signUp.style.display = "block"
login.style.display = "block"

} else{
console.log("token");
profileIcon.style.display = "block";
login.style.display = "none"
signUp.style.display = "none"
}

profileIcon.addEventListener('click', ()=>{
window.location.href = `../HTMLS/trial${localRole}.html`
})





// FUNCTION FOR SETTING PROFILE LETTER 


const profileLetter = document.getElementById('profileLetter')
console.log(localName);
profileLetter.innerText = localName.charAt(0).toUpperCase();








window.onscroll = () => {
navbar.classList.remove('active')
searchForm.classList.remove('active')
}




