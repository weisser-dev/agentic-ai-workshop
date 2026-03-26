export const handsonSlides = [
  // ===== Hands-On: Setup =====
  {
    id: 'handson-setup',
    theme: 'slide--accent slide--divider',
    label: 'Hands-On',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">&#128640;</div>
      <h2 class="slide-title" style="color:var(--color-bg-dark)">Hands-On: Setup</h2>
      <p class="slide-subtitle" style="color:var(--color-bg-dark);opacity:0.7">Wir arbeiten mit OpenCode &ndash; dem Open-Source Coding Agent</p>
      <div class="presenter-only-text" style="margin-top:20px;display:flex;align-items:center;justify-content:center;gap:24px">
        <img id="handson-qr" src="" alt="QR Code zum Hands-On" style="width:140px;height:140px;border-radius:12px;border:3px solid var(--color-bg-dark)">
        <div style="text-align:left">
          <p style="font-size:1rem;color:var(--color-bg-dark);font-weight:700;margin-bottom:4px">Scannt den QR-Code oder &ouml;ffnet:</p>
          <p id="handson-url" style="font-size:0.9rem;color:var(--color-bg-dark);opacity:0.8;word-break:break-all"></p>
          <p style="font-size:0.85rem;color:var(--color-bg-dark);opacity:0.6;margin-top:8px">Ab hier macht jeder f&uuml;r sich weiter &ndash; Schritt f&uuml;r Schritt.</p>
        </div>
      </div>
    `,
  },

  // ===== Sicherheitshinweis =====
  {
    id: 'handson-security',
    theme: 'slide--dark',
    label: 'Sicherheit',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Bevor es losgeht</span>
      <h2 class="slide-title" style="font-size:1.4rem">&#9888; Bitte beachten &ndash; Sicherheit bei AI Agents</h2>
      <p class="slide-subtitle" style="font-size:0.88rem">Die Beispiele hier sind f&uuml;r den Workshop &ndash; im Arbeitsalltag gelten strengere Regeln</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Frag dich bei jedem Tool</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128269; Welchen MCP installiere ich?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Was kann der alles? Liest er nur &ndash; oder kann er auch schreiben, l&ouml;schen, ver&auml;ndern?</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128272; Was kann mit meinen Berechtigungen passieren?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Der Agent hat <strong>dieselben Rechte wie dein Token</strong>. Admin-Token = Agent ist Admin.</span>
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:#ff6b6b">&#128165; Was ist der Worst Case?</strong><br>
              <span style="color:rgba(255,255,255,0.6)">Wenn das f&uuml;r dich akzeptabel ist &rarr; go for it. Wenn nicht &rarr; Token einschr&auml;nken oder Sandbox nutzen.</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Konkrete Beispiele</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>GitHub MCP + Token:</strong> Worst Case = alle Repos gel&ouml;scht. <span style="color:rgba(255,255,255,0.5)">&rarr; Read-Only Token oder nur 1 Repo freigeben.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Confluence MCP:</strong> Worst Case = Content gel&ouml;scht/&uuml;berschrieben. <span style="color:rgba(255,255,255,0.5)">&rarr; Read-Only API Key oder Sandbox-Space.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Shell / Filesystem:</strong> Worst Case = Dateien gel&ouml;scht. <span style="color:rgba(255,255,255,0.5)">&rarr; Docker-Sandbox, nur Projekt-Ordner mounten.</span>
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8);line-height:1.4">
              <strong>Datenbank MCP:</strong> Worst Case = DROP TABLE. <span style="color:rgba(255,255,255,0.5)">&rarr; Read-Only DB User, keine Prod-DB.</span>
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(37,204,120,0.08);border:2px solid rgba(37,204,120,0.25);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
            <strong style="color:var(--color-positive)">Faustregel:</strong> Stell dir vor der Agent ist ein neuer Praktikant &ndash; mit <strong>deinen Zugangsdaten</strong>. W&uuml;rdest du ihm Admin-Zugang zu Produktion geben?
          </div>
          <div style="margin-top:6px;padding:8px 10px;border-radius:6px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.72rem;color:rgba(255,255,255,0.6);line-height:1.3">
            &#128073; Im <strong style="color:var(--color-accent)">Deep Dive</strong> sp&auml;ter zeigen wir, wie man OpenCode sicher via Docker in einer Sandbox startet &ndash; nur mit Projekt-Kontext und ohne Zugriff auf euer System.
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 1: Node.js / npm =====
  {
    id: 'setup-node',
    theme: 'slide--dark',
    label: 'Node.js',
    content: `
      <span class="slide-label">Schritt 1</span>
      <h2 class="slide-title">Node.js &amp; npm installieren</h2>
      <p class="slide-subtitle">Falls noch nicht vorhanden &ndash; Standard oder ohne Admin-Rechte</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Standard (mit Admin)</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#127823; macOS</div>
              <button class="copy-btn" data-copy="brew install node">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">brew install</span> node</pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#128039; Linux</div>
              <button class="copy-btn" data-copy="sudo apt install nodejs npm">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">sudo apt install</span> nodejs npm</pre></div>
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#127999; Windows</div>
              <button class="copy-btn" data-copy="winget install OpenJS.NodeJS">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">winget install</span> OpenJS.NodeJS</pre></div>
            </div>
            <details style="margin-top:2px;border-radius:8px;overflow:hidden;border:1px solid rgba(255,107,107,0.3);background:rgba(255,107,107,0.06)" class="troubleshoot-details">
              <summary style="padding:8px 12px;font-size:0.8rem;color:#ff9a9a;cursor:pointer;user-select:none;list-style:none;display:flex;align-items:center;gap:6px">
                <span style="font-size:0.9rem">&#9888;&#65039;</span> Troubleshooting: &ldquo;Script Execution is disabled&rdquo;
                <span class="details-chevron" style="margin-left:auto;font-size:0.75rem;transition:transform 0.2s ease;display:inline-block">&#9654;</span>
              </summary>
              <div style="padding:10px 14px;font-size:0.8rem;color:var(--color-text-on-dark);border-top:1px solid rgba(255,107,107,0.2)">
                <p style="margin-bottom:8px;line-height:1.5">Windows blockiert manchmal das Ausf&uuml;hren von Scripts. So beheben:</p>
                <ol style="margin:0;padding-left:18px;display:flex;flex-direction:column;gap:6px;line-height:1.5">
                  <li>Windows-Taste dr&uuml;cken &rarr; <strong>powershell</strong> eintippen</li>
                  <li>Rechtsklick auf &ldquo;Windows PowerShell&rdquo; &rarr; <strong>Als Administrator ausf&uuml;hren</strong></li>
                  <li>Folgenden Befehl eingeben und best&auml;tigen:</li>
                </ol>
                <div class="code-block" style="margin:8px 0 6px">
                  <div class="code-header" style="font-size:0.75rem"><div class="code-dots"><span></span><span></span><span></span></div>PowerShell (Admin)</div>
                  <button class="copy-btn" data-copy="Set-ExecutionPolicy RemoteSigned">&#128203; Copy</button>
                  <div class="code-body" style="padding:8px 12px;font-size:0.82rem"><pre style="margin:0"><span class="code-function">Set-ExecutionPolicy</span> RemoteSigned</pre></div>
                </div>
                <p style="margin:6px 0 0;line-height:1.5;color:rgba(255,255,255,0.55);font-size:0.77rem">Danach PowerShell neu &ouml;ffnen und <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px">winget install OpenJS.NodeJS</code> erneut ausf&uuml;hren.</p>
              </div>
            </details>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>&#10003; Pr&uuml;fen</div>
              <button class="copy-btn" data-copy="node -v && npm -v">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-function">node</span> -v && <span class="code-function">npm</span> -v</pre></div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Ohne Admin-Rechte (Windows)</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>1.</strong> Node.js ZIP von <a href="https://nodejs.org/download" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">nodejs.org</a> laden
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>2.</strong> ZIP entpacken nach <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.8rem">C:\\Users\\[NAME]\\nodejs</code>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>3.</strong> Ordner zum User-PATH hinzuf&uuml;gen (Systemsteuerung &rarr; Umgebungsvariablen)
            </div>
            <div class="code-block" style="margin:0">
              <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Oder per PowerShell</div>
              <button class="copy-btn" data-copy="$env:Path += ';C:\\Users\\$env:USERNAME\\nodejs'">&#128203; Copy</button>
              <div class="code-body" style="padding:10px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-function">$env:Path</span> += <span class="code-string">';C:\\Users\\$env:USERNAME\\nodejs'</span></pre></div>
            </div>
          </div>
          <div style="margin-top:10px;font-size:0.8rem">
            <a href="https://gkarthiks.github.io/quick-commands-cheat-sheet/nodeJS-in-windows.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Ausf&uuml;hrliche Anleitung ohne Admin &rarr;</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Warum npm? Was ist Node? =====
  {
    id: 'why-npm',
    theme: '',
    label: 'Warum npm?',
    content: `
      <span class="slide-label">Einordnung</span>
      <h2 class="slide-title">Warum npm? Was ist Node.js?</h2>
      <p class="slide-subtitle">F&uuml;r Java- und Python-Entwickler: Node.js ist das Gleiche in Gr&uuml;n &ndash; nur f&uuml;r JavaScript</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Warum brauchen wir das?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);font-size:0.88rem">
              <strong style="color:var(--color-primary)">OpenCode</strong> ist in Node.js geschrieben &rarr; npm ist Voraussetzung
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid var(--color-border);font-size:0.88rem">
              <strong>Vite</strong> (unser Build-Tool) l&auml;uft auf Node.js &rarr; Dev-Server, Hot Reload
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid var(--color-border);font-size:0.88rem">
              <strong>Eine Basis f&uuml;r alles</strong> &ndash; npm installiert, der Rest ergibt sich
            </div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Package Manager im Vergleich</h3>
          <table class="comparison" style="font-size:0.78rem">
            <thead><tr><th>&Ouml;kosystem</th><th>Sprache</th><th>Pkg Manager</th><th>Config</th><th>Server</th></tr></thead>
            <tbody>
              <tr><td><strong>Node.js</strong></td><td>JS/TS</td><td style="color:var(--color-primary);font-weight:700">npm / pnpm</td><td>package.json</td><td>Vite / Express</td></tr>
              <tr><td><strong>Java</strong></td><td>Java</td><td>Maven / Gradle</td><td>pom.xml</td><td>Spring Boot</td></tr>
              <tr><td><strong>Python</strong></td><td>Python</td><td>pip / uv</td><td>pyproject.toml</td><td>Flask / Django</td></tr>
            </tbody>
          </table>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0 6px">Was kann man mit Node.js alles bauen?</h3>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Frontend (React, Vue, Svelte)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Backend / REST APIs</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">CLI-Tools</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Echtzeit-Apps (WebSockets)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Desktop (Electron)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Mobile (React Native)</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.1);border:1px solid var(--color-border);font-size:0.75rem">Serverless Functions</span>
            <span style="padding:4px 10px;border-radius:20px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.3);font-size:0.75rem;font-weight:600;color:var(--color-primary)">Spiele (wie in diesem Workshop!)</span>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Die wichtigsten npm-Befehle</h3>
          <div class="code-block" style="margin:0;margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>npm Grundlagen</div>
            <div class="code-body" style="padding:10px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Projekt initialisieren (wie mvn init)</span>
<span class="code-function">npm init</span> -y

<span class="code-comment"># Dependencies installieren (wie mvn install)</span>
<span class="code-function">npm install</span>

<span class="code-comment"># Paket hinzuf&uuml;gen (wie pip install X)</span>
<span class="code-function">npm install</span> vite

<span class="code-comment"># Global installieren (wie pip install --global)</span>
<span class="code-function">npm install</span> -g opencode-ai

<span class="code-comment"># Script aus package.json ausf&uuml;hren</span>
<span class="code-function">npm run</span> dev      <span class="code-comment"># startet Dev-Server</span>
<span class="code-function">npm run</span> build    <span class="code-comment"># baut f&uuml;r Production</span>
<span class="code-function">npm test</span>         <span class="code-comment"># f&uuml;hrt Tests aus</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Node.js debuggen</h3>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Debugging</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Fehler im Terminal sehen:</span>
<span class="code-function">npm run</span> dev      <span class="code-comment"># Vite zeigt Fehler direkt</span>

<span class="code-comment"># Node-Script direkt ausf&uuml;hren:</span>
<span class="code-function">node</span> mein-script.js

<span class="code-comment"># Mit Debug-Output:</span>
<span class="code-function">DEBUG</span>=* <span class="code-function">npm run</span> dev</pre></div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
            <p style="font-size:0.75rem;color:var(--color-primary-dark);line-height:1.4">
              <strong>Wie bei Java/Python:</strong> <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">package.json</code> = eure <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">pom.xml</code>. <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">node_modules</code> = euer <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">.m2</code> / <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">venv</code>. <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">npm run</code> = <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">mvn exec</code> / <code style="background:rgba(47,108,122,0.1);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px;font-size:0.7rem">python manage.py</code>.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Was ist Vite? =====
  {
    id: 'what-is-vite',
    theme: 'slide--dark',
    label: 'Was ist Vite?',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Build-Tool</span>
      <h2 class="slide-title">Was ist Vite &ndash; und warum nutzen wir es?</h2>
      <p class="slide-subtitle">Unser Build-Tool f&uuml;r den Workshop: superschnell, null Config, perfekt f&uuml;r Spiele</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Warum Vite f&uuml;r unsere Spiele?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Sofort loslegen</strong> &ndash; Null Config n&ouml;tig. <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm create vite@latest</code> und fertig.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Hot Reload</strong> &ndash; Code &auml;ndern, Browser aktualisiert sich sofort. Perfekt wenn der Agent Code schreibt und ihr zusehen wollt.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">ES Modules</strong> &ndash; Modernes JavaScript mit <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">import</code>/<code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">export</code>. Deshalb geht HTML per Doppelklick <strong>nicht</strong>.
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Production Build</strong> &ndash; <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run build</code> erzeugt optimierte Dateien f&uuml;r Hosting.
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Vergleich: Was ist was?</h3>
          <table class="comparison" style="font-size:0.75rem">
            <thead><tr><th>Konzept</th><th>Java</th><th>Node.js</th></tr></thead>
            <tbody>
              <tr><td>Build-Tool</td><td>Maven / Gradle</td><td style="color:var(--color-accent);font-weight:600">Vite / Webpack</td></tr>
              <tr><td>Dev-Server</td><td>Spring Boot (Tomcat)</td><td style="color:var(--color-accent);font-weight:600">Vite Dev Server</td></tr>
              <tr><td>Hot Reload</td><td>Spring DevTools</td><td style="color:var(--color-accent);font-weight:600">Vite HMR (&lt;50ms)</td></tr>
              <tr><td>Build Output</td><td>.jar / .war</td><td style="color:var(--color-accent);font-weight:600">dist/ (HTML/JS/CSS)</td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Wof&uuml;r kann man Vite noch nutzen?</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#127912; <strong>Web-Apps</strong> &ndash; React, Vue, Svelte, Angular, Solid
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128196; <strong>Statische Seiten</strong> &ndash; Landingpages, Docs, Portfolios
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#127918; <strong>Spiele</strong> &ndash; Canvas, WebGL, Pixi.js, Three.js (unser Workshop!)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128218; <strong>Libraries</strong> &ndash; Eigene npm-Pakete entwickeln &amp; publishen
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              &#128187; <strong>Pr&auml;sentationen</strong> &ndash; Genau wie diese hier!
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Kostenlos hosten &ndash; ernsthaft!</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);margin-bottom:8px">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
              Alles was <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run build</code> erzeugt (HTML, JS, CSS) kann <strong>komplett kostenlos</strong> gehostet werden &ndash; kein Server n&ouml;tig:
            </p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:5px">
            <a href="https://pages.cloudflare.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-accent);text-decoration:none">Cloudflare Pages</a>
            <a href="https://pages.github.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">GitHub Pages</a>
            <a href="https://www.netlify.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">Netlify</a>
            <a href="https://vercel.com/" target="_blank" rel="noopener" style="padding:5px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark);text-decoration:none">Vercel</a>
          </div>
          <div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Solange kein Backend n&ouml;tig ist</strong> (keine Datenbank, keine API-Logik), ist Hosting kostenlos. Perfekt f&uuml;r Spiele, Portfolios, Docs und Pr&auml;sentationen. <a href="https://blog.weisser.dev/blog/2026/03/24/frontend-hosting-cloudflare-pages/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Anleitung: Frontend auf Cloudflare Pages hosten &rarr;</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Terminal, Dev-Server & Dev Tools =====
  {
    id: 'dev-workflow',
    theme: 'slide--dark',
    label: 'Dev Workflow',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Typische Stolpersteine</span>
      <h2 class="slide-title">Terminal, Dev-Server &amp; Chrome Dev Tools</h2>
      <p class="slide-subtitle">Die h&auml;ufigsten Probleme im Workshop &ndash; und wie ihr sie l&ouml;st</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">"Starte den Server" &ndash; warum das schiefgeht</h3>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);margin-bottom:6px;font-size:0.82rem;color:var(--color-text-on-dark)">
            <strong style="color:#ff6b6b">Problem:</strong> "Starte den Server" an die KI &rarr; Agent h&auml;ngt fest, weil der Server <strong>dauerhaft l&auml;uft</strong> und die KI auf das Ende wartet.
          </div>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);margin-bottom:6px;font-size:0.82rem;color:var(--color-text-on-dark)">
            <strong style="color:var(--color-positive)">L&ouml;sung:</strong> <strong>Neues Terminal &ouml;ffnen</strong>, ins Projekt-Root navigieren (selbe Ebene wie <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">package.json</code>), ggf. <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">npm i</code> f&uuml;r Dependencies, dann <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 4px;border-radius:3px;font-size:0.75rem">npm run dev</code>.
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:8px 0 6px">Bessere Prompts statt "starte den Server"</h3>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Dos &amp; Don'ts</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment">// &#10007; Schlecht &ndash; Agent h&auml;ngt:</span>
<span class="code-string">"Starte den Server"</span>
<span class="code-string">"F&uuml;hre npm run dev aus"</span>

<span class="code-comment">// &#10003; Besser &ndash; an Agent delegieren:</span>
<span class="code-string">"Erstelle das Projekt mit Vite-Config
und package.json mit dev-Script."</span>

<span class="code-comment">// &#10003; Server SELBST starten:</span>
<span class="code-comment">// Neues Terminal &rarr; npm run dev</span></pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Paralleles Arbeiten</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Terminal 1: OpenCode (Agent)</span>
<span class="code-function">opencode</span>

<span class="code-comment"># Terminal 2: NEUES Terminal &ouml;ffnen!</span>
<span class="code-comment"># Win: Win+R &rarr; cmd | VS Code: Ctrl+Shift+\`</span>
<span class="code-function">cd</span> ~/projects/workshop-demo
<span class="code-function">npm i</span>           <span class="code-comment"># Dependencies installieren (falls noch nicht geschehen)</span>
<span class="code-function">npm run</span> dev
<span class="code-comment"># &rarr; http://localhost:5173</span></pre></div>
          </div>
          <div style="margin-top:6px;padding:7px 10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.75rem;color:rgba(255,255,255,0.75)">
            <strong style="color:#ff6b6b">Nicht:</strong> HTML-Datei per Doppelklick &ouml;ffnen &ndash; ES Modules brauchen einen Server. Immer <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">http://localhost:...</code>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Chrome Dev Tools &ndash; euer bester Freund</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>F12</strong> oder <strong>Ctrl+Shift+I</strong> &rarr; Dev Tools &ouml;ffnen
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Console</strong>-Tab &rarr; hier stehen <strong>alle Fehler</strong> (rot)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Network</strong>-Tab &rarr; API-Aufrufe, fehlende Dateien (404)
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Elements</strong>-Tab &rarr; HTML/CSS live inspizieren und &auml;ndern
            </div>
          </div>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:2px solid rgba(255,237,0,0.25);margin-bottom:8px;font-size:0.82rem;color:var(--color-text-on-dark)">
            <strong style="color:var(--color-accent)">Pro-Tipp:</strong> Fehlermeldung aus der Console <strong>direkt kopieren und an den Agent schicken</strong> &ndash; der kennt die meisten Fehler und kann sie fixen!
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">Checkliste: Nichts passiert?</h3>
          <div style="display:flex;flex-direction:column;gap:4px">
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)">
              &#9744; Richtiger Ordner? &rarr; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">pwd</code> pr&uuml;fen
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)">
              &#9744; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npm install</code> vergessen? &rarr; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">node_modules</code> fehlt
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)">
              &#9744; Kein Output? &rarr; Logs im <strong>Browser</strong> (F12 &rarr; Console) pr&uuml;fen
            </div>
            <div style="padding:6px 12px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)">
              &#9744; Port belegt? &rarr; <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npx kill-port 5173</code> oder anderer Port
            </div>
          </div>
          <div style="margin-top:8px;padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Merke:</strong> <code style="background:rgba(255,255,255,0.1);color:#eee;padding:1px 3px;border-radius:2px;font-size:0.7rem">npm run dev</code> kostet 0 Cent. Das an die KI zu delegieren kostet Geld. <strong>Server selbst starten, Fehler aus Dev Tools kopieren.</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 2: OpenCode installieren =====
  {
    id: 'setup-opencode',
    theme: '',
    label: 'OpenCode',
    content: `
      <span class="slide-label">Schritt 2</span>
      <h2 class="slide-title">OpenCode global installieren</h2>
      <p class="slide-subtitle">Einmal installieren, &uuml;berall nutzen</p>
      <div style="max-width:700px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Global installieren (empfohlen)
          </div>
          <button class="copy-btn" data-copy="npm i -g opencode-ai@latest">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npm i</span> -g opencode-ai@latest</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Alternative: Ohne globale Installation
          </div>
          <button class="copy-btn" data-copy="npx opencode-ai@latest">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npx</span> opencode-ai@latest</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Alternative: curl (macOS / Linux)
          </div>
          <button class="copy-btn" data-copy="curl -fsSL https://opencode.ai/install | bash">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">curl</span> -fsSL https://opencode.ai/install | bash</pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:700px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">120K+ GitHub Stars</strong> &middot; Open Source &middot; 75+ LLM Provider &middot; <a href="https://opencode.ai/docs" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Docs</a>
        </p>
      </div>
    `,
  },

  // ===== Slide 3: VS Code installieren =====
  {
    id: 'setup-vscode',
    theme: '',
    label: 'VS Code',
    content: `
      <span class="slide-label">Schritt 3</span>
      <h2 class="slide-title">VS Code installieren</h2>
      <p class="slide-subtitle">Falls noch nicht vorhanden &ndash; unser Editor f&uuml;r den Workshop</p>
      <div style="max-width:700px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127823; macOS (Homebrew)
          </div>
          <button class="copy-btn" data-copy="brew install --cask visual-studio-code">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">brew install</span> --cask visual-studio-code</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#128039; Linux (Snap)
          </div>
          <button class="copy-btn" data-copy="sudo snap install code --classic">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">sudo snap install</span> code --classic</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127999; Windows (winget)
          </div>
          <button class="copy-btn" data-copy="winget install Microsoft.VisualStudioCode">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">winget install</span> Microsoft.VisualStudioCode</pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:700px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          Oder direkt von <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">code.visualstudio.com/download</a> herunterladen
        </p>
      </div>
    `,
  },

  // ===== Slide 5: Projekt anlegen =====
  {
    id: 'setup-project',
    theme: 'slide--dark',
    label: 'Projekt',
    content: `
      <span class="slide-label">Schritt 4</span>
      <h2 class="slide-title">Projekt in VS Code anlegen</h2>
      <p class="slide-subtitle">Funktioniert in Terminal (macOS/Linux) und PowerShell (Windows) gleich</p>
      <div style="max-width:600px;margin:24px auto 0">
        <div class="code-block" style="margin:0 0 16px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Neues Projekt &mdash; PowerShell / Terminal
          </div>
          <button class="copy-btn" data-copy="mkdir ~/projects/workshop-demo
cd ~/projects/workshop-demo
code .">&#128203; Copy</button>
          <div class="code-body" style="padding:20px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">mkdir</span> ~/projects/workshop-demo
<span class="code-function">cd</span> ~/projects/workshop-demo
<span class="code-function">code</span> .</pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Bestehendes Projekt &ouml;ffnen
          </div>
          <button class="copy-btn" data-copy="cd ~/projects/mein-projekt
code .">&#128203; Copy</button>
          <div class="code-body" style="padding:20px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">cd</span> ~/projects/mein-projekt
<span class="code-function">code</span> .</pre></div>
        </div>
        <div style="margin-top:16px;padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);font-size:0.85rem;color:var(--color-text-on-dark-subdued)">
          &#128161; <code style="background:rgba(255,255,255,0.08);padding:1px 5px;border-radius:3px">~</code> steht f&uuml;r euer Home-Verzeichnis &mdash; auf allen Systemen gleich.
        </div>
      </div>
    `,
  },

  // ===== Slide 5: OpenCode Config Example =====
  {
    id: 'setup-config',
    theme: 'slide--dark',
    label: 'Config',
    content: `
      <span class="slide-label">Schritt 5</span>
      <h2 class="slide-title">OpenCode Config Example</h2>
      <p class="slide-subtitle">Diese Config ist f&uuml;r den <strong>Workshop / Enterprise</strong> (AWS Bedrock). Privat? &rarr; <a href="https://opencode.ai/docs/config/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Docs lesen</a>, Provider-Abo einrichten oder kostenlose OpenCode-Modelle nutzen.</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Unsere Config: AWS Bedrock</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; Copy &amp; Paste!</div>
            <button class="copy-btn" data-copy='{\n  "$schema": "https://opencode.ai/config.json",\n  "enabled_providers": ["amazon-bedrock"],\n  "disabled_providers": [],\n  "share": "disabled",\n  "autoupdate": false,\n  "experimental": {\n    "openTelemetry": false\n  },\n  "provider": {\n    "amazon-bedrock": {\n      "options": {\n        "region": "eu-central-1",\n        "apiKey": "YOUR_API_KEY_HERE"\n      },\n      "models": {\n        "eu.anthropic.claude-sonnet-4-6-v1": {},\n        "eu.anthropic.claude-sonnet-4-5-20250929-v1:0": {},\n        "eu.anthropic.claude-opus-4-6-v1:0": {},\n        "eu.anthropic.claude-haiku-4-5-20251001-v1:0": {}\n      }\n    }\n  },\n  "model": "amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0",\n  "small_model": "amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"\n}'>&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.65rem;line-height:1.35"><pre style="margin:0">{
  <span class="code-property">"$schema"</span>: <span class="code-string">"https://opencode.ai/config.json"</span>,
  <span class="code-property">"enabled_providers"</span>: [<span class="code-string">"amazon-bedrock"</span>],
  <span class="code-property">"disabled_providers"</span>: [],
  <span class="code-property">"share"</span>: <span class="code-string">"disabled"</span>,
  <span class="code-property">"autoupdate"</span>: <span class="code-keyword">false</span>,
  <span class="code-property">"experimental"</span>: {
    <span class="code-property">"openTelemetry"</span>: <span class="code-keyword">false</span>
  },
  <span class="code-property">"provider"</span>: {
    <span class="code-property">"amazon-bedrock"</span>: {
      <span class="code-property">"options"</span>: {
        <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
        <span class="code-comment">// not best practice &ndash; only for workshop</span>
        <span class="code-property">"apiKey"</span>: <span class="code-string" style="color:#ff6c12">"YOUR_API_KEY_HERE"</span>
      },
      <span class="code-property">"models"</span>: {
        <span class="code-property">"eu.anthropic.claude-sonnet-4-6-v1"</span>: {},
        <span class="code-property">"eu.anthropic.claude-sonnet-4-5-20250929-v1:0"</span>: {},
        <span class="code-property">"eu.anthropic.claude-opus-4-6-v1:0"</span>: {},
        <span class="code-property">"eu.anthropic.claude-haiku-4-5-20251001-v1:0"</span>: {}
      }
    }
  },
  <span class="code-property">"model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0"</span>,
  <span class="code-property">"small_model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"</span>
}</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Alternativen</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:8px">
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; Login &uuml;ber GitHub, kein API-Key n&ouml;tig.</p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>Anthropic direkt</strong> &ndash; <code style="background:rgba(255,255,255,0.1);padding:0 3px;border-radius:2px;font-size:0.7rem">ANTHROPIC_API_KEY</code></p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>OpenAI / Gemini</strong> &ndash; 75+ Provider via Models.dev.</p>
            </div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.8rem;color:var(--color-text-on-dark)"><strong>Lokale Modelle</strong> &ndash; Ollama, llama.cpp.</p>
            </div>
          </div>
          <div style="padding:8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">Warum Bedrock?</strong> Token-basiert, EU-Region, Enterprise-ready.
            </p>
          </div>
          <div style="padding:8px;border-radius:6px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);margin-top:6px">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              &#127381; <strong style="color:var(--color-accent)">Kostenlose Modelle?</strong> OpenCode bietet <strong>Big Pickle &amp; MiniMax 2.5</strong> gratis an. Privat auch: Ollama, Claude.ai, ChatGPT Free. <a href="https://opencode.ai/docs/zen/#pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/zen</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Kostenlose Modelle & Provider (Self-Paced only) =====
  {
    id: 'free-models',
    theme: 'slide--dark',
    label: 'Kostenlose Modelle',
    selfPacedOnly: true,
    content: `
      <span class="slide-label">F&uuml;r zuhause &amp; privates Lernen</span>
      <h2 class="slide-title" style="font-size:1.4rem">Kostenlose Modelle &amp; Provider in OpenCode</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Kein Budget? Kein Problem &ndash; OpenCode unterst&uuml;tzt viele kostenlose Optionen</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">&#127381; Direkt in OpenCode integriert (kostenlos)</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">Big Pickle</strong> &ndash; Schnelles kostenloses Modell direkt in OpenCode
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">MiniMax 2.5</strong> &ndash; Starkes Modell, kostenlos via OpenCode Zen
            </div>
          </div>
          <p style="font-size:0.75rem;margin-top:4px">
            <a href="https://opencode.ai/docs/zen/#pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/zen</a>
          </p>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px;margin-top:14px">&#127968; Lokal (komplett offline)</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Ollama</strong> &ndash; Llama, Mistral, Qwen lokal auf dem eigenen Rechner
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>llama.cpp</strong> &ndash; Maximale Kontrolle, CPU-optimiert
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">&#128179; Bestehende Subscriptions nutzen</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Claude.ai Pro</strong> &ndash; Anthropic API aus bestehender Subscription
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>ChatGPT Plus / Codex</strong> &ndash; OpenAI API-Key aus OpenAI-Account
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>GitHub Copilot</strong> &ndash; Login &uuml;ber GitHub, kein zus&auml;tzlicher API-Key
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark)">
              <strong>Google Gemini</strong> &ndash; Freies Kontingent &uuml;ber Google AI Studio
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">75+ Provider.</strong> OpenCode unterst&uuml;tzt praktisch jeden LLM-Anbieter &ndash; per einfacher Config-&Auml;nderung wechselbar.
            </p>
            <p style="font-size:0.72rem;margin-top:6px">
              <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/providers</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== API Keys sicher übertragen =====
  {
    id: 'setup-keys',
    theme: 'slide-werbung',
    label: 'API Keys',
    content: `
      <span class="slide-label" style="color:#3fb950;font-family:'SF Mono',monospace">&#128640; Werbung</span>
      <h2 class="slide-title" style="font-size:1.4rem;color:#c9d1d9;font-family:'SF Mono',monospace">API Keys sicher &uuml;bertragen</h2>
      <p class="slide-subtitle" style="font-size:0.9rem;color:#8b949e">Ihr wollt sicher API Keys auf euren Laptop bekommen? So geht&rsquo;s richtig.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:#3fb950;font-size:0.9rem;margin-bottom:10px;font-family:'SF Mono',monospace">&#128274; Self-hosted PasteBin &mdash; jetzt live ausprobieren:</h3>
          <div style="background:#0d1117;border:1px solid #30363d;border-radius:6px;overflow:hidden;font-family:'SF Mono','Monaco',monospace">
            <div style="background:#161b22;border-bottom:1px solid #30363d;padding:8px 14px;display:flex;justify-content:space-between;align-items:center">
              <a href="https://paste.weisser.dev" target="_blank" rel="noopener" style="color:#3fb950;font-weight:700;font-size:0.85rem;text-decoration:none">&#x2727; OpenPasteBin</a>
              <span style="color:#8b949e;font-size:0.7rem">by weisser-dev &middot; Open Source &middot; Docker</span>
            </div>
            <div style="padding:10px 14px;background:#0d1117">
              <label style="display:block;color:#8b949e;font-size:0.72rem;margin-bottom:4px;font-weight:500">Inhalt (z.B. API Key oder Secret)</label>
              <textarea id="paste-input" placeholder="sk-ant-api03-..." style="width:100%;background:#21262d;border:1px solid #30363d;border-radius:4px;padding:8px 10px;color:#c9d1d9;font-family:'SF Mono',monospace;font-size:0.78rem;resize:none;height:60px;box-sizing:border-box;outline:none" onfocus="this.style.borderColor='#3fb950'" onblur="this.style.borderColor='#30363d'" oninput="document.getElementById('paste-warn').style.display=this.value.length>8?'block':'none'"></textarea>
              <div id="paste-warn" style="display:none;background:rgba(229,192,123,0.06);border:1px solid rgba(229,192,123,0.4);border-radius:4px;padding:5px 10px;margin-top:5px;font-size:0.7rem;color:#e5c07b">
                &#9888; Sensible Daten &mdash; kurze Ablaufzeit empfohlen.
              </div>
              <div style="display:flex;gap:8px;margin-top:8px;align-items:center">
                <select id="paste-exp" style="background:#21262d;border:1px solid #30363d;border-radius:4px;padding:4px 8px;color:#c9d1d9;font-family:'SF Mono',monospace;font-size:0.73rem;outline:none">
                  <option value="5">5 Min</option>
                  <option value="10" selected>10 Min</option>
                  <option value="30">30 Min</option>
                  <option value="60">1 Std</option>
                </select>
                <button onclick="(async()=>{const btn=document.getElementById('pb-btn'),inp=document.getElementById('paste-input'),res=document.getElementById('paste-res'),err=document.getElementById('paste-err'),exp=parseInt(document.getElementById('paste-exp').value);if(!inp.value.trim())return;btn.textContent='Creating...';btn.disabled=true;res.style.display='none';err.style.display='none';try{const r=await fetch('https://paste.weisser.dev/api/paste',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({content:inp.value,title:'API Key',type:'text',language:'plaintext',expiresValue:exp,expiresUnit:'minutes'})});const d=await r.json();if(d.url){document.getElementById('pb-url').value=d.url;document.getElementById('pb-open').href=d.url;res.style.display='block';inp.value='';document.getElementById('paste-warn').style.display='none';}else{err.style.display='block';}}catch(e){err.style.display='block';}btn.textContent='Create Paste';btn.disabled=false;})()" id="pb-btn" style="background:#3fb950;color:#0d1117;border:none;border-radius:4px;padding:5px 14px;font-family:'SF Mono',monospace;font-size:0.8rem;font-weight:700;cursor:pointer;flex-shrink:0;transition:background 0.15s" onmouseover="this.style.background='#4ac55e'" onmouseout="this.style.background='#3fb950'">Create Paste</button>
              </div>
            </div>
            <div id="paste-res" style="display:none;padding:8px 14px;background:#161b22;border-top:1px solid #30363d">
              <label style="display:block;color:#3fb950;font-size:0.7rem;margin-bottom:4px">&#10003; Erstellt &mdash; einmaliger Link:</label>
              <div style="display:flex;gap:6px">
                <input id="pb-url" type="text" readonly style="flex:1;background:#21262d;border:1px solid #3fb950;border-radius:4px;padding:4px 8px;color:#58d68d;font-family:'SF Mono',monospace;font-size:0.75rem;outline:none">
                <button onclick="navigator.clipboard.writeText(document.getElementById('pb-url').value).then(()=>{this.textContent='✓';setTimeout(()=>this.textContent='Copy',1500)})" style="background:#21262d;border:1px solid #30363d;border-radius:4px;padding:4px 10px;color:#c9d1d9;font-size:0.72rem;cursor:pointer;font-family:'SF Mono',monospace">Copy</button>
                <a id="pb-open" href="#" target="_blank" style="background:#21262d;border:1px solid #30363d;border-radius:4px;padding:4px 10px;color:#c9d1d9;font-size:0.72rem;text-decoration:none;font-family:'SF Mono',monospace">Open</a>
              </div>
              <p style="font-size:0.65rem;color:#8b949e;margin-top:4px">L&ouml;scht sich automatisch nach gew&auml;hlter Zeit.</p>
            </div>
            <div id="paste-err" style="display:none;padding:7px 14px;background:#0d1117;border-top:1px solid #30363d">
              <p style="font-size:0.72rem;color:#f85149">&#10006; Fehler. Ist <a href="https://paste.weisser.dev" target="_blank" style="color:#f85149">paste.weisser.dev</a> erreichbar?</p>
            </div>
            <div style="background:#161b22;border-top:1px solid #30363d;padding:5px 14px;display:flex;gap:10px">
              <span style="color:#8b949e;font-size:0.65rem">&#128274; Keine permanente Speicherung</span>
              <span style="color:#8b949e;font-size:0.65rem">&#128683; Keine Logs</span>
              <span style="color:#8b949e;font-size:0.65rem">&#9889; Auto-expiring</span>
            </div>
          </div>
          <div style="display:flex;gap:8px;font-size:0.7rem;margin-top:6px">
            <a href="https://paste.weisser.dev" target="_blank" rel="noopener" style="color:#3fb950;text-decoration:underline">paste.weisser.dev</a>
            <span style="color:#8b949e">&middot;</span>
            <a href="https://github.com/weisser-dev/openpastebin" target="_blank" rel="noopener" style="color:#8b949e;text-decoration:underline">github.com/weisser-dev/openpastebin</a>
          </div>
        </div>
        <div>
          <h3 style="color:#c9d1d9;font-size:0.9rem;margin-bottom:10px;font-family:'SF Mono',monospace">&#9888; Goldene Regel</h3>
          <div style="display:flex;flex-direction:column;gap:7px">
            <div style="padding:9px 12px;border-radius:5px;background:rgba(248,81,73,0.08);border:1px solid rgba(248,81,73,0.3);font-size:0.8rem;color:#c9d1d9">
              <strong style="color:#f85149">&#10060; Niemals</strong> den ganzen Key auf einmal &uuml;bertragen
            </div>
            <div style="padding:9px 12px;border-radius:5px;background:rgba(63,185,80,0.08);border:1px solid rgba(63,185,80,0.25);font-size:0.8rem;color:#c9d1d9">
              <strong style="color:#3fb950">&#9989; Key in 2&ndash;3 Teile aufteilen</strong>
            </div>
            <div style="padding:9px 12px;border-radius:5px;background:#161b22;border:1px solid #30363d;font-size:0.8rem;color:#c9d1d9">
              &#128233; Teil 1 per PasteBin (einmaliger Link)
            </div>
            <div style="padding:9px 12px;border-radius:5px;background:#161b22;border:1px solid #30363d;font-size:0.8rem;color:#c9d1d9">
              &#128172; Teil 2 per Messenger / Chat
            </div>
            <div style="padding:9px 12px;border-radius:5px;background:#161b22;border:1px solid #30363d;font-size:0.8rem;color:#c9d1d9">
              &#128203; Teil 3 m&uuml;ndlich oder per Zettel
            </div>
          </div>
          <div style="padding:9px;border-radius:5px;background:rgba(63,185,80,0.05);border:1px solid rgba(63,185,80,0.2);margin-top:10px">
            <p style="font-size:0.76rem;color:#8b949e;line-height:1.4">
              <strong style="color:#3fb950">Warum?</strong> Wird ein Kanal kompromittiert, hat der Angreifer nur einen Teil des Keys &ndash; nutzlos ohne die anderen Teile.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Modell-Guide: Welches Modell wof&uuml;r? =====
  {
    id: 'setup-models',
    theme: '',
    label: 'Modelle',
    content: `
      <span class="slide-label">Welches Modell wof&uuml;r?</span>
      <h2 class="slide-title">Claude Modelle im Vergleich</h2>
      <p class="slide-subtitle">Preise: AWS Bedrock, Region EU (Frankfurt). Welches Modell f&uuml;r welchen Zweck?</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <table class="comparison" style="font-size:0.75rem">
            <thead>
              <tr>
                <th>Modell</th>
                <th>In/1M</th>
                <th>Out/1M</th>
                <th>Model ID (EU)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Haiku 4.5</strong></td>
                <td style="color:var(--color-positive)">$1</td>
                <td style="color:var(--color-positive)">$5</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-haiku-4-5-20251001-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Sonnet 4.5</strong></td>
                <td>$3</td>
                <td>$15</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-sonnet-4-5-20250514-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Sonnet 4.6</strong></td>
                <td>$3</td>
                <td>$15</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-sonnet-4-6-v1</code></td>
              </tr>
              <tr>
                <td><strong>Opus 4.5</strong></td>
                <td>$5</td>
                <td>$25</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-opus-4-5-20250514-v1:0</code></td>
              </tr>
              <tr>
                <td><strong>Opus 4.6</strong></td>
                <td style="color:var(--color-warning)">$5</td>
                <td style="color:var(--color-warning)">$25</td>
                <td><code style="font-size:0.6rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">eu.anthropic.claude-opus-4-6-v1</code></td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:6px">
            <a href="https://aws.amazon.com/bedrock/pricing/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">AWS Bedrock Pricing</a> &middot; Model IDs f&uuml;r <code style="font-size:0.65rem;background:rgba(0,22,49,0.08);color:var(--color-primary-dark);padding:1px 3px;border-radius:2px">opencode.json</code>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Empfehlung</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-positive)">Haiku 4.5</strong> &ndash; Sub-Agents, schnelle Tasks, Zusammenfassungen. <strong>5x g&uuml;nstiger</strong> als Sonnet.</p>
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-primary)">Sonnet 4.5/4.6</strong> &ndash; <strong>Bestes Preis-Leistungs-Verh&auml;ltnis.</strong> Coding, Reasoning, Allrounder. Unser Default.</p>
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem"><strong style="color:var(--color-warning)">Opus 4.5/4.6</strong> &ndash; Maximum Intelligence. Komplexe Architektur, schwierige Bugs, Deep Research. <strong>Teuer &ndash; gezielt einsetzen.</strong></p>
            </div>
          </div>
          <div style="margin-top:8px;padding:8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-subdued);line-height:1.3">
              <strong style="color:var(--color-primary)">Tipp:</strong> In opencode.json: <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:0 3px;border-radius:2px;font-size:0.7rem">model</code> = Sonnet (Alltag), <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:0 3px;border-radius:2px;font-size:0.7rem">small_model</code> = Haiku (Sub-Agents). Opus per Modellwechsel in OpenCode wenn n&ouml;tig. <a href="https://www.cosmicjs.com/blog/claude-sonnet-45-vs-opus-45-a-real-world-comparison" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Vergleich</a>
            </p>
          </div>
          <div style="margin-top:8px;padding:8px;border-radius:6px;background:rgba(255,237,0,0.05);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.72rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">&#128161; Neuere Modelle = meist gleicher Preis</strong><br>
              Laut Claude-Pricing kosten neue Modelle h&auml;ufig genau so viel wie der Vorg&auml;nger &ndash; bei Azure sogar oft <em>g&uuml;nstiger</em>. Daher: immer die aktuellste Version nutzen.
              <br>
              <a href="https://claude.com/pricing#api" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">claude.com/pricing</a>
              &nbsp;&middot;&nbsp;
              <a href="https://azure.microsoft.com/en-us/pricing/details/azure-openai/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">azure.microsoft.com/pricing/azure-openai</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 6: opencode.json ablegen =====
  {
    id: 'setup-json',
    theme: '',
    label: 'opencode.json',
    content: `
      <span class="slide-label">Schritt 6</span>
      <h2 class="slide-title">opencode.json ablegen</h2>
      <p class="slide-subtitle">Lokale Config im Projekt &ndash; oder global f&uuml;r alle Projekte</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Lokal (im Projekt)</h3>
          <p style="color:var(--color-text-subdued);font-size:0.9rem;margin-bottom:8px">Erstellt eine <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.85rem">opencode.json</code> im Projekt-Root:</p>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              ./opencode.json
            </div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"share":"disabled","autoupdate":false,"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:14px 18px;font-size:0.75rem;line-height:1.4"><pre style="margin:0"><span class="code-comment">mein-projekt/</span>
  <span class="code-property">opencode.json</span>  <span class="code-comment">&larr; hier</span>
  src/
  package.json
  ...</pre></div>
          </div>
          <p style="margin-top:12px;font-size:0.85rem;color:var(--color-text-subdued)">
            Gilt nur f&uuml;r dieses Projekt. Kann ins Git eingecheckt werden (ohne Secrets!).
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:6px">Global (Fortgeschritten)</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Globaler Pfad</div>
            <div class="code-body" style="padding:8px 14px;font-size:0.8rem;line-height:1.3"><pre style="margin:0"><span class="code-comment"># macOS / Linux:</span>
<span class="code-property">~/.config/opencode/config.json</span>
<span class="code-comment"># Windows:</span>
<span class="code-property">%APPDATA%\\opencode\\config.json</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0 6px">Auth-Methoden <span style="font-size:0.75rem;font-weight:400;opacity:0.6">(klick zum Aufklappen)</span></h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.8rem">
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">AWS Profile <span style="font-weight:400;opacity:0.6">&ndash; in provider.options</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","profile":"mein-sso-profil"}}}'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-property">"provider"</span>: { <span class="code-property">"amazon-bedrock"</span>: {
  <span class="code-property">"options"</span>: {
    <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
    <span class="code-property">"profile"</span>: <span class="code-string">"mein-sso-profil"</span>
  }
}}</pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Bearer Token <span style="font-weight:400;opacity:0.6">&ndash; Env-Variable</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='AWS_BEARER_TOKEN_BEDROCK="<TOKEN>" AWS_REGION="eu-central-1" opencode'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-function">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
<span class="code-function">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> opencode</pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Access Key <span style="font-weight:400;opacity:0.6">&ndash; Env-Variablen</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='export AWS_ACCESS_KEY_ID="AKIA..." && export AWS_SECRET_ACCESS_KEY="..." && export AWS_REGION="eu-central-1" && opencode'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-function">export</span> AWS_ACCESS_KEY_ID=<span class="code-string">"AKIA..."</span>
<span class="code-function">export</span> AWS_SECRET_ACCESS_KEY=<span class="code-string">"..."</span>
<span class="code-function">export</span> AWS_REGION=<span class="code-string">"eu-central-1"</span>
<span class="code-function">opencode</span></pre></div>
              </div>
            </details>
            <details style="padding:6px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <summary style="cursor:pointer;font-weight:600">Anthropic API Key <span style="font-weight:400;opacity:0.6">&ndash; in provider.options</span></summary>
              <div class="code-block" style="margin:6px 0 0;font-size:0.7rem">
                <button class="copy-btn" data-copy='"provider":{"anthropic":{"options":{"apiKey":"{env:ANTHROPIC_API_KEY}"}}}'>&#128203;</button>
                <div class="code-body" style="padding:6px 10px"><pre style="margin:0"><span class="code-property">"provider"</span>: { <span class="code-property">"anthropic"</span>: {
  <span class="code-property">"options"</span>: {
    <span class="code-property">"apiKey"</span>: <span class="code-string">"{env:ANTHROPIC_API_KEY}"</span>
  }
}}</pre></div>
              </div>
            </details>
          </div>
          <p style="margin-top:6px;font-size:0.7rem;color:var(--color-text-subdued)">
            Prio: Bearer &gt; Profile &gt; Access Key. <a href="https://opencode.ai/docs/config/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Alle Details in den Docs</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Slide 7: OpenCode starten =====
  {
    id: 'setup-start',
    theme: 'slide--dark',
    label: 'Starten',
    content: `
      <span class="slide-label">Schritt 7</span>
      <h2 class="slide-title">OpenCode starten</h2>
      <p class="slide-subtitle">Terminal in VS Code &ouml;ffnen (<kbd style="background:rgba(255,255,255,0.1);padding:1px 6px;border-radius:3px;font-size:0.85rem">Ctrl+\`</kbd>) und los &ndash; 3 Wege je nach Umfeld</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-top:14px">
        <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">Option A: Bearer Token</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">F&uuml;r diesen Workshop &ndash; Token wird bereitgestellt</p>
          <div class="code-block" style="margin:0">
            <button class="copy-btn" data-copy='AWS_BEARER_TOKEN_BEDROCK="<TOKEN>" AWS_REGION="eu-central-1" opencode'>&#128203;</button>
            <div class="code-body" style="padding:8px 10px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
<span class="code-function">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> \\
<span class="code-function">opencode</span></pre></div>
          </div>
          <div style="margin-top:8px;padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              Bearer Token hat h&ouml;chste Prio &ndash; &uuml;berschreibt Profile/SSO.
            </p>
          </div>
        </div>
        <div style="padding:14px;border-radius:10px;background:rgba(37,204,120,0.06);border:1px solid rgba(37,204,120,0.2)">
          <h3 style="color:var(--color-positive);font-size:0.9rem;margin-bottom:8px">Option B: AWS SSO</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">Enterprise &ndash; f&uuml;r den Arbeitsalltag empfohlen</p>
          <div class="code-block" style="margin:0;margin-bottom:6px">
            <div class="code-header" style="font-size:0.6rem"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <button class="copy-btn" data-copy='"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","profile":"mein-sso-profil"}}}'>&#128203;</button>
            <div class="code-body" style="padding:6px 8px;font-size:0.6rem"><pre style="margin:0"><span class="code-property">"options"</span>: {
  <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
  <span class="code-property">"profile"</span>: <span class="code-string">"mein-sso-profil"</span>
}</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <button class="copy-btn" data-copy="aws sso login --profile mein-sso-profil && opencode">&#128203;</button>
            <div class="code-body" style="padding:6px 8px;font-size:0.6rem"><pre style="margin:0"><span class="code-function">aws sso login</span> --profile mein-sso-profil
<span class="code-function">opencode</span></pre></div>
          </div>
          <div style="margin-top:6px;padding:6px 8px;border-radius:6px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-positive)">Empfohlen:</strong> Credentials rotieren automatisch.
            </p>
          </div>
        </div>
        <div style="padding:14px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-accent)">
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">Option C: Privat / Zuhause</h3>
          <p style="font-size:0.72rem;color:var(--color-text-on-dark-subdued);margin-bottom:8px">F&uuml;r eigene Projekte &ndash; ohne Enterprise-Infra</p>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px">
            <div style="padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);font-size:0.7rem;color:var(--color-text-on-dark)">
              <strong style="color:var(--color-accent)">&#11088; Claude Code Abo</strong><br>
              <span style="font-size:0.65rem;color:var(--color-text-on-dark-subdued)">$20/Monat. Bestes Preis-Leistungs-Verh&auml;ltnis. Modelle von Anthropic direkt &ndash; kein API-Key-Setup n&ouml;tig.</span>
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>OpenCode + Ollama</strong> &ndash; Komplett gratis &amp; lokal
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>OpenCode + Big Pickle / MiniMax</strong> &ndash; Gratis in OpenCode
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>GitHub Copilot</strong> &ndash; Login &uuml;ber GitHub
            </div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.65rem;color:var(--color-text-on-dark)">
              <strong>ChatGPT / Codex</strong> &ndash; OpenAI API-Key
            </div>
          </div>
          <div style="padding:6px 8px;border-radius:6px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25)">
            <p style="font-size:0.65rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">Meine Empfehlung:</strong> <a href="https://claude.ai/pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Claude Code Abo</a> &ndash; bestes Preis-Leistungs-Verh&auml;ltnis. <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">75+ Provider</a>
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
        <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-warning)">Erster Start dauert 1-2 Minuten.</strong> Tut sich nichts oder wird es blockiert? &rarr; <strong>Desktop App nutzen &ndash; n&auml;chste Seite!</strong>
        </p>
      </div>
    `,
  },

  // ===== Schritt 8: Fallback Desktop App =====
  {
    id: 'setup-fallback',
    theme: '',
    label: 'Desktop App',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Schritt 8 &ndash; Alternative</span>
      <h2 class="slide-title">Alternative zur CLI? Desktop App!</h2>
      <p class="slide-subtitle">Falls OpenCode im Terminal nicht startet &ndash; die Desktop App funktioniert genauso</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">1. Desktop App herunterladen</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <a href="https://opencode.ai/de/download" target="_blank" rel="noopener" style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block">
              <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700">opencode.ai/de/download</p>
              <p style="font-size:0.8rem;color:var(--color-text-subdued)">Offizielle Download-Seite</p>
            </a>
            <a href="https://github.com/anomalyco/opencode/releases" target="_blank" rel="noopener" style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block">
              <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700">GitHub Releases</p>
              <p style="font-size:0.8rem;color:var(--color-text-subdued)">Falls die Webseite blockiert ist</p>
            </a>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">2. Globale Config anlegen</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Pfad (Windows)</div>
            <button class="copy-btn" data-copy="C:\\Users\\<userid>\\.config\\opencode\\config.json">&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px;font-size:0.8rem"><pre style="margin:0"><span class="code-property">C:\\Users\\&lt;userid&gt;\\.config\\opencode\\config.json</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">3. Bearer Token eintragen</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>config.json</div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","apiKey":"<BEARER_TOKEN>"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px;font-size:0.68rem;line-height:1.3"><pre style="margin:0">{
  <span class="code-property">"enabled_providers"</span>: [<span class="code-string">"amazon-bedrock"</span>],
  <span class="code-property">"provider"</span>: {
    <span class="code-property">"amazon-bedrock"</span>: {
      <span class="code-property">"options"</span>: {
        <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
        <span class="code-property">"apiKey"</span>: <span class="code-string">"&lt;BEARER_TOKEN&gt;"</span>
      }
    }
  }
}</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-warning)">Token einsetzen</strong> &rarr; Desktop App &ouml;ffnen &rarr; Projekt-Ordner w&auml;hlen &rarr; fertig.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== OpenCode erfolgreich gestartet =====
  {
    id: 'setup-success',
    theme: 'slide--dark',
    label: 'Gestartet',
    content: `
      <span class="slide-label" style="color:var(--color-positive)">Geschafft!</span>
      <h2 class="slide-title">Wenn alles geklappt hat...</h2>
      <p class="slide-subtitle">...sollte es jetzt so aussehen:</p>
      <div style="max-width:750px;margin:24px auto 0;background:#1a1a1a;border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.4);font-family:var(--font-mono);position:relative">
        <div style="display:flex;align-items:center;gap:8px;padding:10px 16px;background:#0d0d0d">
          <span style="width:12px;height:12px;border-radius:50%;background:#ff5f57"></span>
          <span style="width:12px;height:12px;border-radius:50%;background:#ffbd2e"></span>
          <span style="width:12px;height:12px;border-radius:50%;background:#28c840"></span>
          <span style="color:#666;font-size:0.75rem;margin-left:8px">Terminal &mdash; opencode</span>
        </div>
        <div style="padding:40px 60px;text-align:center">
          <div style="margin-bottom:40px;font-size:1.8rem;letter-spacing:2px">
            <span style="color:#999">open</span><span style="color:#eee">code</span>
          </div>
          <div style="text-align:left;max-width:460px;margin:0 auto">
            <div style="border-left:3px solid #3b82f6;padding:8px 16px;background:#1f1f1f;border-radius:0 6px 6px 0;margin-bottom:6px">
               <span style="color:#777">Ask anything... "Fix a TODO in the codebase"</span>
            </div>
            <div style="padding:4px 16px;margin-bottom:8px">
              <span style="color:#3b82f6;font-weight:700">Build</span>
              <span style="color:#ccc;margin-left:8px">Claude Sonnet 4.6 (EU)</span>
              <span style="color:#666;margin-left:8px">Amazon Bedrock</span>
            </div>
            <div style="text-align:right;color:#666;font-size:0.75rem;margin-bottom:14px">
              <span style="color:#ccc">ctrl+t</span> variants
              <span style="color:#ccc;margin-left:16px">tab</span> agents
              <span style="color:#ccc;margin-left:16px">ctrl+p</span> commands
            </div>
            <div style="text-align:center;margin-bottom:8px">
              <span style="color:#f59e0b;font-size:0.6rem">&#9679;</span>
              <span style="color:#f59e0b;font-size:0.85rem;margin-left:4px">Tip</span>
              <span style="color:#999;font-size:0.85rem"> Press </span>
              <span style="color:#ccc;font-weight:700;font-size:0.85rem">Escape</span>
              <span style="color:#999;font-size:0.85rem"> to stop the AI mid-response</span>
            </div>
          </div>
        </div>
        <div style="position:absolute;bottom:10px;right:16px;color:#555;font-size:0.7rem">1.2.5</div>
      </div>
      <div style="margin-top:20px;padding:14px;border-radius:8px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.25);max-width:750px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-positive)">Bereit!</strong> Ihr k&ouml;nnt jetzt loslegen. Tippt eure erste Frage oder Aufgabe ein &ndash; der Agent &uuml;bernimmt.
        </p>
      </div>
    `,
  },

  // ===== OpenCode: Weitere Wege =====
  {
    id: 'setup-alternatives',
    theme: '',
    label: 'Weitere Wege',
    content: `
      <span class="slide-label">Gut zu wissen</span>
      <h2 class="slide-title">OpenCode &ndash; nicht nur im Terminal</h2>
      <p class="slide-subtitle">Terminal ist der Standard &ndash; aber es gibt noch mehr M&ouml;glichkeiten</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128187;</div>
          <div class="card-title" style="font-size:0.95rem">Terminal (TUI)</div>
          <div class="card-text" style="font-size:0.8rem">Der Standard. <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode</code> im Projektverzeichnis &ndash; direkt loslegen.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#127760;</div>
          <div class="card-title" style="font-size:0.95rem">Web-Oberfl&auml;che</div>
          <div class="card-text" style="font-size:0.8rem"><code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode web</code> &ndash; &ouml;ffnet Chat im Browser. Mehrere Sessions, gleicher Server.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128421;</div>
          <div class="card-title" style="font-size:0.95rem">Desktop App</div>
          <div class="card-text" style="font-size:0.8rem">Beta f&uuml;r macOS, Windows, Linux. <a href="https://opencode.ai/de/download" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Jetzt downloaden</a></div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128295;</div>
          <div class="card-title" style="font-size:0.95rem">IDE Extension</div>
          <div class="card-text" style="font-size:0.8rem">VS Code Extension &ndash; OpenCode direkt in der IDE nutzen ohne Terminal.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#9000;</div>
          <div class="card-title" style="font-size:0.95rem">CLI (Headless)</div>
          <div class="card-text" style="font-size:0.8rem"><code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.75rem">opencode run "..."</code> &ndash; Ohne UI, f&uuml;r Scripting und CI/CD Pipelines.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(47,108,122,0.1);color:var(--color-primary)">&#128279;</div>
          <div class="card-title" style="font-size:0.95rem">GitHub / GitLab</div>
          <div class="card-text" style="font-size:0.8rem">Native Integrations f&uuml;r Issues, PRs, Code Review &ndash; direkt in eurem Workflow.</div>
        </div>
      </div>
      <div style="margin-top:14px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);text-align:center">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
          Alle Details: <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Web</a> &middot; <a href="https://opencode.ai/docs/de/tui/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">TUI</a> &middot; <a href="https://opencode.ai/docs/de/cli/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">CLI</a> &middot; <a href="https://opencode.ai/docs/de/ide/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">IDE</a> &middot; <a href="https://opencode.ai/docs/de/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Alle Docs</a>
        </p>
      </div>
    `,
  },

  // ===== Beispiel 1: 2048 =====
  {
    id: 'example-2048',
    theme: '',
    label: '2048',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Beispiel 1 &ndash; Einfach</span>
      <h2 class="slide-title">2048 &ndash; in einem Prompt</h2>
      <p class="slide-subtitle">Wir starten einfach. Ein Prompt, ein fertiges Spiel.</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 1: Spiel bauen
          </div>
          <button class="copy-btn" data-copy="Baue das Spiel 2048 als Vite App. Nutze HTML, CSS und Vanilla JS. Es soll mit Tastatur und Touch bedienbar sein. Lese unsere AGENTS.md dazu ein.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Baue das Spiel 2048 als Vite App.
Nutze HTML, CSS und Vanilla JS.
Es soll mit Tastatur und Touch bedienbar sein.
Lese unsere AGENTS.md dazu ein."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 2: Starten
          </div>
          <button class="copy-btn" data-copy="F\u00fchre das Spiel aus">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"F&uuml;hre das Spiel aus"</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:750px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">Schaut zu:</strong> Der Agent erstellt package.json, installiert Vite, baut Grid-Logik, Scoring &ndash; und startet den Dev-Server. <strong>Aber: Wie sieht der Code aus?</strong>
        </p>
      </div>
    `,
  },

  // ===== Warnung: Faulheit =====
  {
    id: 'warning-lazy',
    theme: 'slide--dark slide--divider',
    label: 'Achtung',
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <div style="font-size:4rem;margin-bottom:14px">&#9888;</div>
        <h2 class="slide-title" style="color:#ff6c12">Stopp &ndash; merkt ihr was?</h2>
        <p style="font-size:1.2rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:16px">
          Wir geben schon einfache Befehle wie <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1.1rem">npm run dev</code> an die KI ab.
        </p>
        <p style="font-size:1.4rem;line-height:1.7;color:var(--color-text-on-dark);margin-top:16px">
          Dieser Prompt <strong style="color:#ff6c12">kostet Geld</strong>.<br>Das Eintippen des Commands <strong>nicht</strong>.
        </p>
        <p style="font-size:1.1rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:16px">
          Es gibt Leute die sagen <em>"committe mein Projekt"</em> oder <em>"pushe das"</em> &ndash;<br>das w&auml;re ein einfaches <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1rem">git push</code>.
        </p>
        <div style="margin-top:20px;padding:14px;border-radius:12px;background:rgba(255,108,18,0.12);border:2px solid rgba(255,108,18,0.3)">
          <p style="font-size:1.3rem;color:#ff6c12;font-weight:700">
            Man wird erstaunlich schnell faul.
          </p>
        </div>
      </div>
    `,
  },

  // ===== Beispiel 2: agents.md anlegen =====
  {
    id: 'example-agentsmd',
    theme: 'slide--dark',
    label: 'agents.md',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Beispiel 2 &ndash; agents.md</span>
      <h2 class="slide-title">Jetzt mit Qualit&auml;t</h2>
      <p class="slide-subtitle">agents.md anlegen &ndash; dann 2048 nochmal mit gleichem Prompt</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>AGENTS.md anlegen</div>
            <button class="copy-btn" data-copy="# Frontend Game Agent\n\nDu bist ein professioneller Frontend-Entwickler f\u00fcr Browser-Spiele.\n\n## Architektur\n- Pr\u00fcfe welches Build-System genutzt wird\n- Nutze Component-basierte Architektur\n- Trenne: Spiellogik, Rendering, Input-Handling, State\n- Jede Klasse in eigene Datei\n\n## Qualit\u00e4t\n- Fl\u00fcssige CSS-Animationen (transitions, transforms)\n- requestAnimationFrame f\u00fcr Game-Loops\n- Responsive Design, Touch + Keyboard Support\n- Game Over Screen mit Score\n- Pause-Funktion (Escape/P)\n- Exit-M\u00f6glichkeit zur\u00fcck zum Men\u00fc\n\n## Code-Stil\n- Funktionen < 30 Zeilen\n- Sprechende Variablennamen (englisch)\n- JSDoc-Kommentare f\u00fcr \u00f6ffentliche Methoden\n- Keine globalen Variablen\n- ES Modules, kein var">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.7rem;line-height:1.35"><pre style="margin:0"><span class="code-comment"># Frontend Game Agent</span>
<span class="code-keyword">## Architektur</span>
- Component-basiert, Klassen getrennt
- Spiellogik / Rendering / Input / State

<span class="code-keyword">## Qualit&auml;t</span>
- CSS-Animationen, rAF f&uuml;r Game-Loops
- Responsive, Touch + Keyboard
- Game Over, Pause (Esc), Exit zum Men&uuml;

<span class="code-keyword">## Code-Stil</span>
- Funktionen &lt;30 Zeilen, JSDoc
- ES Modules, keine globalen Variablen</pre></div>
          </div>
        </div>
        <div>
          <div class="code-block" style="margin:0 0 12px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Gleicher Prompt nochmal</div>
            <button class="copy-btn" data-copy="L\u00f6sche den bisherigen Code und baue das Spiel 2048 als Vite App. Nutze HTML, CSS und Vanilla JS. Es soll mit Tastatur und Touch bedienbar sein. Lese unsere AGENTS.md dazu ein.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.9rem"><pre style="margin:0"><span class="code-string">"L&ouml;sche den Code und baue 2048
nochmal. HTML, CSS, Vanilla JS.
Und lese die neue AGENTS.md ein."</span></pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Was sich &auml;ndert</h3>
          <ul class="feature-list" style="gap:5px">
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>Getrennte Klassen: Game, Grid, Tile, Input</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>Fl&uuml;ssige Animationen, Pause, Game Over</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span>rAF statt setInterval, JSDoc, Module</span></li>
          </ul>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Gleicher Prompt</strong> &ndash; aber die agents.md sagt dem Agent <em>wie</em> er arbeiten soll. Das ist der Unterschied.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Beispiel 2b: agents.md verbessern lassen =====
  {
    id: 'example-improve-agents',
    theme: '',
    label: 'agents.md verbessern',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Beispiel 2b &ndash; Meta</span>
      <h2 class="slide-title">Wieso schreiben wir die agents.md selbst?</h2>
      <p class="slide-subtitle">Lasst die KI ihre eigenen Regeln optimieren &ndash; und baut dann nochmal.</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt: agents.md verbessern lassen
          </div>
          <button class="copy-btn" data-copy="Lies unsere AGENTS.md und verbessere sie so, wie es ein Experte f\u00fcr KI-Prompting schreiben w\u00fcrde. Achte auf klare Struktur, pr\u00e4zise Anweisungen, Edge Cases und Best Practices. Speichere die verbesserte Version.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Lies unsere AGENTS.md und verbessere sie
so, wie es ein Experte f&uuml;r KI-Prompting
schreiben w&uuml;rde. Achte auf klare Struktur,
pr&auml;zise Anweisungen, Edge Cases und
Best Practices. Speichere die verbesserte Version."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Danach: 2048 nochmal bauen
          </div>
          <button class="copy-btn" data-copy="L\u00f6sche den bisherigen Code und baue das Spiel 2048 nochmal komplett neu anhand der verbesserten AGENTS.md.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"L&ouml;sche den bisherigen Code und baue 2048
nochmal komplett neu anhand der
verbesserten AGENTS.md."</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);max-width:750px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-primary)">Die Meta-Lektion:</strong> Die KI kann nicht nur Code schreiben &ndash; sie kann auch ihre eigenen Anweisungen optimieren. Vergleicht die verbesserte agents.md mit eurer und schaut ob sich das Ergebnis nochmal verbessert.
        </p>
      </div>
    `,
  },

  // ===== Beispiel 3: Erweitern =====
  {
    id: 'example-extend',
    theme: '',
    label: 'Erweitern',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Beispiel 3 &ndash; Komplex</span>
      <h2 class="slide-title">Jetzt wird es spannend</h2>
      <p class="slide-subtitle">Startseite mit Spieleauswahl &ndash; und ein zweites Spiel dazu</p>
      <div style="max-width:750px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Prompt 3: Startseite + zweites Spiel
          </div>
          <button class="copy-btn" data-copy="Baue eine Startseite auf der man Spiele ausw\u00e4hlen kann. Zeige 2048 als erstes Spiel an. Erg\u00e4nze als zweites Spiel Doodle Jump (Canvas-basiert, Plattformen, Schwerkraft, Score). Die Startseite soll sch\u00f6n gestaltet sein mit Vorschaubildern und Beschreibungen.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Baue eine Startseite auf der man Spiele
ausw&auml;hlen kann. Zeige 2048 als erstes Spiel.
Erg&auml;nze als zweites Spiel Doodle Jump
(Canvas-basiert, Plattformen, Schwerkraft, Score).
Die Startseite soll sch&ouml;n gestaltet sein
mit Vorschaubildern und Beschreibungen."</span></pre></div>
        </div>
      </div>
      <div class="two-cols" style="margin-top:16px;max-width:750px;margin-left:auto;margin-right:auto">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Was der Agent jetzt tut</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">1</span><span>Bestehenden 2048-Code analysieren</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">2</span><span>Router/Navigation einbauen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">3</span><span>Startseite mit Grid erstellen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">4</span><span>Doodle Jump komplett neu bauen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">5</span><span>Exit-Buttons zur&uuml;ck zur Startseite</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Warum das beeindruckend ist</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#129504;</span><span><strong>Versteht den Kontext</strong> &ndash; 2048 existiert bereits, wird integriert</span></li>
            <li><span class="check">&#127959;</span><span><strong>Architektur-Entscheidungen</strong> &ndash; Weil agents.md das vorgibt</span></li>
            <li><span class="check">&#127912;</span><span><strong>Design</strong> &ndash; Sieht gut aus, weil "sch&ouml;n gestaltet" im Prompt steht</span></li>
            <li><span class="check">&#128640;</span><span><strong>Aufwand</strong> &ndash; Ein Prompt. Minuten. Nicht Stunden.</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Hands-On: Space Invaders =====
  {
    id: 'handson-space-invaders',
    theme: '',
    label: 'Space Invaders',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Hands-On: Prompt 4</span>
      <h2 class="slide-title" style="color:var(--color-text);font-size:1.5rem">Space Invaders &ndash; mit eigener Retro-AGENTS.md</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Zuerst eine spezialisierte AGENTS.md, dann das Spiel</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Schritt 1: Retro-Game AGENTS.md</h3>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="Erstelle eine neue AGENTS.md die speziell f\u00fcr Retro-Spiele in Pixelgrafik optimiert ist. Sie soll Regeln f\u00fcr: Canvas-Rendering mit Pixelart-Stil, Retro-Farbpaletten, Sprite-basierte Grafik, klassische Spielmechaniken (Leben, Score, Waves, Power-Ups), und responsive Touch-Steuerung enthalten.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Erstelle eine neue AGENTS.md f&uuml;r
Retro-Spiele: Pixelart, Retro-Paletten,
Sprites, Spielmechaniken (Leben, Score,
Waves), Touch-Steuerung."</span></pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Schritt 2: Spiel bauen</h3>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="Erg\u00e4nze Space Invaders als drittes Spiel auf der Startseite. Pixelgrafik-Stil, Wellen von Aliens, Schie\u00dfen, Leben, Highscore. Lese die AGENTS.md ein und halte dich daran.">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Erg&auml;nze Space Invaders als 3. Spiel.
Pixelgrafik, Wellen von Aliens,
Schie&szlig;en, Leben, Highscore.
Lese die AGENTS.md ein."</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Warum wichtig</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#127919; <strong>Spezialisierte AGENTS.md</strong> &ndash; f&uuml;r genau diese Art Projekt
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#128260; <strong>Selbst-Verbesserung</strong> &ndash; Agent schreibt Regeln die ihn besser machen
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#127912; <strong>Konsistenter Stil</strong> &ndash; alle Spiele gleicher Retro-Look
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem">
              &#129504; <strong>Kontext</strong> &ndash; kennt 2048 + Doodle Jump, integriert Space Invaders
            </div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Sch&auml;tzfrage:</strong> Wie lange f&uuml;r Space Invaders? Mit der richtigen AGENTS.md: <strong>Ein Prompt. Minuten.</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Weitere Beispiele =====
  {
    id: 'example-real',
    theme: 'slide--dark',
    label: 'Mehr Beispiele',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Weiter ausprobieren</span>
      <h2 class="slide-title">Noch mehr Ideen</h2>
      <p class="slide-subtitle">W&auml;hlt eine Aufgabe die zu eurem Projekt passt</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px">
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128196;</div>
          <div class="card-title">Doku generieren</div>
          <div class="card-text">"Erstelle eine API-Dokumentation f&uuml;r alle Endpoints"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#129514;</div>
          <div class="card-title">Tests schreiben</div>
          <div class="card-text">"Schreibe Integration Tests f&uuml;r den UserController"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title">Code Review</div>
          <div class="card-text">"Reviewe die letzten 3 Commits auf Bugs &amp; Security"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128736;</div>
          <div class="card-title">Refactoring</div>
          <div class="card-text">"Extrahiere die Validierung in einen eigenen Service"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128640;</div>
          <div class="card-title">Neues Feature</div>
          <div class="card-text">"F&uuml;ge einen Health-Check Endpoint hinzu"</div>
        </div>
        <div class="card" style="padding:14px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128027;</div>
          <div class="card-title">Bug fixen</div>
          <div class="card-text">"Pagination gibt bei page=0 einen 500er &ndash; fixe es"</div>
        </div>
      </div>
      <div style="margin-top:20px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-accent)">Denkt dran:</strong> Ihr seid der Experte, der Agent ist euer Werkzeug. Reviewt alles, hinterfragt die Entscheidungen, lernt dabei.
        </p>
      </div>
    `,
  },

  // ===== Prompt-Ideen f&uuml;r den Alltag =====
  {
    id: 'example-prompts',
    theme: '',
    label: 'Prompt-Ideen',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">F&uuml;r den Alltag</span>
      <h2 class="slide-title">Prompt-Ideen f&uuml;r euren Arbeitsalltag</h2>
      <p class="slide-subtitle">Kopiert, passt an, probiert aus</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px">
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Veraltete Doku finden</div>
          <button class="copy-btn" data-copy="Vergleiche die README.md und die Code-Kommentare mit dem aktuellen Code. Liste alles auf was veraltet oder falsch ist und korrigiere es.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Vergleiche README und Code-Kommentare
mit dem aktuellen Code. Was ist veraltet?
Korrigiere es."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Changelog generieren</div>
          <button class="copy-btn" data-copy="Erstelle ein CHANGELOG.md aus den letzten 20 Git Commits. Gruppiere nach Features, Fixes und Refactoring.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Erstelle ein CHANGELOG.md aus den
letzten 20 Git Commits. Gruppiere nach
Features, Fixes, Refactoring."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Security Audit</div>
          <button class="copy-btn" data-copy="Pr\u00fcfe alle Dependencies auf bekannte Schwachstellen. Pr\u00fcfe den Code auf SQL Injection, XSS und unsichere API-Aufrufe.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Pr&uuml;fe Dependencies auf Schwachstellen.
Pr&uuml;fe Code auf SQL Injection, XSS
und unsichere API-Aufrufe."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Onboarding-Guide</div>
          <button class="copy-btn" data-copy="Erstelle einen Onboarding-Guide f\u00fcr neue Entwickler. Erkl\u00e4re Projektstruktur, Setup, wichtige Konventionen und wie man einen ersten PR erstellt.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Erstelle einen Onboarding-Guide.
Projektstruktur, Setup, Konventionen
und erster PR."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Dead Code finden</div>
          <button class="copy-btn" data-copy="Finde ungenutzten Code, unbenutzte Imports, tote Funktionen und leere Dateien. Liste alles auf und entferne es.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Finde ungenutzten Code, Imports,
tote Funktionen, leere Dateien.
Aufr&auml;umen."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Migration planen</div>
          <button class="copy-btn" data-copy="Analysiere das Projekt und erstelle einen Plan um von Java 11 auf Java 21 zu migrieren. Liste Breaking Changes, deprecated APIs und n\u00f6tige \u00c4nderungen auf.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Plan f&uuml;r Migration Java 11 &rarr; 21.
Breaking Changes, deprecated APIs,
n&ouml;tige &Auml;nderungen."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Performance Review</div>
          <button class="copy-btn" data-copy="Analysiere die Performance des Codes. Finde N+1 Queries, unn\u00f6tige Datenbankaufrufe, fehlende Indizes und Optimierungspotenzial.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Performance-Analyse: N+1 Queries,
unn&ouml;tige DB-Aufrufe, fehlende
Indizes, Optimierungen."</span></pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Error Handling verbessern</div>
          <button class="copy-btn" data-copy="Pr\u00fcfe das gesamte Error Handling. Finde leere catch-Bl\u00f6cke, fehlende Fehlerbehandlung und unspezifische Exceptions. Verbessere es.">&#128203; Copy</button>
          <div class="code-body" style="padding:10px 14px;font-size:0.85rem"><pre style="margin:0"><span class="code-string">"Pr&uuml;fe Error Handling. Leere catch-
Bl&ouml;cke, fehlende Behandlung,
unspezifische Exceptions. Fixen."</span></pre></div>
        </div>
      </div>
    `,
  },

  // ===== Nicht nur Code =====
  {
    id: 'example-non-code',
    theme: 'slide--dark',
    label: 'Nicht nur Code',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Denkt gr&ouml;&szlig;er</span>
      <h2 class="slide-title">Nicht nur Code</h2>
      <p class="slide-subtitle">OpenCode kann alles was mit Text, Dateien und Recherche zu tun hat &ndash; nicht nur programmieren</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:16px;margin-top:28px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#127912;</div>
          <div class="card-title" style="font-size:0.9rem">Pr&auml;sentationen</div>
          <div class="card-text" style="font-size:0.75rem">"Erstelle eine HTML-Pr&auml;sentation zum Thema X" &ndash; genau so ist <strong>diese Pr&auml;sentation</strong> entstanden.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title" style="font-size:0.9rem">Research</div>
          <div class="card-text" style="font-size:0.75rem">"Recherchiere die Top 10 KI-Tools 2026 mit Preisen und Vor/Nachteilen. Erstelle eine Vergleichstabelle."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128221;</div>
          <div class="card-title" style="font-size:0.9rem">Confluence-Seiten</div>
          <div class="card-text" style="font-size:0.75rem">"Erstelle eine Confluence-Seite f&uuml;r unser Architektur-Konzept anhand des Codes im Repo."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#9986;</div>
          <div class="card-title" style="font-size:0.9rem">Dokumente k&uuml;rzen</div>
          <div class="card-text" style="font-size:0.75rem">"K&uuml;rze dieses 20-seitige Dokument auf die wichtigsten 3 Seiten. Behalte alle Zahlen und Entscheidungen."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128202;</div>
          <div class="card-title" style="font-size:0.9rem">Daten analysieren</div>
          <div class="card-text" style="font-size:0.75rem">"Analysiere diese CSV und erstelle eine Zusammenfassung mit den Top-Trends und Ausrei&szlig;ern."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128172;</div>
          <div class="card-title" style="font-size:0.9rem">Meeting-Vorbereitung</div>
          <div class="card-text" style="font-size:0.75rem">"Erstelle eine Agenda und Diskussionspunkte f&uuml;r unser Sprint Review anhand der letzten Commits."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128203;</div>
          <div class="card-title" style="font-size:0.9rem">ADRs schreiben</div>
          <div class="card-text" style="font-size:0.75rem">"Erstelle ein Architecture Decision Record f&uuml;r die Migration von REST zu GraphQL."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128231;</div>
          <div class="card-title" style="font-size:0.9rem">E-Mails &amp; Texte</div>
          <div class="card-text" style="font-size:0.75rem">"Formuliere eine h&ouml;fliche Absage an den Dienstleister mit Verweis auf die Vertragsklausel."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128218;</div>
          <div class="card-title" style="font-size:0.9rem">Lernen &amp; Erkl&auml;ren</div>
          <div class="card-text" style="font-size:0.75rem">"Erkl&auml;re mir Kubernetes Networking so, dass ich es einem Nicht-Techniker erkl&auml;ren kann."</div>
        </div>
      </div>
    `,
  },

  // ===== Quiz: Hands-On =====
  {
    id: 'quiz-handson',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Wissens-Check: Hands-On</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. Was macht der Befehl "npx opencode-ai@latest"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Installiert OpenCode permanent global</button>
            <button class="quiz-option" data-correct="true">F&uuml;hrt die neueste Version von OpenCode aus ohne permanente Installation</button>
            <button class="quiz-option" data-correct="false">Aktualisiert Node.js auf die neueste Version</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. Was bewirkt eine agents.md im Projekt?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Sie ersetzt die package.json</button>
            <button class="quiz-option" data-correct="false">Sie wird nur einmal beim Start gelesen</button>
            <button class="quiz-option" data-correct="true">Sie gibt dem Agent Verhaltensregeln die bei jeder Konversation geladen werden</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Warum sollte man "f&uuml;hre npm run dev aus" nicht an die KI delegieren?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Weil die KI den Befehl nicht kennt</button>
            <button class="quiz-option" data-correct="true">Weil es Geld kostet &ndash; den Befehl selbst einzutippen ist kostenlos</button>
            <button class="quiz-option" data-correct="false">Weil npm run dev gef&auml;hrlich ist</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
