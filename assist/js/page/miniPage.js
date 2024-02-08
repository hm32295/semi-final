
function creatHeaderInHomePage(){
    creatLoder();
    
    
    homePage.innerHTML = `
         <!-- Start Header -->
    <div class="m-container header">
    <header class="d-flex flex-wrap justify-content-between align-items-center">
            
            <div class="header__logo">
                <img src="./assist/img/Logo.png" alt="logo">
                <i onclick="showFatora()" class="fa-solid fa-cart-shopping cart-shopping"></i>

            </div>
            <nav id="nav" onclick="hiddenList()">
                <ul class="main__nav d-flex" onclick="event.stopPropagation()">
                
                    <li class="home" onclick="creatAllHomePage()">
                        <span>${dataHeader[0].home}</span>
                        
                    </li>
                    <li onclick="creatAboutPage()"><span class="about">${dataHeader[0].about}</span></li>
                    <li onclick="creatCalssesPage()">
                        <span class="class">${dataHeader[0].classes}</span>
                       
                    </li>
                    <li onclick="creatProgramPage()">
                        <span class="program">${dataHeader[0].programm}</span>
                    </li>
                    <li>
                        <span class="pages">${dataHeader[0].page}</span>
                        <i class="fas fa-chevron-down"></i>
                        <div class="sub__ul">
                            <ul>
                                <li onclick="creatTeacerPage()" class="teacher" >${dataHeader[0].teacher}</li>
                                <li onclick="creatGalleryPage()"  class="gallery" >${dataHeader[0].gallery}</li>
                                <li onclick="creatFaqsPage()"  class="Hfaqs" >${dataHeader[0].faqs}</li>
                                <li onclick="creatBlogPage()"  class="blog" >${dataHeader[0].blog}</li>
                            </ul>
                        </div>
                    </li>
                    <li onclick="creatShopPage()">
                        <span class="Hshop">${dataHeader[0].shop}</span>
                        
                    </li>
                    <li onclick="creatContactPage()">
                        <span class="contact">${dataHeader[0].contact}</span>
                    </li>
                </ul>
            </nav>

            <div class="header__enroll__list d-flex justify-content-between align-items-center">
                <i class="fa-solid fa-bars text-white" onclick="showList()"></i>
                <div class="header__enroll">
                    <a  onclick="showSign()" class="Enroll__now">${dataHeader[0].signUb}</a>
                </div>
                <div class="header__enroll__userName">
                    <span class="header__enroll__userName__name">hamza</span>
                    <span class="dotted" onclick="event.stopPropagation()">
                        <i class="fa-solid fa-ellipsis-vertical" onclick="showBtnSignOut()"></i>
                       <p>
                            <span onclick="logOut()">${dataHeader[0].logOut}</span>
                        </p>

                    </span>
                </div>

            </div>
        </header>
    </div>
    `
    
    homePage.innerHTML +=`
        <div class="backToTop" id="backToTop" onclick="backToUp(this)">
            <i class="fas fa-chevron-up"></i>
        </div>
        
    `
    homePage.innerHTML +=`
        <div class="sign" onclick="hiddenSign()">
        <form action="" id="creat__new__acount" onclick="event.stopPropagation()" style="display: none;">
            <h2>${dataSign[0].signin}</h2>
            <h3>${dataSign[0].h3__1}</h3>


            <label for="name__new">${dataSign[0].name}</label>
            <input type="text" id="name__new">

            <label for="username__new">${dataSign[0].user}</label>
            <input type="text" id="username__new">

            <label for="address__new">${dataSign[0].email}</label>
            <input type="text" id="address__new">

            <label for="password__new">${dataSign[0].pass}</label>
            <input type="password" id="password__new">

            <label for="repassword__new">${dataSign[0].rePass}</label>
            <input type="password" id="repassword__new">

            <a onclick="savaDataLocalStorage()">${dataSign[0].signMe}</a>
            <a onclick="showSignIn()">${dataSign[0].signin}</a>
        </form>

        <form action="" id="creat" onclick="event.stopPropagation()">
            <h2>${dataSign[0].signin}</h2>
            <h3>${dataSign[0].h3__2}</h3>
            <label for="username">${dataSign[0].user}</label>
            <input type="text" id="username">

            <label for="password">${dataSign[0].pass}</label>
            <input type="password" id="password">


            <a onclick="signIn()">${dataSign[0].signin}</a>
            <a onclick="ShowSignUp()">${dataSign[0].create}</a>
            
        </form>

    </div>
    `
    creatNotafiction()
    creatCompleatAccount()
    getUserLocal();
    backToUp();
    document.querySelector(".search__icon").style.display = "flex"

    
}

function creatSliderInHomePage(){
    
    homePage.innerHTML +=`
        <div class="slider">
                    
            <div class="slider__slice" >
            <div class="slider__cover"></div>
            <div class="slider__contant">
                <h2>${dataSlider[0].h2}</h2>
                <p>
                    ${dataSlider[0].p}
                </p>
            </div>
            <div class="slider__btn">
                <div class="header__enroll header__enroll__slider">
                    <a onclick="showSign()" class="Enroll__now">${dataSlider[0].btnSignUp}</a>
                </div>
                <div class="header__enroll program__slider">
                    <a onclick="creatProgramPage()">${dataSlider[0].btnProgramm}</a>
                </div>
            </div>
            </div>
        </div>
    `
    // chech show btn sign up or hidden
    accountUser();
}

function creatWelcomeInHomePage(){
    homePage.innerHTML += `
        <!-- Start Welcome -->
    <div id="welcome" class="welcome m-container d-flex">
        <div class="welcome__content">
            <h3 class="text-uppercase">${dataWelcome[0].h3}</h3>
            <h2 class="text-capitalize">${dataWelcome[0].h2}</h2>
            <p class="para-one">${dataWelcome[0].para1}</p>
            <p class="para-two">${dataWelcome[0].para2}</p>

            <div class="header__enroll">
                <a onclick="learnMoreInWelcome(this)">${dataWelcome[0].btn}</a>
            </div>

        </div>
        <div class="welcome__img position-relative">
            <div class="welcome__img__text position-absolute">
                <p class="date">${dataWelcome[0].paraSince1}</p>
                <p class="type">${dataWelcome[0].paraSince2}</p>
            </div>
            <img src="./assist/img/welcome.jpg" alt="Welcome ToSchool">
        </div>
    </div>
    `
}

