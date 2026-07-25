function RemodelScreen({ go }) {
  const { Button, TextLink, SectionHeading, PreviewCard, GradientWash } = DS;
  const benefits = [
    { t: "Presupuestos claros y detallados", p: ["Le damos presupuestos claros y detallados para los materiales que necesitamos comprar y la mano de obra que realizamos.", "Y si tiene alguna pregunta, estaremos encantados de explicárselo todo."] },
    { t: "Proceso de diseño centrado en su visión", p: ["Queremos escuchar cuál es la visión exacta que tiene.", "Y haremos todos los cambios que usted desee hasta que todo esté listo para empezar la remodelación."] },
    { t: "Transparencia en cada decisión y etapa", p: ["Le mantendremos siempre informado.", "Si hay algún retraso que esté fuera de nuestro control, se lo haremos saber de inmediato.", "Y si se necesitan hacer cambios, le informaremos de inmediato para que no haya sorpresas al final."] },
    { t: "Calidad dorada de trabajo", p: ["Trabajamos con los mejores materiales para construir la casa más sólida y segura posible para su familia. Preferimos no usar materiales de baja calidad, a no ser que sea su preferencia indiscutible. Y si el uso de un material más costoso garantiza la seguridad de su hogar a largo plazo, le informaremos para ver si nos permite usarlo.", "Y en cuanto a la mano de obra, no daremos por terminada la remodelación hasta que no quede ni un simple detalle. Nos enfocamos en los detalles grandes, al igual que los más pequeños."] },
    { t: "Infraestructura segura", p: ["No tendrá que preocuparse por problemas estructurales en su hogar al terminar la remodelación. Trabajamos con los más altos estándares para evitar esto.", "Y contratamos a varios profesionales para realizar muchas pruebas que garantizan que no habrá problema alguno con su hogar ahora ni en el futuro."] },
    { t: "0 papeleo molesto", p: ["No tendrá que preocuparse por ningún trámite molesto antes ni durante la remodelación de su hogar."] },
  ];
  const steps = [
    ["Consulta gratis", "Nos reuniremos con usted para entender sus requisitos y deseos. Crearemos un plano según lo que pida."],
    ["Propuestas de diseño", "Tomamos medidas y creamos unos planos. Después, hacemos unos bocetos que pasamos a nuestro dibujante para que cree la remodelación digital—siempre verificando que le guste la dirección del diseño."],
    ["Presupuesto para comenzar la construcción", "Al terminar el diseño, le damos un presupuesto para poder comenzar. Nos enfocamos en que comprenda todos los costos involucrados."],
    ["Remodelación de su hogar", "Comenzaremos a remodelar una vez que nos dé luz verde. Durante todo el proceso, lo mantenemos informado sobre cómo va su hogar y respondemos todas sus dudas."],
  ];
  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 32px 40px", textAlign: "center" }}>
        <GradientWash />
        <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 54, fontWeight: 400, lineHeight: 1.2, color: "var(--color-ink-black)", margin: 0, textWrap: "pretty" }}>Remodelaciones Descabelladamente Hermosas... Especializadas en Hogares Familiares</h1>
          <p style={{ fontSize: 17, color: "var(--color-warm-stone)", margin: 0, maxWidth: 620 }}>Convertimos casas en los hogares más hermosos de la cuadra en pocos meses. Con 0 estrés y 0 remordimientos.</p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Button onClick={() => go("contact")} style={{ whiteSpace: "nowrap" }}>Me interesa hablar con ustedes</Button>
            <TextLink arrow>Ver más</TextLink>
          </div>
        </div>
        <div style={{ position: "relative", display: "flex", justifyContent: "center", gap: 32, marginTop: 40 }}>
          <PreviewCard tilt={-2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/fachada-9.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
          <PreviewCard tilt={2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/remodelacion-dr-nacho.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
        </div>
      </section>
      <Section style={{ marginTop: 24 }}><Metrics /></Section>
      <Section style={{ marginTop: 64 }}><Testimonial /></Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading title="Beneficios de Trabajar con Nosotros" style={{ marginBottom: 36 }} />
        <BenefitsAccordion items={benefits} />
        <div style={{ textAlign: "center", marginTop: 28 }}><Button onClick={() => go("contact")}>Me gusta que garantizan 0 estrés y 100% calidad dorada</Button></div>
      </Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading eyebrow="Proceso" title="Proceso" style={{ marginBottom: 36 }} />
        <ProcessSteps steps={steps} />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Guarantee go={go} text={'Estamos tan seguros que podemos crear el hogar de sus sueños que le ofrecemos nuestra "Garantía de Satisfacción Absoluta". Si al final de cualquier etapa del proceso no está completamente satisfecho, le encontraremos una constructora que sí lo entienda. Pero dudamos que eso ocurra. Muchos de nuestros clientes pasados han dicho que aprecian nuestra paciencia, ética y honestidad. Y en cuanto a nuestro trabajo, jamás nos han corrido por mala calidad. Solo hacemos hogares de calidad fenomenal.'} />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Gifts go={go} giftText="Díganos qué busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar de su remodelación. También le daremos una lasaña deliciosa cuando comencemos a trabajar juntos." />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <AvailabilityCTA go={go} text="Nos comprometemos a hacer remodelaciones bellas y seguras para cada una de las familias de nuestros clientes. Pero solo podemos dedicarle todo nuestro tiempo y esfuerzo a un número limitado de proyectos. Por eso no tomamos muchos proyectos a la vez. Contáctenos para agendar una consulta ahora mismo y comenzar a crear el hogar ideal para su familia." />
      </Section>
      <Section style={{ marginTop: 88 }}><ContactSection go={go} /></Section>
    </main>
  );
}
window.RemodelScreen = RemodelScreen;
