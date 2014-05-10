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
  xmlHttp_pla.onreadystatechange = checkStatus_pla;
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
	if(!flag_pla){
		loadText_pla();
		flag_pla=true;
	}
	else {
		tmp.innerHTML = msgTxt_pla();
	}
	if (time==null) time=1000;
        loadText_pla();
	setTimeout("scrMsg_nowpla()",time);
}

function msgTxt_pla() {
	var drift = "";
	{drift = "<font>NowPlaying…<br>"+nowpla+"</font>";
	return drift;}	
}

//http://javascript123.seesaa.net/article/110681301.html
