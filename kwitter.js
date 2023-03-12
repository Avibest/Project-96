function adduser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("username",user_name);
    window.location = "kwitter_room.html"
}

var firebase = {
    apiKey: "AIzaSyAErSUAlvTvOnUFXwRplgpBBT0ET6bKViw",
    authDomain: "project-93-c7ae8.firebaseapp.com",
    projectId: "project-93-c7ae8",
    storageBucket: "project-93-c7ae8.appspot.com",
    messagingSenderId: "533905753785",
    appId: "1:533905753785:web:856592e476f5b99d5a7d68"
  };

  room_name = localStorage.getItem("roomname");
  user_name = localStorage.getItem("username");

  console.log("room name" +room_name);
  console.log("user_name" +user_name);

  function logout(){
    localStorage.removeItem("Username");
    localStorage.removeItem("Roomname");
    window.location = "kwitter.html";
}

  function send(){
    msg = document.getElementById("msg").value;
    console.log("Message" +msg);
    firebase.database().ref(room_name).push({
        username: user_name,
        message: msg,
        like: 0
    })
    document.getElementById("msg").value = "";
}