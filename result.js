var xmlHttp_result;
var flag=false;
var ary = new Array();
var i = 0; //配列変数
var mojiretsu;
function loadText_result(){
  if (window.XMLHttpRequest){
    xmlHttp_result = new XMLHttpRequest();
  }else{
    if (window.ActiveXObject){
      xmlHttp_result = new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      xmlHttp_result = null;
    }
  }
  xmlHttp_result.onreadystatechange = checkStatus_result;
  xmlHttp_result.open("GET", "./result.txt", true);
  xmlHttp_result.send(null);

}

function checkStatus_result(){
  if (xmlHttp_result.readyState == 4 && xmlHttp_result.status == 200){
    ary = xmlHttp_result.responseText.split('|');
  }
}

function scrMsg(){
	var tmp = document.getElementById('result');
	var time;
	if(i==ary.length){
		flag=false;
		i=0;
	}
	if(!flag){
		loadText_result();
		flag=true;
	}
	else {
	//	alert(ary[i].length+"文字");
		time=ary[i].length * 2000;
	//	alert(time+"ミリ秒");
		while(ary.length==0){
			tmp.innerHTML = "Now Loading.";
		}
		tmp.innerHTML = msgTxt();
		i++;
	}
	//if(i==0) time=3000;
	if (time==null) time=1000;
	setTimeout("scrMsg()",time);
}

function msgTxt() {
	var drift = "";
	{drift = "<marquee loop=1 scrolldelay=30 scrollmount=120>" +ary[i]+"</marquee>";
	return drift;}	
}

//http://javascript123.seesaa.net/article/110681301.html
