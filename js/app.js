/* ==========================================================================
   Balparslan Doğal Arı Ürünleri - Temel İşlev Dosyası (app.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* 1. YÜKLEME EKRANI (PRELOADER) KONTROLÜ
       Sayfadaki tüm görseller ve metinler yüklendikten sonra çalışır. */
    const preloader = document.getElementById('preloader');

    window.addEventListener('load', () => {
        // Yükleme süresi 1200ms (1.2 saniye) yapılarak daha yavaş ve şık bir giriş sağlandı
        setTimeout(() => {
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        }, 1200);
    });

    /* 2. HAREKETLİ ÜST MENÜ (STICKY NAVBAR) EFEKTİ
       Sayfa aşağı kaydırıldığında menünün arka planının beyazlaşmasını sağlar. */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        // Sayfa 50 pikselden fazla aşağı kaydırıldıysa beyaz arka planı (scrolled sınıfını) ekle
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
        } else {
            // En üste dönüldüğünde şeffaf hale geri dön
            if (navbar) navbar.classList.remove('scrolled');
        }
    });

    /* 3. MOBİL MENÜ KONTROLÜ
       Hamburger ikonuna tıklanınca menüyü açıp kapatır. */
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // İkonu değiştir (Hamburger <-> Çarpı)
            const icon = mobileMenuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Menüdeki bir linke tıklandığında menüyü kapat
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }

});