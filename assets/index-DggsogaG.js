(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e){return`./${e.replace(/^\//,``)}`}function t(e){let t=e/255;return t<=.03928?t/12.92:((t+.055)/1.055)**2.4}function n(e){let n=e.replace(`#`,``),r=parseInt(n.slice(0,2),16),i=parseInt(n.slice(2,4),16),a=parseInt(n.slice(4,6),16);return .2126*t(r)+.7152*t(i)+.0722*t(a)}function r(e,t){let r=n(e),i=n(t),a=Math.max(r,i),o=Math.min(r,i);return Math.round((a+.05)/(o+.05)*100)/100}function i(e,t){return[{role:`body`,fg:`text`,bg:`surface`,min:4.5},{role:`body`,fg:`text`,bg:`surface_alt`,min:4.5},{role:`body in panel`,fg:`text`,bg:`panel`,min:4.5},{role:`secondary/notes`,fg:`text_secondary`,bg:`surface`,min:4.5},{role:`secondary on alt`,fg:`text_secondary`,bg:`surface_alt`,min:4.5},{role:`large heading`,fg:`heading`,bg:`surface`,min:3},{role:`link`,fg:`link`,bg:`surface`,min:4.5},{role:`link on alt`,fg:`link`,bg:`surface_alt`,min:4.5},{role:`link in panel`,fg:`link`,bg:`panel`,min:4.5},{role:`accent rule/icon (non-text)`,fg:`accent`,bg:`surface`,min:3},{role:`focus ring`,fg:`focus`,bg:`surface`,min:3}].map(({role:n,fg:i,bg:a,min:o})=>{let s=t[i],c=t[a],l=r(s,c);return{mode:e,role:n,fg:i,bg:a,fg_hex:s,bg_hex:c,ratio:l,min:o,pass:l>=o}})}var a=[`surface`,`surface_alt`,`panel`,`text`,`text_secondary`,`heading`,`link`,`accent`,`border`,`focus`];function o(e){let t={surface:e.white,surface_alt:e.cream,panel:e.cream_deep,text:e.charcoal,text_secondary:`#6f736c`,heading:e.forest,link:e.forest,accent:e.forest,border:e.forest,focus:e.forest},n={surface:e.forest_deep,surface_alt:e.black,panel:e.forest,text:e.white,text_secondary:e.muted_light,heading:e.white,link:e.white,accent:e.muted_light,border:e.muted_light,focus:e.white};return{name:`Forest / Cream (Verified)`,status:`VERIFIED BRAND`,rationale:`Canonical OTV palette per OTV-Agency-Brand-Guide.md (July 2026). Muted secondary text does not meet 4.5:1 on light surfaces.`,light:t,dark:n,contrast:[...i(`light`,t),...i(`dark`,n)]}}function s(e,t,n,r){return e===`B`&&t===`light`?n.surface:r.black}function c(e,t,n,r,i){let a=n===`Current`||n===`C`?`linear-gradient(165deg, ${r.forest_deep} 0%, ${r.charcoal} 55%, ${r.black} 100%)`:`linear-gradient(165deg, ${t.surface} 0%, ${t.surface_alt} 55%, ${r.black} 100%)`,o=s(n,`light`,e,r);return`
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
        ${u(`Schedule (ET)`,p(e,i),e,i)}
        ${u(`Outstanding Projects`,m(e,i),e,i)}
        ${u(`Finances`,h(e,i),e,i)}
        ${u(`Opportunities`,g(e,i),e,i)}
        ${v(e,i)}
        ${u(`Top Three Outcomes`,_(e,i),e,i)}
        ${y(e,t,i)}
        <footer class="brief-px" style="background:${o};padding:18px 32px;">
          <p style="margin:0;font-family:${i.body};font-size:14px;font-weight:600;color:${r.white};">Verge · Chief of Staff, OTV Agency</p>
          <p style="margin:4px 0 0;font-family:${i.body};font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:${r.muted_light};">START. BRAND. GROW.</p>
        </footer>
      </div>
    </div>
  `}function l(e,t,n){return`<h2 style="margin:0 0 12px;padding:0 0 8px;border-bottom:2px solid ${t.border};font-family:${n.body};font-size:13px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:${t.heading};">——&nbsp; ${e}</h2>`}function u(e,t,n,r){return`<section class="brief-px" style="padding:24px 32px 4px;">${l(e,n,r)}${t}</section>`}function d(e,t,n){return`<li style="margin:0 0 8px;font-family:${n.body};font-size:16px;line-height:1.6;color:${t.text};">${e}</li>`}function f(e,t,n,r){return`<a href="${e}" style="color:${n.link};text-decoration:underline;font-weight:600;font-family:${r.body};">${t}</a>`}function p(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> 8:30 AM to 12:30 PM: Example calendar block title`,e,t)}${d(`<em>[EXAMPLE]</em> 1:15 to 5:15 PM: Example work block`,e,t)}</ul>`}function m(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> Example project name: priority, due date · ${f(`https://example.com/source`,`source`,e,t)}`,e,t)}${d(`<em>[EXAMPLE]</em> Example second project: status line`,e,t)}</ul>`}function h(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> Example billing notice with amount placeholder $0.00 · ${f(`https://example.com/source`,`source`,e,t)}`,e,t)}</ul>`}function g(e,t){return`<ul style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> Example opportunity line with next step`,e,t)}</ul>`}function _(e,t){return`<ol style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> Example outcome one`,e,t)}${d(`<em>[EXAMPLE]</em> Example outcome two`,e,t)}${d(`<em>[EXAMPLE]</em> Example outcome three`,e,t)}</ol>`}function v(e,t){return`<section class="brief-px" style="padding:24px 32px 4px;">${l(`Decision Queue`,e,t)}
    <p class="brief-note" style="margin:0 0 12px;font-family:${t.body};font-size:14px;line-height:1.6;color:${e.text};">Reply with <strong>APPROVED</strong>, <strong>CHANGES</strong>, or <strong>REJECTED</strong> and the item number. Silence is not approval.</p>
    <div style="background:${e.surface_alt};border-left:4px solid ${e.border};border-radius:8px;padding:14px 18px 6px;">
      <ol style="margin:0;padding:0 0 0 22px;">${d(`<em>[EXAMPLE]</em> Example decision: what needs a yes/no and why`,e,t)}${d(`<em>[EXAMPLE]</em> Example second decision`,e,t)}</ol>
    </div>
  </section>`}function y(e,t,n){return`<section class="brief-px" style="padding:24px 32px 28px;">${l(`Quote`,e,n)}
    <blockquote style="margin:0;padding:18px 22px;background:${t.surface};border-radius:8px;">
      <p style="margin:0;font-family:${n.display};font-size:24px;font-style:italic;line-height:1.35;color:${t.text};">"[EXAMPLE] Quote text goes here, sourced and verbatim."</p>
      <p style="margin:10px 0 0;font-family:${n.body};font-size:14px;color:${t.text_secondary};">— Attribution placeholder</p>
    </blockquote>
  </section>`}function b(e,t,n,r,i){let a=c(e,t,n,r,i);return`<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8"><meta name="color-scheme" content="light"><title>EXAMPLE Morning Brief (email-safe)</title></head>
<body style="margin:0;padding:0;font-family:${i.body};">${a}</body></html>`}var x=`otv-review-color-mode`,S=`otv-review-palette`,C,w,T={},E=`Current`,D=`light`,O=`web`;function k(){return window.matchMedia(`(prefers-color-scheme: dark)`).matches}function A(){let e=localStorage.getItem(x);return e===`light`||e===`dark`?e:k()?`dark`:`light`}function j(){let e=localStorage.getItem(S);return e&&[`Current`,`A`,`B`,`C`].includes(e)?e:`Current`}function M(e,t){let n=document.documentElement;n.dataset.siteMode=e;for(let e of a)n.style.setProperty(`--${e.replace(/_/g,`-`)}`,t[e]);n.style.setProperty(`--font-display`,C.fonts.display),n.style.setProperty(`--font-body`,C.fonts.body)}function N(){let e=T[E];return{light:e.light,dark:e.dark,dir:e}}function P(){let{light:e,dark:t}=N();return D===`light`?e:t}async function F(e,t){try{await navigator.clipboard.writeText(e);let n=t.textContent;t.textContent=`Copied`,setTimeout(()=>{t.textContent=n},1200)}catch{t.textContent=`Copy failed`}}function I(e){let t=document.createElement(`div`);return t.textContent=e,t.innerHTML}function L(e){let{dir:t}=N(),n=P(),r=C.verified_reference;e.innerHTML=`
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
          ${a.map(e=>{let t=n[e];return{key:e,hex:t,currentHex:E===`Current`?t:D===`light`?o(r).light[e]:o(r).dark[e]}}).map(({key:e,hex:t,currentHex:n})=>`
            <tr>
              <td><span class="swatch" style="background:${t}" title="${I(t)}"></span></td>
              <td><code>${I(e)}</code></td>
              <td><code class="hex-value">${I(t)}</code></td>
              <td><code>${E===`Current`?`—`:I(n)}</code></td>
              <td><button type="button" class="btn-copy" data-hex="${I(t)}">Copy hex</button></td>
            </tr>`).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note"><strong>${I(t.name)}</strong> · ${I(t.status)}${t.rationale?` — ${I(t.rationale)}`:``}</p>
  `,e.querySelectorAll(`.btn-copy`).forEach(e=>{e.addEventListener(`click`,()=>F(e.dataset.hex??``,e))})}function R(e){let t=T[E].contrast?.filter(e=>e.mode===D)??[],n=C.verified_reference;e.innerHTML=`
    ${E===`Current`&&D===`light`?`<p class="warn">Verified <code>Muted</code> (#6f736c) on light surfaces: computed ${r(`#6f736c`,n.cream)}:1 on Cream, ${r(`#6f736c`,n.white)}:1 on White, ${r(`#6f736c`,n.cream_deep)}:1 on Cream Deep — <strong>FAIL</strong> at 4.5:1. Table rows below use live computed ratios.</p>`:``}
    <div class="table-scroll" tabindex="0" aria-label="Contrast pairings table">
      <table class="data-table contrast-table">
        <thead><tr>
          <th>Role</th><th>Foreground</th><th>Background</th><th>Ratio</th><th>Min</th><th>Result</th>
        </tr></thead>
        <tbody>
          ${t.map(e=>{E!==`Current`||e.fg===`text_secondary`&&e.mode===`light`&&e.pass;let t=r(e.fg_hex,e.bg_hex),n=t>=e.min;return`<tr>
                <td>${I(e.role)}</td>
                <td><code>${I(e.fg)}</code> ${I(e.fg_hex)}</td>
                <td><code>${I(e.bg)}</code> ${I(e.bg_hex)}</td>
                <td>${t.toFixed(2)}${E===`Current`?t===e.ratio?``:` <span class="muted">(spec ${e.ratio})</span>`:``}</td>
                <td>${e.min}</td>
                <td><span class="result-text">${n?`PASS`:`FAIL`}</span></td>
              </tr>`}).join(``)}
        </tbody>
      </table>
    </div>
    <p class="panel-note" id="computed-contrast-live">Live check: focus on surface = <span id="focus-ratio">—</span></p>
  `;let i=P(),a=document.getElementById(`focus-ratio`);a&&(a.textContent=`${r(i.focus,i.surface).toFixed(2)}:1`)}function z(e){let{light:t,dark:n}=N(),r=O===`web`?c(t,n,E,C.verified_reference,C.fonts):`<pre class="email-code" aria-label="Email-safe HTML source">${I(b(t,n,E,C.verified_reference,C.fonts))}</pre>`;if(e.innerHTML=`
    <div class="brief-tabs" role="tablist" aria-label="Brief render mode">
      <button type="button" role="tab" id="tab-web" aria-selected="${O===`web`}" aria-controls="brief-panel">Web render</button>
      <button type="button" role="tab" id="tab-email" aria-selected="${O===`email`}" aria-controls="brief-panel">Email-safe render</button>
    </div>
    <div class="brief-frames">
      <figure class="brief-frame" data-width="640">
        <figcaption>640px width</figcaption>
        <div class="brief-viewport" style="width:640px;max-width:100%;">${O===`web`?r:`<iframe title="Email preview 640" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
      <figure class="brief-frame" data-width="375">
        <figcaption>375px mobile frame</figcaption>
        <div class="brief-viewport brief-viewport--mobile" style="width:375px;max-width:100%;">${O===`web`?r:`<iframe title="Email preview 375" class="email-iframe" sandbox="allow-same-origin"></iframe>`}</div>
      </figure>
    </div>
    <div id="brief-panel" role="tabpanel"></div>
  `,O!==`web`){let r=b(t,n,E,C.verified_reference,C.fonts);e.querySelectorAll(`.email-iframe`).forEach(e=>{e.srcdoc=r})}e.querySelector(`#tab-web`)?.addEventListener(`click`,()=>{O=`web`,z(e)}),e.querySelector(`#tab-email`)?.addEventListener(`click`,()=>{O=`email`,z(e)})}function B(){M(D,P());let e=document.getElementById(`direction-status`);if(e){let t=T[E];e.textContent=E===`Current`?`VERIFIED BRAND · ${t.name}`:`PROPOSED / NOT APPROVED · ${t.name}`,e.className=E===`Current`?`direction-status verified`:`direction-status proposed`}L(document.getElementById(`token-table`)),R(document.getElementById(`contrast-table`)),z(document.getElementById(`brief-preview`)),document.querySelectorAll(`input[name="palette"]`).forEach(e=>{e.checked=e.value===E});let t=document.getElementById(`mode-toggle`);t&&(t.setAttribute(`aria-pressed`,String(D===`dark`)),t.textContent=D===`dark`?`Dark mode on`:`Light mode on`)}function V(){let e=document.getElementById(`palette-group`);e?.addEventListener(`keydown`,t=>{let n=[`Current`,`A`,`B`,`C`],r=n.indexOf(E);t.key===`ArrowRight`||t.key===`ArrowDown`?(t.preventDefault(),E=n[(r+1)%n.length],localStorage.setItem(S,E),B(),e.querySelector(`input[value="${E}"]`)?.focus()):(t.key===`ArrowLeft`||t.key===`ArrowUp`)&&(t.preventDefault(),E=n[(r-1+n.length)%n.length],localStorage.setItem(S,E),B(),e.querySelector(`input[value="${E}"]`)?.focus())}),e?.querySelectorAll(`input[name='palette']`).forEach(e=>{e.addEventListener(`change`,()=>{e.checked&&(E=e.value,localStorage.setItem(S,E),B())})}),document.getElementById(`mode-toggle`)?.addEventListener(`click`,()=>{D=D===`light`?`dark`:`light`,localStorage.setItem(x,D),B()}),document.getElementById(`copy-reply`)?.addEventListener(`click`,e=>{F(`APPROVED A | APPROVED B | APPROVED C | CHANGES + notes`,e.currentTarget)})}function H(){let t=document.getElementById(`app`);t&&(t.innerHTML=`
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
        <p class="lede">Private draft review for Cory. Fonts and logos unchanged. Verified brand guide: Forest/Cream (July 2026).</p>
        <ul class="source-list">
          <li><a href="https://drive.google.com/file/d/1ThF9M2zakxSdWkVKTjMzADIy-OA-xr65/view" rel="noopener noreferrer">OTV Agency Brand Guide (Drive)</a></li>
          <li>Package folder: <a href="https://drive.google.com/drive/folders/1SCqSb8eUXcJE2043BXjA5ldvXnxAuEDS" rel="noopener noreferrer">Drive assets</a></li>
        </ul>
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
        <div class="specimen-grid">
          <div class="logo-specimen logo-specimen--dark">
            <p class="specimen-label">Light logo on dark band <span class="accent-note">(proposed accent rule beside logo)</span></p>
            <div class="logo-row">
              <span class="accent-rule" aria-hidden="true"></span>
              <img src="${e(`assets/logos/OTV.Agency_Horiztonal_Logo_V3.svg`)}" width="220" height="48" alt="OTV Agency horizontal logo for dark backgrounds" />
            </div>
          </div>
          <div class="logo-specimen logo-specimen--light">
            <p class="specimen-label">Dark logo on cream</p>
            <img src="${e(`assets/logos/OTV.Agency_Horizontal_Logo_Dark.svg`)}" width="220" height="48" alt="OTV Agency horizontal logo for light backgrounds" />
          </div>
          <div class="logo-specimen logo-specimen--light">
            <p class="specimen-label">Stacked logo</p>
            <img src="${e(`assets/logos/OTV.Agency_Stacked_Logo_V4.svg`)}" width="120" height="120" alt="OTV Agency stacked logo" />
          </div>
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
  `)}async function U(){C=await(await fetch(e(`data/proposed-tokens.json`))).json(),w=o(C.verified_reference),T.Current=w,T.A=C.directions.A,T.B=C.directions.B,T.C=C.directions.C,E=j(),D=A(),H(),V(),B()}U().catch(e=>{console.error(e),document.body.innerHTML=`<p role="alert">Failed to load review site: ${I(String(e))}</p>`});