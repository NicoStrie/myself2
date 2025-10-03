================= Cookie Banner + Consent ===================

const translations = {
  de: {
    text: "Wir verwenden Cookies, um Inhalte und Anzeigen zu personalisieren, Funktionen für soziale Medien anzubieten und die Zugriffe auf unsere Website zu analysieren. Informationen zu Ihrer Nutzung unserer Website werden an unsere Partner für soziale Medien, Werbung und Analysen weitergegeben. <a href='/myself2/privacy'>Mehr erfahren</a>.",
    accept: "Alle akzeptieren",
    customize: "Einstellungen",
    reject: "Nur notwendige Cookies verwenden",
    settingsText: "Hier können Sie Ihre Cookie-Einstellungen anpassen:"
  },
  en: {
    text: "We use cookies to personalize content and ads, provide social media features, and analyze our traffic. Information about your use of our site is shared with our social media, advertising, and analytics partners. <a href='/myself2/privacy'>Learn more</a>.",
    accept: "Accept all",
    customize: "Settings",
    reject: "Use necessary cookies only",
    settingsText: "Here you can adjust your cookie preferences:"
  },
  it: {
    text: "Utilizziamo i cookie per personalizzare contenuti e annunci, fornire funzionalità dei social media e analizzare il nostro traffico. Le informazioni sull'utilizzo del sito sono condivise con i nostri partner di social media, pubblicità e analisi. <a href='/myself2/privacy'>Scopri di più</a>.",
    accept: "Accetta tutto",
    customize: "Impostazioni",
    reject: "Usa solo cookie necessari",
    settingsText: "Qui puoi modificare le tue preferenze sui cookie:"
  },
  fr: {
    text: "Nous utilisons des cookies pour personnaliser le contenu et les publicités, offrir des fonctionnalités de médias sociaux et analyser notre trafic. Les informations sur votre utilisation de notre site sont partagées avec nos partenaires de médias sociaux, de publicité et d’analyse. <a href='/myself2/privacy'>En savoir plus</a>.",
    accept: "Tout accepter",
    customize: "Paramètres",
    reject: "Utiliser uniquement les cookies nécessaires",
    settingsText: "Ici, vous pouvez ajuster vos préférences en matière de cookies :"
  }
};

function handleConsent(status) {
  gtag('consent', 'update', {
    'ad_storage': status,
    'analytics_storage': status
  });

  document.getElementById('cookie-banner').style.display = 'none';
  localStorage.setItem('cookie_consent', status);
  console.log("Cookie-Einwilligung gesetzt auf:", status);
}

function openSettings() {
  document.getElementById('settings-panel').style.display = 'block';
}

function switchLang(lang) {
  const t = translations[lang];
  document.getElementById('cookie-text').innerHTML = t.text;
  document.getElementById('accept-label').innerText = t.accept;
  document.getElementById('settings-btn').innerText = t.customize;
  document.getElementById('reject-btn').innerText = t.reject;
  document.getElementById('settings-text').innerText = t.settingsText;
}

// Show banner only if no consent stored
window.addEventListener('DOMContentLoaded', function () {
  if (!localStorage.getItem('cookie_consent')) {
    const banner = document.getElementById('cookie-banner');
    if (banner) {
      banner.style.display = 'block';
      switchLang('de'); // default language
    }
  }
});

// Google gtag setup
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'analytics_storage': 'denied'
});
