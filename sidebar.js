
//reload button reloads the iframe
document.getElementById("reload").addEventListener("click", function() {
    const iframe = document.getElementById("urlIframe");
    iframe.src = iframe.src; 
});