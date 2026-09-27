import ProductPageTemplate from "@/components/product-page-template";

export const metadata = {
  title: "Sell Flow — Facturation certifiée FNE-DGI | Suite Flow",
  description: "Vendez vite. Facturez juste. Le premier logiciel de facturation ivoirien 100% certifié FNE-DGI.",
};

export default function SellFlowPage() {
  return (
    <ProductPageTemplate
      appName="Sell Flow"
      tagline="Sell Flow — Facturation certifiée"
      title="Vendez vite. Facturez juste. Dormez tranquille."
      subtitle="Depuis la caisse ou sur le terrain, émettez des factures certifiées FNE en 1 clic. Le QR code DGI se génère tout seul. Fini la terreur des contrôles fiscaux et les redressements inattendus."
      icon="cart"
      logoSrc="/logos/sell-flow.png"
      auraClass="bg-[#0052FF]/30"
      features={[
        { icon: "qr", title: "Facturation FNE certifiée DGI", text: "QR code et sticker fiscal générés automatiquement sur chaque facture. Zéro double saisie sur le portail DGI." },
        { icon: "store", title: "Multi-caisses & multi-magasins", text: "Pilotez vos points de vente d'Abidjan à San Pedro depuis une seule caisse tactile, en boutique comme sur le terrain." },
        { icon: "wallet", title: "Mobile Money & espèces en temps réel", text: "Chaque encaissement Wave, Orange Money ou espèces est suivi et rapproché instantanément." },
        { icon: "doc", title: "Devis & bons de commande pro", text: "Des documents commerciaux propres, numérotés et suivis jusqu'à la facture finale." },
        { icon: "stock", title: "Stocks avec alertes de rupture", text: "Soyez prévenu avant la rupture et ne ratez plus jamais une vente." },
        { icon: "stats", title: "Stats par vendeur & produit", text: "Qui vend quoi, où et quand : pilotez vos équipes avec des chiffres nets." },
      ]}
      practiceTitle="En caisse comme sur le terrain"
      practiceText="Le vendeur encaisse, Sell Flow normalise : la facture part certifiée à la DGI pendant que le stock et la compta se mettent à jour seuls."
      practiceBullets={[
        "Intégration directe de l'API de Facturation Normalisée Électronique (FNE)",
        "Envoi automatique des reçus par WhatsApp & e-mail au client",
        "Gestion des stocks en temps réel multi-magasins",
      ]}
      practiceStats={[
        { value: "30 s", label: "par facture normalisée" },
        { value: "3 j", label: "pour la clé API FNE" },
        { value: "0 F", label: "d'amende DGI" },
      ]}
      testimonials={[
        { quote: "Avant, je passais mes soirées à ressaisir mes factures sur le portail DGI. Maintenant tout part certifié depuis la caisse.", name: "Awa Koné", role: "Boutique cosmétiques, Plateau", initials: "AK" },
        { quote: "Nos trois garages facturent pareil, à Abidjan comme à Bouaké. Le contrôleur DGI a validé sans remarque.", name: "Yao Kouassi", role: "Réseau auto, Abidjan", initials: "YK" },
        { quote: "Le suivi Mobile Money en temps réel a fait disparaître nos écarts de caisse du week-end.", name: "Fatou Diarra", role: "Supérette, Cocody", initials: "FD" },
      ]}
      ctaTitle="Prêt à sécuriser vos ventes ?"
      ctaButton="Démarrer avec Sell Flow"
    />
  );
}
