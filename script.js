function transcribe() {
  const audioFile = document.getElementsByClassName('arquivo')[0].files[0];

  const formData = new FormData();
  formData.append('audio', audioFile);
  formData.append('entry_type', 'ogg');

  fetch('http://127.0.0.1:5000/transcribe', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      const p = document.createElement('p');
      p.innerHTML = data.audio_transcribe;
      document.body.appendChild(p);
    })
    .catch((error) => {
      // Lida com erros de solicitação aqui
      console.error(error);
    });
}
