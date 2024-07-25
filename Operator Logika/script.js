let nilaiUjian = 75
let nilaiAbsensi = 70

const displayMahasiswa = () => {
    let result = document.getElementById('result')
    if(nilaiUjian > 70 == nilaiAbsensi > 68){
       result.innerHTML = `<h1>Selamat Anda berhasi lulus dengan nilai ujian : ${nilaiUjian} dan nilai absensi ${nilaiAbsensi}</h1>`
    } else {
        document.writeln("<h1>Anda Gagal")
    }
}

const incrementNilai = () => {
    nilaiUjian += 10
    nilaiAbsensi += 10
    displayMahasiswa()
}

displayMahasiswa()