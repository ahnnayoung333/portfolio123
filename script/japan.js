let sections = document.querySelectorAll(".community2 section");
let section_arr = Array.from(sections);

let lis = document.querySelectorAll("ul li");
let lis_arr = Array.from(lis);

let base = -10;
let posArr = [];

setPos();
function setPos(){
    for(let el of section_arr){
        posArr.push(el.offsetTop);
    }
}


console.log(posArr);

window.addEventListener("scroll", ()=>{
    let scroll = window.scrollY || window.pageXOffset || document.documentElement.scrollTop;

    console.log(scroll);


    section_arr.map((el, index) => {
        if(scroll >= posArr[index] + base ){
            for(let el of lis_arr){
                el.classList.remove("on")
            }
            lis_arr[index].classList.add("on");
            for(let el of section_arr){
                // el.classList.remove("on")
            }
            section_arr[index].classList.add("on");
        }
    })
  
})

lis_arr.map((el, index)=>{
    el.addEventListener("click", ()=>{
        window.scrollTo({top: posArr[index], behavior: "smooth"})
    })
})