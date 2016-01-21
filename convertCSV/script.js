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
var maxtracks = 20;
var maxfavs = 50;
$(function() {
    console.warn("READY");
    $("#files").change(FChange);
    $("#btn").click(function() {
        getNames();
    });
    $("#del").click(function() {
        eliminateDuplicates();
    });

    $("#get").click(function() {
        getFW();
    });

    $("#deleteList").click(function() {
        deleteList();
    });

    SC.initialize({
        client_id: clientID
    });

    function FChange() {
        var files = $('#files')[0].files;
        console.log(files);
        var config = buildConfig();
        if (files.length > 0) {
            if (!$('#stream').prop('checked') && !$('#chunk').prop('checked')) {
                for (var i = 0; i < files.length; i++) {
                    if (files[i].size > 1024 * 1024 * 10) {
                        alert("A file you've selected is larger than 10 MB; please choose to stream or chunk the input to prevent the browser from crashing.");
                        return;
                    }
                }
            }
            //start = performance.now();
            $('#files').parse({
                config: config,
                before: function(file, inputElem) {
                    console.log("Parsing file:", file);
                },
                complete: function() {
                    console.log("Done with all files.");
                }
            });
        } else {
            start = performance.now();
            var results = Papa.parse(txt, config);
            console.log("Synchronous parse results:", results);
        }
    }

    function buildConfig() {
        return {
            delimiter: $('#delimiter').val(),
            newline: getLineEnding(),
            header: $('#header').prop('checked'),
            dynamicTyping: $('#dynamicTyping').prop('checked'),
            preview: parseInt($('#preview').val() || 0),
            step: $('#stream').prop('checked') ? stepFn : undefined,
            encoding: $('#encoding').val(),
            worker: $('#worker').prop('checked'),
            comments: $('#comments').val(),
            complete: completeFn,
            error: errorFn,
            download: $('#download').prop('checked'),
            fastMode: $('#fastmode').prop('checked'),
            skipEmptyLines: $('#skipEmptyLines').prop('checked'),
            chunk: $('#chunk').prop('checked') ? chunkFn : undefined,
            beforeFirstChunk: undefined,
        };

        function getLineEnding() {
            if ($('#newline-n').is(':checked'))
                return "\n";
            else if ($('#newline-r').is(':checked'))
                return "\r";
            else if ($('#newline-rn').is(':checked'))
                return "\r\n";
            else
                return "";
        }
    }

    function stepFn(results, parserHandle) {
        stepped++;
        rows += results.data.length;

        parser = parserHandle;

        if (pauseChecked) {
            console.log(results, results.data[0]);
            parserHandle.pause();
            return;
        }

        if (printStepChecked)
            console.log(results, results.data[0]);
    }

    function chunkFn(results, streamer, file) {
        if (!results)
            return;
        chunks++;
        rows += results.data.length;

        parser = streamer;

        if (printStepChecked)
            console.log("Chunk data:", results.data.length, results);

        if (pauseChecked) {
            console.log("Pausing; " + results.data.length + " rows in chunk; file:", file);
            streamer.pause();
            return;
        }
    }

    function errorFn(error, file) {
        console.log("ERROR:", error, file);
    }

    function completeFn() {
        end = performance.now();
        if (!$('#stream').prop('checked') && !$('#chunk').prop('checked') && arguments[0] && arguments[0].data)
            rows = arguments[0].data.length;

        console.log("Finished input (async). Time:", end - start, arguments);
        console.log("Rows:", rows, "Stepped:", stepped, "Chunks:", chunks);
        for (var i = 0; i < rows; i++) {
            var line = arguments[0].data[i][0];
            if (line != "") {
                linksArray.push(line);
            }
        }
        sanitize();
    }

    function sanitize() {
        var cleanedLinks = [];
        var dirty;

        for (var i = 0; i < linksArray.length; i++) {
            dirty = linksArray[i];
            cleaned = dirty.split("/")[3];
            cleanedLinks.push(cleaned);
            save2DB(cleaned, null, null);

        }

    }

    function save2DB(links, followers_count, followings_count,tracks_count) {

        var linkObj = {
                link: links,
                followers: followers_count,
                followings: followings_count,
                tracks: tracks_count
            }
            //console.log(linkObj);
        $.ajax({
            type: "GET",
            url: './savetodb.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response) { //check response: it's always good to check server output when developing...
                //console.log(response);

            },
            error: function(er) {
                console.log("error");
            }
        });
    }

    function getNames() {
        var resultArray = [];
        $.ajax({
            type: "GET",
            url: './getnames.php',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response) { //check response: it's always good to check server output when developing...
                resultArray = response.split(",");
                if (resultArray != 0) {
                    console.log(resultArray);
                    for (var i = 0; i < resultArray.length; i++) {
                        updateName(resultArray[i]);
                    }
                    $("#links").text(resultArray);
                }

            },
            error: function(er) {
                console.log("error");
            }
        });
    }

    function updateName(a) {
        var linkObj = {
            link: a
        }
        $.ajax({
            type: "GET",
            url: './updatenames.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response) { //check response: it's always good to check server output when developing...
                console.log(response);

            },
            error: function(er) {
                console.log("error");
            }
        });
    }

    function eliminateDuplicates() {
        console.log('delete');
        $.ajax({
            type: "GET",
            url: './deleteDp.php',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response) { //check response: it's always good to check server output when developing...
                console.log(response);

            },
            error: function(er) {
                console.log("error");
            }
        });
    }

    var fetchArray = ['kootz-music', 'samani', 'moobrecords', 'bridge-records', 'mut-music', 'whoyostro', 'whoyostro-ltd', 'north-dub', 'high-pressure-music', 'lethal-script-label', 'minim-allrec', 'pickselrecords', 'datenbits', 'lethal-dose-recordings', 'baile-musik', 'kradrecords', 'draft-ltd', 'draftlabel', 'natural-beat-recordings', 'p-u-n-c-h-i-s', 'harvibal-1', 'tilth-music', 'jelly-beast-recordings', 'psicodelica-1', 'lightsouttoronto-1', 'malicioussmile', 'yorubagrooves', 'innocentmusic', 'highgrade-records', 'dzbrecords', 'blabla-music', 'beonerecords', 'archipel', 'act-natural-records', 'berberis', 'wavetech-limited', 'waveimpactlabel', 'vitalizemusic-1', 'tupiar', 'thanqmusic', 'street-habitat', 'showreel_records', 'rewire-musik', 'rawrootslabel', 'rats_lab', 'onoffrecording', 'not-equal-records', 'new-violence-records', 'mindblowmusic', 'massmusic-222', 'louderground', 'krkr-records', 'ker-recordings', 'ipsumrecords', 'handcrafted-label', 'habla-music', 'hablamusiclimited', 'dustcity-music-digital', 'deep-department', 'cervidaerecordings', 'catslovebass', 'catblackrecords', 'bluecuberecords', 'blue-orb-records', 'atum-record', 'amazing-lab', '1994-music', 'verbreiten-records', 'tympanic-rec', 'tres14music-1', 'tip-tap-records', 'tempurarecords', 'serkal-music', 'saywhatrecords', 'sakadat', 'reduced-varied', 'rawlevelrecords', 'pild-records', 'park-recordings', 'osmosisaudio', 'moral-fiber-music', 'moonshake-1', 'marecords', 'metroline-limited-retrome', 'medicine-musique', 'malicious-smile-ltd', 'leone-music', 'kosmophono', 'konzentrischmusic', 'kanja_records', 'hustler-muzik', 'hopeless-label', 'hardcutz-records', 'fierceanimals', 'earlymorningmusic_listen', 'dushe_label', 'dubgestion', 'dub-sphere', 'dtdrecords', 'deepsenserecords', 'classic91', 'bumprecords', 'arupamusic', 'alboratory', 'twoowls-rec', 'moanrecordings', 'little-helpers', 'deeperfect-records', 'deeptechrecords', '324records', 'tagged-music', 'darkfacerecordings', 'monday-morning-records', 'hubble-rec', 'spades-label', 'invaderecords', 'mischkonsum-records', 'boutade-musique', 'perception-dub', 'memoriarecordings', 'plunk-rec', 'volupsorecords', 'hdr-limit', 'happy-days-records', 'amoebalabel', 'diagonalmusic', 'compatible', 'strictly-sub', 'koterecords', 'vagabond-recordings', 'mriya_records', '0dbrecordings', 'minordub', 'moodrecords', 'tzinah-records', 'anturalabelgroup', 'mbfltd', 'feversoundrecords', 'funkn-deep', 'groundidmusic', 'somatik-sounds', 'the-hole-music', 'alexconnaisseurrecordings', 'total-black-records', 'akbalmusic', 'roundqubemusik', 'unreleased', 'elarumrecords', 'baikonurdigital', 'unscene-records', 'blackdublabel', 'zwillingrecords', 'th9rec', 'oddball-music', 'expmentalrecords', 'cyclic-agency', 'bonobo-concept', 'citricarecords', 'origami-musik', 'basswalk-records', 'limitedrecords', 'soundrevolutionrecords', 'in-depthmusic', 'saintanddont', 'sinapsis-records', 'authentisch-musik', 'maniacs_music', 'save-you-records', 'deardeerrecords', 'catenaccio-records', 'phobosrecords', 'kittikun', 'arteriamusiclabel', 'egothermia', 'levelonerecords', 'audio_elite_records', 'limitedrec', 'slaaprecords', 'cowshed-records', 'oxytech-music-records', 'local29records', 'infinity-label', 'safelabel', 'vision-room-recordings', 'mushroom-smile-records', 'fuselondon', 'heisenbergspb', 'zeitlos-music', 'sinapsis-records-cuts', 'nuidealsmusic', 'kinamusic', 'hoxton-records', 'pornographicrecordings', 'complete-records', 'creammusic-records', 'dash-deep-records', 'yuliarec', 'onesenserecords', '4plaerecords', 'uponyourecords', 'intec-digital', 'petprojectrecordings', 'listen_react', 'draftcast', 'chapeaumusic', 'freundsein', 'jumpstereorecords', 'banm-records', 'dcsmofficial'];
    //var fetchArray = ['draftcast','dcsmofficial'];
    var friendList = [
        'alejandrocuestas', 'rhoxo', 'vladimirmarinkovic', 'maertz', 'guanlong', 'nouwahmusic', 'mrafterparty', 'gaga-techno', 'carloruetz', 'luixarkl', 'alex-fuente', 'tripio-x', '118bpmrules', 'vloonm', 'dubquest1', 'shelo-underground', 'dejvid_dejvid', 'lightsouttoronto', 'drugayamuzica', 'emfdo', 'overshift', 'cesar-martinez', 'fulvioruffert', 'sonartek', 'nepemora', 'martine_l', 'hertzman', 'chris-blum', 'grotesku', 'nicola-nolli', 'gaetano-c', 'vedrankomm', 'dj-jose-ferrando', 'variondmartz', 'miss_soulfly', 'mariano_as', 'gregorioserasin', 'guillermo-montes-1', 'e-t-h-italy', 'feht', 'danielmeistermusic', 'mannafromsky', 'v-ictr', 'albertotorres', 'massimo-pozzi1989', 'lohanpraw', 'hernanbass', 'flaviograms', 'marc-baker-1', 'sibaritas', 'alexanderboiadjiev', 'peppou', 'domerooftop-just-mix', 'andrea_landi', 'cicuendezmusic', 'foster-blum-1', 'fosterandblum', 'sander-ellerman', 'danilabb', 'massud-matin', 'markushornmusic', 'ian-tribb', 'nouwahmusic', 'mrdeka', 'jemil-deep', 'anton-g-2', 'everdom', 'josu-freire-dj', 'domenicoraffone', 'harvibal', 'djsloo'
    ];

    function deleteList() {
        console.log('Delete List');
        var blackList = [];
        blackList = fetchArray;
        for (var j = 0; j < friendList.length; j++) {
            blackList.push(friendList[j]);
        }
        for (var i = 0; i < blackList.length; i++) {
            del(blackList[i]);
        }

        function del(a) {
            var linkObj = {
                link: a
            }
            $.ajax({
                type: "GET",
                url: './deleteList.php',
                data: linkObj,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },

                success: function(response) { //check response: it's always good to check server output when developing...
                    console.log(response);
                },
                error: function(er) {
                    console.log("error");
                }
            });
        }
    }

    var mainFavoriters = [];
    var usersArray = [];

    var timed;
    var counter = 0;
    var ended = false;

    var totalFav = 0;

    function getFW() {
        //var userURL = 'https://soundcloud.com/deeptechrecords';
        //var userURL = 'https://soundcloud.com/monday-morning-records';
        timed = setInterval(startGetUsers, 10000);
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

        var baseurl = 'https://soundcloud.com/';
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
            console.warn("favs: " + favs.length);
            thisTotalFavs += favs.length;
            if (favs.length > 0) {
                favs.forEach(function(fav, index) {
                    //console.log(fav.permalink);
                    //mainFavoriters.push(fav.permalink);
                    save2DB(fav.permalink, fav.followers_count, fav.followings_count, fav.track_count   );
                    if (index === favs.length - 1) {
                        thisCounter++;
                        // if (thisCounter === tracksArray.length) {
                        if (thisCounter === len) {
                            console.log('saved favs by ' + user);
                            mainFavoriters.push({
                                user: user,
                                favs: thisTotalFavs
                            });
                            //console.log(mainFavoriters[mainFavoriters.length-1]);
                            totalFav += thisTotalFavs;
                            if (!ended) {
                                console.log('Going for another CYCLE');
                                //startGetUsers();
                            }
                        }
                    }
                });
            } else {
                thisCounter++;
                // if (thisCounter === tracksArray.length) {
                if (thisCounter === len) {
                    console.log('saved favs by ' + user);
                    if (!ended) {
                        startGetUsers();
                    } else {
                        console("List end");
                        console("Total Fav: " + totalFav);
                    }
                }
            }

        };

        //for (var i = 0; i < tracksArray.length; i++) {
        for (var i = 0; i < len; i++) {
            SC.resolve(tracksArray[i]).then(getFav).then(listFav);
        }
    }

    function killPoor() {
        console.log('Kill Poor');
        $.ajax({
            type: "GET",
            url: './killPoor.php',
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },

            success: function(response) { //check response: it's always good to check server output when developing...
                console.log(response);

            },
            error: function(er) {
                console.log("error");
            }
        });
    }
})
