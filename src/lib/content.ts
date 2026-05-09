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
    "Webdesign & KI-optimierte Websites für Unternehmen in der Schweiz",
  subheadline:
    "Wir entwickeln moderne, ultraschnelle Websites mit Fokus auf Google-Sichtbarkeit, Conversion und künstliche Intelligenz – perfekt für Unternehmen, die online wachsen möchten.",
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
  headline: "Verliert Ihre Website täglich potenzielle Kunden?",
  description:
    "Viele Unternehmenswebsites sehen zwar gut aus, generieren jedoch kaum Anfragen bei Google.Langsame Ladezeiten, veraltetes Design, fehlende SEO-Struktur und schwache Conversion-Optimierung sorgen dafür, dass Besucher abspringen, bevor überhaupt Kontakt entsteht."
};

export const solution = {
  headline: "Websites, die sichtbar sind und Kunden gewinnen.",
  description:
    "Wir entwickeln moderne, ultraschnelle Webseiten mit Fokus auf SEO, Nutzererlebnis und Conversion. So entsteht nicht nur eine schöne Website, sondern ein digitales System, das Vertrauen aufbaut, bei Google gefunden wird und gezielt neue Anfragen generiert."
};

export const features = {
  heading: "Darum entscheiden sich Unternehmen für unsere Websites",
  description:
    "Moderne Webseiten müssen heute mehr können als nur gut aussehen. Unsere Lösungen sind auf Sichtbarkeit, Geschwindigkeit und messbare Anfragen optimiert.",
  items: [
    {
      icon: "⚡",
      headline: "Ultraschnelle Ladezeiten",
      description:
        "Schnelle Websites sorgen für bessere Google-Rankings, tiefere Absprungraten und mehr Anfragen."
    },
    {
      icon: "✨",
      headline: "Modernes Webdesign",
      description:
        "Individuelle Webseiten mit klarem Design, starker Nutzerführung und professionellem Markenauftritt."
    },
    {
      icon: "🎨",
      headline: "SEO & Google-Sichtbarkeit",
      description:
        "Technisch optimierte Webseiten mit Fokus auf lokale Auffindbarkeit und nachhaltigen organischen Traffic."
    },
    {
      icon: "📊",
      headline: "Conversion-Optimiert",
      description:
        "Jede Seite wird darauf ausgelegt, Besucher gezielt in Anfragen und Kunden zu verwandeln."
    },
    {
      icon: "🔒",
      headline: "Sichere & stabile Technik",
      description:
        "Moderne Technologien, hohe Sicherheit und zuverlässige Performance für langfristig stabile Webseiten."
    },
    {
      icon: "📱",
      headline: "Perfekt für Smartphone & Desktop",
      description:
        "Optimiert für alle Geräte — schnell, responsiv und benutzerfreundlich auf Mobile und Desktop."
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
  headline: "Bereit für mehr Sichtbarkeit und neue Kundenanfragen?",
  description:
    "Lassen Sie uns unverbindlich über Ihr Projekt sprechen. Sie erhalten eine ehrliche Einschätzung, passende Ideen und ein modernes Konzept für Ihre neue Website.",
  button: {
    label: "Kostenlose Beratung anfragen",
    href: "#email-signup"
  },
  disclaimer: "Kostenlos & unverbindlich • Antwort innerhalb von 24 Stunden • Keine Verpflichtung"
};

export const faq = {
  heading: "Häufige Fragen",
  description: "Antworten auf die wichtigsten Fragen rund um Webdesign, SEO und moderne Unternehmenswebsites.",
  items: [
    {
      question: "Wie lange dauert eine neue Website?",
      answer:
        "Die Umsetzungszeit hängt vom Umfang ab. Kleine Unternehmenswebsites können oft innerhalb weniger Wochen realisiert werden."
    },
    {
      question: "Wird meine Website für Google optimiert?",
      answer:
        "Ja. Unsere Websites werden technisch SEO-optimiert aufgebaut — inklusive Performance, Struktur und mobiler Optimierung."
    },
    {
      question: "Kann ich Inhalte später selbst bearbeiten?",
      answer:
        "Ja. Auf Wunsch integrieren wir ein benutzerfreundliches CMS wie WordPress oder andere moderne Lösungen."
    },
    {
      question: "Funktioniert die Website auf Smartphones?",
      answer:
        "Selbstverständlich. Alle Websites werden vollständig responsive entwickelt und für Mobile optimiert."
    },
    {
      question: "Unterstützen Sie auch nach dem Launch?",
      answer:
        "Ja. Wir bieten auf Wunsch Betreuung, Wartung, Anpassungen und Weiterentwicklung Ihrer Website an."
        },
        {
          question: "Ist ein kostenloses Erstgespräch möglich?",
          answer:
            "Ja — die erste Beratung ist kostenlos und unverbindlich. Gemeinsam schauen wir, welche Lösung für Ihr Unternehmen sinnvoll ist."
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
