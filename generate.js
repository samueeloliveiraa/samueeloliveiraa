const https = require('https');

const USERNAME = 'samsamchi';

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'samsamchi-profile', 'Authorization': process.env.GH_TOKEN ? `token ${process.env.GH_TOKEN}` : '' } }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
      res.on('error', reject);
    }).on('error', reject);
  });
}

const ICONS = {
  C: `<g transform="translate(2,2) scale(0.1875)"><path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-61.5c-.6-1.2-1.5-2.1-2.4-3.2z"/><path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/></g>`,

  TypeScript: `<g transform="translate(2,2) scale(0.1875)"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51.36 59h21.3z"/></g>`,

  Python: `<g transform="translate(2,2) scale(0.1875)"><path fill="#3572A5" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="#FFD43B" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.548v23.515c0 6.693 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></g>`,

  Java: `<g transform="translate(2,2) scale(0.1875)"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.921 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.386-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></g>`,

  JavaScript: `<g transform="translate(2,2) scale(0.1875)"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.196 5.168 16.972 3.758 18.423 7.582.947 3.689-.066 5.922-2.768 7.864-2.301 1.661-5.247 2.424-7.929 2.062-4.726-.618-7.7-3.36-9.419-7.604l-9.124 5.203c1.059 3.012 2.248 4.373 4.143 6.156 9.259 8.529 32.464 7.939 36.874-4.979.165-.478 1.247-3.45.432-8.028zM74.298 43.023H62.18v40.804c0 8.688.45 16.654-.988 19.196-2.289 3.959-8.12 3.455-10.773 2.748-2.764-.785-4.18-2.663-5.723-5.386l-9.069 5.598c2.415 4.956 5.904 8.312 10.275 10.409 6.104 2.886 13.405 3.555 21.896 1.819 5.333-1.124 9.882-3.86 12.337-8.095 3.519-6.305 2.718-13.827 2.684-22.929L74.298 43.023z"/></g>`,
};

const META = {
  C:          { bg: '#1a2535', bar: '#659ad3', tag: 'systems' },
  TypeScript: { bg: '#0d1f35', bar: '#007acc', tag: 'main'    },
  Python:     { bg: '#0d1a2a', bar: '#3572A5', tag: 'backend' },
  Java:       { bg: '#1a1010', bar: '#f89820', tag: 'oop'     },
  JavaScript: { bg: '#1a1a00', bar: '#F0DB4F', tag: 'web'     },
};

function fallbackMeta(name) {
  return { bg: '#1a1a2e', bar: '#7cffd4', tag: 'other' };
}

// Repos ignorados na contagem de linguagens
const EXCLUDED_REPOS = [];

