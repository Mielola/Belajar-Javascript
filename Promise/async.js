const taskPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Selesai")
        }, 3000);
    })
}

const task = async () => {
    console.log("Membuat Tugas")
    const done = await taskPromise()
    console.log(done)
}

console.log("MULAI")
task()
console.log("AKHIR")