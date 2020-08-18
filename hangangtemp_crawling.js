if(msg == "/한강"){
    var data = org.jsoup.Jsoup.connect("https://www.wpws.kr/hangang/").get();
    data = data.select("p")+"";
    data = data.split("\n")[2];
    data = data.replace(/<[^>]+>/g,"");
    replier.reply("한강 수온 : " + data );
}