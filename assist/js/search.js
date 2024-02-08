// get AllData


function resultSearch(){
    let inputValue = document.querySelector(".search-box input").value.trim()
    let result = document.querySelector("#searchResults ul");
    result.innerHTML = "";

    searchInArr(inputValue,result);
    let span = document.querySelector(".search-results span")
    span.style.display = "flex";
   span.innerHTML = result.querySelectorAll("li").length + " From Results"
    if(result.innerHTML === ""){
        span.style.display = "none"
        result.innerHTML =`
            <li>No Results</li>
        `
    }
}

let arrData = [dataTestMonial, dataOverview ,dataShop, dataProgramm ,dataNews ,dataFqs ,dataTeacher,dataClasess ];
let arrDataStr = ["dataTestMonial", "dataOverview" ,"dataShop", "dataProgramm" ,"dataNews" ,"dataFqs" ,"dataTeacher","dataClasess" ];


function searchInArr(inputValue,result){

    for(let a = 0; a < arrData.length ; a++ ){
        let indexInArrData = arrData[a];

        indexInArrData.forEach((ele, index) => {
            for(let i in ele){
                let stringEle = String(ele[i]);
                if( i === "question"){
                    for(let k in ele[i]){
                        let strIndexK = ele[i][k];
                        if (strIndexK.toLowerCase().includes(inputValue.toLowerCase())) {
    
                                result.innerHTML += `
                                    <li name_ele="dataClasess" onclick="resultSearchClasses(this)" id_ele=${index}>
                                        ${markSearch(strIndexK, inputValue)}
                                    </li>`
                            }
                    }
    
                }else if(stringEle.toLowerCase().includes(inputValue.toLowerCase())) {
                    
                    if(stringEle.includes("/")) continue
                    result.innerHTML += `
                        <li name_ele="${arrDataStr[a]}" onclick="resultSearchClasses(this)" id_ele=${index}>${markSearch(stringEle, inputValue)}</li>`
                }
    
            }
    
        })

    }
}

function markSearch(strIndexK, inputValue){
    let result = ""
    strIndexK = strIndexK.split(inputValue)
    strIndexK.forEach((ele ,index)=>{
        
        if(index === strIndexK.length -1 ){
           
            if(strIndexK.length === 1){
                let word = ele.toLowerCase().split(inputValue.toLowerCase());
                
                for(let i = 0 ; i < word.length ; i++){
                    if(i === word.length - 1){

                        result += word[i]; 
                    }else{
                        result += `${word[i]}<mark>${inputValue}</mark>`
                    }
                }
                
                
            }else{

                result += `${ele}`
            }
            
        }else{
            
            result += `${ele}<mark>${inputValue}</mark>`

        }
    })
    return result;
}




// let str =`The Math Oasis is a place where numbers come to life and mathematical concepts unfold with excitement`;
// let res = "ace wh ";


// console.log(markSearch(str, res))






function resultSearchClasses(ele){
    
    
    console.log(ele.getAttribute("name_ele"))
}
      