import flask
from flask import Flask

app = Flask(__name__)


@app.route('/', methods=["GET"])
def main():
    return flask.render_template("index.html")


@app.route('/', methods=["POST"])
def send_message():
    print("it works")
    return flask.Response(status=200)


if __name__ == '__main__':
    app.run()
