let video = document.getElementById('preview');
let result = document.getElementById('result');

let scanner = new Instascan.Scanner({
    video: video,
    mirror: false // gunakan 'true' jika Anda menggunakan kamera depan
});

scanner.addListener('scan', function (content) {
    result.innerText = "Hasil Scan: " + content;
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]); // gunakan cameras[1] untuk kamera depan (jika ada)
    } else {
        console.error('Tidak ada kamera yang ditemukan.');
        alert('Tidak ada kamera yang ditemukan.');
    }
}).catch(function (e) {
    console.error(e);
    alert(e);
});
