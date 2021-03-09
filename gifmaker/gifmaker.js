const video = document.querySelector('video');
const btnStart = document.querySelector('.btnStart');
const btnRecord = document.querySelector('.btnRecord');
const btnFinish = document.querySelector('.btnFinish');
const btnUpload = document.querySelector('.btnUpload');

let recorder


const getStream = () => {
    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
        height: 480
    }
    })

    .then(stream => {
        video.srcObject = stream;
        video.play()

        recorder = RecordRTC(stream, {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            height: 240,
            onGifRecordingStarted: function() {
                console.log('started')
            }
        })

        btnStart.classList.add('hidden')
        btnRecord.classList.remove('hidden')
    })

    .catch(error => {
        console.error(error)
        alert(`Debe permitir el acceso a la camara`)
    })
}

const recordStart = () => {
    recorder.startRecording(); // Empezamos a grabar!!
    btnRecord.classList.add('hidden');
    btnFinish.classList.remove('hidden');
}

const recordStop = () => {
    recorder.stopRecording(); // Finalizamos la grabacion!!
    btnFinish.classList.add('hidden');
    btnUpload.classList.remove('hidden');
}

const uploadGif = async () => {
    const 
    console.log('## subimos el gif ##')
}

btnStart.addEventListener('click', getStream)
btnRecord.addEventListener('click', recordStart)
btnFinish.addEventListener('click', recordStop)
btnUpload.addEventListener('click', uploadGif)

// VoyMtUR5a3aeKmGKj01JptIltKYBlN0D