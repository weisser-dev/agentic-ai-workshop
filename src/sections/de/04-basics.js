export const basicsSlides = [
  // ===== SECTION DIVIDER - Die Basics =====
  {
    id: 'section-basics',
    theme: 'slide--accent slide--divider',
    label: 'Basics',
    content: `
      <div class="divider-number" style="color:var(--color-bg-dark)">&#129504;</div>
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
      <p class="slide-subtitle">Spoiler: Es denkt nicht. Es <strong>berechnet Wahrscheinlichkeiten</strong> &ndash; extrem gut.</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Token-Prediction</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:12px;font-size:0.9rem">
            Ein LLM macht nur eins: Es sagt das <strong>n&auml;chste Token</strong> vorher. Immer wieder. (Token &asymp; Wortteile &ndash; nicht immer ganze W&ouml;rter)
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              So funktioniert es
            </div>
            <div class="code-body"><pre><span class="code-comment">// Input</span>
<span class="code-string">"Die Hauptstadt von Frankreich ist"</span>

<span class="code-comment">// LLM berechnet Wahrscheinlichkeiten:</span>
<span class="code-property">"Paris"</span>    <span class="code-number">96.2%</span>
<span class="code-property">"Lyon"</span>     <span class="code-number"> 1.1%</span>
<span class="code-property">"Berlin"</span>   <span class="code-number"> 0.3%</span>

<span class="code-comment">// W&auml;hlt ein wahrscheinliches Token</span>
<span class="code-comment">// (oft das h&ouml;chste, aber Sampling m&ouml;glich):</span>
<span class="code-keyword">&rarr;</span> <span class="code-string">"Paris"</span>

<span class="code-comment">// Dann: Token f&uuml;r Token weiter.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Wie ein Handy &ndash; aber f&uuml;r alles</h3>
          <div style="padding:14px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:14px">
            <p style="font-size:0.9rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128241; <strong>Autocomplete auf dem Handy</strong> &ndash; "Bin gleich" &rarr; Handy schl&auml;gt "da" vor. <strong>Genau das Prinzip.</strong> Nur mit kontextsensitiven Milliarden-Parametern, statt simples N-Gramm.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:10px">Warum funktioniert das so gut?</h3>
          <ul class="feature-list" style="font-size:0.9rem">
            <li><span class="check">&#128218;</span><span><strong>Gro&szlig;e Textkorpora</strong> &ndash; B&uuml;cher, Webseiten, Code, Wikipedia &ndash; nicht einfach "das Internet"</span></li>
            <li><span class="check">&#129504;</span><span><strong>Transformer + Attention</strong> &ndash; Erkennt Zusammenh&auml;nge &uuml;ber tausende Token (2017, "Attention Is All You Need")</span></li>
            <li><span class="check">&#128200;</span><span><strong>Skalierung</strong> &ndash; Mehr Daten + mehr Compute = F&auml;higkeiten, <em>die wie Denken wirken</em></span></li>
          </ul>
          <div style="padding:8px 12px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.15);margin-top:10px">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              &#9888; Kein echtes Weltmodell, kein Bewusstsein, keine eigenen Ziele &ndash; auch wenn es so wirkt.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Wie lernt ein neuronales Netz? =====
  {
    id: 'nn-learning',
    theme: 'slide--dark',
    label: 'Wie KI lernt',
    content: `
      <span class="slide-label">Deep Dive</span>
      <h2 class="slide-title">Wie lernt ein neuronales Netz?</h2>
      <p class="slide-subtitle">Ein Beispiel: Lernen, ob eine E-Mail Spam ist &ndash; <strong>Schritt f&uuml;r Schritt</strong></p>
      <div class="two-cols" style="margin-top:14px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Das Prinzip: Versuch &amp; Korrektur</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.9rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#127922; <strong>Wie ein Kind, das Fahrrad fahren lernt:</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Versuch &rarr; Hinfallen &rarr; Korrektur &rarr; Besser werden. Nicht durch Regeln lesen, sondern durch <strong>tausende Versuche</strong>.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Beispiel: Spam-Erkennung</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Training &ndash; Runde 1
            </div>
            <div class="code-body"><pre><span class="code-comment">// Trainings-Daten (mit L&ouml;sung!):</span>
<span class="code-string">"Gratis iPhone gewinnen!!!"</span> <span class="code-keyword">&rarr; Spam</span>
<span class="code-string">"Meeting morgen um 10"</span>      <span class="code-keyword">&rarr; Kein Spam</span>
<span class="code-string">"Sie haben 1M EUR gewonnen"</span> <span class="code-keyword">&rarr; Spam</span>

<span class="code-comment">// Netz r&auml;t (Anfangs zuf&auml;llig):</span>
<span class="code-property">"Gratis iPhone"</span> <span class="code-number">&rarr; 50% Spam</span>  <span class="code-comment">&#10007; Falsch!</span>

<span class="code-comment">// Fehler berechnen (Loss):</span>
<span class="code-property">Soll: 100%</span> | <span class="code-property">Ist: 50%</span> | <span class="code-number">Fehler: 50%</span>

<span class="code-comment">// Gewichte anpassen (Backpropagation):</span>
<span class="code-comment">// "Gratis" &amp; "!!!" bekommen mehr Gewicht</span>
<span class="code-comment">// f&uuml;r Spam-Erkennung.</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Nach Millionen Runden</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Training &ndash; Runde 5.000.000
            </div>
            <div class="code-body"><pre><span class="code-comment">// Jetzt erkennt das Netz Muster:</span>
<span class="code-string">"Gratis iPhone"</span>   <span class="code-number">&rarr; 99.1% Spam</span> <span class="code-comment">&#10003;</span>
<span class="code-string">"Meeting um 10"</span>   <span class="code-number">&rarr;  0.3% Spam</span> <span class="code-comment">&#10003;</span>
<span class="code-string">"Kredit sofort!!"</span> <span class="code-number">&rarr; 97.8% Spam</span> <span class="code-comment">&#10003;</span>

<span class="code-comment">// Gelernte Muster (vereinfacht):</span>
<span class="code-property">"gratis"</span>    <span class="code-keyword">+0.8 Spam</span>
<span class="code-property">"gewinnen"</span>  <span class="code-keyword">+0.7 Spam</span>
<span class="code-property">"!!!"</span>       <span class="code-keyword">+0.4 Spam</span>
<span class="code-property">"meeting"</span>   <span class="code-keyword">-0.6 Spam</span>
<span class="code-property">"projekt"</span>   <span class="code-keyword">-0.5 Spam</span></pre></div>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin:10px 0 8px">Bei einem LLM &ndash; dasselbe Prinzip</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Statt Spam/Kein-Spam: <strong>N&auml;chstes Wort vorhersagen</strong>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Statt tausende E-Mails: <strong>Billionen S&auml;tze</strong> aus dem Internet
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Statt wenige Gewichte: <strong>Hunderte Milliarden Parameter</strong>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.82rem;color:var(--color-text-on-dark)">
              Statt Minuten: <strong>Monate auf tausenden GPUs</strong>, Kosten: $100M+
            </div>
          </div>
          <div style="margin-top:8px;padding:8px 12px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.78rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Merke:</strong> Kein Mensch programmiert Regeln. Das Netz findet die Muster <strong>selbst</strong> &ndash; durch Millionen von Versuch-und-Korrektur-Zyklen.
            </p>
          </div>
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
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Tokenisierung</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Euer Text wird in Tokens zerlegt. Jedem Token wird eine <strong>feste ID aus dem Vokabular</strong> zugeordnet (~100k Eintr&auml;ge, modellabh&auml;ngig).
          </p>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Prompt &rarr; Tokens &rarr; IDs
            </div>
            <div class="code-body"><pre><span class="code-comment">// Euer Prompt:</span>
<span class="code-string">"Write a function that sorts users"</span>

<span class="code-comment">// Tokenisiert (Sub-Words, mit Leerzeichen):</span>
[<span class="code-property">"Write"</span>, <span class="code-property">" a"</span>, <span class="code-property">" function"</span>,
 <span class="code-property">" that"</span>, <span class="code-property">" sorts"</span>, <span class="code-property">" users"</span>]

<span class="code-comment">// Als IDs aus dem Vokabular:</span>
[<span class="code-number">6761</span>, <span class="code-number">264</span>, <span class="code-number">734</span>, <span class="code-number">430</span>, <span class="code-number">21377</span>, <span class="code-number">3932</span>]

<span class="code-comment">// + Positions-Encoding (Reihenfolge!)</span>
<span class="code-comment">// Sonst: kein Unterschied zwischen</span>
<span class="code-comment">// "Hund beißt Mann" und "Mann beißt Hund"</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Embeddings &ndash; Kontext als Koordinaten</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Jede Token-ID wird in einen <strong>Vektor</strong> umgewandelt &ndash; eine numerische Repr&auml;sentation, die <strong>Bedeutung und Kontext widerspiegelt</strong> (statistisch gelernt, keine echte Definition).
          </p>
          <div style="padding:12px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
            <p style="font-size:0.88rem;line-height:1.5">
              &#127758; <strong>GPS-Koordinaten f&uuml;r W&ouml;rter</strong><br>
              <span style="color:var(--color-text-subdued)">"function" und "method" liegen nah. "banana" weit weg. Nicht 2D, sondern <strong>typisch 768&ndash;4096 Dimensionen</strong>.</span>
            </p>
          </div>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Embedding-Vektor (vereinfacht)
            </div>
            <div class="code-body" style="font-size:0.8rem"><pre><span class="code-comment">// "function" (4096 Dims):</span>
[<span class="code-number">0.23</span>, <span class="code-number">-0.87</span>, <span class="code-number">0.44</span>, <span class="code-number">0.12</span> ...]

<span class="code-comment">// "method" &ndash; nah beieinander:</span>
[<span class="code-number">0.21</span>, <span class="code-number">-0.85</span>, <span class="code-number">0.41</span>, <span class="code-number">0.14</span> ...]

<span class="code-comment">// "banana" &ndash; weit weg:</span>
[<span class="code-number">-0.72</span>, <span class="code-number">0.54</span>, <span class="code-number">-0.11</span>, <span class="code-number">0.88</span> ...]</pre></div>
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
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Attention &ndash; "Worauf achte ich?"</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;font-size:0.9rem;margin-bottom:10px">
            Jedes Token <strong>gewichtet alle anderen Tokens im Kontext</strong> und kombiniert die Informationen. Das l&auml;uft durch 80&ndash;128 Layer &ndash; jeder verfeinert die Repr&auml;sentation. Technisch &uuml;ber Query-, Key- und Value-Vektoren.
          </p>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:12px">
            <p style="font-size:0.88rem;line-height:1.5;color:var(--color-text-on-dark)">
              &#128101; <strong>Konferenzraum:</strong>
              <span style="color:var(--color-text-on-dark-subdued);display:block;margin-top:4px">"Write a <strong>function</strong> that <strong>sorts users</strong>" &ndash; "function", "sorts", "users" h&auml;ngen stark zusammen. "a", "that" weniger. Genau das berechnet Attention &ndash; mathematisch, f&uuml;r den gesamten Kontext.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Temperatur</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check">&#129482;</span><span><strong>Temp 0</strong> &ndash; Sehr fokussiert, fast immer das wahrscheinlichste Token. Ideal f&uuml;r Code.</span></li>
            <li><span class="check">&#127912;</span><span><strong>Temp 1+</strong> &ndash; Flachere Wahrscheinlichkeitsverteilung &rarr; mehr Vielfalt, aber auch mehr Fehler.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">So entsteht Code &ndash; Token f&uuml;r Token</h3>
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
<span class="code-comment">// ...</span>

<span class="code-keyword">def</span> <span class="code-function">sort_users</span>(users, key=<span class="code-string">"name"</span>):
    <span class="code-keyword">return</span> <span class="code-function">sorted</span>(
        users,
        key=<span class="code-keyword">lambda</span> u: u[key]
    )</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-on-dark-subdued);line-height:1.4">
              <strong style="color:var(--color-accent)">Wichtig:</strong> Das Modell hat <em>kein echtes semantisches Verst&auml;ndnis wie ein Mensch</em>. Es nutzt statistische Muster: nach <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">def sort_</code> kommt wahrscheinlich <code style="background:rgba(255,255,255,0.1);padding:1px 4px;border-radius:3px;font-size:0.75rem">users(</code> &ndash; weil es <strong>abstrakte Muster, Syntax und Struktur</strong> aus Millionen Beispielen gelernt hat.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Common Sense & Grenzen =====
  {
    id: 'common-sense',
    theme: '',
    label: 'Common Sense',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Grenzen</span>
      <h2 class="slide-title">Warum KI manchmal "dumm" antwortet</h2>
      <p class="slide-subtitle">Statistik vs. Weltverst&auml;ndnis &ndash; und was das mit Dimensionen zu tun hat</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Das Waschanlage-Problem</h3>
          <div class="code-block" style="margin-top:0">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Prompt an die KI
            </div>
            <div class="code-body"><pre><span class="code-comment">// User:</span>
<span class="code-string">"Es ist sonnig. Ich wohne 100m von
der Waschanlage entfernt.
Soll ich laufen oder fahren?"</span>

<span class="code-comment">// KI antwortet:</span>
<span class="code-property">"Bei nur 100m Entfernung und sonnigem
Wetter w&uuml;rde ich empfehlen zu laufen.
Das ist gesund und spart Benzin."</span>

<span class="code-comment">// Mensch denkt:</span>
<span class="code-keyword">"Man muss fahren &ndash; das Auto muss
ja zur Waschanlage!"</span> &#128561;</pre></div>
          </div>
          <div style="margin-top:10px;padding:10px;border-radius:8px;background:rgba(255,107,107,0.08);border:1px solid rgba(255,107,107,0.15)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-critical)">Was ist passiert?</strong> Die KI hat das <strong>statistische Muster</strong> "kurze Strecke + gutes Wetter = laufen" angewendet. Aber den <strong>Zweck</strong> (Auto waschen) nicht wirklich verstanden.
            </p>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:8px">Warum passiert das?</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Kein Weltmodell</strong> &ndash; Die KI "wei&szlig;" nicht was eine Waschanlage <em>tut</em>. Sie kennt nur statistische Zusammenh&auml;nge zwischen W&ouml;rtern.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Implizites Wissen fehlt</strong> &ndash; Ein Mensch weiß: Waschanlage = Auto wird gewaschen = Auto muss dort sein. Die KI sieht nur: Entfernung + Wetter.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span><strong>Dimensionen helfen, aber nicht genug</strong> &ndash; Mehr Dimensionen (4096+) erfassen <em>mehr</em> Nuancen &ndash; z.B. dass "Waschanlage" n&auml;her an "Auto" liegt als an "Spaziergang". Aber <strong>r&auml;umliches Denken, Kausalit&auml;t und Alltagslogik</strong> sind nicht dasselbe wie Wort-N&auml;he.</span></li>
          </ul>
          <h3 style="color:var(--color-primary);font-size:1rem;margin:8px 0">Weitere Klassiker</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "Wie viele R in <strong>Strawberry</strong>?" &ndash; KI: "2" <span style="color:var(--color-critical)">&#10007;</span> <span style="color:var(--color-text-subdued)">(Es sind 3 &ndash; Tokens &#8800; Buchstaben)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "Was ist schwerer: 1 kg Stahl oder 1 kg Federn?" &ndash; KI fr&uuml;her: "Stahl" <span style="color:var(--color-text-subdued)">(Muster: Stahl = schwer)</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:var(--color-bg-subdued);border:1px solid var(--color-border);font-size:0.82rem">
              "Ich lege ein Ei auf den Tisch und gehe. Wo ist das Ei?" &ndash; KI antwortet teils falsch
            </div>
          </div>
          <div style="margin-top:8px;padding:10px 12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Fazit:</strong> LLMs werden besser in Common Sense &ndash; aber sie <strong>simulieren</strong> Verst&auml;ndnis &uuml;ber Muster, statt die Welt wirklich zu verstehen. Deshalb: <strong>Immer kritisch pr&uuml;fen.</strong>
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
      <p class="slide-subtitle">Wir reden die ganze Zeit von Tokens &ndash; die <strong>Grundeinheit</strong>, mit der KI arbeitet, rechnet und abrechnet</p>
      <div class="two-cols" style="margin-top:20px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Was ist ein Token?</h3>
          <p style="color:var(--color-text-subdued);line-height:1.5;margin-bottom:12px;font-size:0.9rem">
            Ein Token ist ein St&uuml;ck Text &ndash; meistens ein Wort oder ein Wortteil. Faustregel: <strong>1 Token &asymp; &frac34; eines Wortes</strong> (grob, modellabh&auml;ngig).
          </p>
          <div class="code-block">
            <div class="code-header">
              <div class="code-dots"><span></span><span></span><span></span></div>
              Tokenisierung
            </div>
            <div class="code-body"><pre><span class="code-comment">// Dieser Satz:</span>
<span class="code-string">"Hallo, wie geht es dir?"</span>

<span class="code-comment">// Tokens (inkl. Leerzeichen-Pr&auml;fix):</span>
[<span class="code-property">"Hallo"</span>, <span class="code-property">","</span>, <span class="code-property">" wie"</span>,
 <span class="code-property">" geht"</span>, <span class="code-property">" es"</span>, <span class="code-property">" dir"</span>, <span class="code-property">"?"</span>]

<span class="code-comment">// = 7 Tokens</span>

<span class="code-comment">// Code wird genauso tokenisiert:</span>
<span class="code-string">"function hello() { return 'world'; }"</span>
<span class="code-comment">// &asymp; 10&ndash;15 Tokens</span></pre></div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Alltagsvergleiche <span style="font-size:0.75rem;font-weight:400;color:var(--color-text-subdued)">(grob)</span></h3>
          <div style="display:flex;flex-direction:column;gap:7px">
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.88rem"><strong>1 WhatsApp-Nachricht</strong> (~20 W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~25&ndash;30 Tokens</span></p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.88rem"><strong>1 E-Mail</strong> (~200 W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~250&ndash;300 Tokens</span></p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.88rem"><strong>1 Buchseite</strong> <span style="float:right;color:var(--color-primary);font-weight:700">einige hundert Tokens</span></p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.88rem"><strong>Roman</strong> (~75k W&ouml;rter) <span style="float:right;color:var(--color-primary);font-weight:700">~100.000 Tokens</span></p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:var(--color-bg-subdued);border:1px solid var(--color-border)">
              <p style="font-size:0.88rem"><strong>Gr&ouml;&szlig;eres Codeprojekt</strong> <span style="float:right;color:var(--color-primary);font-weight:700">schnell mehrere 100k Tokens</span></p>
            </div>
          </div>
          <div style="margin-top:12px;padding:10px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.82rem;color:var(--color-text-subdued);line-height:1.4">
              <strong style="color:var(--color-primary)">Kosten:</strong> Gr&ouml;&szlig;enordnung wenige Dollar pro 1 Mio. Tokens (modell- und zeitabh&auml;ngig). Das sind grob &asymp; Hunderttausende W&ouml;rter Text.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Kontext - Das Gedächtnis =====
  {
    id: 'context',
    theme: 'slide--dark',
    label: 'Kontext',
    content: `
      <span class="slide-label">Grundlagen</span>
      <h2 class="slide-title">Kontext &ndash; Das "Ged&auml;chtnis" der KI</h2>
      <p class="slide-subtitle">Alles was die KI gleichzeitig "sehen" kann &ndash; und was passiert, wenn es voll ist</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Was ist Kontext?</h3>
          <p style="color:var(--color-text-on-dark-subdued);line-height:1.5;margin-bottom:10px;font-size:0.9rem">
            System-Prompt, eure Frage, Chatverlauf, eingef&uuml;gter Code &ndash; alles zusammen muss ins Kontextfenster passen. Die KI <strong>erinnert sich nur an das, was gerade im Kontext steht</strong> &ndash; kein echtes Ged&auml;chtnis dar&uuml;ber hinaus.
          </p>
          <div style="padding:12px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:10px">
            <p style="font-size:0.88rem;color:var(--color-text-on-dark);line-height:1.5">
              &#128214; <strong>Vergleich: Schreibtisch</strong><br>
              <span style="color:var(--color-text-on-dark-subdued)">Context Window = Gr&ouml;&szlig;e eures Schreibtischs. Je gr&ouml;&szlig;er, desto mehr Dokumente gleichzeitig drauf. Wenn voll &rarr; Dinge m&uuml;ssen runter.</span>
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Context Windows heute</h3>
          <div style="display:flex;flex-direction:column;gap:5px">
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              Fr&uuml;he Modelle: ~8k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 10 Seiten</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,255,255,0.05);font-size:0.85rem;color:var(--color-text-on-dark)">
              Moderne Modelle: 100k&ndash;200k Tokens <span style="color:var(--color-text-on-dark-subdued)">&asymp; 1 Buch</span>
            </div>
            <div style="padding:7px 12px;border-radius:6px;background:rgba(255,237,0,0.1);font-size:0.85rem;color:var(--color-accent);font-weight:600">
              Neuere Systeme: bis ~1M Tokens (modellabh&auml;ngig)
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:10px">Was passiert wenn voll?</h3>
          <div style="padding:12px;border-radius:10px;background:rgba(191,6,67,0.1);border:1px solid rgba(191,6,67,0.25);margin-bottom:10px">
            <p style="font-size:0.88rem;color:var(--color-text-on-dark);line-height:1.5">
              &#9888; <strong>Alles au&szlig;erhalb des Kontextfensters wird nicht ber&uuml;cksichtigt.</strong> Die KI hat kein echtes Ged&auml;chtnis &ndash; sie wei&szlig; nur, was gerade im Kontext steht.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Praktisch bedeutet das:</h3>
          <ul class="feature-list" style="font-size:0.88rem">
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Lange Chats k&ouml;nnen inkonsistent werden</strong> &ndash; fr&uuml;herer Kontext fehlt, die KI widerspricht sich scheinbar.</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.15);color:#ff6c12">!</span><span><strong>Gro&szlig;e Codebases passen nicht rein</strong> &ndash; die KI sieht nie das ganze System auf einmal.</span></li>
            <li><span class="check">&#128161;</span><span><strong>L&ouml;sung: RAG</strong> &ndash; Nur relevante Teile laden. Wie ein Bibliothekar, der das richtige Buch holt.</span></li>
            <li><span class="check">&#128161;</span><span><strong>L&ouml;sung: Projekt-Dokumente mitgeben</strong> &ndash; Regeln, Architektur, Konventionen gezielt in den Kontext.</span></li>
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
      <p class="slide-subtitle">Systeme rund um die KI m&uuml;ssen den Kontext verkleinern &ndash; dabei gehen Details verloren</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:12px">
            <p style="font-size:0.95rem;line-height:1.5">
              &#129504; <strong>Vergleich: Gehirn</strong><br>
              <span style="color:var(--color-text-subdued)">Heute Morgen waren es 4,7&deg;C und Nieselregen. Jetzt wisst ihr nur noch: <strong>"Es war kalt und hat geregnet."</strong><br>Details weg, Essenz bleibt &ndash; aber: im Gegensatz zum Gehirn <em>speichert die KI nichts dauerhaft</em>.</span>
            </p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1rem;margin-bottom:10px">Strategien (des Systems, nicht der KI selbst)</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check">&#9986;</span><span><strong>Sliding Window</strong> &ndash; &Auml;lteste Tokens werden entfernt. Einfach, aber Infoverlust.</span></li>
            <li><span class="check">&#128221;</span><span><strong>Zusammenfassung</strong> &ndash; Inhalte werden komprimiert. Nuancen gehen verloren.</span></li>
            <li><span class="check">&#128269;</span><span><strong>RAG</strong> &ndash; Nur relevante Teile nachladen statt alles im Kontext halten.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1rem;margin-bottom:10px">Das Problem dabei</h3>
          <ul class="feature-list" style="margin-top:0;font-size:0.88rem">
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Komprimierung verliert <strong>Nuancen</strong> &ndash; "Es war kalt" statt "4,7&deg;C mit Nebel ab 07:30"</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Ohne gespeicherte Memory-Funktionen startet jede Anfrage <strong>ohne Kontext</strong></span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Ihr seht <strong>nicht was fehlt</strong> &ndash; die KI signalisiert keinen Kontextverlust</span></li>
            <li><span class="check" style="background:rgba(255,108,18,0.08);color:#ff6c12">!</span><span>Fehlender Kontext f&uuml;hrt zu <strong>Inkonsistenzen</strong> &ndash; nicht zu echtem "Vergessen"</span></li>
          </ul>
          <div style="margin-top:12px;padding:12px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
            <p style="font-size:0.85rem;color:var(--color-text-subdued);line-height:1.5">
              <strong style="color:var(--color-primary)">Eine m&ouml;gliche L&ouml;sung:</strong> Persistente Anweisungen die <strong>bei jeder Anfrage</strong> mitgeladen werden &ndash; Regeln, Projektkontext, Verhalten. Das ist die Idee hinter <strong>agents.md</strong>.
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
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:12px">Das Prinzip &ndash; ganz einfach</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
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
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:12px">Ein Projekt &ndash; welche Rollen braucht es?</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:12px">
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
          <div style="padding:16px;border-radius:10px;background:var(--color-bg-subdued);border:1px solid var(--color-border);margin-bottom:10px">
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
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Sub-Agents sind &uuml;berall</h3>
          <div style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
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
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Beispiel: Claude Code</h3>
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
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Built-in Sub-Agents</h3>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:10px">
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
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Key Features</h3>
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
      <div class="two-cols" style="margin-top:12px">
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:8px">Die wichtigsten Tools</h3>
          <div style="display:flex;flex-direction:column;gap:8px">
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong style="color:var(--color-accent)">Claude Code</strong> &ndash; Bester Coding-Agent aktuell. Terminal-basiert. Autonom.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>OpenCode</strong> &ndash; Open-Source Alternative. Nutzen wir f&uuml;r Live-Beispiele.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>OpenClaw / Clawdbot</strong> &ndash; Pers&ouml;nlicher Agent. Mac Mini Hype.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>GitHub Copilot</strong> &ndash; IDE-integriert. Autocomplete + Chat.</p>
            </div>
            <div style="padding:10px 14px;border-radius:8px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1)">
              <p style="font-size:0.9rem;color:var(--color-text-on-dark)"><strong>Cursor / Continue / Windsurf</strong> &ndash; IDE-Forks mit Agent-Integration.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1rem;margin-bottom:6px">Lokal vs. Remote vs. Global</h3>
          <table class="comparison" style="font-size:0.8rem">
            <thead>
              <tr>
                <th>Use Case</th>
                <th>Typ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Code auf meinem Rechner</td>
                <td style="color:var(--color-accent);font-weight:700">Lokal</td>
              </tr>
              <tr>
                <td>Code Review pro MR</td>
                <td style="color:#ff6c12;font-weight:700">Remote</td>
              </tr>
              <tr>
                <td>Frontend-Tests bauen</td>
                <td style="color:#ff6c12;font-weight:700">Remote</td>
              </tr>
              <tr>
                <td>Call Center Bot</td>
                <td style="font-weight:700">Global</td>
              </tr>
              <tr>
                <td>MCP + Confluence</td>
                <td style="font-weight:700">Global</td>
              </tr>
              <tr>
                <td>OpenClaw Assistent</td>
                <td style="font-weight:700">Global</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:8px;padding:8px 10px;border-radius:6px;background:rgba(255,237,0,0.08);border:1px solid rgba(255,237,0,0.2)">
            <p style="font-size:0.75rem;color:var(--color-text-on-dark-subdued);line-height:1.3">
              <strong style="color:var(--color-accent)">Lokal</strong> = dein Rechner &middot; <strong style="color:#ff6c12">Remote</strong> = CI/CD &middot; <strong>Global</strong> = zentral
            </p>
          </div>
        </div>
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
      <p class="slide-subtitle">Was wir bei <a href="https://github.com/huk-coburg" target="_blank" rel="noopener" style="color:var(--color-primary);font-weight:700;text-decoration:underline">@HUK-Coburg</a> bereits mit KI-Agents automatisiert haben</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Unsere 3 GitLab-Agents</h3>
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
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Was k&ouml;nnte folgen?</h3>
          <div style="padding:20px;border-radius:10px;background:var(--color-bg-subdued);border:2px dashed var(--color-border-primary);margin-bottom:10px">
            <p style="font-size:1rem;line-height:1.6">
              &#128640; <strong>Der n&auml;chste Agent:</strong>
            </p>
            <ol style="margin:8px 0 0 20px;font-size:0.95rem;color:var(--color-text-subdued);line-height:1.8">
              <li>Liest <strong>Confluence</strong>-Seiten &amp; <strong>Jira</strong>-Issues</li>
              <li>Checkt die betroffenen <strong>Repos</strong> aus</li>
              <li>Unterst&uuml;tzt beim Bau von <strong>Test-Cases</strong></li>
              <li>&Ouml;ffnet PRs mit fertigen Test-Suites</li>
            </ol>
            <p style="font-size:0.85rem;color:var(--color-text-neutral);margin-top:12px;font-style:italic">Technisch m&ouml;glich &ndash; via MCP f&uuml;r Confluence/Jira + lokaler Agent pro Repo.</p>
          </div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Was bedeutet das f&uuml;r uns?</h3>
          <ul class="feature-list" style="margin-top:0">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Code Reviews</strong> passieren sofort, nicht nach 2 Tagen</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Doku ist immer aktuell</strong> &ndash; weil sie bei jedem MR neu generiert wird</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Onboarding wird einfacher</strong> &ndash; Hands-On-Docs f&uuml;r jedes Feature</span></li>
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
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:8px">Was ihr nachvollziehen k&ouml;nnt</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Input &amp; Output</strong> &ndash; Was rein geht, was raus kommt</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Tool Calls</strong> &ndash; Welche Dateien gelesen, welche Befehle ausgef&uuml;hrt</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Reasoning Tokens</strong> &ndash; Bei "Thinking"-Modellen seht ihr die Denkschritte</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Token-Verbrauch</strong> &ndash; Wie viel Kontext verbraucht wurde</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:8px">Was ihr NICHT nachvollziehen k&ouml;nnt</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Warum diese Antwort?</strong> &ndash; Milliarden Parameter. Nicht mal die Entwickler verstehen es.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Halluzinationen</strong> &ndash; KI "erfindet" Fakten weil die Wahrscheinlichkeit hoch war &ndash; nicht weil es stimmt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Was vergessen wurde</strong> &ndash; Kontext wird still komprimiert. Ihr seht nicht was fehlt.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">&#10007;</span><span><strong>Kein Debugging</strong> &ndash; Kein Breakpoint, kein Stack Trace. Gleicher Input, anderer Output.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(255,108,18,0.08);border:1px solid rgba(255,108,18,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5">
          <strong style="color:var(--color-warning)">Fazit:</strong> KI ist nicht vergleichbar mit klassischer Softwareentwicklung. Es gibt keinen Quellcode den ihr lesen k&ouml;nnt, keine Unit Tests f&uuml;rs Modell. <strong>Nutzt KI als Werkzeug &ndash; aber versteht was sie produziert.</strong> Deshalb braucht es: <strong>Human-in-the-Loop</strong> bei kritischen Entscheidungen, <strong>Audit-Trails</strong> f&uuml;r Nachvollziehbarkeit, <strong>Guardrails</strong> gegen unkontrollierte Aktionen und klare <strong>Zugriffskontrolle</strong> &ndash; wer darf was ausl&ouml;sen?
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
      <div class="two-cols" style="margin-top:20px">
        <div>
          <div style="padding:20px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);margin-bottom:8px">
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-text-on-dark)">
              &#127859; Ein Koch mit perfekter Ausr&uuml;stung aber ohne Wissen &uuml;ber Geschmack, Texturen und Techniken kocht <strong>mittelmä&szlig;ig</strong>.
            </p>
            <p style="font-size:1.05rem;line-height:1.6;color:var(--color-accent);margin-top:8px">
              Ein Entwickler mit dem besten KI-Agent aber ohne Verst&auml;ndnis f&uuml;r Architektur, Patterns und Standards produziert <strong>mittelmä&szlig;igen Code</strong>.
            </p>
          </div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">KI ist ein Beschleuniger &ndash; kein Ersatz</h3>
          <ul class="feature-list">
            <li><span class="check">&#128640;</span><span>KI macht euch <strong>schneller</strong> &ndash; aber nicht automatisch <strong>besser</strong></span></li>
            <li><span class="check">&#128640;</span><span>Schlechte Architektur + KI = <strong>schneller schlechte Architektur</strong></span></li>
            <li><span class="check">&#128640;</span><span>Gute Grundlagen + KI = <strong>10x Produktivit&auml;t</strong></span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-accent);font-size:1.1rem;margin-bottom:8px">Weiterhin unsere Pflicht</h3>
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
          <div style="margin-top:10px;padding:14px;border-radius:8px;background:rgba(191,6,67,0.08);border:1px solid rgba(191,6,67,0.15)">
            <p style="font-size:0.85rem;color:var(--color-text-on-dark-subdued);line-height:1.5">
              <strong style="color:#ff6c12">N&uuml;chterne Zahlen:</strong> Nur ca. 10% der Unternehmen sehen bisher signifikanten ROI bei agentischen Systemen. Der Integrations- und Validierungsaufwand wird massiv untersch&auml;tzt. KI ist kein Selbstl&auml;ufer &ndash; sie braucht Experten die sie steuern.
            </p>
          </div>
        </div>
      </div>
    `,
  },

  // ===== Realit&auml;tscheck =====
  {
    id: 'reality-check',
    theme: '',
    label: 'Realitätscheck',
    content: `
      <span class="slide-label" style="color:var(--color-warning)">Realit&auml;tscheck</span>
      <h2 class="slide-title">Was die Demos nicht zeigen</h2>
      <p class="slide-subtitle">Bevor wir loslegen &ndash; die Dinge die in den meisten Workshops fehlen</p>
      <div class="two-cols" style="margin-top:16px">
        <div>
          <h3 style="color:var(--color-critical);font-size:1.1rem;margin-bottom:10px">Agents sind fragil</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Probabilistische Outputs</strong> &ndash; Gleicher Prompt, anderes Ergebnis. Das ist kein Bug, das ist das Prinzip. Tests sind schwer.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Tool-Integration = Fehlerquelle</strong> &ndash; Jedes Tool das der Agent nutzt (Shell, API, DB) kann fehlschlagen. Die Fehlerbehandlung ist oft mangelhaft.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Exponentiell komplex</strong> &ndash; 3 Tools = &uuml;berschaubar. 10 Tools = der Zustandsraum explodiert. Jede Kombination ist ein potenzieller Edge Case.</span></li>
            <li><span class="check" style="background:#ffe9ef;color:#bf0643">!</span><span><strong>Kein lineares Skalieren</strong> &ndash; Was bei einem einfachen Projekt klappt, scheitert bei gro&szlig;en Codebases oft an Kontext-Limits und Halluzinationen.</span></li>
          </ul>
        </div>
        <div>
          <h3 style="color:var(--color-primary);font-size:1.1rem;margin-bottom:10px">Was ihr braucht</h3>
          <ul class="feature-list">
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Human-in-the-Loop</strong> &ndash; Bei kritischen Aktionen (Deploy, DB-&Auml;nderungen, Kundendaten) muss ein Mensch freigeben.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Audit-Trails</strong> &ndash; Loggt was der Agent tut. Jeder Tool Call, jede &Auml;nderung. Damit ihr sp&auml;ter nachvollziehen k&ouml;nnt was passiert ist.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Guardrails</strong> &ndash; Definiert was der Agent <em>nicht</em> darf. Kein Zugriff auf Prod-Daten. Kein Push auf main. Kein L&ouml;schen ohne Best&auml;tigung.</span></li>
            <li><span class="check" style="background:#d3f5e4;color:#0b7660">&#10003;</span><span><strong>Erwartungsmanagement</strong> &ndash; KI ist ein Produktivit&auml;ts-Tool, kein Wunder. Plant Zeit f&uuml;r Review, Validierung und Nacharbeit ein.</span></li>
          </ul>
        </div>
      </div>
      <div style="margin-top:16px;padding:16px;border-radius:8px;background:rgba(47,108,122,0.08);border:1px solid rgba(47,108,122,0.2)">
        <p style="font-size:0.9rem;color:var(--color-text-subdued);line-height:1.5;text-align:center">
          <strong style="color:var(--color-primary)">Das hei&szlig;t nicht "nutzt es nicht".</strong> Es hei&szlig;t: Nutzt es mit offenen Augen. Die besten Ergebnisse kommen von Teams die verstehen <em>wo</em> KI hilft &ndash; und <em>wo</em> sie schadet.
        </p>
      </div>
    `,
  },

  // ===== Quiz: Basics =====
  {
    id: 'quiz-basics',
    theme: 'slide--dark',
    label: 'Quiz',
    quiz: true,
    content: `
      <div class="quiz-container">
        <div class="quiz-counter">Wissens-Check: Die Basics</div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">1. Was ist ein Token?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Ein ganzer Satz</button>
            <button class="quiz-option" data-correct="true">Ein St&uuml;ck Text &ndash; meistens ein Wort oder Wortteil (&frac34; eines Wortes)</button>
            <button class="quiz-option" data-correct="false">Ein Buchstabe</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div style="margin-bottom:32px">
          <p class="quiz-question">2. Was passiert wenn der Kontext voll ist?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="false">Die KI stoppt sofort</button>
            <button class="quiz-option" data-correct="false">Der Kontext wird gr&ouml;&szlig;er</button>
            <button class="quiz-option" data-correct="true">&Auml;ltere Nachrichten werden komprimiert oder entfernt &ndash; Details gehen verloren</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
        <div>
          <p class="quiz-question">3. Warum ist KI eine "Blackbox"?</p>
          <div class="quiz-options">
            <button class="quiz-option" data-correct="true">Weil man nicht nachvollziehen kann warum ein bestimmtes Ergebnis kommt &ndash; kein Debugging m&ouml;glich</button>
            <button class="quiz-option" data-correct="false">Weil das Geh&auml;use schwarz ist</button>
            <button class="quiz-option" data-correct="false">Weil der Code geheim ist</button>
          </div>
          <div class="quiz-feedback"></div>
        </div>
      </div>
    `,
  },
];
