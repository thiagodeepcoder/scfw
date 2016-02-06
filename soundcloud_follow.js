var macro;
var loopCount = 0;
var b = "\n";
var path;


var whitelistEverdom = ["anejath-rao", "unclesand", "liesurgic-1", "emiliosafredo", "ezwell", "al-b", "frahgtrapn", "lizzle101", 'fransanchez88', 'phantasmo-1', 'jason-isavadj', 'themightydude', 'lolhammond', 'anton-hadjiev', 'tio-vorasarn', 'hey-frank-hey', 'dj-stucky', 'hun-groove', 'nici-saunders', 'hecklar-d', 'christian-wojcik', 'amadious-ambrosius', 'tchungpo', 'djluisherrmann', 'in_vic_tum', 'm-i-c-r-o-berlin', 'artf-sound', 'kastercordalis', 'costamp', 'admnti', 'phips-3', '0969796981', 'iloshp', 'david-burkhalter', 'fefo-3-1', 'mikavillain', 'jason-hill-80', 'firris', 'avox25', 'relock-2', 'adrian013', 'murmulo', 'arthur-cuadra', 'averzyo', 'ingridblancafort', 'dawe-sky-psyb3rd3lixx', 'liviustavarache', 'below-bangkok', 'nelsooon', 'dolfke-lazou', 'ellie-ka', 'dj-weedze-newborrow', 'zraduandrei', 'heathporter', 'hudlup_music', 'shut-up-11', 'zchmnro', 'dj-darkman-6', 'dom-472781461', 'naka-changu-kongu', 'ado', 'walleyz', 'mario-teixeira-5', 'muhrad', 'djhurie', 'john_amy', 'niko-nar', 'd-n-von-fice', 'mynamehere85', 'alex_hardman', 'oisinmcg', 'black-forest-lausanne', 'tobberh', 'galetto_matteo', '4plaerecords', 'j_camara', 'sykproduction', 'future-bones', 'abilic', 'eric-nieto', 'greydi-newball-1', 'kid-filth', 'lacerdadiego', 'fugue-state-2', 'daniel-ep', 'hertzfunk', 'marxen-sdt', 'mike-dowson', 'ryanmichaelrobbins', "heathporter", "fugue-state-2", "loris_dettore", "weltschmerzmusic", "hertzfunk", "ingridblancafort", "niko-nar", "0969796981", "black-forest-lausanne", "mikavillain", "phips-3", "artf-sound", "loco_dj", "noone-costelo", "anatolkin", "dj-darkman-6", "strahinja-spremo", "alex_hardman", "kravich-1", "jason-hill-80", "sample95-music", "galetto_matteo", "mario-teixeira-5", "averzyo", "dj-weedze-newborrow", "j_camara", "marxen-sdt", "murmulo", "franzis-d", "mysticcarouselrecords", "eric-nieto", "future-bones", "hiroaki-wada-4", "james-dub-inspekta", "muhrad", "below-bangkok", "zraduandrei", "evietek", "kraussbe", "michel-b-dagher", "aaron-levv", "dolfke-lazou", "m-i-c-r-o-berlin", "adrian013", "ado", "zchmnro", "avox25", "christian-liotta", "naka-changu-kongu", "costamp", "john_amy", "walleyz", "maks_k", "kastercordalis", "sykproduction", "admnti", "nelsooon", "firris", "wedontneedmuch", "alexferrermusic", "iamkoska", "djcharlespierre", "lacerdadiego", "arthur-cuadra", "mynamehere85", "tobberh", "a-molin", "iainjamesmontague", "billy-niko", "ricardolp", "ryanmichaelrobbins", "abilic", "david-burkhalter", "greydi-newball-1", "t-abou-t-t", "luiz-ot-vio-rauber", "franksharp", "jackcob", "dom-472781461", "hudlup_music", "ben-miles-dj", "fefo-3-1", "d-n-von-fice", "breathsound", "venae", "cat-black-djs", "sasha-martinez", "kid-filth", "nahh-g", "daniel-ep", "oisinmcg", "relock-2", "dawe-sky-psyb3rd3lixx", "florian-29", "in_vic_tum", "mike-dowson", "liviustavarache", "ellie-ka", "djhurie", "iloshp", "denydoom","imthestoosie","john-rentonn","austieja","bennymaximalakamaxbear"];


