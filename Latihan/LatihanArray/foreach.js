let arr = ['A', 'I', 'U', 'E', 'O']
const arr2 = ['Muhammad Wildan', 'Wisnu Kresno Hadi', 'Fadillah Muhammad Farhan']
const arr3 = [
    {nama : "Muhammad Wildan", Kelas : "46 - 01"},
    {nama : "Martin Rahman Hakim", Kelas : "46 - 05"},
    {nama : "Muhammad Aqil Rasyid", Kelas : "46 - 03"}
]
let newArr = []

// For Loop
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element)
}

//================================

// Foreach
arr.forEach((e) => {
    console.log(e)
})

//=================================

// Map
const n = arr2.map((element) => {
    return element
})
console.table(n)

// --------------------

const newArr3 = arr3.map((i) => {
    if (arr3.length < 3) {
        return { ...i, additional: { nama: "Dive", Kelas: "46 - 01" } };
    }
    return i;
});

if (newArr3.length < 4) {
    newArr3.push({ nama: "Dive", Kelas: "46 - 01" });
}
console.table(newArr3)

// -----------------------

 const arrMap = [1,5,6,100]
 const newArrMap = arrMap.map((e) => {
    return e * 19
 })
 console.table(newArrMap)