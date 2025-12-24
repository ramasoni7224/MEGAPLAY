// ==================== LOADING SCREEN ====================
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
            loadingScreen.style.visibility = 'hidden';
            loadingScreen.style.opacity = '0';
            loadingScreen.style.pointerEvents = 'none';
        }
        
        if (mainContent) {
            mainContent.classList.add('show');
        }
    }, 3000);
});

function resetChess() {
    initChess();
}