async function main() {
  // Busca repos
  const repos = await get(`https://api.github.com/users/${USERNAME}/repos?per_page=100`);

  // Conta bytes por linguagem
  const totals = {};
  for (const repo of repos) {
    if (repo.fork) continue;
    if (EXCLUDED_REPOS.includes(repo.name)) continue;
    const langs = await get(repo.languages_url);
    for (const [lang, bytes] of Object.entries(langs)) {
      totals[lang] = (totals[lang] || 0) + bytes;
    }
  }

  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  const top = Object.entries(totals)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, bytes]) => ({ name, pct: Math.round(bytes / total * 100) }));

  // Dimensões
  const W = 380;
  const ROW_H = 52;
  const HEADER_H = 90;
  const FOOTER_H = 44;
  const PAD = 28;
  const H = HEADER_H + top.length * ROW_H + FOOTER_H + 16;

  let rows = '';
  top.forEach(({ name, pct }, i) => {
    const meta = META[name] || fallbackMeta(name);
    const icon = ICONS[name] || '';
    const y = HEADER_H + i * ROW_H;
    const barW = Math.round((W - PAD * 2) * pct / 100);
    const abbr = name.length <= 2 ? name : name.slice(0, 2);

    rows += `
      <!-- row ${name} -->
      <g transform="translate(${PAD}, ${y})">
        <!-- icon bg -->
        <rect x="0" y="6" width="26" height="26" rx="7" fill="${meta.bg}"/>
        <svg x="0" y="6" width="26" height="26" viewBox="0 0 128 128">${icon ? ICONS[name].replace(/<g transform="[^"]*">/, '<g>') : ''}</svg>
        ${!ICONS[name] ? `<text x="13" y="23" font-family="monospace" font-size="9" font-weight="700" fill="#fff" text-anchor="middle">${abbr}</text>` : ''}

        <!-- lang name -->
        <text x="34" y="20" font-family="'JetBrains Mono',monospace" font-size="12" font-weight="600" fill="#e8eaf0">${name}</text>

        <!-- tag -->
        <rect x="34" y="24" width="${meta.tag.length * 6.5 + 10}" height="12" rx="6" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
        <text x="${34 + (meta.tag.length * 6.5 + 10) / 2}" y="33.5" font-family="'JetBrains Mono',monospace" font-size="7.5" font-weight="600" fill="#4a5068" text-anchor="middle" letter-spacing="1">${meta.tag.toUpperCase()}</text>

        <!-- pct -->
        <text x="${W - PAD * 2}" y="20" font-family="'JetBrains Mono',monospace" font-size="11" font-weight="700" fill="#e8eaf0" text-anchor="end">${pct}%</text>

        <!-- bar track -->
        <rect x="0" y="38" width="${W - PAD * 2}" height="4" rx="2" fill="rgba(255,255,255,0.05)"/>
        <!-- bar fill -->
        <rect x="0" y="38" width="${barW}" height="4" rx="2" fill="${meta.bar}"/>
      </g>
    `;
  });

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&amp;family=Syne:wght@800&amp;display=swap');</style>
    <radialGradient id="g1" cx="100%" cy="0%" r="50%">
      <stop offset="0%" stop-color="#7cffd4" stop-opacity="0.07"/>
      <stop offset="100%" stop-color="#7cffd4" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="0%" cy="100%" r="60%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- bg -->
  <rect width="${W}" height="${H}" rx="16" fill="#12151f" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
  <rect width="${W}" height="${H}" rx="16" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" rx="16" fill="url(#g2)"/>

  <!-- header -->
  <text x="${PAD}" y="34" font-family="'JetBrains Mono',monospace" font-size="9" font-weight="600" fill="#7cffd4" letter-spacing="3">// STACK</text>
  <text x="${PAD}" y="58" font-family="'Syne',sans-serif" font-size="20" font-weight="800" fill="#e8eaf0">Samuel Oliveira</text>
  <text x="${PAD}" y="76" font-family="'JetBrains Mono',monospace" font-size="10" fill="#4a5068">@samsamchi · Software Developer</text>

  <!-- dot grid -->
  ${[0,1,2,3].map(r => [0,1,2,3].map(c =>
    `<circle cx="${W - PAD - 3 - c * 10}" cy="${14 + r * 10}" r="2.5" fill="#7cffd4" opacity="0.18"/>`
  ).join('')).join('')}

  <!-- rows -->
  ${rows}

  <!-- divider -->
  <line x1="${PAD}" y1="${H - FOOTER_H}" x2="${W - PAD}" y2="${H - FOOTER_H}" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>

  <!-- footer -->
  <circle cx="${PAD + 5}" cy="${H - FOOTER_H/2}" r="3" fill="#7cffd4" opacity="0.9"/>
  <text x="${PAD + 14}" y="${H - FOOTER_H/2 + 4}" font-family="'JetBrains Mono',monospace" font-size="9" fill="#4a5068">603 contributions · 2026</text>
  <text x="${W - PAD}" y="${H - FOOTER_H/2 + 4}" font-family="'JetBrains Mono',monospace" font-size="9" fill="#7cffd4" text-anchor="end" opacity="0.7">github/samsamchi →</text>
</svg>`;

  const fs = require('fs');
  fs.writeFileSync('languages.svg', svg);
  console.log('SVG gerado com sucesso!');
}

main().catch(console.error);