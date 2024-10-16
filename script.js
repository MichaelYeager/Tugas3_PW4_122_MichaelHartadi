
const ilmuList = [
        "Ilmu Jembut: Proses tumbuh dan berkembangnya tidak ada yang tau.",
        "Ilmu Tai: Walaupun dibawah, tidak ada yang berani menginjaknya.",
        "Ilmu Padi: Semakin berisi, semakin merunduk",
        "Ilmu Air: Fleksibel menghadapi hidup, tenang saat damai, tapi kuat dan menghantam saat keadaan memaksa.",
        "Ilmu Kupu-kupu: Jelek diawal, indah diakhir.",
        "Ilmu Akar: Tidak kelihatan, tetapi menjadi penopang.",
        "Ilmu Batu Karang: Tetaplah kokoh walau dihantam masalah."
    ];
    
    const ilmuDisplay = document.getElementById('ilmu');
    const newIlmuBtn = document.getElementById('newIlmuBtn');
    
    // Generate a random "ilmu"
    function getRandomIlmu() {
        const randomIndex = Math.floor(Math.random() * ilmuList.length);
        return ilmuList[randomIndex];
    }
    
    // Display a new random "ilmu" on button click
    newIlmuBtn.addEventListener('click', function() {
        ilmuDisplay.textContent = getRandomIlmu();
    });
    