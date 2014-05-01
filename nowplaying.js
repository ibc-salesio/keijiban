var flag_pla=false;
var xmlHttp_pla;
var nowpla;

function loadText_pla(){
  if (window.XMLHttpRequest){
    xmlHttp_pla= new XMLHttpRequest();
  }else{
    if (window.ActiveXObject){
      xmlHttp_pla = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      xmlHttp_pla = null;
    }
  }
  xmlHttp_pla.onreadystatechange = checkStatus_result;
  xmlHttp_pla.open("GET", "./NPS.txt", true);
  xmlHttp_pla.send(null);

}

function checkStatus_pla(){
  if (xmlHttp_pla.readyState == 4 && xmlHttp_pla.status == 200){
    nowpla = xmlHttp_pla.responseText;
  }
}

function scrMsg_nowpla(){
	var tmp = document.getElementById('nowplaying');
	var time;
	/*if(i==ary.length){
		flag=false;
		i=0;
	}*/
	if(!flag_pla){
		loadText_pla();
		flag_pla=true;
	}
	else {
	//	alert(ary[i].length+"文字");
		//time=ary[i].length * 2000;
	//	alert(time+"ミリ秒");
		//while(ary.length==0){
		//	tmp.innerHTML = "Now Loading.";
		//}
		tmp.innerHTML = msgTxt_pla();
		//i++;
	}
	//if(i==0) time=3000;
	if (time==null) time=1000;
	setTimeout("scrMsg_nowpla()",time);
}

function msgTxt_pla() {
	var drift = "";
	{drift = "<font>NowPlaying…"+nowpla+"</font>";
	return drift;}	
}

//http://javascript123.seesaa.net/article/110681301.html
