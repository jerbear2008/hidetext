Hotkey('^d', function(){
  let tempClip = Clipboard
  Send("{Ctrl down}c{Ctrl up}")
  if(typeof Clipboard === "string"){
    MsgBox(decode(Clipboard))
  }
  Clipboard = tempClip
})
Hotkey('^e', function(){
  let tempClip = Clipboard
  Send("{Ctrl down}c{Ctrl up}")
  if(typeof Clipboard === "string"){
    let toHide = InputBox("HideText", "What would you like to hide?")
    Clipboard = encode(Clipboard, toHide)
  } else {
    Clipboard = tempClip
  }
})


////////////////////
// https://github.com/jasonkimprojects/zerosteg/blob/master/zerosteg.js
////////////////////
function encode(mask, steg) {
    var result = mask;
    var steg_binary = convert_to_binary(steg);
    var insertion_arr = rand_insert(mask.length, steg.length);
    var binary_idx = 0;
    for (i in insertion_arr) {
        idx = parseInt(insertion_arr[i]) + parseInt(i);
        console.log(idx);
        if (steg_binary[binary_idx] === '1') {
            result = str_insert(result, '\u200d', idx);
        }
        else {
            result = str_insert(result, '\u200c', idx);
        }
        ++binary_idx;
    }
    return result;
}
function str_insert(orig, insert, idx) {
    return [orig.slice(0, idx), insert, orig.slice(idx)].join('');
}
function convert_to_binary(str) {
    // Convert into char array.
    var chars = str.split('');
    var output = [];
    for (idx in chars) {
        var char = chars[idx];
        var binary = char.charCodeAt().toString(2);
        // Add zeros to make everything 8 bits.
        // Join adds array length - 1 zeros.
        output.push(Array(8 - binary.length + 1).join('0') + binary);
    }
    return output.join('');
}
function rand_insert(text_len, steg_len) {
    var indices = [];
    var num_steg_bits = steg_len * 8;
    while (num_steg_bits > 0) {
        // While there is another index to insert,
        // generate random indices.
        var rand_idx = Math.floor(Math.random() * text_len);
        indices.push(rand_idx);
        --num_steg_bits;
    }
    // Now that all indices are generated, sort the array
    // in ascending index order.
    indices.sort(function(x, y) {return x - y;});
    return indices;
}
function decode(str) {
    var chars = str.split('');
    var bytes = [];
    var buffer = '';
    for (var i = 0; i < chars.length; ++i) {
        if (chars[i] === '\u200d') {
            buffer += '1';
        }
        else if (chars[i] === '\u200c') {
            buffer += '0';
        }
        if (buffer.length === 8) {
            bytes.push(buffer);
            buffer = '';
        }
    }
    for (var j = 0; j < bytes.length; ++j) {
        bytes[j] = parseInt(bytes[j], 2);
    }
    for (var k = 0; k < bytes.length; ++k) {
        bytes[k] = String.fromCharCode(bytes[k]);
    }
    return bytes.join('');
}