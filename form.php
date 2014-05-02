<?php
    extract($_POST);
    $fp = fopen('result.txt',"w");
    if($fp){
        if(flock($fp,LOCK_EX)){
            if(fwrite($fp,$data)===FALSE){
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

