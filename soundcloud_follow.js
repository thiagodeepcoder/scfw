var macro;
var loopCount = 200;
var b = "\n";
var path;

var namesArray = ['0-88d', '0-hermes-0', '0000057823cchaha00', '003db', '00ayah00', '00o0', '010997', '0112', '02rysmith', '03-967393688', '0331al-t', '0654', '07connor07', '07k9a1ci51z3', '08daviesj', '08salavelle', '094613216198450361', '0969796981', '0btx0', '0dsatnz0cpka', '0fs9p9vvovek', '0kfiil', '0lcuhu8bnew0', '0x7f', '0xamusic', '1-0-0', '1-9-8-9', '1000archangels', '1001101ihai', '1010tenten', '109117116101032109101', '10chains', '11011988', '116a', '11clouds', '1200a', '120881sb', '122653312', '122bpm', '123456542', '123dinamix', '123spk', '1254897', '12inchstories', '12tones', '133111', '13th-hour-a-m', '14117777', '14181', '161290', '1623wolf', '1642limited', '16bitthe8', '17-bad-girl17', '17branches', '1820hz', '187spencer', '197222', '19801211', '1983mp', '1988amr', '19962402', '19rayroman87', '19tomdavids94', '1ddual', '1deux', '1kaceandkidd', '1kingdavis', '1kp1mdlsmsql', '1m-n0t-a-dj', '1missing_2in_3action', '1mx', '1riddimofficial', '1s11', '1stninjapanda', '1xtra-by-nightparty', '2-face', '2-shea', '2014-edm-audio-mastering', '2014-edm-mixing-and-mastering', '2015-edm-mixing-and-mastering', '2016-edm-mixing-mastering', '20onemusic', '2103m', '21twone', '22769', '22mint25', '23-polo', '23f', '24kk', '25625262', '25o', '27-announce', '293249500', '2aruusmyw9kh', '2ble', '2burself', '2celebratemusic', '2dabsfortheroad', '2dope4youbro', '2homies', '2k-music-producers', '2lanes', '2nnngen10', '2pepro', '2shaydes', '2v8d4fjlvtbj', '2xml', '3-knuckles-deep', '3078', '31337records', '314-pi', '3150', '320kbps', '33051810710603699', '33333333333333', '33motions', '33reveries', '37424567f', '3adamt', '3alehb3snixl', '3aref', '3djoy', '3f1yis4ptdor', '3inaural', '3li_h', '3mal6ttdtvi1', '3nginemusic', '3puten', '3ronski', '3s-p', '3v66itys9ztr', '3y2', '3yre', '4-4-deep-culture', '40in', '41udohusa', '44brett44', '45-k0', '4565664565', '456forestfire', '4cid4tt4k', '4eggz', '4exoff', '4j2a0y', '4ngus-channel', '4t50c', '4x3l', '4xoakfpsquws', '4yo4u', '4_1000', '5364827', '54162544', '5656455554', '5676546', '5ambo-1', '5awg7xtaxgbs', '5floors', '5howtimemusic', '5nowy', '5u9rvjxt9oxi', '666666666666666666666666666', '666_connection', '6701', '694344margarita', '69walter69', '6abby', '6channels', '6kd2p3grd3ih', '6nm2go8n6p36', '6o6o', '6xsofpfwuls3', '7250ww', '7bassline', '7blucgvsqite', '7evnup', '7h30min', '7niiichi', '7nk', '7oy9davi5'];

function resetCode() {
    macro = "CODE:";
    macro += "SET !ERRORIGNORE YES" + b;
    macro += "VERSION BUILD=8820413 RECORDER=FX" + b;
}

//for (var i = 0; i < namesArray.length; i++) {
for (var i = 0; i < 3; i++) {
    resetCode();
    macro += 'URL GOTO=http://soundcloud.com/' + namesArray[i] + b;
    macro += 'WAIT SECONDS=2' + b;
    macro += 'TAG POS=1 TYPE=BUTTON ATTR=TXT:Seguir' + b;
    macro += 'WAIT SECONDS=2' + b;
    iimDisplay(i);
    iimPlay(macro);
}
