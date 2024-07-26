const arrNames = []
const arrNamesAndClass = []

// Add Array
arrNames.push("Wildan")
arrNames.push("Wisnu", "Tatang")

arrNamesAndClass.push({'nama' : 'Wildab', 'kelas' : '46 - 01'})
console.table(arrNames)
console.table(arrNamesAndClass)

// delete array
delete arrNames[1]
console.table(arrNames)

