import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js";
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
var email = document.getElementById("Emaill")
var password= document.getElementById("passwordd")
var successGif = document.getElementById("success-gif");
var failGif = document.getElementById("fail-gif");

window.login=function(e){
    e.preventDefault();
    var obj = {
        email:email.value,
        password:password.value,
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(success){
        
         // Show success gif
         //successGif.src = "ss.gif";
         //successGif.style.display = "block";
        //window.location.href = "https://saimm.netlify.app/dashboard.html";
        setTimeout(function showSuccess() {
            successGif.style.display = "block";
            setTimeout(function hideSuccess() {
              successGif.style.display = "none";
              window.location.href = "/dashboard.html";
            }, 2000);
          },100);
        
    })
    .catch(function(err){
        alert("Can't even you just login?" )
        console.log(err)
        setTimeout(function showFail() {
          failGif.style.display = "block";
          setTimeout(function hideSuccess() {
            failGif.style.display = "none";
            window.location.href = "/index.html";
          }, 3100);
        },100);

        
    })
}