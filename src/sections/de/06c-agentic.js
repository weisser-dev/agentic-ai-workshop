export const agenticSlides = [
  // ===== SECTION DIVIDER =====
  {
    id: 'section-agentic',
    theme: 'slide--primary slide--divider',
    label: 'Agentic AI',
    content: `
      <div class="divider-number">&#129302;</div>
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
      <h2 class="slide-title">Agentic Architecture &ndash; die Schichten</h2>
      <p class="slide-subtitle">Jede Agentic-L&ouml;sung besteht aus denselben 5 Schichten &ndash; nur die Bausteine variieren</p>
      <div style="display:flex;flex-direction:column;gap:6px;margin-top:12px" id="arch-layers">
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">1. INTERFACE</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">IDE Plugin</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Chat UI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">CLI / TUI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Chatbot Widget</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Voice / Call Center</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">API / Webhook</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595;</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">2. AGENT<br>FRAMEWORK</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">OpenCode</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Claude Code</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">OpenClaw</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">LangChain</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">CrewAI</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595; &#8593; Loop</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">3. LLM<br>PROVIDER</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">Claude (Bedrock)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">GPT (OpenAI)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Gemini</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Ollama (lokal)</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Mistral</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595; &#8593; Tool Calls</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">4. MCP /<br>TOOLS</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,237,0,0.12);border:1px solid rgba(255,237,0,0.3);font-size:0.7rem;color:var(--color-accent);font-weight:600">Shell</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Filesystem</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Database</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Jira</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Confluence</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">SharePoint</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Git</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom Script</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Custom Backend</span>
          </div>
        </div>
        <div style="text-align:center;font-size:0.7rem;color:rgba(255,255,255,0.3)">&#8595;</div>
        <div style="display:flex;align-items:stretch;gap:8px">
          <div style="min-width:90px;padding:8px;border-radius:8px;background:rgba(37,204,120,0.12);border:1px solid rgba(37,204,120,0.3);font-size:0.7rem;color:var(--color-positive);font-weight:700;display:flex;align-items:center;justify-content:center;text-align:center">5. OUTPUT</div>
          <div style="flex:1;padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);display:flex;flex-wrap:wrap;gap:4px;align-items:center">
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Code / PR</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Doku</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Tickets</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Reports</span>
            <span style="padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);font-size:0.7rem;color:var(--color-text-on-dark)">Deployments</span>
          </div>
        </div>
      </div>
      <div style="margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
        <p style="font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Gelb markiert</strong> = unsere Workshop-Konfiguration. Jede Schicht ist austauschbar &ndash; auf der n&auml;chsten Seite k&ouml;nnt ihr eure eigene Architektur zusammenbauen. <a href="https://www.dataiku.com/stories/detail/ai-agents/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.65rem">Quelle: Dataiku &ndash; Understanding AI Agents</a>
        </p>
      </div>
    `,
  },

// ===== Interaktiver Agent Architecture Builder =====
  {
    id: 'arch-builder',
    theme: 'slide--dark',
    label: 'Arch Builder',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Interaktiv</span>
      <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:6px">Wie k&ouml;nnte deine Agenten-Architektur aussehen?</h2>
      <p class="slide-subtitle" style="font-size:0.9rem;margin-bottom:20px">W&auml;hle einen Use Case und sieh dir eine vereinfachte Referenzarchitektur an &ndash; mit Deployment-Zonen, Tools und Backends.</p>
      <div class="desktop-content">
        <div style="display:flex;align-items:center;gap:12px;justify-content:center">
          <select id="arch-usecase" style="padding:10px 16px;border-radius:10px;border:2px solid rgba(255,237,0,0.3);background:rgba(255,237,0,0.06);color:var(--color-accent);font-size:0.9rem;cursor:pointer;font-weight:600;min-width:240px;appearance:auto">
            <option value="coding">&#128187; Coding Assistant</option>
            <option value="review">&#128269; Code Review (CI/CD)</option>
            <option value="docs">&#128196; Doku-Agent</option>
            <option value="chatbot">&#128172; Kunden-Chatbot (Web)</option>
            <option value="voice">&#128222; Call Center Voice Agent</option>
            <option value="tickets">&#127915; Ticket-Automatisierung</option>
            <option value="knowledge">&#128218; Wissens-Agent (Wiki)</option>
            <option value="data">&#128202; Data Pipeline Agent</option>
          </select>
          <button id="arch-generate-btn" style="padding:10px 24px;border-radius:10px;border:none;background:var(--color-accent,#ffed00);color:#1a1a2e;font-size:0.9rem;font-weight:700;cursor:pointer;white-space:nowrap;transition:transform 0.15s ease">
            Architektur erzeugen &rarr;
          </button>
        </div>
        <div id="arch-diagram" style="margin-top:20px;opacity:0;transition:opacity 0.5s ease,transform 0.5s ease;transform:translateY(10px)"></div>
        <div id="arch-builder-detail" style="margin-top:10px;padding:10px 16px;border-radius:10px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.25);font-size:0.78rem;color:rgba(255,255,255,0.7);line-height:1.5;min-height:20px;opacity:0;transition:opacity 0.5s ease"></div>
      </div>
      <div class="mobile-content" style="display:none">
        <div style="padding:24px;border-radius:12px;background:rgba(255,237,0,0.06);border:2px dashed rgba(255,237,0,0.25);text-align:center;margin-top:20px">
          <div style="font-size:2.5rem;margin-bottom:12px">&#128421;</div>
          <p style="font-size:1rem;color:rgba(255,255,255,0.85);font-weight:600;margin-bottom:8px">Interaktives Feature &ndash; nur auf Desktop</p>
          <p style="font-size:0.85rem;color:rgba(255,255,255,0.5);line-height:1.5">Der Architektur-Designer ist ein interaktives Tool mit Diagramm-Darstellung. &Ouml;ffne die Pr&auml;sentation auf einem Laptop oder Desktop-PC, um 8 verschiedene Use-Case-Architekturen zu erkunden.</p>
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.35);margin-top:12px">Use Cases: Coding Assistant, Code Review, Doku-Agent, Kunden-Chatbot, Call Center Voice Agent, Ticket-Automatisierung, Wissens-Agent, Data Pipeline</p>
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
      <h2 class="slide-title">Agenten k&ouml;nnten die Branche auf den Kopf stellen</h2>
      <p class="slide-subtitle">Kein neues Backend n&ouml;tig? Nur Agent + Spec + agents.md?</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Was sich &auml;ndert</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:var(--color-accent)">Heute:</strong> Team baut Backend &rarr; API &rarr; Frontend &rarr; Tests &rarr; Deployment. Monate an Arbeit.
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(37,204,120,0.08);border:2px solid rgba(37,204,120,0.25);font-size:0.82rem;color:rgba(255,255,255,0.85);line-height:1.5">
              <strong style="color:var(--color-positive)">Mit Agents:</strong> Spec schreiben &rarr; agents.md definieren &rarr; Agent baut alles. <strong>Stunden statt Monate.</strong>
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin:12px 0 8px">Bestehende APIs bleiben</h3>
          <div style="padding:10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.8rem;color:rgba(255,255,255,0.7);line-height:1.5">
            Confluence, Jira, GitHub, Datenbanken &ndash; alles hat bereits APIs. Agents nutzen diese &uuml;ber <strong>MCP-Tools</strong>. Kein neues Backend n&ouml;tig, nur eine Spec die beschreibt <em>was</em> passieren soll.
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Konkrete Beispiele</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong>Code Review:</strong> Fr&uuml;her: Custom Backend + GitLab Webhooks. Jetzt: Agent + Git MCP + Spec.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong>Doku-Generierung:</strong> Fr&uuml;her: Custom Pipeline. Jetzt: Agent + Confluence MCP + agents.md.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong>Kunden-Chatbot:</strong> Fr&uuml;her: RAG-Pipeline + Custom Backend. Jetzt: Agent + Vektor-DB MCP + Produkt-API MCP.
            </div>
            <div style="padding:7px 10px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);font-size:0.78rem;color:rgba(255,255,255,0.8)">
              <strong>Ticket-Triage:</strong> Fr&uuml;her: Regel-Engine. Jetzt: Agent + Jira MCP + Klassifizierungs-Spec.
            </div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.78rem;color:rgba(255,255,255,0.7);line-height:1.4">
            <strong style="color:#ff6b6b">Aber:</strong> Agents ersetzen nicht die Infrastruktur. Sie ersetzen den <strong>Glue Code</strong> &ndash; die Logik die verschiedene Services verbindet. Die APIs, Datenbanken und Services m&uuml;ssen weiterhin existieren und gewartet werden.
          </div>
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
          <h3 style="color:var(--color-critical);font-size:1rem;margin-bottom:8px">Die ehrliche Antwort: Nein &ndash; nicht automatisch</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.8rem;line-height:1.5">
              <strong style="color:var(--color-critical)">LLMs sind nicht-deterministisch.</strong> Selbst mit <code style="background:rgba(0,0,0,0.1);padding:1px 3px;border-radius:2px;font-size:0.72rem">temperature: 0</code> k&ouml;nnen Antworten minimal variieren. Floating-Point-Arithmetik, Batching und Provider-Updates beeinflussen das Ergebnis.
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.8rem;line-height:1.5">
              <strong style="color:var(--color-critical)">Tool-Aufrufe sind Seiteneffekte.</strong> Ein Agent der Jira-Tickets erstellt, DB-Eintr&auml;ge schreibt oder Code committet &ndash; das kann man nicht einfach r&uuml;ckg&auml;ngig machen, wenn das Ergebnis falsch ist.
            </div>
            <div style="padding:10px;border-radius:8px;background:rgba(255,107,107,0.06);border:1px solid rgba(255,107,107,0.2);font-size:0.8rem;line-height:1.5">
              <strong style="color:var(--color-critical)">Kontext &auml;ndert sich.</strong> Dasselbe Prompt kann zu unterschiedlichen Ergebnissen f&uuml;hren, wenn sich die Wissensbasis, der Code oder die Daten &auml;ndern.
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-positive);font-size:1rem;margin-bottom:8px">Wie man Resilienz trotzdem erreicht</h3>
          <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:10px">
            <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Spec als Vertrag:</strong> Klare, messbare Specs definieren <em>was</em> rauskommen soll. Agent-Output wird gegen Spec validiert.
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Tests als Guardrails:</strong> Automatisierte Tests pr&uuml;fen ob das Ergebnis den Anforderungen entspricht &ndash; nicht ob es identisch ist.
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Human-in-the-Loop:</strong> F&uuml;r kritische Aktionen: Agent schl&auml;gt vor, Mensch genehmigt. (z.B. PR-Review statt Auto-Merge)
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Idempotenz-Design:</strong> Agents so bauen, dass mehrfaches Ausf&uuml;hren sicher ist. Checks vor Aktionen.
            </div>
            <div style="padding:8px 10px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.78rem;line-height:1.4">
              <strong style="color:var(--color-primary)">&#9989; Logging &amp; Audit:</strong> Jeder Agent-Schritt wird geloggt. Nachvollziehbarkeit ist Pflicht.
            </div>
          </div>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.72rem;color:var(--color-text-subdued);line-height:1.4">
            <strong style="color:var(--color-primary)">Fazit:</strong> Agents liefern nicht 100.000x das <em>identische</em> Ergebnis &ndash; aber mit der richtigen Architektur 100.000x ein <strong>korrektes</strong> Ergebnis. &Auml;hnlich wie Menschen: Zwei Entwickler schreiben nicht den gleichen Code, aber beide bestehen die Tests.
          </div>
        </div>
      </div>
    `,
  },
];
