export const handoutSlides = [
  // ===== SECTION - Handout (Pause) =====
  {
    id: 'handout',
    theme: 'slide--dark',
    label: 'Handout',
    content: `
      <span class="slide-label presenter-only-text">&#9749; Handout &ndash; lass uns 5 Minuten innehalten und schauen ob wir alles verstanden haben</span>
      <h2 class="slide-title" style="margin-bottom:8px">Die wichtigsten Begriffe auf einen Blick</h2>
      <div class="pause-timer" id="pause-timer">
        <span class="pause-timer-icon">&#9749;</span>
        <span class="pause-timer-display" id="pause-timer-display">20:00</span>
        <span class="pause-timer-label">Pause</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">KI / AI</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Software die menschliche Intelligenz nachahmt &ndash; lernt aus Daten statt festen Regeln.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">LLM</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Large Language Model &ndash; ein neuronales Netz trainiert auf riesigen Textmengen. Sagt das wahrscheinlichste n&auml;chste Wort voraus.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Token</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Kleinste Texteinheit f&uuml;r ein LLM &ndash; ca. &frac34; eines Wortes. Alles wird in Tokens zerlegt, verarbeitet und abgerechnet.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Kontext / Context Window</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Das "Ged&auml;chtnis" einer Unterhaltung. Begrenzte Gr&ouml;&szlig;e &ndash; wenn voll, werden &auml;ltere Infos komprimiert oder vergessen.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Agent</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Ein LLM das in einer Schleife l&auml;uft: Denken &rarr; Tool nutzen &rarr; Ergebnis pr&uuml;fen &rarr; wiederholen. Kann selbstst&auml;ndig Aufgaben l&ouml;sen.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Agent Framework</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Software die den Agent-Loop steuert: Welches LLM, welche Tools, welche Regeln. Beispiele: OpenCode, Claude Code, Cursor.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">MCP</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Model Context Protocol &ndash; offener Standard f&uuml;r Agent-Tools. Einmal bauen, &uuml;berall nutzen. Der Werkzeugkoffer des Agenten.</p>
        </div>
        <div style="padding:12px 14px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <strong style="color:var(--color-accent);font-size:0.85rem">Prompt / System Prompt</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4;margin-top:4px">Deine Eingabe an das LLM. System Prompt = unsichtbare Anweisungen die das Verhalten steuern (z.B. "Du bist ein hilfreicher Assistent").</p>
        </div>
      </div>
      <p class="presenter-only-text" style="text-align:center;margin-top:12px;font-size:0.75rem;color:var(--color-text-on-dark-subdued);opacity:0.7">&#9749; Kaffeepause &ndash; diese Seite offen lassen als Nachschlagewerk</p>
    `,
  },
];
