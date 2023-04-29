
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCxzUgN_AQZ-WrfZJOGOb4CQFG0yJRZR4Y",
      authDomain: "kwitter-1440b.firebaseapp.com",
      databaseURL: "https://kwitter-1440b-default-rtdb.firebaseio.com",
      projectId: "kwitter-1440b",
      storageBucket: "kwitter-1440b.appspot.com",
      messagingSenderId: "362470702400",
      appId: "1:362470702400:web:49f8be66b14f95a2a7cea5",
      
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("User_name");
    document.getElementById("user_name").innerHTML = " Welcome " + user_name + " ! ";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"; 
}

function addRoom()
{
      Room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(Room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", Room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location = "index.html";
}