// category__start

const categoryGeneralBox = document.querySelector('.category__general__box');
categoryCard.forEach((item,index) => {
  index=index+1;
  const card =`
  <div class="category__inner__box--${index} inner__box">
  <img src="${item.img}" class="inner__box__img">
   
   <div class="inner__box__dropdown dropdown ">
 
    <button class="dropbtn">
     ${item.name}
      <i class='bx bx-chevron-right'></i>
    </button>
    
    <div id="myDropdown" class="dropdown-content">
     <a href="#home">Смартфоны <i class='bx bx-chevron-right'></i></a>
      <a href="#about">Аксессуары для смартфонов и телефонов <i class='bx bx-chevron-right'></i></a>
      <a href="#contact">Смарт-часы <i class='bx bx-chevron-right'></i></a>

      <a href="#home">Фитнес браслеты <i class='bx bx-chevron-right'></i></a>
      <a href="#about">Ремешки для часов и смарт-часов <i class='bx bx-chevron-right'></i></a>
      <a href="#contact">Запчасти для смартфонов <i class='bx bx-chevron-right'></i></a>
      
      
      <a href="#contact">Аксессуары для смартфонов и телефонов <i class='bx bx-chevron-right'></i></a>
    </div>

    <p class="dropdown__text dropdown__text--none">${item.num} подкатегорий </p>
  
   </div>
  </div>
  `
  categoryGeneralBox.innerHTML += card;
})

// category__end

// search_start

const announcements = document.getElementById('announcements');

const renderCards = (item, index) => {
    const renderCard =`
    
         <div class="obyavleniya__inner__box--${index} obyavleniya__inner">
      <img src="${item.img}" class="obyavleniya__img">
        <p class="obyavleniya__location">${item.location}</p>
        <a href="../card/kornealli.html" class="obyavleniya__heading">${item.obyavleniyaHeading}</a>
        <p class="obyavleniya__timer">${item.time}</p>
        <a class="obyavleniya__tel" href="tel:998712007007">${item.call}</a>
        <p class="obyavleniya__price">${item.price} <span class="obyavleniya__price__span">UZS</span></p>
        </div>
       `
    return announcements.innerHTML += renderCard;
};


const searchBtn = document.getElementById('searchBtn')

const inputValue = document.querySelector('#searchbar');



function search(){
  let input= inputValue.value;
  localStorage.setItem("search",input);
  window.location.href = "/filter/filter.html"
}


searchBtn.addEventListener('click',search)

inputValue.addEventListener(
  "keyup",(event)=>{
    let value = event.target.value;
    if (value == ""){
      search()
    }
  }
)

// search_end

// obyavlenya__start

let obyavleniyaGeneralBox = document.querySelector('.obyavleniya__general__box');


obyavleniyaCard.forEach((item,index) => {
  index = index + 1;
  const cardObyavleniya = `
  <div>
  <div class="obyavleniya__inner__box--${index} obyavleniya__inner" >
  <img src="${item.img}" class="obyavleniya__img">
    <p class="obyavleniya__location">${item.location}</p>
    <a href="../card/kornealli.html" class="obyavleniya__heading">${item.obyavleniyaHeading}</a>
    <p class="obyavleniya__timer">${item.time}</p>
    <a class="obyavleniya__tel" href="tel:998712007007">${item.call}</a>
    <p class="obyavleniya__price">${item.price} <span class="obyavleniya__price__span">UZS</span></p>
    </div>
  </div>
    `
    obyavleniyaGeneralBox.innerHTML += cardObyavleniya;
  })

//  zagruzitBtn

  const zagruzitBolshe = document.getElementById('obyavleniya__btn__zagruzit')
  zagruzitBolshe.addEventListener('click',zagruzitCategory);
  
  function zagruzitCategory(){
    obyavleniyaCard.forEach((item,index) => {
      index = index + 1;
      const cardObyavleniya = `
      <div>
      <div class="obyavleniya__inner__box--${index} obyavleniya__inner" >
      <img src="${item.img}" class="obyavleniya__img">
        <p class="obyavleniya__location">${item.location}</p>
        <a href="../card/kornealli.html" class="obyavleniya__heading">${item.obyavleniyaHeading}</a>
        <p class="obyavleniya__timer">${item.time}</p>
        <a class="obyavleniya__tel" href="tel:998712007007">${item.call}</a>
        <p class="obyavleniya__price">${item.price} <span class="obyavleniya__price__span">UZS</span></p>
        </div>
      </div>
        `
        obyavleniyaGeneralBox.innerHTML += cardObyavleniya;
      })
  }

// dropdown

function myFunction() {
   document.getElementById("myDropdown").classList.toggle("show");
  
  
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
   if (!event.target.matches('.dropbtn')) {
     var dropdowns = document.getElementsByClassName("dropdown-content");
     var i;
     for (i = 0; i < dropdowns.length; i++) {
       var openDropdown = dropdowns[i];
       if (openDropdown.classList.contains('show')) {
         openDropdown.classList.remove('show');
       }
     }
   }
  }

