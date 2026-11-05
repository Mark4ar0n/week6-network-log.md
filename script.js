const searchBtn = document.getElementById('searchBtn');
const searchBox = document.getElementById('searchBox');
const result = document.getElementById('result');

searchBtn.addEventListener('click', () => {
    const topic = searchBox.value.trim();
    const url = 'https://en.wikipedia.org/api/rest_v1/page/summary/' + encodeURIComponent(topic);

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const photo = data.thumbnail ? data.thumbnail.source : '';
            result.innerHTML = `
                <h2>${data.title}</h2>
                <img src="${photo}">
                <p>${data.extract}</p>
            `;
        })
        .catch(error => {
            result.innerHTML = `<p>Topic not found. Check the spelling.</p>`;
        }
    );
});  