var whitelistLabel = ["3nginemusic","jack-blount-1","richipdj","ingridblancafort","belier_music","oskar85","80pleierkasten80","williamknarz","felipe-orellana-67","bucco-beat","187spencer","emanuele-corsanico","loma_music","a-flo","wankala","patrickh217","nicola-nolli","v-ictr","ablywinter","max_tolmachev","gobeatz","taha-belgasmi","jensakkermans","biago","user-483895746","juan-arcilla","lightsouttoronto","9thousand9","pablojauregui","320kbps","in-deep-501341522","kidsblasted","2xml","brunomello","phillip-schmittke","paul-smith-128","anton-g-2","vedrankomm","imox","lucasgibelato","drumkraftmusik","daisuke-matsukura-805915207","pettevat","remon_010","simonetagliabue18","victor-coyotech","alex-kritikos-5","abstractsyence","guidogoldschwartz","disco-visionary","firris","wedontneedmuch","a-y-d-marinac","alejandrocuestas","iamkoska","abrasiv","effielimccloskey","dj_prochecked","djagfo-5","peppou","45-k0","shinyavi","11clouds","aabramov","gertude-lemke","bennymaximalakamaxbear","massud-matin","transmog","mousikemke","0btx0","6yay","wagner-jr","labdii-lartist","martin-od4o4-moore","kinetique","rhoxo","abiboysilence","crazyturkusa","international-clan","vertical-sofa","daniiells","unclesand","succubus-helna-v2-0","martaqq","aargenal","everdom","a1meusick","neolibe","maximilian-spitza","walter95","5ambo-1","leonardo-alfonso","thelimbiicsystem","trazontecib","marcelotosetto","jmrisagns","guanlong","shelo-underground","rosmur","absolud_joy3","groovesynaptics"];


