document.addEventListener('DOMContentLoaded', function() {
    // === FUNGSI COPYRIGHT TAHUN OTOMATIS ===
    document.getElementById('copyright-year').textContent = new Date().getFullYear();

    // === FUNGSI UNTUK DARK MODE ===
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    let currentTheme = localStorage.getItem('theme') || 'light';

    const applyTheme = (theme) => {
        document.body.classList.toggle('dark-mode', theme === 'dark');
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    };
    
    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        currentTheme = currentTheme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });


    // === FUNGSI UNTUK TOMBOL SHARE ===
    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitleText = document.querySelector('.article-header h1').textContent.trim();
    const pageTitle = encodeURIComponent(pageTitleText);

    const shareLinks = {
        whatsapp: document.getElementById('share-whatsapp'),
        telegram: document.getElementById('share-telegram'),
        facebook: document.getElementById('share-facebook'),
        twitter: document.getElementById('share-twitter')
    };

    if (shareLinks.whatsapp) {
        shareLinks.whatsapp.href = `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`;
    }
    if (shareLinks.telegram) {
        shareLinks.telegram.href = `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`;
    }
    if (shareLinks.facebook) {
        shareLinks.facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    }
    if (shareLinks.twitter) {
        shareLinks.twitter.href = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}`;
    }
});