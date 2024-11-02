// Alternar modo oscuro
document.getElementById('toggleDarkMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    this.innerHTML = isDarkMode ? '<i class="bi bi-sun"></i> Modo Claro' : '<i class="bi bi-moon"></i> Modo Oscuro';
});

document.querySelectorAll('.sidebar nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});