function creatCounterInHomePage(){
    homePage.innerHTML +=`
        <!-- Start Counter -->
    <div class="counter">
        <div class="m-container flex-wrap d-flex justify-content-between">
        
            <div class="counter__excellence position-relative">
                <div class="counter__excellence__text exe">
                    <span>20+</span>
                    <p>${dataCounter[0].excellence}</p>
                </div>
                <img src="./assist/img/counter-icon-1.svg" alt="" class="counter__excellence__icon">
            </div>
          
            <div class="counter__excellence position-relative">
                <div class="counter__excellence__text teacher">
                    <span>100+</span>
                    <p>${dataCounter[0].qualified}</p>
                </div>
                <img src="./assist/img/counter-icon-2.svg" alt="" class="counter__excellence__icon">
            </div>
          
            <div class="counter__excellence position-relative">
                <div class="counter__excellence__text enroll">
                    <span>1500+</span>${dataCounter[0].enrolled}</p>
                </div>
                <img src="./assist/img/counter-icon-3.svg" alt="" class="counter__excellence__icon">
            </div>
            <div class="counter__excellence position-relative">
                <div class="counter__excellence__text award">
                    <span>12+</span>
                    <p>${dataCounter[0].total}</p>
                </div>
                <img src="./assist/img/counter-icon-4.svg" alt="" class="counter__excellence__icon">
            </div>
   
           
       
        </div>
    </div>
    `
}

function creatGalleryInHomePage(){
    homePage.innerHTML += `
        <!-- Start Gallery -->
    <div class="gallery">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataGallery[0].h3}</h3>
                <h2 class="text-capitalize">${dataGallery[0].h2}</h2>
            </div>
            
            <div class="gallery__imgs">
                <div onclick="hiddinImg(this)" id="gallery__module" class="gallery__module__none">
                </div>
                <div class="gallery__img__part1 d-flex w-100%">
                    <div>
                        <img  src="./assist/img/gallery.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                    <div>
                        <img  src="./assist/img/gallery 2.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                </div>

                <div class="gallery__img__part1 d-flex w-100%">
                    <div>
                        <img  src="./assist/img/gallery.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                    <div>
                        <img  src="./assist/img/gallery 2.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                    <div>
                        <img  src="./assist/img/gallry 3.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                </div>
                <div class="gallery__img__part1 d-flex w-100%">
                    <div>
                        <img  src="./assist/img/gallery.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                    <div>
                        <img  src="./assist/img/gallry 3.jpg" alt="">
                        <div onclick="gallary(this)" class="gallery__img__part1__cover"></div>
                    </div>
                </div>

            </div>

        </div>
    </div>
    `
}

function creatServicesInHomePage(){
    homePage.innerHTML +=`
         <!-- Start Services -->
    <div class="services">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataTitleClasses[0].h3}</h3>
                <h2 class="text-capitalize">${dataTitleClasses[0].h2}</h2>
            </div>

            <div class="services__cards flex-wrap d-flex justify-content-between">
           
            </div>

        </div>
    </div>
    `
    let clasess = document.querySelector(".services__cards");

    creatClasess(clasess);
}

function creatOverviewInHomePage(){
    homePage.innerHTML += `
        <!-- Overview-section -->

    <div class="overview">
        <div class="m-container align-items-center d-flex justify-content-between flex-wrap">
            <img  src="./assist/img/overview.jpg" alt="">
            <div class="overview__right ">
                <div class="title text-center">
                    <h3 class="text-uppercase">${dataOverviewTitle[0].h3}</h3>
                    <h2 class="text-capitalize">${dataOverviewTitle[0].h2}</h2>
                </div>
                <p>
                    ${dataOverviewTitle[0].p}
                </p>
                <div  class="overview__text d-flex flex-wrap justify-content-between">
                    
                </div>
            </div>
        </div>


    </div>
    `
    let cards = document.querySelector(".overview__text")
    creatOverview(cards);
    
}

function creatTeamAreaInHomePage(){
    homePage.innerHTML +=`
         <!-- Start Team Area -->
    <div class="teamArea">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataTeachertitle[0].h3}</h3>
                <h2 class="text-capitalize">${dataTeachertitle[0].h2}</h2>
            </div>

            <div class="teamArea__cards d-flex justify-content-between flex-wrap">
            </div>
        </div>
    </div>
    `
    let teachers = document.querySelector(".teamArea__cards");
    creatAllTeacher(teachers);

}

function creatHireInHomePage(){
    homePage.innerHTML +=`
    
         <!-- Start Hire -->
        <div class="hire text-light">
            <div class="m-container flex-column d-flex justify-content-center align-items-center">
                <div class="title text-center">
                    <h3 class="text-uppercase">${dataHire[0].h3}</h3>
                    <h2 class="text-capitalize">${dataHire[0].h2}</h2>
                </div>

                <p >${dataHire[0].p}</p>
                <div class="hire__btn d-flex gap-4 mt-4 text-capitalize">
                    
                    <div class="header__enroll">
                        <a onclick="creatContactPage()">${dataHire[0].btn}</a>
                    </div>
                </div>

            </div>
        </div>
    `
}

function creatTestMonialInHomePage(){
    homePage.innerHTML +=`
         <!-- Start Test Monial -->
        <div class="testMonial">
            <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataTestMonialTitle[0].h3}</h3>
                <h2 class="text-capitalize">${dataTestMonialTitle[0].h2}</h2>
            </div>

            <div class="swiper-container testMonial__slider">
                <div class="swiper-wrapper">
                
                </div>
            </div>

            </div>
        </div>
    `

    testMonial(document.querySelector(".swiper-wrapper"))
}
function creatFaqsInHomePage(){
    homePage.innerHTML +=`
        <!-- Start Faqs -->
    <div class="faqs">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataFqsTitle[0].h3}</h3>
                <h2 class="text-capitalize">${dataFqsTitle[0].h2}</h2>
            </div>
            
            <div class="faqs__accordion">

                

            </div>
        </div>
    </div>

    `
    creatFaqs(document.querySelector(".faqs__accordion"))
}
function creatFaqs(div){
    div.innerHTML = "";

    dataFqs.forEach((ele) =>{
        div.innerHTML +=`
            <div class="faqs__accordion__item">
                    <div class="faqs__accordion__title">
                        <h2>${ele.question}</h2>
                        <i onclick="showParaInFaqs(this)">+</i>
                    </div>
                    <p>${ele.answer}</p>
                </div>
        
        `
    })
    
}

function creatNewInHomePage(){
    homePage.innerHTML +=`
         <!-- Start New -->
    <div class="new">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">${dataNewsTitle[0].h3}</h3>
                <h2 class="text-capitalize">${dataNewsTitle[0].h2}</h2>
            </div>
            <div class="new__cards">
            </div>
            <div class="header__enroll">
                <a onclick="creatBlogPage()">${dataNewsTitle[0].viewMore}</a>
            </div>
        </div>
    </div>

    `
    let cards = document.querySelector(".new__cards");
    blog(cards);

}

