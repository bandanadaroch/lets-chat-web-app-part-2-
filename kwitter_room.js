
//ADD YOUR FIREBASE LINKS HERE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBH_Y3Ay9m6Sf0diXB7U1T9WIq5g8s95Iw",
  authDomain: "tick-tack-toe-464bc.firebaseapp.com",
  databaseURL: "https://tick-tack-toe-464bc-default-rtdb.firebaseio.com",
  projectId: "tick-tack-toe-464bc",
  storageBucket: "tick-tack-toe-464bc.appspot.com",
  messagingSenderId: "564854293165",
  appId: "1:564854293165:web:dde9a9e414227894ebfc24"
};

// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("Name");
document.getElementById("welcome_user").innerHTML= "Welcome"

 function addroom(){
   room_name=document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
     purpose:"ading room name "
   });
   localStorage.setItem("room_name", room_name);
   window.location="kwitter_page.html"
 }


function getData()
 {
   firebase.database().ref("/").on('value', function(snapshot)
    {
      document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)'>#"+room_names+"</div> <hr>";
       document.getElementById("output").innerHTML=row; 
             
      });});}
getData();
function redirectToRoomName(name){
  console.log("name");
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html"
}