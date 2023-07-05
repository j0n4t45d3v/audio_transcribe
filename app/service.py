import io
from pydub import AudioSegment
import speech_recognition as sr
from speech_recognition import Recognizer, AudioFile


def audio_convert(audio, entry_type, output_type):
    entry_value = AudioSegment.from_file(io.BytesIO(audio), format=entry_type)
    output = entry_value.export(format=output_type)
    return output.read()


def transcribe_audio_to_text(audio, entry_type, output_type):
    archive_in_memory = audio_convert(audio, entry_type, output_type)

    get_bytes = io.BytesIO(archive_in_memory)

    recognizer = Recognizer()
    with AudioFile(get_bytes) as source:
        audio = recognizer.record(source)

    return recognizer.recognize_google(audio, language='pt-BR')