function creatFooterInHomePage(){
    homePage.innerHTML +=`
    
    <!-- Start Footer -->

    <footer>
        <div class="m-container">


            <div class="footer__title">
                <div class="footer__title__text">
                    <h2>${dataFooter[0].h2}</h2>
                    <h3>${dataFooter[0].h3}</h3>
                </div>
                <div class="footer__title__subscribe">
                    <input type="email" placeholder="${dataFooter[0].placeHolder}" />
                    <a onclick="subscribe(this)">${dataFooter[0].subscribe}</a>
                </div>
            </div>

            <div class="footer__cotact d-flex flex-wrap">
          
                <div class="footer__discription">
                
                    <img class="footer__discription__logo" src="./assist/img/Logo.png" alt="">
                    <p>${dataFooter[0].p}</p>
                    <div class="footer__discription__social">
                        <span><i class="fa-brands fa-facebook-f"></i></span>
                        <span><i class="fa-brands fa-x-twitter"></i></span>
                        <span><i class="fa-brands fa-youtube"></i></span>
                        <span><i class="fa-brands fa-linkedin-in"></i></span>
                    </div>
                </div>
                
                
                <div class="footer__div">
                    <h2>useful links</h2>
                    <ul>
                        <li onclick="creatAboutPage()">about us</li>
                        <li onclick="creatCalssesPage()">classes</li>
                        <li onclick="creatContactPage()">contact us</li>
                        
                    </ul>
                </div>
                <div class="footer__div">
                    <h2>contact info</h2>
                    <ul>
                        <li>phone <p>23344233</p></li>
                        <li>Email <p>hamz@sdsd.com</p></li>
                        <li>address <p>alfyom</p></li>
                       
                    </ul>
                </div>


            </div>

        </div>
        <div class="footer__title__copyRight">
            <div>${dataFooter[0].copyRaight1}</div>
            <div>${dataFooter[0].copyRaight2}</div>
        </div>
    </footer>`
}

function creatMainSectionInAnyPage(name){
    homePage.innerHTML += `
        <!-- Start Main  -->
        <div class="main">
            <div class="main__cover"></div>
            <h2>${name}</h2>
            <h3>${name} / <a onclick="creatAllHomePage()">home</a></h3>
        </div>
    `
}

// creat All Home Page
function creatAllHomePage(){
    creatHeaderInHomePage();
    creatSliderInHomePage();
    creatWelcomeInHomePage();
    creatCounterInHomePage();
    creatGalleryInHomePage();
    creatServicesInHomePage();
    creatOverviewInHomePage();
    creatTeamAreaInHomePage();
    creatHireInHomePage();
    creatTestMonialInHomePage();
    creatFaqsInHomePage();
    creatNewInHomePage();
    creatFooterInHomePage();
    
    creatMainFatora();
    backToUp();
    
   
    

}

creatAllHomePage();

function creatNotafiction(){
    homePage.innerHTML +=`
         <div class="notafiction">
            
        </div>
    `
}

// creat Clasess Details
function creatClasessDetails(index){
    creatHeaderInHomePage();
    let name ="Classes Details";
    creatMainSectionInAnyPage(name)
    
    homePage.innerHTML += `
        <div class="classesDetalis">

            <div class="m-container">

                <div class="classesDetalis__top d-flex justify-content-between flex-wrap">
                    <div class="classesDetalis__img">
                        <img src="${dataClasess[index].bgImgUrl}" alt="">
                    </div>
                    <div class="classesDetalis__info">
                        <h2>Class info</h2>
                        <span>
                            <span>age:</span>
                            <p>${dataClasess[index].age} years old learning</p>
                        </span>
                        <span>
                            <span>student:</span>
                            <p>${dataClasess[index].capacity}</p>
                        </span>
                        <span>
                            <span>time:</span>
                            <p>${dataClasess[index].time}</p>
                        </span>
                        <span>
                            <span>learn Day:</span>
                            <p>${dataClasess[index].learnDay}</p>
                        </span>
                        <span>
                            <span>Duration:</span>
                            <p>${dataClasess[index].duration} Minutes Per Class</p>
                        </span>
                    </div>
                </div>


                <div class="classesDetalis__discription">
                    <div>
                        <h2>classes Detalis</h2>
                        <p>${dataClasess[index].classesDetalis}</p>
                    </div>
                    <div>
                        <h2>discription</h2>
                        <p>${dataClasess[index].discrption}</p>
                    </div>
                </div>

            <div id="classesDetalis__experience"></div>
            </div>
        </div>
       
    `
    
    creatFqsInclassesDetailse(document.getElementById("classesDetalis__experience") , index)
    creatFooterInHomePage();
}

// Create Details Data In Classes Details
function creatFqsInclassesDetailse(div ,index){
    
    div.innerHTML ="";

    let question = dataClasess[index].question
    for(let answer in question)[

        div.innerHTML +=
        `
            <div class="classesDetalis__experience">
                <div>
                    <h2>class ${answer}</h2>
                    <span onclick=" cloneFunctionFaqs(this)">+</span>
                </div>
    
                <p>${question[answer]}</p>
            </div>
        `
    ]
}

// Start Calsess

function creatClasess(clasess){

    for(let i = 0 ; i < dataClasess.length ; i++){
        clasess.innerHTML += `
            <div class="services__card bg-light" onclick="creatClasessDetails(${i})">
                    <img src="${dataClasess[i].bgImgUrl}" alt="">
                    <h2 class="text-capitalize"><a >${dataClasess[i].name}</a></h2>
                    <p>${dataClasess[i].discrption}</p>
                    <div class="services__avatar align-items-center d-flex justify-content-between">
                        <div class="services__avatar__personal d-flex justify-content-between align-items-center">
                            <img src="${dataClasess[i].avatarUrl}" alt="">
                            <div class="text d-flex flex-column">
                                <span>${dataClasess[i].teacher}</span>
                                <span>${dataClasess[i].jop}</span>
                            </div>
                        </div>
                        <div class="services__avatar__price">${dataClasess[i].price}</div>

                    </div>
                    <div class="services__details d-flex justify-content-between">
                        <div class="services__details__age">
                            <p>${dataTitleClasses[0].age}:</p>
                            <span>${dataClasess[i].age} Years</span>
                        </div>
                        <div class="services__details__age">
                            <p>${dataTitleClasses[0].time}:</p>
                            <span>${dataClasess[i].time}</span>
                        </div>
                        <div class="services__details__age">
                            <p>${dataTitleClasses[0].capacity}:</p>
                            <span>${dataClasess[i].capacity}</span>
                        </div>
                    </div>
                </div>
        
        `
    }
      
    

}

