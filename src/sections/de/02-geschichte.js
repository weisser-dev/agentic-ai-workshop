export const geschichteSlides = [
  // ===== 1: SECTION DIVIDER - Geschichte =====
  {
    id: 'section-history',
    theme: 'slide--primary slide--divider',
    label: 'Geschichte',
    content: `
      <div class="divider-number">&#128214;</div>
      <h2 class="slide-title">Die Geschichte der KI</h2>
      <p class="slide-subtitle">70 Jahre &ndash; vom Gedankenexperiment zur Revolution</p>
    `,
  },

  // ===== 2: Timeline 1950-1997 =====
  {
    id: 'history-early',
    theme: 'slide--dark',
    label: 'Frühe KI',
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
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127922; 1997 &ndash; Deep Blue schl&auml;gt Kasparov</div>
          <div class="timeline-text">IBMs Deep Blue besiegt den Schachweltmeister <strong>Garry Kasparov</strong> in einem 6-Spiele-Match (3,5&ndash;2,5). Die Welt staunt.</div>
        </div>
      </div>
    `,
  },

  // ===== 2b: 1997-2012 & Warum jetzt =====
  {
    id: 'history-bridge',
    theme: '',
    label: 'Warum jetzt?',
    content: `
      <span class="slide-label">1997 &ndash; 2012</span>
      <h2 class="slide-title">Warum jetzt?</h2>
      <p class="slide-subtitle">Warum hat KI jahrzehntelang nicht funktioniert &ndash; und warum pl&ouml;tzlich doch?</p>
      <div class="two-cols" style="margin-top:24px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Was zwischen 1997 und 2012 passierte</h3>
          <div class="timeline" style="margin-top:0">
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">1998 &ndash; Google wird gegr&uuml;ndet</div>
              <div class="timeline-text">PageRank: Ein Algorithmus der das Internet ordnet. Sp&auml;ter die Basis f&uuml;r die gr&ouml;&szlig;te Datensammlung der Welt.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">2004 &ndash; Facebook startet</div>
              <div class="timeline-text">Social Media erzeugt Milliarden Datenpunkte: Texte, Bilder, Interaktionen. Trainingsdaten f&uuml;r sp&auml;tere KI.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:16px">
              <div class="timeline-title">2006 &ndash; AWS launcht Cloud Computing</div>
              <div class="timeline-text">Rechenleistung wird per Klick verf&uuml;gbar. Kein eigenes Rechenzentrum mehr n&ouml;tig.</div>
            </div>
            <div class="timeline-item" style="padding-bottom:0">
              <div class="timeline-title">2007 &ndash; iPhone & Smartphones</div>
              <div class="timeline-text">Milliarden Ger&auml;te erzeugen permanent Daten. GPS, Fotos, Texte &ndash; alles wird Trainingsmaterial.</div>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Die 3 Zutaten die zusammenkamen</h3>
          <div style="display:flex;flex-direction:column;gap:12px">
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128187; Rechenleistung</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">GPUs von NVIDIA (urspr&uuml;nglich f&uuml;r Gaming) stellten sich als perfekt f&uuml;r KI heraus. Cloud-Computing machte sie f&uuml;r jeden zug&auml;nglich. Die Kosten fielen exponentiell.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#128202; Daten</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Das Internet, Social Media, Smartphones &ndash; pl&ouml;tzlich gab es mehr Text, Bilder und Code als jemals zuvor. Ohne diese Daten kein Training.</p>
            </div>
            <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary)">&#129504; Algorithmen</strong></p>
              <p style="font-size:0.9rem;color:var(--color-text-subdued);margin-top:4px">Deep Learning (2006, Hinton), Transformer (2017, Google). Die Theorie existierte teils seit den 80ern &ndash; aber ohne Compute und Daten war sie nutzlos.</p>
            </div>
          </div>
          <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Kurz:</strong> Die Algorithmen gab es l&auml;ngst. Aber erst als Rechenleistung billig und Daten massenhaft verf&uuml;gbar wurden, z&uuml;ndete die KI-Revolution.
            </p>
          </div>
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
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127918; 2016 &ndash; AlphaGo besiegt Lee Sedol</div>
          <div class="timeline-text">DeepMinds AlphaGo gewinnt 4&ndash;1 gegen den Go-Weltmeister. Go galt als zu komplex f&uuml;r KI &ndash; bis dahin.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-title">2017 &ndash; "Attention Is All You Need"</div>
          <div class="timeline-text">Google Brain ver&ouml;ffentlicht das <strong>Transformer</strong>-Paper. Die Grundlage f&uuml;r GPT, BERT, Claude und alle modernen LLMs.</div>
        </div>
        <div class="timeline-item milestone">
          <div class="timeline-title">&#127919; 2019 &ndash; OpenAI Five gewinnt gegen Dota-2-Weltmeister</div>
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

  // ===== Was bedeutet GPT? =====
  {
    id: 'what-is-gpt',
    theme: '',
    label: 'Was ist GPT?',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Was bedeutet eigentlich "GPT"?</h2>
      <p class="slide-subtitle">Der Name hinter ChatGPT &ndash; und warum er mehr verr&auml;t, als man denkt</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">G &ndash; P &ndash; T</h3>
          <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:14px">
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">G</strong>enerative</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">Das Modell <strong>erzeugt</strong> neue Inhalte &ndash; Text, Code, Ideen. Es kopiert nicht aus einer Datenbank, sondern generiert Token f&uuml;r Token etwas Neues.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">P</strong>re-trained</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">Das Modell wurde <strong>vorab trainiert</strong> &ndash; auf riesigen Textmengen (B&uuml;cher, Web, Code). Dieses Training ist abgeschlossen, bevor ihr es nutzt. Es lernt <strong>nicht</strong> aus euren Fragen.</p>
            </div>
            <div style="padding:14px 16px;border-radius:10px;background:rgba(47,108,122,0.08);border:2px solid var(--color-border-primary)">
              <p style="font-size:1rem;line-height:1.5"><strong style="color:var(--color-primary);font-size:1.2rem">T</strong>ransformer</p>
              <p style="font-size:0.88rem;color:var(--color-text-subdued);margin-top:4px">Die Architektur dahinter &ndash; das 2017er Paper "Attention Is All You Need". Transformer k&ouml;nnen <strong>Zusammenh&auml;nge &uuml;ber tausende W&ouml;rter</strong> erkennen.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Warum ist das wichtig?</h3>
          <div style="padding:14px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:12px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-subdued)">
              Der Name sagt euch <strong>alles &uuml;ber die Grenzen</strong>:<br><br>
              <strong>"Pre-trained"</strong> = Das Wissen ist eingefroren. Wie ein Buch: Wenn es gedruckt ist, &auml;ndert sich der Inhalt nicht mehr.<br><br>
              <strong>"Generative"</strong> = Es erzeugt Text, der <em>plausibel klingt</em> &ndash; aber nicht zwingend <em>faktisch korrekt</em> ist.
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Andere Namen, gleiches Prinzip</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>GPT-4, GPT-5</strong></span><span style="color:var(--color-text-subdued)">OpenAI</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>Claude</strong></span><span style="color:var(--color-text-subdued)">Anthropic (auch Transformer)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>Gemini</strong></span><span style="color:var(--color-text-subdued)">Google (auch Transformer)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.85rem;display:flex;justify-content:space-between">
              <span><strong>LLaMA, Qwen, Mistral</strong></span><span style="color:var(--color-text-subdued)">Open Source (auch Transformer)</span>
            </div>
          </div>
          <div style="margin-top:10px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
            <p style="font-size:0.8rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Alle LLMs</strong> basieren auf der Transformer-Architektur. "GPT" ist nur OpenAIs Markenname &ndash; das Prinzip ist &uuml;berall dasselbe.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Training vs. Inference =====
  {
    id: 'training-vs-inference',
    theme: 'slide--dark',
    label: 'Training vs. Nutzung',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Warum lernt die KI nicht aus meinen Fragen?</h2>
      <p class="slide-subtitle">Der wichtigste Unterschied: <strong>Training</strong> (Lernen) vs. <strong>Inference</strong> (Anwenden)</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Training &ndash; so lernt die KI</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#127891; <strong>Wie Schule &amp; Studium</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Monate bis Jahre. Tausende GPUs. Billionen Texte. Das Modell liest quasi das halbe Internet und lernt Muster, Sprache, Logik. Am Ende: ein <strong>fertiges Modell</strong> &ndash; wie ein Absolvent nach dem Studium.</span>
            </p>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Kosten:</strong> $100 Mio.+ pro Training <span style="color:var(--color-text-on-dark-subdued)">(GPT-5, Claude 4)</span>
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Dauer:</strong> Wochen bis Monate auf tausenden GPUs
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Daten:</strong> Billionen Token (B&uuml;cher, Web, Code, Papers)
            </div>
            <div style="padding:8px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              <strong>Ergebnis:</strong> Feste Gewichte &ndash; das "Wissen" ist eingefroren
            </div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Warum neue Versionen?</h3>
          <div style="padding:10px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              Weil <strong>jedes neue Training ein komplett neues Modell</strong> erzeugt &ndash; mit neuen Daten, besseren Algorithmen und mehr Compute. GPT-4 &rarr; GPT-5 = neues Studium, nicht ein Update.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Inference &ndash; so nutzt ihr die KI</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.92rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#128172; <strong>Wie ein Bewerbungsgespr&auml;ch</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Wenn ihr ChatGPT oder Claude eine Frage stellt, <strong>wendet das Modell nur an, was es gelernt hat</strong>. Es ver&auml;ndert sich dabei nicht. 1.000 Nutzer gleichzeitig &ndash; alle nutzen dasselbe unver&auml;nderliche Modell.</span>
            </p>
          </div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Was bei jeder Frage passiert
            </div>
            <div class="code-body"><pre><span class="code-comment">// Eure Frage:</span>
<span class="code-string">"Erkl&auml;re mir Kubernetes"</span>

<span class="code-comment">// Was NICHT passiert:</span>
<span class="code-property">modell.lerne(frage)</span>  <span class="code-comment">// &#10007; Nein!</span>

<span class="code-comment">// Was WIRKLICH passiert:</span>
<span class="code-property">antwort</span> = <span class="code-function">modell.anwenden</span>(frage)
<span class="code-comment">// Modell bleibt exakt gleich.</span>
<span class="code-comment">// N&auml;chster User bekommt dasselbe Modell.</span></pre></div>
          </div>
          <div style="margin-top:10px;padding:10px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:#ff6b6b">Wichtig:</strong> Wenn die KI in einem Chat "besser wird", liegt das am <strong>wachsenden Kontext</strong> &ndash; nicht daran, dass sie lernt. Neuer Chat = alles auf Null.
            </p>
          </div>
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
          <h3 style="color:var(--color-primary);font-size:0.95rem;margin:14px 0 8px">Die Zahlen <a href="https://www.wearetenet.com/blog/github-copilot-usage-data-statistics" target="_blank" rel="noopener" style="font-size:0.65rem;font-weight:400;color:var(--color-primary);text-decoration:underline">(GitHub Copilot Stats)</a></h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px">
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>15 Mio.</strong> Entwickler &bull; +400% / Jahr</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>~50%</strong> des Codes generiert</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>55%</strong> schnellere Aufgaben</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>88%</strong> Code unver&auml;ndert &uuml;bernommen</div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem">PR-Zeit <strong>9,6 &rarr; 2,4 Tage</strong></div>
            <div style="padding:5px 8px;border-radius:6px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2);font-size:0.78rem"><strong>"Vibe Coding"</strong> &ndash; Word of 2025</div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:12px">Die Konsequenzen</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Klarna</strong> &ndash; H&auml;lfte der Belegschaft entlassen. KI ersetzt 700 Stellen. <a href="https://www.businessinsider.de/wirtschaft/international-business/klarna-entlaesst-haelfte-der-mitarbeiter-wegen-ki/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Stack Overflow</strong> &ndash; Historischer Tiefstand. KI hat die Plattform quasi get&ouml;tet. <a href="https://winfuture.de/news,155972.html" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
            <a href="https://blog.pragmaticengineer.com/stack-overflow-is-almost-dead/" target="_blank" rel="noopener">
              <img src="/assets/stackoverflow-traffic-drop.png" alt="Stack Overflow Traffic Drop" style="width:100%;border-radius:6px;margin-top:8px;display:block">
            </a>
          </div>
          <div style="padding:14px;border-radius:10px;background:rgba(191,6,67,0.06);border:1px solid rgba(191,6,67,0.15)">
            <p style="font-size:0.9rem;line-height:1.5"><strong>Bottleneck verschiebt sich</strong> &ndash; Nicht Devs, sondern fachliche Anforderungen sind der Engpass. Code wird schneller gebaut als spezifiziert. <a href="https://github.blog/news-insights/research/survey-reveals-ais-impact-on-the-developer-experience/" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline;font-size:0.8rem">Quelle</a></p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Sam Altman Tweet =====
  {
    id: 'altman-tweet',
    theme: '',
    label: 'Sama Tweet',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Ein Tweet der viral ging</span>
      <h2 class="slide-title" style="color:var(--color-text)">Sam Altman, OpenAI CEO</h2>
      <p class="slide-subtitle" style="font-size:0.85rem">
        <a href="https://x.com/sama/status/2033935276079510011" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">x.com/sama</a>
      </p>
      <div style="display:grid;grid-template-columns:2fr 1fr;gap:24px;margin-top:16px;align-items:stretch">
        <blockquote style="background:var(--color-bg-subdued);border:1px solid var(--color-border);border-left:4px solid var(--color-primary);border-radius:12px;padding:28px 32px;font-size:1.1rem;line-height:1.8;color:var(--color-text);font-style:italic;display:flex;flex-direction:column;justify-content:space-between">
          <div><span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:10px;margin-right:4px">&ldquo;</span>I have so much gratitude to people who wrote extremely complex software character-by-character. It already feels difficult to remember how much effort it really took. Thank you for getting us to this point.<span style="font-size:2.5rem;color:var(--color-primary);line-height:0;position:relative;top:14px;margin-left:4px">&rdquo;</span></div>
          <p style="margin-top:20px;font-size:0.85rem;font-style:normal;color:var(--color-text-subdued)">
            &mdash; Sam Altman (@sama) &middot; <a href="https://x.com/sama/status/2033935276079510011" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">X (Twitter)</a>
          </p>
        </blockquote>
        <div style="padding:20px 22px;background:rgba(47,108,122,0.06);border:1px solid rgba(47,108,122,0.2);border-radius:12px;font-size:0.88rem;line-height:1.7;color:var(--color-text-subdued);font-style:italic;display:flex;flex-direction:column;justify-content:space-between">
          <div>
            <p style="font-size:0.72rem;font-style:normal;color:var(--color-text-subdued);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.05em">&#127465;&#127466; &Uuml;bersetzung</p>
            <span style="font-size:1.4rem;color:var(--color-primary);line-height:0;position:relative;top:6px;margin-right:2px">&ldquo;</span>Ich bin so dankbar gegen&uuml;ber den Menschen, die extrem komplexe Software Zeichen f&uuml;r Zeichen geschrieben haben. Es f&auml;llt mir bereits schwer, mir vorzustellen, wie viel Aufwand das wirklich erfordert hat. Danke, dass ihr uns bis hierher gebracht habt.<span style="font-size:1.4rem;color:var(--color-primary);line-height:0;position:relative;top:8px;margin-left:2px">&rdquo;</span>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Altman Tweet Bedeutung =====
  {
    id: 'altman-tweet-meaning',
    theme: 'slide--dark',
    label: 'Was bedeutet das?',
    content: `
      <span class="slide-label">Einordnung</span>
      <h2 class="slide-title">"Thank you for getting us to this point."</h2>
      <p class="slide-subtitle">Warum ein einfaches Dankeschön viral ging &ndash; und was die Reaktionen zeigen</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">Oberfl&auml;chlich</h3>
          <div style="padding:10px 14px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);margin-bottom:10px;font-size:0.85rem;color:var(--color-text-on-dark)">
            Anerkennung f&uuml;r Entwickler &ndash; die komplexe Software Zeichen f&uuml;r Zeichen geschrieben und damit die Grundlage f&uuml;r die heutige KI gelegt haben.
          </div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">Subtext &ndash; warum der Tweet kritisch gesehen wird</h3>
          <div style="padding:10px 14px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.5">
            <strong>"getting us to this point"</strong> &ndash; dieser Punkt = heute, wo KI selbst Code schreibt.<br><br>
            Gleichzeitig entl&auml;sst die Branche massenhaft: Atlassian 1.600 Jobs, Block fast 50%, Meta 20%+. Viele CEOs begr&uuml;nden Entlassungen direkt mit KI-F&auml;higkeiten.
          </div>
          <p style="font-size:0.72rem;margin-top:8px">
            <a href="https://futurism.com/artificial-intelligence/sam-altman-thanks-programmers-over" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">futurism.com &rarr; Reaktionen auf den Tweet</a>
          </p>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:10px">Die Reaktionen</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark-subdued);font-style:italic">
              "You&rsquo;re welcome. Nice to know that our reward is our jobs being taken away."
            </div>
            <div style="padding:10px 12px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);font-size:0.82rem;color:var(--color-text-on-dark-subdued);font-style:italic">
              "Nothing says &lsquo;you&rsquo;re being replaced&rsquo; quite like a heartfelt thank you from the guy doing the replacing."
            </div>
          </div>
          <div style="padding:12px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-top:12px">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:var(--color-accent)">Was das bedeutet:</strong> Die Rolle von Entwicklern <em>ver&auml;ndert sich</em> &ndash; das ist unbestreitbar. Die Frage ist nicht ob, sondern <strong>wie wir uns anpassen</strong>. Genau darum geht es in diesem Workshop.
            </p>
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
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/openai-logo.svg" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="OpenAI">
            <span class="card-title" style="margin:0">OpenAI</span>
          </div>
          <div class="card-text"><strong>GPT-5.4, o3, Codex</strong><br>Gegr. 2015. Sam Altman. ChatGPT, DALL-E, Sora. >$150 Mrd. Bewertung.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/anthropic-favicon.ico" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="Anthropic">
            <span class="card-title" style="margin:0">Anthropic</span>
          </div>
          <div class="card-text"><strong>Claude 4.6 Opus/Sonnet</strong><br>Gegr. 2021. Dario &amp; Daniela Amodei. KI-Sicherheit. Backed by Google &amp; Amazon.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/google-favicon.ico" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="Google">
            <span class="card-title" style="margin:0">Google DeepMind</span>
          </div>
          <div class="card-text"><strong>Gemini 3.1 Pro</strong><br>Google Brain + DeepMind (2023). Enormer Daten- &amp; Compute-Vorteil. Aktuell führend.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/meta-logo.png" style="width:44px;height:22px;object-fit:contain;flex-shrink:0" alt="Meta">
            <span class="card-title" style="margin:0">Meta AI</span>
          </div>
          <div class="card-text"><strong>LLaMA 4 Maverick (Open Source)</strong><br>Gr&ouml;&szlig;ter Open-Weight-Contributor. Offene Modelle f&uuml;r alle.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/qwen-favicon.ico" onerror="this.src='https://raw.githubusercontent.com/QwenLM/Qwen/refs/heads/main/assets/logo.jpg'" style="width:22px;height:22px;object-fit:contain;border-radius:4px;flex-shrink:0" alt="Qwen">
            <span class="card-title" style="margin:0">Alibaba / Qwen</span>
          </div>
          <div class="card-text"><strong>Qwen 3.5 (kostenlos!)</strong><br>Open Source, on-prem hostbar. Coder, MoE, 262k Kontext.</div>
        </div>
        <div class="card" style="padding:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
            <img src="/assets/xai-favicon.ico" onerror="this.src='https://x.com/favicon.ico'" style="width:22px;height:22px;object-fit:contain;flex-shrink:0" alt="xAI">
            <span class="card-title" style="margin:0">xAI</span>
          </div>
          <div class="card-text"><strong>Grok 4.20</strong><br>Gegr. 2023 von Elon Musk. Integriert in X (Twitter). Colossus-Supercluster.</div>
        </div>
      </div>
      <div class="tags reveal-ready reveal-hidden" style="margin-top:16px">
        <span class="tag">+ Mistral AI (Frankreich)</span>
        <span class="tag">+ DeepSeek (China)</span>
        <span class="tag">+ Cohere (Enterprise)</span>
        <span class="tag">+ Kimi K2.5 (Moonshot)</span>
        <span class="tag">+ Cursor (Composer 2)</span>
      </div>
    `,
  },

  // ===== AGI & Intelligence erkl&auml;rt =====
  {
    id: 'agi-explained',
    theme: 'slide--dark',
    label: 'AGI & IQ',
    content: `
      <span class="slide-label">Bevor wir vergleichen</span>
      <h2 class="slide-title">Was ist AGI &ndash; wirklich?</h2>
      <p class="slide-subtitle">Eine konkrete Definition: AGI = KI die die <strong>kognitive Vielseitigkeit</strong> eines gebildeten Erwachsenen erreicht oder &uuml;bertrifft</p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">Die 10 kognitiven Dimensionen (Hendrycks et al.)</h3>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;margin-bottom:10px">
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128218; Wissen</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#129504; Reasoning</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128065; Wahrnehmung</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#129303; Soziale Kognition</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#9881; Arbeitsged&auml;chtnis</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(255,107,107,0.1);border:1px solid rgba(255,107,107,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128190; Langzeitged&auml;chtnis &#9888;</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#9889; Verarbeitungsgeschwindigkeit</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#127775; Kreativit&auml;t</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128293; Motivation &amp; Ziele</div>
            <div style="padding:6px 10px;border-radius:6px;background:rgba(47,108,122,0.15);border:1px solid rgba(47,108,122,0.3);font-size:0.78rem;color:var(--color-text-on-dark)">&#128101; Soziales Handeln</div>
          </div>
          <div style="padding:8px 10px;border-radius:6px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:#ff6b6b">Schwachpunkt ⚠</strong> KI-Modelle haben ein <strong>"jagged" Profil</strong>: stark in Wissen &amp; Logik, aber <strong>kritische L&uuml;cken</strong> beim Langzeitged&auml;chtnis und gesundem Menschenverstand.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:0.95rem;margin-bottom:8px">AGI Score &ndash; wo stehen wir?</h3>
          <div style="display:flex;align-items:end;justify-content:center;gap:12px;padding:14px;border-radius:10px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);margin-bottom:10px">
            <div style="text-align:center">
              <div style="font-size:1.8rem;font-weight:700;color:var(--color-text-on-dark-subdued)">27%</div>
              <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued)">GPT-4 (2023)</div>
            </div>
            <div style="font-size:1.2rem;color:var(--color-text-on-dark-subdued)">&rarr;</div>
            <div style="text-align:center">
              <div style="font-size:2.2rem;font-weight:700;color:var(--color-accent)">57%</div>
              <div style="font-size:0.7rem;color:var(--color-accent)">GPT-5.4 & Gemini 3.1 Pro (März 2026)</div>
            </div>
            <div style="font-size:1.2rem;color:var(--color-text-on-dark-subdued)">&rarr;</div>
            <div style="text-align:center">
              <div style="font-size:1.5rem;font-weight:700;color:var(--color-text-on-dark-subdued);opacity:0.3">100%</div>
              <div style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);opacity:0.3">AGI</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
                <strong style="color:var(--color-accent)">+30% in 3 Jahren.</strong> Von GPT-4 auf GPT-5.4 &amp; Gemini 3.1 Pro. Wenn das Tempo anh&auml;lt &ndash; wann ist 100%?
              </p>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
              <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
                <strong>Basiert auf:</strong> Cattell-Horn-Carroll Theorie &ndash; dem am besten validierten Modell menschlicher Kognition. 10 Dimensionen, je 10% gewichtet.
              </p>
            </div>
          </div>
          <p style="font-size:0.7rem;color:var(--color-text-on-dark-subdued);margin-top:8px;text-align:right">
            Hendrycks et al. 2025 &middot; <a href="https://www.agidefinition.ai/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">agidefinition.ai</a>
          </p>
          <div style="padding:8px 10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.2);margin-top:8px">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:#ff6b6b">&#129300; Bewusstsein?</strong> Einige KI-Gr&uuml;nder sagen: Sie k&ouml;nnen nicht vollst&auml;ndig ausschlie&szlig;en, dass ihre Modelle eine Art Bewusstsein entwickelt haben.
              <a href="https://www.heise.de/hintergrund/Hat-KI-bereits-eine-Art-Bewusstsein-entwickelt-Forscher-streiten-darueber-6522868.html" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;margin-left:4px">heise.de</a>
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== IQ Entwicklung =====
  {
    id: 'iq-development',
    theme: '',
    label: 'IQ Entwicklung',
    content: `
      <span class="slide-label" style="color:var(--color-primary)">Wie hat sich der IQ entwickelt?</span>
      <h2 class="slide-title" style="color:var(--color-text);font-size:1.5rem">KI-IQ &ndash; Historische Entwicklung</h2>
      <p class="slide-subtitle" style="font-size:0.9rem">Wie schnell die Modelle kl&uuml;ger wurden &ndash; in nur wenigen Jahren</p>
      <div style="display:flex;gap:16px;margin-top:10px;align-items:flex-start">
        <div style="flex:1;min-width:0">
          <img src="/img/TrackingAI-Historical-IQ.gif" alt="Historische IQ-Entwicklung der KI-Modelle" style="max-width:100%;max-height:50vh;border-radius:10px;border:1px solid var(--color-border)">
          <div style="display:flex;align-items:center;gap:12px;margin-top:6px;flex-wrap:wrap">
            <p style="font-size:0.7rem;color:var(--color-text-subdued)">Stand: M&auml;rz 2026</p>
            <p style="font-size:0.7rem;color:var(--color-text-subdued)">
              Quelle: <a href="https://www.trackingai.org/home" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">trackingai.org</a>
            </p>
          </div>
        </div>
        <div style="width:200px;flex-shrink:0">
          <h3 style="color:var(--color-primary);font-size:0.85rem;margin-bottom:8px">Zum Vergleich &ndash; Mensch</h3>
          <div style="display:flex;flex-direction:column;gap:6px">
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Durchschnitt</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-text)">~100</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Normalbev&ouml;lkerung</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.3)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Entwickler</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-primary)">~110&ndash;120</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Technik-Berufe</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.15);border:1px solid var(--color-primary)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">Hochbegabt</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-primary)">130+</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Top 2% der Bev&ouml;lkerung</div>
            </div>
            <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.3)">
              <div style="font-size:0.7rem;color:var(--color-text-subdued);margin-bottom:2px">KI 2026 (Top-Modelle, Mensa Norway)</div>
              <div style="font-size:1.2rem;font-weight:700;color:var(--color-warning)">~146</div>
              <div style="font-size:0.68rem;color:var(--color-text-subdued)">Gemini 3.1 Pro &bull; Wachstum fast w&ouml;chentlich</div>
            </div>
          </div>
          <p style="font-size:0.62rem;color:var(--color-text-subdued);margin-top:6px;line-height:1.3">* Grobe &Auml;quivalente. KI-IQ &ne; menschliche Intelligenz. Quelle: <a href="https://www.trackingai.org/home" target="_blank" rel="noopener" style="color:var(--color-primary);text-decoration:underline">trackingai.org</a></p>
        </div>
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
      <h2 class="slide-title">Wer ist vorne? <span style="font-size:0.5em;font-weight:400;opacity:0.6">(Stand 21.03.2026)</span></h2>
      <div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;flex-wrap:wrap">
        <p class="slide-subtitle" style="margin-bottom:0;flex:1">Ein regelm&auml;&szlig;iger Wettkampf &ndash; Stand &auml;ndert sich w&ouml;chentlich</p>
        <div style="display:flex;gap:8px">
          <button class="view-toggle active" data-view="table" id="btn-table">Tabelle</button>
          <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" class="view-toggle" style="text-decoration:none">Live Leaderboard &#8599;</a>
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
          </div>
        </div>
      </div>
    `,
  },

  // ===== Kosten-Rechner: Was kostet ein Projekt? =====
  {
    id: 'cost-calculator',
    theme: 'slide--dark',
    label: 'Kosten',
    content: `
      <span class="slide-label" style="color:var(--color-accent)">Praxis</span>
      <h2 class="slide-title" style="font-size:1.3rem">Was kostet ein Projekt mit AI? &ndash; Beispiel: 2048-Spiel</h2>
      <p class="slide-subtitle" style="font-size:0.82rem">Ein typisches Coding-Projekt: ~50K Input-Tokens + ~20K Output-Tokens pro Session</p>
      <div style="margin-top:10px;overflow-x:auto">
        <table class="comparison" style="font-size:0.72rem;width:100%">
          <thead><tr><th>Modell</th><th>Input $/M</th><th>Output $/M</th><th>2048-Spiel<br><small>(50K in + 20K out)</small></th><th>10 Projekte</th><th>Qualit&auml;t</th></tr></thead>
          <tbody>
            <tr><td><strong>Claude Opus 4.6</strong></td><td>$5.00</td><td>$25.00</td><td style="color:var(--color-accent);font-weight:700">~$0.75</td><td>~$7.50</td><td>&#11088;&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Claude Sonnet 4.6</strong></td><td>$3.00</td><td>$15.00</td><td style="color:var(--color-accent);font-weight:700">~$0.45</td><td>~$4.50</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Claude Haiku 4.5</strong></td><td>$1.00</td><td>$5.00</td><td style="color:var(--color-positive);font-weight:700">~$0.15</td><td>~$1.50</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>GPT-5.1 Codex</strong></td><td>$2.50</td><td>$10.00</td><td style="font-weight:700">~$0.33</td><td>~$3.30</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>GPT-4.1 Nano</strong></td><td>$0.05</td><td>$0.20</td><td style="color:var(--color-positive);font-weight:700">~$0.01</td><td>~$0.07</td><td>&#11088;&#11088;</td></tr>
            <tr><td><strong>Gemini 3.1 Pro</strong></td><td>$1.25</td><td>$5.00</td><td style="font-weight:700">~$0.16</td><td>~$1.63</td><td>&#11088;&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>DeepSeek V3.2</strong></td><td>$0.01</td><td>$0.03</td><td style="color:var(--color-positive);font-weight:700">&lt;$0.01</td><td>~$0.01</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Qwen 3.5 (9B)</strong></td><td>$0.04</td><td>$0.15</td><td style="color:var(--color-positive);font-weight:700">&lt;$0.01</td><td>~$0.05</td><td>&#11088;&#11088;&#11088;</td></tr>
            <tr><td><strong>Ollama (lokal)</strong></td><td colspan="2" style="text-align:center">Gratis (Strom)</td><td style="color:var(--color-positive);font-weight:700">$0.00</td><td>$0.00</td><td>&#11088;&ndash;&#11088;&#11088;&#11088;</td></tr>
          </tbody>
        </table>
      </div>
      <div class="two-cols" style="margin-top:8px">
        <div style="padding:8px 10px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Rechenbeispiel:</strong> 2048-Spiel mit Claude Sonnet 4.6: <strong>~50K Input + ~20K Output = $0.45</strong>. Mit Haiku f&uuml;r Explore/Plan und Sonnet nur f&uuml;r Build: <strong>~$0.25</strong>. Ein ganzer Arbeitstag Coding: <strong>$2-5</strong>.
        </div>
        <div style="padding:8px 10px;border-radius:8px;background:rgba(47,108,122,0.1);border:1px solid rgba(47,108,122,0.2);font-size:0.72rem;color:rgba(255,255,255,0.7);line-height:1.4">
          <strong style="color:var(--color-accent)">Live-Preise:</strong> <a href="https://pricepertoken.com" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline">pricepertoken.com</a> &ndash; 300+ Modelle im Vergleich. Preise &auml;ndern sich st&auml;ndig, <strong>Trend: immer g&uuml;nstiger</strong>.
        </div>
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
      <div class="two-cols" style="margin-top:20px">
        <div>
          <table class="comparison" style="font-size:0.9rem">
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
                <td>~$2.19/M</td>
                <td style="color:var(--color-positive)">&#10003; Ja</td>
              </tr>
              <tr>
                <td><strong>Gemini 2.5</strong></td>
                <td>~$1.25-10/M</td>
                <td style="color:var(--color-critical)">&#10007; Nein</td>
              </tr>
              <tr>
                <td><strong>GPT-4.1</strong></td>
                <td>~$2-8/M</td>
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
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">Das Dilemma</h3>
          <ul class="feature-list" style="gap:8px">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">$</span><span><strong>Kostenlos = Daten</strong> &ndash; "Wenn das Produkt nichts kostet, sind deine Daten das Produkt." Alibaba lernt aus jedem Prompt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#9650;</span><span><strong>Top-Modelle nur Cloud</strong> &ndash; Opus, Codex, o3 nur &uuml;ber AWS, Azure, GCP.</span></li>
            <li><span class="check">&#128274;</span><span><strong>On-Prem = Kontrolle</strong> &ndash; Aber weniger leistungsf&auml;hig.</span></li>
            <li><span class="check">&#128176;</span><span><strong>Abos</strong> &ndash; ChatGPT, Claude, Gemini: je $20/Mo.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">&#128187;</span><span><strong>On-Prem = GPU-Problem</strong> &ndash; Modelle werden gr&ouml;&szlig;er, GPUs veralten schnell.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.85rem;color:var(--color-primary);font-weight:700;margin-bottom:2px">Fazit</p>
        <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.4">
          On-Prem klingt nach Kontrolle &ndash; aber Modelle werden alle paar Monate gr&ouml;&szlig;er. <strong>Cloud bleibt die einzige Option, um up-to-date zu sein.</strong>
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
      <p class="slide-subtitle">Jede Woche ein neues &bdquo;bestes Modell&ldquo; &ndash; das Tempo ist atemberaubend</p>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-top:16px">
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#128640;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Monatliche Releases</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Anthropic, OpenAI, Google &uuml;berbieten sich gegenseitig im Wochen-Takt</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#129504;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Reasoning explodiert</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Chain-of-Thought, o3, DeepSeek R1 &ndash; Modelle &bdquo;denken&ldquo; jetzt nach</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#127757;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Open Source holt auf</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Qwen 3, LLaMA 4, DeepSeek schlie&szlig;en die L&uuml;cke zu Closed-Source</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#128176;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Preise im freien Fall</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">$60/M Token in 2023 &rarr; heute $2 oder weniger</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#9888;</div>
          <strong style="font-size:0.9rem;color:var(--color-text-on-dark)">Safety-Debatte</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">Schneller Fortschritt, offene Fragen zu Alignment, Bias, Kontrolle</p>
        </div>
        <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.2)">
          <div style="font-size:1.3rem;margin-bottom:6px">&#129352;</div>
          <strong style="font-size:0.9rem;color:var(--color-accent)">Cursor schl&auml;gt Claude &amp; GPT-5</strong>
          <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);margin-top:4px;line-height:1.4">86% weniger Kosten &ndash; vermutlich auf Open-Source Kimi k2.5 basierend</p>
        </div>
       </div>
      <div style="padding:10px 14px;border-radius:8px;background:rgba(191,6,67,0.08);border:1px solid rgba(191,6,67,0.2);margin-top:10px">
        <p style="font-size:0.8rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
          <strong style="color:#ff6b6b">&#9888; Modelle lernen von Modellen (Distillation)</strong> &ndash; Cursor basiert vermutlich auf Kimi K2.5. Anthropic hat industrielle Distillation durch DeepSeek, Moonshot &amp; MiniMax nachgewiesen: 16 Mio. Anfragen &uuml;ber 24.000 gef&auml;lschte Accounts um Claude zu kopieren.
          <a href="https://www.anthropic.com/news/detecting-and-preventing-distillation-attacks" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;margin-left:4px">Anthropic Bericht</a>
        </p>
      </div>
      <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
        <a href="https://artificialanalysis.ai/leaderboards/models" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Artificial Analysis</a>
        <span style="color:var(--color-text-on-dark-subdued);font-size:0.78rem">&middot;</span>
        <a href="https://newsletter.genai.works/p/cursor-s-new-model-beats-claude-and-costs-86-less" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Cursor Modell</a>
        <span style="color:var(--color-text-on-dark-subdued);font-size:0.78rem">&middot;</span>
        <a href="https://www.reddit.com/r/singularity/comments/1ryrs2w/cursors_composer_2_model_is_apparently_just_kimi/" target="_blank" rel="noopener" style="color:var(--color-accent);text-decoration:underline;font-size:0.78rem">Kimi k2.5</a>
      </div>
    `,
  },

  // ===== Quiz: Geschichte =====
  {
    id: 'quiz-history',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Wissens-Check: Geschichte der KI</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. Wann wurde ChatGPT ver&ouml;ffentlicht und wie schnell erreichte es 100 Mio. Nutzer?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">2021 &ndash; in 6 Monaten</button>
            <button class="quiz-option" data-correct="true">30. November 2022 &ndash; in 2 Monaten</button>
            <button class="quiz-option" data-correct="false">2023 &ndash; in 1 Jahr</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. Warum haben 2026 viele Nutzer ChatGPT deinstalliert?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Weil es zu teuer wurde</button>
            <button class="quiz-option" data-correct="true">Wegen OpenAIs Pentagon-Deal und der Ank&uuml;ndigung von Werbung</button>
            <button class="quiz-option" data-correct="false">Weil Claude besser war</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Was zeigt das Beispiel "$82.314 in 48 Stunden"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Wie viel ein KI-Modell kostet</button>
            <button class="quiz-option" data-correct="false">Den Umsatz eines KI-Startups</button>
            <button class="quiz-option" data-correct="true">Wie schnell Kosten durch einen geleakten API-Key explodieren k&ouml;nnen</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
