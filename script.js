document.getElementById('current-year').textContent = new Date().getFullYear();

// Script untuk menu dan dark mode
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuOverlay = document.getElementById('menu-overlay');
    const menuClose = document.getElementById('menu-close');
    const headerDarkModeToggle = document.getElementById('header-dark-mode-toggle');
    const menuDarkModeToggle = document.getElementById('menu-dark-mode-toggle');
    const headerDarkModeIcon = headerDarkModeToggle.querySelector('i');
    const menuDarkModeIcon = menuDarkModeToggle.querySelector('i');

    const toggleOverlay = (overlay, isActive) => {
        overlay.classList.toggle('active', isActive);
        document.body.style.overflow = isActive ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleOverlay(menuOverlay, true));
    menuClose.addEventListener('click', () => toggleOverlay(menuOverlay, false));
    
    const applyTheme = (theme) => {
        const isDark = theme === 'dark';
        document.body.classList.toggle('dark-mode', isDark);
        if (headerDarkModeIcon) {
            headerDarkModeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
        if (menuDarkModeIcon) {
            menuDarkModeIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        }
    };
    
    let currentTheme = localStorage.getItem('theme') || 'light';
    applyTheme(currentTheme);

    const toggleTheme = () => {
        currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
        applyTheme(currentTheme);
        localStorage.setItem('theme', currentTheme);
    };

    if (headerDarkModeToggle) {
        headerDarkModeToggle.addEventListener('click', toggleTheme);
    }
    if (menuDarkModeToggle) {
        menuDarkModeToggle.addEventListener('click', toggleTheme);
    }
});

// SAFELINKU SCRIPT - This part should remain in the HTML file, right before the closing </body> tag.
/*
<script type='text/javascript'>
    var go_url = 'https://sfl.gl/';
    var api = '6bfc784a0c37d08953c3ee93f5ebbeadbe013444';
    var shorten_includ = ["yippieshare.com", "www.mediafire.com", "safefileku.com", "gofile.io", "store2.gofile.io", "subs4unlock.id"];
</script>
<script src='//safelinku.com/js/web-script.js'></script>
*/