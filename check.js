function getCookie(name) {
    let cookieArr = document.cookie.split(";");
    for (let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if (name == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

window.onload = function() {
    var uid = getCookie("uid");
    if (uid) {
        console.log(uid)
        window.location.href = "./index.html";
    } else {
        window.location.href = "./login.html";
    }
};