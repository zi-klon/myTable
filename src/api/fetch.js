export default function Fetch() {
    return fetch(`https://www.breakingbadapi.com/api/episodes`)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
}