function creatAllTeacher(teachers){
    teachers.innerHTML = "";
    for(let i = 0 ; i < dataTeacher.length ; i++){
        teachers.innerHTML += 
        
                `
                    <div class="teamArea__card" onclick="creatTeacherDetails(${i})">
                        <div class="teamArea__card__img">
                            <img src="${dataTeacher[i].avtar}" alt="">
                            <div class="cover">
                                <span><i class="fa-brands fa-facebook-f"></i></span>
                                <span><i class="fa-brands fa-x-twitter"></i></span>
                                <span><i class="fa-brands fa-linkedin-in"></i></span>
                            </div>
                        </div>
                        <h2>${dataTeacher[i].name}</h2>
                        <h3>${dataTeacher[i].jop}</h3>
                    </div>
        
                `
    }

}

function creatTeacherDetails(index){
    creatHeaderInHomePage();
    let name = "Teachers Detalise"
    creatMainSectionInAnyPage(name)

    homePage.innerHTML += `
         <div class="teacherDetails">

            <div class="m-container d-flex justify-content-between flex-wrap">
                <div class="teacherDetails__top d-flex justify-content-between flex-wrap">
                    <div class="teacherDetails__avtar">
                        <img src="${dataTeacher[index].avtar}" alt="">
                    </div>
                    <div class="teacherDetails__info d-flex flex-column flex-wrap">
                        <h2>profile info</h2>
                        <span>
                            <span>Name: </span>
                            <p>${dataTeacher[index].name}</p>
                        </span>
                        <span>
                            <span>phone: </span>
                            <p>${dataTeacher[index].phone}</p>
                        </span>
                        <span>
                            <span>Email: </span>
                            <p>${dataTeacher[index].email}</p>
                        </span>
                        <span>
                            <span>Experience: </span>
                            <p>${dataTeacher[index].experience} Years</p>
                        </span>
                        <span>
                            <span>lives: </span>
                            <p>${dataTeacher[index].lives}</p>
                        </span>
                        <span>
                            <span>adress: </span>
                            <p>${dataTeacher[index].adress}</p>
                        </span>
                        <span>
                            <span>contact: </span>
                            <p>
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-x-twitter"></i>
                                <i class="fa-brands fa-linkedin-in"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </p>
                        </span>

                    </div>
                </div>
                <div class="teacherDetails__bottem">
                    <h2>about me</h2>
                    <p>${dataTeacher[index].discription}</p>
                    <h2>teacher skills</h2>
                    <p class="last__p">${dataTeacher[index].discription2}</p>
                    
                    
                    <div class="teacherDetails__progress">
                        <div class="teacherDetails__progress__title">
                            <span>communication skills</span>
                            <span>${dataTeacher[index].communicationSkill}%</span>
                        </div>
                        <div class="teacherDetails__progress__progress">
                            
                            <span style="width:${dataTeacher[index].communicationSkill}%"></span>
                        </div>
                    </div>

                    
                    
                    <div class="teacherDetails__progress">
                        <div class="teacherDetails__progress__title">
                            <span>child care</span>
                            <span>${dataTeacher[index].childCare}%</span>
                        </div>
                        <div class="teacherDetails__progress__progress">
                            <span style ="width:${dataTeacher[index].childCare}%"></span>
                            
                        </div>
                    </div>

                    
                    <div class="teacherDetails__progress">
                        <div class="teacherDetails__progress__title">
                            <span>teaching skills</span>
                            <span>${dataTeacher[index].teachingSkills}%</span>
                        </div>
                        <div class="teacherDetails__progress__progress">
                            <span style="width:${dataTeacher[index].teachingSkills}%"></span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    
    
    `
    

    creatFooterInHomePage();

    backToUp();
}

// Start Blog

function blog(cards){

    dataNews.forEach((ele, index)=>{
        cards.innerHTML +=`
            <div class="new__card">
                    <div class="new__card__img">
                        <img src="${ele.mainImg}" alt="">
                    </div>
                    <div class="new__card__text">
                        <div class="new__card__datelse">
                            <span class="border"><i class="fa-solid fa-user"></i></span>
                            <span class="text-capitalize">${dataNewsTitle[0].auther}</span>
                            <span class="calendar"><i class="fa-regular fa-calendar-check"></i></span>
                            <span class="text-capitalize">${ele.date}</span>
                        </div>
                        <p>${ele.title}</p>
                        <p>${ele.discription.split(" ").slice(0 ,15).join(" ")} .......</p>
                        <span class="readMore">
                            <i class="fa-solid fa-arrow-right"></i>
                            <span onclick="creatNewDetails(${index})" class="text-capitalize">${dataNewsTitle[0].readMore}</span>
                        </span>
                    </div>
                </div>
        `
    })

   
    
}

// Creat New Detalis Page

function creatNewDetails(index){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("Blog Details")
    
    homePage.innerHTML +=`

        <div class="newDetalise m-container">
            <div class=" d-flex justify-content-between flex-wrap">
                
                <div class="newDetalise__top">
                    <img src="${dataNews[index].mainImg}" alt="">
                    <div class="captch__img">
                    
                            <span>Posted on</span>
                            <span> - </span>
                            <span>${dataNews[index].date}</span>
                    
                    </div>
                    <div class="discription__newDetalis">
                        <h2>${dataNews[index].title}</h2>
                        <p>
                            ${dataNews[index].discription}
                        </p>
                    
                        <div class="discription__img">
                            <img src="${dataNews[index].mainImg}" alt="">
                            <img src="./assist/img/new1.jpg" alt="">
                        </div>
                        <h2>Tips for Building Effective Communication with Families, Staff, and Students</h2>
                        <p>
                            ${dataNews[index].post}
                        </p>
                        <div class="discription__soical">
                            <div class="discription__soical__left">
                                <span>Tag: </span>
                                <a >kids</a>
                                <a >learning</a>
                            </div>
                            <div class="discription__soical__right">
                                <span>shar: </span>
                                <a ><i class="fa-brands fa-facebook-f"></i></a>
                                <a ><i class="fa-brands fa-instagram"></i></a>
                                <a ><i class="fa-brands fa-x-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="nextPrev__newDetails">
                        <span onclick="nextPost(${index - 1})">
                            <i class="fa-solid fa-arrow-left"></i>
                            prev post
                        </span>
                        <span onclick="nextPost(${index + 1})">
                            Next post
                            <i class="fa-solid fa-arrow-right"></i>
                        </span>
                    </div>

                    <div class="newDetalis__comment">
                        
                    </div>

                    <div class="newDetails__leave">
                        <h2>Leave a reply</h2>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form action="">
                            <label for="comment">comment</label>
                            <textarea name="" id="comment" cols="30" rows="10"></textarea>
                            
                            <div class="nameEmail">
                                <label for="nama__comment">name*</label>
                                <input type="text" id="nama__comment">
                            </div>
                            
                            <div class="nameEmail">
                                <label for="email__comment">email*</label>
                                <input type="text" id="email__comment">
                            </div>
                            
                            <label for="website__comment">website</label>
                            <input type="text" id="website__comment">
                            
                           <label class="checkbox">
                                
                           </label>

                            <input type="button" onclick="getContentFromNewDetails(${index})" value="Post comment">
                        </form>
                    </div>

                </div>


                <div class="newDetalise__bottom">
                   
                    <div class="newDetalise__bottom__popular">
                        <h2>popular posts</h2>

                        <div class="newDetalise__bottom__popular__cards">
                           

                        </div>


                       
                    </div>

                </div>
            </div 
        </div>
    `
    CreatCommentsInPage(index);
    creatCardsInBlogDetails();
    creatFooterInHomePage()
    backToUp();
}

