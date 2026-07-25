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

## 🏡 Yeni Ev Rehberi (`ev/`)

Nişandan sonrası için ikinci bir sayfa: **çatal kaşıktan televizyona** yeni kurulacak
bir evin tüm ihtiyaçlarını kapsayan alışveriş rehberi.

- **24 kategori · 216 ürün önerisi** — her kategoride *ekonomik*, *dengeli* ve *premium*
  bandından **üçer ürün**, toplam 9 alternatif
- Ürünler Hepsiburada'da **çok değerlendirilen ve yüksek puanlı** (hedef 4,3+) modeller
  arasından seçildi; hazırlık sırasında birebir görülen puanlar `doğrulandı` rozetiyle işaretli
- Her kartta kısa **yorum özeti** ve doğrudan **Hepsiburada bağlantısı**
- Her kategoride "Ne almalı?" ipucu (kaç litre, kaç kg, hangi özellik şart)
- Arama, bölüm/bütçe filtreleri ve tarayıcıda saklanan **alışveriş listesi** (yazdırılabilir)

Açmak için: `ev/index.html`

> ℹ️ Fiyat yazılmadı — sürekli değiştiği için ürünler yalnızca fiyat bandına yerleştirildi.
> Puanlar Temmuz 2026 araştırmasına aittir; güncel bilgi için ürün bağlantısına bakın.

## 📁 Yapı

```
nisan/
├── index.html          # nişan davetiyesi
├── css/style.css       # tema, animasyonlar, suluboya stiller
├── js/main.js          # zarf açılışı, kuşlar, geri sayım, RSVP, müzik
├── ev/                 # 🏡 yeni ev alışveriş rehberi
│   ├── index.html
│   ├── css/style.css
│   └── js/
│       ├── data-a.js   # beyaz eşya, elektronik, küçük ev aletleri
│       ├── data-b.js   # mutfak, sofra takımları, ev tekstili
│       └── app.js      # arama, filtreler, alışveriş listesi
└── README.md
```

Sevgiyle hazırlandı 🤍