///////////////
///////////////////////////////////////////// End proccess at 21:32 [label] 
///////////////////////////////////////////// End proccess at 22:32 [everdom] 
///////////////
var label = ['pimppants', 'id-tracks', 'mathijs-visee', 'lelanza', 'ricc_marussi', 'guripoo', 'harry-crompton-2', 'randy-concepcion-1', 'midnightkaos', 'connordarbii', 'narkotech-israweber', 'ju-273323139', 'daniel-allen', 'hex-3', 'illegalgeneration', 'yanone', 'seanmbldn', 'echoton', 'jimbountitled', 'zicho', 'arialdo-ap', 'julian_m', 'daferr', 'yandry-chong', 'connor-highgate', 'dj-charliea', 'dozballa', 'spideros', 'paddio', 'stormyroxx', 'ursulastar911', 'cskog', 'hugo-dusapin', 'silvasound', 'honigdachsvonbadebach', 'marlon-silva-19', 'adrian-flux', 'rafalkobierski', 'petarmilicevic', 'remork-83', 'more-na2', 'mazenelmessery', 'markagarza2', 'maxmalstift', 'armadaz', 'aschella', 'patric-stytec', 'kuba-kardamon', 'vayv', 'un-cocodrilo', 'ollie-fuller', 'm-orlowicz', 'flo-lahilla', 'sincro360', 'solar-kama-sutra', 'julianfalkk', 'blaquemusic', 'tech1ne', 'dj-keki', 'm-jacket', 'haidak', 'gary-fitz-91', 'vinnassimusic', 'alina-brunette', 'nicp-2', 'dj-daz-parsons', 'myfriendmusicpage', 'lulabes', 'andrehglr', 'damienfisher', 'markevemport', 'ali-chester', 'zokzokdj', 'darrendoherty', 'dariusdenn', 'albastrel-1', 'beatsmemusic_podcast', 'musicresearch-1', 'user456516502', 'itsmoerk', 'lvckypvnch', 'mono-mono29', 'mr-dread-evo-rec', 'mastarosa', 'kai-deubert', 'christian-kaiser-42', 'skankksa', 'sergey-partyka', 'olivier-nussbaum', 'gogandj', 'nikolaiproductions', 'traktmouse', 'bobroolvink', 'jack-prendergast-1', 'grahamos', 'miccu', 'mikediscoid', 'fedegama', 'bendikbaksaas', 'milantell', 'k-will-1', 'fiston-vlaanderen', 'dirty4mat', 'jamiebrennan', 'belms', 'george-florea-jorhe', 'mikelurizar42', 'amanuelramirez', 'bogdan-bahneanu', 'demian-t-m-d', 'aronisty', 's-h-k-1', 'sntx', 'pedro-rodrigues-420', 'alextroubetzkoy', 'until33', 'techno-recomm', 'fl0p', 'colaandcrack', 'drastic-duo', 'joanish', 'awkermusic', 'decorlab', 'edm-family-argentina', 'mikelkarim', 'simon-burmester', 'andakawa', 'terence-verdier', 'annakec', 'zablerable', 'go-europe', 'andre-williams-96', 'lukas222', 'alessekosso', 'zobl-1', 'reinhardtam', 'technophobic', 'defyingneon', 'w5m-d3m020n3', 'ahmedsalah-official', 'andreazxt', 'dario-marsella', 'rafahellmusic', 'ellepotenza', 'beatbopbit-experience', 'yusuf-sebaiti', 'gavriel-shab', 'zabong', 'rainoh-cee-ross', 'audiofred23', 'surfacetechno', 'mikel_whip', 'djessence-2', 'mutebrain', 'yabajay', 'itay-lifshitz-1', 'elektrik-o', 'pepi_tripitrip', 'eddiehu', 'deep-matic', 'jcouplej', 'evandro-gasparin', 'headinthecrowds29', 'vikingandersson', 'flymars', 'technoxia1', 'vincenzo-castriota', 'patpat', 'emi_montilla', 'vanbastik', 'mivaka', 'iamnoblesse', 'simirill', 'informalist', 'dubctrl', 'stevenkaiser', 'maximusmax-1', 'soud-dealers', 'der-schneller', 'aviral-jadhav'];