function creatCardsInBlogDetails(){
    let cardsInBloDetails = document.querySelector(".newDetalise__bottom__popular__cards");
    cardsInBloDetails.innerHTML = "";
    dataNews.forEach(ele=>{
        cardsInBloDetails.innerHTML += `
            <div class="newDetalise__bottom__popular__card">
                <img src="${ele.mainImg}" alt="">
                <div>
                    <span>${ele.date}</span>
                    <p>${ele.discription.split(" ").slice(0 ,8).join(" ")}...</p>
                </div>
            </div>

        `
    })
}

// The About Page

function creatAboutPage(){

    creatHeaderInHomePage();
    creatMainSectionInAnyPage("About us");
    creatWelcomeInHomePage();
    creatCounterInHomePage();
    creatTestMonialInHomePage();
    creatHireInHomePage();

    homePage.innerHTML +=`
        <div class="partner">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">ACHIEVEMENT</h3>
                <h2 class="text-capitalize">Our Award</h2>
            </div>

            <div class="partner__img">
                <img src="./assist/img/partner1.png" alt="">
                <img src="./assist/img/partner2.png" alt="">
                <img src="./assist/img/partner3.png" alt="">
                <img src="./assist/img/partner4.png" alt="">
                <img src="./assist/img/partner5.png" alt="">
            </div>
        </div>
    </div>
    `
    creatFooterInHomePage();
    backToUp();

}

// creat the Calsses Page

function creatCalssesPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("classes");


    creatServicesInHomePage();


    creatFooterInHomePage();
    backToUp();
}

// creat The Programm Page

function creatProgramPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("programms");

    homePage.innerHTML +=`
    
         <!-- Start Programs -->
        <div class="programs">
            <div class="m-container">
                <div class="title text-center">
                    <h3 class="text-uppercase">PRESCHOOL & DAYCARE</h3>
                    <h2 class="text-capitalize">Our Programs</h2>
                </div>


                <div class="programs__cards d-flex justify-content-between flex-wrap">  
                </div>
            </div>
        </div>
    `
    let cards = document.querySelector(".programs__cards")

    creatProgramms(cards)

    creatFooterInHomePage();
    backToUp();
    
}
function creatProgramms(cards){



    dataProgramm.forEach(ele=>{
        cards.innerHTML +=`
                    <div class="programs__card">
                        <div class="programs__card__img">
                            <img src="${ele.img}" alt="">
                        </div>
                        
                        <p class="programs__card__detales">Age: ${ele.age} Yrs to ${ele.year} Yrs - Time: ${ele.starTime}AM to ${ele.endTime}Pm</p>
                        <h2>${ele.adress}</h2>
                        <p class="programs__card__p">
                            ${ele.discription}
                        </p>
                        <a onclick="enrollNow()">enrol now</a>
                    </div>
        `
    })
   
}

// Creat The Teacher Page

function creatTeacerPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("teacher");


    creatTeamAreaInHomePage()
    
    creatFooterInHomePage();
    backToUp();


}

// Creat The Gallery Page

function creatGalleryPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("gallery");


    creatGalleryInHomePage()
    
    creatFooterInHomePage();
    backToUp();


}
// Creat The Faqs Page

function creatFaqsPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("Faqs");


    creatFaqsInHomePage()
    
    creatFooterInHomePage();
    backToUp();


}

// Creat The Shop Page
function creatShop(){
    homePage.innerHTML +=`
        <div class="shop">
    <div class="m-container">
       
        <div class="shop__cards d-flex justify-content-start g-5 flex-wrap">
            
        </div>
    </div>
   </div
    `

    let cards = document.querySelector(".shop__cards")
    creatCardInHomePage(cards)

}

function creatCardInHomePage(cards){
    dataShop.forEach((product , index) =>{

        cards.innerHTML += `
                 <div class="shop__card">
                <div class="card__img">
                    <img src="${product.img}" alt="">
                    <div class="img__cover"></div>
                </div>
                <h2>${product.name}</h2>
                <h3>By ${product.auther}</h3>
                <div class="price">
                    <span>
                         <del>$${product.beforePrice}</del> $${product.afterPrice}
                    </span>
                    <div class="shop__btn">
                        <a onclick="addProductInLocal(${index} ,'dataShop')">buy now</a>
                    </div>
                </div>

            </div>
        `
    })
}

function creatShopPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("shop");

    creatShop();
    
    creatFooterInHomePage();
    backToUp();


}
// Start The Blog Page

function creatBlogPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("blog");

    creatNewInHomePage();
    creatFooterInHomePage();
    backToUp()
}

