const button = document.querySelector('.btn');
button.addEventListener('click', () => {
    fetchData();
})

const fetchData = () => {
    const xhr = new XMLHttpRequest();
    console.log('xhr0', xhr);
    
    xhr.open('GET', './api/sample.txt');
    console.log('xhr', xhr);
    
    xhr.onreadystatechange = () => {
        console.log('xhr', xhr);
        if (xhr.readyState === 4 && xhr.status === 200) {
            const text = document.createElement('p');
            text.textContent = xhr.responseText;
            document.body.appendChild(text);
        } else {
            console.log({
                status: xhr.status,
                text: xhr.statusText,
            });
        }
    };
    
    xhr.send();
}
