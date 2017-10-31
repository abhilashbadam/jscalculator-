
var onlyDecimal=false;
    var store= document.getElementById("tuch");
       function toScreen(x){
    store.value+=x;
    if(x==='c'){
        store.value="";
    }
}
function answer(){
            x=store.value;
            x=eval(x);
            store.value=x;
        }

