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
