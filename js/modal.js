  // btn_start

// dropdown_form
const showBtn = document.querySelector('#show-btn')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('close-btn')
const overlay = document.getElementById('overlay')

// add classList hidden
const addHidden = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  
}

// remove classList hidden
const removeHidden = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}
showBtn.addEventListener('click', removeHidden)


closeBtn.addEventListener('click', addHidden)



overlay.addEventListener('click', addHidden)

document.addEventListener('keydown', (e) => {
  if (e.key == 'Escape') {
    addHidden()
  }
})





  // password hidden
  const showInput = document.querySelector("#myInput");
  const showEye = document.querySelector('#showeye')
  showEye.addEventListener('click',function(event){
   const type = showInput.getAttribute("type") === "password" ? "text":"password";
   showInput.setAttribute('type',type);
   if(event.target.classList[1] ==="fa-eye-low-vision"){
    this.classList.remove("fa-eye-low-vision")
    this.classList.add("fa-eye")
   }else{
     this.classList.remove("fa-eye")
    this.classList.add("fa-eye-low-vision")
   }
   
  })






// voyti_modal


var modalVoyti = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.querySelectorAll(".close");

btn.onclick = function() {
  modal.classList.add("hidden")
  modalVoyti.classList.remove("hidden");
}

span.forEach(el=>{
  el.onclick = function() {
    console.log(el)
    modalVoyti.classList.add("hidden");
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
  }
})


window.onclick = function(event) {
  if (event.target == modalVoyti) {
    modalVoyti.classList.add("hidden");
  }
}


function pasuser(form) {
  if (form.id.value=="huseiin") { 
  if (form.pass.value=="1995") {              
  location="../user/user.html" 
  } else {
  alert("Invalid Password")
  }
  } else {  alert("Invalid UserID")
  }
  }
