//변수설정
//버튼(open / close)
//순환하는 슬라이드(append, prepend)

const frame = document.querySelector(".frame");
const article = frame.querySelectorAll("article");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const opens = frame.querySelectorAll(".open"); //반복문으로 하기 위해 유사배열로 ㄱㄱ
const closes = frame.querySelectorAll(".close"); 

for (let i = 0; i < 2; i++) {frame.prepend(frame.lastElementChild); }

//next 버튼을 클릭하면
//next에 클릭이벤트를 부여하고
//클릭하면 frame의 안쪽 가장 뒤에 frame의 요소중 가장 첫번째요소를 넣어주는 코드


next.addEventListener("click", () => {
    frame.append(frame.firstElementChild);//뒤에다가
      
  })

//prev 버튼을 클릭하면
//prev 에 클릭이벤트를 부여하고
//클릭하면 frame의 안쪽 가장 선두에 frame의 요소중 가장 마지막 요소를 넣어주는 코드

prev.addEventListener("click", () => {
  frame.prepend(frame.lastElementChild);//앞에다가
    
})

//opens를 클릭했을때
opens.forEach((el, index) => {
    el.addEventListener("click", (e)=> {
        e.target.closest("article").classList.add("on");
        for(let ele of article) !ele.classList.contains("on") && ele.classList.add("hide");
        /*
        아티클에 반복을 돌면서 아티클에 on클래스가 옶더면~(조건)
        &&앞부분의 조건이 참이면, &&뒷부분으로 평가가 이루ㅜ어집니다
        &&앞부분의 조건이 거짓이면 해당 반복문 안의 내용은 무시됩니다
        따라서 on클래스가 없다면~(조건) 그해당 아티클마다
        hide클래스를 부여하는 (실행)동작이 일어납니다*/
    })
})

closes.forEach((el, index) => {
    el.addEventListener("click", (e) => {
        //클릭이벤트가 발생한 대상(close버튼)에서
        //article을 찾습니다. 그리고 아티클에서 on을 지웁니다
        e.target.closest("article").classList.remove("on");
         //반복을 돌면서 모든 아티클에 hide클래스를 지웁니다                 
         for(let el of article) el.classList.remove("hide");
    })
})

