function delayTheCallMan( samachaar : ( a : string) => void){
    setTimeout(() => samachaar("amandeep") , 2500);
}

const samachaar = (name : string) =>{
    console.log(` This is for you ${name}`)
}
delayTheCallMan(samachaar);