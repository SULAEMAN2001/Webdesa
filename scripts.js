document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('nav ul li a');
    const pages = document.querySelectorAll('.page');

    function navigate(targetId) {
        pages.forEach(page => {
            if (page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('data-target');
            navigate(targetId);
        });
    });

    // Display the home page by default
    navigate('home');
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah dikirim.`);
        document.getElementById('contact-form').reset();
    } else {
        alert('Silakan isi semua field.');
    }
    document.addEventListener('DOMContentLoaded', () => {
        const peacock = document.querySelector('.peacock');
    
        peacock.addEventListener('mouseover', () => {
            peacock.style.animation = 'peacockMoveHover 5s ease-in-out infinite';
        });
    
        peacock.addEventListener('mouseout', () => {
            peacock.style.animation = 'peacockMove 10s ease-in-out infinite';
        });
    });
});
