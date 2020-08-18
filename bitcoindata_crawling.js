if(msg=="/비트코인"){
    var data = Utils.getWebText("https://m.search.daum.net/kakao?w=tot&DA=SH1&q=%EB%B9%84%ED%8A%B8%EC%BD%94%EC%9D%B8%20%EC%8B%9C%EC%84%B8%201%EC%9D%BC&rtmaxcoll=EMA");
    data = data.replace(/(<([^>]+)>)/g, "");
    data = data.split("비트코인BTC")[1];
    data = data.split("원")[0].trim();
}