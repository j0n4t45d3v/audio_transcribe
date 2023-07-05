from flask import Blueprint, request, jsonify
from app.view import convert_audio, audio_transcribe

routers = Blueprint('uri', __name__)


@routers.route('/', methods=['GET'])
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
def convert():
    return convert_audio(request=request)


@routers.route('/transcribe', methods=['POST'])
def transcribe():
    return audio_transcribe(request=request)
