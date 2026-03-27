export const deepDiveSlides = [
  // ===== SECTION DIVIDER - Deep Dive =====
  {
    id: 'section-deepdive',
    theme: 'slide--primary slide--divider',
    label: 'Deep Dive',
    content: `
      <div class="divider-number">&#128300;</div>
      <h2 class="slide-title">Deep Dive</h2>
      <p class="slide-subtitle">Aufgaben, Ressourcen und der Weg zum sich selbst verbessernden System</p>
    `,
  },

  // ===== Recommendation: Sandbox & Sicherheit =====
  {
    id: 'deepdive-recommendation',
    theme: '',
    label: 'Empfehlung',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Wichtig</span>
      <h2 class="slide-title">Empfehlung: Sandbox, Tokens &amp; Sicherheit</h2>
      <p class="slide-subtitle">Bevor ihr loslegt &ndash; 3 Regeln die euch vor b&ouml;sen &Uuml;berraschungen sch&uuml;tzen</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">&#128274; Immer in einer Sandbox arbeiten</h3>
          <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary);margin-bottom:8px;font-size:0.82rem;line-height:1.5">
            KI ist <strong>nicht 100% nachvollziehbar</strong>. Ein Agent kann Dateien l&ouml;schen, Configs &auml;ndern oder unerwartete Befehle ausf&uuml;hren. Deshalb: <strong>Nur das Projekt-Repo mounten</strong>, nicht euer Home-Verzeichnis.
          </div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:6px">&#128272; Tokens &ndash; immer projektspezifisch</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.8rem">
            <li><span class="check">!</span><span><strong>Keine globalen Tokens</strong> &ndash; Nicht <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.72rem">~/.aws/credentials</code> mounten</span></li>
            <li><span class="check">!</span><span><strong>Projektspezifische Tokens</strong> per Env-Variable &uuml;bergeben</span></li>
            <li><span class="check">!</span><span><strong>Read-Only wo m&ouml;glich</strong> &ndash; Agent braucht selten Schreibrechte auf Infra</span></li>
            <li><span class="check">!</span><span><strong>Token-Rotation</strong> &ndash; Bearer Tokens mit kurzer Laufzeit nutzen</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:6px">&#128051; OpenCode in Docker starten</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Docker &ndash; isolierte Sandbox</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.68rem"><pre style="margin:0"><span class="code-comment"># Projekt-Ordner als einziges Volume mounten</span>
<span class="code-function">docker run</span> -it --rm \\
  -v <span class="code-string">"\$(pwd)"</span>:/workspace \\
  -w /workspace \\
  -e <span class="code-property">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
  -e <span class="code-property">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> \\
  node:20 \\
  bash -c <span class="code-string">"npm i -g opencode-ai && opencode"</span>

<span class="code-comment"># Was passiert:</span>
<span class="code-comment"># - Nur /workspace ist sichtbar (euer Projekt)</span>
<span class="code-comment"># - Kein Zugriff auf Host-Dateisystem</span>
<span class="code-comment"># - Token nur f&uuml;r diese Session</span>
<span class="code-comment"># - Container wird nach Exit gel&ouml;scht (--rm)</span></pre></div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.75rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Zusammengefasst:</strong><br>
            &#10003; Nur Projekt-Repo mounten, nicht <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">~</code> oder <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">/</code><br>
            &#10003; Tokens per <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">-e</code> Env-Var, nicht per Volume<br>
            &#10003; <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.68rem">--rm</code> damit nichts &uuml;brigbleibt<br>
            &#10003; Ergebnis per Git committen, nicht per Volume rauskopieren
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: MCP - Playwright =====
  {
    id: 'deepdive-mcp',
    theme: 'slide--dark',
    label: 'MCP verbinden',
    content: `
      <span class="slide-label">Deep Dive 1</span>
      <h2 class="slide-title">Verbinde deinen ersten MCP</h2>
      <p class="slide-subtitle">Wir haben &uuml;ber MCP als Werkzeugkoffer gesprochen &ndash; jetzt nutzen wir einen: <strong>Playwright MCP</strong></p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:12px">Was ist Playwright MCP?</h3>
          <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:16px">
            Ein MCP Server von <strong>Microsoft</strong> der OpenCode echte Browser-F&auml;higkeiten gibt: Webseiten &ouml;ffnen, klicken, Formulare ausf&uuml;llen, Screenshots machen, testen &ndash; alles per Prompt.
          </p>
          <div class="code-block" style="margin-bottom:16px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; MCP hinzuf&uuml;gen</div>
            <button class="copy-btn" data-copy='{ "mcp": { "playwright": { "type": "local", "command": ["npx", "@playwright/mcp@latest"], "enabled": true } } }'>&#128203; Copy</button>
            <div class="code-body"><pre style="margin:0"><span class="code-comment">// In opencode.json unter "mcp" erg&auml;nzen:</span>
<span class="code-key">"mcp"</span>: {
  <span class="code-key">"playwright"</span>: {
    <span class="code-key">"type"</span>: <span class="code-string">"local"</span>,
    <span class="code-key">"command"</span>: [<span class="code-string">"npx"</span>, <span class="code-string">"@playwright/mcp@latest"</span>],
    <span class="code-key">"enabled"</span>: <span class="code-value">true</span>
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Ausprobieren</h3>
          <div class="code-block" style="margin-bottom:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Prompt</div>
            <button class="copy-btn" data-copy="&Ouml;ffne https://example.com und mach einen Screenshot. Dann f&uuml;lle das Suchfeld aus und klicke auf Submit.">&#128203; Copy</button>
            <div class="code-body" style="padding:12px 16px"><pre style="margin:0"><span class="code-string">"&Ouml;ffne https://example.com und mach
einen Screenshot. Dann f&uuml;lle das
Suchfeld aus und klicke auf Submit."</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:12px">Was kann OpenCode damit?</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#127912; <strong>Screenshots</strong> &ndash; Webseiten visuell analysieren
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128270; <strong>Web Scraping</strong> &ndash; Daten von Seiten extrahieren
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#9989; <strong>E2E Tests</strong> &ndash; Automatische UI-Tests schreiben
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128196; <strong>Formulare</strong> &ndash; Seiten automatisch ausf&uuml;llen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">
              &#128187; <strong>Debugging</strong> &ndash; Console-Logs und Netzwerk-Requests lesen
            </div>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">29.000+ Stars</strong> auf GitHub &ndash; der beliebteste MCP Server &uuml;berhaupt. Funktioniert ohne Vision-Modell &uuml;ber den Accessibility Tree.
            </p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Aufgabe:</strong> Konfiguriere Playwright MCP in deinem Projekt und lass OpenCode eine Webseite deiner Wahl &ouml;ffnen und beschreiben. Bonus: Lass einen E2E Test schreiben.
            </p>
          </div>
          <p style="margin-top:8px;font-size:0.75rem">
              <a href="https://github.com/microsoft/playwright-mcp" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/microsoft/playwright-mcp</a>
              &nbsp;&middot;&nbsp;<a href="https://opencode.ai/docs/de/mcp-servers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/mcp-servers</a>
            </p>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Sub-Agents =====
  {
    id: 'deepdive-subagents',
    theme: 'slide--dark',
    label: 'Sub-Agents bauen',
    content: `
      <span class="slide-label">Deep Dive 2</span>
      <h2 class="slide-title">Baue deinen ersten Sub-Agent</h2>
      <p class="slide-subtitle">Wir haben &uuml;ber Sub-Agents gesprochen &ndash; jetzt bauen wir welche. Und: <strong>Das System verbessert sich selbst.</strong></p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Weg 1: OpenCode Agents</h3>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:10px">
            Du definierst Agents als Markdown-Dateien mit System Prompt, Model und Regeln.
          </p>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/agents/reviewer.md</div>
            <button class="copy-btn" data-copy="---\ndescription: Code Review Agent\nmodel: anthropic/claude-sonnet-4-6\n---\n\nDu bist ein Code Reviewer.\nPr&uuml;fe den Code auf:\n- Security Issues\n- Performance\n- Best Practices\n\nSei direkt und konstruktiv.">&#128203; Copy</button>
            <div class="code-body"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-key">description</span>: <span class="code-string">Code Review Agent</span>
<span class="code-key">model</span>: <span class="code-string">anthropic/claude-sonnet-4-6</span>
<span class="code-comment">---</span>

Du bist ein Code Reviewer.
Pr&uuml;fe den Code auf:
- Security Issues
- Performance
- Best Practices</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Weg 2: OpenAgentsControl</h3>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-bottom:6px">
            Ganzes Agent-Framework: Coder, Tester, Reviewer, ContextScout &ndash; mit Approval Gates.
          </p>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/agents</a>
            &nbsp;&middot;&nbsp;<a href="https://github.com/darrenhinde/OpenAgentsControl" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">OpenAgentsControl</a>
          </p>
        </div>
        <div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:12px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">&#128260; Das System verbessert sich selbst</h3>
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              Erinnert euch: Wir haben eine <strong>AGENTS.md</strong> geschrieben, dann das Spiel nochmal gebaut &ndash; und es war besser. Genau das gleiche Prinzip: Schreibe Agents, teste sie, verbessere ihre Prompts, schreibe Sub-Agents die sich gegenseitig kontrollieren. <strong>Ein sich selbst optimierendes System.</strong>
            </p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:12px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Aufgabe:</strong> Erstelle einen <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px">reviewer.md</code> Agent in deinem Projekt. Lass ihn deinen 2048-Code reviewen. Dann: Verbessere den Prompt basierend auf dem Ergebnis.
            </p>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong>&#128293; Extreme Sub-Agents?</strong> Schau dir an was m&ouml;glich ist &ndash; eine kuratierte Sammlung von komplexen Agent-Setups:
            </p>
            <p style="font-size:0.75rem;margin-top:4px">
              <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/VoltAgent/awesome-claude-code-subagents</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: OpenCode Web =====
  {
    id: 'deepdive-web',
    theme: 'slide--dark',
    label: 'OpenCode Web',
    content: `
      <span class="slide-label">Deep Dive 3</span>
      <h2 class="slide-title" style="font-size:1.5rem">OpenCode Web &ndash; dein lokales ChatGPT</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Statt ChatGPT &ndash; nutz OpenCode Web. L&auml;uft lokal, hat Zugriff auf dein Projekt.</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128172; <strong>Chat mit Kontext</strong> &ndash; Versteht deinen gesamten Code
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128269; <strong>Recherche</strong> &ndash; "Wie funktioniert unser Auth-System?"
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128218; <strong>Lernen</strong> &ndash; "Erkl&auml;r mir dieses Pattern"
            </div>
            <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128274; <strong>Lokal</strong> &ndash; Daten bleiben auf deinem Rechner
            </div>
          </div>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/de/web/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/web</a>
          </p>
        </div>
        <div>
          <div class="code-block" style="margin-bottom:10px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <button class="copy-btn" data-copy="opencode web">&#128203; Copy</button>
            <div class="code-body" style="padding:10px 14px"><pre style="margin:0"><span class="code-comment"># Web-UI starten</span>
opencode web</pre></div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Tipp:</strong> Perfekt f&uuml;r den Workshop &ndash; Fragen zum Stoff? Frag OpenCode Web.
            </p>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Aufgabe:</strong> Starte <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">opencode web</code> und frag: "Erkl&auml;re mir die Spiellogik meines 2048."
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Custom Commands =====
  {
    id: 'deepdive-commands',
    theme: 'slide--dark',
    label: 'Commands',
    content: `
      <span class="slide-label">Deep Dive 4</span>
      <h2 class="slide-title" style="font-size:1.5rem">Custom Commands &ndash; Code Review auf Knopfdruck</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Wiederkehrende Aufgaben einmal definieren &ndash; jederzeit ausf&uuml;hren</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <div class="code-block" style="margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/commands/review.md</div>
            <button class="copy-btn" data-copy="---\ndescription: Code Review durchf\u00fchren\n---\n\nF\u00fchre ein Code Review durch:\n\n1. Pr\u00fcfe alle ge\u00e4nderten Dateien (git diff)\n2. Achte auf Security Issues\n3. Pr\u00fcfe Performance und Best Practices\n4. Erstelle eine Zusammenfassung\n\nSei direkt, konstruktiv und konkret.">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.8rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-key">description</span>: <span class="code-string">Code Review</span>
<span class="code-comment">---</span>

F&uuml;hre ein Code Review durch:
1. Pr&uuml;fe ge&auml;nderte Dateien (git diff)
2. Security Issues, Performance, Best Practices
3. Erstelle Zusammenfassung</pre></div>
          </div>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Ausf&uuml;hren</div>
            <button class="copy-btn" data-copy="/review">&#128203; Copy</button>
            <div class="code-body" style="padding:8px 14px"><pre style="margin:0"><span class="code-value">/review</span></pre></div>
          </div>
        </div>
        <div>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/test</strong> &ndash; Tests f&uuml;r ge&auml;nderte Dateien schreiben
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/refactor</strong> &ndash; Nach Standards refactoren
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/docs</strong> &ndash; API dokumentieren
            </div>
            <div style="padding:7px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              <strong>/security</strong> &ndash; Sicherheitspr&uuml;fung
            </div>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Clou:</strong> Commands laufen auch in CI/CD &ndash; Code Review bei jedem PR.
            </p>
          </div>
          <div style="padding:10px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:8px">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark);line-height:1.4">
              <strong style="color:var(--color-accent)">&#127919; Aufgabe:</strong> Erstelle <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">.opencode/commands/review.md</code> und f&uuml;hre <code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px">/review</code> aus.
            </p>
          </div>
          <p style="font-size:0.75rem">
            <a href="https://opencode.ai/docs/de/commands/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/de/commands</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Remote OpenCode via Telegram =====
  {
    id: 'deepdive-remote',
    theme: 'slide--dark',
    label: 'Wanna see some unreal?',
    content: `
      <span class="slide-label">Deep Dive 6 &ndash; Bonus</span>
      <h2 class="slide-title" style="font-size:1.4rem">Wanna see some unreal? &#129327;</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Von der Idee zum fertigen npm-Paket &rarr; <strong>OpenCode per Handy bedienen</strong> &ndash; built with OpenCode.</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2);margin-bottom:12px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">&#128337; Was dabei entstand</h3>
            <div style="display:flex;flex-direction:column;gap:5px">
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; <strong style="color:var(--color-text-on-dark)">opencode-remote-telegram</strong> &ndash; eigenes npm-Paket</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Vibe Coding Mode &ndash; einfach tippen, kein Befehl n&ouml;tig</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Inline-Keyboards f&uuml;r Projekt- &amp; Modellauswahl</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; /new_project &rarr; GitHub URL &rarr; git clone &rarr; fertig</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; Token-Usage &amp; Kosten nach jeder Antwort</div>
              <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">&#9989; <strong style="color:var(--color-accent)">OpenCode per Smartphone bedienen</strong></div>
            </div>
          </div>
          <div class="code-block">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal &ndash; Setup (einmalig)</div>
            <button class="copy-btn" data-copy="npm install -g @weisser-dev/opencode-remote-telegram&#10;opencode-remote-telegram start">&#128203; Copy</button>
            <div class="code-body" style="font-size:0.75rem"><pre style="margin:0"><span class="code-comment"># Global installieren</span>
npm install -g @weisser-dev/opencode-remote-telegram

<span class="code-comment"># Starten &rarr; Setup-Wizard l&auml;uft automatisch beim ersten Mal</span>
opencode-remote-telegram start</pre></div>
          </div>
          <p style="margin-top:8px;font-size:0.72rem">
            <a href="https://github.com/weisser-dev/opencode-remote-telegram" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">github.com/weisser-dev/opencode-remote-telegram</a>
            &nbsp;&middot;&nbsp;
            <a href="https://blog.weisser.dev/projects/ai/2026/03/24/opencode-remote-telegram.html" target="_blank" rel="noopener" style="color:var(--color-text-on-dark-subdued);text-decoration:underline">Blog-Post &rarr;</a>
          </p>
        </div>
        <div>
          <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);margin-bottom:10px">
            <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:8px">&#128241; Telegram-Commands (Vibe Coding Flow)</h3>
            <div style="display:flex;flex-direction:column;gap:4px">
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/list_projects</code> &rarr; Projekt w&auml;hlen (Inline-Button)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/list_models</code> &rarr; Modell w&auml;hlen (Inline-Button)</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/vibe_coding</code> &rarr; Session starten</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark);margin-top:2px"><em style="color:var(--color-text-on-dark-subdued)">danach einfach tippen:</em> &ldquo;fix the auth bug&rdquo;</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px;border-top:1px solid rgba(255,255,255,0.08);padding-top:4px">
                &#129300; Let me have a look&hellip; &rarr; Antwort streamt &rarr; Stats
              </div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/new_project</code> &rarr; GitHub URL &rarr; git clone</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/show_stats</code> &rarr; Tokens, Kosten, Dauer</div>
              <div style="font-size:0.75rem;color:var(--color-text-on-dark)"><code style="color:var(--color-accent)">/stop_coding</code> &rarr; Session beenden</div>
            </div>
          </div>
          <div style="padding:10px 14px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-bottom:4px">
              <strong style="color:var(--color-text-on-dark)">Das ist der Punkt:</strong> Kein Framework von Grund auf. Bestehendes Konzept nehmen, KI sagt was zu &auml;ndern ist &mdash; fertiges npm-Paket.
            </p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              Inspiriert von <a href="https://github.com/RoundTable02/remote-opencode" target="_blank" rel="noopener" style="color:var(--color-accent)">remote-opencode</a> (Discord-Variante).
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: OpenCode Agents =====
  {
    id: 'deepdive-agents',
    theme: 'slide--dark',
    label: 'Agents',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">OpenCode Agents &ndash; spezialisierte Assistenten</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Primary Agents zum Wechseln (Tab) + Subagents die automatisch aufgerufen werden</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Built-in Agents</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:10px">
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);font-size:0.78rem;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Build</strong> (Primary) &ndash; Alle Tools. Standard f&uuml;r Entwicklung.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>Plan</strong> (Primary) &ndash; Read-Only. Analyse ohne &Auml;nderungen.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>General</strong> (Subagent) &ndash; Multi-Step Tasks parallel.</div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:var(--color-text-on-dark)"><strong>Explore</strong> (Subagent) &ndash; Schnelles Codebase-Durchsuchen.</div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Eigene Agents erstellen</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/agents/review.md</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-property">description</span>: Code Review ohne Schreibrechte
<span class="code-property">mode</span>: subagent
<span class="code-property">model</span>: anthropic/claude-sonnet-4-20250514
<span class="code-property">permission</span>:
  <span class="code-property">edit</span>: deny
  <span class="code-property">bash</span>:
    <span class="code-string">"git diff"</span>: allow
    <span class="code-string">"grep *"</span>: allow
<span class="code-comment">---</span>
Du bist Code-Reviewer. Fokus auf Sicherheit,
Performance und Wartbarkeit.</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">JSON Config</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"agent"</span>: {
    <span class="code-property">"docs"</span>: {
      <span class="code-property">"description"</span>: <span class="code-string">"Schreibt Doku"</span>,
      <span class="code-property">"mode"</span>: <span class="code-string">"subagent"</span>,
      <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-20250514"</span>,
      <span class="code-property">"permission"</span>: { <span class="code-property">"bash"</span>: <span class="code-string">"deny"</span> }
    }
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin-bottom:6px">Pro-Tipps</h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.75rem;color:rgba(255,255,255,0.7)">
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#9889; <strong>Tab</strong> wechselt zwischen Primary Agents</div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#64; <strong>@agent-name</strong> ruft Subagent manuell auf</div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#128274; Permissions pro Agent: <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">allow</code> / <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">ask</code> / <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">deny</code></div>
            <div style="padding:5px 8px;border-radius:4px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">&#128176; Haiku f&uuml;r einfache Tasks = <strong>90% Token-Ersparnis</strong></div>
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:rgba(255,255,255,0.5)">
            <a href="https://opencode.ai/docs/agents/" target="_blank" rel="noopener" style="color:var(--color-accent)">Docs: Agents</a> &bull; <a href="https://github.com/darrenhinde/OpenAgentsControl" target="_blank" rel="noopener" style="color:var(--color-accent)">OpenAgentsControl</a> &bull; <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent)">Claude Sub-Agents</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: OpenCode Skills =====
  {
    id: 'deepdive-skills-detail',
    theme: '',
    label: 'Skills',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">OpenCode Skills &ndash; wiederverwendbare Anweisungen</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">SKILL.md Dateien die der Agent on-demand laden kann &ndash; wie Plugins f&uuml;r dein Projekt</p>
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">So funktioniert&rsquo;s</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>.opencode/skills/git-release/SKILL.md</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-comment">---</span>
<span class="code-property">name</span>: git-release
<span class="code-property">description</span>: Erstellt konsistente Releases
<span class="code-comment">---</span>

<span class="code-comment">## Was ich tue</span>
- Release Notes aus PRs generieren
- Version Bump vorschlagen
- gh release create Befehl ausgeben

<span class="code-comment">## Wann mich nutzen</span>
Beim Vorbereiten eines Tagged Release.</pre></div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Speicherorte</h3>
          <div style="display:flex;flex-direction:column;gap:3px;font-size:0.72rem">
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Projekt:</strong> .opencode/skills/&lt;name&gt;/SKILL.md</div>
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Global:</strong> ~/.config/opencode/skills/&lt;name&gt;/SKILL.md</div>
            <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)"><strong>Kompatibel:</strong> .claude/skills/ oder .agents/skills/</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Skill-Ideen f&uuml;r dein Projekt</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>git-release</strong> &ndash; Changelogs + Releases erstellen</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>pr-review</strong> &ndash; Code-Review Checkliste</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>migration</strong> &ndash; DB-Migrationen nach Team-Standard</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>test-patterns</strong> &ndash; Testing-Konventionen des Projekts</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.75rem"><strong>deploy</strong> &ndash; Deployment-Schritte f&uuml;r verschiedene Envs</div>
          </div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Permissions steuern</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"permission"</span>: {
    <span class="code-property">"skill"</span>: {
      <span class="code-string">"*"</span>: <span class="code-string">"allow"</span>,
      <span class="code-string">"internal-*"</span>: <span class="code-string">"deny"</span>,
      <span class="code-string">"experimental-*"</span>: <span class="code-string">"ask"</span>
    }
  }
}</pre></div>
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:var(--color-text-subdued)">
            <a href="https://opencode.ai/docs/skills/" target="_blank" rel="noopener" style="color:var(--color-primary)">Docs: Agent Skills</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Modell-Empfehlungen =====
  {
    id: 'deepdive-models',
    theme: 'slide--dark',
    label: 'Modelle',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.3rem">Welches Modell f&uuml;r welchen Task?</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Token sparen durch Task-spezifische Modell-Zuweisung &ndash; nicht alles braucht Opus</p>
      <div style="margin-top:12px;overflow-x:auto">
        <table class="comparison" style="font-size:0.72rem;width:100%">
          <thead><tr><th>Task</th><th>Empfehlung</th><th>Warum</th><th>Kosten-Faktor</th></tr></thead>
          <tbody>
            <tr><td><strong>Komplexes Coding</strong></td><td style="color:var(--color-accent)">Claude Opus 4.6</td><td>Bestes Reasoning, lange Kontexte</td><td>$$$$</td></tr>
            <tr><td><strong>Standard Coding</strong></td><td style="color:var(--color-accent)">Claude Sonnet 4.6</td><td>Sehr gut, 60% g&uuml;nstiger als Opus</td><td>$$</td></tr>
            <tr><td><strong>Code Review</strong></td><td>Claude Sonnet 4.6</td><td>Read-Only, braucht kein Max-Reasoning</td><td>$$</td></tr>
            <tr><td><strong>Doku schreiben</strong></td><td>Claude Haiku 4.5</td><td>Schnell, g&uuml;nstig, Text-Qualit&auml;t reicht</td><td>$</td></tr>
            <tr><td><strong>Explore / Suche</strong></td><td>Haiku 4.5 / Kimi k2.5</td><td>Read-Only, braucht Speed nicht Qualit&auml;t</td><td>$</td></tr>
            <tr><td><strong>Titel / Summary</strong></td><td>Haiku / MiniMax</td><td>Triviale Tasks, fast gratis</td><td>&cent;</td></tr>
            <tr><td><strong>Brainstorming</strong></td><td>GPT-5 / Gemini 3.1</td><td>Kreativ, gro&szlig;es Kontextfenster</td><td>$$</td></tr>
            <tr><td><strong>Lokale Verprobung</strong></td><td>Ollama + Qwen 3.5</td><td>Gratis, lokal, kein Internet</td><td>Gratis</td></tr>
          </tbody>
        </table>
      </div>
      <div class="two-cols" style="margin-top:10px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.85rem;margin-bottom:4px">In der Praxis: opencode.json</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Modelle pro Agent</div>
            <div class="code-body" style="padding:6px 10px;font-size:0.6rem"><pre style="margin:0">{
  <span class="code-property">"agent"</span>: {
    <span class="code-property">"build"</span>:   { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-sonnet-4-6"</span> },
    <span class="code-property">"plan"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"explore"</span>: { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> },
    <span class="code-property">"docs"</span>:    { <span class="code-property">"model"</span>: <span class="code-string">"anthropic/claude-haiku-4-5"</span> }
  }
}</pre></div>
          </div>
        </div>
        <div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.75rem;color:rgba(255,255,255,0.7);line-height:1.4">
            <strong style="color:var(--color-accent)">Token-Spar-Tipp:</strong> Haiku f&uuml;r Explore + Plan + Doku = <strong>80-90% weniger Kosten</strong> bei gleichem Ergebnis. Opus/Sonnet nur f&uuml;r Build-Tasks wo Reasoning z&auml;hlt.
          </div>
          <div style="margin-top:6px;padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.65rem;color:rgba(255,255,255,0.5)">
            <a href="https://opencode.ai/docs/models/" target="_blank" rel="noopener" style="color:var(--color-accent)">Docs: Models</a> &bull; <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">opencode models</code> zeigt alle verf&uuml;gbaren Modelle
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Best Practices Repo =====
  {
    id: 'deepdive-bestpractices',
    theme: '',
    label: 'Best Practices',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Open Source</span>
      <h2 class="slide-title" style="font-size:1.3rem">Awesome OpenCode &ndash; 108 Agents, 15 Skills, 18 MCPs</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Die umfangreichste Sammlung f&uuml;r OpenCode &ndash; plus ein CLI das dein Projekt automatisch einrichtet</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:8px">Was steckt drin?</h3>
          <div style="display:flex;flex-direction:column;gap:4px;font-size:0.78rem">
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#129302; <strong>108 Agents</strong> in 10 Kategorien (Core, Sprachen, Infra, Security, AI...)</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#127919; <strong>15 Skills</strong> (git-release, ci-pipeline, dependency-audit...)</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128268; <strong>18 kuratierte MCP Server</strong> + Live-Suche im offiziellen MCP Registry</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128176; <strong>Smart Model Detection</strong> &ndash; erkennt 26+ Modelle, optimiert Kosten automatisch</div>
            <div style="padding:6px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">&#128218; <strong>Docs</strong> zu Agents, Skills, MCP, Models, Rules, Permissions</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.9rem;margin-bottom:6px">Ein Befehl &ndash; alles eingerichtet</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">npx</span> @weisser-dev/awesome-opencode

<span class="code-comment"># Analysiert dein Projekt (Sprache, Framework)</span>
<span class="code-comment"># Liest opencode.json: erkennt deine Modelle</span>
<span class="code-comment"># Fragt interaktiv:</span>
<span class="code-string">"Agents?"</span>  <span class="code-comment"># 108 zur Auswahl</span>
<span class="code-string">"Skills?"</span>  <span class="code-comment"># 15 zur Auswahl</span>
<span class="code-string">"MCPs?"</span>    <span class="code-comment"># 18 + Live Registry</span>
<span class="code-string">"Modelle optimieren?"</span> <span class="code-comment"># Auto-Mapping</span>

<span class="code-comment"># Erzeugt:</span>
<span class="code-comment"># .opencode/agents/*.md</span>
<span class="code-comment"># .opencode/skills/*/SKILL.md</span>
<span class="code-comment"># opencode.json (aktualisiert)</span>
<span class="code-comment"># AGENTS.md (generiert)</span></pre></div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);text-align:center">
            <a href="https://github.com/weisser-dev/awesome-opencode" target="_blank" rel="noopener" style="display:inline-block;padding:8px 20px;border-radius:8px;background:var(--color-primary);color:#fff;text-decoration:none;font-size:0.85rem;font-weight:600">&#128279; weisser-dev/awesome-opencode</a>
            <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:6px">MIT &bull; Contributions willkommen &bull; <code style="background:rgba(47,108,122,0.1);padding:1px 3px;border-radius:2px;font-size:0.65rem">npx @weisser-dev/awesome-opencode</code></p>
          </div>
        </div>
      </div>
    `,
  },
];