// Start The Blog Page
function creatContac(){
    homePage.innerHTML +=`
          <!-- Start Contact -->
    <div class="contact">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">contact us</h3>
                <h2 class="text-capitalize">Have Any Questions?</h2>
            </div>

            <div class="contact__question">
                <input type="text" class="contact__question__name" placeholder="Your Name">
                <input type="email" class="contact__question__email" placeholder="Your Email">
                <input type="text" class="contact__question__phone" placeholder="Your Phone">
                <input type="text" class="contact__question__subject" placeholder="Your Subject">
                <textarea  placeholder="Your Message" id="" cols="30" rows="10"></textarea>
            </div>
            <div class="header__enroll">
                <a onclick="contact(this)">send message</a>
                <p class="none"></p>
            </div>
        </div>
    </div>
           
    <!-- Start Contact Info -->
    
    <div class="contact__info">
        <div class="m-container">
            <div class="title text-center">
                <h3 class="text-uppercase">find us</h3>
                <h2 class="text-capitalize">contact info</h2>
            </div>

            <div class="contact__info__cards flex-wrap d-flex justify-content-between">
                <div class="contact__info__detalse__card">
                    <h2>USA Headquarter</h2>
                    <p>304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.</p>
                    <a href="#">01030459943</a>
                    <a href="">demo@example.com</a>
                </div>
          
           
                <div class="contact__info__detalse__card">
                    <h2>USA Headquarter</h2>
                    <p>304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.</p>
                    <a href="#">01030459943</a>
                    <a href="">demo@example.com</a>
                </div>
            
            
            
                <div class="contact__info__detalse__card">
                    <h2>USA Headquarter</h2>
                    <p>304 NW St Homestead, Florida, Melrose Street, Water Mill, 76B Overlook Drive Chester, PA 19013, Flemingsburg USA.</p>
                    <a href="#">01030459943</a>
                    <a href="">demo@example.com</a>
                </div>
            
            </div>



        </div>
    </div>
           
           
            

<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4919.906766371943!2d30.8545324989907!3d29.314625377462683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145979a640e99261%3A0xd900ca85c95dc5d0!2z2KfZhNmF2LPZhNip!5e0!3m2!1sar!2seg!4v1705103849740!5m2!1sar!2seg"
    allowfullscreen="" loading="lazy"
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
   
    `

    if(localStorage.data){
        document.querySelector(".contact__question__name").style.display = "none";
        document.querySelector(".contact__question__email").style.display = "none";
    }else{
        document.querySelector(".contact__question__name").style.display = "inline-block";
        document.querySelector(".contact__question__email").style.display = "inline-block";

    }
}

function creatContactPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("contact");

    creatContac();

    creatFooterInHomePage();
    backToUp()
}

// creat Compleat Account
function creatCompleatAccount(){
    homePage.innerHTML +=  `
        <div class="compleat hidden__compleat" onclick="hiddenComleatAccount(this)">
            <div class="compleat__ok">
                <span><i class="fa-solid fa-check"></i></span>
                <p>successfully registered</p>
                <button  onclick="hiddenComleatAccount(this.parentElement.parentElement)">ok</button>
            </div>
        </div>
    `
    
}

function hiddenComleatAccount(){
    document.querySelector(".compleat").classList.add("hidden__compleat");
}

function showComleatAccount(){
     document.querySelector(".compleat").classList.remove("hidden__compleat");
}

// Overview Section

function creatOverview(cards){
    cards.innerHTML = ""
    dataOverview.forEach(card=>{

        cards.innerHTML += `
            <div class="overview__text__sub">
                <i class="fa-regular fa-sun"></i>
                <span>${card.activity}</span>
            </div>
        `
    })

}

// Creat Cards In The Section Test Monial

function testMonial(cards){
    cards.innerHTML = ""
    dataTestMonial.forEach(one=>{
        cards.innerHTML +=`
        
            <div class="swiper-slide">
                <div class="testMonial__card">
                <div class="testMonial__card__star">
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                    <span><i class="fa-solid fa-star"></i></span>
                </div>
                <p>${one.say}</p>
                <div class="testMonial__card__img">
                    <img src="${one.img}" alt="">
                </div>
                <h2>${one.name}</h2>
                <h3>${one.country}</h3>
                </div>
            </div>
    `;
  });



}

// Clone Function In Section Faqs

function cloneFunctionFaqs(ele){
    let elements = ele.parentElement.parentElement.parentElement
    .querySelectorAll(".classesDetalis__experience");
    let element = ele.parentElement;
    if(element.parentElement.querySelector("p").style.display === "block"){
        elements.forEach(element=>{
            
            element.querySelector("div").classList.remove("classesDetalis__experience__active");
            element.querySelector("p").style.display = "none";
            element.querySelector("span").innerHTML = "+";
        })

    }else{
         elements.forEach(element=>{
            
            element.querySelector("div").classList.remove("classesDetalis__experience__active");
            element.querySelector("p").style.display = "none";
            element.querySelector("span").innerHTML = "+";
        })
        element.classList.add("classesDetalis__experience__active")
        element.parentElement.querySelector("p").style.display = "block";
        element.parentElement.querySelector("span").innerHTML = "-";
    }

}

// Function Next Post In Details Blog
function nextPost(index){
    if(index < 0){
        index = dataNews.length - 1;
    }else if(index > dataNews.length - 1){
        index = 0;
    }
    creatNewDetails(index)

}

// The Rebly In Comments
function reply(ancor){
       
    ancor.parentElement.parentElement.querySelector(".information__user__reply input").focus()
    
    
}
function confirmReply(button){
    let parent = button.parentElement;
    if(localStorage.data){

    
        if(parent.querySelector("input").value === "" && localStorage.data){
            parent.querySelector("p").innerHTML = `
                please Enter Reply
            `
            parent.querySelector("p").classList = "";
            setTimeout(()=>{
                parent.querySelector("p").innerHTML = '';

            },3000)
            
            return
        }
        parent.querySelector("p").innerHTML = `
        Reply Created Successfully
        `
        setTimeout(()=>{
            parent.querySelector("p").innerHTML = ''
            parent.querySelector("p").classList.remove("creatComment");

        },3000)
        parent.querySelector("p").classList = "creatComment";

        addReblyInLocalStorage(parent)

    }else{
        showSign()
    }
    
}
function addReblyInLocalStorage(parent){
    let index = +parent.getAttribute("dataArrtribute");
    let getCommentFromLocal = JSON.parse(localStorage.getItem("comments"));
    let name = (localStorage.getItem("data"))
    for(let i =0  ; i < getCommentFromLocal.length ; i++){
        if(getCommentFromLocal[i].dataArrtribute === index){
            // Are LocalStorage Index Have Reply
            if(getCommentFromLocal[i].reply){
                getCommentFromLocal[i].reply.push({value : parent.querySelector("input").value, name :name})
            }else{
                getCommentFromLocal[i].reply = [{value : parent.querySelector("input").value , name : name}]
            }
        }
    }
    localStorage.setItem("comments" ,JSON.stringify(getCommentFromLocal))
    printReplyInPage(parent)
    parent.querySelector("input").value = ""
}

function printReplyInPage(){
    let information__user__reply = document.querySelectorAll(".information__user__reply")
    let getCommentFromLocal = JSON.parse(localStorage.getItem("comments"));

    information__user__reply.forEach(reply=>{
        getCommentFromLocal.forEach(index=>{
            if(+reply.getAttribute("dataArrtribute") === index.dataArrtribute){
                reply.querySelector("div").innerHTML = ""
                if(index.reply){
                    index.reply.forEach(ele=>{
                        reply.querySelector("div").innerHTML +=`
                            <div >
                                <span>${ele.name}</span>
                                <pre>${ele.value}</pre>
                            </div>
                        
                        `
                    })
                }
            }
        })
    })


    

}

