(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`./${e.replace(/^\//,``).split(`/`).map(e=>encodeURIComponent(e)).join(`/`)}`}var t={horizontalLight:`assets/logos/otv-agency-horizontal.png`,horizontalDark:`assets/logos/otv-agency-horizontal-wht.png`,symbol3d:`assets/logos/otv-agency-3d-v-symbol.png`,flatV1:`assets/logos/v-logo-flat-v1.transparent.png`,flatV2:`assets/logos/v-logo-flat-v2.transparent.png`},n={horizontalLight:`OTV Agency_Horizontal.png`,horizontalDark:`OTV Agency_HorizontalWHT.png`,symbol3d:`OTV Agency 3D V_Symbol.png`,flatV1:`V_Logo_Flat_V1.transparent.png`,flatV2:`V_Logo_Flat_V2.transparent.png`},r=`https://drive.google.com/drive/folders/11ZLYzNSfNJLYiAAtNAFE5fB8v9gDXZRV`;function i(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function a(e){let t=e.replace(`#`,``),n=parseInt(t.slice(0,2),16),r=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);return .2126*i(n)+.7152*i(r)+.0722*i(a)}function o(e,t){let n=a(e),r=a(t),i=Math.max(n,r),o=Math.min(n,r);return Math.round((i+.05)/(o+.05)*100)/100}function s(e,t){return[{role:`body`,fg:`text`,bg:`surface`,min:4.5},{role:`body`,fg:`text`,bg:`surface_alt`,min:4.5},{role:`body in panel`,fg:`text`,bg:`panel`,min:4.5},{role:`secondary/notes`,fg:`text_secondary`,bg:`surface`,min:4.5},{role:`secondary on alt`,fg:`text_secondary`,bg:`surface_alt`,min:4.5},{role:`large heading`,fg:`heading`,bg:`surface`,min:3},{role:`link`,fg:`link`,bg:`surface`,min:4.5},{role:`link on alt`,fg:`link`,bg:`surface_alt`,min:4.5},{role:`link in panel`,fg:`link`,bg:`panel`,min:4.5},{role:`accent rule/icon (non-text)`,fg:`accent`,bg:`surface`,min:3},{role:`focus ring`,fg:`focus`,bg:`surface`,min:3}].map(({role:n,fg:r,bg:i,min:a})=>{let s=t[r],c=t[i],l=o(s,c);return{mode:e,role:n,fg:r,bg:i,fg_hex:s,bg_hex:c,ratio:l,min:a,pass:l>=a}})}var c=[`surface`,`surface_alt`,`panel`,`text`,`text_secondary`,`heading`,`link`,`accent`,`border`,`focus`];function l(e){let t={surface:e.white,surface_alt:e.cream,panel:e.cream_deep,text:e.charcoal,text_secondary:`#6f736c`,heading:e.forest,link:e.forest,accent:e.forest,border:e.forest,focus:e.forest},n={surface:e.forest_deep,surface_alt:e.black,panel:e.forest,text:e.white,text_secondary:e.muted_light,heading:e.white,link:e.white,accent:e.muted_light,border:e.muted_light,focus:e.white};return{name:`Forest / Cream (Verified)`,status:`VERIFIED BRAND`,rationale:`Canonical OTV palette per OTV-Agency-Brand-Guide.md (July 2026). Muted secondary text does not meet 4.5:1 on light surfaces.`,light:t,dark:n,contrast:[...s(`light`,t),...s(`dark`,n)]}}function u(e,t,n,r){return e===`B`&&t===`light`?n.surface:r.black}function d(e,t,n,r,i){let a=n===`Current`||n===`C`?`linear-gradient(165deg, ${r.forest_deep} 0%, ${r.charcoal} 55%, ${r.black} 100%)`:`linear-gradient(165deg, ${t.surface} 0%, ${t.surface_alt} 55%, ${r.black} 100%)`,o=u(n,`light`,e,r);return`
    <div class="brief-shell" style="background:${e.surface_alt};padding:24px 12px;">
      <div class="brief-card" style="max-width:640px;margin:0 auto;background:${e.surface};border:1px solid ${e.panel};border-radius:12px;overflow:hidden;">
        <div style="padding:10px 32px;background:${e.panel};font-family:${i.body};font-size:13px;font-weight:700;letter-spacing:0.1em;color:${e.text};text-align:center;">
          EXAMPLE CONTENT ONLY · NOT A REAL BRIEF · NO OPERATIONAL FACTS
        </div>
        <header class="brief-px" style="background-image:${a};padding:28px 32px 26px;">
          <div style="height:2px;width:48px;background:${t.accent};margin-bottom:10px;" aria-hidden="true" title="proposed accent treatment"></div>
          <p class="brief-eyebrow" style="margin:0 0 10px;font-family:${i.body};font-size:13px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${t.text_secondary};">OTV AGENCY · ON THE VERGE</p>
          <h1 class="brief-title" style="margin:0;font-family:${i.display};font-size:38px;font-weight:400;line-height:1.1;color:${r.white};">Morning Command Brief</h1>
          <p style="margin:10px 0 0;font-family:${i.body};font-size:15px;color:${t.text_secondary};">Weekday, Month D, YYYY · EXAMPLE (ET)</p>
        </header>
        ${p(`Schedule (ET)`,g(e,i),e,i)}
        ${p(`Outstanding Projects`,_(e,i),e,i)}
        ${p(`Finances`,v(e,i),e,i)}
        ${p(`Opportunities`,y(e,i),e,i)}
        ${x(e,i)}
        ${p(`Top Three Outcomes`,b(e,i),e,i)}
        ${S(e,t,i)}
        <footer class="brief-px" style="background:${o};padding:18px 32px;">
          <p style="margin:0;font-family:${i.body};font-size:14px;font-weight:600;color:${r.white};">Verge · Chief of Staff, OTV Agency</p>
          <p style="margin:4px 0 0;font-family:${i.body};font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:${r.muted_light};">START. BRAND. GROW.</p>
        </footer>
      </div>
    </div>
  `}function f(e,t,n){return`<h2 style="margin:0 0 12px;padding:0 0 8px;border-bottom:2px solid ${t.border};font-family:${n.body};font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${t.heading};">——&nbsp; ${e}</h2>`}function p(e,t,n,r){return`<section class="brief-px" style="padding:24px 32px 4px;">${f(e,n,r)}${t}</section>`}function m(e,t,n){return`<li style="margin:0 0 8px;font-family:${n.body};font-size:16px;line-height:1.6;color:${t.text};">${e}</li>`}function h(e,t,n,r){return`<a href="${e}" style="color:${n.link};text-decoration:underline;font-weight:600;font-family:${r.body};">${t}</a>`}function g(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> 8:30 AM to 12:30 PM: Example calendar block title`,e,t)}${m(`<em>[EXAMPLE]</em> 1:15 to 5:15 PM: Example work block`,e,t)}</ul>`}function _(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> Example project name: priority, due date · ${h(`https://example.com/source`,`source`,e,t)}`,e,t)}${m(`<em>[EXAMPLE]</em> Example second project: status line`,e,t)}</ul>`}function v(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> Example billing notice with amount placeholder $0.00 · ${h(`https://example.com/source`,`source`,e,t)}`,e,t)}</ul>`}function y(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> Example opportunity line with next step`,e,t)}</ul>`}function b(e,t){return`<ol style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> Example outcome one`,e,t)}${m(`<em>[EXAMPLE]</em> Example outcome two`,e,t)}${m(`<em>[EXAMPLE]</em> Example outcome three`,e,t)}</ol>`}function x(e,t){return`<section class="brief-px" style="padding:24px 32px 4px;">${f(`Decision Queue`,e,t)}
    <p class="brief-note" style="margin:0 0 12px;font-family:${t.body};font-size:14px;line-height:1.6;color:${e.text};">Reply with <strong>APPROVED</strong>, <strong>CHANGES</strong>, or <strong>REJECTED</strong> and the item number. Silence is not approval.</p>
    <div style="background:${e.surface_alt};border-left:4px solid ${e.border};border-radius:8px;padding:14px 18px 6px;">
      <ol style="margin:0;padding:0 0 0 22px;">${m(`<em>[EXAMPLE]</em> Example decision: what needs a yes/no and why`,e,t)}${m(`<em>[EXAMPLE]</em> Example second decision`,e,t)}</ol>
    </div>
  </section>`}function S(e,t,n){return`<section class="brief-px" style="padding:24px 32px 28px;">${f(`Quote`,e,n)}
    <blockquote style="margin:0;padding:18px 22px;background:${t.surface};border-radius:8px;">
      <p style="margin:0;font-family:${n.display};font-size:24px;font-style:italic;line-height:1.35;color:${t.text};">"[EXAMPLE] Quote text goes here, sourced and verbatim."</p>
      <p style="margin:10px 0 0;font-family:${n.body};font-size:14px;color:${t.text_secondary};">— Attribution placeholder</p>
    </blockquote>
  </section>`}function C(e,t,n,r,i){let a=d(e,t,n,r,i);return`<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="color-scheme" content="light"><title>EXAMPLE Morning Brief (email-safe)</title></head>
