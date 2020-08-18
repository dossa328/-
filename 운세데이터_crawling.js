if(cmd == "/¿î¼¼"){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    if(dd<10){
      dd='0'+dd;
    }
    if(mm<10){
      mm='0'+mm;
    }

    var init_data = Utils.getWebText("https://www.ytn.co.kr/_ln/0121_2020"+ mm + dd + "0000000001");
    //replier.reply(init_data);
    var whole_data = init_data.split("articleBody")[1].split("Á¦°ø=µå¸²¿÷</span>")[0];

    var mouse = whole_data.split("¶ì]")[1].split("[¼Ò¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"").replace("[¼Ò","");
    var cow = whole_data.split("[¼Ò¶ì]")[1].split("[¹ü¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var tiger = whole_data.split("[¹ü¶ì]")[1].split("[Åä³¢¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var rabbit = whole_data.split("[Åä³¢¶ì]")[1].split("[¿ë¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var dragon = whole_data.split("[¿ë¶ì]")[1].split("[¹ì¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var snake = whole_data.split("[¹ì¶ì]")[1].split("[¸»¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
        var horse = whole_data.split("[¸»¶ì]")[1].split("[¾ç¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var sheep = whole_data.split("[¾ç¶ì]")[1].split("[¿ø¼þÀÌ¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var monkey = whole_data.split("[¿ø¼þÀÌ¶ì]")[1].split("[´ß¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var chicken = whole_data.split("[´ß¶ì]")[1].split("[°³¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var dog = whole_data.split("[°³¶ì]")[1].split("[µÅÁö¶ì]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var pig = whole_data.split("[µÅÁö¶ì]")[1].split("Á¦°ø=µå¸²¿÷")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");

    if(data == "Áã") replier.reply("2020."+mm+"."+dd+" Áã¶ì : " + mouse + "\n" + " ÃâÃ³: YTN" );
    if(data == "¼Ò") replier.reply("2020."+mm+"."+dd+" ¼Ò¶ì : " + cow + "\n" + " ÃâÃ³: YTN");
    if(data == "¹ü") replier.reply("2020."+mm+"."+dd+" ¹ü¶ì : " + tiger + "\n" + " ÃâÃ³: YTN");
    if(data == "Åä³¢") replier.reply("2020."+mm+"."+dd+" Åä³¢¶ì : " + rabbit + "\n" + " ÃâÃ³: YTN");
    if(data == "¿ë") replier.reply("2020."+mm+"."+dd+" ¿ë¶ì : " + dragon + "\n" + " ÃâÃ³: YTN");
    if(data == "¹ì") replier.reply("2020."+mm+"."+dd+" ¹ì¶ì : " + snake + "\n" + " ÃâÃ³: YTN");
    if(data == "¸»") replier.reply("2020."+mm+"."+dd+" ¸»¶ì : " + horse + "\n" + " ÃâÃ³: YTN");
    if(data == "¾ç") replier.reply("2020."+mm+"."+dd+" ¾ç¶ì : " + sheep + "\n" + " ÃâÃ³: YTN");
    if(data == "¿ø¼þÀÌ") replier.reply("2020."+mm+"."+dd+" ¿ø¼þÀÌ¶ì : " + monkey + "\n" + " ÃâÃ³: YTN");
    if(data == "´ß") replier.reply("2020."+mm+"."+dd+" ´ß¶ì : " + chicken + "\n" + " ÃâÃ³: YTN");
    if(data == "°³") replier.reply("2020."+mm+"."+dd+" °³¶ì : " + dog + "\n" + " ÃâÃ³: YTN");
    if(data == "µÅÁö") replier.reply("2020."+mm+"."+dd+" µÅÁö¶ì : " + pig + "\n" + " ÃâÃ³: YTN");
    //replier.reply(whole_data);
}
