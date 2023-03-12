var firebase = {
  apiKey: "AIzaSyAErSUAlvTvOnUFXwRplgpBBT0ET6bKViw",
  authDomain: "project-93-c7ae8.firebaseapp.com",
  projectId: "project-93-c7ae8",
  storageBucket: "project-93-c7ae8.appspot.com",
  messagingSenderId: "533905753785",
  appId: "1:533905753785:web:856592e476f5b99d5a7d68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

  function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("room_name - " +Room_names)
row = `<div class='room_name' id=${Room_names} onclick='redirectToroomname(this.id)'>#${Room_names}</div><hr>`;
document.getElementById("output").innerHTML+=row;

function redirectToroomname(name){
console.log(name);
localStorage.setItem("Roomname", name);
window.location = "kwitter_page.html";
}

//End code
});});}
getData();

