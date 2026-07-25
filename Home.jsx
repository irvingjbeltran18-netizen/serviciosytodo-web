function HomeScreen({ go, tweaks }) {
  const { Button, TextLink, SectionHeading, FeatureCard, PreviewCard, GradientWash } = DS;
  const stacked = !tweaks || tweaks.whyLayout !== "2 columnas";
  const P = ({ children }) => <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.6 }}>{children}</p>;
  const B = ({ children }) => <strong style={{ color: "var(--color-ink-black)" }}>{children}</strong>;
  React.useEffect(() => { lucide.createIcons(); }, [stacked]);
  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 32px 56px", textAlign: "center" }}>
        <GradientWash />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 58, fontWeight: 400, lineHeight: 1.2, color: "var(--color-ink-black)", margin: 0, textWrap: "pretty" }}>Obtenga el hogar cómodo y bello que su familia merece con 0 dolores de cabeza y 0 remordimientos.</h1>
          <p style={{ fontSize: 17, color: "var(--color-warm-stone)", margin: 0, maxWidth: 600 }}>Somos una constructora familiar enfocada en construir y remodelar hogares para familias. Además, les damos mantenimiento.</p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Button onClick={() => go("contact")} style={{ whiteSpace: "nowrap" }}>Empecemos</Button>
            <TextLink onClick={(e) => { e.preventDefault(); go("services"); }} arrow>Ver más</TextLink>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", gap: 32, marginTop: 48 }}>
          <PreviewCard tilt={-2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/fachada-8.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
          <PreviewCard tilt={2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/casa-san-pedro.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
        </div>
      </section>
      <Section style={{ marginTop: 32 }}><Metrics /></Section>
      <Section style={{ marginTop: 64 }}><Testimonial /></Section>
      <Section style={{ marginTop: 80 }}>
        <SectionHeading title="Servicios" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, marginTop: 40 }}>
          <FeatureCard icon={<LIcon name="hammer" size={44} />} title="Construcción de Hogares Familiares de 1 Piso en Menos de 6 Meses" linkLabel="Ver más" linkHref="#construccion">
            <Button onClick={() => go("construction")} style={{ marginTop: 4 }}>Construyan mi hogar</Button>
          </FeatureCard>
          <FeatureCard icon={<LIcon name="paint-roller" size={44} />} title="Remodelación de Fachadas, Recámaras y Baños" linkLabel="Ver más" linkHref="#remodelacion">
            <Button onClick={() => go("remodel")} style={{ marginTop: 4 }}>Necesito una remodelación</Button>
          </FeatureCard>
          <FeatureCard icon={<LIcon name="wrench" size={44} />} title="Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad" linkLabel="Ver más" linkHref="#mantenimiento">
            <Button onClick={() => go("maintenance")} style={{ marginTop: 4 }}>Me interesa</Button>
          </FeatureCard>
        </div>
      </Section>
      <Section style={{ marginTop: 88 }}>
        {stacked ? (
        <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 18 }}>
          <h2 style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-title)", fontWeight: 600, color: "var(--color-ember-flame)", lineHeight: 1.2, letterSpacing: "0.015em", margin: 0, textWrap: "pretty" }}>¿Por qué confiar en nosotros y no otra constructora?</h2>
          <P>Nos dedicamos a construir y dar mantenimiento <B>a hogares, no a casas.</B></P>
          <P>Esto significa que tenemos conocimientos especializados que no todo constructor de casas tiene. Por ejemplo, sabemos cómo:</P>
          <ul style={{ margin: 0, paddingLeft: 18, listStyle: "'\u00b7  '", color: "var(--color-ember-flame)", fontStyle: "italic", fontSize: 15, lineHeight: 1.6, display: "flex", flexDirection: "column", gap: 10 }}>
            <li>Construir baños hermosos y seguros… ideales para adultos y menores</li>
            <li>Crear habitaciones espaciosas y cómodas para que los niños lleguen a descansar (o jugar) después de un largo día de clases</li>
            <li>Dar mantenimiento sin invadir su privacidad para que pueda continuar con su rutina diaria sin molestia alguna</li>
          </ul>
          <P><B>Ser una constructora familiar significa tener un gran ojo para todos los detalles</B> — todo para crear un hogar cómodo, bello y seguro para su familia.</P>
          <P>El encargado de esta <B>constructora familiar es un padre de familia</B> con varios hijos.</P>
          <div style={{ color: "var(--color-ember-flame)", marginLeft: 12 }}><LIcon name="move-down" size={36} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "url('./assets/photos/eduardo-machado.png') center / cover no-repeat", flexShrink: 0 }}></div>
            <span style={{ fontWeight: 600, fontSize: 14, color: "var(--color-ink-black)" }}>Arq. Eduardo Machado</span>
          </div>
          <P>Así que sabe la importancia de crear un hogar perfecto para apoyar el crecimiento de su familia.</P>
          <P><B>Lleva +30 años construyendo, remodelando y dando mantenimiento a hogares como el suyo.</B></P>
        </div>
        ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <SectionHeading align="left" title="¿Por qué confiar en nosotros y no otra constructora?" subtitle="Nos dedicamos a construir y dar mantenimiento a hogares, no a casas." />
            <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.6 }}>Esto significa que tenemos conocimientos especializados que no todo constructor de casas tiene. Por ejemplo, sabemos cómo:</p>
            <ul style={{ margin: 0, paddingLeft: 20, color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 6 }}>
              <li>Construir baños hermosos y seguros… ideales para adultos y menores</li>
              <li>Crear habitaciones espaciosas y cómodas para que los niños lleguen a descansar (o jugar) después de un largo día de clases</li>
              <li>Dar mantenimiento sin invadir su privacidad para que pueda continuar con su rutina diaria sin molestia alguna</li>
            </ul>
            <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.6 }}>Ser una constructora familiar significa tener un gran ojo para todos los detalles — todo para crear un hogar cómodo, bello y seguro para su familia.</p>
            <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.6 }}>El encargado de esta constructora familiar es un padre de familia con varios hijos: Constructor Eduardo Machado. Así que sabe la importancia de crear un hogar perfecto para apoyar el crecimiento de su familia. Lleva +30 años construyendo, remodelando y dando mantenimiento a hogares como el suyo.</p>
          </div>
          <PreviewCard style={{ padding: 20, width: 329, height: 187 }}><div style={{ height: 184, width: 324, background: "var(--color-marigold-glow)", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
        </div>
        )}
      </Section>
      <Section style={{ marginTop: 88 }}><ContactSection go={go} /></Section>
    </main>
  );
}
window.HomeScreen = HomeScreen;
