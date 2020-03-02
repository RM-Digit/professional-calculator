let bracketSwitch = false;
let start=false;
var flag=0,contents_num=0;
var on=false;
var decimal=0;
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  
switch_check.onclick=()=>{
    console.log(eval(Math.log(9)));
    if(switch_check.checked) start=true,on=true;
    else start=false,on=false,contents='';
    document.form.txtview.value = contents;
    dis.style.backgroundColor=start?"white":"grey";
}
function calc(number) { 
    if(!on) return; 
    if(start) contents_num++;
    else contents_num=0; 
    switch (number) {
        case '.':
            console.log(typeof 78);
            if(contents[contents_num-2]=='.') return;
            contents+='.';
            break;
        case 'AC':
            start=true;
            flag=1;
            contents='0';
            break;
        case 'OFF':
            start=false;
            contents='';
            contents_num=0;
            break;
        case 'LOG':
                contents+= "Math.log";
            break;
        case 'Back':
            contents_num-=2;
            contents=contents.slice(0, contents_num);
            break;
        case '=':
            if(!start) break;
            flag=1;
            var pattern = new RegExp('log');
            contents=eval(contents);
            break;
        default:
            if(flag){
                contents_num=0;
                flag=0;
                contents='';
            }
            if(!start) break;
            contents += number;
            break;
    }
    dis.style.backgroundColor=start?"white":"grey";
    document.form.txtview.value = contents;
}