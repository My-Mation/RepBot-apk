window.addEventListener('load', () => {
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        splashScreen.style.opacity = 0;
        splashScreen.style.zIndex = -1;
    }, 4000); // Keep splash screen for 4 seconds

    setTimeout(() => {
        splashScreen.style.display = 'none';
        mainContent.style.opacity = 1;
    }, 5000); // Then hide it completely and fade in the main content
});
