function transcribe() {
  const audioFile = document.getElementsByClassName('arquivo')[0].files[0];
  const loading = document.getElementById('loading');
  const ext = audioFile.name.split('.').pop();

  loading.style.display = 'block';

  const formData = new FormData();
  formData.append('audio', audioFile);
  formData.append('entry_type', ext);

  fetch('http://127.0.0.1:5000/transcribe', {
    method: 'POST',
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      loading.style.display = 'none';
      const p = document.createElement('p');
      p.innerHTML = data.audio_transcribe;
      document.body.appendChild(p);
    })
    .catch((error) => {
      console.error(error);
    });
}

function convertAudio(){
  const audioFile = document.getElementsByClassName('arquivo')[0].files[0];
  const loading = document.getElementById('loading');
  const ext = audioFile.name.split('.').pop();
  const output = document.getElementsByClassName('output-convert').value;

  loading.style.display = 'block';

  const formData = new FormData();
  formData.append('audio', audioFile);
  formData.append('entry_type', ext);
  formData.append('output_type', ext);

  console.log(output);

  // fetch('http://127.0.0.1:5000/convert', {
  //   method: 'POST',
  //   body: formData,
  // })
}

function optionConvert(){
  const btn = document.getElementsByClassName('btn');
  const select = document.getElementsByClassName('container-output');

  btn[0].style.display = 'none';
  btn[1].style.display = 'block';
  select[0].style.display = 'block';
}

function optionTranscribe(){
  const btn = document.getElementsByClassName('btn');
  const select = document.getElementsByClassName('container-output');

  select[0].style.display = 'none';
  btn[0].style.display = 'block';
  btn[1].style.display = 'none';

}
