const arrNames = []
const arrNamesAndClass = []

// Add Array
arrNames.push("Wildan")
arrNames.push("Wisnu", "Tatang")

arrNamesAndClass.push({'index' : 'Wildab', 'kelas' : '46 - 01'})
console.table(arrNames)
console.table(arrNamesAndClass)

// delete array
delete arrNames[1]
console.table(arrNames)



// Latihan
const Mahasiswa =[]

const addMahasiswa = (nama, kelas) => {
    Mahasiswa.push({nama, kelas})
}

function displayMahasiswa() {
    console.table(Mahasiswa)
}

const deleteMahasiswaWithIndex = (index) => {
    delete Mahasiswa[index]
}

function deleteMahasiswaWithName(nama){
    let index = Mahasiswa.findIndex(mahasiswa => mahasiswa.nama == nama)
    if (index !== -1){
        Mahasiswa.splice(index, 1)
    }
}

// Menambahkan Mahasiswa
addMahasiswa("Muhammad Wildab", "46 - 01")
addMahasiswa("Muhammad Tatang", "46 - 03")
addMahasiswa("Ranggaina", "46 - 04")

console.log("Sebelum Dihapus")
displayMahasiswa()

// Menghapus Mahasiswa Menggunakan Index
deleteMahasiswaWithIndex(1)
console.log("Sesudah Dihapus Menggunakan index")
displayMahasiswa()

// Mengahpus Mahasiswa Menggunakan Nama
deleteMahasiswaWithName("Muhammad Wildab")
console.log("Sesudah Dihapus Menggunakan Nama")
displayMahasiswa()

