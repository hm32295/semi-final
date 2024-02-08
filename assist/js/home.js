

// Start Welcome

let more = true;
function learnMoreInWelcome(ancor){
    let para = document.querySelector(".welcome__content p:last-of-type");
    let allPara = document.querySelectorAll(".welcome__content p:last-of-type p");
    
        if(more){
            for(let i = 0 ; i < 3 ; i++){
                para.innerHTML += `
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                `
            }
            if(allPara.length > 1){
                 ancor.innerHTML = 'Show Less';
                 more = false;
            }
            ancor.hasAttribute("href") ? ancor.removeAttribute("href") : null;
        }else{
            for(let i = 0 ; i < 2 ; i++){
                ancor.innerHTML = 'Show More';
                para.innerHTML = `
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                `
            }
            
            ancor.setAttribute("href","#welcome");
            more = true;
            
        }
       
    

    
}


// Start Gallary

function gallary(cover){
    let galleryModule = document.getElementById("gallery__module");
    let src = cover.parentElement.querySelector("img").src

    
    galleryModule.classList.add("gallery__module");
    galleryModule.innerHTML = `
        <div>
            <img onclick="event.stopPropagation()" src="${src}" /> 
        </div>
        `   
}
function hiddinImg(galleryModule){
    galleryModule.classList.remove("gallery__module");

}


// Start Faqs
function showParaInFaqs(icon){
    // let parent = icon.parentElement;
    let grandParent = icon.parentElement.parentElement.querySelector("p");
    
    let show = true;
    if(grandParent.style.display === "block") show = false;
    
    let allParentPara = document.querySelectorAll(".faqs__accordion__item");
    allParentPara.forEach(p=>{
        p.querySelector("p").style.display = "none";
        p.querySelector("i").innerHTML = "+"
        p.querySelector(".faqs__accordion__title").classList = "faqs__accordion__title";
    })
    if(show){
        icon.innerHTML = "-"
        grandParent.style.display = "block";
        icon.parentElement.classList.add("faqs__accordion__title__active")
    }

}


