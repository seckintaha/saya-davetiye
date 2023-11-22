// Hedef tarih - düğün tarihi
const weddingDate = new Date('2023-12-23T19:00:00').getTime();

// Her 1 saniyede bir güncellenen bir sayaç
const countdown = setInterval(function () {
   // Şu anki tarih
   const now = new Date().getTime();

   // Kalan zaman
   const distance = weddingDate - now;

   // Zamanı hesapla
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const seconds = Math.floor((distance % (1000 * 60)) / 1000);

   // Sayaçı güncelle
   document.getElementById('countdown').innerHTML = `
       <p> Düğüne kalan süre: ${days} gün, ${hours} saat, ${minutes} dakika, ${seconds} saniye</p>
   `;

   // Eğer zaman dolarsa sayaçı durdur
   if (distance < 0) {
       clearInterval(countdown);
       document.getElementById('countdown').innerHTML = '<p>Düğün başladı!</p>';
   }
}, 1000);
