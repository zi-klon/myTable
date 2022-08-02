export default function Fetch() {
    /*return fetch('https://www.breakingbadapi.com/api/episodes', {
        mode: 'no-cors'
    })
        .then(res => {
            console.log(res)
            return res.json();
        })
        .catch(error => {
            console.log('Request failed', error);
        });*/
    return fetch(`https://www.breakingbadapi.com/api/episodes`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}