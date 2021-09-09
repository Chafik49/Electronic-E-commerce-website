// TOP BAR //

let langZone = document.querySelector(".lang-zone"),
    langItem = document.querySelectorAll(".lang-zone .lang"),
    curency = document.querySelector(".curency"),
    curencyItem = document.querySelectorAll(".curency .cur");


langZone.addEventListener("click", ()=>{
    langZone.classList.toggle("show");
});

langItem.forEach(e=>{
    e.addEventListener("click",()=>{
        removeLangClass();
        e.classList.add("top");
        
    })
})

const removeLangClass = ()=>{
    langItem.forEach(e=>{
        e.classList.remove("top");
    })

}

curency.addEventListener("click", ()=>{
    curency.classList.toggle("show");
});

curencyItem.forEach(el=>{
    el.addEventListener("click",()=>{
        removeCurencyClass();
        el.classList.add("top");
        
    })
})

const removeCurencyClass = ()=>{
    curencyItem.forEach(el=>{
        el.classList.remove("top");
    })

}

let myAccount = document.querySelector(".my-account > span"),
    myAccountForm = document.querySelector(".account-form"),
    closeForm = document.getElementById("close-form");

myAccount.onclick = ()=>{
    myAccountForm.classList.toggle("show");
    document.querySelector(".top-bar").classList.toggle("of");
    document.querySelector("header").classList.toggle("of");
    document.querySelector("section").classList.toggle("of");
    document.querySelector(".slide-cont").classList.toggle("of");

    

}
closeForm.onclick = ()=>{
    myAccountForm.classList.remove("show");
    document.querySelector(".top-bar").classList.remove("of");
    document.querySelector("header").classList.remove("of");
    document.querySelector(".slide-cont").classList.remove("of");
    document.querySelector("section").classList.remove("of");


}
document.querySelector(".account-icon").onclick = ()=>{
    myAccountForm.classList.toggle("show");
    document.querySelector(".top-bar").classList.toggle("of");
    document.querySelector("header").classList.toggle("of");
    document.querySelector("section").classList.toggle("of");
    document.querySelector(".slide-cont").classList.toggle("of");

}

let selectLabel = document.querySelector(".select-field"),
    selectMenu = document.querySelector(".select-menu"),
    selectItem =document.querySelectorAll(".select-menu span");

selectLabel.onclick = ()=>{
    selectMenu.classList.toggle("show");
}
selectItem.forEach(it=>{
    it.addEventListener("click", ()=>{
       document.querySelector("label p").textContent = it.textContent;
       
    })

})

let passwordForm = document.getElementById("password-form"),
    closedEye = document.getElementById("closeEye"),
    openEye = document.getElementById("openEye");


closedEye.onclick = ()=>{
    closedEye.classList.toggle("of");
    openEye.classList.toggle("of");
    if(closedEye.classList.contains("of")){
        passwordForm.type = "text";
    }else{
        passwordForm.type = "password";

    }
}
openEye.onclick = ()=>{
    closedEye.classList.toggle("of");
    openEye.classList.toggle("of");
    if(closedEye.classList.contains("of")){
        passwordForm.type = "text";
    }else{
        passwordForm.type = "password";

    }
}
let searchFieldMobil = document.querySelector(".search-form-mobil"),
    closeSearch = document.querySelector(".close-search"),
    leftSearchIcon = document.querySelector(".src-icon");


leftSearchIcon.onclick = ()=>{
    searchFieldMobil.classList.toggle("show");
    document.querySelector(".top-bar").classList.toggle("of");
    document.querySelector("header").classList.toggle("of");
    document.querySelector("section").classList.toggle("of");
    document.querySelector(".slide-cont").classList.toggle("of");
    
}

closeSearch.onclick = ()=>{
    searchFieldMobil.classList.remove("show");
     document.querySelector(".top-bar").classList.remove("of");
    document.querySelector("header").classList.remove("of");
    document.querySelector(".slide-cont").classList.remove("of");
    document.querySelector("section").classList.remove("of");


}

let selectLabelMobil = document.querySelector(".select-field-mobil"),
    selectMenuMobil = document.querySelector(".select-menu-mobil"),
    selectItemMobil =document.querySelectorAll(".select-menu-mobil span");

