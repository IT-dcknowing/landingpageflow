import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Task Flow — Pilotage & CRM de votre entreprise | Suite Flow",
  description: "Le cerveau de votre entreprise : Kanban collaboratif, rentabilité par mission, portail client transparent.",
};

export default function TaskFlowPage() {
  return (
    <ProductPageTemplate
      appName="Task Flow"
      tagline="Task Flow — Le chef d'orchestre"
      title="Le cerveau de votre entreprise."
      subtitle="Suivez qui fait quoi, et quand. Le cockpit parfait pour le dirigeant de PME qui veut tout piloter en un coup d'œil, sans micro-management épuisant."
      icon="board"
      logoSrc="/logos/task-flow.png"
      auraClass="bg-sky-400/10"
      features={[
        { icon: "kanban", title: "Kanban multi-projets", text: "Toutes vos missions visualisées d'un coup d'œil, du devis à la livraison." },
        { icon: "assign", title: "Attribution automatique", text: "Les tâches nées dans Sell, Compta, RH ou Legal sont assignées sans ressaisie." },
        { icon: "bell", title: "Alertes retard & dépassement", text: "Prévenu avant le dérapage, jamais après : délais et budgets sous surveillance." },
        { icon: "pie", title: "Rentabilité par mission", text: "Chaque dossier affiche sa marge : vous savez enfin ce qui rapporte." },
        { icon: "eye", title: "Portail client transparent", text: "Vos clients suivent l'avancement de leur dossier : confiance et zéro relance." },
        { icon: "pulse", title: "Métriques temps réel", text: "Charge des équipes, délais moyens, dossiers à risque : le pouls du cabinet." },
      ]}
      practiceTitle="De la vente à la livraison, sans trou"
      practiceText="Une facture Sell Flow crée sa tâche de suivi, une échéance Legal Flow crée son rappel : Task Flow relie les 4 apps en un seul flux de travail."
      practiceBullets={[
        "Cockpit collaboratif synchronisé avec vos commandes clients",
        "Attribution de rôles clairs, délais stricts et alertes de retard",
        "Tableau de bord de rentabilité par mission et par pôle d'activité",
      ]}
      practiceStats={[
        { value: "100 %", label: "de traçabilité" },
        { value: "5", label: "apps connectées" },
        { value: "75 %", label: "d'avancement visible" },
      ]}
      testimonials={[
        { quote: "Chaque dossier client a son Kanban. En réunion, on ouvre Task Flow et tout le monde sait où on en est.", name: "Stéphane Adjei", role: "Associé cabinet, Plateau", initials: "SA" },
        { quote: "Le portail client a divisé par deux les appels 'où en est mon dossier ?'. Mes clients adorent.", name: "Grâce Ouattara", role: "Consultante, Cocody", initials: "GO" },
        { quote: "On a découvert quelles missions perdaient de l'argent. On a réajusté nos prix en un mois.", name: "Didier Boka", role: "Gérant agence, Abidjan", initials: "DB" },
      ]}
      ctaTitle="Prêt à tout piloter d'un seul regard ?"
      ctaButton="Démarrer avec Task Flow"
    />
  );
}
