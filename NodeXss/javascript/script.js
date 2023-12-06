

window.onload = function(){
    var url = document.getElementsByTagName("a");
    for (var i= 2; i < url.length; i++){
        var name= url[i].getAttributeNames()
        url[i].removeAttribute(name[4])
        const clean = url[i].textContent.replace("=","")
        url[i].setAttribute("href",clean);
        const attribute = url[i].getAttribute("href").split("=");
        url[i].setAttribute(name[4],attribute[1])
        
    }
}








