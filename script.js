// Tunggu sampai seluruh DOM selesai dimuat
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efek Sticky Navbar saat di-scroll
    const navbar = document.querySelector('.nav-glass');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-scrolled');
            // Menambahkan sedikit bayangan ekstra saat di-scroll
            navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.classList.remove('nav-scrolled');
            navbar.style.boxShadow = 'none';
        }
    });

    // 2. Smooth Scroll untuk Link Anchor (Tombol "Belanja Sekarang")
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Menghitung offset navbar agar tidak menutupi konten
                const navbarHeight = navbar.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Handler Sederhana untuk Tombol Login
    const loginBtn = document.querySelector('.btn-main[href="#"]');
    if (loginBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Fitur Login sedang dalam pengembangan. Silakan hubungi admin untuk transaksi langsung!');
        });
    }

    // 4. Otomatis menutup Navbar Toggler (Mobile) saat link diklik
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Cek apakah navbar dalam posisi terbuka (Bootstrap class 'show')
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide
