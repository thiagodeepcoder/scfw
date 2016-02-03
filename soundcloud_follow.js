var macro;
var loopCount = 0;
var b = "\n";
var path;


var whitelistEverdom = ["anejath-rao", "unclesand", "liesurgic-1", "emiliosafredo", "ezwell", "al-b", "frahgtrapn", "lizzle101", 'fransanchez88', 'phantasmo-1', 'jason-isavadj', 'themightydude', 'lolhammond', 'anton-hadjiev', 'tio-vorasarn', 'hey-frank-hey', 'dj-stucky', 'hun-groove', 'nici-saunders', 'hecklar-d', 'christian-wojcik', 'amadious-ambrosius', 'tchungpo', 'djluisherrmann', 'in_vic_tum', 'm-i-c-r-o-berlin', 'artf-sound', 'kastercordalis', 'costamp','admnti','phips-3','0969796981','iloshp','david-burkhalter','fefo-3-1','mikavillain','jason-hill-80','firris','avox25','relock-2','adrian013','murmulo','arthur-cuadra','averzyo','ingridblancafort','dawe-sky-psyb3rd3lixx','liviustavarache','below-bangkok','nelsooon','dolfke-lazou','ellie-ka','dj-weedze-newborrow','zraduandrei','heathporter','hudlup_music','shut-up-11','zchmnro','dj-darkman-6','dom-472781461','naka-changu-kongu','ado','walleyz','mario-teixeira-5','muhrad','djhurie','john_amy','niko-nar','d-n-von-fice','mynamehere85','alex_hardman','oisinmcg','black-forest-lausanne','tobberh','galetto_matteo','4plaerecords','j_camara','sykproduction','future-bones','abilic','eric-nieto','greydi-newball-1','kid-filth','lacerdadiego','fugue-state-2','daniel-ep','hertzfunk','marxen-sdt','mike-dowson','ryanmichaelrobbins'];

var whitelistLabel = ["3nginemusic","jack-blount-1","richipdj","ingridblancafort","belier_music","oskar85","80pleierkasten80","williamknarz","felipe-orellana-67","bucco-beat","187spencer","loma_music","a-flo","wankala","patrickh217","nicola-nolli","v-ictr","ablywinter","max_tolmachev","gobeatz","taha-belgasmi","jensakkermans","biago","user-483895746","juan-arcilla","lightsouttoronto","9thousand9","pablojauregui","320kbps","in-deep-501341522","kidsblasted","2xml","brunomello","phillip-schmittke","paul-smith-128","anton-g-2","vedrankomm","imox","lucasgibelato","drumkraftmusik","daisuke-matsukura-805915207","remon_010","simonetagliabue18","victor-coyotech","alex-kritikos-5","abstractsyence","guidogoldschwartz","disco-visionary","firris","a-y-d-marinac","alejandrocuestas","iamkoska","abrasiv","effielimccloskey","dj_prochecked","djagfo-5","peppou","45-k0","shinyavi","11clouds","aabramov","gertude-lemke","massud-matin","transmog","mousikemke","0btx0","6yay","wagner-jr","martin-od4o4-moore","kinetique","crazyturkusa","vertical-sofa","daniiells","unclesand","martaqq","aargenal","everdom","a1meusick","neolibe","maximilian-spitza","walter95","5ambo-1","leonardo-alfonso","thelimbiicsystem","trazontecib","marcelotosetto","jmrisagns","guanlong","shelo-underground","rosmur","absolud_joy3","groovesynaptics","abiboysilence","labdii-lartist"];


