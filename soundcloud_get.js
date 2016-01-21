var macro;
var loopCount = 2000;
var b = "\n";
var path;

var artist = 'https://soundcloud.com/richiehawtin/followers';

function resetCode() {
    macro = "CODE:";
    macro += "SET !ERRORIGNORE YES" + b;
    macro += "VERSION BUILD=8820413 RECORDER=FX" + b;
}

function geturl() {
    resetCode();
    macro += 'SET !EXTRACT {{!URLCURRENT}}';
    iimPlay(macro);
    var u = iimGetLastExtract();
    path = u.split("/")[3];
}
geturl();
for (var i = 0; i < loopCount; i++) {
    resetCode();
    macro += 'URL GOTO=javascript:window.scrollBy(0,2000000)' + b;
    macro += "TAG POS=" + i + " TYPE=A ATTR=CLASS:userAvatarBadge__usernameLink EXTRACT=HREF" + b;
    macro += "SAVEAS TYPE=EXTRACT FOLDER=/Users/mgs/iMacros/Macros/JS/convertCSV FILE=" + path + ".csv" + b;
    iimDisplay(i);
    iimPlay(macro);
}
