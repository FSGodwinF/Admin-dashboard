
const Orders = [
    {
        productName: 'iphone 14 Pro Max 1TB',
        productNumber: '475849',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'Madden 2k22',
        productNumber: '123453',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: 'Anti-bluelight Glasses',
        productNumber: '42354',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Spalding Basketball',
        productNumber: '71110',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
    {
        productName: '4k Go-pro camera',
        productNumber: '21607',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'NBA 2K22 Legends',
        productNumber: '39494',
        paymentStatus: 'Refunded',
        shipping: 'Declined'
    },
    {
        productName: 'Nike Dunk Lows',
        productNumber: '39289',
        paymentStatus: 'Paid',
        shipping: 'Delivered'
    },
]
//grabbing buttons from the page

const asideMenu = document.querySelector("aside");
const menuButton = document.querySelector("#menu-btn");
const closeButton = document.querySelector("#close-btn");
const changeTheme = document.querySelector(".light__dark");


menuButton.addEventListener('click', ()=>{
    asideMenu.style.display = "block";
});

closeButton.addEventListener('click', ()=>{
    asideMenu.style.display = "none";
});

//change Theme

changeTheme.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-theme-variables');

    changeTheme.querySelector('span:nth-child(1)').classList.toggle('active')
    changeTheme.querySelector('span:nth-child(2)').classList.toggle('active')


    // alternative to the one above
   // changeTheme.querySelector('span').classList.toggle('active');
});

Orders.forEach(order =>{
    const tr = document.createElement('tr');
    const trContent = `
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                    <td class="primary">Details</td>   
                 `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

