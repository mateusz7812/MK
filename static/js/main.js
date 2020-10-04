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

function is_validated_successfully() {
    let tel = document.getElementById("tel_input").value;
    let mail = document.getElementById("mail_input").value;
    return tel != "" || mail != "";

}

function sendEmail() {
    if (!is_validated_successfully()) {
        document.getElementById("send_result").innerHTML = "Podaj numer telefonu i/lub adres e-mail.";
        return;
    }
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState === 4) {
            if (this.status === 200) {
                console.log("it works");
                document.getElementById("send_result").innerHTML = "Wiadomość została wysłana.";
                //document.getElementById("demo").innerHTML = this.responseText;
            } else {
                console.log("error");
                document.getElementById("send_result").innerHTML = "Wystąpił błąd.";
            }
        } else {
                document.getElementById("send_result").innerHTML = "Wysyłanie...";
        }
    };
    request.open("POST", "/", true);
    request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    let message = document.getElementById("message_box").value;
    let tel = document.getElementById("tel_input").value;
    let mail = document.getElementById("mail_input").value;
    request.send(`message=${message}&tel=${tel}&mail=${mail}`);
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
