// obyavlenya__start

let obyavleniyaGeneralBox = document.querySelector('.obyavleniya__general__box');


obyavleniyaCard.forEach((item,index) => {
  index = index + 1;
  const cardObyavleniya = `
  <div>
  <div class="obyavleniya__inner__box--${index} obyavleniya__inner" >
  <img src="../${item.img}" class="obyavleniya__img">
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




// obyavleniya end