// Favicon : Hector (marche_face_1, Nuit du Code 2023) sur un carré arrondi bleu nuit.
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const ndc = process.argv[2], sortie = process.argv[3];
const svg = fs.readFileSync(ndc + '/652861c8dc28ccb47de228b9daabeae5.svg', 'utf8');
const planche = fs.readFileSync(ndc + '/477213465408815e23f11d4621b97bfe.svg', 'utf8');
const src = s => 'data:image/svg+xml;base64,' + Buffer.from(s).toString('base64');
const imgs = ['652861c8dc28ccb47de228b9daabeae5','3e92c8ee5878b980f9960b03e4ef0daf','8c0cecb7ea0b123bd17b46f38f4add24','3472d3fd37f9cd6981dc2f3ea11bd753','165356fc4314fcd6f0317d4ad018e799','9f53271c8c2d41ff3118c540f798f271','477213465408815e23f11d4621b97bfe']
  .map(h => '<img style="height:120px;margin:6px;background:#eee" src="' + src(fs.readFileSync(ndc + '/' + h + '.svg', 'utf8')) + '">').join('');
(async () => {
  const b = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: 'new' });
  const p = await b.newPage();
  for (const t of [256, 32, 16]) {
    await p.setViewport({ width: t, height: t });
    await p.setContent('<html><body style="margin:0;background:transparent"><div style="width:' + t + 'px;height:' + t + 'px;border-radius:22%;background:#1d2a4d;display:grid;place-items:center">'
      + '<img src="' + src(svg) + '" style="height:84%;image-rendering:auto"></div></body></html>');
    await p.screenshot({ path: sortie + '/favicon-' + t + '.png', omitBackground: true });
  }
  await p.setViewport({ width: 1000, height: 300 });
  await p.setContent('<html><body>' + imgs + '</body></html>');
  await p.screenshot({ path: sortie + '/planche.png' });
  await b.close();
})();
