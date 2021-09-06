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
}
closeForm.onclick = ()=>{
    myAccountForm.classList.remove("show");
}
document.querySelector(".account-icon").onclick = ()=>{
    myAccountForm.classList.toggle("show");

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
    
}

closeSearch.onclick = ()=>{
    searchFieldMobil.classList.remove("show");

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
}

closeMenu.onclick = ()=>{
    theMenu.classList.remove("show");
}