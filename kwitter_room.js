
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD9YaKKdDmwpoat8La21jRb2gCnErjSQ5E",
      authDomain: "kwitter-3a5b9.firebaseapp.com",
      databaseURL: "https://kwitter-3a5b9-default-rtdb.firebaseio.com",
      projectId: "kwitter-3a5b9",
      storageBucket: "kwitter-3a5b9.appspot.com",
      messagingSenderId: "79987278863",
      appId: "1:79987278863:web:1b3a9e42a599bb5abc8f7a"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + roomname);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code 
      });});}
getData();

function gnapn(){
      get_user_name = localStorage.getItem("UT");
      document.getElementById("username").innerHTML = "welcome" + get_user_name;
}

function addRoom(){
      roomname = document.getElementById("room_name").value;
      localStorage.setItem("room_name", roomname)

      firebase.database().ref("/").child(roomname).update({
        purpose: "added room name"
      });
      window.location.replace("kwitter_page.html");
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_page",name);
      window.location = "kwitter_page.html"
}

function logout(){
      localStorage.removeItem("UT");
      localStorage.removeItem("room_name")
      window.location.replace("index.html")
}