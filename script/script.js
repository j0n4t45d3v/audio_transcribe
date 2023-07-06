const div = document.createElement('div');
  div.style = `
    width: 60%;
    border-radius: 5px;
    border: 1px solid #b6b6b6;
    margin: 0 auto;
    margin-top: 50px;
    padding: 20px;
  `

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
      div.appendChild(p);
      document.body.appendChild(div);
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
  document.body.removeChild(div);
}

function optionTranscribe(){
  const btn = document.getElementsByClassName('btn');
  const select = document.getElementsByClassName('container-output');

  select[0].style.display = 'none';
  btn[0].style.display = 'block';
  btn[1].style.display = 'none';

}
