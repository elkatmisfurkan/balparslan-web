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

});