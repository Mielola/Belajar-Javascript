// const { default: axios } = require("axios");
// const { error } = require("console");
// const { response } = require("express");
// const { title } = require("process");

// Mengambil Semua Data
// axios.get('https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser').then(response => {
//     response.data.forEach(user => {
//         console.log(user)
//     });
// })

// POST
// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'TESTTING',
//     body: 'INI BODY'
// }).then(response => {
//     console.log("DATA BERHASIL DI POST :", {
//         title: response.data.title,
//         body: response.data.body
//     })
// }).catch(error => {
//     console.log(error)
// })

// const url = 'https://api.example.com/data'; // Ganti dengan URL API yang sesuai
// const data = {
//     key1: 'value1',
//     key2: 'value2'
// };

// fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         // Tambahkan header lain jika diperlukan, seperti Authorization
//     },
//     body: JSON.stringify(data)
// })
//     .then(response => response.json()) // Parsing response menjadi JSON
//     .then(result => {
//         console.log('Success:', result);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


const apiPost = 'http://192.168.150.68:8000/';

const datas = {
    "customer_name": "wildan JS", // TAMPUNG KE VARIABLE
    "total_amount": 80000, // TAMPUNG KE VARIABLE
    "status": "pending",
    "order_items": [
        {
            "menu_item_id": 1, // TAMPUNG KE VARIABLE
            "quantity": 2, // TAMPUNG KE VARIABLE
            "price": 20000 // TAMPUNG KE VARIABLE
        },
    ]
};

fetch(apiPost + 'api/orders', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(datas)
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });



// DELETE
// axios.delete('https://jsonplaceholder.typicode.com/posts/{deleteId}')

// async function fetchData() {
//     const response = await fetch('https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser', {
//         method: 'GET'
//     });

//     const data = await response.json();
//     if (data.length > 0) {
//         for (let index = 0; index < data.length; index++) {
//             const element = data[index].name;
//             console.log(element)
//         }
//     } else {
//         console.log('No users found');
//     }
// }



// fetchData();

// const endPoint = "https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser"
// fetch(endPoint).then((response) => response.json()).then((data) => console.table(data))


// async function hitApi(params) {
//     try {
//         const api = await fetch(params)
//         const response = await api.json()

//         if (response.length > 0) {
//             for (let index = 0; index < response.length; index++) {
//                 const { name } = response[index];
//                 console.table(name)
//             }
//         }
//     } catch (error) {
//         throw new Error("GAGAL GET API");

//     }
// }

// // hitApi("https://63ef393fc59531ccf16b23ed.mockapi.io/user/listUser")

// // fetch('   ')
// //   .then(response => response.json())
// //   .then(data => {
// //     console.log(data);
// //     displayData(data);
// //   })
// //   .catch(error => console.error('Error fetching data:', error));

// // function displayData(users) {
// //   const container = document.querySelector('#user-cards .container');
// //   container.innerHTML = ''; // Clear existing content

// //   users.forEach(user => {
// //     // Create a card element
// //     const card = document.createElement('div');
// //     card.classList.add('card');
// //     card.classList.add('mb-4'); // Add some margin bottom for spacing

// //     card.innerHTML = `
// //       <div class="card-body">
// //         <h5 class="card-title">${user.name}</h5>
// //         <p class="card-text">Email: ${user.email}</p>
// //       </div>
// //     `;

// //     // Append the card to the container
// //     container.appendChild(card);
// //   });
// // }





// document.getElementById('login-form').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     // Ambil nilai input setelah form disubmit
//     const email = document.getElementById('email-input').value;
//     const password = document.getElementById('password-input').value;

//     try {
//         const response = await fetch('https://freeapi.miniprojectideas.com/api/User/Login', {
//             method: 'POST',
//             mode: 'no-cors',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 EmailId: email,
//                 Password: password
//             })
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         if (result.result) {
//             alert('Login Berhasil');
//         } else {
//             alert('Login Gagal: ' + (result.message || 'Unknown error'));
//         }
//     } catch (error) {
//         console.error('Error during login:', error);
//         alert('Terjadi kesalahan saat login. Silakan coba lagi.');
//     }
// });




