var namee = ""

function log (){
    namee = document.getElementById("UT").value
    localStorage.setItem("UT",namee)
    window.location.replace("kwitter_room.html")
}