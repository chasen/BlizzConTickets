Element.prototype.remove = function() {
    this.parentElement.removeChild(this);
};
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for(var i = 0, len = this.length; i < len; i++) {
        if(this[i] && this[i].parentElement) {
            this[i].parentElement.removeChild(this[i]);
        }
    }
};
if(document.getElementById("social_module_container") !== null){
    document.getElementById("social_module_container").remove();
}
if(document.getElementById("see_whos_going") !== null){
    document.getElementById("see_whos_going").remove();
}
if(document.getElementById("panel_when") !== null){
    document.getElementById("panel_when").remove();
}
function stopTransfer()
{
    if(window.stop !== undefined){
         window.stop();
    }
    else if(document.execCommand !== undefined){
         document.execCommand("Stop", false);
    }
}
stopTransfer();