function AboutScreen({ go }) {
  const { Button, SectionHeading, PreviewCard } = DS;
  const P = ({ children }) => <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 16, lineHeight: 1.65 }}>{children}</p>;
  return (
    <main>
      <Section style={{ paddingTop: 64, maxWidth: 860 }}>
        <SectionHeading eyebrow="Sobre nosotros" title="Misión" align="left" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 28 }}>
          <P>Seamos honestos, cuando piensa en contratar a alguien que construya, remodele o le dé mantenimiento a su hogar, no le dan tantas ganas.</P>
          <P><strong style={{ color: "var(--color-ink-black)" }}>¿Por qué?</strong></P>
          <P>Tal vez ya ha tenido una o varias malas experiencias como:</P>
          <ul style={{ margin: 0, paddingLeft: 20, color: "var(--color-warm-stone)", fontSize: 16, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Las personas llegaban tarde</li>
            <li>Hicieron un trabajo pésimo</li>
            <li>Dejaban un desastre cada vez que se iban</li>
            <li>Lo que cobraban no correspondía con la calidad de su trabajo</li>
            <li>No se sentía seguro alrededor de ellos</li>
            <li>Dijeron que tardarían 2 semanas pero tardaron 4</li>
            <li>Varios de los trabajadores se la pasaban en el teléfono</li>
            <li>Hacía preguntas sobre algo y ellos se molestaban, o se portaban muy cortantes</li>
          </ul>
          <P>Entendemos lo molesto que son problemas como estos. Y lo triste es lo normal que son. Es como que aceptamos que no hay otra manera.</P>
          <P>Y es una cosa enfrentarse a estos problemas cuando vive solo o con su pareja y ya. Pero es otra cosa cuando tiene una familia.</P>
          <ul style={{ margin: 0, paddingLeft: 20, color: "var(--color-warm-stone)", fontSize: 16, lineHeight: 1.7, display: "flex", flexDirection: "column", gap: 6 }}>
            <li>Se sale de su presupuesto contratando a alguien más para que arregle el pésimo trabajo que dejaron… afectando las finanzas de su hogar (comida, escuela, ropa, y más)</li>
            <li>Tiene que dedicar mucha atención a que hagan bien su trabajo (y que no dejen un desorden)… así que termina exhausto para la hora a la que llegan los niños de la escuela</li>
            <li>No puede llegar con su familia a descansar a su hogar porque siguen trabajando adentro… aunque hayan dicho que iban a terminar hace 1 semana</li>
          </ul>
          <P>Y demás.</P>
          <P>Hasta ahora, no había nadie dedicado exclusivamente a ofrecer servicios de construcción y mantenimiento (aquí los llamamos creación y cuidado) para familias como la suya.</P>
          <P><strong style={{ color: "var(--color-ink-black)" }}>Decidimos ser la constructora que resolvería eso… una cuyo único enfoque fuera crear hogares cómodos, seguros y hermosos para familias — no “casas”.</strong></P>
          <P>Primero, porque nuestro negocio está conformado por una familia como la de usted, con niños pequeños en casa, al igual que adolescentes — cada uno con necesidades diferentes.</P>
        </div>
      </Section>
      <Section style={{ marginTop: 24, maxWidth: 860 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <P>Aquí está una foto del padre de familia (y el encargado de todo esto).</P>
          <div style={{ color: "var(--color-ember-flame)", marginLeft: 12 }}><LIcon name="move-down" size={36} /></div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "url('./assets/photos/eduardo-machado.png') center / cover no-repeat", flexShrink: 0 }}></div>
            <span style={{ fontWeight: 600, fontSize: 14, color: "var(--color-ink-black)" }}>Arq. Eduardo Machado</span>
          </div>
          <P>Contamos con más de 30 años de experiencia en el sector de la construcción y mantenimiento de hogares. Así que puede confiar en qué sabemos qué requieren usted y su familia para que puedan dormir tranquilos por la noche.</P>
        </div>
      </Section>
      <Section style={{ marginTop: 48, maxWidth: 860 }}>
        <SectionHeading align="left" title="¿Por qué confiar en nosotros?" subtitle="Nos comprometemos a siempre hacer trabajos de calidad profesional, brindar atención al cliente fenomenal, y ser siempre honestos." />
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
          <div style={{ fontWeight: 600, fontSize: 19 }}>Nuestro trabajo está hecho hasta que usted esté completamente satisfecho.</div>
          <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 16 }}>Contáctenos y le garantizamos que jamás se quejará de la calidad de nuestro trabajo.</p>
          <Button onClick={() => go("contact")}>Contáctenos</Button>
        </div>
      </Section>
    </main>
  );
}
window.AboutScreen = AboutScreen;
