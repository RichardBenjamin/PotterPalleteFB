

    
    // -------------------------------------Variables--------------------------- //

	const email = document.getElementById('email')
	const Role = document.getElementById('role')
	const username = document.querySelector("#full_name");
	const localName = localStorage.getItem("username")
	const localEmail = localStorage.getItem("email")
	const localRole = localStorage.getItem("roles")
	// const id = localStorage.getItem('id')
	const personalInformation = document.getElementById('personalInformation');
	const createAdmin = document.getElementById('createAdmin');
	const manageUsers = document.getElementById('manageUsers');
	const logout = document.getElementById('Logout');
	const personalInformationSection = document.querySelector('.personalInformation')
    const showPasswordBtn = document.querySelector(".clickHere")
    const showAccountLink = document.querySelector(".clickHereA")
    const createAdminSection = document.querySelector('.createAdminSection')
	const passwordSection = document.querySelector('.passwordSection')
	const manageUsersSection = document.querySelector('.manageUsersSection')
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



    createAdmin.addEventListener('click', ()=>{
		showCreateAdminUser()
	})

    manageUsers.addEventListener('click', ()=>{
		showmanageUsersSection()
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

// -----------------------------------------Functions--------------------------------//


function showProfile(){
    passwordSection.style.display = 'none';
    createAdminSection.style.display = 'none';
    manageUsersSection.style.display = 'none';
    personalInformationSection.style.display = 'block';
	}
	
	function showPassword(){
        personalInformationSection.style.display = 'none';
        createAdminSection.style.display = 'none';
        manageUsersSection.style.display = 'none';
        passwordSection.style.display = 'block';
	}
	
	function showmanageUsersSection(){
        personalInformationSection.style.display = 'none';
        createAdminSection.style.display = 'none';
        passwordSection.style.display = 'none';
		manageUsersSection.style.display = 'block';
	}
	
	function showCreateAdminUser(){
        personalInformationSection.style.display = 'none';
        passwordSection.style.display = 'none';
		manageUsersSection.style.display = 'none';
        createAdminSection.style.display = 'block';
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
			window.location.href = "../HTMLS/trial_dashboardAdmin.html" 

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



						
						

	


let id = 0;

async function getUsers(){
	try {
		const response = await fetch(
			`http://localhost:305/register/Allusers`
		)
			const data = await response.json()
			
			// console.log(data);	
			
			// console.log(data[0].id);

			let i=1;
			data.forEach((item)=>{
				const rowBody = document.createElement("tr")
				rowBody.className = "rowBody";
				rowBody.id = item.id;
				rowBody.value = item
				rowBody.innerHTML = ""

					const admin = "Admin"
					if (item.roles == "Buyer" || item.roles == "Potter") {
						rowBody.innerHTML = `
						<td>${i}</td>
						<td>${item.name}</td>
						<td>${item.email}</td>
						<td>${item.roles}</td>
						`;
						Tablebody.appendChild(rowBody);
					} else {
						const admin = "Admin"
						item.roles = admin
						rowBody.innerHTML = `
						<td>${i}</td>
						<td>${item.roles}</td>
						<td>${item.email}</td>
						<td>${item.roles}</td>
						`;
						Tablebody.appendChild(rowBody);
					}
					rowBody.innerHTML = `
					<td>${i}</td>
					<td>${item.name}</td>
					<td>${item.email}</td>
					<td>${item.roles}</td>
					`;
					Tablebody.appendChild(rowBody);
	i++;
			})

			
	} catch (error) {
		
	}
}

getUsers()





	// Create Admin 

	async function postData(url, data) {
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
	  
			if (bodydata.message == "Success") {
			  adminusername.value = "";
			  adminemail.value = "";
			  adminpassword.value = "";
			  adminpassword2.value = "";  
			//   window.location.href ="../HTMLS/trialAdmin.html"    
			}
			if (bodydata.message == "Already Exists") {
			console.log("email already exists");
			  email.value = "";
			  password.value = "";
			}
		  } catch (err) {
			console.error(`Error: ${err}`);
		  }
}




submitBtn2.addEventListener('click', async (e) => {
    e.preventDefault();
{
    let userData = {
      name: adminusername.value,
      email: adminemail.value,
      password: adminpassword.value,
	  roles: "Admin"
    };
    postData(`http://localhost:305/register`, userData);
  }
})



function adminusernameValidation(){
    if (adminusername.value === '') {
        createUsernameErrorMessage.innerText = 'Please enter your username';
        adminusername.classList.add('error');
    }   else if (adminusername.value.trim().length < 3) {
        createUsernameErrorMessage.innerText = 'Username must be at least 3 characters';
        adminusername.classList.add('error');
    }   else {
        createUsernameErrorMessage.innerText = '';
        return true;
    }
}
adminusername.addEventListener("input", adminusernameValidation);

;


function emailValidation(){
    if (adminemail.value === '') {
        createEmailErrorMessage.innerText = 'Please enter your email';
        adminemail.classList.add('error');
    }   else if (adminemail.value.trim().length < 3) {
        createEmailErrorMessage.innerText = 'Name must be at least 3 characters';
        adminemail.classList.add('error');
    }       else if (!adminemail.value.match(emailPattern)){
        createEmailErrorMessage.innerText = "Please enter a valid email.";
        createEmailErrorMessage.classList.add('error');
    }   else {
        createEmailErrorMessage.innerText = '';
        return true;
    }
}
adminemail.addEventListener("input", emailValidation);


function adminpasswordValidation1(){
    if (adminpassword.value === '') {
        createPasswordErrorMessage.innerText = 'Please enter your Password'
        adminpassword.classList.add('error');
    }   else if (adminpassword.value.trim().length < 8) {
        createPasswordErrorMessage.innerText = 'Password must be at least 8 characters';
    }   else if (!adminpassword.value.match(passwordPattern)){
        createPasswordErrorMessage.innerText = "Please enter at least 8 character with number, symbol, small and capital letter.";
        createPasswordErrorMessage.classList.add('error');
    }   else {
        createPasswordErrorMessage.innerText = '';
        return true;
    }
}

adminpassword.addEventListener("input", adminpasswordValidation1);



function confirmadminpasswordValidation(){
    if  (adminpassword2.value !== adminpassword.value) {
        createPasswordErrorMessage2.innerText = "Passwords ----don't match";
        createPasswordErrorMessage2.classList.add('error')
    }   else {
        createPasswordErrorMessage2.innerText = '';
        return true
    }
}

adminpassword2.addEventListener("input", confirmadminpasswordValidation);



