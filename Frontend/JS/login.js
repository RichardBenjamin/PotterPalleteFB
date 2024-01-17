const email = document.querySelector('#email'),
      password = document.querySelector('#password'),
      buttonBtn = document.querySelector('#submitBtn'),
      emailErrorMsg = document.querySelector('#emailErrorMessage'),
      passwordErrorMsg = document.querySelector('#passwordErrorMessage'),
      emailPattern =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      passwordPattern =   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@#()^$!%*?&]{8,}$/;
      baseURL = "http://localhost:305/";



                        //   const signUp = document.getElementById('sign-up');
                        //   signUp.addEventListener('click', ()=>{
                        //       window.location.href = '../HTMLS/register.html'
                        //   })

                        //   const logoName = document.getElementById('logoName');
                        //   logoName.addEventListener('click', ()=>{
                        //     window.location.href = '../HTMLS/trial_index.html'
                        //   })

                        //------------------------------------- FUNCTION FOR BUTTON  ---------------------------//

                  buttonBtn.addEventListener('click', async (e) => {
                      console.log("checking");
                      e.preventDefault();

                  if (
                      emailValidation() &&
                      passwordValidation() 
                    
                    ) {
                      let userData = {
                        email: email.value.trim(),
                        password: password.value,
                      };
                      console.log(userData);
                      loginPost(`${baseURL}login`, userData);
                    }
                  })


                          //------------------------------------- FUNCTION FOR EMAIL VALIDATION ---------------------------//

                function emailValidation(){
                    if (email.value === '') {
                        emailErrorMsg.innerText = 'Please enter your email';
                        email.classList.add('error');
                    }   else if (email.value.trim().length < 3) {
                        emailErrorMsg.innerText = 'Name must be at least 3 characters';
                        email.classList.add('error');
                    }       else if (!email.value.match(emailPattern)){
                        emailErrorMsg.innerText = "Please enter a valid email.";
                        emailErrorMsg.classList.add('error');
                    }   else {
                        emailErrorMsg.innerText = '';
                        return true;
                    }
                }

                email.addEventListener("input", emailValidation);



          //------------------------------------- FUNCTION FOR PASSWORD VALIDATION ---------------------------//

        function passwordValidation(){
            if (password.value === '') {
                passwordErrorMsg.innerText = 'Please enter your Password'
                password.classList.add('error');
            }   else if (password.value.trim().length < 8) {
                passwordErrorMsg.innerText = 'Password must be at least 8 characters';
            }   else if (!password.value.match(passwordPattern)){
                passwordErrorMsg.innerText = "Please enter at least 8 character with number, symbol, small and capital letter.";
                passwordErrorMsg.classList.add('error');
            }   else {
                passwordErrorMsg.innerText = '';
                return true;
            }
        }

        password.addEventListener("input", passwordValidation);



                  //--------------------------------- FUNCTION TO LOGIN----------------------------------// 


          async function loginPost(url, data) {
            try {
              const res = await fetch(url, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
              });

              
              const bodydata = await res.json();
              console.log(bodydata.message);
              if (bodydata.message == "Invalid") {
                emailErrorMsg.innerText = 'Please enter your correct email or password';
              }

              if (bodydata.message == "logged") {
                localStorage.setItem("token", bodydata.token);
                localStorage.setItem("username", bodydata.username);
                localStorage.setItem("email", bodydata.email);
                localStorage.setItem("roles", bodydata.roles);
                localStorage.setItem("id", bodydata.id)

                      if (bodydata.roles === "Potter") {
                        window.location.href = "../HTMLS/trial_dashboardPotter.html";
                    } else if(bodydata.roles === "Buyer") {
                    window.location.href = "../HTMLS/trial_dashboardBuyer.html";
                    } else{
                    bodydata.roles = "Admin"
                    window.location.href = "../HTMLS/trial_dashboardAdmin.html";
                    console.log(bodydata.roles);

                }

              }

            } catch (err) {
              console.error(`Error: ${err}`);
            }
          }


// ------------ FUNCTION FOR MENU BAR --------------//

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active')
}







