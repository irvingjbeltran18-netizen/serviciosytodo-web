function MaintenanceScreen({ go }) {
  const { Button, TextLink, SectionHeading, FeatureCard, PreviewCard, GradientWash } = DS;
  const services = [
    ["hammer", "Carpintería", "Desde cocinas hasta libreros, muebles prácticos y bellos."],
    ["wrench", "Plomería", "Desde reparaciones de fugas hasta instalaciones completas de baño."],
    ["plug", "Electricidad", "Hacemos instalaciones y actualizaciones eléctricas y seguras para su hogar."],
    ["layers", "Tablaroca", "Instalaciones profesionales de tablaroca al igual que reparaciones y acabados para un aspecto impecable y pulido a sus paredes."],
    ["leaf", "Jardinería", "Mantenemos su espacio exterior hermoso y bien conservado."],
    ["paint-roller", "Pintura", "Desde pequeñas habitaciones hasta hogares completos, creamos una apariencia fresca y renovada."],
  ];
  const benefits = [
    { t: "Mantenimiento rápido y sin estrés", p: ["Haremos cada servicio lo más rápido posible para que pueda regresar a su rutina normal.", "Nos comunicaremos con usted sobre lo esencial para garantizar un servicio perfecto y sin estrés."] },
    { t: "Servicios de calidad dorada", p: ["Estamos altamente capacitados y experimentados en todos los aspectos del mantenimiento del hogar.", "Hacemos trabajos de calidad profesional que cumplen con los más altos estándares de excelencia."] },
    { t: "Respeto por su hogar", p: ["Tratamos su hogar con el máximo respeto, teniendo cuidado con su propiedad y pertenencias durante todo el servicio de mantenimiento."] },
    { t: "Profesionalismo", p: ["Nuestro equipo es amable, cortés y siempre profesional.", "Puede confiar en que brindaremos una experiencia positiva y respetuosa hacia usted y su familia mientras trabajamos en su hogar."] },
    { t: "Limpieza", p: ["Limpiamos nuestra área en cuanto terminamos.", "Dejamos su hogar en las mismas condiciones en que llegamos, para que no tenga que preocuparse por limpiar después de marcharnos."] },
    { t: "Privacidad", p: ["Entendemos que su hogar es su espacio personal, por lo que nos enfocamos únicamente en nuestro trabajo y nunca indagamos o invadimos su privacidad.", "Podrá sentirse cómodo y tranquilo con nosotros en su hogar."] },
  ];
  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 32px 40px", textAlign: "center" }}>
        <GradientWash />
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 54, fontWeight: 400, lineHeight: 1.2, color: "var(--color-ink-black)", margin: 0, textWrap: "pretty" }}>Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad</h1>
          <p style={{ fontSize: 17, color: "var(--color-warm-stone)", margin: 0, maxWidth: 620 }}>Deje el mantenimiento de su hogar en manos de expertos de confianza. Cuidaremos de él como si fuera nuestro.</p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Button onClick={() => go("contact")} style={{ whiteSpace: "nowrap" }}>Quiero darle mantenimiento a mi hogar</Button>
            <TextLink arrow>Ver más</TextLink>
          </div>
        </div>
      </section>
      <Section style={{ marginTop: 24 }}><Metrics /></Section>
      <Section style={{ marginTop: 64 }}><Testimonial /></Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading title="Servicios" style={{ marginBottom: 36 }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 64px", maxWidth: 830, margin: "0 auto" }}>
          {services.map(([icon, t, d]) => (
            <FeatureCard key={t} icon={<LIcon name={icon} size={44} />} title={t} style={{ padding: "12px 0", gap: 10 }}>{d}</FeatureCard>
          ))}
        </div>
      </Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading title="Beneficios" style={{ marginBottom: 36 }} />
        <BenefitsAccordion items={benefits} />
        <div style={{ textAlign: "center", marginTop: 28 }}><Button onClick={() => go("contact")}>Me interesa ya que serán rápidos, limpios, y profesionales</Button></div>
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Guarantee go={go} text="Brindamos el nivel más alto de servicio y calidad. Si por alguna razón no está completamente satisfecho con el resultado final de cualquier servicio de mantenimiento, seguiremos trabajando con usted hasta que lo esté. Y si no logramos que cambie de opinión, le ayudaremos a encontrar otros profesionales. A los cuales les diremos todo lo que ya intentamos hacer. Queremos evitarle cualquier dolor de cabeza y estrés lidiando con su problema y con otros profesionales. Puede confiar en que iremos más allá de lo normal para usted y su familia." />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Gifts go={go} giftText="Díganos qué busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar. También le daremos una lasaña deliciosa al comenzar a trabajar juntos." />
      </Section>
      <Section style={{ marginTop: 88 }}><ContactSection go={go} /></Section>
    </main>
  );
}
window.MaintenanceScreen = MaintenanceScreen;
