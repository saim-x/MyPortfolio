// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9wIZTax4NvBboS7WS9yCzIuV_u72M0UY",
  authDomain: "sign-up-and-login-app-64907.firebaseapp.com",
  projectId: "sign-up-and-login-app-64907",
  storageBucket: "sign-up-and-login-app-64907.appspot.com",
  messagingSenderId: "229997091503",
  appId: "1:229997091503:web:8c163e1829675a2399525a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";


var firstname = document.getElementById("firstname")
//var lastname =document.getElementById("lastname")
var email = document.getElementById("Email")
var passwords= document.getElementById("password")

var successGif = document.getElementById("success-gif");

var failGif = document.getElementById("fail-gif")

//making function for sign up

window.signup = function(e){
  e.preventDefault();
  var obj = {
      firstname: firstname.value,
      //lastname: lastname.value,
      email: email.value,
      passwords: passwords.value,

  }
  createUserWithEmailAndPassword(auth, obj.email, obj.passwords)
  .then(function(success){
    setTimeout(function showSuccess() {
        successGif.style.display = "block";
        setTimeout(function hideSuccess() {
          successGif.style.display = "none";
          window.location.href = "/dashboard.html";
        }, 2000);
      },100);
  })

  .catch(function(err){
    alert("Can't even you just signup? " )
    console.log(err)
    setTimeout(function showFail() {
      failGif.style.display = "block";
      setTimeout(function hideSuccess() {
        failGif.style.display = "none";
        window.location.href = "/index.html";

      }, 3100);
    },100);

    
})
  //console.log(obj)
};