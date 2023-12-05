function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
  var targetNumber = getRandomNumber(1, 10);

  
  function startGame() {
    var guess = prompt('Masukkan angka!:');

    // Validasi input
    if (guess === null || guess === '') {
      alert('Tebak angka antara 1 dan 10');
      startGame();
      return;
    }

    // Konversi input ke tipe angka
    guess = parseInt(guess);

    // Periksa apakah tebakan benar, terlalu rendah, atau terlalu tinggi
    if (guess === targetNumber) {
      alert('Selamat, tebakan Anda benar!');
    } else if (guess < targetNumber) {
      alert('Tebakan terlalu rendah. Coba lagi!');
      startGame();
    } else {
      alert('Tebakan terlalu tinggi. Coba lagi!');
      startGame();
    }
  }

  // Memulai permainan saat halaman dimuat
  startGame();