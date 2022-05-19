function discord() {
    var copyText = "Alexyy#4003"
    navigator.clipboard.writeText(copyText);

    var x = document.getElementById("toolip_copied");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}