function printCountCommentsInThisPage(ele){
    let headding = document.querySelector(".newDetalis__comment");
    let index = JSON.parse(localStorage.getItem("comments"))
    if(!index) {
        headding.innerHTML = "Zero Comment" 
        return
    }
    
    let count = 0;
    for(let i = 0 ; i < index.length ; i++){
        if(ele === index[i].index){
            count++
        }
    }
    if(count === 0 ){
        headding.innerHTML = `<h2 id="countReply"> Zero Comment</h2>`

    }else{
        headding.innerHTML = `<h2 id="countReply">${count} Comments</h2>`

    }
    
    
}
// Creat Comment In New Details

function getContentFromNewDetails(index){
    
    let comment = document.getElementById("comment");
    let email = document.getElementById("email__comment");
    let name = document.getElementById("nama__comment");
    let website = document.getElementById("website__comment");

    let check = document.querySelector(".checkbox");
    check.classList = "checkbox";
    if(comment.value === "" || name.value === "" || email.value === ""){
        check.innerHTML =`
            <lable>Please Enter Your Data Correctly</lable>
        `
        setTimeout(()=>{
            check.innerHTML = ''
            check.classList.remove("checkbox");

        },3000)
        return
    }
    else{
        document.querySelector(".checkbox").innerHTML =""
    }

    let dataComment = {
        index : index,
        value : comment.value,
        email : email.value,
        name : name.value,
        website : website.value
    }
    // Add Comment In LocalStorage
    
    if(!localStorage.comments){
        dataComment.dataArrtribute = 0;
        localStorage.setItem("comments" , JSON.stringify([dataComment]));

    }else{
        let dataJs = JSON.parse(localStorage.getItem("comments"))
        dataComment.dataArrtribute = dataJs.length
        dataJs.push(dataComment) 
        localStorage.setItem("comments",JSON.stringify(dataJs));
    }

    // Creat Comments In The Page
    CreatCommentsInPage(index);

   check.innerHTML = "Comment Created Successfully";
   setTimeout(()=>{
        check.innerHTML = ''
        check.classList.remove("creatComment");

    },3000)
   check.classList.add("creatComment");

    comment.value = "";
    email.value = "";
    name.value = "";
    website.value = "";

}

function CreatCommentsInPage(index){
    if(!localStorage.comments) return;
    let getCommentsFromLocal = JSON.parse(localStorage.getItem("comments"));
    let commentDiv = document.querySelector(".newDetalis__comment")
    commentDiv.innerHTML = "";
    getCommentsFromLocal.forEach(ele =>{
        if(ele.index === index){
            commentDiv.innerHTML +=`
                        <h2 id="countReply"></h2>
                        <div class="newDetalis__comment__user">
                            <div class="newDetalis__comment__user__avtar">
                                <i class="fa-solid fa-user"></i>
                                <div class="information__user">
                                    <span class="information__user__name">${ele.name}</span>
                                    <span class="information__user__date">JUNE 15 - 2023 12:30 PM</span>
                                    <span class="information__user__comment">${ele.value}</span>
                                    
                                    <a onclick="reply(this)">Reply</a>
                                </div>
                                <div class="information__user__reply" dataArrtribute="${ele.dataArrtribute}" >
                                    <div>
                                    </div>
                                    <p></p>
                                    <input type="text" />
                                    <button onclick="confirmReply(this)">confirm</button>

                                    
                                </div>

                            </div>
                        </div>
            `

        }
    })

    // printCountCommentsInThisPage(index)
    printReplyInPage(document.querySelector(".information__user__reply"))
}

// Start Shop
// Get User From Local Storage
function getFatoraFromLocalStorage(index , type){

    if(localStorage.data){
        let user = JSON.parse(localStorage.getItem(localStorage.data))
        if(user.fatora && user.fatora.length){

            let number = true;
            for(let i = 0 ; i < user.fatora.length ; i++){
                if(user.fatora[i].index === index){
                    number = false;
                    user.fatora[i].quntity++
                }
            }
            if(number){
              
                user.fatora.push({index , type , quntity : 1})
            }
           
        
        }else{
            user.fatora = [{index ,type , quntity : 1}];
        }
        localStorage.setItem(localStorage.data , JSON.stringify(user))
        showComleatAccount(document.querySelector(".compleat"));

    }else{
        showSign();
    }
}
// Add Product In LocalStorage
function addProductInLocal(index ,type){

     getFatoraFromLocalStorage(index , type); 
     
    

}

function totalInFatora(){
    let = totalPrice = 0;
    let user = JSON.parse(localStorage.getItem(localStorage.data))
    if(user === null || user.fatora === null || user === undefined || user.fatora === undefined){
        return
    }

    let product = user.fatora
    
    product.forEach(ele=>{
        if(ele.type ==="dataShop"){
            totalPrice += dataShop[ele.index].afterPrice * ele.quntity;
        }
    })
    
    let allTotalFatora = document.getElementById("all__total__fatora")
    
    allTotalFatora.innerHTML = `
        <div>
            <span>sub total:</span>
            <span>$${totalPrice}</span>
        </div>
        <div>
            <span style="color:red">tax</span>
            <span>${totalPrice * .07}</span>
        </div>
        <div class="fatora__total">
            <span>total</span>
            <span>${totalPrice * .07 + totalPrice }</span>
        </div>
    
    `
}
// Creat Data In Fatora
function creatDataInFatora(){
    
    let data = JSON.parse(localStorage.getItem(localStorage.data))
    if(data === null || data.fatora === null ||data.fatora === undefined || data === undefined ){
        return
    }
    data = data.fatora
    document.querySelector(".fatora__table tbody").innerHTML = ""
    data.forEach((pro, i)=>{

        if(pro.type === "dataShop"){
             document.querySelector(".fatora__table tbody").innerHTML +=`
                    <tr>
                        <td>${i+1}</td>
                        <td>${dataShop[pro.index].name}</td>
                        <td>$${dataShop[pro.index].afterPrice}</td>
                        <td>
                            <span onclick="decriment(${i},this)" class="in">-</span> 
                            <h5>${pro.quntity}</h5> 
                            <span  onclick="incriment(${i} ,this)" class="dec">+</span>
                        </td>
                        <td class="Tdtotal">$${dataShop[pro.index].afterPrice * pro.quntity}</td>
                        <td><button onclick="deleteProduct(${i})">del</button></td>
                    </tr>
                
                `
        }

    })    
}