///////////////
///////////////////////////////////////////// End proccess at 21:32 [label] 
///////////////////////////////////////////// End proccess at 22:32 [everdom] 
///////////////
var label = ['pimppants', 'id-tracks', 'mathijs-visee', 'lelanza', 'ricc_marussi', 'guripoo', 'harry-crompton-2', 'randy-concepcion-1', 'midnightkaos', 'connordarbii', 'narkotech-israweber', 'ju-273323139', 'daniel-allen', 'hex-3', 'illegalgeneration', 'yanone', 'seanmbldn', 'echoton', 'jimbountitled', 'zicho', 'arialdo-ap', 'julian_m', 'daferr', 'yandry-chong', 'connor-highgate', 'dj-charliea', 'dozballa', 'spideros', 'paddio', 'stormyroxx', 'ursulastar911', 'cskog', 'hugo-dusapin', 'silvasound', 'honigdachsvonbadebach', 'marlon-silva-19', 'adrian-flux', 'rafalkobierski', 'petarmilicevic', 'remork-83', 'more-na2', 'mazenelmessery', 'markagarza2', 'maxmalstift', 'armadaz', 'aschella', 'patric-stytec', 'kuba-kardamon', 'vayv', 'un-cocodrilo', 'ollie-fuller', 'm-orlowicz', 'flo-lahilla', 'sincro360', 'solar-kama-sutra', 'julianfalkk', 'blaquemusic', 'tech1ne', 'dj-keki', 'm-jacket', 'haidak', 'gary-fitz-91', 'vinnassimusic', 'alina-brunette', 'nicp-2', 'dj-daz-parsons', 'myfriendmusicpage', 'lulabes', 'andrehglr', 'damienfisher', 'markevemport', 'ali-chester', 'zokzokdj', 'darrendoherty', 'dariusdenn', 'albastrel-1', 'beatsmemusic_podcast', 'musicresearch-1', 'user456516502', 'itsmoerk', 'lvckypvnch', 'mono-mono29', 'mr-dread-evo-rec', 'mastarosa', 'kai-deubert', 'christian-kaiser-42', 'skankksa', 'sergey-partyka', 'olivier-nussbaum', 'gogandj', 'nikolaiproductions', 'traktmouse', 'bobroolvink', 'jack-prendergast-1', 'grahamos', 'miccu', 'mikediscoid', 'fedegama', 'bendikbaksaas', 'milantell', 'k-will-1', 'fiston-vlaanderen', 'dirty4mat', 'jamiebrennan', 'belms', 'george-florea-jorhe', 'mikelurizar42', 'amanuelramirez', 'bogdan-bahneanu', 'demian-t-m-d', 'aronisty', 's-h-k-1', 'sntx', 'pedro-rodrigues-420', 'alextroubetzkoy', 'until33', 'techno-recomm', 'fl0p', 'colaandcrack', 'drastic-duo', 'joanish', 'awkermusic', 'decorlab', 'edm-family-argentina', 'mikelkarim', 'simon-burmester', 'andakawa', 'terence-verdier', 'annakec', 'zablerable', 'go-europe', 'andre-williams-96', 'lukas222', 'alessekosso', 'zobl-1', 'reinhardtam', 'technophobic', 'defyingneon', 'w5m-d3m020n3', 'ahmedsalah-official', 'andreazxt', 'dario-marsella', 'rafahellmusic', 'ellepotenza', 'beatbopbit-experience', 'yusuf-sebaiti', 'gavriel-shab', 'zabong', 'rainoh-cee-ross', 'audiofred23', 'surfacetechno', 'mikel_whip', 'djessence-2', 'mutebrain', 'yabajay', 'itay-lifshitz-1', 'elektrik-o', 'pepi_tripitrip', 'eddiehu', 'deep-matic', 'jcouplej', 'evandro-gasparin', 'headinthecrowds29', 'vikingandersson', 'flymars', 'technoxia1', 'vincenzo-castriota', 'patpat', 'emi_montilla', 'vanbastik', 'mivaka', 'iamnoblesse', 'simirill', 'informalist', 'dubctrl', 'stevenkaiser', 'maximusmax-1', 'soud-dealers', 'der-schneller', 'aviral-jadhav'];

