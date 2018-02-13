function convert(){
    var str1=document.js.input.value;
    var cr = getcrchars();
    var str2="";

    start = 0;
    end = 0;
    len = str1.length;
    while(end < len) {
        end = str1.indexof(cr,start);
        if(end == -1) {
            str2 = str2 + str1.slice(start,parseint(len));
            break;
        }
        if(len - end < 3 || start == end || str1.slice(end+1,end+4).match("　　　")) {
            str2 = str2 + str1.slice(start,end) + cr;
        } else {
            str2 = str2 + str1.slice(start,end) + cr + cr;
        }
        start = end + 1;
    }
    document.js.output.value = str2;
}

//テキストボックスの文字を操作する
function clear(){
    document.js.input.value="";
    document.js.output.value="";
    document.js.caution.value="";
}
