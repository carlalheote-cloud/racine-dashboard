// --- Détails complets pour chaque tâche, affichés dans la modale au clic ---
const details = {
  maillage: {
    title: "Maillage interne mis à jour",
    meta: "Agent IA · Validé par Camille · Aujourd'hui, 09:14",
    body: `
      <p>L'agent a analysé l'ensemble des pages du site pour identifier celles qui ne recevaient pas assez de liens internes au regard de leur potentiel de trafic.</p>
      <h4>Pages concernées</h4>
      <ul>
        <li>/climatisation-reversible → +4 liens entrants depuis les articles de blog</li>
        <li>/climatisation-reversible → +2 liens depuis la page catégorie</li>
        <li>/entretien-clim → +1 lien depuis la FAQ</li>
      </ul>
      <h4>Ce que Camille a vérifié</h4>
      <p>Que les ancres de lien restent naturelles à la lecture, et qu'aucun lien ne soit ajouté vers une page obsolète ou redirigée.</p>
    `
  },
  migration: {
    title: "Plan de migration — nouvelle arborescence",
    meta: "Consultant + Agent IA · Mardi, 10:30",
    body: `
      <p>340 URL de l'ancien site cartographiées avant le lancement de la nouvelle arborescence, pour éviter toute perte de trafic ou de backlinks.</p>
      <h4>Répartition du travail</h4>
      <ul>
        <li>L'agent a listé automatiquement toutes les URL existantes et leur destination probable</li>
        <li>Camille a vérifié manuellement 28 cas ambigus, où deux anciennes pages pouvaient correspondre à la même nouvelle page</li>
        <li>Vérification des backlinks entrants sur les 15 pages à plus fort trafic avant validation finale</li>
      </ul>
      <h4>Pourquoi ce point de vigilance</h4>
      <p>Une redirection mal faite sur une page à fort trafic peut coûter plusieurs semaines de visibilité. C'est précisément le type de décision qu'on ne laisse jamais entièrement à l'agent.</p>
    `
  },
  brief: {
    title: "Brief de contenu produit",
    meta: "Agent IA · Validé par Camille · Hier, 16:40",
    body: `
      <p>Mot-clé ciblé : « climatisation silencieuse appartement ».</p>
      <h4>Ce que l'agent a produit</h4>
      <ul>
        <li>Analyse de l'intention de recherche à partir des 10 premiers résultats</li>
        <li>Structure Hn complète avec 6 sous-parties</li>
        <li>FAQ de 5 questions basée sur les recherches associées</li>
      </ul>
      <h4>Correction de Camille</h4>
      <p>Ajout d'une section sur les aides à l'installation, absente du brief initial mais pertinente pour ce client spécifique.</p>
    `
  },
  anomalie: {
    title: "Anomalie détectée — prix produits",
    meta: "En attente de validation · Hier, 11:02",
    body: `
      <p>3 fiches produit affichent un tarif différent du fichier de référence transmis par le client.</p>
      <h4>Produits concernés</h4>
      <ul>
        <li>Climatiseur mural 2500W — écart de 40 €</li>
        <li>Climatiseur mobile 12000 BTU — écart de 15 €</li>
        <li>Kit installation standard — écart de 8 €</li>
      </ul>
      <h4>Pourquoi ça reste en attente</h4>
      <p>Ce type d'erreur est déjà arrivé sur ce compte. Camille préfère vérifier directement avec le client plutôt que de laisser l'agent corriger seul, pour être sûre du bon prix avant publication.</p>
    `
  },
  audit: {
    title: "Audit technique hebdomadaire",
    meta: "Agent IA · Validé par Camille · Lundi, 14:20",
    body: `
      <p>Crawl complet du site, 340 pages analysées.</p>
      <h4>Résultats</h4>
      <ul>
        <li>Aucune nouvelle erreur 404</li>
        <li>2 redirections en chaîne repérées et corrigées</li>
        <li>Temps de chargement mobile stable (1,8s en moyenne)</li>
      </ul>
    `
  },
  strategie: {
    title: "Priorisation stratégique du mois",
    meta: "Décision de Camille · Lundi, 09:00",
    body: `
      <p>Décision de concentrer les efforts sur la thématique « climatisation réversible » plutôt que « climatisation mobile ».</p>
      <h4>Pourquoi ce choix</h4>
      <p>Le volume de recherche est comparable entre les deux thématiques, mais le panier moyen sur la climatisation réversible est près de trois fois supérieur. C'est le type d'arbitrage que l'agent ne peut pas faire seul : il nécessite de connaître le contexte business du client, pas seulement les données de recherche.</p>
    `
  },
  "brief-doc": {
    title: "Climatisation silencieuse appartement",
    meta: "Agent IA · Validé par Camille · Document prêt à publier",
    isDocument: true,
    docHtml: `
      <div class="doc-field"><span class="doc-label">Meta title</span><p>Climatisation silencieuse pour appartement : le guide 2026 | Ayrton</p></div>
      <div class="doc-field"><span class="doc-label">Meta description</span><p>Vous cherchez une climatisation silencieuse pour votre appartement ? Découvrez nos modèles à moins de 25 dB, les aides disponibles et nos conseils d'installation.</p></div>
      <hr>
      <div class="doc-field"><span class="doc-label">H1</span><p>Climatisation silencieuse pour appartement : quel modèle choisir ?</p></div>
      <div class="doc-field"><span class="doc-label">Introduction</span><p>Dans un appartement, le niveau sonore d'une climatisation est souvent le premier critère de choix. Entre les modèles mono-split, les climatiseurs mobiles et les systèmes réversibles, les écarts de décibels peuvent aller du simple au double. Ce guide vous aide à choisir un modèle réellement silencieux, adapté à un usage en immeuble collectif.</p></div>
      <div class="doc-field"><span class="doc-label">H2</span><p>Pourquoi le niveau sonore varie autant d'un modèle à l'autre</p></div>
      <div class="doc-field"><span class="doc-label">H2</span><p>Les modèles les plus silencieux du marché en 2026</p></div>
      <div class="doc-field"><span class="doc-label">H2</span><p>Aides financières disponibles pour l'installation</p></div>
      <div class="doc-field"><span class="doc-label">H2</span><p>Foire aux questions</p></div>
      <div class="doc-field"><span class="doc-label">FAQ générée</span><p>5 questions : Quel est le niveau sonore acceptable la nuit, Faut-il l'accord de la copropriété, Quelle différence entre mono-split et multi-split, Quelles aides pour un appartement, Combien de temps dure l'installation</p></div>
    `
  }
};

