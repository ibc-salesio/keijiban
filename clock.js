var bolTimer1 = false;
var bolTimer2 = false;
var bolTimer3 = false;
function dejitaruTokei(){
document.writeln("<TABLE border=0 cellspacing=0><TR>");
//document.write(defWatchTD("AM","idXM"));
document.write(defWatchTD("00","idHH"));
document.write(defWatchTD(":"));
document.write(defWatchTD("00","idNN"));
//document.write(defWatchTD(":"));
//document.write(defWatchTD("00","idSS"));
document.write("</TR></TABLE>");
setTime();
}
function defWatchTD(str,divID){
return "<TD align='center'><B><DIV id='" + divID + "'>" + str + "</DIV></B></TD>";
}
function setTime(){
var now = new Date();
var hh = now.getHours();
var nn = now.getMinutes();
//var ss = now.getSeconds();
//if(hh>=12){
//document.getElementById("idXM").innerHTML="PM";
//hh-=12;
//}else{
//document.getElementById("idXM").innerHTML="AM";
//}
if(hh<10) hh="0"+hh;
if(nn<10) nn="0"+nn;
//if(ss<10) ss="0"+ss;
document.getElementById("idHH").innerHTML=hh;
document.getElementById("idNN").innerHTML=nn;
//document.getElementById("idSS").innerHTML=ss;
setTimeout("setTime()",1000);
}

//http://www.wind.sannet.ne.jp/alfix/javascript/etc/3.html
