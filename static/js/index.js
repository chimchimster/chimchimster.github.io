document.addEventListener('DOMContentLoaded', function() {
    fetch('https://stepik.org/catalog', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    })

    .then(response => response.text())
    .then(text => console.log(text))
});