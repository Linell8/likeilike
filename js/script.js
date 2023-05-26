window.addEventListener("DOMContentLoaded", function () {
	"use strict";

  // модальное окно куки
  const cookies = document.getElementById("cookies");
    const cookiesBtn = document.getElementById("cookies__button");

    cookiesBtn.addEventListener("click", function () {
      cookies.style.display = "none";
    });


    // слайдер в модальном окне

    const modal = document.getElementById("modal");
    const btn = document.getElementById("modal-portfolio__button");
    const closeBtn = document.querySelector(".modal__close");

    btn.addEventListener("click", function () {
      modal.classList.add("modal_active");

      closeBtn.addEventListener("click", closeModal);

      function closeModal() {
        modal.classList.remove("modal_active");

        closeBtn.removeEventListener("click", closeModal);

        modal.removeEventListener("click", hideModal);
      }

      modal.addEventListener("click", hideModal);

      //Закрытие при клике вне зоны модального окна
      function hideModal(event) {
        if (event.target === modal) {
          closeModal();
        }
      }
    });

    const img = document.querySelector('.slider-js__image');
    const imgArr = ['../img/portfolio1.png','../img/portfolio2.png','../img/portfolio3.png'];
    let currentIndex = 0;
        
    function nextIndex(direction){
        currentIndex +=direction;
        if(currentIndex >= imgArr.length){
            currentIndex = 0;
        } else if (currentIndex<0) {
            currentIndex = imgArr.length - 1;
        }
        slide(currentIndex);    
    }
    
    function slide(index){
        img.style.display = 'none';
        setTimeout(()=>{
            img.style.display = 'block';
        }, 0);
        img.src = imgArr[index];
        updateDots(index);
        
    }

    const btnLeft = document.querySelector('.slider-js__nav-left');
    const btnRight = document.querySelector('.slider-js__nav-right');
    
     btnLeft.addEventListener('click', ()=>{
        nextIndex(-1)
    });
    btnRight.addEventListener('click', ()=>{
        nextIndex(1)
    });

	// табы

  let tab = function () {
    let tabNav = document.querySelectorAll('.list__item'),
        tabContent = document.querySelectorAll('.tab'),
        text1 = document.getElementById('change-size'),
        text2 = document.getElementById('change-weight'),
        tabName;

    tabNav.forEach(item => {
      item.addEventListener ('click', selectTabNav)
    })

    function selectTabNav() {
      tabNav.forEach(item => {
        item.classList.remove('is-active');
      });

      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      
      if (tabName == 'tab-1') {
        text1.textContent = "our story";
        text2.textContent = "// ABOUT US";
      } else if (tabName == 'tab-2') {
        text1.textContent = "what do we do";
        text2.textContent = "// SERVICES";
      } else if (tabName == 'tab-3') {
        text1.textContent = "where to find us";
        text2.textContent = "// CONTACT US";
      }

      selectTabContent(tabName);
    }
    
    function selectTabContent(tabName) {
      tabContent.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add ('is-active') : item.classList.remove('is-active');
      })
    }
  }

  tab();
	
  // фильтрация

  let flt = function() {
    let fltNav = document.querySelectorAll('.btn'),
        fltContent = document.querySelectorAll('.gallery__itm'),
        fltName;
        
        fltNav.forEach(item => {
          item.addEventListener ('click', selectFltNav)
        })
    
        function selectFltNav() {
          fltNav.forEach(item => {
            item.classList.remove('explore-active');
          });
    
          this.classList.add('explore-active');
          fltName = this.getAttribute('data-flt-name');
          
          showElems(fltName);
          console.log(fltName);
        }

        function showElems() {
          fltContent.forEach(item => {
            item.classList.contains(fltName) ? item.classList.remove ('hide') : item.classList.add('hide');
          })
        }
      }

  flt();


  // аккордеон

  const accordion = () => {
		const btns = document.querySelectorAll(".accordion__head");
		btns.forEach((btn) => {
			btn.addEventListener("click", function () {
				this.classList.toggle("active-style");
				
				this.nextElementSibling.classList.toggle("accord-active");
			});
		});
  };
	accordion();

  // бургер меню

  const hamb = document.querySelector("#hamb");
	const popup = document.querySelector("#popup");
	const menu = document.querySelector("#menu");
	
	hamb.addEventListener("click", hambHandler);

	function hambHandler(e) {
		popup.classList.toggle('open');
		renderPopup();
	}
	function renderPopup() {
		popup.appendChild(menu);
	}

});