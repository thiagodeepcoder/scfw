var macro;
var loopCount = 200;
var b = "\n";
var path;

var namesArray = [];
function resetCode() {
    macro = "CODE:";
    macro += "SET !ERRORIGNORE YES" + b;
    macro += "VERSION BUILD=8820413 RECORDER=FX" + b;
}

for (var i = 0; i < loopCount; i++) {
    resetCode();
    macro += 'URL GOTO=javascript:window.scrollBy(0,2000000)' + b;
    macro += "TAG POS=" + i + " TYPE=A ATTR=CLASS:userAvatarBadge__usernameLink EXTRACT=HREF" + b;
    macro += "SAVEAS TYPE=EXTRACT FOLDER=/Users/mgs/iMacros/Macros/JS/convertCSV FILE=" + path + ".csv" + b;
    iimDisplay(i);
    iimPlay(macro);
}
