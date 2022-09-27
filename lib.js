

function status_app(){
return "Working";
}

function version_dto(){
return "1.0";
}

function document_js(pt){
function get_doc(){
return pt;
}
}

function json_get_dto(s1,s2){

const myjs = s1;

const objs = JSON.parse(myjs);
document.getElementById(get_doc()).innerHTML = objs.s2;
}
