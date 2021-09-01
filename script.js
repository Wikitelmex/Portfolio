function openNav() {
  document.getElementById('mySidenav').style.width = '100%';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
}


//testing functions modal
var modal=document.getElementById("myModal");
var container=document.getElementById("myContainer");
var body=document.getElementsByTagName("body")

function openModal() {
  modal.className="Modal is-visuallyHidden";
  container.className="MainContainer is-blurred";
  modal.className="Modal";
  container.parentElement.className="ModalOpen";
}

function closeModal() {
  modal.className="Modal is-hidden is-visuallyHidden";
  body.className="";
  container.className="MainContainer";
  container.parentElement.className="";
}

window.onclick = function(e){
  e.target==modal&&(
      modal.className="Modal is-hidden",
      body.className="",
      container.className="MainContainer",
      container.parentElement.className=""
  )
};



module.exports = openNav();
module.exports = closeNav();
module.exports = openModal();
module.exports = closeModal();