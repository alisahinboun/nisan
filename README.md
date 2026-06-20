# 💍 Tuğba & Ali · Nişan Davetiyesi

Zin Haliç'te yapılacak nişan için hazırlanmış, **interaktif ve sürpriz dolu** bir davetiye web sitesi.

## ✨ Neler var?

- **Açılış sürprizi** — Site mühürlü bir zarf olarak başlar; ziyaretçi zarfı açınca
  içinden davetiye yükselir ve çiçek yaprakları havaya saçılır 🌸
- **Suluboya & peach pastel tema** — soft, sıcak, romantik renkler
- 🕊️ Uçuşan kuşlar ve kelebekler, süzülen çiçek yaprakları
- ⏳ Etkinliğe **canlı geri sayım**
- 📍 Mekân detayları + Google Haritalar yol tarifi
- 💌 **RSVP (katılım) formu** — isteğe bağlı WhatsApp bildirimi
- 🎵 Tek dokunuşla huzurlu çan müziği (dosya gerektirmez)
- 📱 Telefon, tablet ve masaüstüne uyumlu (responsive)

## 🚀 Çalıştırma

Statik bir sitedir, kurulum gerektirmez. `index.html` dosyasını bir tarayıcıda açmanız yeterli.

Yerel sunucu ile denemek isterseniz:

```bash
# Python
python3 -m http.server 8000
# sonra tarayıcıda: http://localhost:8000
```

## ⚙️ Bilgileri düzenleme

Tüm kişisel bilgiler **`js/main.js`** dosyasının en üstündeki `CONFIG` bloğunda:

```js
const CONFIG = {
  names:    { her: "Tuğba", him: "Ali" },
  venue:    "Zin Haliç",
  dateISO:  "2026-09-13T19:00:00",  // 👈 GERÇEK TARİH & SAATİ GİRİN
  mapQuery: "Zin Haliç İstanbul",
  rsvpWhatsApp: ""                  // RSVP için WhatsApp no: "905551112233"
};
```

> ⚠️ **Not:** `dateISO` içindeki tarih şu an bir **örnek tarihtir**. Geri sayımın ve
> ekrandaki tarihin doğru çalışması için lütfen gerçek nişan tarih ve saatini girin.

Metinleri değiştirmek için `index.html`, görünümü değiştirmek için `css/style.css`.

## 📁 Yapı

```
nisan/
├── index.html       # sayfa içeriği
├── css/style.css    # tema, animasyonlar, suluboya stiller
├── js/main.js       # zarf açılışı, kuşlar, geri sayım, RSVP, müzik
└── README.md
```

Sevgiyle hazırlandı 🤍
