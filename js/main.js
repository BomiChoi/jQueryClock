$(document).ready(function(){
    initialize();   
    setInterval('getTime()', 1000); // 1초마다 새로 고침
});

function initialize(){
    $('.num').each(function(index){
        num = $('.num').eq(index);
        num.css('transform', 'rotate('+index*360/12+'deg)'); //숫자 배치
        num.find('span').css('transform', 'rotate('+(-index*360/12)+'deg)'); //돌아간 숫자 원상복구
        getTime();
    });
}

function getTime(){
    var now=new Date();
    hr=now.getHours();
    min=now.getMinutes();
    sec=now.getSeconds();
  
    $('.hr').css('transform', 'rotate('+(hr*360/12+min*30/60+sec*30/3600)+'deg)');
    $('.min').css('transform', 'rotate('+(min*360/60+sec*6/60
                                          )+'deg)');
    $('.sec').css('transform', 'rotate('+sec*360/60+'deg)');
    $('.currentTime').find('span').text(format(hr)+':'+format(min)+':'+format(sec)); 
}
function format(num){
    if (num<10){num='0'+num;}
    return num;
}