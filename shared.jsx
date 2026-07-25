const DS = window.ServiciosYTodoDesignSystem_00dda5;
const LIcon = ({ name, size = 24 }) => <i data-lucide={name} style={{ width: size, height: size, display: "block" }}></i>;
// Placeholder de foto — no se proporcionó fotografía real de proyectos
const PhotoPlaceholder = ({ label, height = 220, tone = "var(--color-marigold-glow)" }) => (
  <div style={{ height, background: tone, borderRadius: "var(--radius-images)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, color: "var(--color-ironwood)" }}>
    <LIcon name="image" size={28} />
    <span style={{ fontSize: 13 }}>{label}</span>
  </div>
);
const Section = ({ children, style }) => (
  <section style={{ maxWidth: "var(--page-max-width)", margin: "0 auto", padding: "0 32px", ...style }}>{children}</section>
);
// Métricas de credibilidad (franja compartida)
const Metrics = ({ style }) => (
  <div style={{ display: "flex", justifyContent: "center", gap: 72, flexWrap: "wrap", ...style }}>
    {[["50+", "Clientes felices"], ["150+", "Proyectos completados"], ["30+", "Años Trabajando"]].map(([n, l]) => (
      <div key={l} style={{ textAlign: "center" }}>
        <div style={{ fontSize: 40, fontWeight: 700, color: "var(--color-ember-flame)" }}>{n}</div>
        <div style={{ fontSize: 15, color: "var(--color-warm-stone)" }}>{l}</div>
      </div>
    ))}
  </div>
);
// Testimonio compartido — Dr. Nacho
const Testimonial = ({ style }) => (
  <div style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", padding: 40, boxShadow: "var(--shadow-lg)", maxWidth: 780, margin: "0 auto", display: "flex", gap: 24, alignItems: "center", ...style }}>
    <div style={{ flexShrink: 0 }}><img src="./assets/photos/dr-nacho.png" alt="Dr. Nacho" style={{ width: 96, height: 96, objectFit: "cover", borderRadius: "var(--radius-images)", display: "block" }} /></div>
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <p style={{ margin: 0, fontSize: 17, color: "var(--color-ink-black)", lineHeight: 1.5 }}>“Remodelé mi casa con ellos y estoy muy satisfecho. Son profesionales y brindan atención muy buena. Su calidad también habla por sí sola porque mi hogar terminó mucho mejor de lo que imaginaba.”</p>
      <div><span style={{ fontWeight: 600 }}>Dr. Nacho</span> <span style={{ color: "var(--color-driftwood)", fontSize: 14 }}>— Propietario de hogar remodelado</span></div>
    </div>
  </div>
);
// Componente interactivo de beneficios (acordeón)
function BenefitsAccordion({ items }) {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => { lucide.createIcons(); }, [open]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 780, margin: "0 auto" }}>
      {items.map((it, i) => (
        <div key={it.t} style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", boxShadow: i === open ? "var(--shadow-lg)" : "var(--shadow-sm)", overflow: "hidden" }}>
          <button onClick={() => setOpen(i)} style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", padding: "18px 24px", fontFamily: "var(--font-sans)", fontSize: 17, fontWeight: 600, color: i === open ? "var(--color-ember-flame)" : "var(--color-ink-black)", textAlign: "left" }}>
            {it.t}<LIcon name={i === open ? "minus" : "plus"} size={18} />
          </button>
          {i === open && <div style={{ padding: "0 24px 20px", display: "flex", flexDirection: "column", gap: 8 }}>
            {it.p.map((par, j) => <p key={j} style={{ margin: 0, fontSize: 15, color: "var(--color-warm-stone)", lineHeight: 1.55 }}>{par}</p>)}
          </div>}
        </div>
      ))}
    </div>
  );
}
// Proceso — pasos numerados
const ProcessSteps = ({ steps }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 780, margin: "0 auto" }}>
    {steps.map(([t, d], i) => (
      <div key={t} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        <div style={{ flexShrink: 0, width: 44, height: 44, borderRadius: "50%", background: "var(--color-ember-flame)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 17 }}>{i + 1}</div>
        <div><div style={{ fontWeight: 600, fontSize: 18 }}>{t}</div><p style={{ margin: "4px 0 0", color: "var(--color-warm-stone)", fontSize: 15, lineHeight: 1.55 }}>{d}</p></div>
      </div>
    ))}
  </div>
);
// Garantía de Satisfacción Absoluta
// Slider de fotos — 2 a la vez en escritorio, 1 a la vez (más grande) en móvil
function PhotoSlider({ images = [], height = 150 }) {
  const { PreviewCard } = DS;
  const [i, setI] = React.useState(0);
  const [mobile, setMobile] = React.useState(() => window.matchMedia("(max-width: 820px)").matches);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const fn = (e) => { setMobile(e.matches); setI(0); };
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  const per = mobile ? 1 : 2;
  const imgs = images.slice(0, 6);
  React.useEffect(() => { lucide.createIcons(); }, [i, mobile]);
  const btn = (dir, disabled) => (
    <button onClick={() => setI(i + dir * per)} disabled={disabled} aria-label={dir < 0 ? "Anterior" : "Siguiente"}
      style={{ width: 36, height: 36, borderRadius: "50%", border: "none", background: "var(--color-paper-white)", boxShadow: "var(--shadow-sm)", display: "flex", alignItems: "center", justifyContent: "center", cursor: disabled ? "default" : "pointer", color: disabled ? "var(--color-smoke)" : "var(--color-ink-black)", flexShrink: 0, opacity: disabled ? 0.5 : 1 }}>
      <LIcon name={dir < 0 ? "chevron-left" : "chevron-right"} size={18} />
    </button>
  );
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: mobile ? 10 : 20 }}>
      {btn(-1, i === 0)}
      <div style={{ display: "flex", gap: 32, flex: mobile ? 1 : "initial", minWidth: 0 }}>
        {imgs.slice(i, i + per).map((img, k) => (
          <PreviewCard key={img} tilt={mobile ? 0 : k === 0 ? -2 : 2} style={{ width: mobile ? "100%" : 320, padding: mobile ? 14 : 20 }}>
            <div style={{ height: mobile ? 240 : height, background: `url('./assets/photos/${img}.png') center / cover no-repeat`, borderRadius: "var(--radius-images)" }}></div>
          </PreviewCard>
        ))}
      </div>
      {btn(1, i + per >= imgs.length)}
    </div>
  );
}
const Guarantee = ({ text, go, title = "Garantía de Satisfacción Absoluta" }) => {
  const { SectionHeading, Button } = DS;
  return (
    <div style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", padding: "44px 40px", boxShadow: "var(--shadow-lg)", maxWidth: 860, margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: 20, alignItems: "center" }}>
      <SectionHeading title={title} />
      <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 16, lineHeight: 1.6, maxWidth: 700 }}>{text}</p>
      <Button onClick={() => go("contact")}>Quiero trabajar con su constructora familiar</Button>
    </div>
  );
};
// Regalos y beneficios adicionales
const Gifts = ({ giftText, go }) => {
  const { SectionHeading, FeatureCard, Button } = DS;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      <SectionHeading eyebrow="Regalos" title="Lo Que Le Regalamos al Trabajar Juntos" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, maxWidth: 900, margin: "0 auto", width: "100%" }}>
        <FeatureCard icon={<LIcon name="gift" size={44} />} title="Consulta personalizada, cotización gratuita, y una lasaña deliciosa">{giftText}</FeatureCard>
        <FeatureCard icon={<LIcon name="badge-percent" size={44} />} title="Descuentos especiales">Descuentos especiales en proyectos futuros.</FeatureCard>
        <FeatureCard icon={<LIcon name="key-round" size={44} />} title="Membresía gratis">Obtenga una membresía gratis para ahorrar en el mantenimiento de su hogar.</FeatureCard>
      </div>
    </div>
  );
};
// Llamado a la acción por disponibilidad
const AvailabilityCTA = ({ text, go }) => {
  const { SectionHeading, Button } = DS;
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: 24, alignItems: "center" }}>
      <SectionHeading title="¿Qué espera?" subtitle={text} />
      <Button onClick={() => go("contact")}>Agendar una consulta</Button>
    </div>
  );
};
// Sección de contacto compartida
const ContactSection = ({ go, compact }) => {
  const { SectionHeading, TextLink, Button } = DS;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeading eyebrow="Contacto" title="Hablemos de su hogar" subtitle="Estamos ubicados en Mexicali, Baja California, México. Nuestro horario es de 9-6 de lunes a viernes y 9-2 los sábados." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, maxWidth: 860, margin: "0 auto", width: "100%" }}>
        <div style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", padding: 32, boxShadow: "var(--shadow-lg)", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--color-ember-flame)" }}>Opción #1</div>
          <div style={{ fontWeight: 600, fontSize: 19 }}>Agendar consulta gratis</div>
          <p style={{ margin: 0, fontSize: 15, color: "var(--color-warm-stone)", lineHeight: 1.55 }}>Llene el formulario para agendar una consulta gratis con el Arq. Machado (sin compromiso alguno).</p>
          {!compact && <Button onClick={() => go("contact")} style={{ alignSelf: "flex-start" }}>Llenar formulario</Button>}
        </div>
        <div style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", padding: 32, boxShadow: "var(--shadow-sm)", display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--color-ember-flame)" }}>Opción #2</div>
          <div style={{ fontWeight: 600, fontSize: 19 }}>Envíe un mensaje directo</div>
          <p style={{ margin: 0, fontSize: 15, color: "var(--color-warm-stone)", lineHeight: 1.55 }}>Haga clic en el correo o el # de WhatsApp para que conteste cualquiera de sus dudas.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 15 }}>
            <TextLink href="mailto:contacto.serviciosytodo@gmail.com">contacto.serviciosytodo@gmail.com</TextLink>
            <TextLink href="https://wa.me/526862434292">WhatsApp: +52 686 243 4292</TextLink>
          </div>
          <div style={{ fontSize: 13, color: "var(--color-driftwood)" }}>Respondemos durante nuestro horario laboral.</div>
        </div>
      </div>
    </div>
  );
};
// Últimas publicaciones
const Posts = () => {
  const { SectionHeading, TextLink, PreviewCard } = DS;
  const arts = [
    "Servicios de mantenimiento en Mexicali: ¿Todo en 1 o especializados?",
    "Por qué el servicio de plomería en Mexicali más barato puede ser el más caro",
    "Construcción de una casa vs un hogar en Mexicali: ¿Cuál es la mejor opción para su familia?",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
      <SectionHeading title="Últimas Publicaciones" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
        {arts.map((t, i) => (
          <PreviewCard key={i} style={{ padding: 16 }}>
            <PhotoPlaceholder label="Imagen destacada" height={130} tone={i % 2 ? "var(--color-parchment-shadow)" : "var(--color-marigold-glow)"} />
            <div style={{ fontWeight: 600, fontSize: 15, marginTop: 12, lineHeight: 1.4 }}>{t}</div>
          </PreviewCard>
        ))}
      </div>
      <div style={{ textAlign: "center" }}><TextLink arrow>Ver más</TextLink></div>
    </div>
  );
};
// Pie de página compartido
const Footer = ({ go }) => (
  <footer style={{ borderTop: "1px solid var(--color-mist-gray)", marginTop: 72, padding: "44px 32px 36px", maxWidth: "var(--page-max-width)", marginLeft: "auto", marginRight: "auto" }}>
    <div style={{ display: "flex", justifyContent: "space-between", gap: 32, flexWrap: "wrap" }}>
      <a href="#inicio" style={{ display: "inline-flex" }}><img src="./assets/logo-horizontal.png" alt="Servicios y Todo" style={{ height: 42, width: 188 }} /></a>
      <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
        {[["Servicios", [["Construcción", "#construccion"], ["Remodelación", "#remodelacion"], ["Mantenimiento para Hogares", "#mantenimiento"]]],
          ["Diferenciadores", [["Sobre", "#mision"], ["Hogares y Obras", "#trabajo"]]]].map(([h, links]) => (
          <div key={h} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--color-warm-stone)" }}>{h}</div>
            {links.map(([l, href]) => <a key={l} href={href} style={{ fontSize: 14, color: "var(--color-ink-black)", textDecoration: "none" }}>{l}</a>)}
          </div>
        ))}
      </div>
    </div>
    <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", fontSize: 13, color: "var(--color-driftwood)" }}>
      <span>© Servicios y Todo de Todo para su Construcción. Todos los derechos reservados.</span>
      <span style={{ display: "flex", gap: 16 }}><a href="https://www.instagram.com/serviciosytodo/" target="_blank" style={{ color: "var(--color-driftwood)" }}>Instagram</a><a href="https://www.facebook.com/tododetodoparasuconstruccion" target="_blank" style={{ color: "var(--color-driftwood)" }}>Facebook</a></span>
    </div>
  </footer>
);
Object.assign(window, { DS, LIcon, PhotoPlaceholder, Section, Metrics, Testimonial, BenefitsAccordion, ProcessSteps, PhotoSlider, Guarantee, Gifts, AvailabilityCTA, ContactSection, Posts, Footer });
