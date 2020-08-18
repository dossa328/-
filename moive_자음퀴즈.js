if(isGroupChat == false){
    if (msg == "/자음퀴즈") { //가위바위보 실행
        replier.reply("자음퀴즈 게임을 시작합니다.\n주제는 영화 입니다. \n모를땐 '힌트!', 정답은 '정답?' 을 입력해주세요.");
        var data = Utils.getWebText("http://www.jaum.kr/").split("랜덤 영화 자음퀴즈")[1].split("정답")[0];
        var quiz = data.split(":")[1].split("(")[0].trim();
        answer = data.split("value")[1].split("정답")[0].trim().replace(/[^(가-힣ㄱ-ㅎㅏ-ㅣa-zA-Z0-9)]/gi,"").replace("br","");
        replier.reply("문제 >> "+ quiz);
        start = 1
     }
     if (start == 1 && msg == answer) {
        replier.reply(sender + "님 정답입니다.")
        start = null; //끝났으니, 저장된 이름 삭제
     }
     if(start == 1 && msg == "정답?")
     {
        replier.reply("정답은 >> [" + answer + "] 입니다");
        start = null;
     }
     if(start==1 && msg=="힌트!"){
        var u = Utils.getWebText("https://m.search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+answer)
        var a = u.split("<span class=\"_text\">") 
        var e = a[1].split("더보기") 
        var f = e[0].replace(/(<([^>]+)>)/g, ""); 
        var b = u.split("개요") 
        var c = b[1].split("줄거리") 
        var d = c[0].replace(/(<([^>]+)>)/g, ""); 
        d = d.trim() 
        d = d.replace(/\n/g, " "); 
        d = d.replace(/ /g, " "); 
        replier.reply("줄거리 힌트 입니다. \n"+d+"\n"+f) 
     }
}
