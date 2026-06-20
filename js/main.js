/* =========================================================
   Tuğba & Ali · Nişan Davetiyesi · etkileşim
   =========================================================

   ⚙️  DÜZENLENEBİLİR AYARLAR
   Aşağıdaki CONFIG'i kendi bilgilerinize göre güncelleyin.
   ('date' alanı geri sayım ve tarih metinlerini besler.)
*/
const CONFIG = {
  names:    { her: "Tuğba", him: "Ali" },
  venue:    "Zin Haliç",

  // Etkinlik tarih & saati — ISO formatı: YIL-AY-GÜNTSaat:Dakika
  // 👇 LÜTFEN GERÇEK TARİHİ GİRİN
  dateISO:  "2026-09-13T19:00:00",

  // Ekranda görünecek metinler (otomatik üretilir ama elle de değiştirebilirsiniz)
  dateText: null,   // null bırakırsanız dateISO'dan üretilir
  timeText: null,

  // Harita & iletişim (isteğe bağlı)
  mapQuery: "Zin Haliç İstanbul",
  // RSVP yanıtlarının iletileceği WhatsApp numarası (uluslararası, başında +/0 olmadan)
  // Örn: "905551112233". Boş bırakılırsa yanıt tarayıcıya kaydedilir.
  rsvpWhatsApp: ""
};

/* ---------- Tarih yardımcıları ---------- */
const TR_MONTHS = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran",
  "Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

const eventDate = new Date(CONFIG.dateISO);

