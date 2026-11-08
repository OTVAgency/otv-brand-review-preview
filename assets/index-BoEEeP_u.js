(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`./${e.replace(/^\//,``).split(`/`).map(e=>encodeURIComponent(e)).join(`/`)}`}var t={horizontalLight:`assets/logos/otv-agency-horizontal.png`,horizontalDark:`assets/logos/otv-agency-horizontal-wht.png`,symbol3d:`assets/logos/otv-agency-3d-v-symbol.png`,flatV1:`assets/logos/v-logo-flat-v1.png`,flatV2:`assets/logos/v-logo-flat-v2.png`},n={horizontalLight:`OTV Agency_Horizontal.png`,horizontalDark:`OTV Agency_HorizontalWHT.png`,symbol3d:`OTV Agency 3D V_Symbol.png`,flatV1:`V_Logo_Flat_V1.png`,flatV2:`V_Logo_Flat_V2.png`};function r(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function i(e){let t=e.replace(`#`,``),n=parseInt(t.slice(0,2),16),i=parseInt(t.slice(2,4),16),a=parseInt(t.slice(4,6),16);return .2126*r(n)+.7152*r(i)+.0722*r(a)}function a(e,t){let n=i(e),r=i(t),a=Math.max(n,r),o=Math.min(n,r);return Math.round((a+.05)/(o+.05)*100)/100}function o(e,t){return[{role:`body`,fg:`text`,bg:`surface`,min:4.5},{role:`body`,fg:`text`,bg:`surface_alt`,min:4.5},{role:`body in panel`,fg:`text`,bg:`panel`,min:4.5},{role:`secondary/notes`,fg:`text_secondary`,bg:`surface`,min:4.5},{role:`secondary on alt`,fg:`text_secondary`,bg:`surface_alt`,min:4.5},{role:`large heading`,fg:`heading`,bg:`surface`,min:3},{role:`link`,fg:`link`,bg:`surface`,min:4.5},{role:`link on alt`,fg:`link`,bg:`surface_alt`,min:4.5},{role:`link in panel`,fg:`link`,bg:`panel`,min:4.5},{role:`accent rule/icon (non-text)`,fg:`accent`,bg:`surface`,min:3},{role:`focus ring`,fg:`focus`,bg:`surface`,min:3}].map(({role:n,fg:r,bg:i,min:o})=>{let s=t[r],c=t[i],l=a(s,c);return{mode:e,role:n,fg:r,bg:i,fg_hex:s,bg_hex:c,ratio:l,min:o,pass:l>=o}})}var s=[`surface`,`surface_alt`,`panel`,`text`,`text_secondary`,`heading`,`link`,`accent`,`border`,`focus`];function c(e){let t={surface:e.white,surface_alt:e.cream,panel:e.cream_deep,text:e.charcoal,text_secondary:`#6f736c`,heading:e.forest,link:e.forest,accent:e.forest,border:e.forest,focus:e.forest},n={surface:e.forest_deep,surface_alt:e.black,panel:e.forest,text:e.white,text_secondary:e.muted_light,heading:e.white,link:e.white,accent:e.muted_light,border:e.muted_light,focus:e.white};return{name:`Forest / Cream (Verified)`,status:`VERIFIED BRAND`,rationale:`Canonical OTV palette per OTV-Agency-Brand-Guide.md (July 2026). Muted secondary text does not meet 4.5:1 on light surfaces.`,light:t,dark:n,contrast:[...o(`light`,t),...o(`dark`,n)]}}function l(e,t,n,r){return e===`B`&&t===`light`?n.surface:r.black}function u(e,t,n,r,i){let a=n===`Current`||n===`C`?`linear-gradient(165deg, ${r.forest_deep} 0%, ${r.charcoal} 55%, ${r.black} 100%)`:`linear-gradient(165deg, ${t.surface} 0%, ${t.surface_alt} 55%, ${r.black} 100%)`,o=l(n,`light`,e,r);return`
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
        ${f(`Schedule (ET)`,h(e,i),e,i)}
        ${f(`Outstanding Projects`,g(e,i),e,i)}
        ${f(`Finances`,_(e,i),e,i)}
        ${f(`Opportunities`,v(e,i),e,i)}
        ${b(e,i)}
        ${f(`Top Three Outcomes`,y(e,i),e,i)}
        ${x(e,t,i)}
        <footer class="brief-px" style="background:${o};padding:18px 32px;">
          <p style="margin:0;font-family:${i.body};font-size:14px;font-weight:600;color:${r.white};">Verge · Chief of Staff, OTV Agency</p>
          <p style="margin:4px 0 0;font-family:${i.body};font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:${r.muted_light};">START. BRAND. GROW.</p>
        </footer>
      </div>
    </div>
  `}function d(e,t,n){return`<h2 style="margin:0 0 12px;padding:0 0 8px;border-bottom:2px solid ${t.border};font-family:${n.body};font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${t.heading};">——&nbsp; ${e}</h2>`}function f(e,t,n,r){return`<section class="brief-px" style="padding:24px 32px 4px;">${d(e,n,r)}${t}</section>`}function p(e,t,n){return`<li style="margin:0 0 8px;font-family:${n.body};font-size:16px;line-height:1.6;color:${t.text};">${e}</li>`}function m(e,t,n,r){return`<a href="${e}" style="color:${n.link};text-decoration:underline;font-weight:600;font-family:${r.body};">${t}</a>`}function h(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> 8:30 AM to 12:30 PM: Example calendar block title`,e,t)}${p(`<em>[EXAMPLE]</em> 1:15 to 5:15 PM: Example work block`,e,t)}</ul>`}function g(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> Example project name: priority, due date · ${m(`https://example.com/source`,`source`,e,t)}`,e,t)}${p(`<em>[EXAMPLE]</em> Example second project: status line`,e,t)}</ul>`}function _(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> Example billing notice with amount placeholder $0.00 · ${m(`https://example.com/source`,`source`,e,t)}`,e,t)}</ul>`}function v(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> Example opportunity line with next step`,e,t)}</ul>`}function y(e,t){return`<ol style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> Example outcome one`,e,t)}${p(`<em>[EXAMPLE]</em> Example outcome two`,e,t)}${p(`<em>[EXAMPLE]</em> Example outcome three`,e,t)}</ol>`}function b(e,t){return`<section class="brief-px" style="padding:24px 32px 4px;">${d(`Decision Queue`,e,t)}
    <p class="brief-note" style="margin:0 0 12px;font-family:${t.body};font-size:14px;line-height:1.6;color:${e.text};">Reply with <strong>APPROVED</strong>, <strong>CHANGES</strong>, or <strong>REJECTED</strong> and the item number. Silence is not approval.</p>
    <div style="background:${e.surface_alt};border-left:4px solid ${e.border};border-radius:8px;padding:14px 18px 6px;">
      <ol style="margin:0;padding:0 0 0 22px;">${p(`<em>[EXAMPLE]</em> Example decision: what needs a yes/no and why`,e,t)}${p(`<em>[EXAMPLE]</em> Example second decision`,e,t)}</ol>
    </div>
  </section>`}function x(e,t,n){return`<section class="brief-px" style="padding:24px 32px 28px;">${d(`Quote`,e,n)}
    <blockquote style="margin:0;padding:18px 22px;background:${t.surface};border-radius:8px;">
      <p style="margin:0;font-family:${n.display};font-size:24px;font-style:italic;line-height:1.35;color:${t.text};">"[EXAMPLE] Quote text goes here, sourced and verbatim."</p>
      <p style="margin:10px 0 0;font-family:${n.body};font-size:14px;color:${t.text_secondary};">— Attribution placeholder</p>
    </blockquote>
  </section>`}function S(e,t,n,r,i){let a=u(e,t,n,r,i);return`<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="color-scheme" content="light"><title>EXAMPLE Morning Brief (email-safe)</title></head>
