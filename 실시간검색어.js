if(msg.indexOf("/�ǰ�")==0){
    var u = Utils.getWebText("https://www.naver.com")
    var a = u.split("�޻�� �˻��� �˻���</h3>")
    var b = a[1].split("11</span>")
    var c = b[0].replace(/(<([^>]+)>)/g,"")
    c = c.replace(/\n\n\n/g,"\n").replace(/(?![0-9]+)  /g,"").trim().replace(/(?=(\D))\b/g,".")
    replier.reply("[�ǽð� �޻�� �˻���]\n "+c)
}