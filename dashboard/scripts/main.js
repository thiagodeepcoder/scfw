var stepped = 0,
	chunks = 0,
	rows = 0;
var start, end;
var parser;
var pauseChecked = false;
var printStepChecked = false;
var linksArray = [];
var clientID = "18d15fe4c3e922a31e73e764c583d81d";
var secret = "8b655107a555887ebd64f044cd552dd7";
var maxtracks = 40;
var maxfavs = 200;
var timeWait = 12000;
var user = "everdom";

$(function() {
	console.info("Scripts Ready");

	var mainFavoriters = [];
	var usersArray = [];
	var timed;
	var counter = 0;
	var ended = false;
	var totalFav = 0;
	var baseurl = 'https://soundcloud.com/';
	var table = "urls";

	if (user === "everdom") {
		table = "urls_everdom";
	}

	function init() {

		$("#files").change(FChange);
		$("#btn").click(function() {
			getNames();
		});
		$("#deleteduplicates").click(function() {
			eliminateDuplicates();
		});

		$("#getfw").click(function() {
			getFW();
		});

		$("#deletelist").click(function() {
			deleteList();
		});

		$("#killpoor").click(function() {
			killPoor();
		});

		$("#gettotalnames").click(function() {
			gettotalnames();
		});
		$("#startfollowing").click(function() {
			startfollowing();
		});

		$("#removewhitelist").click(function() {
			removewhitelist();
		});

		$("#getfwnames").click(function() {
			getfwnames();
		});

		getfwnames

		SC.initialize({
			client_id: clientID,
			redirect_uri: 'http://localhost:8080/dashboard/sc-callback.html'
		});
	}
	init();

	function save2DB(links, followers_count, followings_count, tracks_count) {

		var linkObj = {
			link: links,
			followers: followers_count,
			followings: followings_count,
			tracks: tracks_count,
			table: table
		}
		$.ajax({
			type: "GET",
			url: './php/savetodb.php',
			data: linkObj,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},

			success: function(response) {
				//console.log(response);
			},
			error: function(er) {
				console.log("error");
			}
		});
	}

	function getNames() {
		var resultArray = [];
		var linkObj = {
			table: table
		}
		$.ajax({
			type: "GET",
			url: './php/getnames.php',
			data: linkObj,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},

			success: function(response) {
				resultArray = response.split(",");
				if (resultArray != 0) {
					console.log(resultArray);
					var finalArray = [];
					for (var i = 0; i < resultArray.length; i++) {
						updateName(resultArray[i]);
						if (resultArray[i] != '') {
							finalArray.push("'" + resultArray[i] + "'");
						}

					}
					$("#links").text(finalArray);
				}
			},
			error: function(er) {
				console.log("error");
			}
		});
	}

	function correctTable() {
		var correctNames = [];
		for (var i = 0; i < correctNames.length; i++) {
			updateName(correctNames[i]);
		}
	}

	function updateName(a) {
		var linkObj = {
			link: a,
			table: table
		}
		$.ajax({
			type: "GET",
			url: './php/updatenames.php',
			data: linkObj,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},

			success: function(response) {
				//console.log(response);

			},
			error: function(er) {
				console.log("error", er);
			}
		});
	}
	correctTable();

	function eliminateDuplicates() {
		console.info('///////////////////////');
		console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
		console.log('• Deleting Duplicates');
		var linkObj = {
			link: a,
			table: table
		}
		$.ajax({
			type: "GET",
			url: './php/deleteduplicates.php',
			data: linkObj,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},

			success: function(response) {
				console.log('• Deleted duplicates');
				console.log('• Total names remaining:' + response);
				console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
				console.info('///////////////////////');

			},
			error: function(er) {
				console.log("error");
			}
		});
	}

	function deleteList() {
		var d = new Date
		console.info('///////////////////////');
		console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
		var blackList = [];
		blackList = fetchArray;
		console.log('• Deleting List');
		for (var j = 0; j < friendList.length; j++) {
			blackList.push(friendList[j]);
		}
		for (var i = 0; i < blackList.length; i++) {
			del(blackList[i]);
			if (i = blackList.length - 1) {
				console.log('• Deleted blacklist names from DB');
				console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
				console.info('///////////////////////');
				eliminateDuplicates();
			}
		}

		function del(a) {
			var linkObj = {
				link: a,
				table: table
			}
			$.ajax({
				type: "GET",
				url: './php/deletelist.php',
				data: linkObj,
				header: {
					'Content-Type': 'application/x-www-form-urlencoded'
				},

				success: function(response) {
					// console.log(response);
				},
				error: function(er) {
					console.log("error");
				}
			});
		}
	}

	function getFW() {
		timed = setInterval(startGetUsers, timeWait);
		var sorted_arr = fetchArray.sort();
		for (var i = 0; i < fetchArray.length; i++) {
			if (sorted_arr[i + 1] != sorted_arr[i]) {
				usersArray.push(sorted_arr[i]);
			} else {
				console.log("duplicate: " + sorted_arr[i]);
			}
		}
		console.log("Starting search in " + usersArray.length + " Users of " + fetchArray.length + " entries");
		//startGetUsers();
	}

	function startGetUsers() {


		if (counter == usersArray.length) {
			ended = true;
			console.log("List end");
			console.log("Total Fav: " + totalFav);
			clearInterval(timed);
		} else {
			console.log('/////////////////////');
			console.log('Start Cycle #' + counter);
			console.log('/////////////////////');
			getTracksByUser(baseurl + usersArray[counter]);
			counter++;
		}
	}

	function getTracksByUser(user) {
		console.log("Getting tracks by: " + user)
		var getTracks = function(track) {

			if (track.id) {
				return SC.get('/users/' + track.id + '/tracks', {
					limit: maxtracks
				});
			} else {
				startGetUsers();
			}
		};

		var listTracks = function(tracks) {
			if (tracks.length > 0) {
				getFavoriters(tracks, user);
			} else {
				startGetUsers();
			}
		};
		SC.resolve(user).then(getTracks).then(listTracks);
	}

	function getFavoriters(tracks, user) {
		console.log("Getting Favs")
		var tracksArray = [];
		var thisCounter = 0;
		var thisTotalFavs = 0;
		tracks.forEach(function(track) {
			tracksArray.push(track.permalink_url);
		});
		var getFav = function(track) {
			return SC.get('/tracks/' + track.id + '/favoriters', {
				limit: maxfavs
			});
		};
		var len = tracksArray.length;
		if (len > 10) {
			//len = 1;
		}
		var listFav = function(favs) {
			if (favs.length > 0) {
				favs.forEach(function(fav, index) {
					//console.log(fav.permalink);
					if (checkFav(fav.permalink, fav.followers_count, fav.followings_count, fav.track_count) == true) {
						save2DB(fav.permalink, fav.followers_count, fav.followings_count, fav.track_count);
						thisTotalFavs++;
					} else {
						//console.log("Descartado: " + fav.permalink + " FW: " + fav.followers_count + " FWI: " + fav.followings_count + " tracks: " + fav.track_count);
					}

					if (index === favs.length - 1) {
						thisCounter++;
						if (thisCounter === len) {
							console.log('saved ' + thisTotalFavs + ' favs by ' + user);
							mainFavoriters.push({
								user: user,
								favs: thisTotalFavs
							});
							totalFav += thisTotalFavs;
							if (!ended) {
								console.log('Going for another CYCLE');
								console.log('/////////////////////');
								//startGetUsers();
							}
						}
					}
				});
			} else {
				thisCounter++;
				if (thisCounter === len) {
					console.log('saved favs by ' + user);
					if (!ended) {
						startGetUsers();
					} else {
						console("List end");
						console("Total Fav: " + totalFav);
						console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
						console.log('/////////////////////');
					}
				}
			}
		};

		for (var i = 0; i < len; i++) {
			SC.resolve(tracksArray[i]).then(getFav).then(listFav);
		}
	}

	function checkFav(permalink, followers_count, followings_count, track_count) {
		var status = true;

		if (track_count == 0) {
			status = false;
		}
		if (track_count > 100 && followers_count / followings_count < 5) {
			status = false;
		}
		if (followings_count > 1990) {
			status = false;
		}
		if (followings_count == 0) {
			status = false;
		}
		if (followers_count / followings_count > 5) {
			status = false;
		}
		if (followers_count / followings_count < 0.1) {
			status = false;
		}
		if (followings_count < 20) {
			status = false;
		}
		if (followers_count < 20) {
			status = false;
		}
		if (permalink.indexOf('record') > -1) {
			status = false;
		}
		return status;
	}

	function killPoor() {
		console.info('///////////////////////');
		console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
		console.log('Kill the Poor');
		var num = 100;
		var linkObj = {
			link: num
		}
		$.ajax({
			type: "GET",
			url: './php/killpoor.php',
			data: linkObj,
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: function(response) {
				console.log(response);
			},
			error: function(er) {
				console.log("error");
			}
		});
	}

	function gettotalnames() {
		$.ajax({
			type: "GET",
			url: './php/getotalnames.php',
			header: {
				'Content-Type': 'application/x-www-form-urlencoded'
			},
			success: function(response) {
				console.log("Total names in data base: " + response);
			},
			error: function(er) {
				console.log("error");
			}
		});
	}

	function startfollowing() {

		//SC.put('/me/followings/2023471');
		//199066755

		SC.connect().then(function(options) {
				console.log('success', options);

				SC.put('users/199066755/followings/2023471');

				/* $.getJSON(url, function(response) {
				     console.log(response);
				 });*/

			})
			.catch(function(op) {
				console.log('error', op);
			})
	}

	function getfwnames() {
		var getFollowers = function(track) {
			return SC.get('/users/' + track.id + '/followers', {
				limit: 200
			});
		};
		var listFW = function(data) {
			var white = [];
			for (var i = 0; i < data.collection.length; i++) {
				white.push(data.collection[i].permalink);
			};
			console.log(white);
			$("#links").text(JSON.stringify(white));
		}
		SC.resolve('https://soundcloud.com/urbanaddict-rec/').then(getFollowers).then(listFW);
	}

	function removewhitelist() {
		var whitelistEverdom = ["3nginemusic","jack-blount-1","richipdj","ingridblancafort","belier_music","oskar85","80pleierkasten80","williamknarz","felipe-orellana-67","bucco-beat","187spencer","emanuele-corsanico","loma_music","a-flo","wankala","patrickh217","nicola-nolli","v-ictr","ablywinter","max_tolmachev","gobeatz","taha-belgasmi","jensakkermans","biago","user-483895746","juan-arcilla","lightsouttoronto","9thousand9","pablojauregui","320kbps","in-deep-501341522","kidsblasted","2xml","brunomello","phillip-schmittke","paul-smith-128","anton-g-2","vedrankomm","imox","lucasgibelato","drumkraftmusik","daisuke-matsukura-805915207","pettevat","remon_010","simonetagliabue18","victor-coyotech","alex-kritikos-5","abstractsyence","guidogoldschwartz","disco-visionary","firris","wedontneedmuch","a-y-d-marinac","alejandrocuestas","iamkoska","abrasiv","effielimccloskey","dj_prochecked","djagfo-5","peppou","45-k0","shinyavi","11clouds","aabramov","gertude-lemke","bennymaximalakamaxbear","massud-matin","transmog","mousikemke","0btx0","6yay","wagner-jr","labdii-lartist","martin-od4o4-moore","kinetique","rhoxo","abiboysilence","crazyturkusa","international-clan","vertical-sofa","daniiells","unclesand","succubus-helna-v2-0","martaqq","aargenal","everdom","a1meusick","neolibe","maximilian-spitza","walter95","5ambo-1","leonardo-alfonso","thelimbiicsystem","trazontecib","marcelotosetto","jmrisagns","guanlong","shelo-underground","rosmur","absolud_joy3","groovesynaptics"];

		var everdomArray1 = ['deejayblond','christianzah','wedontneedmuch','gilley','seanchw','artashes-1','ivan-borges-3','benjamin-thomann','nesakysiu10','lefteriulian','tomakdj','younggirlparty','marcelotosetto','angelldee','abr0','nicola-wilde','coladaalex','chris-bryan','hannahhannahlee','dauria-magenta','freitraum','jamessheftal','charliecraigdj','daan-schuurman','westoncooper','andrea-di-prinzio','rahel-grosskopf','ana-bogatinovska','royalgemini','incept1','ct_p1','mitchyk69','blishh','fame-vsk','olel','m-arcane','kurosound','dynamicrockers','tianvienna','eddykeith','karperofficial','shatalov','fishvox','pmx-soundz','martinmatias-mma','intrigan','yurikeduardo','bruna-francine-moreira','danny-thomas-303','himbrecht','matomic','pixis','squirrel-zh','djlexem','paul-smith-128','catch22uk','hasanjafree','danny-ramsey-5','belier_music','sergiomarrero','teddietaylor','hubble-rec','kase0','armystrial-techno','lucascarrilho','lukealike','jmrisagns','maier-tudor','max_tolmachev','hashim-bin-shahbaz','dillanstarr','richardcolombia','instruments-of-flight','alannieves','aidan-mcglynn','jaynicer','small-ewok','cans-1','dave_neu','mark-alow','zajga','adrianodogninidj','dutchhousefucker','waterbear','iejones','djmagpieczech','rupertj','moldenberger','williamknarz','jedisadj','joaquinbarrandeguyok','dannyarck','kandinsky','menebeats','danny-kolk','bennoloudbensen','juan-arcilla','djpiun','d-jinks','edimar','edermagno','kokojak','lisa-rose','shitl3r','thomaspluesch','jamesmne','flipmatic','lax45','zim70','wndlrs','bbedzyk','quitequiet','iamtriibze','fabian-77','eric-beasley-3','kreolstaya','maxence-quoinchon','emlarochelle','raymond-gold','rexe_ck','soullisp','lewisousby','nelsooon','succubus-helna-v2-0','samsara_teahouse','marvin-quenis','kevin-domanski','dj-ttrain','sandrinesbh','dj_prochecked','stefano-viotti','trazontecib','stefano-rossetti-7','blok-galiguh','aziz-toumy','semplex','orient8','paddybagel','electrojaeger','apollonioasmat','ttgreg','keego-2','georg-monka','dimazhitkov','loma_music','groundidmusic','djpupele','sergiokortez','kritzkom','yebishu','krunoslav-barberi','fattbeatz','vetomir','unicreto','ghettoserver','ashcampbellrens','kidsblasted','kristianheikkila','polsteam-beluga','sebastiano-fibra','lukasz-falus','solidstate101','ingridblancafort','jose-miguel-gonzalez-the-fehc','foralex','beelincoln','user-483895746','cicio','shane1988','sebastiandelcastillo','cyantifik','justinka','designerflash','alex-csordas','t_a_l_a_r','richipdj','kadir-erdogan','indign0','haim-rosenhaft','iamroa1'];
		console.log(everdomArray1.length);
		for (var j = 0; j < whitelistEverdom.length; j++) {
			for (var i = everdomArray1.length - 1; i >= 0; i--) {
				if (everdomArray1[i] === whitelistEverdom[j]) {
					console.log(everdomArray1[i]);
					everdomArray1.splice(i, 1);
					// break;       //<-- Uncomment  if only the first term has to be removed
				}
			}
		};
		console.log(everdomArray1.length);
		$("#links").text(JSON.stringify(everdomArray1));
		//alert(JSON.stringify(everdomArray1));

	}
})
