export const introSlides = [
  // ===== Welcome (Desktop only - organisatorisches) =====
  {
    id: 'welcome',
    theme: 'slide--dark',
    label: 'Willkommen',
    desktopOnly: true,
    content: `
      <div style="max-width:750px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.6rem;margin-bottom:4px">&#128075; Herzlich willkommen!</h2>
        <p class="slide-subtitle" style="font-size:0.95rem">Bevor wir starten &ndash; ein paar organisatorische Dinge</p>
      </div>
      <div style="max-width:750px;margin:16px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:10px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128221; <strong style="color:var(--color-accent)">Eure Erwartungen</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Was wollt ihr mitnehmen? Was interessiert euch besonders?</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#9749; <strong>Pausen</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Bis "Basics" durch, dann <strong>20 Min Pause</strong>, dann Hands-On.</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128203; <strong>Fragen? Post-its!</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Fragen auf Post-its &rarr; am Ende des Themas gemeinsam durchgehen.</span>
          </p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
          <p style="font-size:0.85rem;line-height:1.5;color:var(--color-text-on-dark)">
            &#128640; <strong style="color:var(--color-accent)">Bereit?</strong><br>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Erwartungen geteilt? Los geht&rsquo;s!</span>
          </p>
        </div>
      </div>
      <div style="max-width:750px;margin:12px auto 0;padding:14px 18px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
        <p style="font-size:0.85rem;line-height:1.4;color:var(--color-text-on-dark);text-align:center">
          &#127918; <strong style="color:var(--color-accent)">Kleine Sch&auml;tzfrage:</strong> Wie lange br&auml;uchtet ihr, um diese Spiele <strong>von Null</strong> zu programmieren? Mit Men&uuml;, Highscore, spielbar im Browser?
        </p>
        <div style="display:flex;gap:12px;margin-top:10px;justify-content:center;flex-wrap:wrap">
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#127922; 2048</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Eure Sch&auml;tzung?</div>
          </div>
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#128056; Doodle Jump</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Eure Sch&auml;tzung?</div>
          </div>
          <div style="padding:8px 16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);text-align:center;min-width:110px">
            <strong style="font-size:0.85rem;color:var(--color-accent)">&#128126; Space Invaders</strong>
            <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:2px">Eure Sch&auml;tzung?</div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Selbststudium-Hinweis (Presenter only) =====
  {
    id: 'self-study-hint',
    theme: 'slide--dark',
    label: 'Selbststudium',
    desktopOnly: true,
    content: `
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:center;height:100%">
        <div>
          <span class="slide-label">Kurzer Hinweis</span>
          <h2 class="slide-title" style="font-size:1.6rem;line-height:1.3">Ihr habt was verpasst?<br>M&uuml;sst fr&uuml;her los?</h2>
          <p style="font-size:1rem;color:var(--color-text-on-dark-subdued);line-height:1.6;margin-top:16px">
            Kein Problem. &#128079;
          </p>
          <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.6;margin-top:8px">
            Dieser Workshop kann problemlos <strong style="color:var(--color-accent)">im Selbststudium</strong> nachgeholt werden &ndash; jederzeit, in eigenem Tempo, auf jedem Ger&auml;t.
          </p>
          <div style="margin-top:20px;padding:14px 18px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2);display:flex;align-items:center;gap:14px">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://agentic-ai.weisser.dev&bgcolor=001631&color=ffed00" alt="QR Code agentic-ai.weisser.dev" style="width:64px;height:64px;border-radius:6px;flex-shrink:0">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark);line-height:1.5">
              &#127760; <strong><a href="https://agentic-ai.weisser.dev" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agentic-ai.weisser.dev</a></strong><br>
              <span style="font-size:0.82rem;color:var(--color-text-on-dark-subdued)">Alle Slides, Prompts, Links &ndash; einfach im Browser &ouml;ffnen.</span><br>
              <span style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.6">Inhalt veraltet oder ungenau? <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">Pull Request willkommen.</a></span>
            </p>
          </div>
        </div>
        <div style="border-radius:12px;overflow:hidden;box-shadow:0 8px 32px rgba(0,0,0,0.3);border:1px solid rgba(255,255,255,0.1)">
          <img src="/mockup.png" alt="Agentic AI Workshop &ndash; Self-paced Mode auf Desktop und Mobile" style="width:100%;display:block;border-radius:12px">
        </div>
      </div>
    `,
  },

  // ===== Check-In (Presenter only) =====
  {
    id: 'checkin',
    theme: 'slide--dark',
    label: 'Check-In',
    desktopOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px">&#128172; Kurzer Check-In</h2>
        <p class="slide-subtitle" style="font-size:0.9rem">Im Uhrzeigersinn &ndash; jeder 2&ndash;3 S&auml;tze</p>
      </div>
      <div style="max-width:650px;margin:16px auto 0;display:flex;flex-direction:column;gap:8px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#129504;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Wie w&uuml;rdet ihr <strong>selber sagen</strong> &ndash; kennt ihr euch mit KI aus?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128188;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Wie nutzt ihr <strong>heute schon KI</strong> &ndash; privat oder beruflich?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128187;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Wer hat schon aktiv <strong style="color:var(--color-accent)">Vibe Coded</strong>?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128640;</span>
          <div style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Wer hat KI f&uuml;r <strong>andere Sachen</strong> genutzt?
            <span style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);display:block;margin-top:2px">Pr&auml;sentationen, Mails, Inhalte zusammenfassen, Reisen planen, privater Coach&hellip;</span>
          </div>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128269;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4">Wer fragt &ouml;fter <strong>ChatGPT statt Google</strong>?</p>
        </div>
      </div>
    `,
  },

  // ===== 0: HERO =====
  {
    id: 'hero',
    theme: 'slide--hero',
    label: 'Übersicht',
    labelSelfPaced: 'Start',
    content: `
      <div class="desktop-content">
        <div class="hero-badge">Workshop 2026</div>
        <h1 class="hero-title">Agentic AI<br><span class="highlight">Workshop</span></h1>
        <p class="hero-subtitle">Von der Geschichte der KI &uuml;ber den aktuellen Stand bis zum praktischen Arbeiten mit KI-Agents.</p>
        <p style="font-style:italic;color:var(--color-text-on-dark-subdued);font-size:clamp(0.9rem,1.5vw,1.1rem);margin-top:8px"></p>
        <div style="display:flex;gap:24px;justify-content:center;margin-top:32px;flex-wrap:wrap">
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 1</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">Geschichte &amp; Status Quo</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">70 Jahre KI, Big Player, Chancen &amp; Risiken</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 2</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">KI &ndash; Internet 2.0</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Wie KI die Masse erobert &ndash; f&uuml;r jeden verst&auml;ndlich</p>
          </div>
          <div style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:12px;padding:16px 24px;max-width:200px;text-align:center">
            <span style="font-size:0.75rem;color:var(--color-accent);font-weight:700;text-transform:uppercase;letter-spacing:0.05em">Teil 3</span>
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);font-weight:600;margin-top:4px">AI Assisted Coding</p>
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);margin-top:4px">Deep Dive &amp; Hands-On mit KI-Agents</p>
          </div>
        </div>
        <p style="margin-top:24px;font-size:0.8rem;color:var(--color-text-on-dark-subdued);opacity:0.6;text-align:center">
          F&uuml;r alle mit technischem Verst&auml;ndnis &ndash; vom Einsteiger bis zum Senior Developer
        </p>
      </div>
      <div class="mobile-content" style="text-align:center">
        <div style="font-size:3.5rem;margin-bottom:12px">&#129302;</div>
        <h1 style="font-size:1.8rem;font-weight:800;color:var(--color-text-on-dark);line-height:1.2;margin:16px 0 8px">Willkommen auf deiner Reise durch den<br><span style="color:var(--color-accent)">KI Dschungel</span></h1>
        <p style="font-size:0.95rem;color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:28px">Interaktiv. Verst&auml;ndlich. Zum Mitmachen.</p>
        <button class="mobile-start-btn" id="mobile-start-btn">Experience starten &#128640;</button>
      </div>
      <p class="hero-copyright" style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.4;text-align:center">
        &copy; 2026 <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">weisser-dev</a>
      </p>
    `,
  },

  // ===== Mobile Onboarding (Mobile only) =====
  {
    id: 'mobile-onboarding',
    theme: 'slide--dark',
    label: 'Übersicht',
    selfPacedOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:20px">
        <div>
          <div style="margin-bottom:20px">
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#127919; F&uuml;r wen ist das?</h3>
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">F&uuml;r Entwickler und Technik-Interessierte &ndash; vom Einsteiger bis zum Senior. Du brauchst kein KI-Vorwissen.</p>
          </div>
          <div>
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128218; Was wirst du lernen?</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128337; 70 Jahre KI-Geschichte &ndash; wie wir hierher kamen</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#129504; Wie LLMs, Tokens und Agents funktionieren</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128187; AI Assisted Coding in der Praxis</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);font-size:0.85rem;color:var(--color-text-on-dark)">&#128296; Hands-On: Eigene Projekte mit KI-Agents bauen</div>
            </div>
          </div>
        </div>
        <div>
          <div style="margin-bottom:20px">
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128221; Was wirst du brauchen?</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; Laptop</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; Neugier &amp; Offenheit</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark)">&#9989; Mindestens 2&ndash;3 Stunden Zeit</div>
            </div>
          </div>
          <div>
            <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">&#128274; Voraussetzungen</h3>
            <div style="display:flex;flex-direction:column;gap:6px">
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">&#128200; Du wei&szlig;t was APIs sind</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">&#129504; Technisches Grundverst&auml;ndnis vorhanden</div>
              <div style="padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.85rem;color:var(--color-text-on-dark)">
                &#128268; Zugriff auf ein Modell &ndash; Claude, ChatGPT, Qwen etc.<br>
                <span style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);display:block;margin-top:3px">
                  <a href="https://opencode.ai/docs/providers/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">75+ Provider</a>
                  &nbsp;&middot;&nbsp;
                  OpenCode bietet auch <strong>kostenlose Modelle</strong> an: Big Pickle &amp; MiniMax 2.5
                  &nbsp;&middot;&nbsp;
                  <a href="https://opencode.ai/docs/zen/#pricing" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/zen</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  },
];
