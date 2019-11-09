function buildDict (codeType) {
    let code = codeType.toUpperCase();
    let dict = {};
    for (var i = 0; i < code.length; i+=2) {
        var m = code.substring(i, i + 2);
        dict[m[0]] = m[1];
        dict[m[1]] = m[0];
    }
    return dict;
}

function encodeLetter (dict, letter){
    if (dict[letter] !== undefined) {
        return dict[letter];   
    } else {
        return letter;
    } 
}

 function encode (codeType, txt) {
    let txt2 = txt.toUpperCase();
    let dict = buildDict(codeType);
    let finalTxt = txt2.split('').map(v => encodeLetter(dict,v)).join('');
    return finalTxt;
 }

codedText = encode('GADERYPOLUKI', 'connectis cschool');
console.log(codedText);