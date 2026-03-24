export const diskussionSlides = [
  // ===== Diskussionsrunde (Presenter only) =====
  {
    id: 'discussion',
    theme: 'slide--dark',
    label: 'Diskussion',
    desktopOnly: true,
    content: `
      <div style="max-width:700px;margin:0 auto;text-align:center">
        <h2 class="slide-title" style="font-size:1.5rem;margin-bottom:4px">&#128172; Diskussionsrunde</h2>
        <p class="slide-subtitle" style="font-size:0.9rem">Bevor wir ins Hands-On gehen &ndash; lasst uns kurz reflektieren</p>
      </div>
      <div class="pause-timer discussion-timer" id="discussion-timer" data-duration="900">
        <span class="pause-timer-icon">&#128172;</span>
        <span class="pause-timer-display" id="discussion-timer-display">15:00</span>
        <span class="pause-timer-label">Diskussion</span>
      </div>
      <div style="max-width:650px;margin:12px auto 0;display:flex;flex-direction:column;gap:8px">
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#129300;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Was ist alles neu f&uuml;r euch?</strong> Was hat euch &uuml;berrascht?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#10067;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Welche Fragen gibt es?</strong> Jetzt ist der Moment &ndash; alles was unklar geblieben ist.</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(47,108,122,0.12);border:1px solid rgba(47,108,122,0.25);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#9888;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Was sollten wir beachten?</strong> Risiken, Bedenken, Governance&hellip;</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,237,0,0.06);border:1px solid rgba(255,237,0,0.15);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#128260;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong style="color:var(--color-accent)">Hat sich etwas ge&auml;ndert?</strong> Zu eurer bisherigen KI-Nutzung &ndash; nach dem was ihr jetzt wisst?</p>
        </div>
        <div style="padding:12px 16px;border-radius:10px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px">
          <span style="font-size:1.3rem">&#11088;</span>
          <p style="font-size:0.85rem;color:var(--color-text-on-dark);line-height:1.4"><strong>Kleines Feedback zur Pr&auml;sentation bisher</strong> &ndash; wer sollte das auch sehen?</p>
        </div>
      </div>
    `,
  },
];
