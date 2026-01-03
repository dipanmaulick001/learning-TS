function delayedCall( fn : ()=> void){ //type of the ip function , since it returns nothing so void
    setTimeout(fn , 1000);
}

delayedCall( function(){
    console.log("hello")
})

/*function delayedCall2(fn : () => number){
    setTimeout(fn, 1000);
}
delayedCall2(function(){
    return 2;
})*/
// () => number, () => string, () => boolean 