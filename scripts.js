document.getElementById('chat-bubble').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'flex';
    document.getElementById('chat-bubble').style.display = 'none';
});

document.getElementById('close-chat').addEventListener('click', function() {
    document.getElementById('chat-box').style.display = 'none';
    document.getElementById('chat-bubble').style.display = 'flex';
});

document.getElementById('chat-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const message = document.getElementById('message').value;
    const email = document.getElementById('email').value;
    
    if (message.trim() === "" || email.trim() === "") {
        alert("Kérlek töltsd ki az összes mezőt.");
    } else {
        alert("Üzeneted elküldve: " + message + "\nEmail: " + email);
        // Itt tedd meg a form elküldését egy szerver felé (pl. email küldés API vagy PHP backend)
    }
});

 function scrollToTarget(event) {
        event.preventDefault(); // Megakadályozza az alapértelmezett viselkedést
        document.querySelector('.about-box').scrollIntoView({ behavior: 'smooth' });
    }