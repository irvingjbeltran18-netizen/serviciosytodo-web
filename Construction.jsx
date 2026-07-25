function ConstructionScreen({ go }) {
  const { Button, TextLink, SectionHeading, PreviewCard, GradientWash } = DS;
  const benefits = [
    { t: "Presupuestos claros y detallados", p: ["Le damos presupuestos claros y detallados para los materiales que necesitamos comprar y la mano de obra que realizamos.", "Y si tiene alguna pregunta, estaremos encantados de explicárselo todo."] },
    { t: "Proceso de diseño centrado en su visión", p: ["Queremos escuchar cuál es la visión exacta que tiene.", "Y haremos todos los cambios que usted desee hasta que todo esté listo para empezar a construir."] },
    { t: "Transparencia en cada decisión y etapa", p: ["Le mantendremos siempre informado.", "Si hay algún retraso que esté fuera de nuestro control, se lo haremos saber de inmediato.", "Y si se necesitan hacer cambios, le informaremos de inmediato para que no haya sorpresas al final."] },
    { t: "Calidad dorada de trabajo", p: ["Trabajamos con los mejores materiales para construir la casa más sólida y segura posible para su familia. Preferimos no usar materiales de baja calidad, a no ser que sea su preferencia indiscutible. Y si el uso de un material más costoso garantiza la seguridad de su hogar a largo plazo, le informaremos para ver si nos permite usarlo.", "Y en cuanto a la mano de obra, no daremos por terminado su nuevo hogar hasta que no quede ni un simple detalle. Nos enfocamos en los detalles grandes, al igual que los más pequeños."] },
    { t: "Infraestructura segura", p: ["No tendrá que preocuparse por problemas estructurales en su hogar al terminar nuestro trabajo. Trabajamos con los más altos estándares para evitar esto.", "Y contratamos a varios profesionales para realizar muchas pruebas que garantizan que no habrá problema alguno con su hogar ahora ni en el futuro."] },
    { t: "0 papeleo molesto", p: ["No tendrá que preocuparse por ningún trámite molesto antes ni durante la construcción de su hogar."] },
    { t: "Ayuda en la mudanza", p: ["Cuando esté listo su nuevo hogar, no tiene que preocuparse sobre la mudanza — ver a quién contratar, gastar todo un día llevando cosas, y demás.", "Nosotros mismos le ayudaremos a traer todas sus pertenencias."] },
    { t: "Hogar habitable al mudarse", p: ["Nos aseguraremos de que su hogar esté completamente habitable cuando se mude.", "Esto significa que tendrá sus muebles, decoración y servicios como agua y luz listos para usar al llegar aquí."] },
  ];
  const steps = [
    ["Diseño de su hogar", "Nos reuniremos con usted para entender sus requisitos y deseos. Crearemos un plano según lo que pida."],
    ["Presupuesto para comenzar la construcción", "Al terminar el diseño, le damos un presupuesto para poder comenzar. Nos enfocamos en que comprenda todos los costos involucrados."],
    ["Construcción de su hogar", "Comenzaremos a construir una vez que nos dé luz verde. Durante todo el proceso, lo mantenemos informado sobre cómo va su hogar y respondemos todas sus dudas."],
    ["Avances", "A medida que se hagan avances en construir su hogar, le informamos sobre el dinero requerido para el material y la mano de obra."],
    ["Entrega de su hogar perfecto", "Terminamos la construcción del nuevo hogar de su familia."],
  ];
  return (
    <main>
      <section style={{ position: "relative", overflow: "hidden", padding: "72px 32px 40px", textAlign: "center" }}>
        <GradientWash />
        <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 54, fontWeight: 400, lineHeight: 1.2, color: "var(--color-ink-black)", margin: 0, textWrap: "pretty" }}>Construimos Un Hogar de 1 Piso Para su Familia en Menos de 6 Meses.</h1>
          <p style={{ fontSize: 17, color: "var(--color-warm-stone)", margin: 0, maxWidth: 600 }}>(También construimos de 2 pisos). Sea cual sea, su nuevo hogar superará sus expectativas. Garantizamos 0 estrés y 0 remordimientos.</p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <Button onClick={() => go("contact")} style={{ whiteSpace: "nowrap" }}>Construyamos el hogar de mis sueños</Button>
          </div>
        </div>
        <div style={{ position: "relative", marginTop: 40, maxWidth: 700, marginLeft: "auto", marginRight: "auto" }}>
          <PreviewCard style={{ padding: 20 }}><div style={{ height: 240, background: "url('./assets/photos/fachada-13.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
        </div>
      </section>
      <Section style={{ marginTop: 24 }}><Metrics /></Section>
      <Section style={{ marginTop: 64 }}><Testimonial /></Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading title="Beneficios de Trabajar con Nosotros" style={{ marginBottom: 36 }} />
        <BenefitsAccordion items={benefits} />
        <div style={{ textAlign: "center", marginTop: 28 }}><Button onClick={() => go("contact")}>Me gusta que garantizan 0 estrés y 100% calidad dorada</Button></div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 48 }}>
          <PreviewCard tilt={-2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/fachada-2.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
          <PreviewCard tilt={2} style={{ width: 320, padding: 20 }}><div style={{ height: 150, background: "url('./assets/photos/fachada-1b.png') center / cover no-repeat", borderRadius: "var(--radius-images)" }}></div></PreviewCard>
        </div>
      </Section>
      <Section style={{ marginTop: 88 }}>
        <SectionHeading eyebrow="Proceso" title="Proceso" style={{ marginBottom: 36 }} />
        <ProcessSteps steps={steps} />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Guarantee go={go} title="Garantía de Tranquilidad Total" text={'Estamos tan seguros que podemos crear el hogar de sus sueños que le ofrecemos nuestra "Garantía de Tranquilidad Total". Si al final de cualquier etapa del proceso no está completamente satisfecho, le encontraremos una constructora que sí lo entienda. Pero dudamos que eso ocurra. Muchos de nuestros clientes pasados han dicho que aprecian nuestra paciencia, ética y honestidad. Y en cuanto a nuestro trabajo, jamás nos han corrido por mala calidad. Solo hacemos hogares de calidad fenomenal.'} />
      </Section>
      <Section style={{ marginTop: 88 }}>
        <Gifts go={go} giftText="Díganos qué busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar de su construcción. También le daremos una lasaña deliciosa cuando comencemos a trabajar juntos." />
      </Section>
      <Section style={{ marginTop: 48 }}>
        <AvailabilityCTA go={go} text="Nos comprometemos a construir los mejores hogares posibles para las familias de cada uno de nuestros clientes. Pero solo podemos dedicarle todo nuestro tiempo y esfuerzo a un número limitado de proyectos. Por eso no tomamos muchos proyectos a la vez. Contáctenos para agendar una consulta ahora mismo y comenzar a crear el hogar ideal para su familia." />
      </Section>
      <Section style={{ marginTop: 48 }}>
        <PhotoSlider images={["casa-san-pedro", "fachada-3", "fachada-4", "fachada-5", "fachada-14", "fachada-12"]} />
      </Section>
      <Section style={{ marginTop: 88 }}><ContactSection go={go} /></Section>
    </main>
  );
}
window.ConstructionScreen = ConstructionScreen;