var everdom = ['adham-magdy', 'carlos-antonorsi', 'rusty-the-mole', 'astronautclassics', 'clats', 'deepspaces-j', 'lucagerlin', 'ashfaq-nurul', 'tanzo-morris', 'danil0', 'adrianaluciamusic', 'kuurt-letzel', 'djhedvenz', 'djessyhutzezon', 'dominic-ehrat', 'rylex', 'nekr4', 'variondmartz', 'brucewallacedubi', 'alexandrovich', 'jean-baptiste-philippe', 'gilkodj', 'ehbod', 'jaianand', 'asabibby', 'graymoonen', 'shunye', 'dj-bstar0', 'f-thimis', 'f_annik', 'defective-sounds-of-london', 'nacho-mondejar-morales', 'dj_tboy', 'elektrozed', 'labeltonmusicreclabel', 'ly-dia-21', 'trotzkopf-1', 'joshholiday', 'peerkaschen', 'deep-kontrol', 'pablopr1', 'nico-louse', 'southerncoyote', 'cernunnos-series', 'cayn-dias', 'ancientmordred', 'danielverhagenmusic', 'charlie-boy-official', 'kenji-bokken', 'dj-augusto-cabrera', 'vbdee_p', 'gustavo-marzo', 'shargiyya-rahmanova', 'felipe-rivas-4', 'sebastian-farkas', 'allan-greskiv', 'world_wide_party_sets', 'angel-cordoba-ca-izares', 'samson1310', 'valenmusicofficial', 'myfriendmusicpage', 'southside121', 'thefreshbeat', 'furkancavusmusic', 'afterallwearenoname', 'christiian-rodriguez', 'milo-garrett', 'davidrico', 'tom-shenton', 'fletcher84', 'roland-mirsoew', 'tillmatthe', 'pica-dj-1', 'ibiliss', 'raphabatista', 'stefan-roncevic', 'sobek_boesherz', 'n3uro', 'albanezlive', 'matiassilvamusic', 'l-taylor', 'djwess', 'albert-chaillot', 'tinowi', 'jjacksongrantt', 'sousdubois', 'valura', 'thibaut-hupperts', 'danilostellet', 'behind-secret-borders', '5477564', 'aqassam', 'eduardofusaro', 'seriouse', 'udi999', 'themorfine', 'rsbean', 'mikediscoid', 'nicholasdotto', 'leon-ja', 'haighofficial', 'c_laur22', 'monsieurpanadero', 'hargy', 'lightfoot-halcyon', 'uschi-wuschi', 'nasamann', 'christian-miastkowski', 'abitual', 'edyta-yankovska', 'paoloriozzi', 'nechkin', '3catsdeep', 'dragan-jovetic', 'marsyan-1', 'tatamy', 'konchenn', 'djdormin', 'gk-beatz', 'dj-tom-swift-1', 'saulnieto-bcn', 'vivianatirifon', 'schwavek', 'thomaspunt', 'ph0kus', 'branimir-branos-solaja', 'alex-collis-1', 'kelsiecat', 'moses_94', 'mucza', 'olivierfrancis', 'igorrumyantsev', 'seeibe', 'lukea-soundcloud-co', 'digitalshaker', 'techno_city', 'donrial-atsa-production', 'juzepe', 'kingdens', 'moogsane', 'davr21', 'vigomusic', 'rosanna-leal-solar', 'ricles-henrique-alves', 'jonparkes', 'molekfr', 'matthias-bendner', 'solvis', 'ladislav-hjort', 'copycow', 'alvarogarc-a-echanizherrero', 'oddodj', 'patrick-weblin', 'ivet-koralska', 'muchofunk', 'tihanyibmusic', 'pyt', 'marceauxmarceaux', 'tommynezik', 'muntal1', 'wat-voor-datum', 'abjure', 'william-mogey', 'juliendask', 'deepindeed-1', 'lex-cut', 'hertzzbube', 'thobas-herbert', 'orlando-tosi', 'beeya55', 'boesertrip', 'moncef1', 'vitolucente', 'peter-henke', 'robertovascu', 'ldegani', 'jaimesoeiro', 'akseltone', 'farhang-dadfar', 'zowie-impellizzeri'];


var everdomArray4 = ["clouds-above-1","beats052","jordan-la-mantia","andy_5921","tompatches","daniel_brooks","partyinmypants-3","mark-lemar","nina-patrice-shafai","sam-warren-2","timmy-ramlugaan","kibbi","fra_morise","meertasa","lille-deep-underground","euan-swift","420weeneed","adrian-suter-1","david_tp","cecil_music","lovelike","de-boys","bryancornish","alex-viruet","longdistancemusic","alex-molina-salcedo","badapple_dj","arsingz","dr_boo","shinedark","dudley-strangeways","hank-moody-10","muchizhi","milko-deep","frederique-rijsdijk","matraemond","igor-girio","schranz-tantchen","nezarkadhem","raivooo","madtrips","bl0bb0","dj_rc-2","edu_franco","monyooo","vladimirs-jurcenko","lukegarciadj","indancetrial","ilevin","denkas","art-of-the-decline","ismedio","shyv3r","davehalligan","barbu-alex-dadu","justinrhee","drmindbender","denis-sommer","mahdouch-1","bogdangabriel94","nadir-me","eoin_brown","xrilars","loeblich","saffronrobins","luced","birdyconnected","met-calf","masaru-uchida-1","jamesrafferty","frank-v","youth-rave-center","nesh305","camelotanker","ismael-zouaoui","dj-ankle-breaker","federico_gadi","anand-groenewegen","max-de-min","remisollacy","djagusgarcia","lilly-prettyinink","andrehglr","pablo-say","kornkmr","bukow","edsimpson","claesson8","clubfmmallorca","milovan-stojanovic","edgarrodrigues","nilstwachtmann","missisbliss","gregory-teck","prathap-menon","rizea_alin","les-enfants-de-la-bass","hancock-josh","tsl_key_vj","hustletouch","pablo-nachtschicht","nekromantik","timo_v","circ0_l0c0","jonahmyles","dawentez","misternize","raynor-uk","rodrigo-alvarez-abelleira","rianschwarzkopf","miguel-heras-official","stevejhall","martaqq","daylemcintosh","ivo-tabakov","salvador-roibon","ianpons","jorge-hurtado-velasco","helgarose","larry-p","pabloarrangoiz","sshit-is-banging","marusse","thertamunto","marciwlk","djfreddycat","jonathankreuger","user897728526","tri_pat","n4ldj","lurifaks","emma-starkova","alexander-beck-6","monstergetdown","lapintiiramusic","iliq-panteleev","bossa-nova","bogdanmusat","ehhzett","mcbreeezy","user-166072744","dmtr_hz","jamescairns-2","asiermusic","s-midda","pablo-morata-arjol","eilo","kylewilsonuk","thetruetwadeandrey_aurora","deepout-1","tinchy","austinjared","vtrh"];

