import AutokUrlap from "./AutokUrlap.js";
$(function(){
    const ujadat=$(".ujadat")
    new AutokUrlap(ujadat, { Rendszam: "", tipus: "" });
    
    $(window).on("ujadat", (event) => {
        console.log(event.detail);
        
      });
})