/* ============================================================
   YENİ EV REHBERİ · uygulama mantığı
   Filtreleme, arama ve alışveriş listesi (localStorage)
   ============================================================ */
(function () {
  "use strict";

  const DATA = window.EV_DATA || [];
  const STORE_KEY = "yeniEvListem.v1";

  const TIERS = [
    { key: "eko",    label: "💰 Ekonomik",  cls: "tier-eko" },
    { key: "orta",   label: "⚖️ Dengeli",   cls: "tier-orta" },
    { key: "pahali", label: "✨ Premium",   cls: "tier-pahali" }
  ];

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- durum ---------- */
  let state = { q: "", group: "all", tier: "all" };
  let picked = load();

  function load() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(picked)); } catch (e) {}
  }

  /* ---------- yardımcılar ---------- */
  const uid = (catId, i) => catId + "::" + i;
  const norm = (s) => (s || "")
    .toLocaleLowerCase("tr")
    .replace(/[ıİ]/g, "i").replace(/[şŞ]/g, "s").replace(/[ğĞ]/g, "g")
    .replace(/[üÜ]/g, "u").replace(/[öÖ]/g, "o").replace(/[çÇ]/g, "c");

  const fmtRating = (r) => String(r).replace(".", ",");
  const fmtCount  = (c) => c.toLocaleString("tr-TR");

  /* Rozette zaten gösterilen "1.234 değerlendirme / 4,6 puan" ifadesini
     özetin başından temizler ki aynı bilgi iki kez yazmasın. */
  function cleanSummary(text) {
    const rules = [
      /^\d[\d.,]*\s*değerlendirme\w*(\s+ile)?\s*[:;!.,]?\s*/i,
      /^\d[\d.,]*\s*puan\s*[/·,]?\s*[:;!.,]?\s*/i
    ];
    let out = text, changed = true;
    while (changed) {
      changed = false;
      rules.forEach((re) => {
        const next = out.replace(re, "");
        if (next !== out) { out = next; changed = true; }
      });
    }
    return out.charAt(0).toLocaleUpperCase("tr") + out.slice(1);
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => (
      { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
    ));
  }

  /* ---------- istatistikler ---------- */
  const totalProducts = DATA.reduce((n, c) => n + c.items.length, 0);
  $("#stat-cat").textContent  = DATA.length;
  $("#stat-prod").textContent = totalProducts;

  /* ---------- bölüm çipleri ---------- */
  const groups = [];
  DATA.forEach((c) => { if (!groups.includes(c.group)) groups.push(c.group); });

  const groupChips = $("#group-chips");
  groupChips.innerHTML =
    '<button class="chip active" data-group="all">Tüm bölümler</button>' +
    groups.map((g) => `<button class="chip" data-group="${esc(g)}">${esc(g)}</button>`).join("");

  groupChips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.group = btn.dataset.group;
    $$(".chip", groupChips).forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });

  const tierChips = $("#tier-chips");
  tierChips.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    state.tier = btn.dataset.tier;
    $$(".chip", tierChips).forEach((b) => b.classList.toggle("active", b === btn));
    render();
  });

  let searchTimer;
  $("#search").addEventListener("input", (e) => {
    clearTimeout(searchTimer);
    const val = e.target.value;
    searchTimer = setTimeout(() => { state.q = norm(val.trim()); render(); }, 160);
  });

  /* ---------- eşleşme ---------- */
  function matches(cat, item) {
    if (state.group !== "all" && cat.group !== state.group) return false;
    if (state.tier !== "all" && item.t !== state.tier) return false;
    if (!state.q) return true;
    const hay = norm([item.n, item.b, item.s, cat.name, cat.group].join(" "));
    return state.q.split(/\s+/).every((w) => hay.includes(w));
  }

  /* ---------- kart ---------- */
  function cardHTML(cat, item, index) {
    const id = uid(cat.id, index);
    const on = !!picked[id];

    const badge = item.r
      ? `<span class="badge verified" title="${item.v ? "Araştırma sırasında Hepsiburada'da görülen puan" : "Hepsiburada puanı"}">
           ${fmtRating(item.r)} ★${item.v ? " · doğrulandı" : ""}
         </span>`
      : `<span class="badge soft" title="Puan tek tek doğrulanamadı — güncel puan için ürün sayfasına bakın">Puanı gör →</span>`;

    const reviews = item.c
      ? `<span class="reviews">${fmtCount(item.c)} değerlendirme</span>`
      : "";

    return `
      <article class="card${on ? " checked" : ""}" data-id="${id}">
        <div class="card-top">
          <div>
            <div class="brand">${esc(item.b)}</div>
            <h3>${esc(item.n)}</h3>
          </div>
          ${badge}
        </div>
        ${reviews}
        <p class="summary">${esc(cleanSummary(item.s))}</p>
        <div class="card-foot">
          <label class="pick">
            <input type="checkbox" data-pick="${id}" ${on ? "checked" : ""} />
            Listeme ekle
          </label>
          <a class="hb-link" href="${esc(item.u)}" target="_blank" rel="noopener noreferrer">Hepsiburada'da gör ↗</a>
        </div>
      </article>`;
  }

  /* ---------- katalog ---------- */
  function render() {
    const catalog = $("#catalog");
    let html = "";
    let visible = 0;

    DATA.forEach((cat) => {
      const shown = cat.items
        .map((item, i) => ({ item, i }))
        .filter(({ item }) => matches(cat, item));

      if (!shown.length) return;
      visible += shown.length;

      const cols = TIERS.map((tier) => {
        const inTier = shown.filter(({ item }) => item.t === tier.key);
        if (!inTier.length) return "";
        return `
          <div class="tier-col">
            <span class="tier-label ${tier.cls}">${tier.label}</span>
            ${inTier.map(({ item, i }) => cardHTML(cat, item, i)).join("")}
          </div>`;
      }).join("");

      html += `
        <section class="cat" id="${esc(cat.id)}">
          <div class="cat-head">
            <div class="cat-icon" aria-hidden="true">${cat.icon}</div>
            <div class="cat-title">
              <div class="cat-group">${esc(cat.group)}</div>
              <h2>${esc(cat.name)}</h2>
            </div>
            <a class="cat-link" href="${esc(cat.hb)}" target="_blank" rel="noopener noreferrer">Kategoriyi Hepsiburada'da aç ↗</a>
          </div>
          <p class="tip"><b>Ne almalı?</b> ${esc(cat.tip)}</p>
          <div class="tiers">${cols}</div>
        </section>`;
    });

    catalog.innerHTML = html;
    $("#empty").hidden = visible > 0;
    updateCount();
  }

  /* ---------- seçim ---------- */
  document.addEventListener("change", (e) => {
    const box = e.target.closest("[data-pick]");
    if (!box) return;
    const id = box.dataset.pick;

    if (box.checked) {
      const [catId, idxStr] = id.split("::");
      const cat = DATA.find((c) => c.id === catId);
      const item = cat && cat.items[Number(idxStr)];
      if (!item) return;
      picked[id] = { cat: cat.name, name: item.n, brand: item.b, url: item.u, tier: item.t };
    } else {
      delete picked[id];
    }
    save();
    const card = document.querySelector('.card[data-id="' + CSS.escape(id) + '"]');
    if (card) card.classList.toggle("checked", box.checked);
    updateCount();
    if ($("#drawer").classList.contains("open")) renderList();
  });

  function updateCount() {
    const n = Object.keys(picked).length;
    $("#fab-count").textContent = n;
    $("#stat-checked").textContent = n;
  }

  /* ---------- alışveriş listesi ---------- */
  function renderList() {
    const body = $("#list-body");
    const entries = Object.entries(picked);

    if (!entries.length) {
      body.innerHTML = '<p class="drawer-note">Henüz ürün eklemediniz. Kartlardaki “Listeme ekle” kutusunu işaretleyin.</p>';
      return;
    }

    const byCat = {};
    entries.forEach(([id, p]) => { (byCat[p.cat] = byCat[p.cat] || []).push([id, p]); });

    body.innerHTML = Object.keys(byCat).map((cat) => `
      <div class="list-cat">${esc(cat)}</div>
      ${byCat[cat].map(([id, p]) => `
        <div class="list-item">
          <button data-remove="${id}" title="Listeden çıkar" aria-label="Listeden çıkar">✕</button>
          <a href="${esc(p.url)}" target="_blank" rel="noopener noreferrer">
            <b>${esc(p.brand)}</b> — ${esc(p.name)}
          </a>
        </div>`).join("")}
    `).join("");
  }

  $("#list-body").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-remove]");
    if (!btn) return;
    const id = btn.dataset.remove;
    delete picked[id];
    save();
    const box = document.querySelector('[data-pick="' + CSS.escape(id) + '"]');
    if (box) {
      box.checked = false;
      box.closest(".card").classList.remove("checked");
    }
    updateCount();
    renderList();
  });

  function openDrawer() {
    renderList();
    $("#drawer").classList.add("open");
    $("#drawer").setAttribute("aria-hidden", "false");
    $("#scrim").hidden = false;
  }
  function closeDrawer() {
    $("#drawer").classList.remove("open");
    $("#drawer").setAttribute("aria-hidden", "true");
    $("#scrim").hidden = true;
  }

  $("#fab").addEventListener("click", openDrawer);
  $("#open-list").addEventListener("click", openDrawer);
  $("#close-list").addEventListener("click", closeDrawer);
  $("#scrim").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeDrawer(); });

  $("#print-list").addEventListener("click", () => window.print());
  $("#clear-list").addEventListener("click", () => {
    if (!Object.keys(picked).length) return;
    if (!confirm("Alışveriş listeniz tamamen silinsin mi?")) return;
    picked = {};
    save();
    $$("[data-pick]").forEach((b) => { b.checked = false; b.closest(".card").classList.remove("checked"); });
    updateCount();
    renderList();
  });

  render();
})();
