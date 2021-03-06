'use strict';
var clientID = "18d15fe4c3e922a31e73e764c583d81d";
//var secret = "8b655107a555887ebd64f044cd552dd7";
var maxtracks = 200;
var maxfavs = 200;
var timeWait = 10000;
var user = "";
var maxMonths = 3;
var token;
var white = [];
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
    console.log("User: " + user);

    function init() {
        $("#getfw").click(function() {
            getFW();
        });
        $("#login").click(function() {
            login();
        });
        $("#getfwnames").click(function() {
            getfwnames();
        });
        $("#followUsers").click(function() {
            getNames();
            //fwError();
        });
        $("#checkfw").click(function() {
            checkfws();
        });
        $(document.body).on('click', '.dropdown-menu li', function(event) {
            var $target = $(event.currentTarget);
            $target.closest('.btn-group')
                .find('[data-bind="label"]').text($target.text())
                .end()
                .children('.dropdown-toggle').dropdown('toggle');
            console.log($target.text());
            if ($target.text() === "everdom") {
                table = "urls_everdom";
                user = "everdom";
            } else {
                table = "urls";
                user = "label";
            }
            var linkObj = {
                table: table,

            };
            $.ajax({
                type: "GET",
                url: './php/getlast.php',
                data: linkObj,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function(response) {
                    var dateobj = new Date(response);
                    var year = dateobj.getFullYear();
                    var month = ("0" + (dateobj.getMonth() + 1)).slice(-2);
                    var date = ("0" + dateobj.getDate()).slice(-2);
                    var hours = ("0" + dateobj.getHours()).slice(-2);
                    var minutes = ("0" + dateobj.getMinutes()).slice(-2);
                    console.log(date + "/" + month + "/" + year + " - " + hours + ":" + minutes);
                    $("#lastfollowed").text("Last Followed by " + user + " was on " + date + "/" + month + "/" + year + " - " + hours + ":" + minutes);
                },
                error: function(er) {
                    console.log("error:" + er);
                }
            });
            return false;
        });

        SC.initialize({
            client_id: clientID,
            redirect_uri: 'http://192.168.2.4:8080/sc-callback.html'
        });
    }
    init();

    function save2DB(links, followers_count, followings_count, tracks_count, uniqueid) {
        var linkObj = {
            link: links,
            followers: followers_count,
            followings: followings_count,
            tracks: tracks_count,
            table: table,
            uniqueid: uniqueid
        };
        $.ajax({
            type: "GET",
            url: './php/savetodb.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function() {
                //console.log(response);
            },
            error: function(er) {
                console.log("error: " + er);
            }
        });
    }

    function getNames() {
        if (user !== "") {
            var resultArray = [];
            var linkObj = {
                table: table
            };
            $.ajax({
                type: "GET",
                url: './php/getnames.php',
                data: linkObj,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function(response) {
                    resultArray = response.split(",");
                    if (resultArray !== 0) {
                        var finalArray = [];
                        for (var i = 0; i < resultArray.length; i++) {
                            updateName(resultArray[i]);
                            if (resultArray[i] !== '') {
                                finalArray.push(resultArray[i]);
                            }
                        }
                        console.log(finalArray);
                        followUsers(finalArray);
                        //checkfw(finalArray);
                    }
                },
                error: function(er) {
                    console.log("error: " + er);
                }
            });
        } else {
            alert("choose user");
        }
    }

    function getNames2unfollow() {
        if (user !== "") {
            var resultArray = [];
            var linkObj = {
                table: table
            };
            $.ajax({
                type: "GET",
                url: './php/getlast2unfollow.php',
                data: linkObj,
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                success: function(response) {
                    resultArray = response.split(",");
                    if (resultArray !== 0) {
                        //console.log(resultArray);
                        var finalArray = [];
                        for (var i = 0; i < resultArray.length; i++) {
                            if (resultArray[i] !== '') {
                                finalArray.push(resultArray[i]);
                            }
                        }
                        console.log(finalArray);
                        unfollowUsers(finalArray);
                    }
                },
                error: function(er) {
                    console.log("error: " + er);
                }
            });
        } else {
            alert("choose user");
        }
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
        };
        $.ajax({
            type: "GET",
            url: './php/updatenames.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function() {
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
            table: table
        };
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
                console.log("error: " + er);
            }
        });
    }

    function deleteList(list, state) {
        if (user !== "") {
            console.info('///////////////////////');
            console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
            var blackList = [];
            console.log('• Deleting List');
            var j;
            for (j = 0; j < friendList.length; j++) {
                blackList.push(friendList[j]);
            }
            for (j = 0; j < fetchArray.length; j++) {
                blackList.push(fetchArray[j]);
            }
            for (j = 0; j < list.length; j++) {
                blackList.push(list[j]);
            }
            for (var i = 0; i < blackList.length; i++) {
                del(blackList[i]);
                if (i == blackList.length - 1) {
                    console.log('• Deleted blacklist names from DB');
                    console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
                    console.info('///////////////////////');
                    if (state === "new") {
                        eliminateDuplicates();
                    }
                }
            }
        } else {
            alert("choose user");
        }
    }

    function del(a) {
        var linkObj = {
            link: a,
            table: table
        };
        $.ajax({
            type: "GET",
            url: './php/deletelist.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function() {
                // console.log(response);
            },
            error: function(er) {
                console.log("error: " + er);
            }
        });
    };

    function getFW() {
        if (user !== "") {
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
            startGetUsers();
            console.log("Get tracks of the last: " + maxMonths + " months");
        } else {
            alert("choose user");
        }
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
        console.log("Getting tracks by: " + user);
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
    var testFavs = [];

    function getFavoriters(tracks, user) {
        console.log("Getting Favs");
        var tracksArray = [];
        var thisCounter = 0;
        var thisTotalFavs = 0;
        tracks.forEach(function(track) {
            console.log(new Date(track.created_at) > new Date(new Date().getTime() - (maxMonths * 30 * 24 * 60 * 60 * 1000)));
            if (new Date(track.created_at) > new Date(new Date().getTime() - (maxMonths * 30 * 24 * 60 * 60 * 1000))) {
                tracksArray.push(track.permalink_url);
            }
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
                    if (checkFav(fav.permalink, fav.followers_count, fav.followings_count, fav.track_count) === true) {
                        save2DB(fav.permalink, fav.followers_count, fav.followings_count, fav.track_count, fav.id);
                        var neFav = {
                            "permalink": fav.permalink,
                            "followers_count": fav.followers_count,
                            "followings_count": fav.followings_count,
                            "track_count": fav.track_count
                        };
                        testFavs.push(neFav);
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
        if (track_count < 3) {
            status = false;
        }
        if (track_count > 100 && followers_count / followings_count < 5) {
            status = false;
        }
        if (followings_count > 1990) {
            status = false;
        }
        if (followings_count === 0) {
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

    function login() {
        SC.connect().then(function(options) {
                console.log('success', options);
                token = options.oauth_token;
                SC.get('/me').then(function(data) {
                    console.log("id:" + data.id);
                });
            })
            .catch(function(op) {
                console.log('error', op);
            });
    }

    function followUsers(array2f) {
        console.log(array2f);
        console.info('///////////////////////');
        console.info('Following action');
        console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
        for (var i = 0; i < array2f.length; i++) {
            doFollow(array2f[i], "PUT");
            if (i === array2f.length - 1) {
                console.log('• Followed: ' + array2f.length);
                console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
                console.info('///////////////////////');
                getNames2unfollow();
            }
        }
    }

    function unfollowUsers(array2f) {
        //console.log(array2f);
        console.info('///////////////////////');
        console.info('Unollowing action');
        console.warn('Start proccess at ' + new Date().getHours() + ':' + new Date().getMinutes());
        for (var i = 0; i < array2f.length; i++) {
            doUnfollow(array2f[i], "PUT");
            if (i == array2f.length - 1) {
                console.log('• Unfollowed: ' + (array2f.length));
                console.warn('Proccess finish at ' + new Date().getHours() + ':' + new Date().getMinutes());
                console.info('///////////////////////');
            }
        }
    }

    function doFollow(id) {
        var url = 'https://api.soundcloud.com/me/followings/' + id + '?oauth_token=' + token;
        console.log(id);
        $.ajax({
            type: "PUT",
            url: url,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function(response) {
                console.log(response);
            },
            error: function(er) {
                console.log(er);
            }
        });
    }

    function doUnfollow(id) {
        var url = 'https://api.soundcloud.com/me/followings/' + id + '?oauth_token=' + token;
        console.log(id);
        $.ajax({
            type: "DELETE",
            url: url,
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

    function getfwnames() {
        if (user !== "") {
            var getFollowers = function(track) {
                return SC.get('/users/' + track.id + '/followers', {
                    limit: 200,
                    linked_partitioning: 1
                });
            };
            var listFW = function(data) {
                console.log(data.next_href);
                for (var i = 0; i < data.collection.length; i++) {
                    white.push(data.collection[i].permalink);
                }
                if (data.next_href !== null) {
                    pagination(data.next_href, "old");
                } else {
                    console.log(white.length);
                    console.log(white);
                    deleteList(white, "old");
                    white = [];
                }
            };
            var n;
            if (user === "everdom") {
                n = "everdom";
            } else if (user === "label") {
                n = "urbanaddict-rec";
            }
            SC.resolve('https://soundcloud.com/' + n).then(getFollowers).then(listFW);
        } else {
            alert("choose user");
        }
    }

    function checkfws() {
        var resultArray = [];
        var linkObj = {
            table: table
        };
        $.ajax({
            type: "GET",
            url: './php/getallnames.php',
            data: linkObj,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function(response) {
                resultArray = response.split(",");
                if (resultArray !== 0) {
                    console.log(resultArray[1]);
                    resultArray = ["1949"];
                    for (var i = 0; i < resultArray.length; i++) {
                        var url = 'https://api.soundcloud.com/users/' + resultArray[i] + '/?oauth_token=' + token;
                        checksingle(url);
                    }
                }
            },
            error: function(er) {
                console.log("error: " + er);
            }
        });
    }

    function checksingle(url) {
        $.ajax({
            type: "GET",
            url: url,
            header: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            success: function(response) {
                console.log(response.last_modified);
            },
            error: function(er) {
                console.log("error: " + er);
            }
        });
    }

    function pagination(url, state) {
        $.ajax({
            url: url,
            type: "GET",
            success: function(data) {
                console.log(data.next_href);
                for (var i = 0; i < data.collection.length; i++) {
                    white.push(data.collection[i].permalink);
                }
                if (data.next_href !== null) {
                    pagination(data.next_href);
                } else {
                    console.log(white.length);
                    console.log(white);
                    deleteList(white, state);
                    white = [];
                }
            }
        });
    }
});