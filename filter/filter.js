let list = obyavleniyaCard;


function getFilter(list,categories,citys){
  return list.filter(el=>{
    return ((categories.includes(el.category) || categories.length == 0) && (citys.includes(el.cityID) || citys.length == 0)) && el.obyavleniyaHeading.toLowerCase().includes(localStorage.getItem("search"))
  })
}



const announcements = document.getElementById('announcements');


const renderCards = (item, index) => {
  const renderCard =`
  
       <div class="obyavleniya__inner__box--${index} obyavleniya__inner">
    <img src="../${item.img}" class="obyavleniya__img">
      <p class="obyavleniya__location">${item.location}</p>
      <a href="../card/kornealli.html" class="obyavleniya__heading">${item.obyavleniyaHeading}</a>
      <p class="obyavleniya__timer">${item.time}</p>
      <a class="obyavleniya__tel" href="tel:998712007007">${item.call}</a>
      <p class="obyavleniya__price">${item.price} <span class="obyavleniya__price__span">UZS</span></p>
      </div>
     `
  return renderCard;
};

function renderList(list){
  let el = document.querySelector("#announcements")
  
  el.innerHTML = ""



  if (list.length == 0){
    announcements.innerHTML = `  <div class="errorBox"> 
    <img src="../img/searchError.png" class="searchErrorImg" alt="">
    <h3 class="searchEror-heading">Ничего не найдено</h3>
    <p class="searchEror-text">Упс! Мы не смогли найти ни одного <br> подходящего результата по вашему запросу</p>

    </div>`
  }

  list.forEach((item,index)=>{
    el.innerHTML += renderCards(item,index)
  })
}

renderList(getFilter(list,[1,2,3,4,5,6,7,8,9],[1,2,3,4,5,6,7,8,9,10,11,12,13,14]))

let filters = document.querySelectorAll(".filter")
let filterSelect = document.querySelector("#filter-select")

let nowCategories = []
let nowCitys = []

filterSelect.addEventListener("change",el=>{
  let id = el.target.value*1

  nowCitys =[id]


  renderList(getFilter(list,nowCategories,nowCitys))
})

filters.forEach(function(el){
  el.addEventListener("change",e=>{
    let id = el.getAttribute("itemID")

    if (nowCategories.includes(id*1)){
      nowCategories.pop(id*1)
    }else{
      nowCategories.push(id*1)
    }
  
    renderList(getFilter(list,nowCategories,nowCitys))
  })
})


const searchCategoryInput = document.querySelector(".searchCategory__input");

searchCategoryInput.addEventListener('keyup', (e)=>{
  localStorage.setItem("search",e.target.value);
  renderList(getFilter(list,nowCategories,nowCitys))
})

document.querySelector("#search-input").value = localStorage.getItem("search")