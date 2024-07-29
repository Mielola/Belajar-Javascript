// Reduce
// NOTE : Menerapkan fungsi pada setiap elemen dalam array (dari kiri ke kanan) untuk mengurangi array menjadi satu nilai.

// V1
let arr = [4, 5, 6, 10]
let sum = arr.reduce(count)

function count(total, item){
    return total + item
}
console.log(sum)

// V2
sum = arr.reduce(function count2(total, item){
    return total + item
}, 100)

console.log(sum)