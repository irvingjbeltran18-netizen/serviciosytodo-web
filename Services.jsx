function ServicesScreen({ go }) {
  const { Button, SectionHeading, FeatureCard } = DS;
  const cards = [
    { icon: "hammer", title: "Construcción de Hogares Familiares de 1 Piso en Menos de 6 Meses", body: "Su nuevo hogar superará sus expectativas. Garantizamos 0 estrés y 0 remordimientos.", cta: "Construyan mi hogar", to: "construction", hash: "#construccion" },
    { icon: "paint-roller", title: "Remodelación de Fachadas, Recámaras y Baños", body: "Convertimos casas en los hogares más hermosos de la cuadra en pocos meses.", cta: "Necesito una remodelación", to: "remodel", hash: "#remodelacion" },
    { icon: "wrench", title: "Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad", body: "Deje el mantenimiento de su hogar en manos de expertos de confianza. Cuidaremos de él como si fuera nuestro.", cta: "Me interesa", to: "maintenance", hash: "#mantenimiento" },
  ];
  return (
    <main>
      <Section style={{ paddingTop: 64, textAlign: "center" }}>
        <SectionHeading title="Servicios" subtitle="Construcción, remodelación y mantenimiento — todo para el hogar de su familia." />
      </Section>
      <Section style={{ marginTop: 48 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {cards.map((c) => (
            <FeatureCard key={c.to} icon={<LIcon name={c.icon} size={44} />} title={c.title} linkLabel="Ver más" linkHref={c.hash}>
              {c.body}
              <div style={{ marginTop: 14 }}><Button onClick={() => go("contact")}>{c.cta}</Button></div>
            </FeatureCard>
          ))}
        </div>
      </Section>
      <Section style={{ marginTop: 72 }}><Metrics /></Section>
      <Section style={{ marginTop: 64 }}><Testimonial /></Section>
      <Section style={{ marginTop: 88 }}><ContactSection go={go} /></Section>
    </main>
  );
}
window.ServicesScreen = ServicesScreen;