<body style="margin:0;padding:0;font-family:${i.body};">${a}</body></html>`}var C=`otv-review-color-mode`,w=`otv-review-palette`,T,E,D={},O=`Current`,k=`light`,A=`web`;function j(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches}function M(){let e=localStorage.getItem(C);return e===`light`||e===`dark`?e:j()?`dark`:`light`}function N(){let e=localStorage.getItem(w);return e&&[`Current`,`A`,`B`,`C`].includes(e)?e:`Current`}function P(e,t){let n=document.documentElement;n.dataset.siteMode=e;for(let e of s)n.style.setProperty(`--${e.replace(/_/g,`-`)}`,t[e]);n.style.setProperty(`--font-display`,T.fonts.display),n.style.setProperty(`--font-body`,T.fonts.body)}function F(){let e=D[O];return{light:e.light,dark:e.dark,dir:e}}function I(){let{light:e,dark:t}=F();return k===`light`?e:t}async function L(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,setTimeout(()=>{t.textContent=n},1200)}catch{t.textContent=`Copy failed`}}function R(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function z(e){let{dir:t}=F(),n=I(),r=T.verified_reference;e.innerHTML=`
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
          ${s.map(e=>{let t=n[e];return{key:e,hex:t,currentHex:O===`Current`?t:k===`light`?c(r).light[e]:c(r).dark[e]}}).map(({key:e,hex:t,currentHex:n})=>`
            <tr>
              <td><span class="swatch" style="background:${t}" title="${R(t)}"></span></td>
              <td><code>${R(e)}</code></td>
              <td><code class="hex-value">${R(t)}</code></td>
              <td><code>${O===`Current`?`—`:R(n)}</code></td>
              <td><button type="button" class="btn-copy" data-hex="${R(t)}">Copy hex</button></td>
            </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note"><strong>${R(t.name)}</strong> · ${R(t.status)}${t.rationale?` — ${R(t.rationale)}`:``}</p>
  `,e.querySelectorAll(`.btn-copy`).forEach(e=>{e.addEventListener(`click`,()=>L(e.dataset.hex??``,e))})}function B(e){let t=D[O].contrast?.filter(e=>e.mode===k)??[],n=T.verified_reference;e.innerHTML=`
    ${O===`Current`&&k===`light`?`<p class="warn">Verified <code>Muted</code> (#6f736c) on light surfaces: computed ${a(`#6f736c`,n.cream)}:1 on Cream, ${a(`#6f736c`,n.white)}:1 on White, ${a(`#6f736c`,n.cream_deep)}:1 on Cream Deep — <strong>FAIL</strong> at 4.5:1. Table rows below use live computed ratios.</p>`:``}
    <div class="table-scroll" tabindex="0" aria-label="Contrast pairings table">
      <table class="data-table contrast-table">
        <thead><tr>
          <th>Role</th><th>Foreground</th><th>Background</th><th>Ratio</th><th>Min</th><th>Result</th>
        </tr></thead>
        <tbody>
          ${t.map(e=>{O!==`Current`||e.fg===`text_secondary`&&e.mode===`light`&&e.pass;let t=a(e.fg_hex,e.bg_hex),n=t>=e.min;return`<tr>
                <td>${R(e.role)}</td>
                <td><code>${R(e.fg)}</code> ${R(e.fg_hex)}</td>
                <td><code>${R(e.bg)}</code> ${R(e.bg_hex)}</td>
                <td>${t.toFixed(2)}${O===`Current`?t===e.ratio?``:` <span class="muted">(spec ${e.ratio})</span>`:``}</td>
                <td>${e.min}</td>
                <td><span class="result-text">${n?`PASS`:`FAIL`}</span></td>
              </tr>`}).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note" id="computed-contrast-live">Live check: focus on surface = <span id="focus-ratio">—</span></p>
  `;let r=I(),i=document.getElementById(`focus-ratio`);i&&(i.textContent=`${a(r.focus,r.surface).toFixed(2)}:1`)}function V(e){let{light:t,dark:n}=F(),r=A===`web`?u(t,n,O,T.verified_reference,T.fonts):`<pre class="email-code" aria-label="Email-safe HTML source">${R(S(t,n,O,T.verified_reference,T.fonts))}</pre>`;if(e.innerHTML=`
    <div class="brief-tabs" role="tablist" aria-label="Brief render mode">
      <button type="button" role="tab" id="tab-web" aria-selected="${A===`web`}" aria-controls="brief-panel">Web render</button>
      <button type="button" role="tab" id="tab-email" aria-selected="${A===`email`}" aria-controls="brief-panel">Email-safe render</button>
    </div>
    <div class="brief-frames">
      <figure class="brief-frame" data-width="640">
        <figcaption>640px width</figcaption>
        <div class="brief-viewport" style="width:640px;max-width:100%;">${A===`web`?r:`<iframe title="Email preview 640" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
      <figure class="brief-frame" data-width="375">
        <figcaption>375px mobile frame</figcaption>
        <div class="brief-viewport brief-viewport--mobile" style="width:375px;max-width:100%;">${A===`web`?r:`<iframe title="Email preview 375" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
    </div>
    <div id="brief-panel" role="tabpanel"></div>
  `,A!==`web`){let r=S(t,n,O,T.verified_reference,T.fonts);e.querySelectorAll(`.email-iframe`).forEach(e=>{e.srcdoc=r})}e.querySelector(`#tab-web`)?.addEventListener(`click`,()=>{A=`web`,V(e)}),e.querySelector(`#tab-email`)?.addEventListener(`click`,()=>{A=`email`,V(e)})}function H(){P(k,I());let e=document.getElementById(`direction-status`);if(e){let t=D[O];e.textContent=O===`Current`?`VERIFIED BRAND · ${t.name}`:`PROPOSED / NOT APPROVED · ${t.name}`,e.className=O===`Current`?`direction-status verified`:`direction-status proposed`}z(document.getElementById(`token-table`)),B(document.getElementById(`contrast-table`)),V(document.getElementById(`brief-preview`)),document.querySelectorAll(`input[name="palette"]`).forEach(e=>{e.checked=e.value===O});let t=document.getElementById(`mode-toggle`);t&&(t.setAttribute(`aria-pressed`,String(k===`dark`)),t.textContent=k===`dark`?`Dark mode on`:`Light mode on`)}function U(){let e=document.getElementById(`palette-group`);e?.addEventListener(`keydown`,t=>{let n=[`Current`,`A`,`B`,`C`],r=n.indexOf(O);t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),O=n[(r+1)%n.length],localStorage.setItem(w,O),H(),e.querySelector(`input[value="${O}"]`)?.focus()):(t.key===`ArrowLeft`||t.key===`ArrowUp`)&&(t.preventDefault(),O=n[(r-1+n.length)%n.length],localStorage.setItem(w,O),H(),e.querySelector(`input[value="${O}"]`)?.focus())}),e?.querySelectorAll(`input[name='palette']`).forEach(e=>{e.addEventListener(`change`,()=>{e.checked&&(O=e.value,localStorage.setItem(w,O),H())})}),document.getElementById(`mode-toggle`)?.addEventListener(`click`,()=>{k=k===`light`?`dark`:`light`,localStorage.setItem(C,k),H()}),document.getElementById(`copy-reply`)?.addEventListener(`click`,e=>{L(`APPROVED A | APPROVED B | APPROVED C | CHANGES + notes`,e.currentTarget)})}function W(){let r=document.getElementById(`app`);r&&(r.innerHTML=`
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
        <p class="lede">Private draft review for Cory. Fonts unchanged. Logo specimens are unmodified PNG originals (transparent or baked-in tile backgrounds as supplied). Verified brand guide: Forest/Cream (July 2026).</p>
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
        <div class="symbol-primary" role="group" aria-labelledby="symbol-primary-heading">
          <p id="symbol-primary-heading" class="specimen-label symbol-primary-tag">Primary specimen · <code>${n.symbol3d}</code> · RGBA transparent</p>
          <p class="glow-disclosure proposed-tag"><strong>PROPOSED presentation treatment — NOT APPROVED.</strong> CSS-only palette-accent radial glow behind the unmodified PNG (no image edits, recoloring, stroke, neon, or animation).</p>
          <div class="symbol-3d-stage">
            <div class="symbol-3d-glow" aria-hidden="true"></div>
            <img class="logo-img--symbol-3d logo-img--symbol-3d-primary" src="${e(t.symbol3d)}" width="429" height="414" alt="3D V symbol specimen with transparent alpha, primary display" />
          </div>
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
        <h4 class="specimen-subhead specimen-subhead--minor">Flat V variants <span class="accent-note">(original filenames · no selection implied)</span></h4>
        <div class="specimen-grid specimen-grid--symbols specimen-grid--secondary">
          <figure class="logo-specimen logo-specimen--symbol logo-specimen--tile">
            <figcaption class="specimen-label"><code>${n.flatV1}</code> · baked white tile</figcaption>
            <img class="logo-img--symbol-flat" src="${e(t.flatV1)}" width="1024" height="1024" alt="Flat V symbol on white square tile" />
          </figure>
          <figure class="logo-specimen logo-specimen--symbol logo-specimen--tile-dark">
            <figcaption class="specimen-label"><code>${n.flatV2}</code> · baked dark tile</figcaption>
            <img class="logo-img--symbol-flat" src="${e(t.flatV2)}" width="1024" height="1024" alt="Flat V symbol on dark square tile" />
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
  `)}async function G(){T=await(await fetch(e(`data/proposed-tokens.json`))).json(),E=c(T.verified_reference),D.Current=E,D.A=T.directions.A,D.B=T.directions.B,D.C=T.directions.C,O=N(),k=M(),W(),U(),H()}G().catch(e=>{console.error(e),document.body.innerHTML=`<p role="alert">Failed to load review site: ${R(String(e))}</p>`});