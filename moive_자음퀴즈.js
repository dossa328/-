if(isGroupChat == false){
    if (msg == "/��������") { //���������� ����
        replier.reply("�������� ������ �����մϴ�.\n������ ��ȭ �Դϴ�. \n�𸦶� '��Ʈ!', ������ '����?' �� �Է����ּ���.");
        var data = Utils.getWebText("http://www.jaum.kr/").split("���� ��ȭ ��������")[1].split("����")[0];
        var quiz = data.split(":")[1].split("(")[0].trim();
        answer = data.split("value")[1].split("����")[0].trim().replace(/[^(��-�R��-����-��a-zA-Z0-9)]/gi,"").replace("br","");
        replier.reply("���� >> "+ quiz);
        start = 1
     }
     if (start == 1 && msg == answer) {
        replier.reply(sender + "�� �����Դϴ�.")
        start = null; //��������, ����� �̸� ����
     }
     if(start == 1 && msg == "����?")
     {
        replier.reply("������ >> [" + answer + "] �Դϴ�");
        start = null;
     }
     if(start==1 && msg=="��Ʈ!"){
        var u = Utils.getWebText("https://m.search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query="+answer)
        var a = u.split("<span class=\"_text\">") 
        var e = a[1].split("������") 
        var f = e[0].replace(/(<([^>]+)>)/g, ""); 
        var b = u.split("����") 
        var c = b[1].split("�ٰŸ�") 
        var d = c[0].replace(/(<([^>]+)>)/g, ""); 
        d = d.trim() 
        d = d.replace(/\n/g, " "); 
        d = d.replace(/ /g, " "); 
        replier.reply("�ٰŸ� ��Ʈ �Դϴ�. \n"+d+"\n"+f) 
     }
}
