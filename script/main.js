//변수설정
const frame = document.querySelector("#visual ");
const panels = frame.querySelectorAll(".panel li");
const btns = frame.querySelectorAll(".btns li ");
const btnPlay = frame.querySelector(".fa-play");
const btnStop = frame.querySelector(".fa-stop");
const bar = frame.querySelector(".bar ");

const len = panels.length - 1;//index의 값과 일치하도록 -1을함
let num = 0;
let timer = null;
const interval = 5000; //롤링 반복 시간


startRolling();


//적용하는 대상으로는 동작 3가지
//1.btns를 클릭하면 해당 인덱스로 이동하는 동작
btns.forEach((el, index) => {
    el.addEventListener("click", () => {
        active(index);
        stopRolling();
    });
})

//2.play btn을 클릭하면 자동롤링이 시작
btnPlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("on")) {
        return;
    } else {
        startRolling();
    }
});

//3.stop btn을 클릭하면 자동롤링이 멈춤
btnStop.addEventListener("click", stopRolling);


//적용하는 기능을 담은 함수를 생성

//1 롤링 시작기능
function startRolling() {
    bar.style.display = "block"; //1
    setTimeout(progress, 0);  //2

    active(num);
    //언제나 1이 먼저 실행되고 2가 이후에 실행됩니다
    // setInterval(()=>{},시간)
    //setInterval 콜백함수를 시간마다 계속 실행하도록 요청합니다
    //단점 : 리소스 찌꺼기가 남아요
    timer = setInterval(rolling, interval);

    btnPlay.classList.add("on");
    btnStop.classList.remove("on");
}

//2롤링을 멈추는 기능
function stopRolling() {
    bar.style.display = "none";
    clearInterval(timer);
    // setInterval이 만든 리소스 찌꺼기를 깔끔하게 청소해줍니다
    btnStop.classList.add("on");
    btnPlay.classList.remove("on");
}

//3. on클래스로 활성화 기능
function active(index) {
    //클릭을 하는 순간
    //모든 panels와 btns들에 on을 일시적으로 지우고
    //클릭한 인덱스에 해당하는 panels인덱스와 btns인덱스에만 on을 붙입니다
    for (let el of panels) el.classList.remove("on");
    for (let el of btns) el.classList.remove("on");
    panels[index].classList.add("on");
    btns[index].classList.add("on");
    num = index;
    //전역변수num을 active함수에서 함수가 실행되면서 변경된 index로
    //전역변수num을 갱신하도록 합니다
    bar.style.width = "0%";
}

//3-1 싱크를 맞추는 롤링함수
function rolling() {
    //여기에서 전역변수num의 값과 len의 값을 비교해서
    //순환을 시켜줍니다
    if (num < len) {
        num++;
    } else {
        num = 0;
    }
    active(num);
    progress();

}

//4. bar를 움직이는 기능
function progress() {

    const init = parseInt(bar.style.width) || 0;
    // const targetValue = 100;
    const unit = "%";
    const startTime = performance.now();
    function animate(time) {
        const realTime = time - startTime;
        const prog = realTime / interval;
        //prog의 값은 0~1사이의 값이 됩니다
        const currentValue = init + 100 * prog;
        //시작은 0 끝은 100
        bar.style.width = `${currentValue}${unit}`;

        if (prog < 1) {
            requestAnimationFrame(animate);
        } else if (prog >= 1) {
            bar.style.width = "0%";
            // if (typeof callback === "function") callback();
        }

    }
    requestAnimationFrame(animate);
    //requestAnimationFrame메소드안에 함수를 호출해서 실행해야하므로 
    // requestAnimationFrame(animate);이 렇게 작성해야합니다
    // requestAnimationFrame(animate());
    //이 내용은 함수의 값을 requestAnimationFrame에 매개변수로 넣는다는 의미
}

//-----------------------------------------------------------------뉴스
//변수설정
const banner_ul = document.querySelector(".banner ul");
const banners = banner_ul.children;
const lis = banner_ul.querySelectorAll("li");
console.log(banners);// HTMLCollection(7)
console.log(lis); //NodeList(7)

