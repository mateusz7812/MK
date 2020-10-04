import smtplib
from socket import gethostname

import flask
from flask import Flask, request

app = Flask(__name__)

gmail_user = "emailbot174@gmail.com"
gmail_password = "5jB8EfRKnCf7Ykj"


@app.route('/', methods=["GET"])
def main():
    return flask.render_template("index.html")


def generate_mail(tel, mail, message):
    return "Wiadomość: " + message + "\nTelefon: " + tel + "\nE-mail: " + mail


@app.route('/', methods=["POST"])
def send_message():
    data = request.form
    tel = data['tel']
    mail = data['mail']
    message = data['message']

    server = smtplib.SMTP_SSL('smtp.gmail.com', 465)
    server.ehlo()
    server.login(gmail_user, gmail_password)
    email_text = generate_mail(tel, mail, message)
    email_data = """\
From: %s
To: %s
Subject: Nowa wiadomość

%s
""" % (gmail_user, "naprawianium@gmail.com", email_text)
    server.sendmail(gmail_user, "naprawianium@gmail.com", email_data.encode('utf-8'))
    server.close()

    return flask.Response(status=200)


if __name__ == '__main__':
    if 'liveconsole' not in gethostname():
        app.run()
