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
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 500);
    });

    /* 2. HAREKETLİ ÜST MENÜ (STICKY NAVBAR) EFEKTİ
       Sayfa aşağı kaydırıldığında menünün arka planının belirginleşmesini sağlar. */
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        // Sayfa 50 pikselden fazla aşağı kaydırıldıysa 'scrolled' sınıfını ekle
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            // En üste dönüldüğünde sınıfı kaldır (şeffaf hale geri dön)
            navbar.classList.remove('scrolled');
        }
    });

});