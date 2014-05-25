<?php

require_once("twitteroauth/twitteroauth.php");
require_once("pass.php");

$twObj = new TwitterOAuth($consumerKey,$consumerSecret,$accessToken,$accessTokenSecret);

$andKey = "#nowplaying from:salesio_ibc";
$options = array('q'=>$andKey,'count'=>'1');
$json = $twObj->OAuthRequest(
     'https://api.twitter.com/1.1/search/tweets.json',
     'GET',
     $options
);

$jset = json_decode($json,true);

foreach($jset['statuses'] as $result){
       $content=$result['text'];
       $content = preg_replace('/( |　|)(#{1,140})([ー゛゜々ヾヽぁ-ヶ一-龠ａ-ｚＡ-Ｚ０-９a-zA-Z0-9_ｱ-ﾝﾞﾟｧ-ｫｬ-ｮｰ｡｢｣､]{1,100})( |　|)/u', '', $content);
       echo $content;
       echo "\n";
}
   $fp = fopen('/var/www/html/new_keijiban/NPS.txt',"w");
   if($fp){
     if(flock($fp,LOCK_EX)){
       if(fwrite($fp,$content)===FALSE){
         print("ファイル書き込みに失敗しました");
       }else{
         print("書き込みに成功しました");
       }
       flock($fp,LOCK_UN);
     }else{
       print("ファイルロックに失敗しました");
     }
   }
   fclose($fp);
?>
