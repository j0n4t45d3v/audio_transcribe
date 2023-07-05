from flask import Flask
from flask_cors import CORS
from uris import routers

app = Flask(__name__)
app.register_blueprint(routers)
CORS(app)


if __name__ == '__main__':
    app.run(debug=True)
