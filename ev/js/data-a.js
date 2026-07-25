/* ============================================================
   YENİ EV REHBERİ · Ürün verisi — Bölüm A
   Beyaz eşya, elektronik ve küçük ev aletleri
   ------------------------------------------------------------
   r  : Hepsiburada ürün puanı (araştırma sırasında görülen)
   c  : değerlendirme sayısı
   v  : true ise puan/yorum verisi araştırmada birebir doğrulandı
   s  : yorum özeti (Hepsiburada kullanıcı değerlendirmelerinden)
   u  : Hepsiburada bağlantısı
   ============================================================ */
window.EV_DATA = window.EV_DATA || [];

const hbAra = (q) => "https://www.hepsiburada.com/ara?q=" + encodeURIComponent(q);

window.EV_DATA.push(

/* 1 ───────────────────────── TELEVİZYON ───────────────────── */
{
  id: "televizyon", icon: "📺", group: "Elektronik", name: "Televizyon",
  tip: "Salon için 50–55\", yatak odası için 43\" fazlasıyla yeterli. 4K çözünürlük + Google TV/Tizen arayüz ve en az 2 HDMI şart. Oyun oynayacaksanız 120Hz panele bakın.",
  hb: "https://www.hepsiburada.com/led-tv-televizyonlar-c-163192",
  items: [
    { t:"eko", b:"Samsung", n:"Samsung 43\" Crystal UHD 4K Smart TV (DU7000 serisi)", r:4.4, c:250, v:true,
      s:"Yatak odası ve mutfak için en çok tercih edilen boy. Yorumlarda görüntü netliği ve Tizen arayüzünün akıcılığı övülüyor; sesi zayıf bulanlar soundbar öneriyor.",
      u:"https://www.hepsiburada.com/samsung/led-tv-televizyonlar-c-163192?filtreler=ekranebati%3A43%E2%82%AC20in%E2%82%ACC3%E2%82%ACA7%E2%82%AC20%E2%82%AC2F%E2%82%AC20109%E2%82%AC20cm" },
    { t:"eko", b:"TCL", n:"TCL 43\" 4K Ultra HD Google TV", r:null, c:null,
      s:"Fiyat/performansta ilk sırada anılan marka. Google TV arayüzü sayesinde kurulumdan sonra ek cihaz gerektirmiyor.", u:hbAra("TCL 43 inç 4K Google TV") },
    { t:"eko", b:"Philips", n:"Philips 43\" 4K Ultra HD Smart LED TV", r:null, c:null,
      s:"Ambilight'sız giriş modelleriyle bütçe dostu; kullanıcılar renk kalitesini fiyatına göre başarılı buluyor.", u:hbAra("Philips 43 inç 4K Smart TV") },

    { t:"orta", b:"TCL", n:"TCL 50C645 50\" 4K Ultra HD Smart QLED TV", r:null, c:773,
      s:"773 değerlendirmeyle kategorinin en çok yorumlananlarından. QLED panelin renk doygunluğu ve fiyatı en sık övülen iki başlık.",
      u:"https://www.hepsiburada.com/tcl-50c645-50-127-ekran-dahili-uydu-alicili-4k-ultra-hd-smart-qled-tv-pm-HBC00004ORWI3" },
    { t:"orta", b:"TCL", n:"TCL 55C6K 55\" 4K Ultra HD MiniLED Google TV", r:null, c:138,
      s:"Yorumlarda \"siyahlar çok iyi, parlaklık yüksek\" ve \"144Hz oyunlarda ekstra kalite sağlıyor\" geri bildirimleri öne çıkıyor.",
      u:"https://www.hepsiburada.com/tcl-55c6k-55-139-ekran-uydu-alicili-4k-ultra-hd-miniled-google-tv-pm-HBC00009H55RO-yorumlari" },
    { t:"orta", b:"Samsung", n:"Samsung 55\" QLED 4K Smart TV (Q60 serisi)", r:4.6, c:157, v:true,
      s:"Salon için en dengeli boy/teknoloji ikilisi. Quantum Dot renk ve ince kasa tasarımı yorumlarda tekrar tekrar geçiyor.",
      u:"https://www.hepsiburada.com/samsung/led-tv-televizyonlar-c-163192?filtreler=cozunurluk%3A4K%E2%82%AC20Ultra%E2%82%AC20HD" },

    { t:"pahali", b:"TCL", n:"TCL 65P6K 65\" 4K Ultra HD Google Smart LED TV", r:null, c:null,
      s:"65\" büyük ekranı uygun fiyatla veren model; geniş salonlarda tercih ediliyor.",
      u:"https://www.hepsiburada.com/tcl-65p6k-65-165-ekran-uydu-alicili-4k-ultra-hd-google-smart-led-tv-pm-HBC0000D0RHOT" },
    { t:"pahali", b:"LG", n:"LG OLED 55\" evo 4K Smart TV (C serisi)", r:4.6, c:15, v:true,
      s:"Sinema keyfi arayanların referans modeli: mükemmel siyahlar, 120Hz oyun modu. Yorumlarda \"bir kez OLED gördükten sonra geri dönülmüyor\" vurgusu var.",
      u:"https://hepsiburada.com/lg/led-tv-televizyonlar-c-163192?sayfa=2" },
    { t:"pahali", b:"Samsung", n:"Samsung 65\" Neo QLED 4K Smart TV (QN85 serisi)", r:4.7, c:63, v:true,
      s:"MiniLED arka aydınlatma ile aydınlık salonlarda bile yüksek parlaklık; premium segmentte en çok önerilen Samsung.",
      u:"https://www.hepsiburada.com/samsung/led-tv-televizyonlar-c-163192?filtreler=cozunurluk%3A4K%E2%82%AC20Ultra%E2%82%AC20HD" }
  ]
},

/* 2 ───────────────────────── BUZDOLABI ───────────────────── */
{
  id: "buzdolabi", icon: "❄️", group: "Beyaz Eşya", name: "Buzdolabı",
  tip: "İki kişilik yeni bir ev için 450–550 lt yeterli, ileriye dönük düşünüyorsanız 550 lt+ alın. No-Frost şart; enerji sınıfı E ve üstü uzun vadede faturayı ciddi düşürür.",
  hb: "https://www.hepsiburada.com/buzdolaplari-c-22154",
  items: [
    { t:"eko", b:"Vestel", n:"Vestel NFK52011 X 471 lt No-Frost Buzdolabı", r:4.7, c:45, v:true,
      s:"Yorumlarda sessiz çalışması, geniş bölmeleri ve düşük elektrik tüketimi öne çıkıyor. Giriş segmentte en yüksek puanlı modellerden.",
      u:"https://www.hepsiburada.com/vestel-nfk52011-x-471-lt-e-enerji-sinifi-no-frost-buzdolabi-pm-HBC000065SBGG" },
    { t:"eko", b:"Beko", n:"Beko No-Frost Üstten Donduruculu Buzdolabı (500 lt sınıfı)", r:null, c:null,
      s:"Servis ağı ve yedek parça erişimi Türkiye'de en güçlü markalardan; ilk ev için güvenli tercih.", u:hbAra("Beko no frost buzdolabı 500 lt") },
    { t:"eko", b:"Arçelik", n:"Arçelik No-Frost Buzdolabı (küçük aile boy)", r:null, c:null,
      s:"Kullanıcılar dayanıklılık ve servis hızından memnun; ekonomik segmentte en çok satanlar arasında.", u:hbAra("Arçelik no frost buzdolabı") },

    { t:"orta", b:"Samsung", n:"Samsung RT46K6000WW/TR No-Frost Buzdolabı", r:4.7, c:1713, v:true,
      s:"1.700'ü aşkın değerlendirmeyle kategorinin en güvenilir referansı. \"Sessiz çalışıyor, 2,5 litrelik şişe rahat giriyor\" yorumları çok tekrar ediyor.",
      u:"https://www.hepsiburada.com/samsung-rt46k6000ww-tr-no-frost-buzdolabi-pm-mtsamrt46k6000wwtr-yorumlari" },
    { t:"orta", b:"Vestel", n:"Vestel Puzzle NF655 X 655 lt No-Frost Buzdolabı", r:4.4, c:36, v:true,
      s:"655 lt hacmiyle çok geniş; kalabalık misafir ağırlayanlar için ideal. Rafların esnekliği beğeniliyor.",
      u:"https://www.hepsiburada.com/vestel-puzzle-nf655-x-a-655-lt-no-frost-buzdolabi-pm-mtves20216006-yorumlari" },
    { t:"orta", b:"Beko", n:"Beko 684630 EI No-Frost Buzdolabı", r:null, c:null,
      s:"Geniş iç hacim ve inox kaplama. Yorumlarda sessizliği ve soğutma dengesi olumlu değerlendiriliyor.",
      u:"https://www.hepsiburada.com/beko-684630-ei-no-frost-buzdolabi-pm-HBC000011BHJP-yorumlari" },

    { t:"pahali", b:"Samsung", n:"Samsung RB58DS75EWW/TR 580 lt Alttan Donduruculu İkili Soğutma", r:4.3, c:29, v:true,
      s:"Alttan donduruculu tasarım günlük kullanımda çok pratik; ikili soğutma sayesinde kokular karışmıyor.",
      u:"https://www.hepsiburada.com/samsung-rb58ds75eww-tr-580-lt-alttan-donduruculu-ikili-sogutma-no-frost-buzdolabi-pm-HBC00006OONDA-yorumlari" },
    { t:"pahali", b:"Bosch", n:"Bosch Serie 4 Alttan Donduruculu No-Frost Buzdolabı (XXL)", r:null, c:null,
      s:"Sessizlik ve yapı kalitesi konusunda kullanıcıların en çok referans verdiği premium marka.", u:hbAra("Bosch alttan donduruculu no frost buzdolabı") },
    { t:"pahali", b:"LG", n:"LG Door-in-Door Gardırop Tipi Buzdolabı", r:null, c:null,
      s:"Geniş mutfaklarda gösterişli duruyor; su/buz ünitesi ve inverter kompresör garantisi öne çıkıyor.", u:hbAra("LG gardırop tipi buzdolabı door in door") }
  ]
},

/* 3 ──────────────────── ÇAMAŞIR MAKİNESİ ──────────────────── */
{
  id: "camasir", icon: "🌀", group: "Beyaz Eşya", name: "Çamaşır Makinesi",
  tip: "İki kişi için 8–9 kg ideal, nevresim yıkayacaksanız 10 kg alın. 1200 devir günlük kullanım için yeterli; balkonunuz yoksa kurutmalı modelleri değerlendirin.",
  hb: "https://www.hepsiburada.com/camasir-makineleri-c-155121",
  items: [
    { t:"eko", b:"Altus", n:"Altus AL 9103 D 9 kg 1000 Devir Çamaşır Makinesi", r:null, c:688,
      s:"688 değerlendirme: \"ses konusunda başarılı\", \"ekstra su alma tuşu iyi düşünülmüş\" ve servis memnuniyeti öne çıkan başlıklar.",
      u:"https://www.hepsiburada.com/altus-al-9103-d-1000-devir-9-kg-camasir-makinesi-pm-HBC00000D29Q5-yorumlari" },
    { t:"eko", b:"Beko", n:"Beko CMXD 9100 9 kg 1000 Devir Çamaşır Makinesi", r:null, c:151,
      s:"\"Sessizliği harika, sıkma sırasında titreşimi çok düşük\"; yıkama süreleri uzun ama su/elektrik tasarrufu sağlıyor.",
      u:"https://www.hepsiburada.com/beko-cmxd-9100-9-kg-camasir-makinesi-c-enerji-sinifi-1000-devir-hizi-ile-guclu-yikama-pm-HBC000072SUTS-yorumlari" },
    { t:"eko", b:"Arçelik", n:"Arçelik 9103 YP 9 kg 1000 Devir Çamaşır Makinesi", r:null, c:null,
      s:"Uzun yıllar sorunsuz kullanım ve kolay bulunan servis, yorumlarda en çok tekrarlanan iki madde.",
      u:"https://www.hepsiburada.com/arcelik-9103-yp-9-kg-1000-devir-camasir-makinesi-pm-HB000002E4DA-yorumlari" },

    { t:"orta", b:"Samsung", n:"Samsung WW90T4020CE/AH 9 kg 1200 Devir Çamaşır Makinesi", r:4.6, c:2750, v:true,
      s:"2.750 değerlendirme: \"çok sessiz çalışıyor\", \"çok temiz yıkıyor\", \"bitince kendini otomatik kapatıyor\". Kategorinin en güvenli seçimi.",
      u:"https://www.hepsiburada.com/samsung-ww90t4020ce-ah-9-kg-1200-devir-camasir-makinesi-pm-HBC0000063MGT-yorumlari" },
    { t:"orta", b:"Beko", n:"Beko 9 kg 1200 Devir Buharlı Çamaşır Makinesi", r:4.6, c:20, v:true,
      s:"Buhar programı alerjik ciltler için tercih ediliyor; enerji tüketimi düşük.",
      u:"https://www.hepsiburada.com/beko/camasir-makineleri-c-155121?filtreler=yikamakapasitesi:9%E2%82%AC20kg" },
    { t:"orta", b:"Altus", n:"Altus AL 9103 DB 9 kg 1000 Devir Çamaşır Makinesi", r:null, c:688,
      s:"Fiyatına göre yıkama başarısı ve sessizliğiyle uzun süredir listelerin başında.",
      u:"https://www.hepsiburada.com/altus-al-9103-db-1000-devir-9-kg-camasir-makinesi-pm-HBC000005UCB9-yorumlari" },

    { t:"pahali", b:"Samsung", n:"Samsung 11 kg EcoBubble AI Çamaşır Makinesi", r:4.6, c:64, v:true,
      s:"Yüksek kapasite + köpük teknolojisi: soğuk suda bile iyi temizlik. Nevresim ve yorgan yıkayanlar için.",
      u:"https://www.hepsiburada.com/samsung/camasir-makineleri-c-155121?filtreler=yikamakapasitesi%3A11%E2%82%AC20kg" },
    { t:"pahali", b:"LG", n:"LG F4J8FHP2S 9 kg Yıkama / 6 kg Kurutma Kurutmalı Çamaşır Makinesi", r:null, c:33,
      s:"\"Yıkaması ve kurutması oldukça yeterli ve kaliteli, tavsiye ederim\" — balkonu olmayan daireler için doğru çözüm.",
      u:"https://www.hepsiburada.com/lg-f4j8fhp2s-a-9-kg-yikama-6-kg-kurutma-1400-devir-camasir-makinesi-pm-HB000007B06F-yorumlari" },
    { t:"pahali", b:"Bosch", n:"Bosch Serie 6 9 kg 1400 Devir Çamaşır Makinesi", r:null, c:null,
      s:"Sessizlik, titreşim yalıtımı ve uzun ömür beklentisiyle premium segmentin standardı.", u:hbAra("Bosch Serie 6 çamaşır makinesi 9 kg") }
  ]
},

/* 4 ──────────────────── BULAŞIK MAKİNESİ ──────────────────── */
{
  id: "bulasik", icon: "🍽️", group: "Beyaz Eşya", name: "Bulaşık Makinesi",
  tip: "İki kişi için bile 13 kişilik alın — tencere ve tepsiler yer kaplıyor. Kurutma performansı ve sessizlik (dB değeri) fiyattan daha önemli.",
  hb: "https://www.hepsiburada.com/bulasik-makineleri-c-22156",
  items: [
    { t:"eko", b:"Altus", n:"Altus AL 404 MP 4 Programlı Bulaşık Makinesi", r:4.7, c:855, v:true,
      s:"Alt puanlar: yıkama 4,7 · sessizlik 4,4 · enerji 4,4 · programlar 4,6. Fiyatına göre en dengeli makine.",
      u:"https://www.hepsiburada.com/altus-al-404-mp-4-programli-bulasik-makinesi-pm-HBC00001X7YVY-yorumlari" },
    { t:"eko", b:"Vestel", n:"Vestel BM 3111 3 Programlı Bulaşık Makinesi", r:4.5, c:1292, v:true,
      s:"1.292 değerlendirme. Yıkama 4,6 · sessizlik 4,2 · enerji 4,2. Yeni ev kuranların en sık aldığı giriş modeli.",
      u:"https://www.hepsiburada.com/vestel-bm-3111-3-programli-bulasik-makinesi-pm-HBC00000438V1-yorumlari" },
    { t:"eko", b:"Arçelik", n:"Arçelik 6144 Beyaz 4 Programlı Bulaşık Makinesi", r:4.7, c:172, v:true,
      s:"Yıkama 4,7 · sessizlik 4,5 · programlar 4,6. Servis kolaylığıyla birlikte çok güvenli bir tercih.",
      u:"https://www.hepsiburada.com/arcelik-6144-beyaz-4-programli-bulasik-makinesi-pm-HBC00000PE98C-yorumlari" },

    { t:"orta", b:"Altus", n:"Altus AL 445 NX 5 Programlı Bulaşık Makinesi", r:null, c:2209,
      s:"2.209 değerlendirmeyle kategorinin en çok yorumlananı; 5 program ve inox gövde bu fiyata zor bulunuyor.",
      u:"https://www.hepsiburada.com/altus-al-445-nx-5-programli-bulasik-makinesi-pm-HBC00000381NJ-yorumlari" },
    { t:"orta", b:"Profilo", n:"Profilo BMS421E3 4 Programlı 13 Kişilik Wi-Fi'lı Bulaşık Makinesi", r:null, c:null,
      s:"Home Connect ile telefondan kontrol; 13 kişilik kapasite yeni evler için en doğru boy.",
      u:"https://www.hepsiburada.com/profilo-bms421e3-4-programli-13-kisilik-bulasik-makinesi-wi-fi-ozelikli-pm-HBC00004L24C7-yorumlari" },
    { t:"orta", b:"Grundig", n:"Grundig GPDF 5701 5 Programlı Bulaşık Makinesi", r:null, c:null,
      s:"Kurutma performansı ve sessiz çalışma en çok övülen iki başlık.",
      u:"https://www.hepsiburada.com/grundig-gpdf-5701-5-programli-bulasik-makinesi-pm-HBC000034J25M-yorumlari" },

    { t:"pahali", b:"Profilo", n:"Profilo BMS481E3 5 Programlı 13 Kişilik Bulaşık Makinesi", r:4.8, c:32, v:true,
      s:"Kategorinin en yüksek puanlısı: yıkama 4,9 · sessizlik 4,7 · programlar 4,9. Fiyatı hak ediyor.",
      u:"https://www.hepsiburada.com/profilo-bms481e3-d-enerji-sinifi-5-programli-13-kisilik-bulasik-makinesi-pm-HBC00004L7CJP-yorumlari" },
    { t:"pahali", b:"Bosch", n:"Bosch Serie 6 13 Kişilik Bulaşık Makinesi", r:null, c:null,
      s:"Zeolith kurutma ve düşük ses seviyesiyle premium segmentin referansı.", u:hbAra("Bosch Serie 6 bulaşık makinesi") },
    { t:"pahali", b:"Siemens", n:"Siemens iQ300 13 Kişilik Bulaşık Makinesi", r:null, c:null,
      s:"varioSpeed hızlı program ve iç aydınlatma; uzun ömür beklentisi yüksek.", u:hbAra("Siemens iQ300 bulaşık makinesi") }
  ]
},

/* 5 ───────────────────── ANKASTRE SET ─────────────────────── */
{
  id: "ankastre", icon: "🔥", group: "Beyaz Eşya", name: "Ankastre Set (Fırın · Ocak · Davlumbaz)",
  tip: "Üçlü set almak tek tek almaktan hem ucuz hem de görsel olarak uyumlu oluyor. Fırında turbo fan, ocakta emniyet ventili (gaz kesme), davlumbazda en az 3 kademe arayın.",
  hb: "https://www.hepsiburada.com/ankastre-setler-c-234329",
  items: [
    { t:"eko", b:"Kumtel", n:"Kumtel Kristal Plus Beyaz Cam Ankastre Set (Fırın + Ocak + Davlumbaz)", r:null, c:null,
      s:"Bütçe dostu üçlü set; beyaz cam tasarımıyla açık renk mutfaklara uyuyor.",
      u:"https://www.hepsiburada.com/kumtel-kristal-plus-beyaz-cam-ankastre-b66-sf2-mt-firin-40-tahdf-ocak-da-6-835-davlumbaz-pm-HB00000SD4EQ-yorumlari" },
    { t:"eko", b:"Altus", n:"Altus 3'lü Ankastre Set (Fırın + Cam Ocak + Davlumbaz)", r:null, c:null,
      s:"Arçelik grubu güvencesi ve yaygın servis; giriş segmentte en çok tercih edilenlerden.",
      u:"https://www.hepsiburada.com/altus-ankastre-setler-xc-234329-b24888" },
    { t:"eko", b:"Luxell", n:"Luxell Ankastre Set (Fırın + Ocak + Davlumbaz)", r:null, c:null,
      s:"Uygun fiyat/geniş fırın hacmi dengesiyle ilk ev kuranların listesinde.", u:hbAra("Luxell ankastre set fırın ocak davlumbaz") },

    { t:"orta", b:"Teka", n:"Teka Chef 6 Ankastre Set (HAK 625 Fırın + GBE 64002 Ocak + ATV 60 Davlumbaz)", r:null, c:9,
      s:"Yorumlarda \"olağanüstü ve kaliteli bir ürün\" ifadesi öne çıkıyor; İspanyol marka, malzeme kalitesi belirgin.",
      u:"https://www.hepsiburada.com/teka-chef-6-ankastre-set-hak-625-wh-firin-gbe-64002-kbc-wh-ocak-atv-60-davlumbaz-beyaz-64000466-pm-HBC00004SDK81-yorumlari" },
    { t:"orta", b:"Beko", n:"Beko Gri Cam Avantaj 3'lü Ankastre Set", r:null, c:null,
      s:"Gri cam tasarım ve Beko servis ağı; orta segmentte en dengeli paketlerden.",
      u:"https://www.hepsiburada.com/beko-yeni-gri-cam-avantaj-set-3-lu-ankastre-set-firin-ocak-davlumbaz-pm-HBC00004SC71G" },
    { t:"orta", b:"Alveus", n:"Alveus Siyah Ankastre Set (F17 Davlumbaz + GLS 640 Ocak + MFA 604 Fırın)", r:null, c:16,
      s:"Siyah cam kombinasyonu modern mutfaklarda çok beğeniliyor.",
      u:"https://www.hepsiburada.com/alveus-siyah-ankastre-set-f17-davlumbaz-gls-640-ocak-mfa-604-firin-pm-HB00000QTPVB" },

    { t:"pahali", b:"Bosch", n:"Bosch Beyaz Ankastre Set (HBF534EW0T Fırın + POP6C2O10O Ocak + DWK65AD20R Davlumbaz)", r:null, c:null,
      s:"Premium segmentin en güvenli üçlüsü: 3D sıcak hava fırın, güçlü davlumbaz emişi ve uzun ömür.",
      u:"https://www.hepsiburada.com/bosch-beyaz-ankastre-set-hbf534ew0t-firin-pop6c2o10o-ocak-dwk65ad20r-davlumbaz-pm-HBC000037GCUE" },
    { t:"pahali", b:"Siemens", n:"Siemens iQ300 Ankastre Set (Fırın + Ocak + Davlumbaz)", r:null, c:null,
      s:"activeClean temizleme ve hassas sıcaklık kontrolü; yemek yapmayı sevenler için.", u:hbAra("Siemens iQ300 ankastre set") },
    { t:"pahali", b:"Teka", n:"Teka Ankastre Set (HAK 627N Fırın + TZ 6415 Ocak + ATV 60 Davlumbaz)", r:null, c:null,
      s:"Üst seviye Teka kombinasyonu; profesyonel mutfak hissi veren malzeme kalitesi.",
      u:"https://www.hepsiburada.com/teka-ankastre-set-hak-627n-firin-tz-6415-ocak-atv-60-davlumbaz-pm-HB0000131753" }
  ]
},

/* 6 ─────────────────────────── KLİMA ──────────────────────── */
{
  id: "klima", icon: "🌬️", group: "Beyaz Eşya", name: "Klima",
  tip: "Salon (30–35 m²) için 12000 BTU, yatak odası için 9000 BTU yeterli. Mutlaka inverter alın — hem sessiz hem faturayı yarıya indiriyor. Montaj bedelini bütçeye ekleyin.",
  hb: "https://www.hepsiburada.com/klimalar-c-17453",
  items: [
    { t:"eko", b:"Vestel", n:"Vestel Flora 12000 BTU A++ Duvar Tipi Inverter Klima", r:4.5, c:2815, v:true,
      s:"Vestel'in 12000 BTU ailesi 2.815 değerlendirmeyle 4,5 puanda. Sessizlik ve hızlı soğutma en çok övülen başlıklar.",
      u:"https://www.hepsiburada.com/vestel-flora-a-12000-btu-duvar-tipi-inverter-klima-pm-HB000006M30M-yorumlari" },
    { t:"eko", b:"Arçelik", n:"Arçelik Ekolojik 12325 A 12000 BTU A++ Inverter Klima", r:null, c:848,
      s:"848 değerlendirme; ekonomik inverter arayanların en çok aldığı model. Servis ağı geniş.",
      u:"https://www.hepsiburada.com/arcelik-ekolojik-12325-a-12000-btu-a-inverter-duvar-tipi-klima-pm-HB00000BSSUH-yorumlari" },
    { t:"eko", b:"Beko", n:"Beko 12000 BTU A++ Duvar Tipi Inverter Klima", r:null, c:null,
      s:"Fiyat/performans dengesi iyi; filtreleme ve gece modu yorumlarda olumlu.", u:hbAra("Beko 12000 BTU inverter klima") },

    { t:"orta", b:"Arçelik", n:"Arçelik 12605 Neo Inverter A++ 12000 BTU Duvar Tipi Klima", r:null, c:92,
      s:"Yeni nesil Neo serisi: daha sessiz iç ünite ve daha hızlı soğutma.",
      u:"https://www.hepsiburada.com/arcelik-12605-neo-inverter-a-12000-btu-duvar-tipi-klima-pm-HBC0000621PDP-yorumlari" },
    { t:"orta", b:"Samsung", n:"Samsung WindFree 12000 BTU Inverter Klima", r:null, c:null,
      s:"Rüzgarsız soğutma teknolojisi sayesinde üşütmeden serinletiyor; uyku modunda çok sessiz.", u:hbAra("Samsung WindFree 12000 BTU klima") },
    { t:"orta", b:"Vestel", n:"Vestel Vega Plus 12000 BTU Inverter Klima", r:null, c:null,
      s:"Yerli üretim, uygun fiyat ve düşük enerji tüketimi; ikinci oda için tercih ediliyor.", u:hbAra("Vestel Vega Plus 12000 BTU klima") },

    { t:"pahali", b:"Mitsubishi Electric", n:"Mitsubishi Electric 12000 BTU Inverter Duvar Tipi Klima", r:null, c:null,
      s:"Sessizlikte kategorinin referansı; uzun ömür ve düşük tüketim beklentisi yüksek.",
      u:"https://www.hepsiburada.com/mitsubishi-klimalar-xc-17453-b34155" },
    { t:"pahali", b:"Daikin", n:"Daikin Sensira 12000 BTU Inverter Klima", r:null, c:null,
      s:"Japon mühendisliği; ısıtma performansı da güçlü olduğu için kışın destek ısıtıcı olarak kullanılıyor.", u:hbAra("Daikin Sensira 12000 BTU klima") },
    { t:"pahali", b:"LG", n:"LG DualCool 12000 BTU Inverter Klima", r:null, c:null,
      s:"Çift rotorlu kompresör ve 10 yıl kompresör garantisi öne çıkıyor.", u:hbAra("LG DualCool 12000 BTU inverter klima") }
  ]
},

/* 7 ─────────────────────── ROBOT SÜPÜRGE ──────────────────── */
{
  id: "robot-supurge", icon: "🤖", group: "Temizlik", name: "Robot Süpürge",
  tip: "Evde tüylü dostunuz varsa emiş gücü 4000 Pa üstü olsun. Lazer (LDS) haritalama, kamera-sız modellerden çok daha isabetli temizliyor. Toz boşaltma istasyonu lüks değil, konfor.",
  hb: "https://www.hepsiburada.com/robot-supurge-c-80160033",
  items: [
    { t:"eko", b:"Dreame", n:"Dreame Vacuum Mop F9 Robot Süpürge", r:null, c:null,
      s:"Giriş seviyesinde lazer haritalama sunan ilk modellerden; paspas özelliğiyle birlikte fiyatı çok iyi.",
      u:"https://www.hepsiburada.com/dreame-vacuum-mop-f9-robot-supurge-pm-HB00000Y7496-yorumlari" },
    { t:"eko", b:"Xiaomi", n:"Xiaomi Mi Robot Vacuum-Mop 2 Pro Robot Süpürge", r:null, c:null,
      s:"Uygulama entegrasyonu ve haritalama başarısı bu fiyat bandının üstünde; en çok önerilen giriş modeli.",
      u:"https://www.hepsiburada.com/xiaomi-mi-robot-vacuum-mop-pro-2-3d-global-versiyon-siyah-robot-supurge-pm-HB00001ACO77-yorumlari" },
    { t:"eko", b:"Xiaomi", n:"Xiaomi Robot Vacuum E Serisi Robot Süpürge", r:4.3, c:null, v:true,
      s:"İlk robot süpürgesini alacaklar için güvenli başlangıç; tek şarjla 150–200 m² temizleyebiliyor.",
      u:"https://www.hepsiburada.com/xiaomi-robot-supurge-xc-80160033-b1123" },

    { t:"orta", b:"Roborock", n:"Roborock Q7 Max Akıllı Robot Süpürge", r:null, c:640,
      s:"640 değerlendirme; 4200 Pa emiş ve isabetli haritalamayla orta segmentin en çok önerileni.",
      u:"https://www.hepsiburada.com/roborock-q7-max-akilli-robot-supurge-beyaz-pm-HBC00002H4FKH-yorumlari" },
    { t:"orta", b:"Dreame", n:"Dreame D10S Plus Robot Süpürge (LDS + 5000 Pa)", r:null, c:null,
      s:"5000 Pa emiş ve otomatik toz boşaltma istasyonu; halılarda belirgin fark yaratıyor.",
      u:"https://www.hepsiburada.com/dreame-d10s-robot-supurge-lds-navigasyon-ve-5000pa-emis-gucu-maksimum-280-dakika-calisma-suresi-uygulama-kontrolu-halilar-evcil-hayvan-tuyleri-ve-sert-zeminler-icin-ideal-p-HBCV00004ARANU" },
    { t:"orta", b:"Roborock", n:"Roborock Q7 Max Plus (Toz Boşaltma İstasyonlu)", r:null, c:null,
      s:"İstasyon sayesinde haftalarca hazneye dokunmadan kullanılabiliyor.",
      u:"https://www.hepsiburada.com/roborock-q7-max-plus-akilli-robot-supurge-beyaz-pm-HBC00002H4FKL" },

    { t:"pahali", b:"Dreame", n:"Dreame X50 Ultra Complete Robot Süpürge", r:null, c:null,
      s:"Eşik tırmanma, sıcak su ile paspas yıkama ve kurutma — kategorinin en üst noktası.",
      u:"https://www.hepsiburada.com/dreame-x50-ultra-complete-robot-supurge-pm-HBC00008DMUJS-yorumlari" },
    { t:"pahali", b:"Roborock", n:"Roborock Qrevo / S8 Serisi Ultra Robot Süpürge", r:null, c:null,
      s:"Çift dönen paspas, otomatik paspas kaldırma ve kendi kendini temizleyen istasyon.",
      u:"https://www.hepsiburada.com/roborock-robot-supurge-xc-80160033-b110946" },
    { t:"pahali", b:"Xiaomi", n:"Xiaomi Robot Vacuum X20 / S20 Serisi", r:null, c:null,
      s:"Xiaomi ekosistemine bağlı, otomatik istasyonlu üst seviye modeller.",
      u:"https://www.hepsiburada.com/xiaomi-robot-supurge-xc-80160033-b1123" }
  ]
},

/* 8 ────────────────── DİKEY / ŞARJLI SÜPÜRGE ──────────────── */
{
  id: "dikey-supurge", icon: "🧹", group: "Temizlik", name: "Dikey / Şarjlı Süpürge",
  tip: "Robot süpürge köşeleri ve koltuk altını yapamaz — bir dikey süpürge şart. Şarj süresi değil, çalışma süresi (en az 40 dk) ve motorlu fırça başlığına bakın.",
  hb: "https://www.hepsiburada.com/sarjli-supurgeler-c-159445",
  items: [
    { t:"eko", b:"Xiaomi", n:"Xiaomi Mi Handheld 1C Kablosuz Şarjlı Vakum Süpürge", r:null, c:null,
      s:"Hafif, küçük evler ve araç içi temizlik için ideal; fiyatına göre emiş gücü şaşırtıyor.",
      u:"https://www.hepsiburada.com/xiaomi-mi-handheld-1c-kablosuz-sarjli-vakum-supurge-p-HBV00000S9VO6-yorumlari" },
    { t:"eko", b:"Xiaomi", n:"Xiaomi Mi Handheld Kablosuz Şarjlı Vakum Süpürge", r:null, c:null,
      s:"Yorumlarda \"Fakir'i son ayarda kullanıyordum, bunun 2. ayarı bile daha iyi çekiyor\" karşılaştırması öne çıkıyor.",
      u:"https://www.hepsiburada.com/xiaomi-mi-handheld-kablosuz-sarjli-vakum-supurge-pm-HB00000PIPL8-yorumlari" },
    { t:"eko", b:"Fakir", n:"Fakir Dikey Şarjlı Süpürge (giriş serisi)", r:null, c:null,
      s:"Kullanıcıların en çok memnun kaldığı özellikler hafiflik ve pratiklik; fiyat/performans dengesi iyi.",
      u:"https://www.hepsiburada.com/fakir-dikey-supurge-xc-80160032-b8999" },

    { t:"orta", b:"Xiaomi", n:"Xiaomi G10 Dikey Şarjlı Süpürge", r:null, c:null,
      s:"LED ekranlı, güçlü motorlu model. \"Bu fiyata yakın alacağınız Dyson V8'e kıyasla iki kat iş yapıyor\" yorumu sık tekrarlanıyor.",
      u:"https://www.hepsiburada.com/xiaomi-g10-dikey-supurge-pm-HBC000002BZ67-yorumlari" },
    { t:"orta", b:"Rowenta", n:"Rowenta X-Force Flex Şarjlı Dikey Süpürge", r:null, c:null,
      s:"Bükülebilir boru sayesinde koltuk ve yatak altına eğilmeden ulaşılıyor.", u:hbAra("Rowenta X-Force Flex şarjlı süpürge") },
    { t:"orta", b:"Fakir", n:"Fakir Prestige Serisi Şarjlı Dikey Süpürge", r:null, c:null,
      s:"Uzun çalışma süresi ve yedek parça bulunabilirliği; Türkiye servisi güçlü.",
      u:"https://www.hepsiburada.com/fakir-dikey-supurge-xc-80160032-b8999" },

    { t:"pahali", b:"Xiaomi", n:"Xiaomi Truclean W10 Pro Islak-Kuru Şarjlı Dikey Süpürge", r:null, c:null,
      s:"Süpürme ve paspaslamayı tek geçişte yapıyor; kendi kendini yıkama fonksiyonu var.",
      u:"https://www.hepsiburada.com/xiaomi-truclean-w10-pro-islak-kuru-sarjli-dikey-supurge-beyaz-pm-HBC00004SD2GD-yorumlari" },
    { t:"pahali", b:"Dyson", n:"Dyson V12 Detect Slim Şarjlı Süpürge", r:null, c:null,
      s:"Lazerli başlık gözle görünmeyen tozu gösteriyor; hafifliğiyle günlük kullanımda çok rahat.",
      u:"https://www.hepsiburada.com/dyson-supurgeler-xc-155123-b25815" },
    { t:"pahali", b:"Dyson", n:"Dyson V15 Detect Şarjlı Süpürge", r:null, c:null,
      s:"Kategorinin zirvesi: en yüksek emiş, partikül sayacı ve 60 dk'ya varan çalışma süresi.",
      u:"https://www.hepsiburada.com/dyson-supurgeler-xc-155123-b25815" }
  ]
},

/* 9 ─────────────────────────── ÜTÜ ────────────────────────── */
{
  id: "utu", icon: "👔", group: "Küçük Ev Aletleri", name: "Ütü",
  tip: "Haftada 2+ kez ütü yapıyorsanız doğrudan buhar kazanlı alın — süreyi yarıya indiriyor. Normal ütüde 2400 W altına inmeyin; seramik yerine paslanmaz çelik/eloksal taban daha uzun ömürlü.",
  hb: "https://www.hepsiburada.com/buharli-utu-c-80162056",
  items: [
    { t:"eko", b:"Philips", n:"Philips Azur GC4909/60 3000 W Buharlı Ütü", r:null, c:8742,
      s:"8.742 değerlendirme! \"Hiç yormuyor, kırışıklığı hemen açıyor\", \"çok çabuk ısınıyor\" en sık tekrarlanan yorumlar.",
      u:"https://www.hepsiburada.com/philips-azur-gc4909-60-3000-w-buharli-utu-pm-HB00000L6P74-yorumlari" },
    { t:"eko", b:"Tefal", n:"Tefal Program 8 400 2400 W Buharlı Ütü", r:null, c:null,
      s:"Uzun yıllardır satılan klasik model; kumaş programları sayesinde ayar derdi yok.",
      u:"https://www.hepsiburada.com/tefal-program-8-400-2400-watt-buharli-utu-pm-evtefprog400-yorumlari" },
    { t:"eko", b:"Tefal", n:"Tefal FV6840 Ultragliss Plus Buharlı Ütü", r:null, c:null,
      s:"Kireç önleyici sistemi ve kaydırma kolaylığı öne çıkıyor; günlük kullanım için yeterli.",
      u:"https://www.hepsiburada.com/tefal-fv6840-ultragliss-plus-buharli-utu-1830007809-p-HBV000013EH46" },

    { t:"orta", b:"Tefal", n:"Tefal FV9845 Ultimate Pure 3200 W Buharlı Ütü", r:null, c:769,
      s:"769 değerlendirme; \"jilet gibi yapıyor gömlekleri\" yorumu kategoriye damga vurmuş. Su filtreleme sistemi var.",
      u:"https://www.hepsiburada.com/tefal-fv9845-ultimate-pure-buharli-utu-1830006927-pm-HB00000ECMVA-yorumlari" },
    { t:"orta", b:"Tefal", n:"Tefal FV9850 Pure Max Buharlı Ütü", r:4.5, c:156, v:true,
      s:"\"Ütünün buhar gücü çok iyi\" — kireç tutmayı önleyen çift filtreli sistemiyle uzun ömürlü.",
      u:"https://www.hepsiburada.com/tefal-fv9850-pure-max-buharli-utu-1830008490-p-HBCV00000V1HA8" },
    { t:"orta", b:"Philips", n:"Philips PSG3000/20 2400 W Buhar Kazanlı Ütü", r:null, c:67,
      s:"Kazanlı ütüye en uygun fiyatlı giriş; basınçlı buhar sayesinde nevresim ütülemek çok kolaylaşıyor.",
      u:"https://www.hepsiburada.com/philips-psg3000-20-buhar-kazanli-utu-pm-HBC00006QTQYT" },

    { t:"pahali", b:"Philips", n:"Philips PerfectCare Elite Plus GC9682/80 2700 W Buhar Kazanlı Ütü", r:null, c:1569,
      s:"1.569 değerlendirme: \"çok hafif, otomatik buhar verme özelliği rahatlık sağlıyor\", \"2 dakikada ısınıyor\".",
      u:"https://www.hepsiburada.com/philips-perfectcare-elite-plus-gc9682-80-2700-w-buhar-kazanli-utu-pm-HB000007VX72-yorumlari" },
    { t:"pahali", b:"Philips", n:"Philips PSG9050 Buhar Kazanlı Ütü", r:4.5, c:324, v:true,
      s:"\"Normal ütüyle yaptığınız eforun çok azıyla 10 kat daha iyi ütüleme\" — kullanıcıların ortak yorumu.",
      u:"https://www.hepsiburada.com/philips-psg9050-buhar-kazanli-utu-pm-HB00000RXT4R-yorumlari" },
    { t:"pahali", b:"Tefal", n:"Tefal GV9620 Pro Express Ultimate Buhar Kazanlı Ütü", r:null, c:230,
      s:"Otomatik buhar ayarı kumaşa göre buhar veriyor; \"aşırı kullanışlı\" yorumu sık tekrarlanıyor.",
      u:"https://www.hepsiburada.com/tefal-gv9620-pro-express-ultimate-buhar-kazanli-utu-1830007359-pm-HB00000NIEOU-yorumlari" }
  ]
},

/* 10 ────────────────────────── AIR FRYER ──────────────────── */
{
  id: "airfryer", icon: "🍟", group: "Küçük Ev Aletleri", name: "Air Fryer (Yağsız Fritöz)",
  tip: "İki kişi için 4–5 lt yeterli, misafir ağırlıyorsanız 6–7 lt alın. Dijital ekran + hazır programlar günlük kullanımı kolaylaştırıyor; sepetin bulaşık makinesinde yıkanabilir olmasına dikkat edin.",
  hb: "https://www.hepsiburada.com/fritozler-c-22017",
  items: [
    { t:"eko", b:"Arzum", n:"Arzum AR2062 Airtasty Sıcak Hava Fritözü", r:4.6, c:839, v:true,
      s:"839 değerlendirmede 4,6 puan. \"Güzel ve hızlı pişiriyor, yemekler 15-20 dakikada bitiyor\" yorumu öne çıkıyor.",
      u:"https://hepsiburada.com/arzum-ar2062-g-airtasty-air-fryer-sicak-hava-fritozu-gumus-pm-HBC00002Y5XSH" },
    { t:"eko", b:"Philips", n:"Philips Airfryer L 4,1 lt 1400 W 7 Programlı Yağsız Fritöz", r:null, c:null,
      s:"Philips'in giriş modeli; dijital ekran ve 7 hazır programla iki kişilik mutfaklar için birebir.",
      u:"https://www.hepsiburada.com/philips-airfryer-l-yagsiz-sicak-hava-fritozu-4-1-l-1400-w-7-programli-dijital-ekran-pm-HBC00004APGJZ" },
    { t:"eko", b:"Xiaomi", n:"Xiaomi Smart Air Fryer 4 lt", r:null, c:null,
      s:"Uygulamadan kontrol edilebiliyor; kompakt boyutuyla küçük mutfaklarda yer kaplamıyor.", u:hbAra("Xiaomi Smart Air Fryer 4L") },

    { t:"orta", b:"Philips", n:"Philips Airfryer XL HD9257/80 3000 Serisi 5,6 lt", r:null, c:null,
      s:"5,6 lt hacim iki kişilik ev için bolca yetiyor; \"hiç yağ kullanmadan çıtır çıtır oluyor\" yorumu yaygın.",
      u:"https://www.hepsiburada.com/philips-airfryer-xl-hd9257-80-3000-serisi-5-6-lt-yagsiz-fritoz-pm-HBC00004T1T3Z-yorumlari" },
    { t:"orta", b:"Philips", n:"Philips HD9650/90 XXL Avance Collection Airfryer", r:null, c:null,
      s:"Yorumlarda \"tavuk butları mangalda pişmiş gibi oluyor\", \"hamsi bile kokusuz pişti\" geri bildirimleri var.",
      u:"https://www.hepsiburada.com/philips-hd9650-90-xxl-avance-collection-airfryer-fritoz-pm-HB00000DGBRG-yorumlari" },
    { t:"orta", b:"Philips", n:"Philips Viva Collection Airfryer HD9220/20", r:null, c:null,
      s:"Klasikleşmiş model; sadelik ve dayanıklılık isteyenler için hâlâ güçlü bir seçenek.",
      u:"https://www.hepsiburada.com/philips-viva-collection-airfryer-hd9220-20-hizli-ve-yagsiz-kizartma-makinesi-pm-mtphhd922020-yorumlari" },

    { t:"pahali", b:"Philips", n:"Philips Airfryer XXL HD9867/90 7,3 lt Yağsız Fritöz", r:null, c:null,
      s:"7,3 lt dev hacim ve akıllı sensör; bütün bir tavuk sığıyor. Kalabalık davetler için.",
      u:"https://www.hepsiburada.com/philips-airfryer-xxl-hd9867-90-7-3-lt-yagsiz-fritoz-pm-HBC000004VGKV-yorumlari" },
    { t:"pahali", b:"Ninja", n:"Ninja Foodi Dual Zone Çift Hazneli Air Fryer", r:null, c:null,
      s:"İki ayrı hazne ile ana yemek ve garnitürü aynı anda pişiriyor; senkron bitirme özelliği var.", u:hbAra("Ninja Foodi Dual Zone air fryer") },
    { t:"pahali", b:"Philips", n:"Philips Airfryer Combi 7000 XXL (Buharlı)", r:null, c:null,
      s:"Fritöz + fırın + buhar bir arada; küçük mutfaklarda ankastre fırına alternatif oluyor.", u:hbAra("Philips Airfryer Combi 7000 XXL") }
  ]
},

/* 11 ──────────────────── MİKRODALGA FIRIN ─────────────────── */
{
  id: "mikrodalga", icon: "📡", group: "Küçük Ev Aletleri", name: "Mikrodalga Fırın",
  tip: "Sadece ısıtacaksanız 20 lt solo model yeterli. Izgara/kombi modeller tost ve gratine de yapıyor ama mutfakta daha çok yer kaplıyor. Tezgâh üstünde 20 lt'yi geçmeyin.",
  hb: "https://www.hepsiburada.com/mikrodalga-firinlar-c-22021",
  items: [
    { t:"eko", b:"Arçelik", n:"Arçelik MD 674 Solo Mikrodalga Fırın 20 lt 700 W", r:null, c:null,
      s:"Mekanik düğmeli, sade ve dayanıklı; ilk ev için en çok satan giriş modeli.",
      u:"https://www.hepsiburada.com/arcelik-md-674-mikrodalga-firin-pm-HB000000SIYE-yorumlari" },
    { t:"eko", b:"Arçelik", n:"Arçelik MD 2090 DS 20 lt Siyah Mikrodalga Fırın", r:null, c:33,
      s:"Siyah cam kapağıyla modern mutfaklara uyuyor; dijital zamanlayıcı pratik.",
      u:"https://www.hepsiburada.com/arcelik-md-2090-ds-20-lt-siyah-mikrodalga-firin-pm-HB000015X42K" },
    { t:"eko", b:"Beko", n:"Beko 20 lt Solo Mikrodalga Fırın", r:null, c:null,
      s:"Servis ağı ve fiyatıyla güvenli seçim; günlük ısıtma ihtiyacını fazlasıyla karşılıyor.",
      u:"https://www.hepsiburada.com/beko-mikrodalga-firinlar-xc-22021-b24940" },

    { t:"orta", b:"Arçelik", n:"Arçelik MD 674 S Silver Mikrodalga Fırın", r:4.6, c:87, v:true,
      s:"87 değerlendirmede 4,6 puan. Kullanıcılar modern tasarımı ve fonksiyon çeşitliliğini övüyor.",
      u:"https://www.hepsiburada.com/arcelik-md-674-s-silver-mikrodalga-firin-pm-HB0000020V5K-yorumlari" },
    { t:"orta", b:"Samsung", n:"Samsung 23 lt Solo Mikrodalga Fırın (Seramik İç Yüzey)", r:null, c:null,
      s:"Seramik iç yüzey çizilmiyor ve kolay temizleniyor; Samsung'un en çok tercih edilen boyu.",
      u:"https://www.hepsiburada.com/samsung-mikrodalga-firinlar-xc-22021-b8848" },
    { t:"orta", b:"Beko", n:"Beko İnox Izgaralı Mikrodalga Fırın", r:null, c:null,
      s:"Izgara fonksiyonu sayesinde üstü kızarmış yemek/tost yapılabiliyor.",
      u:"https://www.hepsiburada.com/beko-mikrodalga-firinlar-xc-22021-b24940" },

    { t:"pahali", b:"Samsung", n:"Samsung 23 lt Grill Mikrodalga Fırın (MG23 serisi)", r:4.8, c:17, v:true,
      s:"Izgara + mikrodalga kombinasyonu; hazır yemek ısıtmanın ötesine geçmek isteyenler için.",
      u:"https://www.hepsiburada.com/samsung-mikrodalga-firinlar-xc-22021-b8848" },
    { t:"pahali", b:"Bosch", n:"Bosch Serie 2 Ankastre Mikrodalga Fırın", r:null, c:null,
      s:"Dolaba gömülüyor, tezgâhta yer kaplamıyor; mutfak tasarımını bozmayan çözüm.", u:hbAra("Bosch ankastre mikrodalga fırın") },
    { t:"pahali", b:"Siemens", n:"Siemens iQ300 Ankastre Mikrodalga Fırın", r:null, c:null,
      s:"Ankastre setle görsel bütünlük; hassas güç kademeleri ve sessiz çalışma.", u:hbAra("Siemens iQ300 ankastre mikrodalga") }
  ]
}

);
