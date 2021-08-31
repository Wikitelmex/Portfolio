function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}


//testing functions modal
var modal = document.getElementById("myModal");

var body = document.getElementsByTagName("body");

function openModal() {
  
  modal.style.display = "block";
  modalcontent.style.display ="block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

module.exports = openNav();
module.exports = closeNav();
module.exports = openModal();
module.exports = closeModal();