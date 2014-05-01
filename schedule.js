var xmlHttp_schedule;
var flag_schedule=false;
var ary_schedule = new Array();
var cnt_schedule = 0;
var stpX_schedule = 10;  //停止座標
var stpTime_schedule = 600;  //停止時間
var i_schedule = 0; //配列変数

function loadText_schedule(){
  if (window.XMLHttpRequest){
    xmlHttp_schedule = new XMLHttpRequest();
  }else{
    if (window.ActiveXObject){
      xmlHttp_schedule = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      xmlHttp_schedule = null;
    }
  }
  xmlHttp_schedule.onreadystatechange = checkStatus_schedule;
  xmlHttp_schedule.open("GET", "http://127.0.0.1/schedule.txt", true);
  xmlHttp_schedule.send(null);

}

function checkStatus_schedule(){
  if (xmlHttp_schedule.readyState == 4 && xmlHttp_schedule.status == 200){
    ary_schedule = xmlHttp_schedule.responseText.split('|');
  }
}

function scrMsg_schedule(){
	var tmp = document.getElementById('schedule');
//	if(i_schedule==ary_schedule.length){
//		flag_schedule=false;
//		i_schedule=true;
//	}
	if(!flag_schedule){
		loadText_schedule();
		flag_schedule=true;
	}
	else {
		cnt_schedule++;
		if(cnt_schedule > stpTime_schedule){
			cnt_schedule = 0;
			i_schedule++;
			if(i_schedule==ary_schedule.length){
			i_schedule=0;
			loadText_schedule();
			}
		}
		tmp.innerHTML = "";
		tmp.innerHTML = msgTxt_schedule();
	}
	setTimeout("scrMsg_schedule()",20);
}

function msgTxt_schedule() {
	var drift = "";
	{drift = '<div style="position:relative;">' + ary_schedule[i_schedule] + "</div>";
	return drift;}	
}

//http://javascript123.seesaa.net/article/110681301.html
