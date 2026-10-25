# Favicons des webapps

Icônes d'onglet des webapps pédagogiques (Apps Script, GitHub Pages).

Apps Script n'accepte dans `HtmlOutput.setFaviconUrl()` qu'une URL **publique** se terminant par `.png` ou `.ico` (pas de data URI, pas de lien Drive) : les icônes sont donc rangées ici et servies par jsDelivr, figées par une étiquette de version :

```
https://cdn.jsdelivr.net/gh/mberteloot/webapp-favicons@v1/<nom-du-projet>.png
```

Ajouter une icône : déposer `<nom-du-projet>.png` (carré, 256 px, fond opaque arrondi, lisible à 16 px), committer, puis créer une nouvelle étiquette (`v2`, …) et la reporter dans l'URL du projet (jsDelivr garde en cache les étiquettes existantes).

| Fichier | Projet | Motif |
|---|---|---|
| `4e-initiation-scratch.png` | QG des missions Scratch (4e) | Hector, héros de la Nuit du Code 2023 n°3, sur le bleu nuit du bandeau du QG |
| `3e-mission-piege-photo.png` (v2) | Mission Piège Photo (3e, séquences 2-3) | un piège photo (boîtier vert, objectif ambre, LED infrarouges) sur la « forêt de nuit » du site |

Les scripts de fabrication (Chrome headless + puppeteer-core) sont dans `sources/`.
