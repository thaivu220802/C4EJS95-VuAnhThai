import { PHONES } from "./store_data.js"

const length = PHONES.length;
const tableBody = document.getElementById("table-body");

function displayListPhones() {
    for (let i = 0; i < length; i ++) {
        const phone = PHONES[i]
        let html = `
        <tr>
            <td>${i+1}</td>
            <td class="img" align="center" onclick="window.location.href = '${phone.site}';return false"><img src=${phone.image}></td>
            <td><a href="${phone.site}">${phone.name}</a></td>
            <td>${phone.price}</td>
            <td>${phone.brand}</td>
        <tr>
        `;
        tableBody.insertAdjacentHTML("beforeend", html);
    }
}

displayListPhones();