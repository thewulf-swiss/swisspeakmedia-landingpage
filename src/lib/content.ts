/**
 * Content constants for the Astro Validation Landing theme
 * Update these values to customize your landing page content
 */

export const siteConfig = {
  name: "Webdesign • SEO • KI",
  title: "Webdesign & KI-Websites Schweiz | Swiss Peak Media",
  description:
    "Wir entwickeln moderne Websites mit Fokus auf Sichtbarkeit, Performance und messbare Resultate für Unternehmen in der Schweiz.",
  image: "/og-image.png",
  quickLinks: [
    { label: "Ihre Vorteile", href: "#features" },
    { label: "So läuft die Zusammenarbeit ab", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" }
  ],
  legalLinks: [
    { label: "Impressum", href: "/privacy" },
    { label: "Datenschutz", href: "/terms" },
    { label: "Kontakt", href: "mailto:hello@swisspeakmedia.ch" }
  ]
};

export const header = {
  name: siteConfig.name,
  navLinks: siteConfig.quickLinks,
  cta: {
    label: "Kostenlose Beratung",
    href: "#cta"
  }
};

export const hero = {
  headline:
    "High-Speed Websites für Google & KI",
  subheadline:
    "Wir bauen die schnellsten Websites der Schweiz – optimiert für Top-Rankings und Empfehlungen durch ChatGPT & Co.",
  primaryCta: {
    label: "Kostenlose Beratung",
    href: "#cta"
  },
  secondaryCta: {
    label: "Mehr erfahren",
    href: "#features"
  },
  image: {
    src: "/images/hero-illustration.png",
    alt: "Hero illustration showing a validation dashboard"
  }
};

export const problem = {
  headline: " Langsame Websites sind unsichtbar.",
  description:
    "Wer heute länger als 2 Sekunden lädt, verliert Kunden an die Konkurrenz. Noch schlimmer: Wenn Ihre Website-Struktur veraltet ist, wird sie von modernen KI-Suchassistenten schlichtweg ignoriert."
};

export const solution = {
  headline: "Websites, die sichtbar sind und Kunden gewinnen.",
  description:
    "Wir kombinieren radikale Ladegeschwindigkeit mit semantischer SEO-Optimierung. Das Ergebnis ist eine Website, die Google dominiert und von KI-Systemen aktiv empfohlen wird."
};

export const features = {
  heading: "Darum entscheiden sich Unternehmen für unsere High-Speed Websites",
  description:
    "Moderne Webseiten müssen heute mehr können als nur gut aussehen. Unsere Lösungen sind radikal auf Speed, Google-Rankings und Empfehlungen durch KI-Systeme optimiert.",
  items: [
    {
      icon: "⚡",
      headline: "Ultraschnelle Ladezeiten",
      description:
        "Blitzschnelle Websites sorgen für maximale Google-Rankings, minimale Absprungraten und zufriedene Nutzer."
    },
    {
      icon: "🤖",
      headline: "KI-Ready Struktur",
      description:
        "Wir strukturieren Ihre Inhalte so, dass KI-Suchmaschinen wie ChatGPT & Perplexity Ihr Unternehmen verstehen und aktiv empfehlen."
    },
    {
      icon: "🔍",
      headline: "SEO & Sichtbarkeit",
      description:
        "Technisch optimierte Webseiten mit Fokus auf Top-Platzierungen und nachhaltigen organischen Traffic in der neuen Ära der Suche."
    },
    {
      icon: "📊",
      headline: "Conversion-Optimiert",
      description:
        "Jede Seite wird darauf ausgelegt, Besucher gezielt in messbare Anfragen und loyale Kunden zu verwandeln."
    },
    {
      icon: "🔒",
      headline: "Sichere & stabile Technik",
      description:
        "Moderne Technologien, hohe Sicherheit und zuverlässige Performance für langfristig stabile Webseiten."
    },
    {
      icon: "📱",
      headline: "Mobile-First Excellence",
      description:
        "Optimiert für alle Geräte – kompromisslose Performance und Benutzerfreundlichkeit auf Smartphone und Desktop."
    }
  ]
};

export const howItWorks = {
  heading: "In 3 einfachen Schritten zur neuen Website",
  description:
    "Von der ersten Anfrage bis zur fertigen Website — unkompliziert, transparent und effizient umgesetzt.",
  items: [
    {
      number: "1",
      headline: "Kostenloses Erstgespräch",
      description:
        "Wir analysieren Ihre Ziele, Ihr Unternehmen und Ihre aktuelle Online-Präsenz unverbindlich."
    },
    {
      number: "2",
      headline: "Konzept & Design",
      description:
        "Sie erhalten ein modernes Webdesign mit Fokus auf Sichtbarkeit, Vertrauen und Conversion."
    },
    {
      number: "3",
      headline: "Livegang & Wachstum",
      description:
        "Ihre neue Website geht online — schnell, SEO-optimiert und bereit für neue Kundenanfragen."
    }
  ]
};

export const testimonials = {
  heading: "Was unsere Kunden sagen",
  description:
    "Unternehmen aus der Schweiz vertrauen auf moderne Websites mit Fokus auf Sichtbarkeit, Performance und Resultate.",
  items: [
    {
      quote:
        "Unsere neue Website wirkt endlich professionell und bringt deutlich mehr Anfragen über Google.",
      author: "Marco Steiner",
      company: "Geschäftsführer, Handwerksbetrieb Zürich",
      avatar: "MS",
      image: "/images/avatar-1.jpg"
    },
    {
      quote:
        "Schnelle Umsetzung, modernes Design und technisch auf einem ganz neuen Level gegenüber unserer alten WordPress-Seite.",
      author: "Sandra Keller",
      company: "Inhaberin, Beauty & Kosmetikstudio Bern",
      avatar: "SK",
      image: "/images/avatar-2.jpg"
    },
    {
      quote:
        "Die Website lädt extrem schnell und wir werden bei Google deutlich besser gefunden als zuvor.",
      author: "Patrick Wenger",
      company: "KMU-Unternehmer, Biel/Bienne",
      avatar: "PW",
      image: "/images/avatar-3.jpg"
    }
  ]
};

export const cta = {
  headline: "Bereit für High-Speed und messbare KI-Sichtbarkeit?",
  description:
    "Lassen Sie uns unverbindlich über Ihr Projekt sprechen. Sie erhalten eine ehrliche Einschätzung, wie wir Ihre Website für Google und KI-Suchmaschinen optimieren und ein modernes Konzept für Ihren digitalen Erfolg erstellen.",
  button: {
    label: "Kostenlose Beratung anfragen",
    href: "#email-signup"
  },
  disclaimer: "Kostenlos & unverbindlich • Antwort innerhalb von 24 Stunden • Keine Verpflichtung"
};

export const faq = {
  heading: "Häufige Fragen",
  description: "Antworten auf die wichtigsten Fragen zu High-Speed Webdesign, Google-Rankings und KI-Sichtbarkeit.",
  items: [
    {
      question: "Wie lange dauert eine neue Website?",
      answer:
        "Die Umsetzungszeit hängt vom Umfang ab. Dank unserer effizienten Architektur realisieren wir ultraschnelle Unternehmenswebsites oft innerhalb von 3 bis 6 Wochen."
    },
    {
      question: "Wird meine Website für Google & KI-Bots optimiert?",
      answer:
        "Ja. Wir setzen auf semantische SEO und saubere Datenstrukturen. So wird Ihre Website nicht nur von Google top gerankt, sondern auch von KI-Systemen wie ChatGPT und Perplexity als Quelle verstanden und empfohlen."
    },
    {
      question: "Warum ist Ladegeschwindigkeit (Speed) so wichtig?",
      answer:
        "Speed ist heute der wichtigste Ranking-Faktor. Schnelle Websites sorgen für eine bessere Nutzererfahrung, niedrigere Werbekosten (ADS) und werden von Suchmaschinen massiv bevorzugt."
    },
    {
      question: "Was bedeutet Optimierung für KI-Suchergebnisse?",
      answer:
        "Klassische Suche liefert Links, KI-Suche liefert Antworten. Wir strukturieren Ihre Inhalte so („Schema Markup“), dass KI-Modelle Ihre Dienstleistungen präzise extrahieren und Sie in KI-generierten Antworten als Experten vorschlagen können."
    },
    {
      question: "Kann ich Inhalte später selbst bearbeiten?",
      answer:
        "Ja. Wir nutzen moderne, schlanke CMS-Lösungen oder WordPress, die so konfiguriert sind, dass sie die Performance der Website nicht ausbremsen, Ihnen aber volle Flexibilität bei den Texten geben."
        },
        {
          question: "Ist ein kostenloses Erstgespräch möglich?",
          answer:
            "Ja – die erste Beratung ist kostenlos. Wir analysieren kurz Ihre aktuelle Performance und zeigen Ihnen das Potenzial für Google-Rankings und KI-Empfehlungen auf."
            },
            
  ]
};

export const footer = {
  sections: {
    quickLinks: {
      title: "Quick Links",
      links: siteConfig.quickLinks
    },
    legal: {
      title: "Legal",
      links: siteConfig.legalLinks
    }
  },
  copyright: `© ${new Date().getFullYear()} SWISS PEAK MEDIA • Webdesign & KI-Lösungen aus der Schweiz`,
  social: [
    { name: "Twitter", icon: "twitter", url: "https://twitter.com" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" }
  ]
};
