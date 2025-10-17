document.addEventListener('DOMContentLoaded', () => {
    const loadingOverlay = document.getElementById('loading-overlay');
    const mainContainer = document.querySelector('.container');

    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.visibility = 'hidden';

        // 2. Reveal the main content
        mainContainer.style.opacity = '1';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500); // Matches the CSS transition duration
    }, 1200); // Total time for animation to run
});
