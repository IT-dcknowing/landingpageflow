import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "RH Flow — Paie ivoirienne automatisée | Suite Flow",
  description: "La paie ivoirienne, sans aspirine : ITS, CNPS, CMU calculés, bulletins certifiés en quelques clics.",
};

export default function RhFlowPage() {
  return (
    <ProductPageTemplate
      appName="RH Flow"
      tagline="RH Flow — Paie conforme CI"
      title="La paie ivoirienne, sans aspirine."
      subtitle="Calculez l'ITS, gérez la CNPS et la CMU en respectant scrupuleusement les derniers barèmes légaux. Vos déclarations sociales sont prêtes à être envoyées en fin de mois."
      icon="users"
      logoSrc="/logos/rh-flow.png"
      auraClass="bg-[#312e81]/60"
      features={[
        { icon: "badge", title: "Bulletins conformes Code du Travail", text: "Des bulletins propres et opposables, de 50 à 4 000 salariés par entreprise." },
        { icon: "percent", title: "ITS auto (barème DGI 2026)", text: "Retenues à la source calculées sur les barèmes fiscaux ivoiriens mis à jour." },
        { icon: "shield", title: "CNPS & CMU gérées", text: "Cotisations sociales et couverture maladie intégrées, sans oubli de déclaration." },
        { icon: "qr", title: "Pointage QR / GPS mobile", text: "Présences vérifiées par scan QR et géolocalisation, injectées dans la paie." },
        { icon: "leave", title: "Congés & absences digitalisés", text: "Demandes, validations N+1 et compteurs : fini les cahiers de congés." },
        { icon: "download", title: "Bordereaux téléchargeables", text: "Livre de paie annuel, état 301/DISA et bordereaux de cotisation en un clic." },
      ]}
      practiceTitle="De l'embauche au bulletin, sans Excel"
      practiceText="Le salarié pointe sur mobile, ses heures alimentent la paie, le bulletin sort certifié : un seul flux, zéro erreur de formule."
      practiceBullets={[
        "Calcul automatique : CNPS, CMU, ITS et retenues légales",
        "Bordereaux de cotisation CNPS téléchargeables en 1 clic",
        "Fiches de paie digitalisées et pointage officiel par QR Code",
      ]}
      practiceStats={[
        { value: "4 000", label: "salariés gérés" },
        { value: "0", label: "erreur de calcul" },
        { value: "301", label: "état DISA auto" },
      ]}
      testimonials={[
        { quote: "180 bulletins bouclés en une matinée, CNPS et ITS justes. Ma DISA est sortie sans une nuit blanche.", name: "Mariam Touré", role: "DRH, BTP Abidjan", initials: "MT" },
        { quote: "Le pointage QR a stoppé les retards fantômes sur nos chantiers. Les heures réelles entrent seules en paie.", name: "Ibrahim Sylla", role: "Conducteur travaux, Bouaké", initials: "IS" },
        { quote: "Nos journaliers sont payés au taux horaire exact, sans contestation. La paix sociale est revenue.", name: "Nadia Ahoua", role: "Gérante négoce, Yopougon", initials: "NA" },
      ]}
      ctaTitle="Prêt à payer juste, à l'heure ?"
      ctaButton="Démarrer avec RH Flow"
    />
  );
}