function formatDate(d){
  return `${d.getDate()} ${TR_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}
function formatTime(d){
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}
const dateText = CONFIG.dateText || formatDate(eventDate);
const timeText = CONFIG.timeText || formatTime(eventDate);

/* ---------- Sayfa metinlerini doldur ---------- */
function fillTexts(){
  const set = (id, val) => { const el = document.getElementById(id); if(el) el.textContent = val; };
  set("hero-date-text", dateText);
  set("detail-date", dateText);
  set("detail-time", timeText + " · akşam");
  const map = document.getElementById("map-btn");
  if(map) map.href = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(CONFIG.mapQuery);
}

/* =========================================================
   1) AÇILIŞ ZARFI
   ========================================================= */
function openEnvelope(){
  const env   = document.getElementById("envelope");
  const screen= document.getElementById("envelope-screen");
  const site  = document.getElementById("site");
  if(!env || env.classList.contains("open")) return;

  env.classList.add("open");

  // kart yükselip okunduktan sonra siteye geç
  setTimeout(() => {
    burstPetals(26);                 // sürpriz yaprak patlaması
    screen.classList.add("lift");
    site.setAttribute("aria-hidden","false");
    site.classList.add("show");
    document.body.style.overflow = "auto";

    // ilk görünür reveal'leri tetikle
    setTimeout(() => {
      document.querySelector(".hero-inner")?.classList.add("in");
      document.querySelector("#story")?.classList.add("in");
      startBirds();
      startPetalsLoop();
    }, 350);

    setTimeout(() => { screen.style.display = "none"; }, 950);
  }, 1500);
}

function initEnvelope(){
  const env = document.getElementById("envelope");
  const btn = document.getElementById("env-open-btn");
  document.body.style.overflow = "hidden";  // açılmadan kaydırma kapalı

  env?.addEventListener("click", openEnvelope);
  btn?.addEventListener("click", openEnvelope);
  env?.addEventListener("keydown", (e) => {
    if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openEnvelope(); }
  });
}

/* =========================================================
   2) YAPRAKLAR (süzülen + patlayan)
   ========================================================= */
const PETALS = ["🌸","🌷","❀","✿","🌺"];

function makePetal(extra=""){
  const p = document.createElement("span");
  p.className = "petal " + extra;
  p.textContent = PETALS[Math.floor(Math.random()*PETALS.length)];
  p.style.left = Math.random()*100 + "vw";
  p.style.fontSize = (0.8 + Math.random()*1.1) + "rem";
  p.style.animationDuration = (7 + Math.random()*8) + "s";
  p.style.animationDelay = (-Math.random()*8) + "s";
  return p;
}

function startPetalsLoop(){
  const layer = document.getElementById("petals-layer");
  if(!layer) return;
  const count = window.innerWidth < 600 ? 10 : 18;
  for(let i=0;i<count;i++) layer.appendChild(makePetal());
}

/* açılışta yukarıdan aşağı patlama efekti */
function burstPetals(n){
  const layer = document.getElementById("petals-layer");
  if(!layer) return;
  for(let i=0;i<n;i++){
    const p = makePetal();
    p.style.animationDuration = (4 + Math.random()*3) + "s";
    p.style.animationDelay = "0s";
    layer.appendChild(p);
    setTimeout(() => p.remove(), 7000);
  }
}

/* =========================================================
   3) UÇUŞAN KUŞLAR
   ========================================================= */
const BIRDS = ["🕊️","🐦","🦋"];

function spawnBird(){
  const layer = document.getElementById("birds-layer");
  if(!layer) return;
  const b = document.createElement("span");
  b.className = "bird";
  b.textContent = BIRDS[Math.floor(Math.random()*BIRDS.length)];
  b.style.top = (Math.random()*60) + "vh";
  b.style.fontSize = (1.1 + Math.random()*0.8) + "rem";
  const dur = 12 + Math.random()*10;
  b.style.animationDuration = dur + "s";
  layer.appendChild(b);
  setTimeout(() => b.remove(), dur*1000 + 500);
}

function startBirds(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  spawnBird();
  setInterval(() => { if(Math.random() > 0.35) spawnBird(); }, 4200);
}

/* =========================================================
   4) GERİ SAYIM
   ========================================================= */
function tickCountdown(){
  const now = new Date();
  let diff = Math.floor((eventDate - now) / 1000);

  const done = document.getElementById("countdown-done");
  const grid = document.getElementById("countdown");

  if(diff <= 0){
    if(grid) grid.style.display = "none";
    if(done) done.hidden = false;
    return;
  }
  const d = Math.floor(diff / 86400); diff %= 86400;
  const h = Math.floor(diff / 3600);  diff %= 3600;
  const m = Math.floor(diff / 60);
  const s = diff % 60;

  const set = (id,v) => { const el = document.getElementById(id);
    if(el) el.textContent = String(v).padStart(2,"0"); };
  set("cd-days", d); set("cd-hours", h); set("cd-mins", m); set("cd-secs", s);
}

function initCountdown(){
  tickCountdown();
  setInterval(tickCountdown, 1000);
}

/* =========================================================
   5) SCROLL REVEAL
   ========================================================= */
function initReveal(){
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}

/* =========================================================
   6) RSVP FORMU
   ========================================================= */
function initRsvp(){
  const form = document.getElementById("rsvp-form");
  const fb   = document.getElementById("rsvp-feedback");
  if(!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name   = (data.get("name")  || "").toString().trim();
    const attend = (data.get("attend")|| "").toString();
    const count  = (data.get("count") || "1").toString();
    const note   = (data.get("note")  || "").toString().trim();
    if(!name) return;

    // küçük yaprak kutlaması
    burstPetals(14);

    const coming = attend.startsWith("Geliyor");
    fb.textContent = coming
      ? `Teşekkürler ${name}! 🌷 Sizi ${dateText} günü Zin Haliç’te bekliyoruz.`
      : `Anlıyoruz ${name} 🤍 Yine de bizi düşündüğünüz için teşekkürler.`;
    fb.classList.remove("show"); void fb.offsetWidth; fb.classList.add("show");

    // WhatsApp ile bildirim (numara tanımlıysa)
    if(CONFIG.rsvpWhatsApp){
      const msg = `Nişan RSVP%0AAd: ${name}%0ADurum: ${attend}%0AKişi: ${count}` +
                  (note ? `%0ANot: ${note}` : "");
      const url = `https://wa.me/${CONFIG.rsvpWhatsApp}?text=${msg}`;
      setTimeout(() => window.open(url, "_blank"), 700);
    } else {
      // numara yoksa yanıtı tarayıcıda sakla (çift istemci adına basit kayıt)
      try{
        const all = JSON.parse(localStorage.getItem("rsvp") || "[]");
        all.push({ name, attend, count, note, at: new Date().toISOString() });
        localStorage.setItem("rsvp", JSON.stringify(all));
      }catch(_){}
    }
    form.querySelector(".rsvp-submit").textContent = "Gönderildi ✓";
  });
}

/* =========================================================
   7) MÜZİK (WebAudio ile yumuşak çan tınısı — dosya gerektirmez)
   ========================================================= */
function initMusic(){
  const btn = document.getElementById("music-btn");
  if(!btn) return;
  let ctx, playing = false, timer;

  // pentatonik, huzurlu notalar
  const notes = [523.25, 587.33, 659.25, 783.99, 880.0]; // C D E G A

  function chime(){
    if(!ctx) return;
    const t = ctx.currentTime;
    const f = notes[Math.floor(Math.random()*notes.length)];
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine"; osc.frequency.value = f;
    gain.gain.setValueAtTime(0, t);
    gain.gain.linearRampToValueAtTime(0.12, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 2.2);
    osc.connect(gain).connect(ctx.destination);
    osc.start(t); osc.stop(t + 2.3);
  }

  btn.addEventListener("click", () => {
    if(!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if(ctx.state === "suspended") ctx.resume();
    playing = !playing;
    btn.classList.toggle("playing", playing);
    if(playing){ chime(); timer = setInterval(chime, 1600); }
    else { clearInterval(timer); }
  });
}

/* =========================================================
   BAŞLAT
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  fillTexts();
  initEnvelope();
  initCountdown();
  initReveal();
  initRsvp();
  initMusic();
});
