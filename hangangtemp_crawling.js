if(msg == "/�Ѱ�"){
    var data = org.jsoup.Jsoup.connect("https://www.wpws.kr/hangang/").get();
    data = data.select("p")+"";
    data = data.split("\n")[2];
    data = data.replace(/<[^>]+>/g,"");
    replier.reply("�Ѱ� ���� : " + data );
}