var everdom = ['adham-magdy', 'carlos-antonorsi', 'rusty-the-mole', 'astronautclassics', 'clats', 'deepspaces-j', 'lucagerlin', 'ashfaq-nurul', 'tanzo-morris', 'danil0', 'adrianaluciamusic', 'kuurt-letzel', 'djhedvenz', 'djessyhutzezon', 'dominic-ehrat', 'rylex', 'nekr4', 'variondmartz', 'brucewallacedubi', 'alexandrovich', 'jean-baptiste-philippe', 'gilkodj', 'ehbod', 'jaianand', 'asabibby', 'graymoonen', 'shunye', 'dj-bstar0', 'f-thimis', 'f_annik', 'defective-sounds-of-london', 'nacho-mondejar-morales', 'dj_tboy', 'elektrozed', 'labeltonmusicreclabel', 'ly-dia-21', 'trotzkopf-1', 'joshholiday', 'peerkaschen', 'deep-kontrol', 'pablopr1', 'nico-louse', 'southerncoyote', 'cernunnos-series', 'cayn-dias', 'ancientmordred', 'danielverhagenmusic', 'charlie-boy-official', 'kenji-bokken', 'dj-augusto-cabrera', 'vbdee_p', 'gustavo-marzo', 'shargiyya-rahmanova', 'felipe-rivas-4', 'sebastian-farkas', 'allan-greskiv', 'world_wide_party_sets', 'angel-cordoba-ca-izares', 'samson1310', 'valenmusicofficial', 'myfriendmusicpage', 'southside121', 'thefreshbeat', 'furkancavusmusic', 'afterallwearenoname', 'christiian-rodriguez', 'milo-garrett', 'davidrico', 'tom-shenton', 'fletcher84', 'roland-mirsoew', 'tillmatthe', 'pica-dj-1', 'ibiliss', 'raphabatista', 'stefan-roncevic', 'sobek_boesherz', 'n3uro', 'albanezlive', 'matiassilvamusic', 'l-taylor', 'djwess', 'albert-chaillot', 'tinowi', 'jjacksongrantt', 'sousdubois', 'valura', 'thibaut-hupperts', 'danilostellet', 'behind-secret-borders', '5477564', 'aqassam', 'eduardofusaro', 'seriouse', 'udi999', 'themorfine', 'rsbean', 'mikediscoid', 'nicholasdotto', 'leon-ja', 'haighofficial', 'c_laur22', 'monsieurpanadero', 'hargy', 'lightfoot-halcyon', 'uschi-wuschi', 'nasamann', 'christian-miastkowski', 'abitual', 'edyta-yankovska', 'paoloriozzi', 'nechkin', '3catsdeep', 'dragan-jovetic', 'marsyan-1', 'tatamy', 'konchenn', 'djdormin', 'gk-beatz', 'dj-tom-swift-1', 'saulnieto-bcn', 'vivianatirifon', 'schwavek', 'thomaspunt', 'ph0kus', 'branimir-branos-solaja', 'alex-collis-1', 'kelsiecat', 'moses_94', 'mucza', 'olivierfrancis', 'igorrumyantsev', 'seeibe', 'lukea-soundcloud-co', 'digitalshaker', 'techno_city', 'donrial-atsa-production', 'juzepe', 'kingdens', 'moogsane', 'davr21', 'vigomusic', 'rosanna-leal-solar', 'ricles-henrique-alves', 'jonparkes', 'molekfr', 'matthias-bendner', 'solvis', 'ladislav-hjort', 'copycow', 'alvarogarc-a-echanizherrero', 'oddodj', 'patrick-weblin', 'ivet-koralska', 'muchofunk', 'tihanyibmusic', 'pyt', 'marceauxmarceaux', 'tommynezik', 'muntal1', 'wat-voor-datum', 'abjure', 'william-mogey', 'juliendask', 'deepindeed-1', 'lex-cut', 'hertzzbube', 'thobas-herbert', 'orlando-tosi', 'beeya55', 'boesertrip', 'moncef1', 'vitolucente', 'peter-henke', 'robertovascu', 'ldegani', 'jaimesoeiro', 'akseltone', 'farhang-dadfar', 'zowie-impellizzeri'];


