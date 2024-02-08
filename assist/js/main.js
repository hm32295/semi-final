let homePage = document.querySelector("#homePage");
// creat Home Page


// List 
function showList(){
    document.getElementById("nav").classList.add("show__nav");
}
function hiddenList(){
    document.getElementById("nav").classList.remove("show__nav");
}

 
// The Button Back To Top
let header = document.querySelector(".header header");

window.addEventListener("scroll", function(){
    let headerContainer = document.querySelector(".m-container.header"),
        backToUP = document.getElementById("backToTop");
    if(window.scrollY >= 250){
        backToUP.style.display = "flex";
        headerContainer.classList.add("header__scroll");
        document.querySelector(".header__logo i").style.color = "var(--color-title)";
        document.querySelector(".dotted i").style.color = "#000";
    }else{
        document.querySelector(".dotted i").style.color = "#fff";
        backToUP.style.display = "none";
        headerContainer.classList.remove("header__scroll");
        document.querySelector(".header__logo i").style.color = "#fff";
    }
    
})

function backToUp(){
    scrollTo(0,0);
}
// Start Sign In

// Alrady Acount
function accountUser(){
    if(localStorage.data){
        document.querySelector(".cart-shopping").style.display = "flex";
        document.querySelector(".dotted").style.display = "flex";
        document.querySelectorAll(".Enroll__now").forEach(btn=>{
            
            btn.style.display = "none"
            
        })
    }else{
        document.querySelector(".cart-shopping").style.display = "none";

    }
    
}

// Start sign up


// Show And Hidden
function hiddenSign(){
    let sign = document.getElementsByClassName("sign")[0];
    
    sign.style.display= "none";
    showSignIn();
}
function showSign(){
    let sign = document.getElementsByClassName("sign")[0];
    hiddenMessageNocrrectInSign();
    sign.style.display = "flex";
}
// Show Sign Up To Enroll New Account

function ShowSignUp(){
    let creat__new__acount = document.getElementById("creat__new__acount"),
        creat = document.getElementById("creat");
        
        creat.style.display = "none";
        creat__new__acount.style.display = "flex";
}
function showSignIn(){
    let creat__new__acount = document.getElementById("creat__new__acount"),
        creat = document.getElementById("creat");
    creat__new__acount.style.display = "none";
    creat.style.display = "flex";

}

// Sava Data In LocalStorage

let checkFreeOrFull__new = false


// Start Check Data
let userNew = true;
let check;

function checkData(){
    let name__new = document.getElementById("name__new");
    let userName__new = document.getElementById("username__new");
    let address__new = document.getElementById("address__new");
    let password__new= document.getElementById("password__new");
    let rePassword__new = document.getElementById("repassword__new");
    
    for(let i in localStorage){
        if(
            i === userName__new.value ||
            i === address__new.value
        )
        {
            userNew = false;
        }
    }

    check = address__new.value
        .trim()
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )

    if( (name__new.value !== "" &&
        userName__new.value !== "" && 
        address__new.value !== "" &&
        password__new.value === rePassword__new.value))
    {
        checkFreeOrFull__new = true;
    }
    
}


// Start Sava Data LocalStorage
function savaDataLocalStorage(){
    let signUpH3 = document.querySelector("#creat__new__acount h3");
    let name__new = document.getElementById("name__new");
    let userName__new = document.getElementById("username__new");
    let address__new = document.getElementById("address__new");
    let password__new= document.getElementById("password__new");
    checkData();
    // Push Data
    if(checkFreeOrFull__new && userNew && check !== null){
        let newUser = {

            name:name__new.value,
            password:password__new.value,
            address : address__new.value,
        }
        newUser = JSON.stringify(newUser)
        localStorage.setItem(userName__new.value ,newUser )
       
        showComleatAccount(document.querySelector(".compleat"));
        clearInput();
        showSignIn();
        hiddenMessageNocrrectInSign()
    }else{
        signUpH3.innerHTML = "The Email Or email Is Orrady Used After Or The Password No Identcal";
        signUpH3.style.display = "flex";
        userNew = true;

    }


}
// Start Sign In
function signIn(){
    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    let ok = false;
    
    let signInH3 = document.querySelector("#creat h3");
    
    if(userName.value === "" || password.value === "") return;
     for(let i in localStorage){
        
         if( i == "data")  continue;
        
        let item = JSON.parse(window.localStorage.getItem(i))
        if(item === null ) continue;
         if( i === userName.value && item.password === password.value){
                setUserLocal(i);
                getUserLocal();
                hiddenSign();
                clearInput();
                accountUser();
                ok = true;
                hiddenMessageNocrrectInSign();
        }

     }
     if(!ok){
        signInH3.style.display = "block";

     }

}
// Clear Inputs In Sign Up And Sign In
function clearInput(){
    let userName = document.getElementById("username");
    let password = document.getElementById("password");
    let name__new = document.getElementById("name__new");
    let userName__new = document.getElementById("username__new");
    let address__new = document.getElementById("address__new");
    let password__new= document.getElementById("password__new");
    let rePassword__new = document.getElementById("repassword__new");
    
    name__new.value = "";
    userName__new.value = "";
    address__new.value = "";
    rePassword__new.value = "";
    password__new.value = "";

    userName.value = "";
    password.value = ""; 
}

function hiddenMessageNocrrectInSign(){
    let signUpH3 = document.querySelector("#creat__new__acount h3");
    
    let signInH3 = document.querySelector("#creat h3");

        signUpH3.style.display = "none";
        signInH3.style.display = "none";

}


function setUserLocal(userName){
    if(userName !== ""){

        localStorage.setItem("data" , userName);
    }
    
}
function getUserLocal(){
    
    if(localStorage.data){
        accountUser()
        let btn = document.querySelector(".header__enroll__userName");
        if(btn === null) return
        btn.style.display = "flex";
        let span = document.querySelector(".header__enroll__userName__name")
        span.innerHTML = localStorage.data; 


    }
    
}

// list sign out
function showBtnSignOut(){
    document.querySelector(".dotted p").style.display = "flex";
}
function hiddenBtnSignOut(){
    document.querySelector(".dotted p").style.display = "none";

}
function logOut(){
    if(localStorage.data !== null){

        localStorage.removeItem("data");
    }
    getUserLocal()


    let btn = document.querySelector(".header__enroll__userName");
    btn.style.display = "none";
    document.querySelectorAll(".Enroll__now").forEach(btn=>{
            btn.style.display = "flex";
    });

    location.reload();

}


 