<body style="margin:0;padding:0;font-family:${i.body};">${a}</body></html>`}var w=`otv-review-color-mode`,T=`otv-review-palette`,E,D,O={},k=`Current`,A=`light`,j=`web`;function M(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches}function N(){let e=localStorage.getItem(w);return e===`light`||e===`dark`?e:M()?`dark`:`light`}function P(){let e=localStorage.getItem(T);return e&&[`Current`,`A`,`B`,`C`].includes(e)?e:`Current`}function F(e,t){let n=document.documentElement;n.dataset.siteMode=e;for(let e of c)n.style.setProperty(`--${e.replace(/_/g,`-`)}`,t[e]);n.style.setProperty(`--font-display`,E.fonts.display),n.style.setProperty(`--font-body`,E.fonts.body)}function I(){let e=O[k];return{light:e.light,dark:e.dark,dir:e}}function L(){let{light:e,dark:t}=I();return A===`light`?e:t}async function R(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,setTimeout(()=>{t.textContent=n},1200)}catch{t.textContent=`Copy failed`}}function z(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function B(e){let{dir:t}=I(),n=L(),r=E.verified_reference;e.innerHTML=`
    <div class="table-scroll" tabindex="0" aria-label="Token values table, scroll horizontally on small screens">
      <table class="data-table">
        <thead><tr>
          <th scope="col">Swatch</th>
          <th scope="col">Token</th>
          <th scope="col">Active hex</th>
          <th scope="col">Current (verified)</th>
          <th scope="col">Copy</th>
        </tr></thead>
        <tbody>
          ${c.map(e=>{let t=n[e];return{key:e,hex:t,currentHex:k===`Current`?t:A===`light`?l(r).light[e]:l(r).dark[e]}}).map(({key:e,hex:t,currentHex:n})=>`
            <tr>
              <td><span class="swatch" style="background:${t}" title="${z(t)}"></span></td>
              <td><code>${z(e)}</code></td>
              <td><code class="hex-value">${z(t)}</code></td>
              <td><code>${k===`Current`?`—`:z(n)}</code></td>
              <td><button type="button" class="btn-copy" data-hex="${z(t)}">Copy hex</button></td>
            </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note"><strong>${z(t.name)}</strong> · ${z(t.status)}${t.rationale?` — ${z(t.rationale)}`:``}</p>
  `,e.querySelectorAll(`.btn-copy`).forEach(e=>{e.addEventListener(`click`,()=>R(e.dataset.hex??``,e))})}function V(e){let t=O[k].contrast?.filter(e=>e.mode===A)??[],n=E.verified_reference;e.innerHTML=`
    ${k===`Current`&&A===`light`?`<p class="warn">Verified <code>Muted</code> (#6f736c) on light surfaces: computed ${o(`#6f736c`,n.cream)}:1 on Cream, ${o(`#6f736c`,n.white)}:1 on White, ${o(`#6f736c`,n.cream_deep)}:1 on Cream Deep — <strong>FAIL</strong> at 4.5:1. Table rows below use live computed ratios.</p>`:``}
    <div class="table-scroll" tabindex="0" aria-label="Contrast pairings table">
      <table class="data-table contrast-table">
        <thead><tr>
          <th>Role</th><th>Foreground</th><th>Background</th><th>Ratio</th><th>Min</th><th>Result</th>
        </tr></thead>
        <tbody>
          ${t.map(e=>{k!==`Current`||e.fg===`text_secondary`&&e.mode===`light`&&e.pass;let t=o(e.fg_hex,e.bg_hex),n=t>=e.min;return`<tr>
                <td>${z(e.role)}</td>
                <td><code>${z(e.fg)}</code> ${z(e.fg_hex)}</td>
                <td><code>${z(e.bg)}</code> ${z(e.bg_hex)}</td>
                <td>${t.toFixed(2)}${k===`Current`?t===e.ratio?``:` <span class="muted">(spec ${e.ratio})</span>`:``}</td>
                <td>${e.min}</td>
                <td><span class="result-text">${n?`PASS`:`FAIL`}</span></td>
              </tr>`}).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note" id="computed-contrast-live">Live check: focus on surface = <span id="focus-ratio">—</span></p>
  `;let r=L(),i=document.getElementById(`focus-ratio`);i&&(i.textContent=`${o(r.focus,r.surface).toFixed(2)}:1`)}function H(e){let{light:t,dark:n}=I(),r=j===`web`?d(t,n,k,E.verified_reference,E.fonts):`<pre class="email-code" aria-label="Email-safe HTML source">${z(C(t,n,k,E.verified_reference,E.fonts))}</pre>`;if(e.innerHTML=`
    <div class="brief-tabs" role="tablist" aria-label="Brief render mode">
      <button type="button" role="tab" id="tab-web" aria-selected="${j===`web`}" aria-controls="brief-panel">Web render</button>
      <button type="button" role="tab" id="tab-email" aria-selected="${j===`email`}" aria-controls="brief-panel">Email-safe render</button>
    </div>
    <div class="brief-frames">
      <figure class="brief-frame" data-width="640">
        <figcaption>640px width</figcaption>
        <div class="brief-viewport" style="width:640px;max-width:100%;">${j===`web`?r:`<iframe title="Email preview 640" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
      <figure class="brief-frame" data-width="375">
        <figcaption>375px mobile frame</figcaption>
        <div class="brief-viewport brief-viewport--mobile" style="width:375px;max-width:100%;">${j===`web`?r:`<iframe title="Email preview 375" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
    </div>
    <div id="brief-panel" role="tabpanel"></div>
  `,j!==`web`){let r=C(t,n,k,E.verified_reference,E.fonts);e.querySelectorAll(`.email-iframe`).forEach(e=>{e.srcdoc=r})}e.querySelector(`#tab-web`)?.addEventListener(`click`,()=>{j=`web`,H(e)}),e.querySelector(`#tab-email`)?.addEventListener(`click`,()=>{j=`email`,H(e)})}function U(){F(A,L());let e=document.getElementById(`direction-status`);if(e){let t=O[k];e.textContent=k===`Current`?`VERIFIED BRAND · ${t.name}`:`PROPOSED / NOT APPROVED · ${t.name}`,e.className=k===`Current`?`direction-status verified`:`direction-status proposed`}B(document.getElementById(`token-table`)),V(document.getElementById(`contrast-table`)),H(document.getElementById(`brief-preview`)),document.querySelectorAll(`input[name="palette"]`).forEach(e=>{e.checked=e.value===k});let t=document.getElementById(`mode-toggle`);t&&(t.setAttribute(`aria-pressed`,String(A===`dark`)),t.textContent=A===`dark`?`Dark mode on`:`Light mode on`)}function W(){let e=document.getElementById(`palette-group`);e?.addEventListener(`keydown`,t=>{let n=[`Current`,`A`,`B`,`C`],r=n.indexOf(k);t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),k=n[(r+1)%n.length],localStorage.setItem(T,k),U(),e.querySelector(`input[value="${k}"]`)?.focus()):(t.key===`ArrowLeft`||t.key===`ArrowUp`)&&(t.preventDefault(),k=n[(r-1+n.length)%n.length],localStorage.setItem(T,k),U(),e.querySelector(`input[value="${k}"]`)?.focus())}),e?.querySelectorAll(`input[name='palette']`).forEach(e=>{e.addEventListener(`change`,()=>{e.checked&&(k=e.value,localStorage.setItem(T,k),U())})}),document.getElementById(`mode-toggle`)?.addEventListener(`click`,()=>{A=A===`light`?`dark`:`light`,localStorage.setItem(w,A),U()}),document.getElementById(`copy-reply`)?.addEventListener(`click`,e=>{R(`APPROVED A | APPROVED B | APPROVED C | CHANGES + notes`,e.currentTarget)})}function G(){let i=document.getElementById(`app`);i&&(i.innerHTML=`
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-banner" role="banner">
      <p>PROPOSED PALETTES · NOT APPROVED · EXAMPLE CONTENT ONLY</p>
    </header>
    <div class="toolbar">
      <div class="toolbar-inner">
        <fieldset class="palette-fieldset">
          <legend>Palette direction</legend>
          <div class="palette-group" id="palette-group" role="radiogroup" aria-label="Palette direction">
            <label class="palette-option"><input type="radio" name="palette" value="Current" /> Current</label>
            <label class="palette-option palette-option--proposed"><input type="radio" name="palette" value="A" /> A</label>
            <label class="palette-option palette-option--proposed"><input type="radio" name="palette" value="B" /> B</label>
            <label class="palette-option palette-option--proposed"><input type="radio" name="palette" value="C" /> C</label>
          </div>
        </fieldset>
        <button type="button" id="mode-toggle" aria-pressed="false">Light mode on</button>
      </div>
      <p id="direction-status" class="direction-status verified"></p>
    </div>
    <main id="main" class="main">
      <section class="panel" aria-labelledby="sources-heading">
        <h2 id="sources-heading">Source notes</h2>
        <p class="lede">Private draft review for Cory. Fonts unchanged. Horizontal and 3D specimens use unmodified PNG originals; flat V tiles below are transparent <strong>derivatives</strong> (originals unchanged on Drive). Verified brand guide: Forest/Cream (July 2026).</p>
        <ul class="source-list">
          <li><a href="https://drive.google.com/file/d/1ThF9M2zakxSdWkVKTjMzADIy-OA-xr65/view" rel="noopener noreferrer">OTV Agency Brand Guide (Drive)</a></li>
          <li>Logo originals: <a href="https://drive.google.com/drive/folders/11ZLYzNSfNJLYiAAtNAFE5fB8v9gDXZRV" rel="noopener noreferrer">Approved OTV Logos (Drive)</a></li>
        </ul>
        <p class="panel-note">Three V symbol variants are shown for comparison; no variant is pre-selected.</p>
        <p class="tag proposed-tag">Directions A, B, C are <strong>PROPOSED / NOT APPROVED</strong> (Pixel, Nov 8, 2026 ET).</p>
      </section>

      <section class="panel" aria-labelledby="tokens-heading">
        <h2 id="tokens-heading">Design tokens</h2>
        <div id="token-table"></div>
      </section>

      <section class="panel" aria-labelledby="contrast-heading">
        <h2 id="contrast-heading">Contrast pairings</h2>
        <div id="contrast-table"></div>
      </section>

      <section class="panel" aria-labelledby="specimens-heading">
        <h2 id="specimens-heading">Logos, type &amp; interactive specimens</h2>
        <div class="symbol-effect-review" role="group" aria-labelledby="symbol-effect-heading">
          <p id="symbol-effect-heading" class="specimen-label symbol-primary-tag">Primary specimen · <code>${n.symbol3d}</code> · PROPOSED effect review (effect-only)</p>
          <p class="glow-disclosure proposed-tag"><strong>PROPOSED EFFECT-ONLY · NOT APPROVED.</strong> Teal <code>#4FC3CF</code> + blue <code>#6AABDC</code> — not canonical palette. No palette direction selected.</p>
          <p class="effect-limitation">Exterior edge: layered <code>filter: drop-shadow()</code> on alpha (silhouette-following, outside opaque graphite only). Diagonal teal→blue is approximated by dual-offset shadows, not an SVG gradient stroke. Prior diffuse palette-accent radial removed from this comparison.</p>
          <div class="effect-compare-grid" data-spec-width="320">
            <figure class="effect-compare-cell">
              <figcaption class="specimen-label">Untreated · PNG only</figcaption>
              <div class="symbol-3d-stage symbol-3d-stage--compare symbol-3d-stage--untreated">
                <img class="logo-img--symbol-3d logo-img--symbol-3d-primary logo-img--compare" src="${e(t.symbol3d)}" width="429" height="414" alt="3D V symbol untreated" />
              </div>
            </figure>
            <figure class="effect-compare-cell">
              <figcaption class="specimen-label">Treated · proposed edge + halo</figcaption>
              <div class="symbol-3d-stage symbol-3d-stage--compare symbol-3d-treated">
                <img class="logo-img--symbol-3d logo-img--symbol-3d-primary logo-img--compare logo-img--effect-treated" src="${e(t.symbol3d)}" width="429" height="414" alt="3D V symbol with proposed exterior edge and halo" />
              </div>
            </figure>
          </div>
          <details class="effect-params">
            <summary>Implemented effect parameters (320px render width)</summary>
            <ul class="effect-param-list">
              <li>Edge: teal→blue diagonal via dual <code>drop-shadow</code> (α-following), 1px mobile / 1.25px desktop (max 1.5px)</li>
              <li>Edge opacity: 0.72 light · 0.82 dark</li>
              <li>Halo: 18px blur, spread ≤3px, same colors · opacity 0.14 light · 0.22 dark</li>
              <li>Source PNG pixels unchanged; no animation</li>
            </ul>
          </details>
        </div>
        <h3 class="specimen-subhead specimen-subhead--secondary">Secondary specimens</h3>
        <div class="specimen-grid specimen-grid--horizontal specimen-grid--secondary">
          <div class="logo-specimen logo-specimen--backplate-dark-band">
            <p class="specimen-label"><code>${n.horizontalDark}</code> · horizontal on dark band <span class="accent-note">(invariant verified dark band · proposed accent rule; 2132×830 transparent)</span></p>
            <div class="logo-row">
              <span class="accent-rule" aria-hidden="true"></span>
              <img class="logo-img--horizontal" src="${e(t.horizontalDark)}" width="2132" height="830" alt="OTV Agency horizontal lockup, white artwork on transparent" />
            </div>
          </div>
          <div class="logo-specimen logo-specimen--backplate-cream">
            <p class="specimen-label"><code>${n.horizontalLight}</code> · horizontal on cream (invariant #ebe7df · 2132×830 transparent)</p>
            <img class="logo-img--horizontal" src="${e(t.horizontalLight)}" width="2132" height="830" alt="OTV Agency horizontal lockup, dark artwork on transparent" />
          </div>
        </div>
        <h4 class="specimen-subhead specimen-subhead--minor">Flat V · transparent derivatives <span class="accent-note">(<a href="${r}" rel="noopener noreferrer">originals on Drive</a> · no selection implied)</span></h4>
        <p class="panel-note flat-derivative-note"><strong>DERIVATIVE / NOT ORIGINAL FILE.</strong> Pixel-reviewed RGBA extractions (1024×1024). Backing is specimen CSS only.</p>
        <div class="specimen-grid specimen-grid--symbols specimen-grid--secondary">
          <figure class="logo-specimen logo-specimen--symbol logo-specimen--flat-backplate-light">
            <figcaption class="specimen-label"><code>${n.flatV1}</code> · dark V <code>#142120</code> on light backing</figcaption>
            <img class="logo-img--symbol-flat" src="${e(t.flatV1)}" width="1024" height="1024" alt="Flat V dark glyph transparent derivative on light specimen backing" />
          </figure>
          <figure class="logo-specimen logo-specimen--symbol logo-specimen--flat-backplate-dark">
            <figcaption class="specimen-label"><code>${n.flatV2}</code> · near-white V <code>#FFFFFE</code> on dark backing</figcaption>
            <img class="logo-img--symbol-flat" src="${e(t.flatV2)}" width="1024" height="1024" alt="Flat V near-white glyph transparent derivative on dark specimen backing" />
          </figure>
        </div>
        <div class="type-specimen">
          <p class="eyebrow-sample">OTV AGENCY · ON THE VERGE</p>
          <p class="display-sample">Morning Command Brief</p>
          <p class="body-sample">Body 16px · Notes 14px secondary color below.</p>
          <p class="note-sample">Caption / secondary text specimen using <code>text_secondary</code> token.</p>
        </div>
        <div class="interactive-specimens">
          <a href="#main" class="sample-link">Sample underlined link</a>
          <button type="button" class="sample-button">Sample button</button>
          <button type="button" class="sample-button sample-button--ghost">Ghost button</button>
        </div>
      </section>

      <section class="panel" aria-labelledby="brief-heading">
        <h2 id="brief-heading">Morning brief preview</h2>
        <p class="lede">Layout matches the verified template; content is example-only.</p>
        <div id="brief-preview"></div>
      </section>

      <section class="panel decision-panel" aria-labelledby="decision-heading">
        <h2 id="decision-heading">Decision prompt</h2>
        <p>Reply to Verge with <strong>APPROVED A</strong>, <strong>APPROVED B</strong>, <strong>APPROVED C</strong>, or <strong>CHANGES</strong> + notes. Silence is not approval.</p>
        <button type="button" id="copy-reply" class="sample-button">Copy reply phrase</button>
      </section>
    </main>
    <footer class="site-footer">
      <p>Private preview · not published · awaiting Cory approval</p>
    </footer>
  `)}async function K(){E=await(await fetch(e(`data/proposed-tokens.json`))).json(),D=l(E.verified_reference),O.Current=D,O.A=E.directions.A,O.B=E.directions.B,O.C=E.directions.C,k=P(),A=N(),G(),W(),U()}K().catch(e=>{console.error(e),document.body.innerHTML=`<p role="alert">Failed to load review site: ${z(String(e))}</p>`});