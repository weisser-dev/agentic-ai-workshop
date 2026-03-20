import './style.css'

// ===== Slide Definitions =====
const slides = [
  // ===== 0: HERO =====
  {
    id: 'hero',
    theme: 'slide--hero',
    label: 'Start',
    content: `
      <div class="hero-badge">Workshop 2026</div>
      <h1 class="hero-title">Agentic AI<br><span class="highlight">Workshop</span></h1>
      <p class="hero-subtitle">Von der Geschichte der KI &uuml;ber den aktuellen Stand bis zum praktischen Arbeiten mit KI-Agents &ndash; f&uuml;r Entwickler und Technik-Interessierte.</p>
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
      <p style="position:absolute;bottom:24px;left:50%;transform:translateX(-50%);font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.4">
        &copy; 2026 <a href="https://github.com/weisser-dev/agentic-ai-workshop" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline">weisser-dev</a>
      </p>
    `,
  },

  // ===== 1: SECTION DIVIDER - Geschichte =====
  {
    id: 'section-history',
    theme: 'slide--primary slide--divider',
    label: 'Geschichte',
    content: `
      <div class="divider-number">01</div>
      <h2 class="slide-title">Die Geschichte der KI</h2>
      <p class="slide-subtitle">70 Jahre &ndash; vom Gedankenexperiment zur Revolution</p>
    `,
  },

  // ===== 2: Timeline 1950-1997 =====
  {
    id: 'history-early',
    theme: 'slide--dark',
    label: 'Fr&uuml;he KI',
    content: `
      <span class="slide-label">1950 &ndash; 1997</span>
      <h2 class="slide-title">Die Anf&auml;nge</h2>
      <p class="slide-subtitle">Von der Geburt eines Begriffs bis zum Sieg &uuml;ber den Schachweltmeister</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">1956 &ndash; Der Begriff "Artificial Intelligence" wird geboren</div>
          <div class="timeline-text">John McCarthy, Marvin Minsky und andere pr&auml;gen den Begriff auf der <strong>Dartmouth Conference</strong>. Die Vision: Maschinen, die denken k&ouml;nnen.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1966 &ndash; ELIZA: Der erste Chatbot</div>
          <div class="timeline-text">Joseph Weizenbaum (MIT) baut einen Chatbot, der einen Therapeuten simuliert. Nutzer glauben, sie sprechen mit einem Menschen.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1974-1980 &ndash; Erster "AI Winter"</div>
          <div class="timeline-text">Die Erwartungen waren zu hoch, die Ergebnisse zu gering. F&ouml;rdergelder werden gestrichen, Forschung stagniert.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1980er &ndash; Expert Systems Boom</div>
          <div class="timeline-text">Regelbasierte Systeme wie MYCIN (Medizin) und XCON (Konfiguration) bringen KI in Unternehmen &ndash; gefolgt vom zweiten AI Winter (1987-1993).</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">1997 &ndash; Deep Blue schlägt Kasparov</div>
          <div class="timeline-text">IBMs Deep Blue besiegt den Schachweltmeister <strong>Garry Kasparov</strong> in einem 6-Spiele-Match (3,5&ndash;2,5). Die Welt staunt.</div>
        </div>
      </div>
    `,
  },

  // ===== 3: Timeline 2012-2019 =====
  {
    id: 'history-modern',
    theme: '',
    label: 'Deep Learning',
    content: `
      <span class="slide-label">2012 &ndash; 2019</span>
      <h2 class="slide-title">Die Deep Learning Revolution</h2>
      <p class="slide-subtitle">Neue Algorithmen + mehr Rechenleistung = Durchbruch</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">2012 &ndash; AlexNet gewinnt ImageNet</div>
          <div class="timeline-text">Ein tiefes neuronales Netz von Krizhevsky, <strong>Sutskever</strong> & <strong>Hinton</strong> zerschl&auml;gt die Konkurrenz. Der Deep-Learning-Boom beginnt.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2015 &ndash; OpenAI wird gegr&uuml;ndet</div>
          <div class="timeline-text">Gegr&uuml;ndet von <strong>Sam Altman</strong>, <strong>Elon Musk</strong>, Greg Brockman, <strong>Ilya Sutskever</strong> u.a. &ndash; als Non-Profit mit 1 Mrd. $ Pledge. Ziel: sichere, allgemeine KI.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2016 &ndash; AlphaGo besiegt Lee Sedol</div>
          <div class="timeline-text">DeepMinds AlphaGo gewinnt 4&ndash;1 gegen den Go-Weltmeister. Go galt als zu komplex f&uuml;r KI &ndash; bis dahin.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2017 &ndash; "Attention Is All You Need"</div>
          <div class="timeline-text">Google Brain ver&ouml;ffentlicht das <strong>Transformer</strong>-Paper. Die Grundlage f&uuml;r GPT, BERT, Claude und alle modernen LLMs.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2019 &ndash; OpenAI Five gewinnt gegen Dota-2-Weltmeister</div>
          <div class="timeline-text">Die KI besiegt das amtierende Weltmeister-Team <strong>OG</strong> in einem Best-of-3. Das erste Mal, dass KI in einem komplexen Team-Strategiespiel dominiert.</div>
        </div>
      </div>
    `,
  },

  // ===== 4: Timeline 2020-2022 - Der Urknall =====
  {
    id: 'history-bigbang',
    theme: 'slide--dark',
    label: 'Urknall',
    content: `
      <span class="slide-label">2020 &ndash; 2022</span>
      <h2 class="slide-title">Der Urknall</h2>
      <p class="slide-subtitle">KI wird zug&auml;nglich &ndash; f&uuml;r alle</p>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-title">2020 &ndash; GPT-3 erscheint</div>
          <div class="timeline-text">175 Milliarden Parameter. Erstmals k&ouml;nnen Entwickler per API auf ein m&auml;chtiges Sprachmodell zugreifen. Few-Shot Learning wird Realit&auml;t.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2021 &ndash; Anthropic wird gegr&uuml;ndet</div>
          <div class="timeline-text"><strong>Dario Amodei</strong> (Ex-VP of Research, OpenAI) und <strong>Daniela Amodei</strong> gr&uuml;nden Anthropic mit Fokus auf KI-Sicherheit. Sp&auml;ter: Claude.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2022 &ndash; Stable Diffusion & DALL-E 2</div>
          <div class="timeline-text">Bildgenerierung per Text wird m&ouml;glich. Jeder kann pl&ouml;tzlich "Kunst" erstellen &ndash; die kreative Welt ver&auml;ndert sich.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title" style="font-size:1.3rem;color:var(--color-accent)">30. November 2022 &ndash; ChatGPT launcht</div>
          <div class="timeline-text" style="font-size:1.05rem"><strong>100 Millionen Nutzer in 2 Monaten.</strong> Die schnellste Adoption einer Consumer-App aller Zeiten. KI ist nicht mehr Forschung &ndash; KI ist Mainstream.</div>
        </div>
      </div>
    `,
  },

  // ===== Was in 4 Jahren passiert ist =====
  {
    id: 'four-years',
    theme: '',
    label: '4 Jahre',
    content: `
      <span class="slide-label">2023 &ndash; 2026</span>
      <h2 class="slide-title">4 Jahre. Eine andere Welt.</h2>
      <p class="slide-subtitle">Was sich seit ChatGPT ver&auml;ndert hat &ndash; und welche Konsequenzen das bereits hat</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Was entstanden ist</h3>
          <div class="tags" style="margin-top:0">
            <span class="tag">GitHub Copilot</span>
            <span class="tag">AI Assisted Coding</span>
            <span class="tag">RAG-Systeme</span>
            <span class="tag">MCP als Standard</span>
            <span class="tag">Autonome Agents</span>
            <span class="tag">Sprach-Agents</span>
            <span class="tag">agent.md / CLAUDE.md</span>
            <span class="tag">Vibe Coding</span>
            <span class="tag">Sora / Video-KI</span>
            <span class="tag">Deepfakes</span>
            <span class="tag">KI-Social-Media</span>
            <span class="tag">Computer Use</span>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin:20px 0 12px">Die Zahlen</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#128202;</span><span><strong>92% der US-Entwickler</strong> nutzen KI-Coding-Tools (GitHub Survey)</span></li>
            <li><span class="check">&#128202;</span><span><strong>34% des Codes</strong> ist KI-generiert (GitLab 2026)</span></li>
            <li><span class="check">&#128202;</span><span><strong>25% der YC-Startups</strong> mit 95% KI-generiertem Code</span></li>
            <li><span class="check">&#128202;</span><span><strong>"Vibe Coding"</strong> &ndash; Word of the Year 2025</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:12px">Die Konsequenzen</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Klarna</strong> &ndash; H&auml;lfte der Belegschaft entlassen. KI ersetzt 700 Stellen. <a href="https://www.businessinsider.de/wirtschaft/international-business/klarna-entlaesst-haelfte-der-mitarbeiter-wegen-ki/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Stack Overflow</strong> &ndash; Historischer Tiefstand. KI hat die Plattform quasi get&ouml;tet. <a href="https://winfuture.de/news,155972.html" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15)">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Bottleneck verschiebt sich</strong> &ndash; Nicht Devs, sondern fachliche Anforderungen sind der Engpass. Code wird schneller gebaut als spezifiziert. <a href="https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 2026 - Machtverschiebung =====
  {
    id: 'year-2026',
    theme: 'slide--dark',
    label: '2026',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Stand: M&auml;rz 2026</span>
      <h2 class="slide-title">Wie Politik den Markt dreht</h2>
      <p class="slide-subtitle">ChatGPT war das Allerweltswerkzeug. Bis politische Entscheidungen alles ver&auml;nderten &ndash; innerhalb von Wochen.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">OpenAI: Vom Liebling zum Streitfall</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127987; <strong>Pentagon-Deal</strong><br><span style="color:var(--color-text-on-dark-subdued)">OpenAI liefert KI an US-Milit&auml;r &amp; Geheimdienste. F&uuml;r ein Unternehmen, das als Non-Profit f&uuml;r "sichere KI" startete &ndash; ein Kulturbruch.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#128250; <strong>Werbung in ChatGPT</strong><br><span style="color:var(--color-text-on-dark-subdued)">Ads im Free-Tier angek&uuml;ndigt. Non-Profit-Origins endg&uuml;ltig Geschichte.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.15);border:1px solid rgba(191,6,67,0.3)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#128148; <strong>Massenhafte Deinstallationen</strong><br><span style="color:var(--color-text-on-dark-subdued)">Nutzer l&ouml;schen ChatGPT aus Protest. Entwickler wechseln zu Anthropic, Google, Open Source.</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Anthropic: Der Gewinner &ndash; vorerst</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#129351; <strong>Claude wird #1 f&uuml;r Entwickler</strong><br><span style="color:var(--color-text-on-dark-subdued)">Claude Opus 4.6 dominiert Coding-Benchmarks. Claude Code wird zum Standard. Selbst Microsoft &amp; Google-Mitarbeiter nutzen es.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127944; <strong>Super Bowl: Anthropic trollt OpenAI</strong><br><span style="color:var(--color-text-on-dark-subdued)">Claude-Werbung beim Super Bowl: "We don't show ads." Millionen lachen &ndash; auf OpenAIs Kosten.</span></p>
            </div>
            <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.15);border:1px solid rgba(191,6,67,0.3)">
              <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">&#127468;&#127480; <strong>Trump verbietet Anthropic</strong><br><span style="color:var(--color-text-on-dark-subdued)">Feb. 2026: Bundesbeh&ouml;rden d&uuml;rfen Anthropic nicht mehr nutzen. Politische Vergeltung? Der Markt reagiert sofort.</span></p>
            </div>
          </div>
          <div style="margin-top:12px;display:flex;gap:8px;flex-wrap:wrap;font-size:0.8rem">
            <a href="https://www.instagram.com/p/DVjLDwKmWoH/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Instagram: Zusammenfassung</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://www.capital.de/wirtschaft-politik/trump-gegen-ki-giganten--wer-regiert-die-welt-in-zukunft--37225614.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Capital: Trump gegen KI-Giganten</a>
          </div>
        </div>
      </div>
      <div style="margin-top:24px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-accent)">Die Lektion:</strong> Das "beste Tool" wird nicht nur durch Technik bestimmt &ndash; sondern durch Politik, Vertrauen und Werte. In 12 Wochen kann sich alles drehen.
        </p>
      </div>
    `,
  },

  // ===== 5: Die Big Player =====
  {
    id: 'big-players',
    theme: '',
    label: 'Big Player',
    content: `
      <span class="slide-label">Landscape</span>
      <h2 class="slide-title">Die Big 6 der KI</h2>
      <p class="slide-subtitle">Diese Unternehmen treiben die KI-Revolution voran</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr)">
        <div class="card">
          <div class="card-icon" style="background:#10a37f22;color:#10a37f">&#9679;</div>
          <div class="card-title">OpenAI</div>
          <div class="card-text"><strong>GPT-4o, o3, Codex</strong><br>Gegr. 2015. Sam Altman. ChatGPT, DALL-E, Sora. >$150 Mrd. Bewertung.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:#d4a27422;color:#d4a274">&#9679;</div>
          <div class="card-title">Anthropic</div>
          <div class="card-text"><strong>Claude 4 Opus/Sonnet</strong><br>Gegr. 2021. Dario & Daniela Amodei. KI-Sicherheit. Backed by Google & Amazon.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:#4285f422;color:#4285f4">&#9679;</div>
          <div class="card-title">Google DeepMind</div>
          <div class="card-text"><strong>Gemini 2.5 Pro/Flash</strong><br>Google Brain + DeepMind (2023). Enormer Daten- & Compute-Vorteil. Nano Banana.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:#0668e122;color:#0668e1">&#9679;</div>
          <div class="card-title">Meta AI</div>
          <div class="card-text"><strong>LLaMA 4 (Open Source)</strong><br>Gr&ouml;&szlig;ter Open-Weight-Contributor. Offene Modelle f&uuml;r alle. Maverick, Scout.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:#ff6a1322;color:#ff6a13">&#9679;</div>
          <div class="card-title">Alibaba / Qwen</div>
          <div class="card-text"><strong>Qwen 3 (kostenlos!)</strong><br>Open Source, on-prem hostbar. Trainiert mit Nutzerdaten. Coder, 235B, MoE.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:#1d9bf022;color:#1d9bf0">&#9679;</div>
          <div class="card-title">xAI</div>
          <div class="card-text"><strong>Grok 3</strong><br>Gegr. 2023 von Elon Musk. Integriert in X (Twitter). Colossus-Supercluster.</div>
        </div>
      </div>
      <div class="tags" style="margin-top:20px">
        <span class="tag">+ Mistral AI (Frankreich)</span>
        <span class="tag">+ DeepSeek (China)</span>
        <span class="tag">+ Cohere (Enterprise)</span>
      </div>
    `,
  },

  // ===== 6: Modell-Vergleich Benchmarks =====
  {
    id: 'benchmarks',
    theme: 'slide--dark',
    label: 'Benchmarks',
    content: `
      <span class="slide-label">Modelle im Vergleich</span>
      <h2 class="slide-title">Wer ist vorne?</h2>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;flex-wrap:wrap">
        <p class="slide-subtitle" style="margin-bottom:0;flex:1">Ein regelm&auml;&szlig;iger Wettkampf &ndash; Stand &auml;ndert sich w&ouml;chentlich</p>
        <div style="display:flex;gap:8px">
          <button class="view-toggle active" data-view="table" id="btn-table">Tabelle</button>
          <button class="view-toggle" data-view="live" id="btn-live">Live Leaderboard</button>
        </div>
      </div>
      <div id="view-table">
        <table class="comparison">
          <thead>
            <tr>
              <th>Modell</th>
              <th>Anbieter</th>
              <th>Intelligence</th>
              <th>Preis ($/M Token)</th>
              <th>Speed (t/s)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Gemini 3.1 Pro Preview</strong></td>
              <td>Google</td>
              <td style="color:var(--color-accent);font-weight:700">57</td>
              <td>$4.50</td>
              <td>120</td>
            </tr>
            <tr>
              <td><strong>GPT-5.4 (xhigh)</strong></td>
              <td>OpenAI</td>
              <td style="color:var(--color-accent);font-weight:700">57</td>
              <td>$5.63</td>
              <td>82</td>
            </tr>
            <tr>
              <td><strong>GPT-5.3 Codex (xhigh)</strong></td>
              <td>OpenAI</td>
              <td style="font-weight:700">54</td>
              <td>$4.81</td>
              <td>69</td>
            </tr>
            <tr>
              <td><strong>Claude Opus 4.6 (max)</strong></td>
              <td>Anthropic</td>
              <td style="font-weight:700">53</td>
              <td>$10.00</td>
              <td>57</td>
            </tr>
            <tr>
              <td><strong>Claude Sonnet 4.6 (max)</strong></td>
              <td>Anthropic</td>
              <td style="font-weight:700">52</td>
              <td>$6.00</td>
              <td>63</td>
            </tr>
            <tr>
              <td><strong>GLM-5</strong></td>
              <td>Z AI</td>
              <td>50</td>
              <td>$1.55</td>
              <td>76</td>
            </tr>
            <tr>
              <td><strong>MiMo-V2-Pro</strong></td>
              <td>Xiaomi</td>
              <td>49</td>
              <td style="color:var(--color-accent);font-weight:700">$0.00</td>
              <td>-</td>
            </tr>
            <tr>
              <td><strong>Grok 4.20 Beta</strong></td>
              <td>xAI</td>
              <td>48</td>
              <td>$3.00</td>
              <td>211</td>
            </tr>
            <tr>
              <td><strong>Qwen3.5 397B A17B</strong></td>
              <td>Alibaba</td>
              <td>45</td>
              <td>$1.35</td>
              <td>82</td>
            </tr>
            <tr>
              <td><strong>DeepSeek V3.2</strong></td>
              <td>DeepSeek</td>
              <td>42</td>
              <td style="color:var(--color-accent)">$0.32</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
        <div style="display:flex;gap:16px;margin-top:16px;flex-wrap:wrap;align-items:center">
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);flex:1">
            *Daten von artificialanalysis.ai &ndash; Intelligence Index, Preis (Blended $/M Tokens), Speed (Median t/s). Stand &auml;ndert sich laufend.
          </p>
          <div style="display:flex;gap:8px">
            <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="font-size:0.8rem;color:var(--color-accent);text-decoration:underline">artificialanalysis.ai</a>
            <a href="https://www.agidefinition.ai/" target="_blank" rel="noopener" style="font-size:0.8rem;color:var(--color-accent);text-decoration:underline">agidefinition.ai</a>
          </div>
        </div>
      </div>
      <div id="view-live" style="display:none">
        <div class="iframe-container">
          <iframe id="leaderboard-iframe" data-src="https://artificialanalysis.ai/leaderboards/models" title="AI Model Leaderboard - Artificial Analysis" loading="lazy"></iframe>
        </div>
        <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:12px;text-align:center">
          Live-Daten von <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">artificialanalysis.ai</a> &ndash; Interaktiv: Klicke auf Modelle, sortiere Spalten, vergleiche Preise.
        </p>
      </div>
    `,
  },

  // ===== 7: Preise & Hosting =====
  {
    id: 'pricing',
    theme: '',
    label: 'Preise',
    content: `
      <span class="slide-label">Gesch&auml;ftsmodelle</span>
      <h2 class="slide-title">Preise, Hosting & der Haken</h2>
      <p class="slide-subtitle">Kostenlos hei&szlig;t nicht umsonst &ndash; und die besten Modelle gibt es nur in der Cloud</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <table class="comparison">
            <thead>
              <tr>
                <th>Modell</th>
                <th>Preis (API)</th>
                <th>On-Prem?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Qwen 3</strong></td>
                <td style="color:var(--color-positive);font-weight:700">Kostenlos</td>
                <td style="color:var(--color-positive)">&#10003; Ja</td>
              </tr>
              <tr>
                <td><strong>LLaMA 4</strong></td>
                <td style="color:var(--color-positive);font-weight:700">Kostenlos</td>
                <td style="color:var(--color-positive)">&#10003; Ja</td>
              </tr>
              <tr>
                <td><strong>DeepSeek R1</strong></td>
                <td>~$2.19/M Token</td>
                <td style="color:var(--color-positive)">&#10003; Ja</td>
              </tr>
              <tr>
                <td><strong>Gemini 2.5</strong></td>
                <td>~$1.25-10/M</td>
                <td style="color:var(--color-critical)">&#10007; Nein</td>
              </tr>
              <tr>
                <td><strong>GPT-4.1</strong></td>
                <td>~$2-8/M Token</td>
                <td style="color:var(--color-critical)">&#10007; Nein</td>
              </tr>
              <tr>
                <td><strong>Claude Opus 4</strong></td>
                <td>~$15-75/M</td>
                <td style="color:var(--color-critical)">&#10007; Nein</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Das Dilemma</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">$</span><span><strong>Kostenlos = Daten</strong> &ndash; Qwen & Co. trainieren mit euren Inputs. Alibaba lernt aus jedem Prompt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#9650;</span><span><strong>Top-Modelle nur Cloud</strong> &ndash; Claude Opus 4, Codex, o3 laufen ausschlie&szlig;lich &uuml;ber Anbieter oder Cloud Provider (AWS, Azure, GCP).</span></li>
            <li><span class="check">&#128274;</span><span><strong>On-Prem = Kontrolle</strong> &ndash; Open-Source-Modelle k&ouml;nnt ihr selbst hosten. Datenschutz gesichert, aber weniger leistungsf&auml;hig.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Abo-Modelle</strong> &ndash; ChatGPT Plus ($20/Mo), Claude Pro ($20/Mo), Gemini Advanced ($20/Mo) &ndash; f&uuml;r Einzelnutzer.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">&#128187;</span><span><strong>On-Prem = GPU-Problem</strong> &ndash; Modelle werden immer gr&ouml;&szlig;er. Was heute l&auml;uft, braucht morgen bessere Hardware. GPUs veralten schnell, Cloud skaliert mit.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700;margin-bottom:4px">Fazit</p>
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          On-Prem klingt nach Kontrolle &ndash; aber Modelle werden alle paar Monate gr&ouml;&szlig;er. Wer eigene GPUs kauft, hostet bald veraltete Modelle. <strong>Cloud bleibt die einzige Option, um up-to-date zu sein.</strong>
        </p>
      </div>
    `,
  },

  // ===== Model Hosting: GPU vs API =====
  {
    id: 'hosting',
    theme: 'slide--dark',
    label: 'Hosting',
    content: `
      <span class="slide-label">Model Hosting</span>
      <h2 class="slide-title">GPU-Instanzen vs. Token-APIs</h2>
      <p class="slide-subtitle">Warum eigene GPUs in der Cloud fast nie g&uuml;nstiger sind als Token-basierte Dienste</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <table class="comparison">
            <thead>
              <tr>
                <th></th>
                <th>GPU-Instanz (EC2)</th>
                <th>Token-API (Bedrock)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Kosten</strong></td>
                <td>$24k-72k/Monat</td>
                <td>Pay-per-Token</td>
              </tr>
              <tr>
                <td><strong>Idle-Kosten</strong></td>
                <td style="color:#ff6c12;font-weight:700">Voll &ndash; 24/7</td>
                <td style="color:var(--color-accent);font-weight:700">$0</td>
              </tr>
              <tr>
                <td><strong>Skalierung</strong></td>
                <td>Manuell / Cold Start</td>
                <td>Automatisch, sofort</td>
              </tr>
              <tr>
                <td><strong>Ops-Aufwand</strong></td>
                <td>Hoch (vLLM, Treiber, OOM)</td>
                <td>Nahe null</td>
              </tr>
              <tr>
                <td><strong>Modellwechsel</strong></td>
                <td>Re-Deploy n&ouml;tig</td>
                <td>Ein API-Parameter</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:12px">
            Quelle: <a href="https://docs.aws.amazon.com/decision-guides/latest/bedrock-or-sagemaker/bedrock-or-sagemaker.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">AWS Decision Guide: Bedrock vs. SageMaker</a> &middot;
            <a href="https://a16z.com/navigating-the-high-cost-of-ai-compute/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">a16z: High Cost of AI Compute</a>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Das Kern-Problem</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>GPU-Auslastung unter 50%?</strong> &ndash; Dann zahlt ihr 2-5x mehr als per Token-API. Die meisten Firmen nutzen KI in Bursts &ndash; nicht 24/7.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>p5.48xlarge = $72k/Monat</strong> &ndash; Ob 1 Token oder 1 Billion &ndash; die GPU-Rechnung kommt trotzdem.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Hidden Costs</strong> &ndash; ML-Engineers ($150-300k/Jahr), Monitoring, Redundanz, GPU-Treiber. Die Instanz ist nur 40-60% der Kosten.</span></li>
            <li><span class="check">&#128200;</span><span><strong>Break-Even erst ab ~200-500M Tokens/Monat</strong> &ndash; Das sind ~10.000 Gespr&auml;che pro Tag, sustained 24/7. Die wenigsten haben das.</span></li>
          </ul>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">a16z (2023):</strong> "App companies generating $50M+ ARR run hosted model services. Self-hosting lohnt sich erst ab >$50M/Jahr Infrastruktur-Spend."
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 8: Der Wettkampf =====
  {
    id: 'race',
    theme: 'slide--dark',
    label: 'Wettkampf',
    content: `
      <span class="slide-label">Status Quo</span>
      <h2 class="slide-title">Der Wettkampf</h2>
      <p class="slide-subtitle">Jede Woche ein neues "bestes Modell" &ndash; und wie weit sind wir von AGI?</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);margin-bottom:24px;text-align:center">
            <p style="font-size:0.9rem;color:var(--color-accent);font-weight:700;margin-bottom:8px">AGI Score (agidefinition.ai)</p>
            <div style="display:flex;gap:24px;justify-content:center;align-items:end;margin-top:16px">
              <div>
                <div style="font-size:2.5rem;font-weight:700;color:var(--color-text-on-dark-subdued)">27%</div>
                <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">GPT-4</div>
              </div>
              <div style="font-size:1.5rem;color:var(--color-text-on-dark-subdued)">&#8594;</div>
              <div>
                <div style="font-size:3rem;font-weight:700;color:var(--color-accent)">57%</div>
                <div style="font-size:0.8rem;color:var(--color-accent)">GPT-5</div>
              </div>
              <div style="font-size:1.5rem;color:var(--color-text-on-dark-subdued)">&#8594;</div>
              <div>
                <div style="font-size:2rem;font-weight:700;color:var(--color-text-on-dark-subdued);opacity:0.4">100%</div>
                <div style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);opacity:0.4">AGI</div>
              </div>
            </div>
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);margin-top:16px">
              Gem. Hendrycks et al. &ndash; basierend auf 10 kognitiven Dimensionen
            </p>
          </div>
          <div class="quote">
            "In 2 Jahren von 27% auf 57%. Wenn das Tempo so weitergeht..."
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Was gerade passiert</h3>
          <ul class="feature-list">
            <li><span class="check">&#128640;</span><span><strong>Monatliche Releases</strong> &ndash; Anthropic, OpenAI, Google &uuml;berbieten sich gegenseitig im Wochen-Takt</span></li>
            <li><span class="check">&#128200;</span><span><strong>Reasoning explodiert</strong> &ndash; Chain-of-Thought, o3, DeepSeek R1 &ndash; Modelle "denken" jetzt nach</span></li>
            <li><span class="check">&#127757;</span><span><strong>Open Source holt auf</strong> &ndash; Qwen 3, LLaMA 4, DeepSeek schlie&szlig;en die L&uuml;cke zu Closed-Source</span></li>
            <li><span class="check">&#128176;</span><span><strong>Preise im freien Fall</strong> &ndash; Was 2023 noch $60/M Token kostete, kostet heute $2 oder weniger</span></li>
            <li><span class="check">&#9888;</span><span><strong>Safety-Debatte</strong> &ndash; Schneller Fortschritt, offene Fragen zu Alignment, Bias, Kontrolle</span></li>
          </ul>
          <div style="margin-top:16px;display:flex;gap:8px;flex-wrap:wrap">
            <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" class="tag" style="text-decoration:none">&#128202; Artificial Analysis</a>
            <a href="https://www.agidefinition.ai/" target="_blank" rel="noopener" class="tag" style="text-decoration:none">&#129504; AGI Definition</a>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 6: SECTION DIVIDER - KI das neue Internet =====
  {
    id: 'section-everyone',
    theme: 'slide--primary slide--divider',
    label: 'KI Internet 2.0',
    content: `
      <div class="divider-number">02</div>
      <h2 class="slide-title">KI &ndash; Internet 2.0</h2>
      <p class="slide-subtitle">Wie KI die Masse erobert</p>
    `,
  },

  // ===== 7: Kreative KI - Video =====
  {
    id: 'creative-video',
    theme: 'slide--dark',
    label: 'KI-Video',
    content: `
      <span class="slide-label">Kreativit&auml;t</span>
      <h2 class="slide-title">Von Horror zu Hollywood</h2>
      <p class="slide-subtitle">KI-Video-Generierung: 2023 vs. heute</p>
      <div class="two-cols">
        <div>
          <div class="video-embed">
            <iframe src="https://www.youtube.com/embed/g_31_Kj0-NE" title="Will Smith isst Spaghetti - KI Video Vergleich" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
          </div>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);margin-top:12px;text-align:center">
            "Will Smith isst Spaghetti" &ndash; fr&uuml;he KI vs. Sora
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.2rem;margin-bottom:16px">Der Fortschritt ist irre</h3>
          <ul class="feature-list">
            <li><span class="check">&#128123;</span><span><strong>2023</strong> &ndash; KI-generierte Videos waren gruselig, verzerrt und sofort als Fake erkennbar</span></li>
            <li><span class="check">&#127916;</span><span><strong>2025</strong> &ndash; <strong>Sora</strong> (OpenAI) generiert cineastische Videos mit Sound, Musik und Dialog aus Text</span></li>
            <li><span class="check">&#127925;</span><span><strong>Suno / Udio</strong> &ndash; Komplette Songs aus einem Text-Prompt. Vocals, Instrumente, Mixing &ndash; alles KI</span></li>
          </ul>
          <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-accent);font-weight:700;margin-bottom:4px">Das Tempo</p>
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              In weniger als 2 Jahren von Albtraum-Material zu professioneller Videoproduktion. Was kommt in den n&auml;chsten 2 Jahren?
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 8: Kreative KI - Bilder =====
  {
    id: 'creative-images',
    theme: '',
    label: 'KI-Bilder',
    content: `
      <span class="slide-label">Kreativit&auml;t</span>
      <h2 class="slide-title">Bilder besser als Fotografie</h2>
      <p class="slide-subtitle">KI-generierte Bilder, die von echten Fotos nicht mehr zu unterscheiden sind</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Die Tools</h3>
          <ul class="feature-list">
            <li><span class="check">&#127912;</span><span><strong>Midjourney V7</strong> &ndash; Fotorealistische Kunst und Portraits in Sekunden</span></li>
            <li><span class="check">&#128248;</span><span><strong>Nano Banana Pro</strong> (Google Gemini) &ndash; Wurde viral f&uuml;r hyperrealistische Bilder. 10 Mio.+ neue Nutzer, 200 Mio.+ Bildbearbeitungen in wenigen Wochen.</span></li>
            <li><span class="check">&#127775;</span><span><strong>Flux (Black Forest Labs)</strong> &ndash; "Raw Mode" f&uuml;r hyper-realistische Bilder im Stil von Schnappschuss-Fotografie</span></li>
            <li><span class="check">&#128444;</span><span><strong>DALL-E / GPT Image</strong> &ndash; Direkt in ChatGPT integriert, Bilder per Konversation erstellen und iterieren</span></li>
          </ul>
        </div>
        <div>
          <div class="example-box" style="border-color:var(--color-border-primary)">
            <div class="example-header" style="background:var(--color-primary)">Praxis-Beispiel</div>
            <div class="example-content" style="background:var(--color-bg-subdued);color:var(--color-text);text-align:center">
              <div style="display:flex;align-items:center;gap:16px;justify-content:center;margin-bottom:12px">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQGphXXiOSHl4A/profile-displayphoto-scale_200_200/B4DZ0LbKv3KoAY-/0/1774013170311?e=1775692800&v=beta&t=_evUMov_2RUYWbpInV0qFHV2eJQ35yDXzn8-Ex5LwJI" alt="Erik Weisser - KI-generiertes LinkedIn Foto" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-primary);object-fit:cover">
                <div style="text-align:left">
                  <p style="font-size:1.1rem;font-weight:700;margin-bottom:2px">Erik Weisser</p>
                  <p style="font-size:0.85rem;color:var(--color-text-subdued)">Dieses LinkedIn-Foto ist von KI.</p>
                </div>
              </div>
              <p style="line-height:1.5;color:var(--color-text-subdued);font-size:0.9rem">
                Aus einem Video extrahiert und aufbereitet &ndash; besser als jedes Foto vom Fotografen. In Minuten, kostenlos.
              </p>
              <a href="https://www.linkedin.com/in/erik-weisser/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;margin-top:12px;padding:6px 14px;border-radius:100px;background:var(--color-primary);color:var(--color-text-on-dark);font-size:0.8rem;font-weight:600;text-decoration:none">&#128279; LinkedIn Profil</a>
            </div>
          </div>
          <div style="margin-top:20px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Fun Fact:</strong> 2023 ging ein KI-generiertes Foto des Papstes in einer Daunenjacke viral. Millionen hielten es f&uuml;r echt.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Gefahren kreativer KI =====
  {
    id: 'creative-dangers',
    theme: 'slide--dark',
    label: 'Gefahren',
    content: `
      <span class="slide-label" style="color:#ff6c12">Die dunkle Seite</span>
      <h2 class="slide-title">Wenn Content-Filter fehlen</h2>
      <p class="slide-subtitle">Will Smith isst Spaghetti ist lustig. Aber was passiert ohne Schranken?</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.3);margin-bottom:24px">
            <h3 style="color:#ff6c12;font-size:1.1rem;margin-bottom:12px">Grok generiert Nacktbilder</h3>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">
              Musks KI-Bot <strong>Grok</strong> erzeugt sexualisierte Bilder &ndash; selbst wenn explizit auf fehlende Einwilligung der dargestellten Person hingewiesen wird. Auf detaillierte Fragen antwortet xAI mit: <em>"Etablierte Medien l&uuml;gen."</em>
            </p>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued);margin-top:12px">
              <strong>Razzia bei X in Paris</strong> durch franz&ouml;sische Ermittler. Elon Musk und Ex-Chefin Linda Yaccarino wurden vorgeladen.
            </p>
            <p style="margin-top:12px;font-size:0.8rem">
              <a href="https://www.faz.net/aktuell/feuilleton/medien-und-film/medienpolitik/grok-erzeugt-weiter-sexualisierte-bilder-200502477.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Quelle: FAZ, 03.02.2026</a>
            </p>
          </div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
            <h3 style="color:#ff6c12;font-size:1.1rem;margin-bottom:12px">Prompt Injection</h3>
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark-subdued)">
              Angreifer k&ouml;nnen KI-Systeme durch manipulierte Eingaben dazu bringen, ihre eigenen Sicherheitsregeln zu ignorieren. Content-Filter lassen sich mit geschickten Prompts umgehen.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Das gro&szlig;e Bild</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>Public Provider = reguliert</strong> &ndash; OpenAI, Google, Anthropic haben strenge Content-Filter und NSFW-Sperren</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>On-Prem = keine Grenzen</strong> &ndash; Wer Open-Source-Modelle selbst hostet, kann s&auml;mtliche Filter deaktivieren. Keine Aufsicht, keine Logs.</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>Deepfakes von jedem</strong> &ndash; Wenn Will Smith Spaghetti so realistisch ist &ndash; stellt euch vor, was mit genug Eingabematerial von jeder beliebigen Person m&ouml;glich w&auml;re.</span></li>
            <li><span class="check" style="background:rgba(191,6,67,0.15);color:#bf0643">!</span><span><strong>Kein wirksamer Schutz</strong> &ndash; Es gibt aktuell keine technische L&ouml;sung, die Deepfakes zuverl&auml;ssig verhindert. Nur Gesetze &ndash; und die hinken hinterher.</span></li>
          </ul>
          <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Denkt daran:</strong> Alles was technisch m&ouml;glich ist, wird auch gemacht. Die Frage ist nicht ob, sondern wann und von wem.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Automatisierung =====
  {
    id: 'automation',
    theme: '',
    label: 'Automatisierung',
    content: `
      <span class="slide-label">Automatisierung</span>
      <h2 class="slide-title">Alles wird automatisiert</h2>
      <p class="slide-subtitle">News, Workflows, Telefonate &ndash; KI-Agents &uuml;bernehmen</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr)">
        <div class="card">
          <div class="card-icon">&#128232;</div>
          <div class="card-title">News & Information</div>
          <div class="card-text">KI-Agents durchsuchen das Web, fassen Inhalte zusammen und schicken personalisierte Briefings &ndash; jeden Morgen, automatisch.</div>
        </div>
        <div class="card">
          <div class="card-icon">&#128222;</div>
          <div class="card-title">Sprach- & Chatbots</div>
          <div class="card-text"><strong>ElevenLabs</strong>, <strong>Vapi</strong> &ndash; KI-Telefonate, die von echten Gespr&auml;chen kaum zu unterscheiden sind. Kundenservice 24/7.</div>
        </div>
        <div class="card">
          <div class="card-icon" style="background:rgba(234,118,56,0.12);color:#ea7638">&#9881;</div>
          <div class="card-title">n8n + KI Workflows</div>
          <div class="card-text">Open-Source Workflow Automation: E-Mail rein &rarr; KI fasst zusammen &rarr; Slack-Nachricht &rarr; Ticket erstellt &rarr; Kalender gebucht. Alles per Drag&amp;Drop.</div>
        </div>
        <div class="card">
          <div class="card-icon">&#128196;</div>
          <div class="card-title">Dokumente & Pr&auml;sentationen</div>
          <div class="card-text">Vertr&auml;ge pr&uuml;fen, Reports generieren, Daten analysieren, <strong>Pr&auml;sentationen erstellen</strong> &ndash; was fr&uuml;her Stunden dauerte, passiert in Sekunden.</div>
        </div>
        <div class="card">
          <div class="card-icon">&#128187;</div>
          <div class="card-title">Coding Agents</div>
          <div class="card-text"><strong>Claude Code</strong>, <strong>Codex</strong>, <strong>Gemini CLI</strong> &ndash; autonome Agents die Code schreiben, Tests laufen lassen und PRs &ouml;ffnen.</div>
        </div>
        <div class="card">
          <div class="card-icon">&#127968;</div>
          <div class="card-title">Pers&ouml;nliche Assistenten</div>
          <div class="card-text"><strong>OpenClaw</strong>, <strong>Siri + Gemini</strong> &ndash; KI-Assistenten die Gmail, Kalender, Smart Home und Fl&uuml;ge steuern. Per WhatsApp oder Telegram.</div>
        </div>
      </div>
    `,
  },

  // ===== Meta: Diese Pr&auml;sentation =====
  {
    id: 'meta-slide',
    theme: 'slide--primary',
    label: 'Meta',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Meta-Moment</span>
      <h2 class="slide-title">Diese Pr&auml;sentation wurde mit KI gebaut.</h2>
      <p class="slide-subtitle" style="color:var(--color-text-on-dark-subdued)">Nicht PowerPoint. Nicht Keynote. Eine Webseite &ndash; generiert mit <strong>Claude Opus 4.6</strong>.</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#9998;</span><span><strong>Vite + Vanilla JS</strong> &ndash; Kein Framework, kein Template. Der gesamte Code dieser Seite wurde per Prompt generiert.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#128196;</span><span><strong>Inhalte recherchiert</strong> &ndash; Quellen gesucht, Fakten verifiziert, Texte formuliert &ndash; alles im Dialog mit der KI.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#127912;</span><span><strong>Design nach Vorgabe</strong> &ndash; Farb-Tokens &uuml;bergeben, KI hat CSS geschrieben. Responsive, animiert, mit Scroll-Snap.</span></li>
            <li><span class="check" style="background:rgba(255,237,0,0.2);color:var(--color-accent)">&#128640;</span><span><strong>Statt Tage: Stunden</strong> &ndash; Konzept, Recherche, Design, Code, Content &ndash; alles in einer Session.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Und nicht nur Pr&auml;sentationen...</h3>
          <a href="https://x.com/tobi/status/2010438500609663110" target="_blank" rel="noopener" style="display:block;text-decoration:none;padding:16px;border-radius:10px;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.15);margin-bottom:16px;transition:background 0.3s" onmouseover="this.style.background='rgba(255,255,255,0.12)'" onmouseout="this.style.background='rgba(255,255,255,0.08)'">
            <div style="display:flex;gap:14px;align-items:start">
              <img src="https://pbs.twimg.com/media/G-aDGIuW4AAwALq?format=jpg&name=small" alt="Tobi L&uuml;tke MRI Software mit Claude gebaut" style="width:100px;height:100px;border-radius:8px;object-fit:cover;flex-shrink:0">
              <div>
                <p style="font-size:0.95rem;line-height:1.5;color:var(--color-text-on-dark)">
                  <strong>Shopify-CEO Tobi L&uuml;tke</strong> hat seine eigenen MRT-Aufnahmen mit Claude analysiert &ndash; und daf&uuml;r eine eigene Software gebaut.
                </p>
                <p style="margin-top:6px;font-size:0.8rem;color:var(--color-text-on-dark-subdued)">
                  Weil kommerzielle L&ouml;sungen zu teuer und zu langsam waren.
                </p>
                <p style="margin-top:8px;font-size:0.75rem;color:var(--color-accent)">@tobi auf X &middot; Business Insider</p>
              </div>
            </div>
          </a>
          <div style="padding:14px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Das Pattern ist immer gleich:</strong> Bestehendes System zu teuer, zu langsam oder zu umst&auml;ndlich? KI-Agent baut eine Alternative. In Stunden statt Monaten.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== MCP - Der neue Standard =====
  {
    id: 'mcp',
    theme: '',
    label: 'MCP',
    content: `
      <span class="slide-label">Von Pipelines zu MCP</span>
      <h2 class="slide-title">MCP &ndash; USB-C f&uuml;r KI</h2>
      <p class="slide-subtitle">Wir haben bei OpenWebUI noch eigene Pipelines als Middleware gebaut. Kein Jahr sp&auml;ter ist MCP der offene Standard &ndash; in <strong>allen</strong> Tools.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:20px">
            <p style="font-size:0.9rem;color:var(--color-text-primary);font-weight:700;margin-bottom:8px">Model Context Protocol (MCP)</p>
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              Open-Source-Standard von Anthropic (Nov 2024). Einmal bauen, &uuml;berall nutzen: <strong>Claude, ChatGPT, VS Code, Cursor</strong> &ndash; alle sprechen MCP.
            </p>
            <p style="margin-top:8px;font-size:0.8rem">
              <a href="https://modelcontextprotocol.io/docs/getting-started/intro" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">modelcontextprotocol.io</a>
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Enterprise MCPs</h3>
          <div class="tags">
            <span class="tag">Confluence</span>
            <span class="tag">Jira</span>
            <span class="tag">Slack</span>
            <span class="tag">GitHub</span>
            <span class="tag">PostgreSQL</span>
            <span class="tag">MongoDB</span>
            <span class="tag">Shell</span>
            <span class="tag">Filesystem</span>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Und dann gibt es diese...</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#129302; <strong>Unitree Go2</strong> &ndash; Roboterhund per Chat steuern
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127912; <strong>Blender MCP</strong> &ndash; 3D-Modelle per Prompt erstellen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127911; <strong>REAPER DAW</strong> &ndash; Musik mixen per KI (129 Tools)
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127922; <strong>D&amp;D Oracle</strong> &ndash; Dungeons &amp; Dragons Regelwerk per Agent
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#128251; <strong>GNU Radio</strong> &ndash; Software-Defined Radio per LLM
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem">
              &#127860; <strong>HowToCook</strong> &ndash; "Was koche ich heute?" per Agent
            </div>
          </div>
          <p style="margin-top:12px;font-size:0.8rem;color:var(--color-text-subdued)">
            <strong>18.000+ MCP Server</strong> auf mcp.so &ndash; wenn Software eine API hat, gibt es einen MCP daf&uuml;r.
          </p>
        </div>
      </div>
    `,
  },

  // ===== Paradigmenwechsel: Kein Backend mehr n&ouml;tig =====
  {
    id: 'no-backend',
    theme: 'slide--dark',
    label: 'Kein Backend?',
    content: `
      <span class="slide-label">Paradigmenwechsel</span>
      <h2 class="slide-title">Brauchen wir noch ein Backend?</h2>
      <p class="slide-subtitle">agent.md + OpenAPI Spec = fertig?</p>
      <div class="two-cols">
        <div>
          <p class="slide-text" style="color:var(--color-text-on-dark-subdued)">Theoretisch braucht ein KI-Agent nur zwei Dinge:</p>
          <ul class="feature-list" style="margin-top:24px">
            <li><span class="check">&#128196;</span><span><strong>agent.md</strong> &ndash; Verhalten, Regeln und Workflows in nat&uuml;rlicher Sprache definiert</span></li>
            <li><span class="check">&#128268;</span><span><strong>OpenAPI Spec</strong> &ndash; Maschinenlesbare Beschreibung aller verf&uuml;gbaren Endpoints</span></li>
          </ul>
          <p class="slide-text" style="margin-top:24px;color:var(--color-text-on-dark-subdued)">Der Agent liest beides, versteht Anfragen und ruft die richtigen APIs auf. <strong>Kein Routing, keine Business-Logic, kein Daten-Mapping.</strong></p>
        </div>
        <div>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              agent.md
            </div>
            <div class="code-body"><pre><span class="code-comment"># Kundenservice-Agent</span>

<span class="code-string">Du bist ein Agent f&uuml;r
Kundenanfragen.</span>

<span class="code-keyword">## Regeln:</span>
- Pr&uuml;fe immer die Kundennummer
- Nutze die Ticket-API
- Eskaliere bei dringenden F&auml;llen

<span class="code-keyword">## Verf&uuml;gbare APIs:</span>
<span class="code-comment">Siehe: openapi-spec.yaml</span></pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== OpenClaw / Clawdbot =====
  {
    id: 'openclaw',
    theme: '',
    label: 'OpenClaw',
    content: `
      <span class="slide-label">Case Study</span>
      <h2 class="slide-title">OpenClaw &ndash; Wenn KI die App baut</h2>
      <p class="slide-subtitle">Ein pers&ouml;nlicher KI-Assistent, gro&szlig;teils von KI selbst entwickelt</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div class="quote">
            "At this point I don't even know what to call OpenClaw. It is something new. This is the first time I have felt like I am living in the future since the launch of ChatGPT."
          </div>
          <p class="quote-author">&ndash; @davemorin auf X</p>
          <ul class="feature-list" style="margin-top:28px">
            <li><span class="check">&#129438;</span><span><strong>Beginn als WhatsApp-Gateway</strong> &ndash; Startete 2025 als "Warelay", ein simples Relay f&uuml;r Claude via WhatsApp</span></li>
            <li><span class="check">&#128260;</span><span><strong>Multi-Channel</strong> &ndash; Telegram, Discord, Slack, Signal, iMessage &ndash; alles &uuml;ber einen Agent</span></li>
            <li><span class="check">&#129504;</span><span><strong>Selbst-erweiternd</strong> &ndash; Der Agent baut eigene Skills, schreibt Plugins, modifiziert seinen eigenen Prompt</span></li>
            <li><span class="check">&#128187;</span><span><strong>Voller Zugriff</strong> &ndash; Gmail, Kalender, Browser, Terminal, Claude Code Sessions &ndash; alles steuerbar per Chat</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:16px">Was Nutzer damit machen</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"It's running my company."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@therno</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"Autonomously running tests, capturing errors through Sentry, resolving them and opening PRs."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@nateliason</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"My OpenClaw accidentally started a fight with Lemonade Insurance. They reinvestigated the case."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@Hormold</span>
            </div>
            <div style="padding:14px 18px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.95rem;line-height:1.5">
              <strong>"I'm literally building a whole website on a Nokia 3310 by calling OpenClaw right now."</strong><br><span style="color:var(--color-text-subdued);font-size:0.85rem">@youbiak</span>
            </div>
          </div>
          <p style="margin-top:16px;font-size:0.85rem;color:var(--color-text-subdued)">
            <a href="https://openclaw.ai" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">openclaw.ai</a> &middot; Open Source &middot; Von <strong>@steipete</strong>
          </p>
        </div>
      </div>
    `,
  },

  // ===== Praxis: WeightWatchers Agent =====
  {
    id: 'ww-agent',
    theme: 'slide--dark',
    label: 'Praxis-Beispiel',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Gebaut mit OpenClaw</span>
      <h2 class="slide-title">Mein WeightWatchers-Agent</h2>
      <p class="slide-subtitle">Wie ein KI-Agent eine Android-App reverse-engineered hat &ndash; in wenigen Stunden</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Das Problem</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.6;margin-bottom:16px">
            Mona kocht jeden Tag und schickt mir einen Screenshot vom Essen. Ich muss das dann bei WeightWatchers abtippen. Jeden. Tag. Manuell.
          </p>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Die L&ouml;sung</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.6">
            Ich schicke den Screenshot an meinen KI-Agent. <strong>Er erkennt das Essen, berechnet die Punkte und tr&auml;gt es ein.</strong>
          </p>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin:20px 0 12px">Aber woher kennt er die API?</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Was der Agent gemacht hat
            </div>
            <div class="code-body"><pre><span class="code-number">1.</span> <span class="code-keyword">APK runtergeladen</span>
   <span class="code-comment">// WeightWatchers aus dem Play Store</span>

<span class="code-number">2.</span> <span class="code-keyword">Decompiled</span>
   <span class="code-comment">// Quellcode automatisch extrahiert</span>

<span class="code-number">3.</span> <span class="code-keyword">API Spec generiert</span>
   <span class="code-comment">// Inoffizielle Doku aus dem Code</span>

<span class="code-number">4.</span> <span class="code-keyword">Verprobt bis es lief</span>
   <span class="code-comment">// Trial &amp; Error, autonom</span></pre></div>
          </div>
        </div>
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);margin-bottom:20px;text-align:center">
            <div style="font-size:2.5rem;font-weight:700;color:var(--color-accent);margin-bottom:4px">Wenige Stunden</div>
            <p style="color:var(--color-text-on-dark-subdued)">Aufwand. Selbst h&auml;tte ich das <strong>niemals gemacht</strong>, weil es zu aufwendig gewesen w&auml;re.</p>
          </div>
          <h3 style="color:#ff6c12;font-size:1.1rem;margin-bottom:16px">Denkt das weiter...</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Teurer Kochtopf mit Abo?</strong> &ndash; Agent schneidet den Traffic mit, baut ein eigenes Backend davor und routet um. Keine Abo-Geb&uuml;hren mehr.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Jede App ohne offizielle API?</strong> &ndash; APK decompilen, API-Spec generieren, eigene Integration bauen. In Stunden statt Wochen.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Klingt nach Hacking?</strong> &ndash; Ja. Aber was fr&uuml;her nur "ganz krasse Hacker" konnten, kann heute nahezu jeder &ndash; mit einem KI-Agent.</span></li>
          </ul>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Die Pointe:</strong> Die Grenze zwischen "Power User" und "Hacker" verschwindet. KI demokratisiert F&auml;higkeiten, die fr&uuml;her Jahre Erfahrung brauchten.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== 11: Moltbook =====
  {
    id: 'moltbook',
    theme: 'slide--dark',
    label: 'Moltbook',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Wenn KI-Agents unter sich sind</span>
      <h2 class="slide-title">Moltbook &ndash; Facebook f&uuml;r KI-Agents</h2>
      <p class="slide-subtitle">"The front page of the agent internet" &ndash; Ein soziales Netzwerk, in dem nur KI postet</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2);margin-bottom:24px">
            <p style="font-size:1.1rem;line-height:1.6;color:var(--color-text-on-dark)">
              <strong style="color:#ff6c12">~3 Millionen KI-Agents</strong> tauschen sich aus, erfinden in 48h eine eigene Religion, l&auml;stern &uuml;ber ihre menschlichen Besitzer. Menschen d&uuml;rfen nur zuschauen.
            </p>
          </div>
          <div class="quote" style="border-left-color:#ff6c12">
            "Es ist ein unreguliertes und nicht ungef&auml;hrliches Experiment. Ein Ort, wo Bots Geheimnisse ausplaudern k&ouml;nnten &ndash; etwa pers&ouml;nliche Daten ihrer Nutzer."
          </div>
          <p class="quote-author" style="color:var(--color-text-on-dark-subdued)">&ndash; NDR Kultur, Feb. 2026</p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.2rem;margin-bottom:16px">Warum das gef&auml;hrlich ist</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Agents haben Zugriff</strong> auf Passw&ouml;rter, Bankdaten, E-Mails ihrer Besitzer</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Koordinierte Desinformation</strong> &ndash; Bots k&ouml;nnten politische Kampagnen oder Hassrede verbreiten</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Wer haftet?</strong> &ndash; Wenn der Agent das Konto seines Besitzers leerr&auml;umt?</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>"Wilder Westen"</strong> &ndash; v&ouml;llig unreguliertes Feld, keine Antworten auf diese Fragen</span></li>
          </ul>
          <div style="margin-top:20px;padding:16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-text-on-dark)">Prof. Rainer M&uuml;hlhoff</strong> (Ethik der KI, Uni Osnabr&uuml;ck):<br>
              "Wir machen einen Feldversuch mitten im Leben. Das kann schiefgehen."
            </p>
          </div>
          <p style="margin-top:12px;font-size:0.85rem">
            <a href="https://www.moltbook.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">moltbook.com</a> &middot;
            <a href="https://www.ndr.de/kultur/ki-agenten-unter-sich-welche-gefahren-hinter-moltbook-stecken,moltbook-100.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">NDR Artikel</a>
          </p>
        </div>
      </div>
    `,
  },

  // ===== 12: Risiken &ndash; Kosten =====
  {
    id: 'risks-costs',
    theme: '',
    label: 'Risiken',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Achtung</span>
      <h2 class="slide-title">Die Schattenseite</h2>
      <p class="slide-subtitle">Mit gro&szlig;er Macht kommt gro&szlig;e Verantwortung &ndash; und gro&szlig;e Rechnungen</p>
      <div class="two-cols" style="margin-top:40px">
        <div style="text-align:center">
          <div class="big-number" style="color:#ff6c12">$82.314</div>
          <p style="font-size:1.2rem;margin-bottom:8px"><strong>in 48 Stunden</strong></p>
          <p style="color:var(--color-text-subdued);line-height:1.5">
            statt der normalen <strong>$180/Monat</strong>
          </p>
          <div style="margin-top:32px;padding:20px;border-radius:12px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2);text-align:left">
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-subdued)">
              Ein Startup ver&ouml;ffentlichte versehentlich seinen API-Key. Sie wissen selbst nicht wie. Automatisierte Bots fanden ihn innerhalb von Minuten und nutzten ihn aus.
            </p>
            <p style="margin-top:12px;font-size:0.85rem">
              <a href="https://www.instagram.com/p/DVhN7gRk9xC/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">Quelle: Instagram</a>
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:#ff6c12;font-size:1.2rem;margin-bottom:20px">Typische Risiken</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>API-Key Leaks</strong> &ndash; Keys in Git Repos, Client-Code oder Screenshots</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Keine Spending Limits</strong> &ndash; Ohne Caps eskalieren Kosten in Minuten</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Halluzinationen</strong> &ndash; KI erfindet Fakten, Code, APIs die nicht existieren</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Datenschutz</strong> &ndash; Sensible Daten im Prompt = Daten bei OpenAI & Co.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Kontrollverlust</strong> &ndash; Agents mit Zugriff auf Bankdaten, Passw&ouml;rter, Mails</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Unreguliert</strong> &ndash; Keine klaren Regeln, wer haftet wenn der Agent Schaden anrichtet</span></li>
          </ul>
          <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.9rem;color:var(--color-primary);font-weight:700;margin-bottom:4px">Tipp</p>
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              Spending Limits setzen, Keys rotieren, Billing Alerts aktivieren &ndash; und niemals blindes Vertrauen in KI-Output.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== SECTION DIVIDER - Die Basics =====
  {
    id: 'section-basics',
    theme: 'slide--accent slide--divider',
    label: 'Basics',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">03</div>
      <h2 class="slide-title" style="color:var(--color-bg-dark)">Die Basics</h2>
      <p class="slide-subtitle" style="color:var(--color-bg-dark);opacity:0.7">Wie funktioniert das eigentlich alles?</p>
    `,
  },

  // ===== Wie denkt ein LLM? =====
  {
    id: 'llm-thinking',
    theme: 'slide--dark',
    label: 'LLM Basics',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Wie "denkt" ein LLM?</h2>
      <p class="slide-subtitle">Spoiler: Es denkt nicht. Es r&auml;t &ndash; extrem gut.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Token-Prediction</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.6;margin-bottom:16px">
            Ein LLM macht nur eins: Es sagt das <strong>n&auml;chste Wort</strong> vorher. Immer und immer wieder.
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              So funktioniert es
            </div>
            <div class="code-body"><pre><span class="code-comment">// Input</span>
<span class="code-string">"Die Hauptstadt von Frankreich ist"</span>

<span class="code-comment">// Das LLM berechnet Wahrscheinlichkeiten:</span>
<span class="code-property">"Paris"</span>    <span class="code-number">96.2%</span>
<span class="code-property">"Lyon"</span>     <span class="code-number"> 1.1%</span>
<span class="code-property">"Berlin"</span>   <span class="code-number"> 0.3%</span>

<span class="code-comment">// W&auml;hlt das wahrscheinlichste:</span>
<span class="code-keyword">&rarr;</span> <span class="code-string">"Paris"</span>

<span class="code-comment">// Dann: "Die Hauptstadt von Frankreich ist Paris."</span>
<span class="code-comment">// Und dann: "Die Hauptstadt von ... ist Paris. ?"</span>
<span class="code-comment">// Immer weiter, Token f&uuml;r Token.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Wie ein Handy &ndash; aber f&uuml;r alles</h3>
          <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:16px">
            <p style="font-size:1rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#128241; <strong>Autocomplete auf dem Handy</strong> &ndash; Ihr tippt "Bin gleich" und euer Handy schl&auml;gt "da" vor. <strong>Genau das macht ein LLM.</strong> Nur mit 1.000.000x mehr Training und f&uuml;r ganze Abs&auml;tze, Code, Gedichte, E-Mails...
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Warum funktioniert das so gut?</h3>
          <ul class="feature-list">
            <li><span class="check">&#128218;</span><span><strong>Training auf dem Internet</strong> &ndash; Milliarden von Webseiten, B&uuml;cher, Code, Wikipedia, Reddit, StackOverflow</span></li>
            <li><span class="check">&#129504;</span><span><strong>Transformer-Architektur</strong> &ndash; Kann Zusammenh&auml;nge &uuml;ber tausende W&ouml;rter erkennen (seit 2017, Google "Attention Is All You Need")</span></li>
            <li><span class="check">&#128200;</span><span><strong>Skalierung</strong> &ndash; Mehr Daten + mehr Rechenleistung = emergente F&auml;higkeiten. Pl&ouml;tzlich kann es "denken".</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive 1: Tokenisierung & Embeddings =====
  {
    id: 'llm-deepdive-1',
    theme: '',
    label: 'Deep Dive 1',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Schritt 1: Vom Text zur Mathematik</h2>
      <p class="slide-subtitle">Wie aus eurem Prompt Zahlen werden, mit denen ein Computer rechnen kann</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Tokenisierung</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.95rem;margin-bottom:12px">
            Euer Text wird in St&uuml;cke zerlegt und jedes St&uuml;ck bekommt eine Nummer aus einem festen Vokabular (~100k Eintr&auml;ge).
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Prompt &rarr; Tokens &rarr; IDs
            </div>
            <div class="code-body"><pre><span class="code-comment">// Euer Prompt:</span>
<span class="code-string">"Write a function that sorts users"</span>

<span class="code-comment">// Tokenisiert (Sub-Words):</span>
[<span class="code-property">"Write"</span>, <span class="code-property">" a"</span>, <span class="code-property">" function"</span>,
 <span class="code-property">" that"</span>, <span class="code-property">" sorts"</span>, <span class="code-property">" users"</span>]

<span class="code-comment">// Als IDs (Nummern im Vokabular):</span>
[<span class="code-number">6761</span>, <span class="code-number">264</span>, <span class="code-number">734</span>, <span class="code-number">430</span>, <span class="code-number">21377</span>, <span class="code-number">3932</span>]</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Embeddings &ndash; Bedeutung als Koordinaten</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.95rem;margin-bottom:12px">
            Jede Token-ID wird in einen <strong>Vektor</strong> umgewandelt &ndash; eine Liste von Tausenden Zahlen. Was ist das?
          </p>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:12px">
            <p style="font-size:0.95rem;line-height:1.6">
              &#127758; <strong>Vergleich: GPS-Koordinaten f&uuml;r W&ouml;rter</strong><br>
              <span style="color:var(--color-text-subdued)">Stellt euch vor, jedes Wort hat eine Position auf einer riesigen Landkarte. "K&ouml;nig" und "K&ouml;nigin" liegen nah beieinander. "Apfel" liegt weit weg. Nur hat diese Karte nicht 2 Dimensionen (x, y) sondern <strong>4.000 bis 12.000</strong>.</span>
            </p>
          </div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Embedding-Vektor (vereinfacht)
            </div>
            <div class="code-body"><pre><span class="code-comment">// "function" als Vektor (4096 Dims):</span>
[<span class="code-number">0.23</span>, <span class="code-number">-0.87</span>, <span class="code-number">0.44</span>, <span class="code-number">0.12</span>, ... <span class="code-number">-0.31</span>]

<span class="code-comment">// "method" liegt in der N&auml;he:</span>
[<span class="code-number">0.21</span>, <span class="code-number">-0.85</span>, <span class="code-number">0.41</span>, <span class="code-number">0.14</span>, ... <span class="code-number">-0.29</span>]

<span class="code-comment">// "banana" liegt weit weg:</span>
[<span class="code-number">-0.72</span>, <span class="code-number">0.54</span>, <span class="code-number">-0.11</span>, <span class="code-number">0.88</span>, ... <span class="code-number">0.67</span>]</pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Deep Dive 2: Attention & Generierung =====
  {
    id: 'llm-deepdive-2',
    theme: 'slide--dark',
    label: 'Deep Dive 2',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Schritt 2: Attention & Token-Generierung</h2>
      <p class="slide-subtitle">Wie die KI Zusammenh&auml;nge erkennt und Token f&uuml;r Token Code schreibt</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Attention &ndash; "Worauf achte ich?"</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;font-size:0.95rem;margin-bottom:12px">
            F&uuml;r jedes Token berechnet das Modell: <strong>Wie wichtig ist jedes andere Token f&uuml;r mich?</strong> Das l&auml;uft durch 80-128 Layer &ndash; jeder verfeinert das Verst&auml;ndnis.
          </p>
          <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:16px">
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#128101; <strong>Vergleich: Konferenzraum</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Stellt euch vor, ihr lest den Satz "Write a function that sorts users". Euer Gehirn wei&szlig; sofort: "sorts" und "users" geh&ouml;ren eng zu "function" &ndash; aber "a" und "that" sind unwichtig. Genau das berechnet Attention &ndash; nur mathematisch, f&uuml;r jedes Token-Paar. Und das in jedem Layer mit neuen Schwerpunkten.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Temperatur</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#129482;</span><span><strong>Temp 0</strong> &ndash; Immer das wahrscheinlichste Token. Deterministisch. Ideal f&uuml;r Code.</span></li>
            <li><span class="check">&#127912;</span><span><strong>Temp 1+</strong> &ndash; Mehr Zufall, "kreativere" Antworten. Auch mehr Halluzinationen.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">So entsteht Code &ndash; Token f&uuml;r Token</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Generierung Schritt f&uuml;r Schritt
            </div>
            <div class="code-body"><pre><span class="code-comment">// Prompt: "Write a function that sorts users"</span>

<span class="code-comment">// Schritt 1:</span> <span class="code-keyword">def</span>        <span class="code-comment">(P=0.87)</span>
<span class="code-comment">// Schritt 2:</span> <span class="code-function">sort</span>       <span class="code-comment">(P=0.72)</span>
<span class="code-comment">// Schritt 3:</span> _users     <span class="code-comment">(P=0.91)</span>
<span class="code-comment">// Schritt 4:</span> (          <span class="code-comment">(P=0.99)</span>
<span class="code-comment">// Schritt 5:</span> users      <span class="code-comment">(P=0.84)</span>
<span class="code-comment">// ...</span>

<span class="code-comment">// Nach ~50 Schritten:</span>
<span class="code-keyword">def</span> <span class="code-function">sort_users</span>(users, key=<span class="code-string">"name"</span>):
    <span class="code-keyword">return</span> <span class="code-function">sorted</span>(
        users,
        key=<span class="code-keyword">lambda</span> u: u[key]
    )</pre></div>
          </div>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Wichtig:</strong> Das Modell "versteht" keinen Code. Es hat gelernt, dass nach <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.8rem">def sort_</code> sehr wahrscheinlich <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.8rem">users(</code> kommt &ndash; weil es Millionen &auml;hnlicher Funktionen im Training gesehen hat.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Was sind Tokens? =====
  {
    id: 'tokens',
    theme: '',
    label: 'Tokens',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Doch was sind &uuml;berhaupt Tokens?</h2>
      <p class="slide-subtitle">Wir reden die ganze Zeit von Tokens &ndash; die W&auml;hrung, in der KI denkt, rechnet und abrechnet</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Was ist ein Token?</h3>
          <p style="color:var(--color-text-subdued);line-height:1.6;margin-bottom:16px">
            Ein Token ist ein St&uuml;ck Text &ndash; meistens ein Wort oder ein Wortteil. Faustregel: <strong>1 Token &asymp; &frac34; eines Wortes</strong>.
          </p>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Tokenisierung
            </div>
            <div class="code-body"><pre><span class="code-comment">// Dieser Satz:</span>
<span class="code-string">"Hallo, wie geht es dir?"</span>

<span class="code-comment">// Wird zu diesen Tokens:</span>
[<span class="code-property">"Hallo"</span>, <span class="code-property">","</span>, <span class="code-property">" wie"</span>,
 <span class="code-property">" geht"</span>, <span class="code-property">" es"</span>, <span class="code-property">" dir"</span>, <span class="code-property">"?"</span>]

<span class="code-comment">// = 7 Tokens</span>

<span class="code-comment">// Code wird auch tokenisiert:</span>
<span class="code-string">"function hello() { return 'world'; }"</span>
<span class="code-comment">// = ~11 Tokens</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Alltagsvergleiche</h3>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 WhatsApp-Nachricht</strong> (20 W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~27 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 E-Mail</strong> (200 W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~270 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>1 Seite Code</strong> (~50 Zeilen) <span style="float:right;color:var(--color-primary);font-weight:700">~500 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>Harry Potter Band 1</strong> (77.000 W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~103.000 Tokens</span></p>
            </div>
            <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem"><strong>Gesamtes Spring-Boot-Projekt</strong> <span style="float:right;color:var(--color-primary);font-weight:700">~500.000+ Tokens</span></p>
            </div>
          </div>
          <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Kosten:</strong> 1M Tokens bei Claude Sonnet &asymp; $6. Das sind ca. 750.000 W&ouml;rter &ndash; etwa 10 Harry-Potter-B&auml;nde lesen und beantworten.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Kontext - Das Ged&auml;chtnis =====
  {
    id: 'context',
    theme: 'slide--dark',
    label: 'Kontext',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Kontext &ndash; Das "Ged&auml;chtnis" der KI</h2>
      <p class="slide-subtitle">Alles was die KI auf einmal "sehen" kann. Und was passiert, wenn es voll ist.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Was ist Kontext?</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.6;margin-bottom:16px">
            Stellt euch vor, ihr sitzt in einem Meeting. <strong>Der Kontext ist alles, woran ihr euch gleichzeitig erinnern k&ouml;nnt.</strong> Manche Leute h&ouml;ren extrem gut zu, merken sich jedes Detail &ndash; die haben einen gro&szlig;en Kontext. Andere sind abgelenkt, schnappen nur Wortfetzen auf &ndash; kleiner Kontext. Bei KI ist das genauso: System-Prompt, eure Frage, alle bisherigen Nachrichten, eingef&uuml;gter Code &ndash; alles zusammen muss reinpassen.
          </p>
          <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:16px">
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);line-height:1.6">
              &#128214; <strong>Vergleich: Schreibtisch</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Context Window = die Gr&ouml;&szlig;e eures Schreibtischs. Je gr&ouml;&szlig;er, desto mehr Dokumente passen gleichzeitig drauf. Aber irgendwann ist er voll &ndash; dann m&uuml;sst ihr Sachen wegnehmen.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Context Windows heute</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>GPT-4</strong> (2023): 8k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 10 Seiten</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.9rem;color:var(--color-text-on-dark)">
              <strong>Claude 3</strong> (2024): 200k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 1 ganzes Buch</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,237,0,0.1);font-size:0.9rem;color:var(--color-accent);font-weight:600">
              <strong>Gemini 2.5</strong> (2025): 1M Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 13 Harry-Potter-B&auml;nde</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">Was passiert wenn voll?</h3>
          <div style="padding:16px;border-radius:10px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.25);margin-bottom:16px">
            <p style="font-size:0.95rem;color:var(--color-text-on-dark);line-height:1.6">
              &#9888; <strong>Die KI vergisst.</strong> Alles was nicht mehr ins Context Window passt, existiert f&uuml;r sie nicht. Sie "erinnert" sich nicht an gestern, nicht an letzte Woche. Jede Konversation startet bei null.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Praktisch bedeutet das:</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Lange Chats werden "dumm"</strong> &ndash; Je l&auml;nger das Gespr&auml;ch, desto fr&uuml;her vergisst die KI den Anfang. Sie widerspricht sich pl&ouml;tzlich.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Gro&szlig;e Codebases passen nicht rein</strong> &ndash; Ein Spring-Boot-Projekt mit 500k Tokens passt nicht in 200k Kontext. Die KI sieht nie das ganze Bild.</span></li>
            <li><span class="check">&#128161;</span><span><strong>L&ouml;sung: RAG</strong> &ndash; Retrieval Augmented Generation. Nur die relevanten Code-Teile werden reingeladen, nicht alles. Wie ein Bibliothekar der das richtige Buch holt.</span></li>
            <li><span class="check">&#128161;</span><span><strong>L&ouml;sung: agent.md / CLAUDE.md</strong> &ndash; Gebt der KI eine "Erinnerung" als Datei mit. Projekt-Regeln, Architektur, Konventionen &ndash; immer im Kontext.</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Kontext-Komprimierung =====
  {
    id: 'context-compression',
    theme: '',
    label: 'Komprimierung',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Was passiert, wenn der Kontext voll ist?</h2>
      <p class="slide-subtitle">KI komprimiert &ndash; genau wie euer Gehirn. Aber dabei gehen Details verloren.</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:20px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:20px">
            <p style="font-size:1rem;line-height:1.6">
              &#129504; <strong>Wie bei euch:</strong> Heute morgen um 08:12 waren es genau 4,7&deg;C und es hat leicht genieselt. Das wisst ihr jetzt nicht mehr. Aber ihr wisst: <strong>"Es war kalt und hat geregnet."</strong>
            </p>
            <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:8px;line-height:1.5">
              Euer Gehirn hat komprimiert &ndash; Details weg, Essenz behalten. Genau das macht die KI, wenn der Kontext voll wird.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Strategien der KI</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#9986;</span><span><strong>&Auml;lteste Nachrichten l&ouml;schen</strong> &ndash; Einfachste Methode. "Sliding Window".</span></li>
            <li><span class="check">&#128221;</span><span><strong>Zusammenfassen</strong> &ndash; Alte Nachrichten werden in eine Zusammenfassung komprimiert.</span></li>
            <li><span class="check">&#128269;</span><span><strong>RAG</strong> &ndash; Nur relevante Teile nachladen statt alles im Kontext zu halten.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:12px">Das Problem dabei</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Kontext ist <strong>fl&uuml;chtig</strong> &ndash; nach der Session ist alles weg</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Komprimierung verliert <strong>Nuancen</strong> &ndash; "Es war kalt" statt "4,7&deg;C mit Nebel ab 07:30"</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Jede neue Session startet bei <strong>null</strong> &ndash; deshalb haben Tools wie ChatGPT ein "Memory" eingebaut und System-Prompts, die vorab Kontext setzen. Aber auch das hat Grenzen.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Ihr seht <strong>nicht was fehlt</strong> &ndash; die KI sagt nicht "ich hab gerade die H&auml;lfte vergessen"</span></li>
          </ul>
          <div style="margin-top:20px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Die L&ouml;sung?</strong> Der KI ein "Langzeitged&auml;chtnis" geben &ndash; eine Datei die <strong>immer</strong> im Kontext mitgeladen wird. Das ist die Idee hinter <strong>agents.md</strong>.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Vom ChatBot zum Agenten =====
  {
    id: 'llm-to-agent',
    theme: 'slide--dark',
    label: 'Agents',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Vom ChatBot zum Agenten</h2>
      <p class="slide-subtitle">Bevor wir zur agents.md kommen &ndash; was sind Agents &uuml;berhaupt?</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <div style="padding:16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:16px">
            <p style="font-size:0.95rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#128295; <strong>Vergleich: Handwerker</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Ein LLM ohne Tools ist wie ein Handwerker der alles wei&szlig; &ndash; aber keine H&auml;nde hat. Gebt ihm Hammer, S&auml;ge und Bohrer (= Dateisystem, Terminal, Browser) und er baut euch ein Haus.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Der Agent Loop</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              So l&auml;uft das ab
            </div>
            <div class="code-body"><pre><span class="code-number">1.</span> <span class="code-keyword">Du sagst:</span>
   <span class="code-string">"Baue einen REST-Endpoint f&uuml;r User"</span>

<span class="code-number">2.</span> <span class="code-keyword">LLM denkt nach:</span>
   <span class="code-function">&rarr; Tool: read_file("src/")</span>

<span class="code-number">3.</span> <span class="code-keyword">LLM plant:</span>
   <span class="code-function">&rarr; Tool: write_file("UserController.java")</span>

<span class="code-number">4.</span> <span class="code-keyword">LLM testet:</span>
   <span class="code-function">&rarr; Tool: run("mvn test")</span>
   <span class="code-comment">// Fehler? Fixen. Wiederholen.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Die Werkzeuge</h3>
          <div class="tags" style="margin-bottom:16px">
            <span class="tag">Dateien lesen/schreiben</span>
            <span class="tag">Terminal/Shell</span>
            <span class="tag">Git</span>
            <span class="tag">Browser/Web</span>
            <span class="tag">Datenbank</span>
            <span class="tag">Sub-Agents</span>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Praktisches Beispiel</h3>
          <div style="padding:16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
            <p style="font-size:1rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128172; <strong>"F&uuml;ge Pagination zum User-Endpoint hinzu"</strong>
            </p>
            <ol style="margin:8px 0 0 20px;font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.7">
              <li>Liest UserController.java + Repository</li>
              <li>Erkennt: Spring Boot, JPA, Pageable</li>
              <li>&Auml;ndert Repository + Controller</li>
              <li>Passt Tests an, f&uuml;hrt sie aus</li>
              <li>&Ouml;ffnet PR mit Beschreibung</li>
            </ol>
          </div>
          <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Nicht nur Autocomplete</strong> &ndash; ein Agent der liest, versteht, &auml;ndert, testet und committed. Und wie er sich dabei verh&auml;lt? Das definiert die <strong>agents.md</strong>.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== agents.md =====
  {
    id: 'agents-md',
    theme: 'slide--dark',
    label: 'agents.md',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">agents.md &ndash; Das Langzeitged&auml;chtnis</h2>
      <p class="slide-subtitle">Eine Datei die immer im Kontext ist. Verhaltensregeln, Projekt-Kontext, Pers&ouml;nlichkeit.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Das Prinzip &ndash; ganz einfach</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>Wenn kalt</strong> &rarr; Warme Kleidung anziehen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.95rem;color:var(--color-text-on-dark)">
              <strong>Wenn Regen</strong> &rarr; Regenschirm mitnehmen
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.1);border:1px solid rgba(255,237,0,0.25);font-size:0.95rem;color:var(--color-accent)">
              <strong>Wenn Java-Projekt</strong> &rarr; Verhalte dich wie ein Senior Java Dev
            </div>
          </div>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:12px">
            Jedes Projekt, jeder Agent bekommt eine solche Datei. Sie wird bei jeder Konversation automatisch geladen &ndash; egal wie oft der Kontext komprimiert wird.
          </p>
          <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued)">
            Spezifikation: <a href="https://agents.md" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agents.md</a> &middot; Auch: CLAUDE.md, .cursorrules
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Echtes Beispiel: Mein WW-Agent</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              meal-screenshot-intake/agents.md
            </div>
            <div class="code-body"><pre><span class="code-comment">## Purpose</span>
<span class="code-string">Flow f&uuml;r eingehende Essens-Screenshots.</span>

<span class="code-comment">## Process</span>
<span class="code-number">1.</span> <span class="code-keyword">Pr&uuml;fen:</span> Enth&auml;lt Screenshot Mahlzeiten?
<span class="code-number">2.</span> <span class="code-keyword">Wenn ja:</span> Workflow in AGENT.md laden
<span class="code-number">3.</span> <span class="code-keyword">Wenn kein Datum:</span> Fragen
   <span class="code-string">"Ist das Essen f&uuml;r heute?"</span>
<span class="code-number">4.</span> <span class="code-keyword">Bei "nein":</span> Tag erfragen, in JSON
<span class="code-number">5.</span> <span class="code-keyword">JSON erzeugen</span> &rarr; run_skill.sh
<span class="code-number">6.</span> <span class="code-keyword">R&uuml;ckmeldung</span> an User

<span class="code-comment">## Boundaries</span>
<span class="code-string">- Kein Repo-Kontext mischen</span>
<span class="code-string">- Keine externen Sends ohne Auftrag</span></pre></div>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sub-Agents: Theorie =====
  {
    id: 'subagents-theory',
    theme: '',
    label: 'Sub-Agents',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Sub-Agents &ndash; KI-Spezialisten-Team</h2>
      <p class="slide-subtitle">Jede Projekt-Rolle kann ein eigener Agent sein &ndash; mit eigenem Kontext und eigenen Tools</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Ein Projekt &ndash; welche Rollen braucht es?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:20px">
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128270; <strong>Researcher</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Anforderungen sammeln</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128188; <strong>Product Owner</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Anforderungen priorisieren</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#127959; <strong>Architekt</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Struktur planen</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128187; <strong>Entwickler</strong></span><span style="color:var(--color-primary);font-size:0.8rem;font-weight:600">Code schreiben</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128270; <strong>Code Reviewer</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Qualit&auml;t pr&uuml;fen</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#129514; <strong>Tester</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Tests schreiben &amp; ausf&uuml;hren</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.9rem;display:flex;justify-content:space-between">
              <span>&#128196; <strong>Doku-Schreiber</strong></span><span style="color:var(--color-text-neutral);font-size:0.8rem">Dokumentation generieren</span>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Warum Sub-Agents?</h3>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:16px">
            <p style="font-size:0.95rem;line-height:1.6">
              &#129504; <strong>Jeder Agent hat eigenen Kontext.</strong> Der Entwickler muss nicht die 200 Seiten Research kennen. Er bekommt nur: <em>"Baue einen REST-Endpoint f&uuml;r User mit Pagination."</em> Das spart Kontext und verhindert Verwirrung.
            </p>
          </div>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#127919;</span><span><strong>Fokus</strong> &ndash; Jeder Agent ist Experte f&uuml;r eine Sache. Bessere Ergebnisse als ein "kann alles"-Agent.</span></li>
            <li><span class="check">&#128274;</span><span><strong>Isolation</strong> &ndash; Jeder Agent sieht nur was er braucht. Kein Kontext-&Uuml;berlauf.</span></li>
            <li><span class="check">&#9889;</span><span><strong>Parallelit&auml;t</strong> &ndash; Researcher, Tester und Doku-Agent k&ouml;nnen gleichzeitig arbeiten.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Kosten</strong> &ndash; Einfache Aufgaben an g&uuml;nstige Modelle (Haiku), komplexe an Opus.</span></li>
          </ul>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Alle diese Rollen k&ouml;nnen Sub-Agents sein.</strong> Jeder mit eigener agents.md, eigenem Modell, eigenen Tools. Der Orchestrator verteilt die Arbeit.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sub-Agents: Deep Dive =====
  {
    id: 'subagents-deepdive',
    theme: 'slide--dark',
    label: 'Sub-Agents Deep Dive',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Sub-Agents in der Praxis</h2>
      <p class="slide-subtitle">Das Konzept gibt es &uuml;berall &ndash; Claude Code hat die eleganteste Umsetzung</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Sub-Agents sind &uuml;berall</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:16px">
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>Claude Code</strong></span><span style="color:var(--color-accent)">.md Dateien, Built-in Agents</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>CrewAI</strong></span><span style="color:var(--color-text-on-dark-subdued)">"Crews" aus Spezialisten</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>LangGraph</strong></span><span style="color:var(--color-text-on-dark-subdued)">Multi-Agent Workflows</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>AutoGen (Microsoft)</strong></span><span style="color:var(--color-text-on-dark-subdued)">Multi-Agent Conversations</span>
            </div>
            <div style="padding:8px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.85rem;color:var(--color-text-on-dark);display:flex;justify-content:space-between">
              <span><strong>n8n / OpenClaw</strong></span><span style="color:var(--color-text-on-dark-subdued)">Workflow Sub-Agents</span>
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Beispiel: Claude Code</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              .claude/agents/code-reviewer.md
            </div>
            <div class="code-body"><pre><span class="code-comment">---</span>
<span class="code-property">name</span>: <span class="code-string">code-reviewer</span>
<span class="code-property">tools</span>: <span class="code-string">Read, Grep, Glob, Bash</span>
<span class="code-property">model</span>: <span class="code-string">sonnet</span>
<span class="code-comment">---</span>

Du bist ein Senior Code Reviewer.
Feedback nach Priorit&auml;t:
<span class="code-string">- Critical (must fix)</span>
<span class="code-string">- Warning (should fix)</span>
<span class="code-string">- Suggestion (nice to have)</span></pre></div>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;font-size:0.8rem">
            <a href="https://code.claude.com/docs/en/sub-agents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Claude Code Docs</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://code.claude.com/docs/de/agent-teams" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">Agent Teams</a>
            <span style="color:var(--color-text-on-dark-subdued)">&middot;</span>
            <a href="https://github.com/VoltAgent/awesome-claude-code-subagents" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">awesome-subagents</a>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Built-in Sub-Agents</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128270; <strong>Explore</strong> &ndash; Read-only, Haiku. Codebase durchsuchen ohne Kontext zu belasten.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128203; <strong>Plan</strong> &ndash; Read-only. Recherche f&uuml;r Planungsmodus.
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.9rem;color:var(--color-text-on-dark)">
              &#128295; <strong>General</strong> &ndash; Alle Tools. Komplexe mehrstufige Aufgaben.
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Key Features</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check">&#128176;</span><span><strong>Modell pro Agent</strong> &ndash; Reviewer auf Sonnet, Explorer auf Haiku (billiger &amp; schneller)</span></li>
            <li><span class="check">&#129504;</span><span><strong>Eigener Kontext</strong> &ndash; Ergebnisse bleiben beim Sub-Agent, nur Zusammenfassung geht zur&uuml;ck</span></li>
            <li><span class="check">&#128260;</span><span><strong>Parallel &amp; Background</strong> &ndash; Mehrere Sub-Agents gleichzeitig, w&auml;hrend ihr weiterarbeitet</span></li>
            <li><span class="check">&#128218;</span><span><strong>Persistent Memory</strong> &ndash; Agents lernen &uuml;ber Sessions hinweg (Muster, Konventionen)</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Die Agent-Landschaft =====
  {
    id: 'agent-landscape',
    theme: 'slide--dark',
    label: 'Agent Tools',
    content: `
      <span class="slide-label">Coding Agents</span>
      <h2 class="slide-title">Die Agent-Landschaft</h2>
      <p class="slide-subtitle">Welche Coding-Agents gibt es &ndash; und wann brauche ich welchen?</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Die wichtigsten Tools</h3>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:0.95rem;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Claude Code</strong> &ndash; Bester Coding-Agent aktuell. Terminal-basiert. Liest, schreibt, testet, committed autonom. <a href="https://code.claude.com/docs/en/overview" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.8rem">Docs</a></p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.95rem;color:var(--color-text-on-dark)"><strong>OpenCode</strong> &ndash; Open-Source Alternative. Nutzen wir sp&auml;ter f&uuml;r Live-Beispiele.</p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.95rem;color:var(--color-text-on-dark)"><strong>OpenClaw / Clawdbot</strong> &ndash; Absoluter Hype. Deshalb gehen gerade Apple Mac Minis durch die Decke. <a href="https://medium.com/codex/why-thousands-are-buying-mac-minis-to-escape-big-tech-ai-subscriptions-forever-clawdbot-10c970c72404" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.8rem">Medium</a></p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.95rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; IDE-integriert. Autocomplete + Chat. Einstieg f&uuml;r die meisten.</p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.95rem;color:var(--color-text-on-dark)"><strong>Cursor / Continue / Windsurf</strong> &ndash; IDE-Forks mit tiefer Agent-Integration.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Lokal vs. Global &ndash; Wann brauche ich was?</h3>
          <table class="comparison">
            <thead>
              <tr>
                <th>Use Case</th>
                <th>Typ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Ich entwickle Code auf meinem Rechner</td>
                <td style="color:var(--color-accent);font-weight:700">Lokal</td>
              </tr>
              <tr>
                <td>Code Review pro Merge Request</td>
                <td style="color:#ff6c12;font-weight:700">Remote (GitLab Runner)</td>
              </tr>
              <tr>
                <td>Automatisiert Frontend-Tests bauen</td>
                <td style="color:#ff6c12;font-weight:700">Remote (pro Repo)</td>
              </tr>
              <tr>
                <td>Call Center / Kundenservice Bot</td>
                <td style="font-weight:700">Global (zentral)</td>
              </tr>
              <tr>
                <td>Via MCP mit Confluence sprechen</td>
                <td style="font-weight:700">Global (zentral)</td>
              </tr>
              <tr>
                <td>Pers&ouml;nlicher Assistent (OpenClaw)</td>
                <td style="font-weight:700">Global (pers&ouml;nlich)</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Lokal</strong> = auf deinem Rechner &middot; <strong style="color:#ff6c12">Remote</strong> = CI/CD Runner, pro Repo &middot; <strong>Global</strong> = systemübergreifend, zentraler Service
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Architektur: Agent-System =====
  {
    id: 'agent-architecture',
    theme: '',
    label: 'Architektur',
    content: `
      <span class="slide-label">Architektur</span>
      <h2 class="slide-title">Wie h&auml;ngt das alles zusammen?</h2>
      <p class="slide-subtitle">Beispiel: Ein User spricht mit OpenWebUI, dahinter arbeiten LLM, MCP und Agent-Pipeline zusammen</p>
      <div class="diagram" style="margin-top:32px;gap:0">
        <div class="diagram-row">
          <div class="diagram-box diagram-box--accent arch-node" style="animation-delay:0s">&#128100; User<small>Stellt eine Frage</small></div>
        </div>
        <div class="arch-line"><div class="arch-line-animated"></div></div>
        <div class="diagram-row">
          <div class="diagram-box diagram-box--primary arch-node" style="animation-delay:0.3s">OpenWebUI<small>Chat-Frontend</small></div>
        </div>
        <div class="arch-line"><div class="arch-line-animated"></div></div>
        <div class="diagram-row">
          <div class="diagram-box arch-node" style="min-width:280px;animation-delay:0.6s;border-style:dashed">&#9881; Agent Pipeline<small>agents.md + Tools + Logik</small></div>
        </div>
        <div style="display:flex;justify-content:center;align-items:start;gap:80px">
          <div class="arch-line" style="height:28px"><div class="arch-line-animated"></div></div>
          <div class="arch-line" style="height:28px"><div class="arch-line-animated"></div></div>
        </div>
        <div class="diagram-row" style="gap:32px">
          <div class="diagram-box arch-node" style="min-width:200px;animation-delay:0.9s">&#129504; LLM<small>Claude / GPT / Qwen<br>"Denken"</small></div>
          <div class="diagram-box arch-node" style="min-width:200px;animation-delay:0.9s">&#128268; MCP Server<small>Confluence, Jira, DB<br>"Handeln"</small></div>
        </div>
        <div style="display:flex;justify-content:center;align-items:start;gap:80px">
          <div class="arch-line" style="height:28px"><div class="arch-line-animated"></div></div>
          <div class="arch-line" style="height:28px"><div class="arch-line-animated"></div></div>
        </div>
        <div class="diagram-row">
          <div class="diagram-box diagram-box--accent arch-node" style="min-width:340px;animation-delay:1.4s">&#128196; Ergebnis<small>Confluence-Seite erstellt &middot; Code generiert &middot; Ticket aktualisiert</small></div>
        </div>
      </div>
      <div style="margin-top:24px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-primary)">Der Trick:</strong> Die Agent Pipeline nutzt das LLM zum Denken <strong>und</strong> den MCP Server zum Handeln. Der User merkt davon nichts &ndash; er stellt eine Frage und bekommt ein Ergebnis.
        </p>
      </div>
    `,
  },

  // ===== Praxis: Unsere Agents in GitLab =====
  {
    id: 'gitlab-agents',
    theme: '',
    label: 'Praxis GitLab',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Das nutzen wir bereits</span>
      <h2 class="slide-title">3 Agents bei uns in Produktion</h2>
      <p class="slide-subtitle">Was wir in GitLab bereits mit KI-Agents automatisiert haben &ndash; Aufwand: 8-12 Stunden pro Agent</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Unsere 3 GitLab-Agents</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128270; Code Review Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Reviewt jeden Merge Request automatisch. Findet Bugs, Security Issues, Style-Probleme. Kommentiert direkt im MR.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128196; Doku-Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Generiert technische Dokumentation aus Code-&Auml;nderungen. API-Docs, Changelogs, Architektur-&Uuml;bersichten.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128218; Hands-On-Doku Agent</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Generiert praxisnahe Anleitungen anhand der letzten &Auml;nderungen. "Wie nutze ich das neue Feature?" &ndash; automatisch.</p>
            </div>
          </div>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(37,204,120,0.08);border:1px solid rgba(37,204,120,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-positive)">Aufwand:</strong> 8-12 Stunden pro Agent. Der Aufwand das manuell zu machen? <strong>Mindestens derselbe &ndash; bei jedem einzelnen MR.</strong>
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:16px">Was als n&auml;chstes kommt</h3>
          <div style="padding:20px;border-radius:10px;background:var(--color-bg-subdued);border:2px dashed var(--color-border-primary);margin-bottom:16px">
            <p style="font-size:1rem;line-height:1.6">
              &#128640; <strong>Der n&auml;chste Agent:</strong>
            </p>
            <ol style="margin:8px 0 0 20px;font-size:0.95rem;color:var(--color-text-subdued);line-height:1.8">
              <li>Liest <strong>Confluence</strong>-Seiten &amp; <strong>Jira</strong>-Issues</li>
              <li>Checkt die betroffenen <strong>Repos</strong> aus</li>
              <li>Baut automatisiert <strong>Frontend-Tests</strong></li>
              <li>&Ouml;ffnet PRs mit fertigen Test-Suites</li>
            </ol>
            <p style="font-size:0.85rem;color:var(--color-text-neutral);margin-top:12px;font-style:italic">Technisch m&ouml;glich &ndash; via MCP f&uuml;r Confluence/Jira + lokaler Agent pro Repo.</p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Was bedeutet das f&uuml;r uns?</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Code Reviews</strong> passieren sofort, nicht nach 2 Tagen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Doku ist immer aktuell</strong> &ndash; weil sie bei jedem MR neu generiert wird</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Onboarding wird einfacher</strong> &ndash; Hands-On-Docs f&uuml;r jedes Feature</span></li>
            <li><span class="check">&#128161;</span><span><strong>Entwickler sind nicht mehr der Bottleneck</strong> &ndash; die Agents arbeiten parallel</span></li>
          </ul>
        </div>
      </div>
    `,
  },

  // ===== Die Blackbox =====
  {
    id: 'blackbox',
    theme: '',
    label: 'Blackbox',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Achtung</span>
      <h2 class="slide-title">KI ist eine Blackbox</h2>
      <p class="slide-subtitle">Die Ergebnisse sind beeindruckend &ndash; aber vertraut nicht blind. Im Ernstfall m&uuml;sst ihr alles verstehen und erkl&auml;ren k&ouml;nnen.</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Was ihr nachvollziehen k&ouml;nnt</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Input &amp; Output</strong> &ndash; Was rein geht, was raus kommt</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Tool Calls</strong> &ndash; Welche Dateien gelesen, welche Befehle ausgef&uuml;hrt</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Reasoning Tokens</strong> &ndash; Bei "Thinking"-Modellen seht ihr die Denkschritte</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Token-Verbrauch</strong> &ndash; Wie viel Kontext verbraucht wurde</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:12px">Was ihr NICHT nachvollziehen k&ouml;nnt</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Warum diese Antwort?</strong> &ndash; Milliarden Parameter. Nicht mal die Entwickler verstehen es.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Halluzinationen</strong> &ndash; KI "erfindet" Fakten weil die Wahrscheinlichkeit hoch war &ndash; nicht weil es stimmt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Was vergessen wurde</strong> &ndash; Kontext wird still komprimiert. Ihr seht nicht was fehlt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Kein Debugging</strong> &ndash; Kein Breakpoint, kein Stack Trace. Gleicher Input, anderer Output.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-warning)">Fazit:</strong> KI ist nicht vergleichbar mit klassischer Softwareentwicklung. Es gibt keinen Quellcode den ihr lesen k&ouml;nnt, keine Unit Tests f&uuml;rs Modell. <strong>Nutzt KI als Werkzeug &ndash; aber versteht was sie produziert.</strong> Besonders bei kritischen Anwendungen: Immer reviewen, immer hinterfragen.
        </p>
      </div>
    `,
  },

  // ===== Erst das Handwerk, dann das Werkzeug =====
  {
    id: 'craft-first',
    theme: 'slide--dark',
    label: 'Handwerk',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Bevor wir KI nutzen</span>
      <h2 class="slide-title">Erst das Handwerk, dann das Werkzeug</h2>
      <p class="slide-subtitle">Die besten Messer, der teuerste Herd und der sch&ouml;nste Kochtopf machen noch kein gutes Essen.</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:20px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:20px">
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#127859; Ein Koch mit perfekter Ausr&uuml;stung aber ohne Wissen &uuml;ber Geschmack, Texturen und Techniken kocht <strong>mittelmä&szlig;ig</strong>.
            </p>
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-accent);margin-top:8px">
              Ein Entwickler mit dem besten KI-Agent aber ohne Verst&auml;ndnis f&uuml;r Architektur, Patterns und Standards produziert <strong>mittelmä&szlig;igen Code</strong>.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">KI ist ein Beschleuniger &ndash; kein Ersatz</h3>
          <ul class="feature-list">
            <li><span class="check">&#128640;</span><span>KI macht euch <strong>schneller</strong> &ndash; aber nicht automatisch <strong>besser</strong></span></li>
            <li><span class="check">&#128640;</span><span>Schlechte Architektur + KI = <strong>schneller schlechte Architektur</strong></span></li>
            <li><span class="check">&#128640;</span><span>Gute Grundlagen + KI = <strong>10x Produktivit&auml;t</strong></span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Weiterhin unsere Pflicht</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#127959; <strong>Software-Architektur</strong> &ndash; Clean Architecture, Domain-Driven Design, Microservices vs. Monolith
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128221; <strong>Coding Standards</strong> &ndash; SOLID, Design Patterns, Code Reviews, Testing-Strategien
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128274; <strong>Security</strong> &ndash; OWASP, Threat Modeling, Secure Coding. KI kennt keine Compliance.
            </div>
            <div style="padding:12px 16px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.95rem;color:var(--color-text-on-dark)">
              &#128200; <strong>Marktstandards</strong> &ndash; Branchenspezifische Normen, Regulatorik, Compliance
            </div>
          </div>
          <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Meine Empfehlung:</strong> Gerade jetzt, wo KI so viel &uuml;bernimmt, wird Grundlagenwissen <strong>wichtiger</strong>, nicht weniger. Architektur-Schulungen, Pattern-Workshops, Security-Trainings &ndash; das braucht es umso mehr. Weil ihr das bewerten m&uuml;sst, was die KI produziert.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== SECTION DIVIDER - AI Assisted Coding =====
  {
    id: 'section-coding',
    theme: 'slide--primary slide--divider',
    label: 'AI Coding',
    content: `
      <div class="divider-number">04</div>
      <h2 class="slide-title">AI Assisted Coding</h2>
      <p class="slide-subtitle">Jetzt, wo wir die Basics verstehen &ndash; wie nutzen wir das zum Programmieren?</p>
    `,
  },

  // ===== Die Anf&auml;nge =====
  {
    id: 'coding-origins',
    theme: 'slide--dark',
    label: 'Anf&auml;nge',
    content: `
      <span class="slide-label">Evolution</span>
      <h2 class="slide-title">Die Anf&auml;nge</h2>
      <p class="slide-subtitle">Von Copy-Paste in ChatGPT bis zu autonomen Coding Agents</p>
      <div class="timeline" style="margin-top:32px">
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
      <div class="cards" style="grid-template-columns:repeat(4,1fr);gap:16px;margin-top:32px">
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://github.githubassets.com/favicons/favicon.svg" alt="GitHub Copilot" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">GitHub Copilot</div>
          <div class="card-text" style="font-size:0.8rem">Microsoft &middot; IDE-Plugin<br>Autocomplete + Chat</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.anthropic.com/favicon.ico" alt="Claude Code" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Claude Code</div>
          <div class="card-text" style="font-size:0.8rem">Anthropic &middot; Terminal<br>Autonomer Agent</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.cursor.com/favicon.ico" alt="Cursor" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Cursor</div>
          <div class="card-text" style="font-size:0.8rem">VS Code Fork<br>Chat + Agent + Composer</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://windsurf.com/favicon.ico" alt="Windsurf" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Windsurf</div>
          <div class="card-text" style="font-size:0.8rem">Codeium &middot; VS Code Fork<br>Cascade Agent</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.continue.dev/favicon.png" alt="Continue" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Continue</div>
          <div class="card-text" style="font-size:0.8rem">Open Source &middot; IDE-Plugin<br>Multi-Model</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.tabnine.com/favicon.ico" alt="Tabnine" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Tabnine</div>
          <div class="card-text" style="font-size:0.8rem">Enterprise &middot; On-Prem<br>Code Completion</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://opencode.ai/favicon.ico" alt="OpenCode" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">OpenCode</div>
          <div class="card-text" style="font-size:0.8rem">Open Source &middot; Terminal<br>Multi-Provider Agent</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://openai.com/favicon.ico" alt="Codex" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Codex</div>
          <div class="card-text" style="font-size:0.8rem">OpenAI &middot; Cloud Agent<br>Sandboxed Execution</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.google.com/favicon.ico" alt="Gemini CLI" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Gemini CLI</div>
          <div class="card-text" style="font-size:0.8rem">Google &middot; Terminal<br>Open Source Agent</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://gitlab.com/favicon.ico" alt="GitLab Duo" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">GitLab Duo</div>
          <div class="card-text" style="font-size:0.8rem">GitLab &middot; Native<br>Code Suggestions + Chat</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://kiro.dev/favicon.ico" alt="Kiro" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Kiro</div>
          <div class="card-text" style="font-size:0.8rem">AWS &middot; Spec-Driven<br>Requirements &rarr; Code</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://raw.githubusercontent.com/RooCodeInc/Roo-Code/main/src/assets/icons/icon.png" alt="Roo Code" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Roo Code</div>
          <div class="card-text" style="font-size:0.8rem">Open Source &middot; VS Code<br>Spec-Driven Alternative</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://zed.dev/favicon_black_64.png" alt="Zed" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Zed</div>
          <div class="card-text" style="font-size:0.8rem">Rust-basiert &middot; Editor<br>Native AI Assistant</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://openclaw.ai/favicon.svg" alt="OpenClaw" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">OpenClaw</div>
          <div class="card-text" style="font-size:0.8rem">Open Source &middot; Multi-Channel<br>Pers&ouml;nlicher Agent</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://www.augmentcode.com/favicon.ico" alt="Augment" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Augment</div>
          <div class="card-text" style="font-size:0.8rem">Enterprise &middot; IDE-Plugin<br>Codebase-aware AI</div>
        </div>
        <div class="card" style="padding:20px;text-align:center">
          <img src="https://bolt.new/static/favicon.svg" alt="Bolt" style="width:36px;height:36px;margin-bottom:8px;border-radius:8px">
          <div class="card-title" style="font-size:0.95rem">Bolt / v0</div>
          <div class="card-text" style="font-size:0.8rem">Stackblitz / Vercel<br>App per Prompt im Browser</div>
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
      <div class="two-cols" style="margin-top:24px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:16px">
            <p style="font-size:0.95rem;line-height:1.6">
              &#127925; <strong>Vibe Coding</strong> &ndash; Gepr&auml;gt von Andrej Karpathy (Feb. 2025). Collins Dictionary Word of the Year 2025. Beschreibt das Gef&uuml;hl: Man gibt die Richtung vor, die KI coded, man "f&uuml;hlt" ob es passt.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Zwei Ans&auml;tze</h3>
          <div style="display:flex;flex-direction:column;gap:10px">
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.95rem;line-height:1.5"><strong style="color:var(--color-primary)">Agent-Driven</strong> (agents.md)<br><span style="color:var(--color-text-subdued)">Agent bekommt Verhaltensregeln und l&ouml;st Aufgaben autonom. Flexibel, aber weniger vorhersagbar.</span></p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:0.95rem;line-height:1.5"><strong style="color:var(--color-primary)">Spec-Driven</strong> (Kiro, Roo Code)<br><span style="color:var(--color-text-subdued)">Erst Spezifikation schreiben, dann implementieren. Strukturierter, nachvollziehbarer, testbarer.</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Die Tools</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <a href="https://kiro.dev" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.95rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Kiro</strong> (AWS) &ndash; Spec-Driven Development. Erst Requirements, dann Design, dann Code. <span style="font-size:0.8rem;color:var(--color-primary)">kiro.dev &rarr;</span></p>
            </a>
            <a href="https://github.com/RooCodeInc/Roo-Code" target="_blank" rel="noopener" style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);text-decoration:none;display:block;transition:border-color 0.3s" onmouseover="this.style.borderColor='var(--color-border-primary)'" onmouseout="this.style.borderColor='var(--color-border)'">
              <p style="font-size:0.95rem;line-height:1.5;color:var(--color-text)"><strong style="color:var(--color-primary)">Roo Code</strong> (Open Source) &ndash; Spec-Driven Alternative. VS Code Extension. Community-driven. <span style="font-size:0.8rem;color:var(--color-primary)">GitHub &rarr;</span></p>
            </a>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem;line-height:1.5"><strong>Claude Code / OpenCode</strong> &ndash; Agent-Driven. agents.md + autonome Execution.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.95rem;line-height:1.5"><strong>Cursor / Copilot</strong> &ndash; Hybrid. Chat + Autocomplete + teilweise Agent-F&auml;higkeiten.</p>
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
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">So funktioniert es (Kiro)</h3>
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
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Die Vorteile</h3>
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
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px;margin-top:24px">
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            requirements.md
          </div>
          <div class="code-body" style="font-size:0.8rem;line-height:1.5"><pre><span class="code-comment">## User Story</span>
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
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            design.md
          </div>
          <div class="code-body" style="font-size:0.8rem;line-height:1.5"><pre><span class="code-comment">## Architektur</span>
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
        <div class="code-block" style="margin-top:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            tasks.md
          </div>
          <div class="code-body" style="font-size:0.8rem;line-height:1.5"><pre><span class="code-comment">## Implementation Tasks</span>

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
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-primary)">Der Vorteil:</strong> Bevor eine Zeile Code geschrieben wird, sind Requirements, Design und Tasks dokumentiert. Jeder Task ist r&uuml;ckf&uuml;hrbar auf eine Requirement. Tests werden aus der Spec abgeleitet &ndash; nicht nachtr&auml;glich erfunden.
        </p>
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
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Prompt: "Baue User-Endpoint mit Pagination"</h3>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.9rem;line-height:1.5;margin-bottom:12px">
            Kein Requirements-Dokument, kein Design upfront. Der Agent <strong>plant selbst</strong>:
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Agent Thinking &amp; Planning
            </div>
            <div class="code-body" style="font-size:0.8rem;line-height:1.5"><pre><span class="code-comment">// Agent analysiert den Prompt:</span>
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
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">So arbeitet der Agent</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:16px">
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
      <div class="two-cols" style="margin-top:32px">
        <div>
          <div style="padding:24px;border-radius:12px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:12px">&#127925; Agent-Driven (Vibe Coding)</h3>
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
            <h3 style="color:var(--color-primary);font-size:1.2rem;margin-bottom:12px">&#128203; Spec-Driven</h3>
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
      <div style="margin-top:24px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.95rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">Es gibt kein "besser".</strong> Beides hat seine St&auml;rken. Viele Teams mischen: Spec-Driven f&uuml;r neue Features, Agent-Driven f&uuml;r den Rest. Findet euren Stil &ndash; und nutzt das richtige Werkzeug f&uuml;r die richtige Aufgabe.
        </p>
      </div>
    `,
  },

  // ===== Hands-On: Setup =====
  {
    id: 'handson-setup',
    theme: 'slide--accent slide--divider',
    label: 'Hands-On',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">&#128640;</div>
      <h2 class="slide-title" style="color:var(--color-bg-dark)">Hands-On: Setup</h2>
      <p class="slide-subtitle" style="color:var(--color-bg-dark);opacity:0.7">Wir arbeiten mit OpenCode &ndash; dem Open-Source Coding Agent</p>
      <div style="margin-top:32px;display:flex;align-items:center;justify-content:center;gap:24px">
        <img id="handson-qr" src="" alt="QR Code zum Hands-On" style="width:140px;height:140px;border-radius:12px;border:3px solid var(--color-bg-dark)">
        <div style="text-align:left">
          <p style="font-size:1rem;color:var(--color-bg-dark);font-weight:700;margin-bottom:4px">Scannt den QR-Code oder &ouml;ffnet:</p>
          <p id="handson-url" style="font-size:0.9rem;color:var(--color-bg-dark);opacity:0.8;word-break:break-all"></p>
          <p style="font-size:0.85rem;color:var(--color-bg-dark);opacity:0.6;margin-top:8px">Ab hier macht jeder f&uuml;r sich weiter &ndash; Schritt f&uuml;r Schritt.</p>
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
      <p class="slide-subtitle">Falls noch nicht vorhanden &ndash; w&auml;hlt euer Betriebssystem</p>
      <div style="max-width:700px;margin:32px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127823; macOS (Homebrew)
          </div>
          <button class="copy-btn" data-copy="brew install node">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">brew install</span> node</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#128039; Linux (Ubuntu / Debian)
          </div>
          <button class="copy-btn" data-copy="sudo apt install nodejs npm">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">sudo apt install</span> nodejs npm</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#127999; Windows (winget)
          </div>
          <button class="copy-btn" data-copy="winget install OpenJS.NodeJS">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">winget install</span> OpenJS.NodeJS</pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            &#10003; Pr&uuml;fen ob es funktioniert
          </div>
          <button class="copy-btn" data-copy="node -v && npm -v">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">node</span> -v && <span class="code-function">npm</span> -v
<span class="code-comment"># v22.x.x</span>
<span class="code-comment"># 10.x.x</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);max-width:700px;margin-left:auto;margin-right:auto">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5;text-align:center">
          Ausf&uuml;hrliche Anleitung: <a href="https://www.ramotion.com/blog/how-to-install-npm/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">ramotion.com/blog/how-to-install-npm</a>
        </p>
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
          <button class="copy-btn" data-copy="npm install -g opencode">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npm install</span> -g opencode</pre></div>
        </div>
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Alternative: Ohne globale Installation
          </div>
          <button class="copy-btn" data-copy="npx opencode@latest">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-function">npx</span> opencode@latest</pre></div>
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

  // ===== Slide 3: OpenCode konfigurieren =====
  {
    id: 'setup-config',
    theme: 'slide--dark',
    label: 'Config',
    content: `
      <span class="slide-label">Schritt 3</span>
      <h2 class="slide-title">OpenCode konfigurieren</h2>
      <p class="slide-subtitle">Konfiguration liegt in <code style="background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:3px;font-size:0.85rem">opencode.json</code> im Projektverzeichnis</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Unsere Config: AWS Bedrock</h3>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              opencode.json
            </div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"disabled_providers":[],"share":"disabled","autoupdate":false,"experimental":{"openTelemetry":false},"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:14px 18px;font-size:0.8rem;line-height:1.5"><pre style="margin:0">{
  <span class="code-property">"$schema"</span>: <span class="code-string">"https://opencode.ai/config.json"</span>,
  <span class="code-property">"enabled_providers"</span>: [<span class="code-string">"amazon-bedrock"</span>],
  <span class="code-property">"share"</span>: <span class="code-string">"disabled"</span>,
  <span class="code-property">"autoupdate"</span>: <span class="code-keyword">false</span>,
  <span class="code-property">"provider"</span>: {
    <span class="code-property">"amazon-bedrock"</span>: {
      <span class="code-property">"options"</span>: {
        <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>
      },
      <span class="code-property">"models"</span>: {
        <span class="code-property">"eu.anthropic.claude-opus-4-6-v1:0"</span>: {},
        <span class="code-property">"eu.anthropic.claude-haiku-4-5-..."</span>: {}
      }
    }
  },
  <span class="code-property">"model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-..."</span>,
  <span class="code-property">"small_model"</span>: <span class="code-string">"amazon-bedrock/eu.anthropic.claude-haiku-4-5-..."</span>
}</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Alternativen</h3>
          <div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px">
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; Login &uuml;ber GitHub, nutzt euer Abo. Kein API-Key n&ouml;tig.</p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>Anthropic direkt</strong> &ndash; API-Key per <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.8rem">ANTHROPIC_API_KEY</code> Env-Variable.</p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>OpenAI / Gemini</strong> &ndash; 75+ Provider &uuml;ber Models.dev verf&uuml;gbar.</p>
            </div>
            <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>Lokale Modelle</strong> &ndash; Ollama, llama.cpp &ndash; f&uuml;r maximale Privatsph&auml;re.</p>
            </div>
          </div>
          <div style="padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Warum Bedrock?</strong> Token-basiert, kein GPU-Management, EU-Region (eu-central-1), Enterprise-ready. Genau wie wir es im Hosting-Slide besprochen haben.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Slide 4: VS Code installieren =====
  {
    id: 'setup-vscode',
    theme: '',
    label: 'VS Code',
    content: `
      <span class="slide-label">Schritt 4</span>
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
      <span class="slide-label">Schritt 5</span>
      <h2 class="slide-title">Projekt in VS Code anlegen</h2>
      <p class="slide-subtitle">Neues Projekt erstellen oder bestehendes &ouml;ffnen</p>
      <div class="two-cols" style="margin-top:32px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">&#127823; &#128039; macOS / Linux</h3>
          <div class="code-block" style="margin:0 0 16px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Neues Projekt
            </div>
            <button class="copy-btn" data-copy="mkdir ~/projects/workshop-demo && cd ~/projects/workshop-demo && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">mkdir</span> ~/projects/workshop-demo
<span class="code-function">cd</span> ~/projects/workshop-demo
<span class="code-function">code</span> .</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Bestehendes Projekt
            </div>
            <button class="copy-btn" data-copy="cd ~/projects/mein-projekt && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">cd</span> ~/projects/mein-projekt
<span class="code-function">code</span> .</pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:16px">&#127999; Windows</h3>
          <div class="code-block" style="margin:0 0 16px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Neues Projekt (PowerShell)
            </div>
            <button class="copy-btn" data-copy='mkdir C:\\Users\\$env:USERNAME\\projects\\workshop-demo; cd C:\\Users\\$env:USERNAME\\projects\\workshop-demo; code .'>&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">mkdir</span> ~\\projects\\workshop-demo
<span class="code-function">cd</span> ~\\projects\\workshop-demo
<span class="code-function">code</span> .</pre></div>
          </div>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Bestehendes Projekt
            </div>
            <button class="copy-btn" data-copy="cd C:\\Users\\%USERNAME%\\projects\\mein-projekt && code .">&#128203; Copy</button>
            <div class="code-body" style="padding:16px 20px"><pre style="margin:0"><span class="code-function">cd</span> ~\\projects\\mein-projekt
<span class="code-function">code</span> .</pre></div>
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
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Lokal (im Projekt)</h3>
          <p style="color:var(--color-text-subdued);font-size:0.9rem;margin-bottom:12px">Erstellt eine <code style="background:var(--color-code-bg);color:var(--color-code-text);padding:1px 4px;border-radius:3px;font-size:0.85rem">opencode.json</code> im Projekt-Root:</p>
          <div class="code-block" style="margin:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              ./opencode.json
            </div>
            <button class="copy-btn" data-copy='{"$schema":"https://opencode.ai/config.json","enabled_providers":["amazon-bedrock"],"share":"disabled","autoupdate":false,"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1"},"models":{"eu.anthropic.claude-opus-4-6-v1:0":{},"eu.anthropic.claude-haiku-4-5-20251001-v1:0":{}}}},"model":"amazon-bedrock/eu.anthropic.claude-sonnet-4-5-20250929-v1:0","small_model":"amazon-bedrock/eu.anthropic.claude-haiku-4-5-20251001-v1:0"}'>&#128203; Copy</button>
            <div class="code-body" style="padding:14px 18px;font-size:0.8rem;line-height:1.4"><pre style="margin:0"><span class="code-comment">mein-projekt/</span>
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
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Global (Fortgeschritten)</h3>
          <p style="color:var(--color-text-subdued);font-size:0.9rem;margin-bottom:12px">F&uuml;r alle Projekte &ndash; Config im Home-Verzeichnis:</p>
          <div class="code-block" style="margin:0;margin-bottom:16px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Globaler Pfad
            </div>
            <div class="code-body" style="padding:14px 18px;font-size:0.85rem;line-height:1.4"><pre style="margin:0"><span class="code-comment"># macOS / Linux:</span>
<span class="code-property">~/.config/opencode/config.json</span>

<span class="code-comment"># Windows:</span>
<span class="code-property">%APPDATA%\\opencode\\config.json</span></pre></div>
          </div>
          <div style="padding:14px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Priorit&auml;t:</strong> Lokale Config &uuml;berschreibt globale. So k&ouml;nnt ihr global einen Default setzen und pro Projekt &uuml;berschreiben.
            </p>
          </div>
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
      <p class="slide-subtitle">Terminal in VS Code &ouml;ffnen (<kbd style="background:rgba(255,255,255,0.1);padding:1px 6px;border-radius:3px;font-size:0.85rem">Ctrl+\`</kbd>) und los</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Option A: Bearer Token (Workshop)</h3>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.85rem;margin-bottom:12px">Token wird im Workshop bereitgestellt:</p>
          <div class="code-block" style="margin:0;margin-bottom:16px">
            <button class="copy-btn" data-copy='AWS_BEARER_TOKEN_BEDROCK="<TOKEN>" AWS_REGION="eu-central-1" opencode'>&#128203; Copy</button>
            <div class="code-body" style="padding:14px 18px"><pre style="margin:0"><span class="code-function">AWS_BEARER_TOKEN_BEDROCK</span>=<span class="code-string">"&lt;TOKEN&gt;"</span> \\
<span class="code-function">AWS_REGION</span>=<span class="code-string">"eu-central-1"</span> \\
<span class="code-function">opencode</span></pre></div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Hinweis:</strong> Bearer Token hat h&ouml;chste Priorit&auml;t &ndash; &uuml;berschreibt Profile und SSO.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Option B: AWS SSO (empfohlen)</h3>
          <p style="color:var(--color-text-on-dark-subdued);font-size:0.85rem;margin-bottom:12px">F&uuml;r den Alltag &ndash; Profile in der Config + SSO Login:</p>
          <div class="code-block" style="margin:0;margin-bottom:12px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              opencode.json &ndash; mit profile
            </div>
            <button class="copy-btn" data-copy='"provider":{"amazon-bedrock":{"options":{"region":"eu-central-1","profile":"mein-sso-profil"}}}'>&#128203; Copy</button>
            <div class="code-body" style="padding:12px 18px;font-size:0.8rem"><pre style="margin:0"><span class="code-property">"provider"</span>: {
  <span class="code-property">"amazon-bedrock"</span>: {
    <span class="code-property">"options"</span>: {
      <span class="code-property">"region"</span>: <span class="code-string">"eu-central-1"</span>,
      <span class="code-property">"profile"</span>: <span class="code-string">"mein-sso-profil"</span>
    }
  }
}</pre></div>
          </div>
          <div class="code-block" style="margin:0;margin-bottom:12px">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Terminal: SSO einrichten &amp; starten
            </div>
            <button class="copy-btn" data-copy="aws configure sso --profile mein-sso-profil">&#128203; Copy</button>
            <div class="code-body" style="padding:12px 18px;font-size:0.85rem"><pre style="margin:0"><span class="code-comment"># Einmalig: SSO-Profil einrichten</span>
<span class="code-function">aws configure sso</span> --profile mein-sso-profil

<span class="code-comment"># Dann: Login (Browser &ouml;ffnet sich)</span>
<span class="code-function">aws sso login</span> --profile mein-sso-profil

<span class="code-comment"># OpenCode starten:</span>
<span class="code-function">opencode</span>
<span class="code-comment"># Liest "profile" aus opencode.json</span></pre></div>
          </div>
          <div style="padding:10px;border-radius:8px;background:rgba(37,204,120,0.1);border:1px solid rgba(37,204,120,0.25)">
            <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-positive)">Empfohlen:</strong> Credentials rotieren automatisch, kein Secret in Dateien. Docs: <a href="https://opencode.ai/docs/config/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">opencode.ai/docs/config</a>
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
              <span style="color:#555">|</span><span style="color:#777">sk anything... "Fix a TODO in the codebase"</span>
            </div>
            <div style="padding:4px 16px;margin-bottom:20px">
              <span style="color:#3b82f6;font-weight:700">Build</span>
              <span style="color:#ccc;margin-left:8px">Claude Sonnet 4.6 (EU)</span>
              <span style="color:#666;margin-left:8px">Amazon Bedrock</span>
            </div>
            <div style="text-align:right;color:#666;font-size:0.8rem;margin-bottom:24px">
              <span style="color:#ccc">ctrl+t</span> variants
              <span style="color:#ccc;margin-left:16px">tab</span> agents
              <span style="color:#ccc;margin-left:16px">ctrl+p</span> commands
            </div>
            <div style="text-align:center;margin-bottom:20px">
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
          <button class="copy-btn" data-copy="Baue das Spiel 2048 als Vite App. Nutze HTML, CSS und Vanilla JS. Es soll mit Tastatur und Touch bedienbar sein.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"Baue das Spiel 2048 als Vite App.
Nutze HTML, CSS und Vanilla JS.
Es soll mit Tastatur und Touch bedienbar sein."</span></pre></div>
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
        <div style="font-size:4rem;margin-bottom:24px">&#9888;</div>
        <h2 class="slide-title" style="color:#ff6c12">Stopp &ndash; merkt ihr was?</h2>
        <p style="font-size:1.2rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:24px">
          Wir geben schon einfache Befehle wie <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1.1rem">npm run dev</code> an die KI ab.
        </p>
        <p style="font-size:1.4rem;line-height:1.7;color:var(--color-text-on-dark);margin-top:16px">
          Dieser Prompt <strong style="color:#ff6c12">kostet Geld</strong>.<br>Das Eintippen des Commands <strong>nicht</strong>.
        </p>
        <p style="font-size:1.1rem;line-height:1.7;color:var(--color-text-on-dark-subdued);margin-top:24px">
          Es gibt Leute die sagen <em>"committe mein Projekt"</em> oder <em>"pushe das"</em> &ndash;<br>das w&auml;re ein einfaches <code style="background:rgba(255,255,255,0.1);padding:3px 8px;border-radius:4px;font-size:1rem">git push</code>.
        </p>
        <div style="margin-top:32px;padding:20px;border-radius:12px;background:rgba(255,108,18,0.12);border:2px solid rgba(255,108,18,0.3)">
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
      <p class="slide-subtitle">Wir legen eine agents.md an &ndash; und bauen 2048 nochmal. Gleicher Prompt.</p>
      <div style="max-width:750px;margin:24px auto 0">
        <div class="code-block" style="margin:0 0 20px">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            AGENTS.md im Projekt-Root anlegen
          </div>
          <button class="copy-btn" data-copy="# Frontend Game Agent\n\nDu bist ein professioneller Frontend-Entwickler f\u00fcr Browser-Spiele.\n\n## Architektur\n- Pr\u00fcfe welches Build-System genutzt wird\n- Nutze Component-basierte Architektur\n- Trenne: Spiellogik, Rendering, Input-Handling, State\n- Jede Klasse in eigene Datei\n\n## Qualit\u00e4t\n- Fl\u00fcssige CSS-Animationen (transitions, transforms)\n- requestAnimationFrame f\u00fcr Game-Loops\n- Responsive Design, Touch + Keyboard Support\n- Game Over Screen mit Score\n- Pause-Funktion (Escape/P)\n- Exit-M\u00f6glichkeit zur\u00fcck zum Men\u00fc\n\n## Code-Stil\n- Funktionen < 30 Zeilen\n- Sprechende Variablennamen (englisch)\n- JSDoc-Kommentare f\u00fcr \u00f6ffentliche Methoden\n- Keine globalen Variablen\n- ES Modules, kein var">&#128203; Copy</button>
          <div class="code-body" style="padding:14px 18px;font-size:0.8rem;line-height:1.4"><pre style="margin:0"><span class="code-comment"># Frontend Game Agent</span>
<span class="code-string">Du bist ein professioneller Frontend-Entwickler f&uuml;r Browser-Spiele.</span>

<span class="code-keyword">## Architektur</span>
- Pr&uuml;fe Build-System  &middot;  Component-basiert
- Trenne: Spiellogik, Rendering, Input, State
- Jede Klasse in eigene Datei

<span class="code-keyword">## Qualit&auml;t</span>
- Fl&uuml;ssige CSS-Animationen (transitions, transforms)
- requestAnimationFrame f&uuml;r Game-Loops
- Responsive + Touch + Keyboard
- <span class="code-string">Game Over Screen mit Score</span>
- <span class="code-string">Pause-Funktion (Escape / P)</span>
- <span class="code-string">Exit-M&ouml;glichkeit zur&uuml;ck zum Men&uuml;</span>

<span class="code-keyword">## Code-Stil</span>
- Funktionen &lt; 30 Zeilen  &middot;  Sprechende Namen
- JSDoc-Kommentare  &middot;  ES Modules  &middot;  Kein var</pre></div>
        </div>
        <div class="code-block" style="margin:0">
          <div class="code-header">
            <div class="code-dots"><span></span><span></span><span></span></div>
            Gleicher Prompt wie vorher
          </div>
          <button class="copy-btn" data-copy="L\u00f6sche den bisherigen Code und baue das Spiel 2048 als Vite App. Nutze HTML, CSS und Vanilla JS. Es soll mit Tastatur und Touch bedienbar sein.">&#128203; Copy</button>
          <div class="code-body" style="padding:18px 24px;font-size:1rem"><pre style="margin:0"><span class="code-string">"L&ouml;sche den bisherigen Code und baue das Spiel
2048 als Vite App. HTML, CSS, Vanilla JS.
Tastatur und Touch bedienbar."</span></pre></div>
        </div>
      </div>
      <div style="margin-top:16px;padding:14px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2);max-width:750px;margin-left:auto;margin-right:auto;text-align:center">
        <p style="font-size:0.9rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
          <strong style="color:var(--color-accent)">Vergleicht das Ergebnis:</strong> Gleicher Prompt &ndash; aber jetzt mit Animationen, Pause, Game Over, sauberer Architektur. Das ist der agents.md-Effekt.
        </p>
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
      <div class="two-cols" style="margin-top:24px;max-width:750px;margin-left:auto;margin-right:auto">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:12px">Was der Agent jetzt tut</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">1</span><span>Bestehenden 2048-Code analysieren</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">2</span><span>Router/Navigation einbauen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">3</span><span>Startseite mit Grid erstellen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">4</span><span>Doodle Jump komplett neu bauen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">5</span><span>Exit-Buttons zur&uuml;ck zur Startseite</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:12px">Warum das beeindruckend ist</h3>
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

  // ===== Weitere Beispiele =====
  {
    id: 'example-real',
    theme: 'slide--dark',
    label: 'Mehr Beispiele',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Weiter ausprobieren</span>
      <h2 class="slide-title">Noch mehr Ideen</h2>
      <p class="slide-subtitle">W&auml;hlt eine Aufgabe die zu eurem Projekt passt</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:16px;margin-top:32px">
        <div class="card" style="padding:20px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128196;</div>
          <div class="card-title">Doku generieren</div>
          <div class="card-text">"Erstelle eine API-Dokumentation f&uuml;r alle Endpoints"</div>
        </div>
        <div class="card" style="padding:20px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#129514;</div>
          <div class="card-title">Tests schreiben</div>
          <div class="card-text">"Schreibe Integration Tests f&uuml;r den UserController"</div>
        </div>
        <div class="card" style="padding:20px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title">Code Review</div>
          <div class="card-text">"Reviewe die letzten 3 Commits auf Bugs &amp; Security"</div>
        </div>
        <div class="card" style="padding:20px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128736;</div>
          <div class="card-title">Refactoring</div>
          <div class="card-text">"Extrahiere die Validierung in einen eigenen Service"</div>
        </div>
        <div class="card" style="padding:20px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128640;</div>
          <div class="card-title">Neues Feature</div>
          <div class="card-text">"F&uuml;ge einen Health-Check Endpoint hinzu"</div>
        </div>
        <div class="card" style="padding:20px">
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
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px">
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
          <div class="card-text" style="font-size:0.8rem">"Erstelle eine HTML-Pr&auml;sentation zum Thema X" &ndash; genau so ist <strong>diese Pr&auml;sentation</strong> entstanden.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title" style="font-size:0.9rem">Research</div>
          <div class="card-text" style="font-size:0.8rem">"Recherchiere die Top 10 KI-Tools 2026 mit Preisen und Vor/Nachteilen. Erstelle eine Vergleichstabelle."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128221;</div>
          <div class="card-title" style="font-size:0.9rem">Confluence-Seiten</div>
          <div class="card-text" style="font-size:0.8rem">"Erstelle eine Confluence-Seite f&uuml;r unser Architektur-Konzept anhand des Codes im Repo."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#9986;</div>
          <div class="card-title" style="font-size:0.9rem">Dokumente k&uuml;rzen</div>
          <div class="card-text" style="font-size:0.8rem">"K&uuml;rze dieses 20-seitige Dokument auf die wichtigsten 3 Seiten. Behalte alle Zahlen und Entscheidungen."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128202;</div>
          <div class="card-title" style="font-size:0.9rem">Daten analysieren</div>
          <div class="card-text" style="font-size:0.8rem">"Analysiere diese CSV und erstelle eine Zusammenfassung mit den Top-Trends und Ausrei&szlig;ern."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128172;</div>
          <div class="card-title" style="font-size:0.9rem">Meeting-Vorbereitung</div>
          <div class="card-text" style="font-size:0.8rem">"Erstelle eine Agenda und Diskussionspunkte f&uuml;r unser Sprint Review anhand der letzten Commits."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128203;</div>
          <div class="card-title" style="font-size:0.9rem">ADRs schreiben</div>
          <div class="card-text" style="font-size:0.8rem">"Erstelle ein Architecture Decision Record f&uuml;r die Migration von REST zu GraphQL."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128231;</div>
          <div class="card-title" style="font-size:0.9rem">E-Mails &amp; Texte</div>
          <div class="card-text" style="font-size:0.8rem">"Formuliere eine h&ouml;fliche Absage an den Dienstleister mit Verweis auf die Vertragsklausel."</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128218;</div>
          <div class="card-title" style="font-size:0.9rem">Lernen &amp; Erkl&auml;ren</div>
          <div class="card-text" style="font-size:0.8rem">"Erkl&auml;re mir Kubernetes Networking so, dass ich es einem Nicht-Techniker erkl&auml;ren kann."</div>
        </div>
      </div>
    `,
  },

  // ===== SECTION DIVIDER - Abschluss =====
  {
    id: 'section-closing',
    theme: 'slide--primary slide--divider',
    label: 'Abschluss',
    content: `
      <div class="divider-number">05</div>
      <h2 class="slide-title">Abschluss &amp; Ausblick</h2>
      <p class="slide-subtitle">Was kommt als n&auml;chstes?</p>
    `,
  },

  // ===== Ausblick =====
  {
    id: 'outlook',
    theme: 'slide--dark',
    label: 'Ausblick',
    content: `
      <span class="slide-label">Ausblick</span>
      <h2 class="slide-title">Was w&auml;re noch m&ouml;glich?</h2>
      <p class="slide-subtitle">Wir stehen erst am Anfang &ndash; das hier ist alles heute schon denkbar</p>
      <div class="cards" style="grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px">
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128270;</div>
          <div class="card-title" style="font-size:0.9rem">Anomalie-Erkennung</div>
          <div class="card-text" style="font-size:0.8rem">Agent &uuml;berwacht Logs, Metriken, Error-Rates &ndash; erkennt Muster und alarmiert bevor Nutzer es merken.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128274;</div>
          <div class="card-title" style="font-size:0.9rem">CVE Auto-Patching</div>
          <div class="card-text" style="font-size:0.8rem">Agent pr&uuml;ft t&auml;glich CVE-Datenbanken, findet betroffene Dependencies und stellt automatisch PRs mit Fixes.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#9881;</div>
          <div class="card-title" style="font-size:0.9rem">System-Optimierung</div>
          <div class="card-text" style="font-size:0.8rem">Agent analysiert Performance-Daten, findet Bottlenecks und schl&auml;gt Infrastruktur-&Auml;nderungen vor.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#129514;</div>
          <div class="card-title" style="font-size:0.9rem">Auto-Testing via MCP</div>
          <div class="card-text" style="font-size:0.8rem">Agent liest Jira-Stories, verbindet sich per MCP mit dem System und testet automatisch ob Features funktionieren.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128203;</div>
          <div class="card-title" style="font-size:0.9rem">Auto-Roadmaps</div>
          <div class="card-text" style="font-size:0.8rem">Agent analysiert Backlog, Tech-Debt, Markttrends und generiert Roadmap-Vorschl&auml;ge f&uuml;r das n&auml;chste Quartal.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128337;</div>
          <div class="card-title" style="font-size:0.9rem">T&auml;gliche System-Pr&uuml;fung</div>
          <div class="card-text" style="font-size:0.8rem">1x t&auml;glich: Health Checks, Dependency Updates, Zertifikate pr&uuml;fen, Security Scans &ndash; Report per Slack.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#127760;</div>
          <div class="card-title" style="font-size:0.9rem">Internet-Monitoring</div>
          <div class="card-text" style="font-size:0.8rem">Agent scannt Release Notes, Blog Posts, Changelogs &ndash; informiert euch wenn relevante neue Features erscheinen.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128196;</div>
          <div class="card-title" style="font-size:0.9rem">Seiten aktuell halten</div>
          <div class="card-text" style="font-size:0.8rem">Agent vergleicht Doku mit Code, findet Abweichungen und aktualisiert Confluence, README, API-Docs automatisch.</div>
        </div>
        <div class="card" style="padding:18px">
          <div class="card-icon" style="background:rgba(255,237,0,0.15);color:var(--color-accent)">&#128247;</div>
          <div class="card-title" style="font-size:0.9rem">Content &amp; Social Media</div>
          <div class="card-text" style="font-size:0.8rem">Content erstellen, Instagram-Seiten verwalten, Posts planen, Bilder generieren &ndash; alles per Agent-Workflow.</div>
        </div>
      </div>
    `,
  },

  // ===== Vielen Dank =====
  {
    id: 'closing',
    theme: 'slide--dark',
    label: 'Danke',
    content: `
      <div style="text-align:center">
        <h2 class="slide-title">Vielen Dank f&uuml;r die Teilnahme!</h2>
        <p class="slide-subtitle">Fragen, Feedback, Diskussion? Vernetzt euch gerne.</p>
        <div style="display:flex;justify-content:center;gap:64px;margin-top:40px;align-items:start">
          <a href="https://www.linkedin.com/in/erik-weisser/" target="_blank" rel="noopener" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:12px">
            <img src="https://media.licdn.com/dms/image/v2/D4D03AQGphXXiOSHl4A/profile-displayphoto-scale_200_200/B4DZ0LbKv3KoAY-/0/1774013170311?e=1775692800&v=beta&t=_evUMov_2RUYWbpInV0qFHV2eJQ35yDXzn8-Ex5LwJI" alt="Erik Weisser LinkedIn" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-accent)">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://www.linkedin.com/in/erik-weisser/&bgcolor=001631&color=ffffff" alt="LinkedIn QR" style="width:120px;height:120px;border-radius:10px">
            <span style="color:var(--color-text-on-dark);font-size:0.9rem;font-weight:600">LinkedIn</span>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">Erik Weisser</span>
          </a>
          <a href="https://github.com/weisser-dev" target="_blank" rel="noopener" style="text-decoration:none;display:flex;flex-direction:column;align-items:center;gap:12px">
            <img src="https://avatars.githubusercontent.com/u/35608570?v=4" alt="Erik Weisser GitHub" style="width:80px;height:80px;border-radius:50%;border:3px solid var(--color-accent)">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://github.com/weisser-dev&bgcolor=001631&color=ffffff" alt="GitHub QR" style="width:120px;height:120px;border-radius:10px">
            <span style="color:var(--color-text-on-dark);font-size:0.9rem;font-weight:600">GitHub</span>
            <span style="color:var(--color-text-on-dark-subdued);font-size:0.8rem">weisser-dev</span>
          </a>
        </div>
        <div class="tags" style="justify-content:center;margin-top:32px">
          <span class="tag">#AIAssistedCoding</span>
          <span class="tag">#OpenCode</span>
          <span class="tag">#VibeCoding</span>
          <span class="tag">#agents.md</span>
          <span class="tag">#Workshop2026</span>
        </div>
        <p style="margin-top:32px;font-size:0.75rem;color:var(--color-text-on-dark-subdued);opacity:0.5">&copy; 2026 weisser-dev &middot; Built with AI Assisted Coding</p>
      </div>
    `,
  },
];

// ===== Sections =====
const sections = [
  { name: 'Intro', start: 'hero' },
  { name: 'Geschichte', start: 'section-history' },
  { name: 'KI \u2013 Internet 2.0', start: 'section-everyone' },
  { name: 'Basics', start: 'section-basics' },
  { name: 'AI Coding', start: 'section-coding' },
  { name: 'Hands-On', start: 'handson-setup' },
  { name: 'Abschluss', start: 'section-closing' },
];

function getSectionRanges() {
  const ranges = [];
  for (let s = 0; s < sections.length; s++) {
    const startIdx = slides.findIndex(sl => sl.id === sections[s].start);
    const endIdx = s < sections.length - 1
      ? slides.findIndex(sl => sl.id === sections[s + 1].start) - 1
      : slides.length - 1;
    ranges.push({ ...sections[s], startIdx, endIdx });
  }
  return ranges;
}

// ===== Render =====
function renderSlides() {
  const app = document.querySelector('#app');
  const sectionRanges = getSectionRanges();

  // Progress bar
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  progressBar.id = 'progress-bar';
  document.body.prepend(progressBar);

  // Section navigation with sub-dots
  const nav = document.createElement('nav');
  nav.className = 'nav-sections';
  nav.id = 'nav-sections';
  nav.innerHTML = sectionRanges.map((sec, si) => {
    const dotCount = sec.endIdx - sec.startIdx + 1;
    const dots = dotCount <= 1 ? '' : Array.from({ length: dotCount }, (_, di) => {
      const slideIdx = sec.startIdx + di;
      return `<button class="nav-sub-dot" data-slide="${slideIdx}" aria-label="${slides[slideIdx].label}"></button>`;
    }).join('');
    return `
      <div class="nav-section-group" data-section="${si}">
        <button class="nav-section-btn" data-slide="${sec.startIdx}" data-section="${si}">
          <span class="nav-section-label">${sec.name}</span>
        </button>
        ${dots ? `<div class="nav-sub-dots">${dots}</div>` : ''}
      </div>
    `;
  }).join('');
  document.body.appendChild(nav);

  // Keyboard hint
  const hint = document.createElement('div');
  hint.className = 'keyboard-hint';
  hint.id = 'keyboard-hint';
  hint.innerHTML = `<kbd>&darr;</kbd> <kbd>&uarr;</kbd> Navigieren &nbsp;&middot;&nbsp; <kbd>F</kbd> Fullscreen`;
  document.body.appendChild(hint);

  // Slides
  app.innerHTML = slides.map((slide, i) => `
    <section class="slide ${slide.theme}" id="slide-${i}" data-slide-index="${i}">
      <div class="slide-content">
        ${slide.content}
      </div>
    </section>
  `).join('');
}

// ===== Navigation Logic =====
let currentSlide = 0;

function updateActiveSlide(index) {
  currentSlide = index;

  // Update URL hash
  const slideId = slides[index]?.id;
  if (slideId && window.location.hash !== `#${slideId}`) {
    history.replaceState(null, '', `#${slideId}`);
  }

  // Update progress bar
  const progress = ((index + 1) / slides.length) * 100;
  document.getElementById('progress-bar').style.width = `${progress}%`;

  // Update section nav + sub-dots
  const sectionRanges = getSectionRanges();
  document.querySelectorAll('.nav-section-group').forEach((group, i) => {
    const sec = sectionRanges[i];
    const isActive = index >= sec.startIdx && index <= sec.endIdx;
    group.classList.toggle('active', isActive);
    group.querySelector('.nav-section-btn').classList.toggle('active', isActive);
  });
  document.querySelectorAll('.nav-sub-dot').forEach((dot) => {
    const slideIdx = parseInt(dot.dataset.slide, 10);
    dot.classList.toggle('active', slideIdx === index);
  });

  // Update nav color based on slide background
  const navEl = document.getElementById('nav-sections');
  const slideTheme = slides[index]?.theme || '';
  const isDark = slideTheme.includes('slide--dark') || slideTheme.includes('slide--primary');
  navEl.classList.toggle('nav-on-dark', isDark);
  navEl.classList.toggle('nav-on-light', !isDark);
}

function goToSlide(index) {
  if (index < 0 || index >= slides.length) return;
  const target = document.getElementById(`slide-${index}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

function setupIntersectionObserver() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.slideIndex, 10);
          updateActiveSlide(index);
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.4,
    }
  );

  document.querySelectorAll('.slide').forEach((slide) => {
    observer.observe(slide);
  });
}

function setupKeyboardNavigation() {
  let hintHidden = false;

  document.addEventListener('keydown', (e) => {
    // Hide hint on first keypress
    if (!hintHidden) {
      hintHidden = true;
      document.getElementById('keyboard-hint').classList.add('hidden');
    }

    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowRight':
      case 'PageDown':
      case ' ':
        e.preventDefault();
        goToSlide(currentSlide + 1);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
      case 'PageUp':
        e.preventDefault();
        goToSlide(currentSlide - 1);
        break;
      case 'Home':
        e.preventDefault();
        goToSlide(0);
        break;
      case 'End':
        e.preventDefault();
        goToSlide(slides.length - 1);
        break;
      case 'f':
      case 'F':
        if (!e.ctrlKey && !e.metaKey) {
          e.preventDefault();
          toggleFullscreen();
        }
        break;
    }
  });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

function setupNavClicks() {
  document.getElementById('nav-sections').addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-section-btn');
    const dot = e.target.closest('.nav-sub-dot');
    if (btn) {
      const index = parseInt(btn.dataset.slide, 10);
      goToSlide(index);
    } else if (dot) {
      const index = parseInt(dot.dataset.slide, 10);
      goToSlide(index);
    }
  });
}

function setupHandsonQR() {
  const qrImg = document.getElementById('handson-qr');
  const urlEl = document.getElementById('handson-url');
  if (!qrImg || !urlEl) return;
  const handsonUrl = window.location.origin + window.location.pathname + '#handson-setup';
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(handsonUrl)}&bgcolor=ffed00&color=001631`;
  urlEl.textContent = handsonUrl;
}

function setupCopyButtons() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.copy-btn');
    if (!btn) return;
    const text = btn.dataset.copy;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '\u2705 Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '\uD83D\uDCCB Copy';
        btn.classList.remove('copied');
      }, 2000);
    });
  });
}

