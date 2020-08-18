if(isGroupChat == false){
    if (msg == "/¿⁄¿Ωƒ˚¡Ó") { //∞°¿ßπŸ¿ß∫∏ Ω««‡
        replier.reply("¿⁄¿Ωƒ˚¡Ó ∞‘¿”¿ª Ω√¿€«’¥œ¥Ÿ.\n¡÷¡¶¥¬ øµ»≠ ¿‘¥œ¥Ÿ. \n∏∏¶∂© '»˘∆Æ!', ¡§¥‰¿∫ '¡§¥‰?' ¿ª ¿‘∑¬«ÿ¡÷ººø‰.");
        var data = Utils.getWebText("http://www.jaum.kr/").split("∑£¥˝ øµ»≠ ¿⁄¿Ωƒ˚¡Ó")[1].split("¡§¥‰")[0];
        var quiz = data.split(":")[1].split("(")[0].trim();
        answer = data.split("value")[1].split("¡§¥‰")[0].trim().replace(/[^(∞°-∆R§°-§æ§ø-§”a-zA-Z0-9)]/gi,"").replace("br","");
        replier.reply("πÆ¡¶ >> "+ quiz);
        start = 1
     }
     if (start == 1 && msg == answer) {
        replier.reply(sender + "¥‘ ¡§¥‰¿‘¥œ¥Ÿ.")
        start = null; //≥°≥µ¿∏¥œ, ¿˙¿Âµ» ¿Ã∏ß ªË¡¶
     }
     if(start == 1 && msg == "¡§¥‰?")
     {
        replier.reply("¡§¥‰¿∫ >> [" + answer + "] ¿‘¥œ¥Ÿ");
        start = null;
     }
     if(start==1 && msg=="»˘∆Æ!"){
        var u = Utils.getWebText("https://m.search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+answer)
        var a = u.split("<span class=\"_text\">") 
        var e = a[1].split("¥ı∫∏±‚") 
        var f = e[0].replace(/(<([^>]+)>)/g, ""); 
        var b = u.split("∞≥ø‰") 
        var c = b[1].split("¡Ÿ∞≈∏Æ") 
        var d = c[0].replace(/(<([^>]+)>)/g, ""); 
        d = d.trim() 
        d = d.replace(/\n/g, " "); 
        d = d.replace(/ /g, " "); 
        replier.reply("¡Ÿ∞≈∏Æ »˘∆Æ ¿‘¥œ¥Ÿ. \n"+d+"\n"+f) 
     }
}
