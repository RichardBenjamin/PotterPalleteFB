// OPEN & CLOSE CART
const cartIcon = document.querySelector("#cart-icon");
const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");

cartIcon.addEventListener("click", () => {
    console.log("checking");
  cart.classList.add("active");

});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});
	

    

    
    // -------------------------------------Variables--------------------------- //

	const email = document.getElementById('email')
	const Role = document.getElementById('role')
	const username = document.querySelector("#full_name");
	const localName = localStorage.getItem("username")
	const localEmail = localStorage.getItem("email")
	const localRole = localStorage.getItem("roles")
	const id = localStorage.getItem('id')
	const personalInformation = document.getElementById('personalInformation');
	const MyPurchases = document.getElementById('MyPurchases');
	const Myuploads = document.getElementById('Myuploads')
	const uploadItem = document.getElementById('uploadItem')
	const MyOrders = document.getElementById('MyOrders');
	const logout = document.getElementById('Logout');
	const personalInformationSection = document.querySelector('.personalInformation')
    const showPasswordBtn = document.querySelector(".clickHere")
    const showAccountLink = document.querySelector(".clickHereA")
	const passwordSection = document.querySelector('.passwordSection')
	const purchasedSection = document.querySelector('.purchasedSection')
	const MyUploadsSection = document.querySelector(".MyUploadsSection")
	const orderSection = document.querySelector('.orderSection')
	const uploadSection = document.querySelector(".uploadSection")
    const emailAddress = document.getElementById('emailAddress')
	const UpdateProfileBtn = document.getElementById('UpdateProfileBtn')
	const UpdatePasswordBtn = document.getElementById('UpdatePasswordBtn')
    const passwordForm = document.querySelector('.passwordForm')




	// const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');
	// const menuBar = document.querySelector('#content nav .bx.bx-menu');
	const Email = document.getElementById('Email')
	const Username = document.getElementById('Username')
	const usernameErrorMessage = document.querySelector('#usernameErrorMessage');
	const emailErrorMessage = document.querySelector('#emailErrorMessage')
	const password3 = document.querySelector('#password3')
	const passwordErrorMessage1 = document.querySelector('#passwordErrorMessage1')
	const passwordErrorMessage2 = document.querySelector('#passwordErrorMessage2')
	const passwordErrorMessage3 = document.querySelector('#passwordErrorMessage3')
	const emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;

	const roles = localStorage.getItem('roles')
	const baseURL = "localhost:305/register/update/";






								// --------------------------------------Assignment----------------------------------- //

	email.value = localEmail
	username.value = localName
	Role.innerHTML = localRole
	email.innerHTML = localEmail
	Email.value = localEmail
	Username.value = localName
	username.innerHTML = localName.charAt(0).toUpperCase() + localName.slice(1)






								// ---------------------------------------------Clicks----------------------------------------- //



showAccountLink.addEventListener('click', ()=>{
		showProfile()
	})

personalInformation.addEventListener('click', ()=>{
		showProfile()
	})

    showPasswordBtn.addEventListener('click', ()=>{
		showPassword()
	})


    MyPurchases.addEventListener('click', ()=>{
		showPurchases()
	})

	Myuploads.addEventListener('click', ()=>{
		showMyuploads()
	})

	uploadItem.addEventListener('click', ()=>{
		showuploadSection()
	})

	MyOrders.addEventListener('click', ()=>{
		showorderSection()
	})


	logout.addEventListener('click',()=>{
		Logout()
	})


					// ---------------------------- FUNCTION TO UPDATE PASSWORD FORM --------------------------------//
	
					async function updatePasswordForm(){
						const password1 = document.querySelector('#password1')
						const password2 = document.querySelector('#password2')

							if (
								passwordValidation1()&&
								passwordValidation2()&&
								confirmPasswordValidation()
							) 
							{
								let userData = {
								password: password1.value.trim(),
								password2: password2.value.trim(),
								};

								updatePassword(`http://localhost:305/register/changepassword/${id}`, userData);
							}
					}


					UpdatePasswordBtn.addEventListener('click', (e)=>{
                        console.log("password");
						e.preventDefault()
						updatePasswordForm()
					})



				// ---------------------------- FUNCTION TO UPDATE PROFILE --------------------------------//
						UpdateProfileBtn.addEventListener('click',(e)=>{
							if (		
							nameValidation()&&
							emailValidation()
							) {
								e.preventDefault()
								updateForm() 
							}
						})



	const logoName = document.getElementById('logoName');