var labelArray4 = ["deejayblond","christianzah","gilley","seanchw","artashes-1","ivan-borges-3","benjamin-thomann","nesakysiu10","lefteriulian","tomakdj","younggirlparty","angelldee","abr0","nicola-wilde","coladaalex","chris-bryan","hannahhannahlee","dauria-magenta","freitraum","jamessheftal","charliecraigdj","daan-schuurman","westoncooper","andrea-di-prinzio","rahel-grosskopf","ana-bogatinovska","royalgemini","incept1","ct_p1","mitchyk69","blishh","fame-vsk","olel","m-arcane","kurosound","dynamicrockers","tianvienna","eddykeith","karperofficial","shatalov","fishvox","pmx-soundz","martinmatias-mma","intrigan","yurikeduardo","bruna-francine-moreira","danny-thomas-303","himbrecht","matomic","pixis","squirrel-zh","djlexem","catch22uk","hasanjafree","danny-ramsey-5","sergiomarrero","teddietaylor","hubble-rec","kase0","armystrial-techno","lucascarrilho","lukealike","maier-tudor","hashim-bin-shahbaz","dillanstarr","richardcolombia","instruments-of-flight","alannieves","aidan-mcglynn","jaynicer","small-ewok","cans-1","dave_neu","mark-alow","zajga","adrianodogninidj","dutchhousefucker","waterbear","iejones","djmagpieczech","rupertj","moldenberger","jedisadj","joaquinbarrandeguyok","dannyarck","kandinsky","menebeats","danny-kolk","bennoloudbensen","djpiun","d-jinks","edimar","edermagno","kokojak","lisa-rose","shitl3r","thomaspluesch","jamesmne","flipmatic","lax45","zim70","wndlrs","bbedzyk","quitequiet","iamtriibze","fabian-77","eric-beasley-3","kreolstaya","maxence-quoinchon","emlarochelle","raymond-gold","rexe_ck","soullisp","lewisousby","nelsooon","samsara_teahouse","marvin-quenis","kevin-domanski","dj-ttrain","sandrinesbh","stefano-viotti","stefano-rossetti-7","blok-galiguh","aziz-toumy","semplex","orient8","paddybagel","electrojaeger","apollonioasmat","ttgreg","keego-2","georg-monka","dimazhitkov","groundidmusic","djpupele","sergiokortez","kritzkom","yebishu","krunoslav-barberi","fattbeatz","vetomir","unicreto","ghettoserver","ashcampbellrens","kristianheikkila","polsteam-beluga","sebastiano-fibra","lukasz-falus","solidstate101","jose-miguel-gonzalez-the-fehc","foralex","beelincoln","cicio","shane1988","sebastiandelcastillo","cyantifik","justinka","designerflash","alex-csordas","t_a_l_a_r","kadir-erdogan","indign0","haim-rosenhaft","iamroa1"];

var namesArray = everdomArray4;

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
