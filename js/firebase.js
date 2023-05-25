// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfMsWvrsciOhBJQG3_dsRgF5BrdKmptvY",
    authDomain: "signup-page-60f27.firebaseapp.com",
    databaseURL: "https://signup-page-60f27-default-rtdb.firebaseio.com",
    projectId: "signup-page-60f27",
    storageBucket: "signup-page-60f27.appspot.com",
    messagingSenderId: "355197311024",
    appId: "1:355197311024:web:220bdd8be176ccc6f975f5",
    measurementId: "G-QTB2E42H1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signUp.addEventListener('click', (e) =>{

    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            set(ref(database, 'users/' + user.uid), {
                username: username,
                email: email,
                // password: password
                // password: password
            })

            alert('User Created');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
            // ..
        });
});

login.addEventListener('click', (e)=>{

    var email = document.getElementById('email').value;
    // var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in  
            const user = userCredential.user;
            const dt = new Date();

            update(ref(database, 'users/' + user.uid), {
                // last_login: username,
                last_login: dt,
            })

            alert('User logged in');
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            alert(errorMessage);
        });
});

const user = auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        
        // ...
    } else {
        // User is signed out
        // ...
    }
});

logout.addEventListener('click', (e) =>{
    signOut(auth).then(() => {
    // Sign-out successful.
        alert('Account is signed out');
    }).catch((error) => {
    // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
    });
});

// const firebaseConfig = {
//     apiKey: "AIzaSyAfMsWvrsciOhBJQG3_dsRgF5BrdKmptvY",
//     authDomain: "signup-page-60f27.firebaseapp.com",
//     projectId: "signup-page-60f27",
//     storageBucket: "signup-page-60f27.appspot.com",
//     messagingSenderId: "355197311024",
//     appId: "1:355197311024:web:220bdd8be176ccc6f975f5",
//     measurementId: "G-QTB2E42H1J"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// //functionality
// var datab  = firebase.database().ref('data');
// function UserRegister(){
// var email = document.getElementById('eemail').value;
// var password = document.getElementById('lpassword').value;
// firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
// }).catch(function (error){
//     var errorcode = error.code;
//     var errormsg = error.message;
// });
// }
// const auth = firebase.auth();
// function SignIn(){
//     var email = document.getElementById('eemail').value;
//     var password = document.getElementById('lpassword').value;
//     const promise = auth.signInWithEmailAndPassword(email,password);
//     promise.catch( e => alert(e.msg));
//     window.open("https://www.google.com","_self");
// }
// document.getElementById('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     var userInfo = datab.push();
//     userInfo.set({
//         name: getId('fname'),
//         email : getId('eemail'),
//         password : getId('lpassword')
//     });
//     alert("Successfully Signed Up");
//     console.log("sent");
//     document.getElementById('form').reset();
// });
// function  getId(id){
//     return document.getElementById(id).value;
// }