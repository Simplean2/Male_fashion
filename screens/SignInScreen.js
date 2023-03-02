import { setUserInfo } from "../LocalStorage.js";


const SigninScreen = {
  after_render: () => {


    const registerUser = () => {
      const fname = document.getElementById('f-name')
      const lname = document.getElementById('l-name')
      const address = document.getElementById('address')
      const email = document.getElementById('email')
      const password = document.getElementById('password')
      const confpassword = document.getElementById('conf-password')

      if (fname.value === "" && lname.value === "" && address.value === "" && email.value === "" 
      && password.value === "" && confpassword.value === ""){
        alert("please complete your information")
      }else if(password.value !== confpassword.value){
        alert("confirm password incorect")
      }else{
        const userInfoObj = {
          fname: fname.value,
          lname: lname.value,
          address: address.value,
          email: email.value,
          password: password.value,
        }
        document.location.hash = '/checkout';
        return userInfoObj;
      }
    }
    

    document.getElementById('register-btn').addEventListener('click', () =>{
      
      setUserInfo(registerUser());
    })
  },

  render: () => {
    return `
    <div class="location-web-main-container">
      <div class="location-web-container">
        <div class="shopping-cart-title">
          <h1>Sign in</h1>
        </div>

        <div class="shopping-location">
          <span> Home > Sign in</span>
        </div>
      </div>
    </div>

    <section class="signin-main-cont">
      <div class="signin-cont">
        <div class="s-c">
          <h1>REGISTRATION FORM</h1>
          <div class="f-l-container">
            <input class="input-signin" type="text" placeholder="First name" id="f-name">
            <input class="input-signin" type="text" placeholder="Last name" id="l-name">
          </div>

          <input class="input-signin" type="text" placeholder="Address" id="address">

          <div class="gender-cont">
            <p>Gender: </p>
            <input type="radio" id="html" name="fav_language" value="HTML" >
            <label for="html">Male</label>

            <input type="radio" id="html" name="fav_language" value="HTML">
            <label for="html">Female</label>

            <input type="radio" id="html" name="fav_language" value="HTML">
            <label for="html">Other</label>
          </div>
          
          <input class="input-signin" type="text" placeholder="Email" id="email">
          <input class="input-signin" type="text" placeholder="Password" id="password">
          <input class="input-signin" type="text" placeholder="Confirm-Password" id="conf-password">
          
          <div class="register-btn-cont">
            <button class="reset-signin" id="reset-data">RESET ALL</button>
            <button type="submit" class="register-btn" id="register-btn">REGISTER</button>
          </div>

        </div>
      </div>
    </section>
    `
  }
}

export default SigninScreen;