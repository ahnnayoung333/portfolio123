// bb8e4da75b8138f8b832057741b0767a

var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
// 교통정보를 보게하는 버튼
const t = document.querySelectorAll(".traffic li");
console.log(t); //[li, li.on]
const t_on = document.querySelectorAll(".traffic li")[0]; //0번쨰 인덱스에 있는 거
// 교통정보 끄는 버튼
const t_off = document.querySelectorAll(".traffic li")[1];



var options = { //지도를 생성할 때 필요한 기본 옵션
    center: new kakao.maps.LatLng(37.4879732, 126.8239159), //지도의 중심좌표.
    level: 3 //지도의 레벨(확대, 축소 정도)
};

var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴



t_on.addEventListener("click",(e)=>{
    e.preventDefault();
    // 지도에 교통정보를 표시하도록 지도타입을 추가합니다

    //조건문으로 on클래스가 있는지 없는지 판별해서 
    //있으면 return으로 이벤트를 막아줍니다
    if(t_on.classList.contains("on")) return;
    // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);    

    t_on.classList.add("on");
    t_off.classList.remove("on");


})

t_off.addEventListener("click",(e)=>{
    e.preventDefault();
    // 아래 코드는 위에서 추가한 교통정보 지도타입을 제거합니다
    map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);  

    t_off.classList.add("on");
    t_on.classList.remove("on");
})

 

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.BOTTOMRIGHT);