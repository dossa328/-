if(msg.indexOf("/실검")==0){
    var u = Utils.getWebText("https://www.naver.com")
    var a = u.split("급상승 검색어 검색어</h3>")
    var b = a[1].split("11</span>")
    var c = b[0].replace(/(<([^>]+)>)/g,"")
    c = c.replace(/\n\n\n/g,"\n").replace(/(?![0-9]+)  /g,"").trim().replace(/(?=(\D))\b/g,".")
    replier.reply("[실시간 급상승 검색어]\n "+c)
}