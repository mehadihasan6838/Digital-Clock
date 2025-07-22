var my_hour = document.getElementById("hour");
var my_minute = document.getElementById("minute");
var my_second = document.getElementById("second");

function startClock() {
  var time = new Date();
  var t1 = time.getHours();
  fromat_time(t1,my_hour);

  var t2 = time.getMinutes();
  fromat_time(t2,my_minute);

  var t3 = time.getSeconds();
  fromat_time(t3,my_second);

}
setInterval(startClock, 1000);

function fromat_time(value , x){
   
    if(value < 10)
       x.textContent = "0"+value;

    else
        x.textContent = value;
}