// const btns = document.querySelectorAll(".btns div");
// console.log(btns);
// const prev = btns[0];
// const next = btns[1];
// console.log(prev);
// console.log(next);
const btns1 = document.querySelector(".btns1");
const [prev, next] = btns1.children;
const pop = document.querySelector(".pop");
const close = pop.querySelector(".close");
const opens = banner_ul.querySelectorAll("a");
const aside1 = document.querySelector(".pop");

//초기화 작업 = 0인덱스 슬라이드가 4번째인 즉 가운데 활성화 슬라이드가 되게하기
//반복을 돌면서 prepend로 마지막 슬라이드를 맨앞으로 3번 해주면되겠습니다
for (let i = 0; i < 3; i++) { banner_ul.prepend(banner_ul.lastElementChild); }

prev.addEventListener("click", () => {
    banner_ul.prepend(banner_ul.lastElementChild);

    for (let el of banners) el.classList.remove("on");
    banners[3].classList.add("on");

})

next.addEventListener("click", () => {
    banner_ul.append(banner_ul.firstElementChild);
    for (let el of banners) el.classList.remove("on");
    banners[3].classList.add("on");
})
//opens
console.log(opens);
opens.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        //이곳에 코드를 작성해보세요
        let txt = e.currentTarget.closest("li").querySelector("h2").innerText;
        // let txt1 = e.currentTarget.querySelector(".txt1").querySelector("p").innerText;
        let txt1 = e.currentTarget.closest("li").querySelector("p").innerText;
        // let txt1 = e.querySelector("p").innerText;
        console.log(txt);
        pop.querySelector("h2").innerText = txt;
        pop.querySelector("p").innerText = txt1;


        pop.classList.add("on");
        //a태그를 사라지게
        e.currentTarget.classList.add("off");
        //버튼이 활성화되면 안되므로 사라지게
        btns1.classList.add("off");

        

        


    })
})

close.addEventListener("click", () => {
    pop.classList.remove("on");
    btns1.classList.remove("off");
    //a태그에도 off를 없애야합니다
    //그냥 모든 a태그에 off를 지워버리는 방법
    // for (let el of opens) el.classList.remove("off");
    //현재 활성화(on클래스가있는)된 패널에서 a태그를 찾아서 off를 지우는 방법
    //contains => 불린값이 나오기 때문에 지금코드에서는 contains를 사용불가
    banner_ul.querySelector("li.on a").classList.remove("off");

})

//--------------------------------------------------맴버소개




// 첫 단계 : 변수 할당하기, 동작을 적용할 요소를 담기
const articles = document.querySelectorAll("article");
const aside = document.querySelector(".aside");
const close1 = aside.querySelector("span");

for (const el of articles) {

 
    

    el.addEventListener("click",(e)=>{

        // 클릭한 article(=== e.currentTarget)의 내용(h2, p, video주소)을 변수에 담기
        let tit = e.currentTarget.querySelector(".txt").querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector(".txt").querySelector("p").innerText;
        let img = e.currentTarget.querySelector("figure").querySelector("img").getAttribute("src");
        console.log(img);
        aside.querySelector(".txt").querySelector("h2").innerText = tit;
        aside.querySelector(".txt").querySelector("p").innerText = txt;
        aside.querySelector("figure").querySelector("img").setAttribute("src",img);
        // setAttribute(얘를, 이것으로) 속성 값을 교체하는 메소드
        

        aside.classList.add("on");
        // aside에다가 on붙이기
        // classList - 클래스를 핸들링 할 수 있는 목록을 담아놓은 객체 
        // (클래스에 손댈 거 있으면 일단 클래스리스트를 쓰면 됨,,, 도라에몽 주머니 느낌)
        // -classList 라는 객체는 class에 관련된 모든 메소드들이 담긴 객체 임
        
    })
    
}
close1.addEventListener("click",()=>{
    aside.classList.remove("on");
    // aside.querySelector("video").pause();
    // 옆으로 사라진 상태에서도 재생되는 걸 해결하기 위한 코드
})







//-------------------------역사

