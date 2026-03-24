export const aiCodingSlides = [
  // ===== SECTION DIVIDER - AI Assisted Coding =====
  {
    id: 'section-coding',
    theme: 'slide--primary slide--divider',
    label: 'AI Coding',
    content: `
      <div class="divider-number">&#128187;</div>
      <h2 class="slide-title">AI Assisted Coding</h2>
      <p class="slide-subtitle">Jetzt, wo wir die Basics verstehen &ndash; wie nutzen wir das zum Programmieren?</p>
    `,
  },

  // ===== Die Anf&auml;nge =====
  {
    id: 'coding-origins',
    theme: 'slide--dark',
    label: 'Anfänge',
    content: `
      <span class="slide-label">Evolution</span>
      <h2 class="slide-title">Die Anf&auml;nge</h2>
      <p class="slide-subtitle">Von Copy-Paste in ChatGPT bis zu autonomen Coding Agents</p>
      <div class="timeline" style="margin-top:20px">
        <div class="timeline-item">
          <div class="timeline-title">2023 &ndash; Copy-Paste &Auml;ra</div>
          <div class="timeline-text">Jeder kopiert Code in ChatGPT: "Passt das?" "Erweitere mir das um XYZ." Hin und her zwischen Browser und IDE. Funktioniert &ndash; aber umst&auml;ndlich.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2023/24 &ndash; IDE-Integration</div>
          <div class="timeline-text"><strong>GitHub Copilot</strong>, <strong>Tabnine</strong>, <strong>Codeium</strong> &ndash; Autocomplete direkt in der IDE. Kein Kopieren mehr. Vorschl&auml;ge w&auml;hrend man tippt. Tab zum Akzeptieren.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2024/25 &ndash; Chat in der IDE</div>
          <div class="timeline-text"><strong>Cursor</strong>, <strong>Continue</strong>, <strong>Windsurf</strong> &ndash; IDE-Forks mit eingebautem Chat. Kontext aus dem Projekt flie&szlig;t automatisch ein. Kein Erkl&auml;ren mehr was das Projekt ist.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2025 &ndash; MCP verbindet alles</div>
          <div class="timeline-text">Model Context Protocol als Standard. Die IDE spricht mit Confluence, Jira, Datenbanken &ndash; der Agent hat Zugriff auf alles was er braucht.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title" style="color:var(--color-accent)">2025/26 &ndash; Autonome Agents</div>
          <div class="timeline-text"><strong>Claude Code</strong>, <strong>OpenCode</strong>, <strong>Codex</strong> &ndash; Terminal-basierte Agents mit agents.md. Lesen, schreiben, testen, committen. Autonom. Im Hintergrund.</div>
        </div>
      </div>
    `,
  },

  // ===== Der Tool-Zoo =====
  {
    id: 'tool-zoo',
    theme: '',
    label: 'Tool-Zoo',
    content: `
      <span class="slide-label">AI Assisted Coding</span>
      <h2 class="slide-title">Der Tool-Zoo</h2>
      <p class="slide-subtitle">Wo ein Markt, da ein Wettbewerb &ndash; wie immer ist jeder der beste:</p>
      <div class="cards" style="grid-template-columns:repeat(4,1fr);gap:16px;margin-top:20px">
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/github-favicon.svg" alt="GitHub Copilot" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">GitHub Copilot</div>
          <div class="card-text" style="font-size:0.75rem">Microsoft &middot; IDE-Plugin<br>Autocomplete + Chat</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/anthropic-favicon.ico" alt="Claude Code" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Claude Code</div>
          <div class="card-text" style="font-size:0.75rem">Anthropic &middot; Terminal<br>Autonomer Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/cursor-favicon.ico" alt="Cursor" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Cursor</div>
          <div class="card-text" style="font-size:0.75rem">VS Code Fork<br>Chat + Agent + Composer</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/windsurf-favicon.ico" alt="Windsurf" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Windsurf</div>
          <div class="card-text" style="font-size:0.75rem">Codeium &middot; VS Code Fork<br>Cascade Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/continue-favicon.png" alt="Continue" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Continue</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; IDE-Plugin<br>Multi-Model</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/tabnine-favicon.ico" alt="Tabnine" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Tabnine</div>
          <div class="card-text" style="font-size:0.75rem">Enterprise &middot; On-Prem<br>Code Completion</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/opencode-favicon.ico" alt="OpenCode" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">OpenCode</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; Terminal<br>Multi-Provider Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/openai-logo.svg" alt="Codex" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Codex</div>
          <div class="card-text" style="font-size:0.75rem">OpenAI &middot; Cloud Agent<br>Sandboxed Execution</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/google-favicon.ico" alt="Gemini CLI" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Gemini CLI</div>
          <div class="card-text" style="font-size:0.75rem">Google &middot; Terminal<br>Open Source Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/gitlab-favicon.ico" alt="GitLab Duo" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">GitLab Duo</div>
          <div class="card-text" style="font-size:0.75rem">GitLab &middot; Native<br>Code Suggestions + Chat</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/kiro-favicon.ico" alt="Kiro" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Kiro</div>
          <div class="card-text" style="font-size:0.75rem">AWS &middot; Spec-Driven<br>Requirements &rarr; Code</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/roocode-icon.png" alt="Roo Code" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Roo Code</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; VS Code<br>Spec-Driven Alternative</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/zed-favicon.png" alt="Zed" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Zed</div>
          <div class="card-text" style="font-size:0.75rem">Rust-basiert &middot; Editor<br>Native AI Assistant</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/openclaw-favicon.svg" alt="OpenClaw" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">OpenClaw</div>
          <div class="card-text" style="font-size:0.75rem">Open Source &middot; Multi-Channel<br>Pers&ouml;nlicher Agent</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/augmentcode-favicon.ico" alt="Augment" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Augment</div>
          <div class="card-text" style="font-size:0.75rem">Enterprise &middot; IDE-Plugin<br>Codebase-aware AI</div>
        </div>
        <div class="card" style="padding:14px;text-align:center">
          <img src="/assets/bolt-favicon.svg" alt="Bolt" style="width:30px;height:30px;margin-bottom:6px;border-radius:8px">
          <div class="card-title" style="font-size:0.85rem">Bolt / v0</div>
          <div class="card-text" style="font-size:0.75rem">Stackblitz / Vercel<br>App per Prompt im Browser</div>
        </div>
      </div>
    `,
  },

  // ===== Tool-Empfehlung Enterprise =====
  {
    id: 'tool-enterprise',
    theme: 'slide--dark',
    label: 'Enterprise Tools',
    content: `
      <span class="slide-label">Tool-Empfehlung</span>
      <h2 class="slide-title" style="font-size:1.5rem">Open Source Tool-Stack f&uuml;r Enterprises</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Drei Tools die zusammen alles abdecken &ndash; Terminal, IDE und Chat</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">Die Vorteile</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128268; <strong>Provider-unabh&auml;ngig</strong> &ndash; OpenAI, Anthropic, AWS Bedrock, Azure, lokale Modelle &ndash; alles per Config
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128176; <strong>Keine Lizenzkosten</strong> &ndash; Open Source, keine Seats, keine Subscriptions
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128101; <strong>Hohe Community</strong> &ndash; Aktive Entwicklung, schnelle Updates, transparente Roadmap
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128640; <strong>CI/CD-f&auml;hig</strong> &ndash; Commands und Agents in Pipelines wiederverwendbar
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#127959; <strong>Enterprise &amp; On-Prem</strong> &ndash; Configs f&uuml;r SSO, Proxy, Private Endpoints koppelbar
            </div>
            <div style="padding:9px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.8rem;color:var(--color-text-on-dark)">
              &#128274; <strong>Kein Vendor Lock-in</strong> &ndash; Wechsel des LLM-Providers jederzeit m&ouml;glich
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">Die Tools</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#128172; Open WebUI</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">Self-hosted Chat-Interface. ChatGPT-Alternative f&uuml;r Teams &ndash; mit jedem LLM, RAG, Tools und MCP.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://openwebui.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">openwebui.com</a> &middot; <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#129302; OpenCode</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">Terminal-Agent. Agentic Development, Sub-Agents, MCP, Commands, Skills. F&uuml;r Power-User und CI/CD.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://opencode.ai" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai</a> &middot; <a href="https://github.com/anomalyco/opencode" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:12px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);margin-bottom:8px;transition:background 0.2s,border-color 0.2s" onmouseover="this.style.background='rgba(255,237,0,0.08)';this.style.borderColor='rgba(255,237,0,0.25)'" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(255,255,255,0.1)'">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark);font-weight:700;margin-bottom:3px">&#128187; Continue</p>
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">IDE-Plugin (VS Code, JetBrains). Autocomplete, Chat, Edit, MCP &ndash; mit jedem Provider. Niedriger Einstieg.</p>
            <p style="font-size:0.7rem;margin-top:4px"><a href="https://continue.dev" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">continue.dev</a> &middot; <a href="https://github.com/continuedev/continue" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">GitHub</a></p>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Fazit:</strong> Terminal + IDE + Chat &ndash; alles abgedeckt. Alle drei Open Source, provider-unabh&auml;ngig, MCP-f&auml;hig, self-hostable.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Vibe Coding & die Tools =====
  {
    id: 'vibe-coding',
    theme: '',
    label: 'Vibe Coding',
    content: `
      <span class="slide-label">AI Assisted Coding</span>
      <h2 class="slide-title">Vibe Coding</h2>
      <p class="slide-subtitle">Man beschreibt was man will, die KI baut es. Man versteht den Code nicht unbedingt &ndash; aber es funktioniert.</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.85rem;line-height:1.6">
              &#127925; <strong>Vibe Coding</strong> &ndash; Gepr&auml;gt von Andrej Karpathy (Feb. 2025). Collins Dictionary Word of the Year 2025. Beschreibt das Gef&uuml;hl: Man gibt die Richtung vor, die KI coded, man "f&uuml;hlt" ob es passt.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Zwei Ans&auml;tze</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem;line-height:1.5"><strong style="color:var(--color-primary)">Agent-Driven</strong> (agents.md)<br><span style="color:var(--color-text-subdued)">Agent bekommt Verhaltensregeln und l&ouml;st Aufgaben autonom. Flexibel, aber weniger vorhersagbar.</span></p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.85rem;line-height:1.5"><strong style="color:var(--color-primary)">Spec-Driven</strong> (Kiro, Roo Code)<br><span style="color:var(--color-text-subdued)">Erst Spezifikation schreiben, dann implementieren. Strukturierter, nachvollziehbarer, testbarer.</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Die Tools</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <a href="https://kiro.dev" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Kiro</strong> (AWS) &ndash; Spec-Driven Development. Erst Requirements, dann Design, dann Code. <span style="font-size:0.75rem;color:var(--color-primary)">kiro.dev &rarr;</span></p>
            </a>
            <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Roo Code</strong> (Open Source) &ndash; Spec-Driven Alternative. VS Code Extension. Community-driven. <span style="font-size:0.75rem;color:var(--color-primary)">GitHub &rarr;</span></p>
            </a>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem;line-height:1.5"><strong>Claude Code / OpenCode</strong> &ndash; Agent-Driven. agents.md + autonome Execution.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.85rem;line-height:1.5"><strong>Cursor / Copilot</strong> &ndash; Hybrid. Chat + Autocomplete + teilweise Agent-F&auml;higkeiten.</p>
            </div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive: Spec-Driven Development =====
  {
    id: 'spec-driven',
    theme: 'slide--dark',
    label: 'Spec-Driven',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Spec-Driven Development</h2>
      <p class="slide-subtitle">Erst spezifizieren, dann generieren &ndash; und egal ob Spec oder Agent: beides ist "Vibe Coding"</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">So funktioniert es (Kiro)</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Spec-Driven Flow
            </div>
            <div class="code-body"><pre><span class="code-number">1.</span> <span class="code-keyword">Requirements</span>
   <span class="code-string">User Story + Akzeptanzkriterien</span>
   <span class="code-comment">// KI hilft beim Schreiben</span>

<span class="code-number">2.</span> <span class="code-keyword">Design</span>
   <span class="code-string">Technisches Design-Dokument</span>
   <span class="code-comment">// Architektur, APIs, Datenmodell</span>

<span class="code-number">3.</span> <span class="code-keyword">Implementation</span>
   <span class="code-string">Code wird gegen Spec generiert</span>
   <span class="code-comment">// Automatisch, nachvollziehbar</span>

<span class="code-number">4.</span> <span class="code-keyword">Validation</span>
   <span class="code-string">Tests werden aus Spec abgeleitet</span>
   <span class="code-comment">// Spec = Single Source of Truth</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Die Vorteile</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Nachvollziehbar</strong> &ndash; Jede Codezeile ist r&uuml;ckf&uuml;hrbar auf eine Requirement</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Testbar</strong> &ndash; Tests werden direkt aus der Spec generiert, nicht nachtr&auml;glich</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Reviewbar</strong> &ndash; Man reviewt die Spec, nicht 500 Zeilen generierten Code</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Reproduzierbar</strong> &ndash; Gleiche Spec = gleicher Code. Weniger "Blackbox"-Gef&uuml;hl.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#10003;</span><span><strong>Onboarding</strong> &ndash; Neue Entwickler lesen die Spec, nicht den Code</span></li>
          </ul>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Agent vs. Spec &ndash; kein Entweder-Oder:</strong> Spec-Driven f&uuml;r neue Features mit klaren Anforderungen. Agent-Driven f&uuml;r Refactoring, Bugfixes, explorative Aufgaben. Beides ist "Vibe Coding" &ndash; nur mit unterschiedlichem Grad an Struktur.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Spec-Driven Beispiel =====
  {
    id: 'spec-example',
    theme: '',
    label: 'Spec Beispiel',
    content: `
      <span class="slide-label">Beispiel</span>
      <h2 class="slide-title">Spec-Driven in Aktion</h2>
      <p class="slide-subtitle">Prompt: "Baue einen User-Endpoint mit Pagination" &ndash; Kiro generiert 3 Dateien:</p>
      <div class="spec-stage" id="spec-stage" data-step="0" style="margin-top:14px;position:relative;overflow:hidden">
        <div class="spec-columns" style="display:flex;gap:16px;transition:transform 0.5s cubic-bezier(0.4,0,0.2,1);will-change:transform">
          <div class="code-block spec-col" style="margin-top:0;flex:0 0 calc(33.33% - 11px);min-height:320px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>requirements.md</div>
            <div class="code-body" style="font-size:0.75rem;line-height:1.5;height:100%"><pre><span class="code-comment">## User Story</span>
<span class="code-string">Als API-Nutzer m&ouml;chte ich
User-Daten paginiert abrufen.</span>

<span class="code-comment">## Akzeptanzkriterien</span>
<span class="code-keyword">WHEN</span> GET /users?page=1&size=20
<span class="code-keyword">THEN</span> max 20 User zur&uuml;ckgeben
<span class="code-keyword">AND</span> totalPages im Response
<span class="code-keyword">AND</span> totalElements im Response

<span class="code-keyword">WHEN</span> page > totalPages
<span class="code-keyword">THEN</span> leere Liste, kein Fehler

<span class="code-keyword">WHEN</span> size > 100
<span class="code-keyword">THEN</span> auf 100 begrenzen</pre></div>
          </div>
          <div class="code-block spec-col spec-col-hidden" style="margin-top:0;flex:0 0 calc(33.33% - 11px);min-height:320px;transition:opacity 0.4s ease 0.15s">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>design.md</div>
            <div class="code-body" style="font-size:0.75rem;line-height:1.5;height:100%"><pre><span class="code-comment">## Architektur</span>
<span class="code-string">Spring Boot + JPA</span>
<span class="code-string">3-Layer: Controller, Service, Repo</span>

<span class="code-comment">## API Design</span>
<span class="code-keyword">GET</span> /api/v1/users
  <span class="code-property">?page</span>=0  <span class="code-comment">(default)</span>
  <span class="code-property">&size</span>=20 <span class="code-comment">(default, max 100)</span>

<span class="code-comment">## Response</span>
{
  <span class="code-property">"content"</span>: [User],
  <span class="code-property">"page"</span>: <span class="code-number">0</span>,
  <span class="code-property">"size"</span>: <span class="code-number">20</span>,
  <span class="code-property">"totalPages"</span>: <span class="code-number">5</span>,
  <span class="code-property">"totalElements"</span>: <span class="code-number">98</span>
}</pre></div>
          </div>
          <div class="code-block spec-col spec-col-hidden" style="margin-top:0;flex:0 0 calc(33.33% - 11px);min-height:320px;transition:opacity 0.4s ease 0.3s">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>tasks.md</div>
            <div class="code-body" style="font-size:0.75rem;line-height:1.5;height:100%"><pre><span class="code-comment">## Implementation Tasks</span>

<span class="code-keyword">&#9744; Task 1:</span> UserEntity
  <span class="code-string">JPA Entity + Flyway Migration</span>
  <span class="code-comment">Abh&auml;ngigkeit: keine</span>

<span class="code-keyword">&#9744; Task 2:</span> UserRepository
  <span class="code-string">PagingAndSortingRepository</span>
  <span class="code-comment">Abh&auml;ngigkeit: Task 1</span>

<span class="code-keyword">&#9744; Task 3:</span> UserService
  <span class="code-string">Pagination + size-Limit</span>
  <span class="code-comment">Abh&auml;ngigkeit: Task 2</span>

<span class="code-keyword">&#9744; Task 4:</span> UserController
  <span class="code-string">GET /api/v1/users</span>
  <span class="code-comment">Abh&auml;ngigkeit: Task 3</span>

<span class="code-keyword">&#9744; Task 5:</span> Tests
  <span class="code-string">Unit + Integration Tests</span>
  <span class="code-comment">Abh&auml;ngigkeit: Task 4</span></pre></div>
          </div>
        </div>
        <div class="spec-advantage spec-col-hidden" style="margin-top:12px;padding:12px 16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);transition:opacity 0.4s ease 0.45s,transform 0.4s ease 0.45s">
          <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
            <strong style="color:var(--color-primary)">Der Vorteil:</strong> Bevor eine Zeile Code geschrieben wird, sind Requirements, Design und Tasks dokumentiert. Jeder Task ist r&uuml;ckf&uuml;hrbar auf eine Requirement. Tests werden aus der Spec abgeleitet &ndash; nicht nachtr&auml;glich erfunden.
          </p>
        </div>
      </div>
    `,
  },

  // ===== Agentic AI Development =====
  {
    id: 'agentic-dev',
    theme: 'slide--dark',
    label: 'Agentic Dev',
    content: `
      <span class="slide-label">Im Vergleich</span>
      <h2 class="slide-title">Agentic AI Development</h2>
      <p class="slide-subtitle">Gleiche Aufgabe, anderer Ansatz &ndash; der Agent plant, zerlegt und arbeitet selbstst&auml;ndig</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Prompt: "Baue User-Endpoint mit Pagination"</h3>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:8px">
            Kein Requirements-Dokument, kein Design upfront. Der Agent <strong>plant selbst</strong>:
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Agent Thinking &amp; Planning
            </div>
            <div class="code-body" style="font-size:0.75rem;line-height:1.5"><pre><span class="code-comment">// Agent analysiert den Prompt:</span>
<span class="code-string">"User-Endpoint mit Pagination"</span>

<span class="code-comment">// Erstellt sich eine Todo-Liste:</span>
<span class="code-keyword">&#9744;</span> Projektstruktur verstehen
<span class="code-keyword">&#9744;</span> Bestehende Entities pr&uuml;fen
<span class="code-keyword">&#9744;</span> UserEntity erstellen
<span class="code-keyword">&#9744;</span> Repository mit Pageable
<span class="code-keyword">&#9744;</span> Service-Layer
<span class="code-keyword">&#9744;</span> Controller + Pagination
<span class="code-keyword">&#9744;</span> Tests schreiben
<span class="code-keyword">&#9744;</span> Tests ausf&uuml;hren &amp; fixen

<span class="code-comment">// Startet mit Task 1:</span>
<span class="code-function">&rarr; Tool: glob("**/Entity*.java")</span>
<span class="code-function">&rarr; Tool: read("pom.xml")</span>
<span class="code-comment">// "Spring Boot 3.2, JPA, H2..."</span>
<span class="code-keyword">&#9745;</span> Projektstruktur verstanden</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">So arbeitet der Agent</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>1. Explore</strong> &ndash; Liest Projektstruktur, pom.xml, bestehende Entities. Versteht den Stack.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>2. Plan</strong> &ndash; Zerlegt die Aufgabe in Sub-Tasks. Erkennt Abh&auml;ngigkeiten. Erstellt Todo-Liste.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>3. Implement</strong> &ndash; Schreibt Code Task f&uuml;r Task. Nutzt Konventionen aus dem Projekt.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>4. Test &amp; Fix</strong> &ndash; F&uuml;hrt Tests aus. Fehler? Liest Stacktrace, fixt, wiederholt.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>5. Commit</strong> &ndash; Staged, schreibt Commit-Message, &ouml;ffnet ggf. PR.
            </div>
          </div>
          <div style="padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Der Unterschied zu Spec-Driven:</strong> Kein Dokument upfront. Der Agent entscheidet selbst was er braucht. Schneller f&uuml;r bekannte Patterns &ndash; aber weniger nachvollziehbar.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Fazit: Agent vs. Spec =====
  {
    id: 'agent-vs-spec',
    theme: '',
    label: 'Fazit',
    content: `
      <span class="slide-label">Fazit</span>
      <h2 class="slide-title">Agent-Driven vs. Spec-Driven</h2>
      <p class="slide-subtitle">Beides ist "Vibe Coding" &ndash; nur mit unterschiedlichem Grad an Struktur. Es kommt auf euren Stil an.</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:8px">&#127925; Agent-Driven (Vibe Coding)</h3>
            <ul class="feature-list" style="margin-top:0">
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Schnell loslegen, iterativ entwickeln</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Viele R&uuml;ckfragen &amp; Korrekturen m&ouml;glich</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Flexibel &ndash; Richtung &auml;ndert sich unterwegs</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Ideal f&uuml;r Refactoring, Bugfixes, Prototypen</span></li>
            </ul>
            <p style="margin-top:12px;font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong>Gut f&uuml;r:</strong> Startups, Prototypen, explorative Entwicklung, sequentielles Arbeiten mit viel Dialog zwischen Entwickler und Agent.
            </p>
          </div>
        </div>
        <div>
          <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:8px">&#128203; Spec-Driven</h3>
            <ul class="feature-list" style="margin-top:0">
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Planung &amp; Architektur im Voraus</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Nachvollziehbar, testbar, reviewbar</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Weniger Nacharbeit, weniger Halluzinationen</span></li>
              <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span>Ideal f&uuml;r neue Features, Teams, Compliance</span></li>
            </ul>
            <p style="margin-top:12px;font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong>Gut f&uuml;r:</strong> Gr&ouml;&szlig;ere Features, Team-Arbeit, regulierte Umgebungen. Investiert upfront in Planung, dann l&auml;sst man den Agent laufen.
            </p>
          </div>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">Es gibt kein "besser".</strong> Beides hat seine St&auml;rken. Viele Teams mischen: Spec-Driven f&uuml;r neue Features, Agent-Driven f&uuml;r den Rest. Findet euren Stil &ndash; und nutzt das richtige Werkzeug f&uuml;r die richtige Aufgabe.
        </p>
      </div>
    `,
  },

  // ===== Mindset =====
  {
    id: 'coding-mindset',
    theme: '',
    label: 'Mindset',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Das neue Mindset</span>
      <h2 class="slide-title" style="color:var(--color-text)">Jensen Huang, Nvidia CEO</h2>
      <p class="slide-subtitle" style="font-size:0.85rem">
        <a href="https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Business Insider, M&auml;rz 2026</a>
        &middot;
        <a href="https://www.youtube.com/shorts/3RnzkJjgvfw" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">YouTube Short &#9654;</a>
      </p>
      <div style="display:grid;grid-template-columns:1fr auto;gap:20px;margin-top:14px;align-items:start">
        <div style="display:flex;flex-direction:column;gap:14px">
          <blockquote style="background:var(--color-bg-subdued);border:1px solid var(--color-border);border-left:4px solid var(--color-primary);border-radius:12px;padding:22px 28px;font-size:1.05rem;line-height:1.8;color:var(--color-text);font-style:italic;margin:0">
            <div><span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:10px;margin-right:4px">&ldquo;</span>If that $500,000 engineer did not consume at least $250,000 worth of tokens, I am going to be deeply alarmed.<span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:14px;margin-left:4px">&rdquo;</span></div>
            <p style="margin-top:14px;font-size:0.83rem;font-style:normal;color:var(--color-text-subdued)">&mdash; Jensen Huang (Nvidia CEO) &middot; <a href="https://www.businessinsider.com/jensen-huang-500k-engineers-250k-ai-tokens-nvidia-compute-2026-3" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Business Insider</a></p>
          </blockquote>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.8rem;font-weight:700;color:var(--color-primary);margin-bottom:5px">&#129302; KI als Werkzeug &ndash; nicht als Komfort</p>
              <p style="font-size:0.8rem;line-height:1.55;color:var(--color-text-subdued)">Huang vergleicht das Nichtnutzen von KI mit einem Chip-Designer, der lieber Papier und Bleistift nimmt. Token-Verbrauch ist f&uuml;r ihn ein direktes Ma&szlig; f&uuml;r den Einsatz.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.8rem;font-weight:700;color:var(--color-primary);margin-bottom:5px">&#128176; Tokens als Recruiting-Argument</p>
              <p style="font-size:0.8rem;line-height:1.55;color:var(--color-text-subdued)">"Wie viele Tokens kommen mit meinem Job?" &ndash; bereits Standard in Silicon Valley. Ein 500k-Engineer soll ~250k in KI-Compute investieren, um 10x produktiver zu sein.</p>
            </div>
          </div>
        </div>
        <div style="width:200px;flex-shrink:0">
          <div style="border-radius:12px;overflow:hidden;border:1px solid var(--color-border);background:#000;aspect-ratio:9/16">
            <iframe src="https://www.youtube.com/embed/3RnzkJjgvfw" title="Jensen Huang: $500k Engineers should use $250k in tokens" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy" style="width:100%;height:100%;display:block"></iframe>
          </div>
          <p style="font-size:0.7rem;color:var(--color-text-subdued);text-align:center;margin-top:6px">All-In Podcast, M&auml;rz 2026</p>
        </div>
      </div>
    `,
  },

  // ===== Quiz: AI Coding =====
  {
    id: 'quiz-coding',
    theme: '',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Wissens-Check: AI Assisted Coding</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. Was ist der Unterschied zwischen Spec-Driven und Agent-Driven Development?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Spec-Driven nutzt kein LLM</button>
            <button class="quiz-option" data-correct="true">Spec-Driven schreibt erst Requirements/Design, Agent-Driven l&auml;sst den Agent selbst planen</button>
            <button class="quiz-option" data-correct="false">Agent-Driven ist immer besser</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. Was bedeutet "Vibe Coding"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="true">Man beschreibt was man will, die KI baut es &ndash; man "f&uuml;hlt" ob es passt</button>
            <button class="quiz-option" data-correct="false">Coding w&auml;hrend man Musik h&ouml;rt</button>
            <button class="quiz-option" data-correct="false">Ein Framework von Google</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Warum ist "Erst das Handwerk, dann das Werkzeug" wichtig?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Weil KI nicht funktioniert</button>
            <button class="quiz-option" data-correct="false">Weil man ohne Handwerk keine KI nutzen darf</button>
            <button class="quiz-option" data-correct="true">Weil KI nur beschleunigt &ndash; schlechte Architektur + KI = schneller schlechte Architektur</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
