export const agenticSlides = [
  // ===== SECTION DIVIDER =====
  {
    id: 'section-agentic',
    theme: 'slide--primary slide--divider',
    label: 'Agentic AI',
    content: `
      <div class="divider-number">&#127919;</div>
      <h2 class="slide-title">Agentic AI</h2>
      <p class="slide-subtitle">Autonome KI-Systeme &ndash; Architektur, Layer-Modelle &amp; Enterprise-Tauglichkeit</p>
    `,
  },

  // ===== Was ist Agentic AI? =====
  {
    id: 'what-is-agentic',
    theme: 'slide--dark',
    label: 'Was ist Agentic AI?',
    content: `
      <span class="slide-label">Definition</span>
      <h2 class="slide-title">Was ist Agentic AI?</h2>
      <p class="slide-subtitle">KI-Systeme die <strong>eigenst&auml;ndig planen, Werkzeuge nutzen und Ziele verfolgen</strong> &ndash; ohne f&uuml;r jeden Schritt gefragt zu werden</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Klassische KI vs. Agentic AI</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);margin-bottom:4px"><strong>Klassisches LLM</strong> (ChatGPT, Claude Chat)</p>
              <p style="font-size:0.82rem;color:rgba(255,255,255,0.8);line-height:1.5">Frage &rarr; Antwort. Ein Schritt. Kein Zugriff auf Werkzeuge. Vergisst alles nach dem Chat.</p>
            </div>
            <div style="padding:12px;border-radius:8px;background:rgba(255,237,0,0.06);border:2px solid rgba(255,237,0,0.25)">
              <p style="font-size:0.85rem;color:var(--color-accent);margin-bottom:4px"><strong>Agentic AI</strong></p>
              <p style="font-size:0.82rem;color:rgba(255,255,255,0.8);line-height:1.5">Ziel definieren &rarr; Agent <strong>plant Schritte</strong>, <strong>nutzt Tools</strong> (Shell, APIs, Datenbanken), <strong>pr&uuml;ft Ergebnisse</strong>, iteriert &ndash; bis das Ziel erreicht ist.</p>
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:12px 0 8px">Single-Agent vs. Multi-Agent</h3>
          <div style="display:flex;gap:8px">
            <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong style="color:var(--color-accent)">Single-Agent</strong><br>
              Ein Agent mit vielen Tools. Einfacher, aber begrenzt. <span style="color:rgba(255,255,255,0.5)">z.B. OpenCode, Claude Code</span>
            </div>
            <div style="flex:1;padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong style="color:var(--color-accent)">Multi-Agent</strong><br>
              Spezialisierte Agents arbeiten zusammen. Modular. <span style="color:rgba(255,255,255,0.5)">z.B. CrewAI, OpenClaw, Sub-Agents</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Die 2 Gesichter von AI Agents</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
            <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.9)"><strong style="color:var(--color-accent)">&#9881; Backend-Agents</strong> (Headless)</p>
              <p style="font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:4px;line-height:1.4">Laufen unsichtbar im Hintergrund. CI/CD-Pipelines, automatische Code-Reviews, Ticket-Klassifizierung, Daten-Pipelines.</p>
            </div>
            <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25)">
              <p style="font-size:0.85rem;color:rgba(255,255,255,0.9)"><strong style="color:var(--color-accent)">&#128172; Frontend-Agents</strong> (Interaktiv)</p>
              <p style="font-size:0.78rem;color:rgba(255,255,255,0.6);margin-top:4px;line-height:1.4">Direkte Interaktion mit Nutzern. Chatbots, Voice-Assistenten, IDE-Coding-Agents, Wissens-Portale.</p>
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.75rem;color:rgba(255,255,255,0.6);line-height:1.4">
              <strong style="color:var(--color-accent)">Kernunterschied zu klassischer Automatisierung:</strong> Agents treffen <strong>Entscheidungen zur Laufzeit</strong>. Sie folgen keinem festen Skript, sondern passen sich dynamisch an &ndash; &auml;hnlich wie ein Mitarbeiter, der eine Aufgabe eigenst&auml;ndig l&ouml;st.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Layer-Modelle im Vergleich =====
  {
    id: 'layer-models',
    theme: '',
    label: 'Layer-Modelle',
    content: `
      <span class="slide-label">Architektur</span>
      <h2 class="slide-title">Agentische Architekturen &ndash; verschiedene Layer-Modelle</h2>
      <p class="slide-subtitle">Es gibt kein einheitliches Modell &ndash; aber alle beschreiben dieselben Bausteine</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">3 g&auml;ngige Referenzmodelle</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Boomi</strong> &ndash; 6 Schichten</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">Application &bull; Orchestration &bull; Agent &bull; <strong>Context</strong> &bull; <strong>Data</strong> &bull; Model</p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Betont eigene Kontext- und Datenschicht &ndash; wichtig f&uuml;r RAG und Session-Management.</p>
            </div>
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Vendia LAMP</strong> &ndash; 4 Schichten</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">LLM &bull; Agent/App-Logik &bull; MCP-Gateway &bull; <strong>Persistenz</strong></p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Kompakt. Frontend ist Teil der App-Logik. Kein separater Output-Layer.</p>
            </div>
            <div style="padding:10px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.82rem;line-height:1.5"><strong style="color:var(--color-primary)">Mezmo / AURA</strong> &ndash; Praktisch</p>
              <p style="font-size:0.75rem;color:var(--color-text-subdued);margin-top:2px">Chat-Frontend &rarr; Agent &rarr; LLM-Provider (austauschbar) &rarr; MCP-Tools</p>
              <p style="font-size:0.7rem;color:var(--color-text-subdued);margin-top:4px;font-style:italic">Zeigt: Provider und Tools sind unabh&auml;ngig austauschbar zur Laufzeit.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin-bottom:8px">Unser Workshop-Modell</h3>
          <div style="padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);margin-bottom:10px">
            <div style="display:flex;flex-direction:column;gap:3px;font-size:0.78rem">
              <div style="padding:4px 8px;border-radius:4px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);color:var(--color-primary);font-weight:600">1. Interface <span style="font-weight:400;color:var(--color-text-subdued)">(IDE, Chat, Voice, API)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr;</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">2. Agent Framework <span style="color:var(--color-text-subdued)">(OpenCode, LangChain...)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; &uarr; Loop</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">3. LLM Provider <span style="color:var(--color-text-subdued)">(Claude, GPT, Ollama...)</span></div>
              <div style="display:flex;gap:4px;align-items:center"><div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued);flex:1">&darr; &uarr; Tool Calls</div><div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued);flex:1">&harr; Context</div></div>
              <div style="display:flex;gap:4px">
                <div style="flex:1;padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">4. MCP / Tools</div>
                <div style="flex:1;padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-style:italic">Context / Memory</div>
              </div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; API Calls</div>
              <div style="padding:4px 8px;border-radius:4px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">5. Backends / Services <span style="color:var(--color-text-subdued)">(Jira API, DB, S3...)</span></div>
              <div style="text-align:center;font-size:0.6rem;color:var(--color-text-subdued)">&darr; / &larr;</div>
              <div style="padding:4px 8px;border-radius:4px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2);color:var(--color-positive)">Output &rarr; User / System</div>
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.72rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Fazit:</strong> Alle Modelle beschreiben dieselben Bausteine. Unser Modell fasst Kontext/Daten zusammen und macht Backends + Output explizit sichtbar. F&uuml;r Enterprise m&uuml;ssen zus&auml;tzlich <strong>Sicherheit, Compliance und Datenpersistenz</strong> ber&uuml;cksichtigt werden.
          </div>
        </div>
      </div>
    `,
  },

// ===== Agentic Architecture Deep Dive =====
  {
    id: 'agentic-architecture-deep',
    theme: 'slide--dark',
    label: 'Architektur',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Deep Dive</span>
      <h2 class="slide-title" style="font-size:1.25rem">Agentic Architecture &ndash; alle Schichten</h2>
      <p class="slide-subtitle" style="font-size:0.78rem;margin-bottom:8px">Dieselben Layer &ndash; aber je nach Use Case mit User oder vollautomatisch</p>
      <div class="two-cols" style="gap:10px">
        <div style="padding:8px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid rgba(47,108,122,0.25)">
          <h3 style="color:var(--color-accent);font-size:0.8rem;margin-bottom:6px;text-align:center">&#128100; Mit User Input</h3>
          <div style="display:flex;flex-direction:column;gap:3px;font-size:0.58rem">
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);color:var(--color-accent);font-weight:700;text-align:center">Interface</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">IDE</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Chat</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">CLI</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Chatbot</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Voice</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Framework</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);color:var(--color-accent)">OpenCode</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">LangChain</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">CrewAI</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr; Loop</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">LLM</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);color:var(--color-accent)">Claude</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">GPT</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Gemini</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Ollama</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Kontext</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">agents.md</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Vektor-DB</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Session</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr; Tool Calls</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">MCP</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Shell</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Filesystem</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Git</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Confluence</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Jira</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Search</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr; API</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Backend</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Confluence API</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Jira API</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">CRM</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Pinecone</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr; / &larr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.25);color:var(--color-positive);font-weight:700;text-align:center">Output</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Code / PR</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Chat-Antwort</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Doku</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Tickets</span></span>
            </div>
          </div>
          <div style="margin-top:4px;font-size:0.55rem;color:rgba(255,255,255,0.35);text-align:center">Coding, Chatbot, Voice, Doku, Wissens-Agent</div>
        </div>
        <div style="padding:8px;border-radius:10px;background:rgba(255,168,0,0.06);border:2px solid rgba(255,168,0,0.25)">
          <h3 style="color:var(--color-warning);font-size:0.8rem;margin-bottom:6px;text-align:center">&#9881; 100% Workflow-Automatisierung</h3>
          <div style="display:flex;flex-direction:column;gap:3px;font-size:0.58rem">
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(255,168,0,0.1);border:1px solid rgba(255,168,0,0.25);color:var(--color-warning);font-weight:700;text-align:center">Trigger</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Cron</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Webhook</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Event-Stream</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Log-Stream</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Framework</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">LangChain</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">CrewAI</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Custom</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr; Loop</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">LLM</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Claude</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">GPT</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Ollama</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Kontext</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Baselines</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Dep-Listen</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Infra-Config</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;&uarr; Tool Calls</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">MCP</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Git MCP</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Shell</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Monitoring</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">DB MCP</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">K8s API</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr; API</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);color:var(--color-accent);font-weight:700;text-align:center">Backend</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">CVE DB</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">GitHub API</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Datadog</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">PostgreSQL</span></span>
            </div>
            <div style="text-align:center;color:rgba(255,255,255,0.2)">&darr;</div>
            <div style="display:flex;gap:4px;align-items:center">
              <span style="min-width:52px;padding:3px 4px;border-radius:4px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.25);color:var(--color-positive);font-weight:700;text-align:center">Output</span>
              <span style="display:flex;flex-wrap:wrap;gap:2px"><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">PRs + Patches</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Alerts / Slack</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Reports</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Scaling</span><span style="padding:1px 5px;border-radius:3px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--color-text-on-dark)">Mails</span></span>
            </div>
          </div>
          <div style="margin-top:4px;font-size:0.55rem;color:rgba(255,255,255,0.35);text-align:center">CVE-Patching, Anomalie-Erkennung, System-Pr&uuml;fung, Data Pipeline</div>
        </div>
      </div>
      <div style="margin-top:4px;padding:5px 10px;border-radius:6px;background:rgba(255,237,0,0.04);border:1px solid rgba(255,237,0,0.1)">
        <p style="font-size:0.6rem;color:rgba(255,255,255,0.45);line-height:1.3;text-align:center">
          <strong style="color:var(--color-accent)">Gelb</strong> = Workshop-Config. Jede Schicht austauschbar. <a href="https://www.dataiku.com/stories/detail/ai-agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Quelle: Dataiku</a> &bull; <a href="https://vectorize.io/blog/designing-agentic-ai-systems-part-1-agent-architectures" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Vectorize</a>
        </p>
      </div>
    `,
  },