var everdomArray2 = ["mari-velhovska","scottydubbs","lediskodesigns","expecta","djmrwe","ryan-issaco","enhe","kl-oliveira","ramzismusic","iamspacemoth","ed-z","cikante","haciyeff","scentox","chrisbondurant","empc_00","patrick-sylvander","marcellwallet","mappmusic","sergio-reynosa","iago-chaves","dulittle","mrtsar","nahhghee","imen-farah-1","vincent-grrd-beachbreak","digitalproject","acrofunkzmusic","ana79","pete-williams-11","omargaxiolaoficial","dj-niuu","manuelbiondi94","emasez","george-muchiauri","casimir-5","kartellproduction","m1shi","alexdepaoli","aleksandr-stabenow","etienne-belair","ulser","luredoll","mustapha-denguezli","mushroomcake","agileaudio","archila","soulsystm","martin-j-hlich","normamelanson","ericogutierrez","thomas-mln","rohailjaved","fischersthlm","catchmeifyucan3","lorenzini-lara","gabrielppimentel","g-bus","jay-fehrman","andy-acos","intrinsecus","toppermike","lemongrass-bw","kukbaalam","dubathonic","skweeerrl","jorgeruiz-5","dhruv-shah-6","lililoux","michael-twumberina","yupthukirara","davelocoproject","tribal-leader","reptileconvention","alexandre-delarge-1","marcomombasa","s2-music","evodog","nikolai-korovkin","harrybugge","sven-jaeger","travis-dagz","akhor","etox-music","zakov","pimppants","alexmagana","filip-ackovski","leandro-rojo","sashok-titov","tatuturunen","naughtywood","pirateztry","komponent-rec-webstar","madeinrimini","rudimoresc","ze-mog","seyit-bernhard-bl-mel","ron-mars","batch-mox","jjfunkciberdelia","daan-vinken","synthless","loris-dust","danipastorvedia","sundaybrunchseries","humanmode","phasen","jchavezmusic","t-chung","i-am-cinical","sorin-luchianpapa","drummbeat","a-ap-naffy","francesca-ballone","gabriele-bernardis-1","ricksander","mosser-1","user2992944","cole-mercer","andynoizedeejay","kambomusic","despmusic","mathiigalindez","krypto1","art-uk","junkie-kids","spacemajor","aaron-sanchez-fonseca","baxter-baxter","mikep2212","axiussherpa","jonathanbarber","superoganes","negredo","ladyjulius","toma-stoichkov","piipshow","murdock-m","romain-garett","07connor07","alex-ruiz","glaucoman-dj","lufee001","juan-christian-nogueira","yourdjmusic","poligamyk","disse_official","makswinc","dinnmovell"];

var  labelArray2 = ["ionescu-1","bruno-caballero-carre-o","pim-cox","gugaschi","thebeginning","jlm5","jozemp","caio-piras","nickdirty-1","chrisgiapitzis","alexcopps","salva_tierra","sergejpribytkov","agassihua","mungbeansoup","curt_62","deathtothefakie","denisbabaev","monterox","oscarrodn","greg_eversoul","timberbeats","feonix","wilian-leal","scoppiato-1","mrpachiigomez","brechdanau","mushtag2050","seby-sk","nicolini1981","amb0s","mark-rokni","elementmusicofficial"];

var namesArray = labelArray2;

function resetCode() {
	macro = "CODE:";
	macro += "SET !ERRORIGNORE YES" + b;
	macro += "VERSION BUILD=8820413 RECORDER=FX" + b;
}

var extra2Follow = [];

function doesElementExist() {
	iimDisplay('looking for small element with class "follow-status" on page');
	var code = iimPlay('CODE: SET !TIMEOUT_TAG 1\n' + 'TAG POS=1 TYPE=BUTTON ATTR=TXT:Seguindo EXTRACT=TXT');

	//alert(iimGetLastExtract());
	var extract = iimGetLastExtract();
	if (code !== 1) {
		return false;
	}
	
	if (extract === '#EANF#') {
		return false;
	}
	return true;
}

for (var i = 0; i < namesArray.length; i++) {
	//for (var i = 0; i < 3; i++) {
	resetCode();
	if (i == 0) {
		iimDisplay('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
	}
	macro += 'URL GOTO=http://soundcloud.com/' + namesArray[i] + b;
	macro += 'WAIT SECONDS=4' + b;
	iimPlay(macro);
	resetCode();
	var exists = doesElementExist();
	if (!exists) {
		resetCode();
		iimDisplay("Not Following");
		macro += 'WAIT SECONDS=1' + b;
		iimPlay(macro);
	} else {
		loopCount++;
		//extra2Follow.push("'"+namesArray[i]+"'");
		resetCode();
		
		macro += 'TAG POS=1 TYPE=BUTTON ATTR=TXT:Seguindo' + b;
		macro += 'WAIT SECONDS=2' + b;
		iimPlay(macro);
		//alert('seguindo');
	}

	iimDisplay(i);
	if (i == namesArray.length - 1) {
		iimDisplay('End proccess at ' + new Date().getHours() + ':' + new Date().getMinutes() + " With total: " + loopCount);

		alert(extra2Follow);
	}
}
