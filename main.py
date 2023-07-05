from flask import Flask
from uris import routers

app = Flask(__name__)
app.register_blueprint(routers)


if __name__ == '__main__':
    app.run(debug=True)