// --- Filtres ---
const filterTabs = document.querySelectorAll('.filter-tab');
const growthItems = document.querySelectorAll('.growth-item');

filterTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    filterTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const filter = tab.dataset.filter;

    growthItems.forEach(item => {
      const types = item.dataset.type.split(' ');
      if (filter === 'all' || types.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// --- Modale de détail ---
const overlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

document.querySelectorAll('.growth-card').forEach(card => {
  card.addEventListener('click', () => {
    const key = card.dataset.detail;
    const d = details[key];
    if (!d) return;

    if (d.isDocument) {
      modalContent.innerHTML = `
        <p class="modal-meta">${d.meta}</p>
        <h2>${d.title}</h2>
        <div class="doc-preview">${d.docHtml}</div>
        <div class="wp-publish-zone">
          <button class="wp-btn" id="wpPublishBtn">
            <span class="wp-icon">W</span> Publier sur WordPress
          </button>
          <p class="wp-hint">Publication directe sur le site du client, en un clic.</p>
        </div>
      `;
      overlay.classList.add('open');
      const btn = document.getElementById('wpPublishBtn');
      btn.addEventListener('click', () => {
        btn.innerHTML = '⏳ Publication en cours...';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = '✓ Publié sur le site';
          btn.classList.add('wp-success');
          showToast('Contenu publié', 'Le brief est maintenant en ligne sur ayrton-climatisation.fr');
        }, 1100);
      });
    } else {
      modalContent.innerHTML = `
        <p class="modal-meta">${d.meta}</p>
        <h2>${d.title}</h2>
        ${d.body}
      `;
      overlay.classList.add('open');
    }
  });
});

modalClose.addEventListener('click', () => overlay.classList.remove('open'));
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) overlay.classList.remove('open');
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') overlay.classList.remove('open');
});

// --- Notifications (cloche + toast) ---
const toast = document.getElementById('toast');
const toastTitle = document.getElementById('toastTitle');
const toastText = document.getElementById('toastText');
const toastClose = document.getElementById('toastClose');
const notifBell = document.getElementById('notifBell');
const notifBadge = document.getElementById('notifBadge');

function showToast(title, text) {
  toastTitle.textContent = title;
  toastText.textContent = text;
  toast.classList.add('show');
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove('show'), 4500);
}

toastClose.addEventListener('click', () => toast.classList.remove('show'));

notifBell.addEventListener('click', () => {
  notifBadge.style.display = 'none';
  showToast('Maillage interne mis à jour', 'Camille a validé 7 nouveaux liens internes ce matin à 09:14.');
});

// Simule une notification qui arrive peu après le chargement, pour la démo
setTimeout(() => {
  showToast('Nouvelle action sur votre compte', 'Le maillage interne vient d\'être mis à jour et validé par Camille.');
}, 1800);
