const button = document.getElementById('themeChange');

button.addEventListener('click', function() {
    document.body.classList.toggle('new-theme');
});