function fetchData() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.json())
        .then(data => {
            const catFact = data.fact;
            console.log(catFact);
            const factParagraph = document.createElement('p');
            factParagraph.textContent = catFact;
            document.body.appendChild(factParagraph);
        })
        .catch(error => console.error(error));
    }
    window.addEventListener('load', fetchData);
