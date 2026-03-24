const root = document.documentElement;

window.addEventListener('load', function() {

    setTimeout(function() {
        var splash = document.getElementById('splash-screen');
        splash.style.opacity = '0';
        root.style.setProperty('--speed', '5'); // Red

        setTimeout(function() {
            splash.style.display = 'none';
        }, 500); // Time for the fade-out effect
    }, 1000); // Time to display the colored screen (2 seconds)
});