logoName.addEventListener('click', ()=>{
    window.location.href = '../HTMLS/index2.html'
})

getuserCartItem()
// -----------------------------------------Functions--------------------------------//


function showProfile(){
    passwordSection.style.display = 'none';
    purchasedSection.style.display = 'none';
    MyUploadsSection.style.display = 'none';
	uploadSection.style.display = 'none';
	orderSection.style.display = 'none';
    personalInformationSection.style.display = 'block';
	}
	
	function showPassword(){
        personalInformationSection.style.display = 'none';
        purchasedSection.style.display = 'none';
        MyUploadsSection.style.display = 'none';
		orderSection.style.display = 'none';
		uploadSection.style.display = 'none'
        passwordSection.style.display = 'block';
	}
	
	function showPurchases(){
        personalInformationSection.style.display = 'none';
        passwordSection.style.display = 'none';
		orderSection.style.display = 'none';
        MyUploadsSection.style.display = 'none';
		uploadSection.style.display = 'none'
        purchasedSection.style.display = 'block';
	}
	function showMyuploads(){
        personalInformationSection.style.display = 'none';
        passwordSection.style.display = 'none';
		orderSection.style.display = 'none';
        purchasedSection.style.display = 'none';
		uploadSection.style.display = 'none'
        MyUploadsSection.style.display = 'block';
	}

	function showuploadSection(){
        personalInformationSection.style.display = 'none';
        passwordSection.style.display = 'none';
		orderSection.style.display = 'none';
        purchasedSection.style.display = 'none';
        MyUploadsSection.style.display = 'none';
		uploadSection.style.display = 'flex'
	}

	function showorderSection(){
        personalInformationSection.style.display = 'none';
        passwordSection.style.display = 'none';
        purchasedSection.style.display = 'none';
        MyUploadsSection.style.display = 'none';
		uploadSection.style.display = 'none'
		orderSection.style.display = 'block';
	}

	function Logout(){
		localStorage.removeItem("email")
		localStorage.removeItem("roles")
		localStorage.removeItem("username")
		localStorage.removeItem("firstname")
		localStorage.removeItem("lastname")
		localStorage.removeItem("phone")
		localStorage.removeItem("token")
		localStorage.removeItem("id")
		localStorage.removeItem("price")
		localStorage.removeItem("token")
		window.location.href = "../HTMLS/index2.html";
	}

	function hideMenuBar(){
		sidebar.classList.toggle('hide');
		if (texts.style.marginLeft == '4rem') {
			texts.style.marginLeft = '0rem';
		} else{
			texts.style.marginLeft = '4rem';
		}
	}

	// allSideMenu.forEach(item=> {
	// 	const li = item.parentElement;

	// 	item.addEventListener('click', function () {
	// 		allSideMenu.forEach(i=> {
	// 			i.parentElement.classList.remove('active');
	// 		})
	// 		li.classList.add('active');
	// 	})
	// });
	
	
	
	// ------------------------------------------ BIG FUNCTIONS -----------------------------------//
	
	async function updateForm(){
		const Username = document.querySelector('#Username')
		const Email = document.querySelector('#Email')

		{
				let userData = {
					name: Username.value.trim(),
					email: Email.value
				};
				updateData(`http://localhost:305/register/updateprofile2/${id}`, userData);
				}

			}

	async function updateData(url, data) {
		try {
			const res = await fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			});

			const bodydata = await res.json();
			console.log(bodydata);
			
			result = bodydata.data;
			localStorage.setItem("username", result.name);
			localStorage.setItem("email", result.email);
			window.location.href = "../HTMLS/trial_dashboard.html" 

		} catch (err) {
			console.error(`Error: ${err}`);
			}
	}

	

	async function updatePassword(url, data) {
		try {
			const res = await fetch(url, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
			});

			const bodydata = await res.json();
			console.log(bodydata);
			if (bodydata.message == "Invalid") {
			console.log("invalid password");
			passwordErrorMessage1.innerText = "Enter your correct password"
			}
			
		} catch (err) {
			console.error(`Error: ${err}`);
			}
		}


		
		
		

		
		// --------------------------------Logs----------------------------------------- //

	// console.log("localname-",localName);
	// console.log("localEmail-",localEmail);
	// console.log("LocalRole-",localRole);
	// console.log("LocalFirstName-",localFirstName);
	// console.log("LocalLastName-",localLastName);
	// console.log("LocalPhone-",localPhone)
	// console.log("roles-",roles);
	// console.log("Localid-",id);



	



