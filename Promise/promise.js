let done = true

const task = new Promise((resolve, reject) => {
    if (done)
        resolve("Task done")
    else
        reject("Task not done")
})

console.log(task)

task
    .then(response => console.log(response))
    .catch(response => console.log(response))