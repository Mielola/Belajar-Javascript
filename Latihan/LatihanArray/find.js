// Find
// NOTE : Mengembalikan nilai elemen pertama dalam array yang memenuhi fungsi pengujian yang disediakan.

const arr = ["Muhammad Wildan", "Wisnu Kresnohadi", "Muhammad Fadhillah Farhan"];
const find = arr.find(function(item) {
    return item.includes("Muhammad");
});
console.table([find]);
// Output : Muhammad Wildan

// =============================

// PERBEDAAN DENGAN FILTER
const find2 = arr.filter(function(item){
    return item.includes("Muhammad");
})

console.table([find2]);
// Output : Muhammad Wildan, Muhammad Fadhillah Farhan

