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




document.addEventListener('mousemove', function(e) {
    const circle = document.getElementById('cursor-circle');
    const border = document.getElementById('background-slider');
	const border2 = document.getElementById('background-slider-2');
    
    const x = e.pageX;
    const y = e.pageY;
    
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';
    
    border.style.left = x + 'px';
    border.style.top = y + 'px';
	
    border2.style.left = x + 'px';
	border2.style.top = x + 'px';
});







document.getElementById("about-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector("#section-about").scrollIntoView({
    behavior: "smooth"
  });
});



document.getElementById("moon-scroll").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector("#section-backtodigital").scrollIntoView({
    behavior: "smooth"
  });
});

document.getElementById("mymission-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector("#section-mission").scrollIntoView({
    behavior: "smooth"
  });
});


    document.getElementById("logo-refresh").addEventListener("click", function() {
        location.reload();
    });

document.getElementById("works-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector("#section-seo").scrollIntoView({
    behavior: "smooth"
  });
});