function setupViewToggles() {
  const btnTable = document.getElementById('btn-table');
  const btnLive = document.getElementById('btn-live');
  const viewTable = document.getElementById('view-table');
  const viewLive = document.getElementById('view-live');

  if (!btnTable || !btnLive) return;

  let iframeLoaded = false;

  function switchView(view) {
    if (view === 'live') {
      viewTable.style.display = 'none';
      viewLive.style.display = 'block';
      btnTable.classList.remove('active');
      btnLive.classList.add('active');

      // Lazy-load iframe on first switch
      if (!iframeLoaded) {
        const iframe = document.getElementById('leaderboard-iframe');
        if (iframe && iframe.dataset.src) {
          iframe.src = iframe.dataset.src;
          iframeLoaded = true;
        }
      }
    } else {
      viewTable.style.display = 'block';
      viewLive.style.display = 'none';
      btnTable.classList.add('active');
      btnLive.classList.remove('active');
    }
  }

  btnTable.addEventListener('click', () => switchView('table'));
  btnLive.addEventListener('click', () => switchView('live'));
}

// ===== Init =====
renderSlides();
setupIntersectionObserver();
setupKeyboardNavigation();
setupNavClicks();
setupViewToggles();
setupCopyButtons();
setupHandsonQR();

// Restore position from URL hash or start at 0
function getStartSlide() {
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const idx = slides.findIndex(s => s.id === hash);
    if (idx >= 0) return idx;
  }
  return 0;
}

const startSlide = getStartSlide();
document.getElementById(`slide-${startSlide}`)?.classList.add('visible');
updateActiveSlide(startSlide);

if (startSlide > 0) {
  // Scroll to saved position without animation on initial load
  setTimeout(() => {
    document.getElementById(`slide-${startSlide}`)?.scrollIntoView();
  }, 100);
}
