
 //ダイアログ
    function OnButtonClick(){
        window.alert('アプリ連携が完了しました！！やったね！');
    }

//時をとめる
    window.onload = function(){
        let timer;
        //ページの読み込み時にタイマーを設定
        timer = window.setInterval(
            function(){
                //現在日時を取得する
                var time = new Date();
                document.getElementById('out').value = time.toLocaleString();
                },
                1000
            );
        //停止ボタン押下時処理
        document.getElementById('button').onclick = function(){
            //確認する
            if(window.confirm('本当に止めてしまってもよろしいですか？')){
                window.clearTimeout(timer);
            }  
        };
    };   
//時限爆弾タイマー
    var bakuhatutimer;
    //カウントダウン開始
    function cntstartClick(){
        document.timer.elements[2].disabled = true;
        bakuhatutimer = setInterval("cntdown()",1000);
    }
    //カウントダウン処理
    function cntdown(){
        var min = document.timer.elements[0].value;
        var sec = document.timer.elements[1].value;
        //未入力の場合キレるようにする
        if((min == "") && (sec == "")){
            alert("やる気あるの？ちゃんと入力してからスタートしろ？？");
            //一旦0表示させる
            reSet();
        }else{
            if(min =="") min = 0;
            min = parseInt(min);
            if(sec =="") sec = 0;
            sec = parseInt(sec);

            tmWrite(min*60+sec-1);
        }
    }

    //残り時間を書き出す関数
    function tmWrite(int){
    int = parseInt(int);
        //時間になったら煽る
        if (int <= 0){
            reSet();
            alert("ゲーーーームオオバアアアアアｗｗｗｗｗｗｗｗｗ");
        }else{
            //残り分数はintを60で割って切り捨てる
            document.timer.elements[0].value = Math.floor(int/60);
            //残り秒数はintを60で割った余り
            document.timer.elements[1].value = int % 60;
        }
    }
    //reset処理
    function reSet(){
        document.timer.elements[0].value = "0";
        document.timer.elements[1].value = "0";
        document.timer.elements[2].disabled = false;
        clearInterval(bakuhatutimer);
    }  
    //タイマー停止処理
    function cntstopClick(){
        document.timer.elements[2].disabled = false;
        clearInterval(bakuhatutimer);
    }
