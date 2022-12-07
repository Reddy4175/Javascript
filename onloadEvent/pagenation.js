let empdata=[
{"id":51,"first_name":"Arabela","email":"abiddles1e@msu.edu","gender":"Female"},
{"id":52,"first_name":"Mellisa","email":"mcullinan1f@github.io","gender":"Female"},
{"id":53,"first_name":"Shepard","email":"skeetley1g@fda.gov","gender":"Male"},
{"id":54,"first_name":"Ashby","email":"alecount1h@ca.gov","gender":"Male"},
{"id":55,"first_name":"Tod","email":"tmccarl1i@spiegel.de","gender":"Male"},
{"id":56,"first_name":"Ennis","email":"ebassett1j@homestead.com","gender":"Male"},
{"id":57,"first_name":"Saunderson","email":"smatusovsky1k@hubpages.com","gender":"Male"},
{"id":58,"first_name":"Remus","email":"rgayforth1l@alibaba.com","gender":"Genderqueer"},
{"id":59,"first_name":"Fina","email":"fcrosgrove1m@usatoday.com","gender":"Female"},
{"id":60,"first_name":"Aubree","email":"asawood1n@studiopress.com","gender":"Female"},
{"id":61,"first_name":"Tonya","email":"tcannop1o@opensource.org","gender":"Female"},
{"id":62,"first_name":"Mortimer","email":"mknotton1p@msu.edu","gender":"Male"},
{"id":63,"first_name":"Ilise","email":"iprout1q@wiley.com","gender":"Female"},
{"id":64,"first_name":"Adolph","email":"afranseco1r@reuters.com","gender":"Male"},
{"id":65,"first_name":"Patrizia","email":"pdrabble1s@miitbeian.gov.cn","gender":"Bigender"},
{"id":66,"first_name":"Ninnetta","email":"ntart1t@tiny.cc","gender":"Female"},
{"id":67,"first_name":"Lewes","email":"lmichiel1u@bluehost.com","gender":"Male"},
{"id":68,"first_name":"Harlin","email":"hbraunfeld1v@vinaora.com","gender":"Male"},
{"id":69,"first_name":"Eveleen","email":"elovick1w@reuters.com","gender":"Female"},
{"id":70,"first_name":"Xavier","email":"xjoppich1x@engadget.com","gender":"Male"},
{"id":71,"first_name":"Norton","email":"nfabri1y@sbwire.com","gender":"Male"},
{"id":72,"first_name":"Bank","email":"bblackborne1z@psu.edu","gender":"Genderfluid"},
{"id":73,"first_name":"Sibyl","email":"sstrevens20@usgs.gov","gender":"Female"},
{"id":74,"first_name":"Marcela","email":"mleprovost21@barnesandnoble.com","gender":"Female"},
{"id":75,"first_name":"Storm","email":"sconyard22@behance.net","gender":"Female"},
{"id":76,"first_name":"Constancy","email":"cdenisovo23@admin.ch","gender":"Female"},
{"id":77,"first_name":"Minny","email":"mtitmuss24@paginegialle.it","gender":"Female"},
{"id":78,"first_name":"Marvin","email":"movitz25@washington.edu","gender":"Male"},
{"id":79,"first_name":"Nolly","email":"nflatt26@yahoo.com","gender":"Male"},
{"id":80,"first_name":"Gabe","email":"gjanek27@whitehouse.gov","gender":"Male"},
{"id":81,"first_name":"Jillian","email":"jmccullough28@skyrock.com","gender":"Female"},
{"id":82,"first_name":"Hettie","email":"hkubera29@princeton.edu","gender":"Female"},
{"id":83,"first_name":"Jae","email":"jdulton2a@slate.com","gender":"Male"},
{"id":84,"first_name":"Janek","email":"jjacqueminet2b@51.la","gender":"Male"},
{"id":85,"first_name":"Niki","email":"ngrishelyov2c@qq.com","gender":"Male"},
{"id":86,"first_name":"Kesley","email":"kkenington2d@studiopress.com","gender":"Female"},
{"id":87,"first_name":"Hussein","email":"hhentzer2e@princeton.edu","gender":"Male"},
{"id":88,"first_name":"Junette","email":"jmerrgan2f@livejournal.com","gender":"Female"},
{"id":89,"first_name":"Polly","email":"pbuncher2g@t-online.de","gender":"Female"},
{"id":90,"first_name":"Wiley","email":"wcaffery2h@cmu.edu","gender":"Genderqueer"},
{"id":91,"first_name":"Melisa","email":"mhanscome2i@icio.us","gender":"Genderfluid"},
{"id":92,"first_name":"Andres","email":"abennetto2j@oracle.com","gender":"Male"},
{"id":93,"first_name":"Elsbeth","email":"eartz2k@hp.com","gender":"Female"},
{"id":94,"first_name":"Zechariah","email":"zbaylis2l@sogou.com","gender":"Male"},
{"id":95,"first_name":"Joannes","email":"jduckerin2m@skyrock.com","gender":"Female"},
{"id":96,"first_name":"Paquito","email":"probers2n@google.es","gender":"Polygender"},
{"id":97,"first_name":"Karen","email":"kmonte2o@shop-pro.jp","gender":"Female"},
{"id":98,"first_name":"Salome","email":"stresise2p@newsvine.com","gender":"Female"},
{"id":99,"first_name":"Reinwald","email":"rbuckel2q@phoca.cz","gender":"Male"},
{"id":100,"first_name":"Margaux","email":"mpetteford2r@theguardian.com","gender":"Female"}]
function  displaydata(){
    let row=""
    let i=0;
    while(i<=empdata.length-1){
        row=row+ `<tr>
        <td>${empdata[i].id}</td>
        <td>${empdata[i].first_name}</td>
        <td>${empdata[i].email}</td>
        <td>${empdata[i].gender.slice(0,1)}</td>
        <td>${empdata[i].email.substr(empdata[i].email.indexOf('@')+1)}</td>
        
        </tr>`
        i++;
    }
    document.getElementById('data').innerHTML=row
}     