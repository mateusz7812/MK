function scrollToId(id) {
    const element = document.getElementById(id);
    const width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    const offset = ((width > 800) ? 80 : 0);
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}

function mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
    ((navigator.platform.indexOf("iPhone") !== -1) ||
        (navigator.platform.indexOf("iPad") !== -1) ||
        (navigator.platform.indexOf("iPod") !== -1))
        window.open("maps://www.google.com/maps/place/Ryszewo+18A,+88-420/@52.6980981,17.707991,13z"); else /* else use Google */
        window.open("https://www.google.com/maps/place/Ryszewo+18A,+88-420/@52.6980981,17.707991,13z");
}

function sendEmail() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("it works")
            //document.getElementById("demo").innerHTML = this.responseText;
        }
        else {
          console.log("error")
        }
    };
    request.open("POST", "/", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.send("message=Henry&tel=123456789&mail=qwe@qwe.qwe");
}

function updateForm() {
    const element = document.getElementsByName("contact")[0];
    if (element.checked) {
        document.getElementById("tel_label").style.display = "block";
        document.getElementById("email_label").style.display = "none";
    } else {
        document.getElementById("tel_label").style.display = "none";
        document.getElementById("email_label").style.display = "block";
    }
}
