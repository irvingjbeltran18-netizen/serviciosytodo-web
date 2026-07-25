function QuoteScreen({ go }) {
  const { Button, Input, SectionHeading, SymbolCircle, TextLink } = DS;
  const [sent, setSent] = React.useState(false);
  const [f, setF] = React.useState({ nombre: "", tel: "", correo: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const enviar = () => {
    const lineas = [`Hola, quiero agendar una consulta gratis.`, `Nombre: ${f.nombre}`, `Teléfono: ${f.tel}`, f.correo && `Correo: ${f.correo}`, f.msg && `Necesito: ${f.msg}`].filter(Boolean);
    window.open("https://wa.me/526864657305?text=" + encodeURIComponent(lineas.join("\n")), "_blank");
    setSent(true);
  };
  const label = { fontSize: 14, fontWeight: 600, color: "var(--color-ink-black)" };
  return (
    <main>
      <Section style={{ paddingTop: 64, maxWidth: 980 }}>
        <SectionHeading eyebrow="Contacto" title="Agende su consulta gratis" subtitle="Estamos ubicados en Mexicali, Baja California, México. Nuestro horario es de 9-6 de lunes a viernes y 9-2 los sábados." />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, marginTop: 44, alignItems: "start" }}>
          <div style={{ background: "var(--color-paper-white)", borderRadius: "var(--radius-cards)", padding: 36, boxShadow: "var(--shadow-lg)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "32px 0", display: "flex", flexDirection: "column", gap: 14, alignItems: "center" }}>
                <SymbolCircle size={56}><LIcon name="check" size={26} /></SymbolCircle>
                <div style={{ fontSize: 20, fontWeight: 600 }}>¡Gracias! Recibimos su solicitud.</div>
                <p style={{ margin: 0, color: "var(--color-warm-stone)", fontSize: 15 }}>Le contactamos durante nuestro horario laboral para agendar su consulta gratis con el Arq. Machado.</p>
                <TextLink onClick={(e) => { e.preventDefault(); setSent(false); go("home"); }} arrow>Volver al inicio</TextLink>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--color-ember-flame)" }}>Opción #1 — Agendar consulta gratis</div>
                <p style={{ margin: 0, fontSize: 14, color: "var(--color-warm-stone)" }}>Llene el formulario para agendar una consulta gratis con el Arq. Machado (sin compromiso alguno).</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={label}>Su nombre</span><Input placeholder="Nombre completo" value={f.nombre} onChange={set("nombre")} /></div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={label}>Teléfono</span><Input type="tel" placeholder="686 000 0000" value={f.tel} onChange={set("tel")} /></div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={label}>Correo (opcional)</span><Input type="email" placeholder="su@correo.com" value={f.correo} onChange={set("correo")} /></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}><span style={label}>¿Qué necesita?</span>
                  <textarea placeholder="Ej. Quiero remodelar la fachada de mi hogar…" rows={4} value={f.msg} onChange={set("msg")} style={{ background: "var(--color-paper-white)", border: "1px solid var(--border-input)", borderRadius: "var(--radius-inputs)", padding: "14px 20px", fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-primary)", resize: "vertical" }}></textarea>
                </div>
                <Button onClick={enviar}>Agendar consulta gratis</Button>
                <div style={{ fontSize: 13, color: "var(--color-driftwood)" }}>Al enviar se abre WhatsApp con su información lista para mandarnos.</div>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div style={{ fontSize: 13, fontWeight: 700, textTransform: "uppercase", color: "var(--color-ember-flame)" }}>Opción #2 — Envíe un mensaje directo</div>
            {[["mail", "Correo", "contacto.serviciosytodo@gmail.com", "mailto:contacto.serviciosytodo@gmail.com"], ["message-circle", "WhatsApp", "+52 686 243 4292", "https://wa.me/526862434292"], ["clock", "Horario", "Lun–Vie 9–6 · Sáb 9–2"]].map(([icon, t, d, href], i) => (
              <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                <SymbolCircle><LIcon name={icon} size={20} /></SymbolCircle>
                <div><div style={{ fontWeight: 600, fontSize: 15 }}>{t}</div>{href ? <TextLink href={href} style={{ fontSize: 14 }}>{d}</TextLink> : <div style={{ fontSize: 14, color: "var(--color-warm-stone)" }}>{d}</div>}</div>
              </div>
            ))}
            <div style={{ fontSize: 13, color: "var(--color-driftwood)" }}>Respondemos durante nuestro horario laboral.</div>
          </div>
        </div>
      </Section>
    </main>
  );
}
window.QuoteScreen = QuoteScreen;
