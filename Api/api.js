const { default: axios } = require("axios");
const { error } = require("console");
const { response } = require("express");
const { title } = require("process");

// Mengambil Semua Data
axios.get('https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser').then(response => {
    response.data.forEach(user => {
        console.log(user)
    });
})

// POST
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title : 'TESTTING',
    body : 'INI BODY'
}).then(response => {
    console.log("DATA BERHASIL DI POST :", {
        title: response.data.title,
        body : response.data.body
    })
}).catch(error => {
    console.log(error)
})


// DELETE
axios.delete('https://jsonplaceholder.typicode.com/posts/{deleteId}')

async function fetchData() {
    const response = await fetch('https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser', {
        method: 'GET'
    });

    const data = await response.json();
    if (data.length > 0) {
        for (let index = 0; index < data.length; index++) {
            const element = data[index].name;
            console.log(element)
        }
    } else {
        console.log('No users found');
    }
}

fetchData();
