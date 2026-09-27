import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Compta Flow — Comptabilité SYSCOHADA automatisée | Suite Flow",
  description: "Prenez vos factures en photo. Votre compta est faite : OCR, SYSCOHADA temps réel, export Sage 100.",
};

export default function ComptaFlowPage() {
  return (
    <ProductPageTemplate
      appName="Compta Flow"
      tagline="Compta Flow — SYSCOHADA temps réel"
      title="Prenez vos factures en photo. Votre compta est faite."
      subtitle="Arrêtez la ressaisie interminable. Sell Flow et RH Flow envoient directement les données ici. Vos bilans SYSCOHADA s'équilibrent par magie, sans erreurs d'écritures."
      icon="calc"
      logoSrc="/logos/compta-flow.png"
      auraClass="bg-[#1e40af]/40"
      features={[
        { icon: "book", title: "Plan SYSCOHADA révisé pré-configuré", text: "Imputations proposées automatiquement selon le référentiel OHADA, sans erreur de compte." },
        { icon: "scan", title: "OCR intelligent des factures", text: "Photographiez vos pièces : montants, TVA et tiers sont lus et ventilés seuls." },
        { icon: "refresh", title: "Rapprochement bancaire auto", text: "De 3 jours à 45 minutes : vos relevés se rapprochent ligne à ligne, sans ressaisie." },
        { icon: "sheet", title: "Balance, Grand Livre & états auto", text: "Vos états financiers se construisent en continu, prêts pour la liasse fiscale." },
        { icon: "upload", title: "Import relevés multi-banques", text: "BICICI, SGBCI, NSIA, Ecobank : importez vos relevés et laissez le moteur travailler." },
        { icon: "send", title: "Export vers expert-comptable", text: "Écritures révisées exportables vers Sage 100 pour une collaboration sans friction." },
      ]}
      practiceTitle="Scannez, contrôlez, clôturez"
      practiceText="La pile de factures du mois devient une comptabilité révisée : l'IA impute, vous validez, la clôture avance toute l'année."
      practiceBullets={[
        "Plan comptable SYSCOHADA révisé pré-configuré pour la Côte d'Ivoire",
        "Rapprochement bancaire intelligent en quelques clics",
        "Export certifié vers les logiciels de votre expert-comptable",
      ]}
      practiceStats={[
        { value: "-90 %", label: "de temps de saisie" },
        { value: "45 min", label: "de rapprochement" },
        { value: "60", label: "PME accompagnées" },
      ]}
      testimonials={[
        { quote: "La clôture de mai ne nous fait plus peur : tout est imputé au fil de l'eau, la liasse sort presque seule.", name: "Koffi Mensah", role: "Gérant négoce, Treichville", initials: "KM" },
        { quote: "L'OCR lit même nos factures froissées du marché. Mes écritures sont propres pour la première fois.", name: "Aïcha Bah", role: "Comptable interne, PME BTP", initials: "AB" },
        { quote: "J'exporte vers mon expert-comptable en un clic. Nos échanges sont passés de semaines à quelques heures.", name: "Serge N'Guessan", role: "DAF, services", initials: "SN" },
      ]}
      ctaTitle="Prêt à digitaliser votre compta ?"
      ctaButton="Démarrer avec Compta Flow"
    />
  );
}
