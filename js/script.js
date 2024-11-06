fetch('/includes/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Erreur de chargement du header:', error));

function toggleText() {
    var text = document.getElementById("additional-text");
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