function nameValidation(){
    if (Username.value === '') {
        usernameErrorMessage.innerText = 'Please enter your username';
        username.classList.add('error');
    }   else if (Username.value.trim().length < 3) {
        usernameErrorMessage.innerText = 'Username must be at least 3 characters';
        Username.classList.add('error');
    }   else {
        usernameErrorMessage.innerText = '';
        return true;
    }
}
// Username.addEventListener("input", nameValidation);


function firstnameValidation(){
    if (Firstname.value === '') {
        firstnameErrorMessage.innerText = 'Please enter your firstname';
        Firstname.classList.add('error');
    }   else if (Firstname.value.trim().length < 3) {
        firstnameErrorMessage.innerText = 'Firstname must be at least 3 characters';
        Firstname.classList.add('error');
    }   else {
		firstnameErrorMessage.innerText = '';
        return true;
    }
}
// Firstname.addEventListener("input", firstnameValidation);


function lastnameValidation(){
    if (Lastname.value === '') {
		lastnameErrorMessage.innerText = 'Please enter your lastname';
        Lastname.classList.add('error');
    }   else if (Lastname.value.trim().length < 3) {
        lastnameErrorMessage.innerText = 'Lastname must be at least 3 characters';
        Lastname.classList.add('error');
    }   else {
        lastnameErrorMessage.innerText = '';
        return true;
    }
}
// Lastname.addEventListener("input", lastnameValidation);


function PhoneValidation(){
	if (Phone.value === '') {
        phoneErrorMessage.innerText = 'Please enter your phone number';
        Phone.classList.add('error');
    }   else if (Phone.value != NaN) {
        phoneErrorMessage.innerText = 'Phonenumber must be in numbers';
        Phone.classList.add('error');
    }   else if (Phone.value.trim().length < 11) {
        phoneErrorMessage.innerText = 'Phonenumber must be at least 11 characters';
        Phone.classList.add('error');
    }   else {
        phoneErrorMessage.innerText = '';
        return true;
    }
}
// Phone.addEventListener("input", PhoneValidation);


function emailValidation(){
    if (Email.value === '') {
        emailErrorMessage.innerText = 'Please enter your email';
        Email.classList.add('error');
    }   else if (Email.value.trim().length < 3) {
        emailErrorMessage.innerText = 'Name must be at least 3 characters';
        Email.classList.add('error');
    }       else if (!Email.value.match(emailPattern)){
        emailErrorMessage.innerText = "Please enter a valid email.";
        emailErrorMessage.classList.add('error');
    }   else {
		emailErrorMessage.innerText = '';
        return true;
    }
}
// Email.addEventListener("input", emailValidation);

const password1 = document.querySelector('#password1')
const password2 = document.querySelector('#password2')
function passwordValidation1(){
    if (password1.value === '') {
		passwordErrorMessage1.innerText = 'Please enter your Password'
        password1.classList.add('error');
    }   else if (password1.value.trim().length < 8) {
		passwordErrorMessage1.innerText = 'Password must be at least 8 characters';
    }   else if (!password1.value.match(passwordPattern)){
		passwordErrorMessage1.innerText = "Please enter at least 8 character with number, symbol, small and capital letter.";
        passwordErrorMessage1.classList.add('error');
    }   else {
		passwordErrorMessage1.innerText = '';
        return true;
    }
}

// password1.addEventListener("input", passwordValidation1);

function passwordValidation2(){
    if (password2.value === '') {
        passwordErrorMessage2.innerText = 'Please enter your Password'
        password2.classList.add('error');
    }   else if (password2.value.trim().length < 8) {
		passwordErrorMessage2.innerText = 'Password must be at least 8 characters';
    }   else if (!password2.value.match(passwordPattern)){
        passwordErrorMessage2.innerText = "Please enter at least 8 character with number, symbol, small and capital letter.";
        passwordErrorMessage2.classList.add('error');
    }   else {
		passwordErrorMessage2.innerText = '';
        return true;
    }
}

// password2.addEventListener("input", passwordValidation2);

