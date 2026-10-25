// Favicon : un piège photo (caméra d'affût) sur le carré arrondi « forêt de nuit » du site
// Mission Piège Photo (3e). Couleurs de la charte du site : nuit #0B1712, vert #5EE08A, ambre #F2B33D.
// Usage : node fabriquer-piege-photo.js <dossier de sortie>
const puppeteer = require('puppeteer-core');
const sortie = process.argv[2];
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#0B1712"/>
  <rect x="4" y="38" width="12" height="10" rx="2" fill="#6b4a2b"/>
  <rect x="84" y="38" width="12" height="10" rx="2" fill="#6b4a2b"/>
  <rect x="16" y="12" width="68" height="78" rx="12" fill="#3f7a4a" stroke="#5EE08A" stroke-width="3"/>
  <path d="M22 70 q10 -8 20 0 t20 0 t20 2 v6 q0 6 -6 6 h-52 q-6 0 -6 -6z" fill="#2c5a36"/>
  <circle cx="35" cy="24" r="4" fill="#e04a3c"/><circle cx="50" cy="24" r="4" fill="#e04a3c"/><circle cx="65" cy="24" r="4" fill="#e04a3c"/>
  <circle cx="50" cy="50" r="18" fill="#0B1712" stroke="#F2B33D" stroke-width="5"/>
  <circle cx="50" cy="50" r="8" fill="#1d3a5c"/>
  <circle cx="44" cy="44" r="4" fill="#fff" opacity=".85"/>
  <rect x="40" y="73" width="20" height="9" rx="4" fill="#d9e8dc"/>
</svg>`;
const src = 'data:image/svg+xml;base64,' + Buffer.from(svg).toString('base64');
(async () => {
  const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new' });
  const p = await b.newPage();
  for (const t of [256, 32, 16]) {
    await p.setViewport({ width: t, height: t });
    await p.setContent('<html><body style="margin:0;background:transparent"><img src="' + src + '" style="width:' + t + 'px;height:' + t + 'px;display:block"></body></html>');
    await p.screenshot({ path: sortie + '/favicon-' + t + '.png', omitBackground: true });
  }
  await b.close();
})();
