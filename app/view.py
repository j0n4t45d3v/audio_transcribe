import base64
import io
from app.service import audio_convert, transcribe_audio_to_text
from flask import make_response, jsonify, send_file


def convert_audio(request):
    audio = request.files['audio']
    entry_type = request.form['entry_type']
    output_type = request.form['output_type']

    try:
        open_audio = audio.read()

        audio_in_memory = audio_convert(open_audio, entry_type, output_type)

        dowlonad_audio = send_file(io.BytesIO(audio_in_memory),
                                   mimetype=f"audio/{output_type}",
                                   as_attachment=True,
                                   download_name="converted_audio.{}".format(
                                       output_type)
                                   )

        return dowlonad_audio
    except Exception as e:
        make_error = jsonify({'ERROR': str(e)})
        return make_response(make_error, 500)


def audio_transcribe(request):
    audio = request.files['audio']
    entry_type = request.form['entry_type']
    try:
        open_audio = audio.read()
        transcribe = transcribe_audio_to_text(
            open_audio, entry_type, 'wav')
        make_msg = jsonify(
            {
                'audio_transcribe': transcribe,
                'language': 'pt-BR'
            }
        )

        return make_response(make_msg, 200)
    except Exception as e:
        make_error = jsonify(
            {'ERROR': str(e)}
        )
        return make_response(make_error, 500)