// ===== Interaktiver Agent Architecture Builder =====
  {
    id: 'arch-builder',
    theme: '',
    label: 'Arch Builder',
    content: `
      <div class="arch-viewport-desktop">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
          <div>
            <span class="slide-label" style="color:var(--color-primary)">Interaktiv</span>
            <h2 class="slide-title" style="font-size:1.4rem;margin:4px 0 0">Agenten-Architektur Designer</h2>
          </div>
          <button id="arch-export-btn" style="display:none"></button>
        </div>
        <div id="arch-controls" style="display:flex;flex-direction:column;align-items:center;gap:8px;margin-bottom:16px">
          <p id="arch-cta-text" style="font-size:1rem;color:var(--color-text-subdued);font-weight:500;margin:0">W&auml;hle einen Use Case, um die Architektur zu sehen:</p>
          <select id="arch-usecase" style="padding:0 16px;border-radius:10px;border:2px solid var(--color-border-primary);background:var(--color-bg-subdued);color:var(--color-text-primary);font-size:0.9rem;cursor:pointer;font-weight:600;min-width:280px;appearance:auto;height:44px">
            <option value="" disabled selected>&lt;Use Case hier w&auml;hlen&gt;</option>
            <optgroup label="&#128187; Lokal (Entwickler-PC)">
              <option value="coding">Coding Assistant</option>
              <option value="docs">Doku-Agent</option>
            </optgroup>
            <optgroup label="&#128172; Remote (Server / Cloud)">
              <option value="review">Code Review (CI/CD)</option>
              <option value="chatbot">Kunden-Chatbot (Web)</option>
              <option value="voice">Call Center Voice Agent</option>
              <option value="tickets">Ticket-Automatisierung</option>
              <option value="knowledge">Wissens-Agent (Wiki)</option>
              <option value="data">Data Pipeline Agent</option>
            </optgroup>
            <optgroup label="&#9881; Headless (ohne User)">
              <option value="cve">CVE Auto-Patching</option>
              <option value="anomaly">Anomalie-Erkennung</option>
              <option value="healthcheck">T&auml;gliche System-Pr&uuml;fung</option>
            </optgroup>
          </select>
        </div>
        <div id="arch-diagram" style="padding:16px;border-radius:14px;background:#fff;border:1px solid #e2e8f0;box-shadow:0 2px 12px rgba(0,0,0,0.06);opacity:0;transition:opacity 0.5s ease,transform 0.5s ease;transform:translateY(8px);overflow:auto;max-height:60vh"></div>
        <div id="arch-builder-detail" style="margin-top:10px;padding:10px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.8rem;color:var(--color-text-subdued);line-height:1.5;min-height:20px;opacity:0;transition:opacity 0.5s ease"></div>
      </div>
      <div class="arch-viewport-mobile">
        <span class="slide-label" style="color:var(--color-primary)">Interaktiv</span>
        <h2 class="slide-title" style="font-size:1.3rem;margin-bottom:16px">Agenten-Architektur Designer</h2>
        <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px dashed var(--color-border);text-align:center">
          <div style="font-size:2.5rem;margin-bottom:12px">&#128421;</div>
          <p style="font-size:1rem;color:var(--color-text-primary);font-weight:600;margin-bottom:8px">Interaktives Feature &ndash; nur auf Desktop</p>
          <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">&Ouml;ffne die Pr&auml;sentation auf einem Laptop oder Desktop-PC, um 8 verschiedene Use-Case-Architekturen interaktiv zu erkunden.</p>
          <p style="font-size:0.75rem;color:var(--color-text-subdued);opacity:0.6;margin-top:12px">Use Cases: Coding Assistant, Code Review, Doku-Agent, Kunden-Chatbot, Voice Agent, Ticket-Automatisierung, Wissens-Agent, Data Pipeline</p>
        </div>
      </div>
    `,
  },

  // ===== Warum Agenten die Branche verändern =====
  {
    id: 'agents-disrupt',
    theme: 'slide--dark',
    label: 'Disruption',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">These</span>
      <h2 class="slide-title" style="font-size:1.3rem">3 Wege zum gleichen Ziel &ndash; wann welchen w&auml;hlen?</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Der Aufwand verschwindet nicht &ndash; er verschiebt sich. Die Frage ist: <strong>wohin?</strong></p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px">
        <div style="padding:10px 12px;border-radius:10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(255,107,107,0.12);border:1px solid rgba(255,107,107,0.3);font-size:0.65rem;color:#ff6b6b;font-weight:700">SELBST BAUEN</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Team implementiert klassisch</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Backend &rarr; API &rarr; Frontend &rarr; Tests &rarr; Deployment. Volle Kontrolle, aber <strong>Monate Aufwand</strong>.</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Hoch-regulierte Systeme (Medizin, Finanzen)</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Echtzeit-Anforderungen &lt;50ms</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,255,255,0.06);font-size:0.62rem;color:rgba(255,255,255,0.5)">&#10003; Deterministische Logik zwingend</span>
          </div>
        </div>
        <div style="padding:10px 12px;border-radius:10px;background:rgba(255,237,0,0.05);border:2px solid rgba(255,237,0,0.2)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(255,237,0,0.15);border:1px solid rgba(255,237,0,0.35);font-size:0.65rem;color:var(--color-accent);font-weight:700">AGENT BAUT</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Agent als Entwickler &ndash; baut f&uuml;r dich</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Spec + agents.md &rarr; Agent baut Code, Tests, Infra. Mensch reviewt &amp; deployed. <strong>Stunden statt Monate.</strong></p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Klares Konzept / Spec vorhanden</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Human-in-the-Loop bei Review</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(255,237,0,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Standard-Patterns (CRUD, API, UI)</span>
          </div>
          <div style="font-size:0.68rem;color:rgba(255,255,255,0.4);line-height:1.3"><strong>Praktisch:</strong> Feature f&uuml;r Webseite, REST API, CLI Tool, Datenbank-Migration, Refactoring, Test-Suite &ndash; alles wo eine klare Spec den Rahmen vorgibt und ein Mensch den Output pr&uuml;ft.</div>
        </div>
        <div style="padding:10px 12px;border-radius:10px;background:rgba(37,204,120,0.06);border:2px solid rgba(37,204,120,0.2)">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
            <span style="padding:2px 8px;border-radius:4px;background:rgba(37,204,120,0.15);border:1px solid rgba(37,204,120,0.35);font-size:0.65rem;color:var(--color-positive);font-weight:700">AGENT IST</span>
            <span style="font-size:0.82rem;color:rgba(255,255,255,0.9);font-weight:600">Agent <em>ist</em> das Backend &ndash; kein Code</span>
          </div>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.55);line-height:1.4;margin-bottom:4px">Agent + MCP-Tools + Spec = fertiges Produkt. <strong>Null Code.</strong> Aufwand: fachliche Tests &amp; Monitoring.</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:4px">
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Verprobung / PoC / MVP</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; MCPs f&uuml;r alle ben&ouml;tigten Services</span>
            <span style="padding:2px 6px;border-radius:3px;background:rgba(37,204,120,0.08);font-size:0.62rem;color:rgba(255,255,255,0.6)">&#10003; Fehlertoleranz akzeptabel</span>
          </div>
          <div style="font-size:0.68rem;color:rgba(255,255,255,0.4);line-height:1.3"><strong>Praktisch:</strong> Interner Wissens-Chatbot (Confluence+Jira MCP), Code Review Agent (Git MCP), Doku-Generator, Ticket-Triage, Prototyp f&uuml;r Kunden-Demo. Immer wenn MCP-Tools die n&ouml;tigen APIs abdecken.</div>
        </div>
      </div>
      <div style="display:flex;gap:6px;margin-top:6px">
        <div style="flex:1;padding:7px 10px;border-radius:8px;background:rgba(255,168,0,0.08);border:1px solid rgba(255,168,0,0.2)">
          <p style="font-size:0.68rem;color:rgba(255,255,255,0.55);line-height:1.3">
            <strong style="color:var(--color-warning)">Aufwands-Verschiebung:</strong> Implementierung &rarr; <strong>Spec, fachliche Tests, Monitoring, Review</strong>. Wer keine Tests schreibt, kann Agents nicht einsetzen.
          </p>
        </div>
        <div style="flex:1;padding:7px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
          <p style="font-size:0.68rem;color:rgba(255,255,255,0.55);line-height:1.3">
            <strong style="color:var(--color-accent)">Faustregel:</strong> Je klarer die Spec + je besser die MCP-Abdeckung + je h&ouml;her die Fehlertoleranz &rarr; desto weiter rechts (Agent IST). Kritische Systeme &rarr; links (selbst bauen).
          </p>
        </div>
      </div>
    `,
  },

  // ===== Sind Agenten resilient? Enterprise-tauglich? =====
  {
    id: 'agents-resilience',
    theme: '',
    label: 'Resilienz',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Kritische Frage</span>
      <h2 class="slide-title">Sind Agenten resilient? Deterministisch? Enterprise-tauglich?</h2>
      <p class="slide-subtitle">Kann ich bei 100.000 Anfragen mit derselben Spec 100.000-mal dasselbe Ergebnis erwarten?</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-critical);font-size:0.95rem;margin-bottom:8px">Die ehrliche Antwort: Nein &ndash; nicht automatisch</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">LLMs sind nicht-deterministisch.</strong> Selbst mit <code style="background:rgba(0,0,0,0.1);padding:1px 3px;border-radius:2px;font-size:0.7rem">temperature: 0</code> variieren Antworten. Floating-Point, Batching und Provider-Updates beeinflussen Ergebnisse.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">Tool-Aufrufe sind Seiteneffekte.</strong> Jira-Tickets, DB-Eintr&auml;ge, Commits &ndash; nicht einfach r&uuml;ckg&auml;ngig zu machen wenn falsch.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-critical)">Kontext &auml;ndert sich.</strong> Neue Daten, ge&auml;nderter Code, aktualisierte Wissensbasis &rarr; anderes Ergebnis.
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,168,0,0.08);border:1px solid rgba(255,168,0,0.25);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-warning)">Model-Updates!</strong> Claude 4.5 &rarr; 4.6, GPT-4 &rarr; GPT-5: Provider aktualisieren Modelle ohne Vorwarnung. Verhalten kann sich &auml;ndern, auch bei gleicher API. <strong>Pinning auf Modell-Version ist Pflicht.</strong>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:0.95rem;margin-bottom:8px">Wie man Resilienz erreicht</h3>
          <div style="display:flex;flex-direction:column;gap:4px;margin-bottom:8px">
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Spec als Vertrag:</strong> Klare, messbare Specs definieren <em>was</em> rauskommen soll. Agent-Output gegen Spec validieren.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Fachliche Tests:</strong> Nicht &ldquo;ist der Output identisch?&rdquo; sondern &ldquo;erf&uuml;llt der Output die fachlichen Kriterien?&rdquo; Wie QA bei Software &ndash; Akzeptanztests, nicht Byte-Vergleiche.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Model Pinning + Regression:</strong> Modell-Version fixieren (z.B. <code style="background:rgba(0,0,0,0.08);padding:1px 3px;border-radius:2px;font-size:0.68rem">claude-sonnet-4-20250514</code>). Bei Wechsel: Regressionstests gegen Testsuite laufen lassen.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Monitoring &amp; Observability:</strong> Jeden Agent-Schritt loggen. Input, Output, Tool-Calls, Latenz, Kosten. Dashboards f&uuml;r Anomalie-Erkennung. <span style="color:var(--color-text-subdued)">(z.B. LangSmith, Datadog, custom)</span>
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Human-in-the-Loop:</strong> Agent schl&auml;gt vor, Mensch genehmigt. PR-Review statt Auto-Merge.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.76rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Idempotenz:</strong> Agents so bauen, dass wiederholtes Ausf&uuml;hren sicher ist. Checks vor jeder Aktion.
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.7rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Fazit:</strong> Nicht 100.000x <em>identisch</em>, aber 100.000x <strong>korrekt</strong>. Wie Menschen: Zwei Entwickler schreiben nicht den gleichen Code &ndash; aber beide bestehen die Tests.
          </div>
        </div>
      </div>
    `,
  },

  // ===== Eigenen MCP bauen =====
  {
    id: 'build-mcp',
    theme: 'slide--dark',
    label: 'MCP bauen',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Hands-On</span>
      <h2 class="slide-title" style="font-size:1.3rem">Eigenen MCP Server &amp; Client bauen</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">So bindet ihr eure eigenen Tools an &ndash; in unter 50 Zeilen Code</p>
      <div class="two-cols" style="margin-top:10px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">MCP Server (Node.js)</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>server.ts &ndash; eigenes Tool bereitstellen</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.62rem"><pre style="margin:0"><span class="code-keyword">import</span> { McpServer } <span class="code-keyword">from</span> <span class="code-string">"@modelcontextprotocol/sdk/server/mcp.js"</span>;
<span class="code-keyword">import</span> { StdioServerTransport } <span class="code-keyword">from</span> <span class="code-string">"...sdk/server/stdio.js"</span>;
<span class="code-keyword">import</span> { z } <span class="code-keyword">from</span> <span class="code-string">"zod"</span>;

<span class="code-keyword">const</span> server = <span class="code-keyword">new</span> <span class="code-function">McpServer</span>({
  <span class="code-property">name</span>: <span class="code-string">"mein-tool"</span>,
  <span class="code-property">version</span>: <span class="code-string">"1.0.0"</span>
});

<span class="code-comment">// Tool registrieren &ndash; das sieht der Agent</span>
server.<span class="code-function">registerTool</span>(<span class="code-string">"get_user"</span>, {
  <span class="code-property">description</span>: <span class="code-string">"Holt User-Daten aus unserer DB"</span>,
  <span class="code-property">inputSchema</span>: {
    <span class="code-property">userId</span>: z.<span class="code-function">string</span>().<span class="code-function">describe</span>(<span class="code-string">"User-ID"</span>)
  }
}, <span class="code-keyword">async</span> ({ userId }) =&gt; {
  <span class="code-comment">// Hier: DB-Query, API-Call, was auch immer</span>
  <span class="code-keyword">const</span> user = <span class="code-keyword">await</span> <span class="code-function">db.findUser</span>(userId);
  <span class="code-keyword">return</span> { content: [{ type: <span class="code-string">"text"</span>, text: JSON.<span class="code-function">stringify</span>(user) }] };
});

<span class="code-comment">// Server starten (STDIO-Transport)</span>
<span class="code-keyword">const</span> transport = <span class="code-keyword">new</span> <span class="code-function">StdioServerTransport</span>();
<span class="code-keyword">await</span> server.<span class="code-function">connect</span>(transport);</pre></div>
          </div>
          <div style="padding:6px 10px;border-radius:6px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.68rem;color:rgba(255,255,255,0.6);line-height:1.3">
            <strong style="color:var(--color-accent)">Das passiert:</strong> Der Agent erkennt automatisch das Tool <code style="background:rgba(255,255,255,0.1);padding:1px 3px;border-radius:2px">get_user</code> und kann es aufrufen &ndash; als w&auml;re es Shell oder Filesystem.
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:6px">In OpenCode einbinden</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>opencode.json &ndash; MCP Server registrieren</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0">{
  <span class="code-property">"mcp"</span>: {
    <span class="code-property">"mein-tool"</span>: {
      <span class="code-property">"command"</span>: <span class="code-string">"node"</span>,
      <span class="code-property">"args"</span>: [<span class="code-string">"./build/server.js"</span>]
    }
  }
}</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:8px 0 6px">Setup in 3 Schritten</h3>
          <div class="code-block" style="margin:0;margin-bottom:8px">
            <div class="code-header"><div class="code-dots"><span></span><span></span><span></span></div>Terminal</div>
            <div class="code-body" style="padding:8px 12px;font-size:0.65rem"><pre style="margin:0"><span class="code-function">npm install</span> @modelcontextprotocol/sdk zod
<span class="code-function">npm install</span> -D typescript @types/node
<span class="code-function">npx tsc</span> && <span class="code-function">node</span> build/server.js</pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.9rem;margin:8px 0 6px">Was kann man damit bauen?</h3>
          <div style="display:flex;flex-wrap:wrap;gap:4px">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Interne API anbinden</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Datenbank-Zugriff</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Jira / Confluence</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">E-Mail versenden</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Kubernetes API</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.62rem;color:var(--color-text-on-dark)">Custom Monitoring</span>
          </div>
          <div style="margin-top:6px;padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.62rem;color:rgba(255,255,255,0.5);line-height:1.3">
            <strong style="color:var(--color-accent)">Docs:</strong> <a href="https://modelcontextprotocol.io/docs/develop/build-server" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">MCP Server bauen</a> &bull; <a href="https://modelcontextprotocol.io/docs/develop/build-client" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">MCP Client bauen</a> &bull; <a href="https://mcp.so" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">18.000+ fertige MCPs auf mcp.so</a> &bull; Auch in Python, Java, Kotlin m&ouml;glich.
          </div>
        </div>
      </div>
    `,
  },
];
