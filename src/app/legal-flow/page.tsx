import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Legal Flow — Conformité fiscale sans pénalité | Suite Flow",
  description: "Zéro oubli. Zéro pénalité : calendrier fiscal intelligent, alertes WhatsApp, IA entraînée sur le CGI 2026.",
};

export default function LegalFlowPage() {
  return (
    <ProductPageTemplate
      appName="Legal Flow"
      tagline="Legal Flow — Bouclier anti-pénalités"
      title="Zéro oubli. Zéro pénalité."
      subtitle="On s'occupe de retenir les dates critiques pour vous. Recevez un message avant chaque échéance fiscale et juridique pour agir au bon moment."
      icon="scale"
      logoSrc="/logos/legal-flow.png"
      auraClass="bg-[#7e22ce]/30"
      features={[
        { icon: "calendar", title: "Calendrier fiscal intelligent", text: "Échéances filtrées selon votre régime (RSI, Réel Normal) : vous ne voyez que vos impôts." },
        { icon: "chat", title: "Alertes WhatsApp auto", text: "Relances J-30, J-15, J-3 puis la veille : impossible d'oublier une déclaration." },
        { icon: "archive", title: "Registre juridique centralisé", text: "Statuts, PV d'AG et contrats classés et retrouvables en un clic." },
        { icon: "percent", title: "Acomptes IS & TVA suivis", text: "Vos acomptes provisionnels et crédits de TVA pilotés sans surprise." },
        { icon: "radar", title: "Veille réglementaire OHADA", text: "Annexe fiscale et évolutions traduites en actions concrètes pour votre PME." },
        { icon: "send", title: "Télédéclarations préparées", text: "Vos déclarations e-Impôts préparées à temps, avec les bons montants." },
      ]}
      practiceTitle="Anticipez chaque échéance"
      practiceText="Le 10, le 15, le 20 : Legal Flow connaît votre calendrier mieux que vous et vous prévient avant qu'il ne soit trop tard."
      practiceBullets={[
        "Alertes personnalisées : TVA, CNPS, acompte d'impôt sur les bénéfices",
        "Registre juridique d'entreprise centralisé (statuts, PV d'AG, baux)",
        "Veille réglementaire OHADA et loi de finances ivoirienne",
      ]}
      practiceStats={[
        { value: "J-30", label: "première relance auto" },
        { value: "30 s", label: "réponse juridique" },
        { value: "0", label: "pénalité visée" },
      ]}
      testimonials={[
        { quote: "L'alerte WhatsApp m'a sauvée deux fois sur la TVA. Plus un franc de majoration depuis un an.", name: "Aminata Cissé", role: "Gérante services, Marcory", initials: "AC" },
        { quote: "Je pose mes questions en langage simple, Donalde répond avec l'article du CGI. Bluffant.", name: "Jean-Marc Ebrotie", role: "Dirigeant garage, San Pedro", initials: "JE" },
        { quote: "Nos PV d'AG et statuts enfin rangés et à jour. Le jour du contrôle, tout était prêt.", name: "Prisca N'Da", role: "Assistante direction, PME", initials: "PN" },
      ]}
      ctaTitle="Prêt à dormir sans pénalité ?"
      ctaButton="Démarrer avec Legal Flow"
    />
  );
}