function confirmPasswordValidation(){
    if  (password3.value !== password2.value) {
		passwordErrorMessage3.innerText = "Passwords don't match";
        passwordErrorMessage3.classList.add('error')
    }   else {
        passwordErrorMessage3.innerText = '';
        return true
    }
}

// password3.addEventListener("input", confirmPasswordValidation);



						
						








// Add to Cart

async function getuserPurchasedItem(){
	try {
        console.log("Get purchased Items");
		const userId = localStorage.getItem('id')
		const response = await fetch(
            `http://localhost:305/cart/getuserPurchasedItem/${userId}`
            )
			const data = await response.json()
			// console.log(data);	
			const Trial = document.getElementById('Trial');
			const Purchased_collection = document.querySelector('.collection');
			Purchased_collection.innerHTML = '';
			data.forEach((item)=>{
				const frame = document.createElement("div")
				frame.className = "frame";
				frame.id = item.id;
				frame.value = item
				frame.innerHTML = `
                <div class="imageHolder">
                <img src=${item.images} alt="">
            </div>
            <div class="tag">
                <div class="show">
                    <span>Name: <p>${item.itemname}</p></span>
                    <span>Category: <p>${item.price}</p></span>
                    <span>Price: <p>${item.price}</p></span>
                </div>
                <div class="hidden">
                    <div class="frameButtons">
                    <button class="deleteBtn" onclick="deletePurchaseItem(${item.id});">Delete</button>
                    </div>
                </div>
            </div>
				`


				Purchased_collection.appendChild(frame);
			})


        //     <div class="imageHolder">
        //     <img src=${item.images} alt="">
        // </div>
        // <div class="tag">
        //     <div class="show">
        //         <span>Name: <p>${item.itemname}</p></span>
        //         <span>Category: <p>${item.price}</p></span>
        //         <span>Price: <p>${item.price}</p></span>
        //     </div>
        //     <div class="hidden">
        //         <div class="frameButtons">
        //         <button class="deleteBtn" onclick="deleteItem(${item.id});">Delete</button>
        //         </div>
        //     </div>
        // </div>

	
	} catch (error) {
		
			}
	}
	
	getuserPurchasedItem()
	

	async function getuserCartItem(){
		try {
			console.log("Get All Items");
			const userId = localStorage.getItem('id')
			const Total = document.getElementById('Total')
			const response = await fetch(
				`http://localhost:305/cart/getuserCartItem/${userId}`
				)
				const data = await response.json()
				console.log("Checking for error");
				const cartNumber = document.getElementById('cartNumber')
				cartNumber.innerHTML = data.length
			const CartHolder = document.getElementById('CartHolder');
			let totalPrice = 0;
			Total.innerHTML = ''
			CartHolder.innerHTML = '';
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


// const cartSign = document.getElementById('cartSign');
// const cartContainer = document.querySelector('.cartContainer')
// cartSign.addEventListener('click', ()=>{
// 	if (cartContainer.style.transform == 'translateX(124vh)') {
// 		cartContainer.style.transform = 'translateX(200vh)'
// 		profileContent.style.filter = "blur(0px)"
// 		profileContent.style.pointerEvents = "all"
// 		collectionSection.style.filter = "blur(0px)"
// 		collectionSection.style.pointerEvents = "all"

// 	} else {
// 		cartContainer.style.transform = 'translateX(124vh)'
// 		profileContent.style.filter = "blur(10px)"
// 		profileContent.style.pointerEvents = "none"
// 		collectionSection.style.filter = "blur(10px)"
// 		collectionSection.style.pointerEvents = "none"
// 	}
// })










			//----------------------------- FUNCTION TO ADD ITEMS INTO PURCHASE TABLE ------------------------------//




			const Checkout = document.getElementById('Checkout')
			Checkout.addEventListener('click',()=>{
				movePurchasedItems()
				deleteAllItem()
				getuserPurchasedItem()
                const CartHolder = document.getElementById('cart-content');
                const Total = document.getElementById('price')
                Total.innerHTML = ''
                CartHolder.innerHTML = '';
                cart.classList.remove("active");
                window.location.href="../HTMLS/paymentStack.html"
	
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
	

			









		const baseurL = 'http://localhost:305/';


		UploadBtn.addEventListener('click', async (e) => {
			const itemName = document.getElementById('itemName')
			const dateValue = document.querySelector('#dateValue')
			const categoryValue = document.querySelector('#categoryValue')
			const itemDescription= document.getElementById("itemDescription");
			const image= document.getElementById("image");
			const uploadId = localStorage.getItem('id')
			const itemPrice = document.getElementById('itemPrice')
			const localName = localStorage.getItem("username")
		
			// const uploadedImage = document.getElementById('uploadedImage')
			
			
		
			var markedCheckbox = document.getElementsByName('checkboxBtn');
			checked = []
			for (let checkbox of markedCheckbox) {
				if (checkbox.checked == true){
				console.log(checkbox.checked);
					console.log("checked-", checkbox.value);
					checked.push(' '+ checkbox.value);
				}
				var marked = checked
				console.log("checked-",checked);
			}
			console.log("marked-",marked);
			console.log(localName);
			// const email = localStorage.getItem('email')
		
		
		
		
		
			e.preventDefault();
			const formData = new FormData();
		
			formData.append("localName", localName)
			formData.append("itemName", itemName.value)
			formData.append("price", itemPrice.value)
			formData.append("images", image.files[0])
			formData.append("dateValue", dateValue.value)
			formData.append("categoryValue", categoryValue.value)
			formData.append("itemDescription", itemDescription.value)
			formData.append("suitableFor", marked)
			formData.append("uploadId", uploadId)
		
			const response = await postData(`${baseurL}talentDashboard//upload/itemvalues`, formData);
			getUploadedItems()
		})
		
		
		
		
		async function postData(url, data) {
			console.log(data);
			try {
				const res = await fetch(url, {
				method: "POST",
				body: data
				})
				const result = await res.json()
				console.log(result);
				// uploadedImage.src = result.images
				return (result);
		
			} catch (err) {
				console.error(`Error: ${err}`);
			}
			// getUploadedItems()
		}
		












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
        getuserPurchasedItem()
	
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




           // ----------------------------------------------------------- FUNCTIONS FOR CART SYSTEM ----------------------------------------------------------//
                            
                            
                            
                                                            //----------------------------- FUNCTIONS TO ADD ITEMS INTO CART ------------------------------//
                            
                            
                            
                                                            function addingToCart(a, b){
                                                                const CartUrl = `http://localhost:305/cart/getCartItem`
                                                                const CartItems = {
                                                                    userId: b,
                                                                    itemId: a
                                                                }
                                                                console.log(a, b);
                                                                postCartItems(CartUrl, CartItems)
                                                            }
                                                                                    
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
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
        
                            //----------------------------- FUNCTIONS TO GET ITEMS FROM CART ------------------------------//
        
        
                            async function getuserCartItem(){
                                try {
                                    const userId = localStorage.getItem('id')
                                    const Total = document.getElementById('price')
                                    const response = await fetch(
                                        `http://localhost:305/cart/getuserCartItem/${userId}`
                                        )
                                        const data = await response.json()
                                        console.log(data);
                                        // const cartNumber = document.getElementById('cartNumber')
                                        // cartNumber.innerHTML = data.length
                                        const CartHolder = document.getElementById('cart-content');
                                        let totalPrice = 0;
                                        Total.innerHTML = ''
                                        CartHolder.innerHTML = '';
                                        let total = 0;
                                        data.forEach((item)=>{
                                            const item1 = document.createElement("div")
                                            item1.className = "item1";
                                            item1.id = item.id;
                                            const price = Number(item.price);
                                            totalPrice += price; 
                                            item1.innerHTML = `
                                            <div class="cart-box">
                                            <img src=${item.images} alt="" class="cart-img">
                                            <div class="detail-box">
                                            <div class="cart-product-title">${item.itemname}</div>
                                            <div class="cart-price">$${item.price}</div>
                                            <input type="number" value="1" class="cart-quantity">
                                            </div>
                                            <!-- REMOVE CART  -->
                                            <i class='bx bxs-trash-alt cart-remove' id="deleteIcon" onclick="deleteItem(${item.id})"></i>
                                            </div>`
                                            
                                            CartHolder.appendChild(item1);
                                            Total.innerHTML = totalPrice;
                                        })
                                        localStorage.setItem("price", Total.innerHTML)
                                        
                                    } catch (error) {
                                        console.log(error);
                            }
                            }

                    
                    getuserCartItem()
                
        
        
                        //----------------------------- DELETE A PARTICULAR ITEM FROM CART----------------------------------//;
                        
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
                        getuserPurchasedItem()
                        getuserCartItem()
                    
                        } catch (err) {
                            console.error(`Error: ${err}`);
                        }
                    }
                    
                    
                    function deleteItem(item_Id){
                        const DeleteUrl = `http://localhost:305/cart/deleteCartItem`
                        const user_Id = localStorage.getItem('id')
                        const CartItems = {
                            userId: user_Id,
                            itemId: item_Id
                        }
                        deleteCartItems(DeleteUrl, CartItems);
                    }
                                                                
        
                    
                    function deletePurchaseItem(item_Id){
                        const DeleteUrl = `http://localhost:305/cart/deletePurchasedItem`
                        const user_Id = localStorage.getItem('id')
                        const CartItems = {
                            userId: user_Id,
                            itemId: item_Id
                        }
                        deleteCartItems(DeleteUrl, CartItems);
                    }
                                                                
        
        
        
                    
                    //--------------------------------- DELETING ALL ITEMS FROM CART ----------------------------------------//;
        
        
        
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
                        // getuserCartItemU()
                    
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
        
        

					async function getUploadedItems(){
						try {
							const uploadId = localStorage.getItem('id')
							const response = await fetch(
								`http://localhost:305/register/items/${uploadId}`
								)
								const data = await response.json()
								
								console.log(data);	
					
								// const Trial = document.getElementById('Trial');
								// Trial.innerHTML = '';
								const Upload_collection = document.querySelector('.collection2');
								Upload_collection.innerHTML = '';
								data.forEach((item)=>{
									const frame = document.createElement("div")
									frame.className = "frame";
									frame.id = item.id;
									frame.value = item
									frame.innerHTML = `
									<div class="imageHolder">
									<img src=${item.images} alt="">
								</div>
								<div class="tag">
									<div class="show">
										<span>Name: <p>${item.itemname}</p></span>
										<span>Category: <p>${item.price}</p></span>
										<span>Price: <p>${item.price}</p></span>
									</div>
									<div class="hidden">
										<div class="frameButtons">
										<button class="deleteBtn" onclick="deleteUploadedItem(${item.id});">Delete</button>
										</div>
									</div>
								</div>
									`

								
								Upload_collection.appendChild(frame);
								})
					
								console.log(userId);		
								
							} catch (error) {
								
							}
						}
						
						
						
						function closeModal(){
							modal.style.display= "none"
							collectionSection.style.position = "relative"
						}
						
						getUploadedItems()





							// const frame = document.createElement("div")
							// frame.className = "frame";
							// // console.log(item);
							// // console.log(item.itemname);
							// const editName = item.itemName
							// frame.id = item.id;
							// frame.value = item
							// frame.innerHTML = `
							// <div class="cartImageHolder">
							// 	<img src=${item.images} alt="">
							// </div>
							// <div class="tag">
							// 	<div class="show">
							// 		<span>Item: <p>${item.itemname}</p></span>
							// 		<span>Price: <p>${item.price}</p></span>
							// 		<div class="frameButtons">
							// 			<button class="EditBtn" onclick='editModal("${item.itemname}",${item.price},"${item.itemdescription}", "${item.categoryvalue}", ${item.id})'>Edit</button>
							// 			<button class="deleteBtn" onclick="deleteItem(${item.id})">Delete</button>
							// 		</div>
							// 	</div>
							// </div>
							// `
							// Trial.appendChild(frame);


		//------------------------------------ Function to delete uploaded --------------------------------- //


		async function deleteUploadedItems(url, data) {
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
				
			} catch (err) {
				console.error(`Error: ${err}`);
			}
			getUploadedItems()
		}


		function deleteUploadedItem(item_Id){
			console.log("checking 3");
			const DeleteUrl = `http://localhost:305/uploads/deleteUploadedItem`
			const user_Id = localStorage.getItem('id')
			console.log(item_Id);
			const CartItems = {
				uploadId: user_Id,
				itemId: item_Id
			}
			console.log(user_Id);
			console.log(item_Id);
			console.log(CartItems);
			console.log("checking 4");

			deleteCartItems(DeleteUrl, CartItems);
			
			console.log(item_Id);
			
			console.log("checking 5");
			getUploadedItems()
		}
