let empdata=[{"id":1,"first_name":"Moreen","email":"mpilsworth0@smh.com.au","gender":"Female"},
{"id":2,"first_name":"Trudie","email":"tattride1@meetup.com","gender":"Female"},
{"id":3,"first_name":"Emanuele","email":"eblooman2@mail.ru","gender":"Male"},
{"id":4,"first_name":"Martino","email":"mhaggleton3@geocities.com","gender":"Male"},
{"id":5,"first_name":"Roseanna","email":"rcaizley4@yahoo.com","gender":"Female"},
{"id":6,"first_name":"Davy","email":"dtregensoe5@symantec.com","gender":"Male"},
{"id":7,"first_name":"Lura","email":"ltuckey6@sourceforge.net","gender":"Female"},
{"id":8,"first_name":"Budd","email":"bfetterplace7@bizjournals.com","gender":"Male"},
{"id":9,"first_name":"Aviva","email":"aaveyard8@intel.com","gender":"Female"},
{"id":10,"first_name":"Lovell","email":"lhambric9@sun.com","gender":"Male"},
{"id":11,"first_name":"Krystle","email":"kraspa@hostgator.com","gender":"Female"},
{"id":12,"first_name":"Adi","email":"awaldockeb@nih.gov","gender":"Female"},
{"id":13,"first_name":"Barbee","email":"bchadwellc@techcrunch.com","gender":"Female"},
{"id":14,"first_name":"Kris","email":"kribchesterd@barnesandnoble.com","gender":"Male"},
{"id":15,"first_name":"Joshua","email":"jshoulere@privacy.gov.au","gender":"Male"},
{"id":16,"first_name":"Augusto","email":"aradbournef@blogtalkradio.com","gender":"Male"},
{"id":17,"first_name":"Milena","email":"mfaierg@google.co.uk","gender":"Female"},
{"id":18,"first_name":"Boote","email":"bbausmannh@huffingtonpost.com","gender":"Male"},
{"id":19,"first_name":"Chad","email":"ccullabinei@51.la","gender":"Female"},
{"id":20,"first_name":"Nichols","email":"ncrightenj@parallels.com","gender":"Male"},
{"id":21,"first_name":"Tyson","email":"tmartellok@jalbum.net","gender":"Male"},
{"id":22,"first_name":"Malachi","email":"mmitchleyl@tmall.com","gender":"Genderfluid"},
{"id":23,"first_name":"Vivianne","email":"vambrogiottim@google.it","gender":"Female"},
{"id":24,"first_name":"Yorker","email":"youthwaiten@xinhuanet.com","gender":"Male"},
{"id":25,"first_name":"Delcine","email":"dblawo@vimeo.com","gender":"Female"},
{"id":26,"first_name":"Tedie","email":"teisoldp@xing.com","gender":"Male"},
{"id":27,"first_name":"Dimitri","email":"dgowanq@princeton.edu","gender":"Genderfluid"},
{"id":28,"first_name":"Bennett","email":"bdissmanr@reuters.com","gender":"Male"},
{"id":29,"first_name":"Ode","email":"omacuchadairs@google.com.br","gender":"Male"},
{"id":30,"first_name":"Edgar","email":"egillibrandt@themeforest.net","gender":"Non-binary"},
{"id":31,"first_name":"Bernardo","email":"blisimoreu@cnet.com","gender":"Male"},
{"id":32,"first_name":"Georgianne","email":"ggarfitv@networkadvertising.org","gender":"Female"},
{"id":33,"first_name":"Tam","email":"tchippendalew@oaic.gov.au","gender":"Male"},
{"id":34,"first_name":"Carmencita","email":"cklazengax@wired.com","gender":"Female"},
{"id":35,"first_name":"Burch","email":"bciricy@aol.com","gender":"Male"},
{"id":36,"first_name":"Leshia","email":"ljedraszekz@eventbrite.com","gender":"Female"},
{"id":37,"first_name":"Alden","email":"apurton10@sogou.com","gender":"Male"},
{"id":38,"first_name":"Borg","email":"bivermee11@github.io","gender":"Male"},
{"id":39,"first_name":"Brenden","email":"bruffli12@webs.com","gender":"Male"},
{"id":40,"first_name":"Alejandrina","email":"agrayson13@home.pl","gender":"Female"},
{"id":41,"first_name":"Zared","email":"zrosin14@nature.com","gender":"Male"},
{"id":42,"first_name":"Ricoriki","email":"rattfield15@oracle.com","gender":"Male"},
{"id":43,"first_name":"Merla","email":"mbawcock16@ucoz.ru","gender":"Female"},
{"id":44,"first_name":"Sheppard","email":"ssell17@typepad.com","gender":"Male"},
{"id":45,"first_name":"Salomon","email":"snichol18@wunderground.com","gender":"Male"},
{"id":46,"first_name":"Joachim","email":"jfinlay19@arstechnica.com","gender":"Male"},
{"id":47,"first_name":"Adda","email":"ategeller1a@zdnet.com","gender":"Female"},
{"id":48,"first_name":"Lorinda","email":"lvousden1b@usgs.gov","gender":"Female"},
{"id":49,"first_name":"Franciskus","email":"fcuttler1c@icq.com","gender":"Male"},
{"id":50,"first_name":"Jany","email":"jmathevon1d@uiuc.edu","gender":"Female"},
]
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