const section = document.querySelector(".award section");
const txt = document.querySelector(".award .txt");
const innerText = section.querySelector(".award .innerText");

window.addEventListener("scroll",()=>{
    const scroll = window.scrollY;

    //클립패스를 스크롤과 연동한것
    section.style.clipPath = `circle(${scroll}px at center center)`;

    //두개의 h2를 연동해서 이동시켜야합니다
    txt.style.left = 100 - scroll / 5 + '%';
    //두개 h2를 같은 속도로 left을 이동하는 코드를 적어보세요~
    innerText.style.left = 100 - scroll / 5 + '%';
    

})