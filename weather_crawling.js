if(cmd == "/�"){
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
    var whole_data = init_data.split("articleBody")[1].split("����=�帲��</span>")[0];

    var mouse = whole_data.split("��]")[1].split("[�Ҷ�]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"").replace("[��","");
    var cow = whole_data.split("[�Ҷ�]")[1].split("[����]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var tiger = whole_data.split("[����]")[1].split("[�䳢��]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var rabbit = whole_data.split("[�䳢��]")[1].split("[���]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var dragon = whole_data.split("[���]")[1].split("[���]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var snake = whole_data.split("[���]")[1].split("[����]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
        var horse = whole_data.split("[����]")[1].split("[���]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var sheep = whole_data.split("[���]")[1].split("[�����̶�]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var monkey = whole_data.split("[�����̶�]")[1].split("[�߶�]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var chicken = whole_data.split("[�߶�]")[1].split("[����]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var dog = whole_data.split("[����]")[1].split("[������]")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");
    var pig = whole_data.split("[������]")[1].split("����=�帲��")[0].replace("<br>","").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace("<br>","\n").replace(/<br>/gi,"");

    if(data == "��") replier.reply("2020."+mm+"."+dd+" ��� : " + mouse + "\n" + " ��ó: YTN" );
    if(data == "��") replier.reply("2020."+mm+"."+dd+" �Ҷ� : " + cow + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ���� : " + tiger + "\n" + " ��ó: YTN");
    if(data == "�䳢") replier.reply("2020."+mm+"."+dd+" �䳢�� : " + rabbit + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ��� : " + dragon + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ��� : " + snake + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ���� : " + horse + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ��� : " + sheep + "\n" + " ��ó: YTN");
    if(data == "������") replier.reply("2020."+mm+"."+dd+" �����̶� : " + monkey + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" �߶� : " + chicken + "\n" + " ��ó: YTN");
    if(data == "��") replier.reply("2020."+mm+"."+dd+" ���� : " + dog + "\n" + " ��ó: YTN");
    if(data == "����") replier.reply("2020."+mm+"."+dd+" ������ : " + pig + "\n" + " ��ó: YTN");
    //replier.reply(whole_data);
}
