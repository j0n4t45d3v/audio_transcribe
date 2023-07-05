from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
from app.view import convert_audio, audio_transcribe

routers = Blueprint('uri', __name__)


@routers.route('/', methods=['GET'])
@cross_origin()
def index():
    response = jsonify(
        {
            'version': '1.0.0',
            'name': 'Audio Transcribe API',
            'author': 'Jonatas de Lima'
        }
    )
    return response


@routers.route('/convert', methods=['POST'])
@cross_origin()
def convert():
    return convert_audio(request=request)


@routers.route('/transcribe', methods=['POST'])
@cross_origin()
def transcribe():
    return audio_transcribe(request=request)
