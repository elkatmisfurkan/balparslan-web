/* ==========================================================================
   Balparslan Doğal Arı Ürünleri - Temel İşlev Dosyası (app.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. YÜKLEME EKRANI (PRELOADER) KONTROLÜ
       Sayfadaki tüm görseller ve metinler yüklendikten sonra çalışır. */
    const preloader = document.getElementById('preloader');
    
    window.addEventListener('load', () => {
        // Ziyaretçiye petek animasyonunu kısa bir süre gösterebilmek için 500ms (yarım saniye) gecikme ekliyoruz.
        setTimeout(() => {
            if (preloader) {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }
        }, 500);
    });

    /* 2. HAREKETLİ ÜST MENÜ (STICKY NAVBAR) VE LOGO DEĞİŞİM EFEKTİ
       Sayfa aşağı kaydırıldığında menünün arka planının belirginleşmesini ve logonun renklenmesini sağlar. */
    const navbar = document.getElementById('navbar');
    const brandLogo = document.getElementById('brand-logo'); // Logoyu seçiyoruz
    
    window.addEventListener('scroll', () => {
        // Sayfa 50 pikselden fazla aşağı kaydırıldıysa
        if (window.scrollY > 50) {
            if (navbar) navbar.classList.add('scrolled');
            // Menü beyazlayınca sarı-siyah logoya geç
            if (brandLogo) brandLogo.src = 'assets/icons/sarısiyah-logo.svg'; 
        } else {
            // En üste dönüldüğünde
            if (navbar) navbar.classList.remove('scrolled');
            // Arka plan karanlıkken siyah-beyaz (açık renk) logoya geri dön
            if (brandLogo) brandLogo.src = 'assets/icons/siyahbeyaz-logo.svg'; 
        }
    });

});