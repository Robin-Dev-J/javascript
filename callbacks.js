//callbacks
//callback
function dhansu(name,CowAdhvadhuOruMaadu){

    setTimeout(function(){
        console.log(name)
        CowAdhvadhuOruMaadu();
    },2000)//Calling within 2000 seconds

}
function simpu(){
    console.log("Scientifically")
}
dhansu("Water is also a Living thing da thambi\n If am not wrong",simpu)