selectLabelMobil.onclick = ()=>{
    selectMenuMobil.classList.toggle("show");
};

selectItemMobil.forEach(it=>{
    it.addEventListener("click", ()=>{
       document.querySelector("label p").textContent = it.textContent;
       
    })

});

let showMoreIcon = document.querySelectorAll(".show-more"),
    itemsHome = document.querySelector(".home-items"),
    itemsShop = document.querySelector(".shop-items"),
    itemsBlog = document.querySelector(".blog-items"),
    menuIcon = document.querySelector(".menu-icon"),
    theMenu = document.querySelector(".themenu"),
    closeMenu = document.querySelector(".close-menu");

showMoreIcon.forEach(icon=>{
    icon.onclick = function(){
        this.classList.toggle("show");
        
        if(icon.classList.contains("home")){
            itemsHome.classList.toggle("show");
        }else if(icon.classList.contains("shop")){
            itemsShop.classList.toggle("show");

        }else if(icon.classList.contains("blog")){
            itemsBlog.classList.toggle("show");
        }
        
    }
});

menuIcon.onclick = ()=>{
    theMenu.classList.toggle("show");
    document.querySelector(".top-bar").classList.toggle("of");
    document.querySelector("header").classList.toggle("of");
    document.querySelector("section").classList.toggle("of");
    document.querySelector(".slide-cont").classList.toggle("of");
}

closeMenu.onclick = ()=>{
    theMenu.classList.remove("show");
    document.querySelector(".top-bar").classList.remove("of");
    document.querySelector("header").classList.remove("of");
    document.querySelector(".slide-cont").classList.remove("of");
    document.querySelector("section").classList.remove("of");

}

let dot = document.querySelectorAll(".dots span"),
    slider = document.querySelectorAll(".slider");

let currentSlide = 0;

dot.forEach(dt=>{

    dt.onclick = ()=>{
        removeActiveDot();
        dt.classList.add("active");
        if(dt.classList.contains("dot-1")){
            currentSlide = 0;
            console.log(currentSlide);
        }
        if(dt.classList.contains("dot-2")){
            currentSlide = 1;
            console.log(currentSlide);
            
        }
        if(dt.classList.contains("dot-3")){
            currentSlide = 2;
            console.log(currentSlide);
            
        }
        goOfSlide(currentSlide);
      
        gotoSlide(currentSlide);
    }
    
})

const removeActiveDot = ()=>{
    dot.forEach(d=>{
        d.classList.remove("active");
    })
}
function gotoSlide(sileNumber){
    classSlide();
    slider[sileNumber].classList.add("active");

}
function goOfSlide(num){
    if(num > 0 ){
        removeClassOf();
        slider[num-1].classList.add("of");
        
    }
    
}
const classSlide = ()=>{
    slider.forEach(s=>{
        s.classList.remove("active");
    })
}

function removeClassOf(){
    slider.forEach(s=>{
        s.classList.remove("of");
    })
}

let slidesContainerOne = document.querySelector(".img-solde-one"),
    slideImgOne = document.querySelectorAll(".slide-img");
    nextBtnOne = document.querySelector(".next-one"),
    prevBtnOne= document.querySelector(".prev-one"),

    numberOfImgOne = slideImgOne.length,
    slideOneWidth = slideImgOne[0].clientWidth,
    slideNowOne = 0;

const initOne = ()=>{
    slideImgOne.forEach( (img,i)=>{
        img.style.left = i * 100 + "%";
    })
}
initOne();

nextBtnOne.addEventListener("click",()=>{
    prevBtnOne.classList.remove("done");
    slideNowOne++;
    goToSlide(slideNowOne);
    if(slideNowOne >= numberOfImgOne-1){
        nextBtnOne.classList.add("done");
        return;
    }
})
prevBtnOne.addEventListener("click",()=>{
    nextBtnOne.classList.remove("done");
    slideNowOne--;
    goToSlide(slideNowOne);
    if(slideNowOne <= 0){
        prevBtnOne.classList.add("done");
        return;
    }
})
function goToSlide(slideNumber){
    let step = slideOneWidth * slideNumber;
    slidesContainerOne.style.transform = `translate(-${step}px)`;

}

