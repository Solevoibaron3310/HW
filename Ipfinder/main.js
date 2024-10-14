// document.getElementById('findIpBtn').addEventListener('click', async () => {
//     const resultDiv= document.querySelector('result')
//     resultDiv.innerHTML= "Loading... ";

//     try {
//         const ipResponse = await fetch('https://api.ipify.org/?format=json');
//         const ipData = await ipResponse.json();
//         const ipAdress = ipData.ip;

//         const geoResponse = await fetch('http://ip-api.com/json/${ipAddress}?fields=continent,country,regionName,city,district')
//         const geoData = await geoResponse.json()

//         resultDiv.innerHTML = `<p><strong>Континент:</strong> ${geoData.continent}</p>
//             <p><strong>Країна:</strong> ${geoData.country}</p>
//             <p><strong>Регіон:</strong> ${geoData.regionName}</p>
//             <p><strong>Місто:</strong> ${geoData.city}</p>
//             <p><strong>Район:</strong> ${geoData.district || 'Інформація відсутня'}</p>
//         `

//     } catch (error) {
//         resultDiv.innerHTML = "Error 404";
//         console.log(error)
//     }

// })

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('findIpBtn').addEventListener('click', async () => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = 'Loading...';

        try {
            // 1. Отримуємо IP адресу клієнта
            const ipResponse = await fetch('https://api.ipify.org/?format=json');
            const ipData = await ipResponse.json();
            const ipAddress = ipData.ip;
            
            // 2. Надсилаємо запит на ip-api.com з отриманим IP
            const geoResponse = await fetch(`http://ip-api.com/json/${ipAddress}?fields=continent,country,regionName,city,district`);
            const geoData = await geoResponse.json();

            // 3. Виводимо інформацію про місцезнаходження
            resultDiv.innerHTML = `
                <p><strong>Continent:</strong> ${geoData.continent}</p>
                <p><strong>Country:</strong> ${geoData.country}</p>
                <p><strong>Region:</strong> ${geoData.regionName}</p>
                <p><strong>City/Town:</strong> ${geoData.city}</p>
                <p><strong>District:</strong> ${geoData.district || 'No info'}</p>
            `;
        } catch (error) {
            resultDiv.innerHTML = 'Сталася помилка при отриманні даних.';
            console.error(error);
        }
    });
});
