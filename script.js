window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');

    setTimeout(() => {
        splashScreen.style.opacity = 0;
        splashScreen.style.zIndex = -1;
    }, 4000); // Keep splash screen for 4 seconds

    setTimeout(() => {
        splashScreen.style.display = 'none';
    }, 5000); // Then hide it completely
});