// Add Quntity In Fatora
function incriment(i){
    let product = JSON.parse(localStorage.getItem(localStorage.data))
    product.fatora[i].quntity++;
    localStorage.setItem(localStorage.data ,JSON.stringify(product))
    creatDataInFatora()
    totalInFatora()
    
}
function decriment(i){
    let product = JSON.parse(localStorage.getItem(localStorage.data));
    if(product.fatora[i].quntity > 1){

        product.fatora[i].quntity--;
    }
    
    localStorage.setItem(localStorage.data ,JSON.stringify(product))
    creatDataInFatora()
    totalInFatora()
    

}

function deleteProduct(index){

    let user = JSON.parse(localStorage.getItem(localStorage.data));
    user.fatora.splice(index ,1);
    localStorage.setItem(localStorage.data , JSON.stringify(user));
    creatDataInFatora()
    totalInFatora()
    
}
// Creat Fatora In Page
function creatMainFatora(){
     homePage.innerHTML += `
        <div class="fatora__background" onclick="hiddenFatora(this)">
        </div>
    `

    creatFatoraInPage(document.querySelector(".fatora__background"))
}

function creatFatoraInPage(fatora){
    fatora.innerHTML = `
    
            <div class="fatora" onclick= "event.stopPropagation()">
                <div class="fatora__logo">
                    <img src="./assist/img/Logo.png" alt="">
                    <h2>Hamza</h2>
                </div>
                <div class="fatora__result">
                    <div class="details">
                        <span>name :</span>
                        <span>${localStorage.data}</span>
                    </div>
                    <div class="fatora__table">
                        <table>
                            <thead>
                                <tr>
                                    <td>sl</td>
                                    <td>item</td>
                                    <td>price</td>
                                    <td>quntity</td>
                                    <td>total</td>
                                    <td>Delete</td>
                                </tr>
                            </thead>
                            <tbody>
                            
                            </tbody>
                        </table>
                    </div>
                    <div id="all__total__fatora">
                        
                    </div>
                </div>
            </div>
         
    `
    creatDataInFatora()
    totalInFatora()
}

function showFatora(){
    if(localStorage.data){

        creatMainFatora()
        creatFatoraInPage(document.querySelector(".fatora__background"))
        document.querySelector(".fatora__background").classList.add("fatora__flex")
    }else{
        showSign()
    }
}

function hiddenFatora() {
    
    document.querySelector(".fatora__background").classList.remove("fatora__flex")
}

// Start Contact

function contact(paragraph){
    // Get Inputs
    let msgData;
    paragraph = paragraph.parentElement.querySelector("p");
    let name = document.querySelector(".contact__question__name");
    let email = document.querySelector(".contact__question__email");
    let phone = document.querySelector(".contact__question__phone");
    let subject = document.querySelector(".contact__question__subject");
    let textarea = document.querySelector(".contact__question textarea");
    if(localStorage.data){
        
        let data = JSON.parse(localStorage.getItem(localStorage.data));
        if( phone.value === "" || subject.value === "" || 
        textarea.value === ""){
            console.log("erorr")
            setTimeout(()=>{
                    paragraph.classList.remove("para")
                    paragraph.classList.add("none");
                },5000)
                paragraph.classList.add("para");
                paragraph.classList.remove("none");
                paragraph.innerHTML = "please enter full data";
            return
        }
        msgData = {
            name: data.name,
            email: data.adress,
            phone: phone.value,
            subject: subject.value,
            textarea: textarea.value,
        }
    }else{
        
        if( name.value === "" || email.value === "" || 
            phone.value === "" ||subject.value === "" || 
            textarea.value === ""){
                setTimeout(()=>{
                    paragraph.classList.remove("para")
                    paragraph.classList.add("none");
                },5000)
                paragraph.classList.add("para");
                paragraph.classList.remove("none");
                paragraph.innerHTML = "please enter full data";
                return
        }
        msgData = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            subject: subject.value,
            textarea: textarea.value,
        }

    }
    

    if(localStorage.message){

        let message = JSON.parse(localStorage.getItem("message"));
        message.push(msgData);
        
        localStorage.setItem("message" , JSON.stringify(message));


    }else{

        localStorage.setItem("message", JSON.stringify([msgData]));
    }
    
    setTimeout(()=>{
        paragraph.classList.add("none");
    } ,5000)
    paragraph.innerHTML = "We will contact you";
    paragraph.classList.remove("none");
    name.value = "" ;
    email.value = "" ;
    phone.value = "" ;
    subject.value = "" ;
    textarea.value = "" ;
}

// Start Subscribe In Footer

function subscribe(input){
    input = input.parentElement.querySelector("input")
    let text ;
    let check = input.value
        .trim()
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    if(check === null || input.value === ""){
        text = "Please Enter invalid Email";
    

    }else{
        text = "You will be notified when there are any offers";
    }
    if(input.value === ""){
        return
    }
    if(localStorage.subscribe){
        let subscribe = JSON.parse(localStorage.subscribe);
        subscribe.push(input.value);
        localStorage.setItem("subscribe" , JSON.stringify(subscribe))
    }else{
        localStorage.setItem("subscribe" , JSON.stringify([input.value]))
    }
    
    
    notfiction(text)

    input.value = "";
}

function notfiction(text){
    document.querySelector(".notafiction").innerHTML +=`
        <p>${text}<span></span></p>
    `
    let p = document.querySelectorAll(".notafiction p")
    p.forEach(ele =>{
        if(ele.innerHTML === "Please Enter invalid Email<span></span>"){
            ele.style.backgroundColor = "red";
        }else{
            ele.style.backgroundColor = "var(--color-title)"
        }
    })
    
    setTimeout(()=>{
        document.querySelector(".notafiction p").remove()
    },3500)

}
// Start Loder
function creatLoder(){
    let loder = document.getElementById("loder")
    loder.style.display = "flex";
   

    setTimeout(()=>{
        loder.style.display= "none";
    },2500)


}


// Create Search Page

function creatSeachInPage(){
    creatHeaderInHomePage();
    creatMainSectionInAnyPage("search");


    homePage.innerHTML +=`
         <div class="m-container">
            <div class="search-box">
                <input type="text" placeholder="Enter your search query...">
                <button  onclick="resultSearch()" >Search</button>
                <div class="search-results" id="searchResults">
                    <span></span>
                    <ul>
                        
                        <!-- Add more search results here -->
                    </ul>
                </div>
            </div>
        </div>
    `
    document.querySelector(".search__icon").style.display = "none"
    creatFooterInHomePage();
    backToUp();
}



// Confirm programm
function enrollNow(){
    if(localStorage.data){
        showComleatAccount()

    }
    else{
        showSign()
    }
}