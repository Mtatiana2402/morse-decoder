const alphabet = {  
    "-----":"0",
    ".----":"1",
    "..---":"2",
    "...--":"3",
    "....-":"4",
    ".....":"5",
    "-....":"6",
    "--...":"7",
    "---..":"8",
    "----.":"9",
    "   .-":"a",
    " -...":"b",
    " -.-.":"c",
    "  -..":"d",
    "    .":"e",
    " ..-.":"f",
    "  --.":"g",
    " ....":"h",
    "   ..":"i",
    " .---":"j",
    "  -.-":"k",
    " .-..":"l",
    "   --":"m",
    "   -.":"n",
    "  ---":"o",
    " .--.":"p",
    " --.-":"q",
    "  .-.":"r",
    "  ...":"s",
    "    -":"t",
    "  ..-":"u",
    " ...-":"v",
    "  .--":"w",
    " -..-":"x",
    " -.--":"y",
    " --..":"z",
    "     ":" ",
 };

function decode(expr) {
    var arr = expr.match(/.{1,2}/g);

var newarr = [];
for (i=0; i<arr.length; i++) {
    if (arr[i] === "10") {
        newarr[i] = ".";
    }
    else if(arr[i]==="11") {
        newarr[i] = "-";
    }
    else if (arr[i]==="00") {
        newarr[i] = " ";
    }
    else if (arr[i]==="**") {
        newarr[i] = " ";
    }
    
}
newarr=newarr.join('').match(/.{1,5}/g);
var message = [];
for (i=0; i<newarr.length; i++) {
    message[i]= alphabet[newarr[i]];
}
return message.join('');
    // write your solution here
}

module.exports = {
    decode
}