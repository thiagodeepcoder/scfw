var macro;
var loopCount = 200;
var b = "\n";
var path;



var whitelistEverdom = ["anejath-rao", "unclesand", "liesurgic-1", "emiliosafredo", "ezwell", "al-b", "frahgtrapn", "lizzle101", 'fransanchez88', 'phantasmo-1', 'jason-isavadj', 'themightydude', 'lolhammond', 'anton-hadjiev','tio-vorasarn','hey-frank-hey','dj-stucky','hun-groove','nici-saunders','hecklar-d','christian-wojcik','amadious-ambrosius','tchungpo','djluisherrmann','in_vic_tum','m-i-c-r-o-berlin','artf-sound','kastercordalis','costamp'];


///////////////
///////////////////////////////////////////// End proccess at 20:32 [label] 
///////////////////////////////////////////// End proccess at 21:32 [everdom] 
///////////////
var namesArray = ['dj-darkman-6','og_steeb','llamaleaf','nicol-stefani-1','mattiasjohansson','oisinmcg','lintonwarren','dj-aormos','djaaronjames','idenniso','ado','alina-brunette','arthur-brittan','paul-falconi','lino-von-der-bey','netlopez','anthony-adshead-1','subtractdivision','ashley-powers','saler','onlyvibez','future-bones','freakthedisco','nihkomusic','hochweiss','dejankaludjerovic','abilic','john_amy','acid-aj','alxxiiz','jean-ares','pjeter-1','statistics-official','aurelius-scott','daniruizdeejay2','connor-ttg-johnson','ravelrie','hertzfunk','bxmani','valentindietmar','alex_hardman','breathsound','ricardolp','charlieflorez','microman1','shuffleton','hallien','lee-clarke-2','atticears','ingominimal','iainjamesmontague','bartosz-dubicki','greentours','manuel_horst','luketuley','semenets','o-tune','prickle_t','elementmusicbg','aguenor','deepclapsdeejay','dferenc23','daniel-ep','littlehood','relock-2','michael-suprun','motzze','peterbernath','santiago-chavez','firris','noys-3','jmarksdj','karboris','kkwi6642','vincent-zavani-1','neil-da-cont','fugue-state-2','gerrit-s','allena-shupe','fattbeatz','ogcxnnor','karbadjobizar','lumo-2','eric-nieto','felipegmusic','ninotchka','michael-flandez','sara-pivarski','marc-c','reig','wedontneedmuch','djwallcrawler','eduardo_be','weiss-dj','fasties','shao_music','marxen-sdt','dj-yox','antonio-benediction','kid-filth','bogdan-bahneanu','karbosemtex','julianotaques','rob-riley','aditude','zrk','mynamehere85','pedro-nel-alarcon','atsigauk','subzerolt','sim0o-1','j_camara','vogelcommunication','antrax','ayjayem','greydi-newball-1','djfrankprosnik','jeremienicolas','juan-manuel-aparicio','ytiger','icyenda','dorian87','luiguibros106','nesta-voci','makkes1','dangerousjag','silentessence','vadim-103','anomimex','philippdaub-official','mohamed-badran','reidhudson','alex-plastik','anton-soldatov-1','tiro-seitter','uebertalentiert','elizabethlazur','galetto_matteo','marceloavilaa2','dumoulinaxel','manjouris','d-n-von-fice','aidan-mcglynn','katrinsouza','pepijn-werre','josh-filler','2funky2funk','gabriel-heurtebis','adrian013','withyouparties','juliusbrauner','denis_b83','hiroaki-wada-4','nr2','ms-official','fawnic','lorenz-1987','redactedmusic','dj-will-taylor','yilduntheory','yusuf-sebaiti','pmoore815','danheath','ezpe','uro-jevti','mellsbells007','jaysucio','mish3aloo','zephuk','walleyz','sneakymusiclabel','sashafish','waldo','mynah','iorie','timmons','beulensmatthias','mwoolhouse','dj-boris-becker','flutterbyone'];

function resetCode() {
	macro = "CODE:";
	macro += "SET !ERRORIGNORE YES" + b;
	macro += "VERSION BUILD=8820413 RECORDER=FX" + b;
}

for (var i = 0; i < namesArray.length; i++) {
	//for (var i = 0; i < 3; i++) {
	
	resetCode();
	if (i == 0) {
		iimDisplay('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
	}
	macro += 'URL GOTO=http://soundcloud.com/' + namesArray[i] + b;
	macro += 'WAIT SECONDS=2' + b;
	macro += 'TAG POS=1 TYPE=BUTTON ATTR=TXT:Seguir' + b;
	macro += 'WAIT SECONDS=2' + b;
	iimDisplay(i);
	iimPlay(macro);
	if (i == namesArray.length - 1) {
		iimDisplay('End proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
	}
}
