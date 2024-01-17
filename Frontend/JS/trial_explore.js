
const token = localStorage.getItem('token')
if(!token){
    const login = document.getElementById('login');
    const cartIcon = document.querySelector("#cart-icon");
    cartIcon.style.display = "none"
    login.addEventListener('click', ()=>{
        window.location.href = '../HTMLS/login.html'
    })
    login.style.display = "block"

} else{
    console.log("token");
    login.style.display = "none"
    const cartIcon = document.querySelector("#cart-icon");
    cartIcon.addEventListener("click", () => {
        console.log("checking");
    cart.classList.add("active");
    });
    getuserCartItem()

}




// OPEN & CLOSE CART

const cart = document.querySelector(".cart");
const closeCart = document.querySelector("#cart-close");


closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});



								// ----------------------------- FUNCTION TO GET ALL ITEMS -------------------------------------//
// console.log("ugugug");



                                async function getItems(){
                                    try {
                                        const response = await fetch(
                                            `http://localhost:305/register/explore`)
                            
                                        const data = await response.json()
                                        const userId = localStorage.getItem('id')
                                        // console.log(userId);
                                        // const Trial = document.getElementById('Trial');
                                        const Trial = document.getElementById('shop-content');
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
                                            <div id="shine"></div>
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
                                            <button class="carti" onclick="addingToCart(${itemIda}, ${userId})">Add to Cart</button>
                                            <button class="detailsBtn" onclick="detailOfItem('${item.id}')">See Details</button>
                                            
                                            </div>
                                            </div>
                                            `
                            
                                            Trial.appendChild(frame);

                                            })
                                
                                    } catch (error) {
                                        console.log(error);
                                    }
                                }
                                    getItems()	
                            
                            
                            
                                                            // ----------------------------- FUNCTION TO GET SEARCHED ITEMS -------------------------------------//
                            
                            
                                        const searchBox = document.getElementById('search-box')
                                        const searchIcon = document.getElementById('searchIcon')
                                        searchIcon.addEventListener('click', ()=>{
                                        	getSearchItems()
                                        	console.log(searchBox.value);
                                        })
                            
                                        async function getSearchItems(){
                                try {
                                    if (searchBox.value == "") {
                                        getItems()
                                    } else {
                                        
                                        const response = await fetch(
                                            `http://localhost:305/explore/category/${searchBox.value}`)
                                            const data = await response.json()
                                            if (data.length == 0) {
                                                alert(`${searchBox.value} is cuurently not available`)
                                            } else {
                                                
                                                const userId = localStorage.getItem('id')
                                                const Trial = document.getElementById('shop-content');
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
                                                    <div id="shine"></div>
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
                                                    <button class="carti" onclick="addingToCart(${itemIda}, ${userId})">Add to Cart</button>
                                                    <button class="detailsBtn" onclick="detail('${item.images}','${item.itemname}',${item.datevalue}, '${item.categoryvalue}', ${item.price},'${item.itemdescription}', '${item.suitablefor} ')">See Details</button>
                                                        
                                                        </div>
                                                    </div>
                                                    `
                                            Trial.appendChild(frame);
                                                })
                                            }
                             
                                    }
                                    } catch (error) {
                                        console.log(error);
                                    }
                            }
                            
                            
                            
                            
                            
                            
                            
                            
                            async function detailOfItem(productItemId){
                                            const response = await fetch(
                                                `http://localhost:305/register/explore/${productItemId}`)
                                                const data = await response.json()
                                                const detailsid = document.getElementById('details')
                                                const modal = document.getElementById('modal')
                                                const details = document.createElement("div")

                                                data.forEach((productItem)=>{
                                                    details.className = "details"
                                                    console.log(productItem.images);
                                        
                                                    details.innerHTML = `
                                                    <div class="detailsLeftSide">
                                                        <div class="detailsImage">
                                                            <img src=${productItem.images} alt="">
                                                        </div>
                                                        <div class="detailstext">
                                                            <div class="name">
                                                                <span>Name:   <p>${productItem.itemname}</p></span>
                                                            </div>
                                                            <div class="category">
                                                                <span>Category:  <p>${productItem.categoryvalue}</p></span>
                                                            </div>
                                                            <div class="price">
                                                                <span>Price: $<p>${productItem.price}</p></span>
                                                            </div>
                                                            <div class="date">
                                                                <span>Date:   <p>${productItem.datevalue}</p></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="detailsRightSide">
                                                        <h6>Item Description:</h6>
                                                        <div class="textsidearea">${productItem.itemdescription}</div>
                                                        <div class="suitablefor">
                                                            <span>Suitable for: <p>${productItem.suitablefor}</p></span>
                                                        </div>
                                                    </div>
                                                    <i class='bx bx-x' style="color: red; font-size: 3vh; display: inline; position: absolute; z-index: 5; align-items: end; justify-self: flex-end; margin-left: 83vh; margin-top: -1vh; cursor: pointer;" id="closeBtn"></i>`
                                        
                                        
                                                    modal.appendChild(details)
                                        
                                                })

                            
                            
                                        const collectionSection = document.getElementById('collectionSection')
                                        details.style.display = "flex"
                                        modal.style.display= "flex"
                            
                                        const closeX = document.querySelectorAll('#closeBtn')
                            
                                        closeX.forEach((item)=>{item.addEventListener('click', ()=>{
                                        detailsid.style.display = "none"
                                        modal.style.display= "none"
                                        })
                                        })
                                    }
                
                            
                            
                            
                            
                            
                            
                                // ----------------------------------------------------------- FUNCTIONS FOR CART SYSTEM ----------------------------------------------------------//
                            
                            
                            
                                                            //----------------------------- FUNCTIONS TO ADD ITEMS INTO CART ------------------------------//
                            
                            
                            
                                    function addingToCart(a, b){
                                        // const token = localStorage.getItem('token')
                                        if (!token) {
                                            alert("Login to add to cart")
                                        } else {
                                            const CartUrl = `http://localhost:305/cart/getCartItem`
                                            const CartItems = {
                                                userId: b,
                                                itemId: a
                                            }
                                            console.log(a, b);
                                            postCartItems(CartUrl, CartItems)
                                        }

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
                                    // console.log(currentUserId);
                                    const AddCart = document.querySelector('.AddCart')
                            
                            
                            
                            
                            
                            
                            
                            
                                                //----------------------------- FUNCTIONS TO GET ITEMS FROM CART ------------------------------//
                            
                            
                                                async function getuserCartItem(){
                                                    try {
                                                        const userId = localStorage.getItem('id')
                                                        const Total = document.getElementById('price')
                                                        const response = await fetch(
                                                            `http://localhost:305/cart/getuserCartItem/${userId}`
                                                            )
                                                            // console.log(userId);
                                                            const data = await response.json()
                                                            console.log(data);
                                                            const CartHolder = document.getElementById('cart-content');
                                                            const cartNumber = document.getElementById('cartNumber')
                                                            if (data.length == 0) {
                                                                console.log(data.length);
                                                                cartNumber.innerHTML = data.length 
                                                                CartHolder.innerHTML = `
                                                                <p id="cartMessage" >Your Cart is empty. Shop now to add to cart</p>`
                                                            } else if(data.length > 0) {
                                                                cartNumber.innerHTML = data.length
                                                                const CartHolder = document.getElementById('cart-content');
                                                                let totalPrice = 0;
                                                                Total.innerHTML = ''
                                                                CartHolder.innerHTML = '';
                                                                let total = 0;
                                                                data.forEach((item)=>{
                                                                    const item1 = document.createElement("div")
                                                                    item1.className = "item1";
                                                                    item1.id = item.id;
                                                                    // item1.value = item
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
                                                            } else {
                                                                // const cartNumber = document.getElementById('cartNumber')
                                                                cartNumber = ''
                                                                CartHolder.innerHTML = `
                                                                <p>Login to add to cart</p>`
                                                            }
                                                           
                                                            
                                                        } catch (error) {
                                                            console.log(error);
                                                }
                                                }
            
                                        
                                      
                                    
                            
                            
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
                            
                            
                            
                                            const logoName = document.getElementById('logoName');
                                            logoName.addEventListener('click', ()=>{
                                            	window.location.href = '../HTMLS/index.html'
                                            })
                            
                            
                                            // const cartSign = document.getElementById('cartSign');
                                            // const cartContainer = document.querySelector('.cartContainer')
                            
                            
                                            // cartSign.addEventListener('click', ()=>{
                                            // 	cartContainer.classList.toggle('active')
                                            // 	Trial.classList.toggle('active')
                                            // })
                            
                                            // const cartLink = document.querySelector('#cartLink')
                                            // cartLink.addEventListener('click', ()=>{
                                            // 	cartContainer.classList.toggle('active')
                                            // 	Trial.classList.toggle('active')
                                            // 	searchForm.classList.remove('active')
                                            // 	navbar.classList.remove('active')
                                            // 	Trial.classList.remove('active')
                                            // })
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                            
                                
                            //------------------------------------------ FUNCTION TO ADD ITEMS INTO PURCHASE TABLE ---------------------------------------------//
                            
                            
                            
                                    // ----------------------------- FUNCTION CONTROLLING CHECKOUT BUTTON ------------------------------------//
                            
                                    const Checkout = document.getElementById('Checkout')
                                    Checkout.addEventListener('click',()=>{
                                        console.log("working");
                                        movePurchasedItems()
                                        deleteAllItem()
                                        const cartNumber = document.getElementById('cartNumber')
                                        cartNumber.innerHTML = 0
                                        const CartHolder = document.getElementById('cart-content');
                                        const Total = document.getElementById('price')
                                        Total.innerHTML = ''
                                        CartHolder.innerHTML = '';
                                        cart.classList.remove("active");
                                        window.location.href="../HTMLS/paymentStack.html"
                            
                                    })
                                                    
                            
                            
                                    
                                    function addingToPurchaseTable(a, b){
                                        const PurchaseUrl = `http://localhost:305/cart/purchasedTable`
                                        const CartItems = {
                                            userId: b,
                                            itemId: a
                                        }
                                        console.log(a, b);
                                        postPurchasedItems(PurchaseUrl, CartItems)
                                    }
                                    
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
                            
                            
                                    // --------------------- FUNCTION TO ADD ITEMS INTO PURCHASE PAGE ----------------------------------// 
                            
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
                                    
                                    
                                    } catch (error) {
                                    
                                    }
                                    }
                                                    
                                                    
                                                    
                                                                                
                                                
                                        
                                    //-------------------------------- FUNCTION FOR SETTING PROFILE LETTER----------------------------------- //
                            
                            
                            
                                    // let navbar = document.querySelector('.navbar');
                                    let searchForm = document.querySelector('.search-form');
                            
                            
                                    // document.querySelector('#menu-btn').onclick = () =>{
                                    //     searchForm.classList.remove('active')
                                    //     cartContainer.classList.remove('active')
                                    //     navbar.classList.toggle('active')
                                    // }
                            
                            
                                    window.onscroll = () => {
                                        // navbar.classList.remove('active')
                                        searchForm.classList.remove('active')
                                    }
                            
                                    document.querySelector('#search-btn').onclick = () =>{
                                        searchForm.classList.toggle('active')
                                        // navbar.classList.remove('active')
                                    }
                            
                            
                            
                            
                                    
                                    
                                    
                                    //-------------------------------- FUNCTION FOR SETTING PROFILE LETTER----------------------------------- //
                                    
                                    
                                    const localName = localStorage.getItem('username');
                                    const localRole = localStorage.getItem('roles');

                                    
                            
                            
                                    //-------------------------------- FUNCTION FOR SETTING SIGN UP AND LOGIN BUTTON----------------------------------- //
                            

                            
                            