/* @ds-bundle: {"format":4,"namespace":"ServiciosYTodoDesignSystem_00dda5","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"TextLink","sourcePath":"components/actions/TextLink.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"FeatureGrid","sourcePath":"components/content/FeatureGrid.jsx"},{"name":"PreviewCard","sourcePath":"components/content/PreviewCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"SymbolCircle","sourcePath":"components/content/SymbolCircle.jsx"},{"name":"TrustRow","sourcePath":"components/content/TrustRow.jsx"},{"name":"GradientWash","sourcePath":"components/decor/GradientWash.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"b7859b868828","components/actions/TextLink.jsx":"d2e95040c75a","components/content/FeatureCard.jsx":"2956be65211e","components/content/FeatureGrid.jsx":"460f473af974","components/content/PreviewCard.jsx":"8a22ad8686d0","components/content/SectionHeading.jsx":"2fdb324d0eaf","components/content/SymbolCircle.jsx":"112aca7c2b99","components/content/TrustRow.jsx":"0c10d04ac750","components/decor/GradientWash.jsx":"f005d767d2c2","components/forms/Input.jsx":"0e59d1255dfa","components/navigation/NavBar.jsx":"070ab593b3ba","ui_kits/website/About.jsx":"2aefe215c414","ui_kits/website/Construction.jsx":"0646f92e58c7","ui_kits/website/Home.jsx":"1b45cb0ad7a2","ui_kits/website/Maintenance.jsx":"64d40c995cba","ui_kits/website/Projects.jsx":"b5679121ce27","ui_kits/website/Quote.jsx":"0293bd830e60","ui_kits/website/Remodel.jsx":"f168467de5dd","ui_kits/website/Services.jsx":"09a6edbab23f","ui_kits/website/app.jsx":"bb44c6002225","ui_kits/website/shared.jsx":"76d0e7951956","ui_kits/website/tweaks-panel.jsx":"d259e3a86f73"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ServiciosYTodoDesignSystem_00dda5 = window.ServiciosYTodoDesignSystem_00dda5 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
const {
  useState
} = React;
function Button({
  children,
  href,
  onClick,
  disabled,
  style
}) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      background: disabled ? "var(--color-smoke)" : hover ? "var(--accent-hover)" : "var(--color-ember-flame)",
      color: "var(--color-paper-white)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "0.015em",
      padding: "12px 24px",
      borderRadius: "var(--radius-buttons)",
      border: "none",
      boxShadow: "var(--shadow-sm)",
      cursor: disabled ? "default" : "pointer",
      textDecoration: "none",
      transition: "background var(--transition-fast)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/TextLink.jsx
try { (() => {
const {
  useState
} = React;
function TextLink({
  children,
  href = "#",
  arrow,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: "var(--color-ember-flame)",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: "0.015em",
      textDecoration: hover ? "underline" : "none",
      cursor: "pointer",
      ...style
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, " \u2192"));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon,
  title,
  children,
  linkLabel,
  linkHref,
  glow,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-cream-canvas)",
      borderRadius: "var(--radius-cards)",
      padding: "40px 32px",
      boxShadow: glow ? "var(--shadow-lg)" : "none",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-ink-black)",
      width: 48,
      height: 48
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 22,
      fontWeight: 600,
      color: "var(--color-ink-black)",
      letterSpacing: "0.015em",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--color-warm-stone)",
      lineHeight: 1.5,
      margin: 0
    }
  }, children), linkLabel && /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: linkHref,
    arrow: true
  }, linkLabel));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureGrid.jsx
try { (() => {
function FeatureGrid({
  children,
  reverse,
  gap = 40,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap,
      alignItems: "center",
      maxWidth: "var(--page-max-width)",
      margin: "0 auto",
      direction: reverse ? "rtl" : "ltr",
      ...style
    }
  }, React.Children.map(children, c => /*#__PURE__*/React.createElement("div", {
    style: {
      direction: "ltr"
    }
  }, c)));
}
Object.assign(__ds_scope, { FeatureGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// components/content/PreviewCard.jsx
try { (() => {
function PreviewCard({
  children,
  tilt = 0,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-images)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      transform: tilt ? `rotate(${tilt}deg)` : "none",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { PreviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PreviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: align,
      maxWidth: 700,
      margin: align === "center" ? "0 auto" : 0,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.015em",
      color: "var(--color-ember-flame)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-title)",
      fontWeight: 500,
      color: "var(--color-ink-black)",
      lineHeight: 1.2,
      letterSpacing: "0.015em",
      margin: 0,
      textWrap: "pretty"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      color: "var(--color-warm-stone)",
      lineHeight: 1.5,
      margin: 0
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/SymbolCircle.jsx
try { (() => {
function SymbolCircle({
  children,
  size = 48,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      background: "var(--color-paper-white)",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-ink-black)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SymbolCircle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SymbolCircle.jsx", error: String((e && e.message) || e) }); }

// components/content/TrustRow.jsx
try { (() => {
function TrustRow({
  label,
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      color: "var(--color-warm-stone)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 48,
      flexWrap: "wrap"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      color: "var(--color-ink-black)",
      opacity: 0.7,
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 16,
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, it))));
}
Object.assign(__ds_scope, { TrustRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TrustRow.jsx", error: String((e && e.message) || e) }); }

// components/decor/GradientWash.jsx
try { (() => {
function GradientWash({
  opacity = 0.4,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      pointerEvents: "none",
      opacity,
      background: "radial-gradient(60% 50% at 30% 40%, #fa5d00 0%, transparent 70%), radial-gradient(50% 45% at 70% 55%, #fee3b5 0%, transparent 70%), radial-gradient(45% 40% at 50% 75%, #ffcba4 0%, transparent 70%)",
      filter: "blur(60px)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { GradientWash });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/decor/GradientWash.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
const {
  useState
} = React;
function Input({
  placeholder,
  type = "text",
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      background: "var(--color-paper-white)",
      border: "1px solid var(--border-input)",
      borderRadius: "var(--radius-inputs)",
      padding: "14px 20px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-primary)",
      letterSpacing: "0.015em",
      outline: focus ? "var(--focus-ring)" : "none",
      outlineOffset: "var(--focus-ring-offset)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
const {
  useState
} = React;
function NavBar({
  links = [],
  activeHref,
  ctaLabel = "Pide tu cotización",
  onCta,
  signInLabel,
  onSignIn,
  logoSrc = "./assets/logo-horizontal.png",
  logoHref = "#inicio",
  onLogo,
  sticky = true,
  style
}) {
  const [open, setOpen] = useState(false);
  const linkStyle = l => ({
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: "0.015em",
    color: l.href === activeHref ? "var(--color-ember-flame)" : "var(--color-ink-black)",
    textDecoration: "none"
  });
  return /*#__PURE__*/React.createElement("nav", {
    className: "syt-nav",
    style: {
      position: sticky ? "sticky" : "static",
      top: 0,
      zIndex: 50,
      background: "var(--color-cream-canvas)",
      borderBottom: "1px solid var(--color-cream-canvas)",
      padding: "14px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap",
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: logoHref,
    onClick: onLogo,
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Servicios y Todo",
    style: {
      height: 36
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "nav-links",
    style: {
      display: "flex",
      gap: 28,
      alignItems: "center"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: linkStyle(l)
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions",
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, signInLabel && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: onSignIn,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 500,
      color: "var(--color-ink-black)",
      textDecoration: "none"
    }
  }, signInLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onCta
  }, ctaLabel)), /*#__PURE__*/React.createElement("button", {
    className: "nav-burger",
    "aria-label": open ? "Cerrar menú" : "Abrir menú",
    "aria-expanded": open,
    onClick: () => setOpen(!open),
    style: {
      display: "none",
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 8,
      color: "var(--color-ink-black)",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "5",
    x2: "19",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "19",
    y1: "5",
    x2: "5",
    y2: "19"
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  })))), open && /*#__PURE__*/React.createElement("div", {
    className: "nav-menu",
    onClick: () => setOpen(false),
    style: {
      flexBasis: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      paddingTop: 8,
      borderTop: "1px solid var(--color-mist-gray)"
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    style: {
      ...linkStyle(l),
      padding: "12px 4px",
      fontSize: 17
    }
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 4px 6px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onCta,
    style: {
      display: "block",
      width: "100%",
      textAlign: "center"
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function AboutScreen({
  go
}) {
  const {
    Button,
    SectionHeading,
    PreviewCard
  } = DS;
  const P = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 16,
      lineHeight: 1.65
    }
  }, children);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 64,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sobre nosotros",
    title: "Misi\xF3n",
    align: "left"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 20,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(P, null, "Seamos honestos, cuando piensa en contratar a alguien que construya, remodele o le d\xE9 mantenimiento a su hogar, no le dan tantas ganas."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-ink-black)"
    }
  }, "\xBFPor qu\xE9?")), /*#__PURE__*/React.createElement(P, null, "Tal vez ya ha tenido una o varias malas experiencias como:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: "var(--color-warm-stone)",
      fontSize: 16,
      lineHeight: 1.7,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Las personas llegaban tarde"), /*#__PURE__*/React.createElement("li", null, "Hicieron un trabajo p\xE9simo"), /*#__PURE__*/React.createElement("li", null, "Dejaban un desastre cada vez que se iban"), /*#__PURE__*/React.createElement("li", null, "Lo que cobraban no correspond\xEDa con la calidad de su trabajo"), /*#__PURE__*/React.createElement("li", null, "No se sent\xEDa seguro alrededor de ellos"), /*#__PURE__*/React.createElement("li", null, "Dijeron que tardar\xEDan 2 semanas pero tardaron 4"), /*#__PURE__*/React.createElement("li", null, "Varios de los trabajadores se la pasaban en el tel\xE9fono"), /*#__PURE__*/React.createElement("li", null, "Hac\xEDa preguntas sobre algo y ellos se molestaban, o se portaban muy cortantes")), /*#__PURE__*/React.createElement(P, null, "Entendemos lo molesto que son problemas como estos. Y lo triste es lo normal que son. Es como que aceptamos que no hay otra manera."), /*#__PURE__*/React.createElement(P, null, "Y es una cosa enfrentarse a estos problemas cuando vive solo o con su pareja y ya. Pero es otra cosa cuando tiene una familia."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: "var(--color-warm-stone)",
      fontSize: 16,
      lineHeight: 1.7,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Se sale de su presupuesto contratando a alguien m\xE1s para que arregle el p\xE9simo trabajo que dejaron\u2026 afectando las finanzas de su hogar (comida, escuela, ropa, y m\xE1s)"), /*#__PURE__*/React.createElement("li", null, "Tiene que dedicar mucha atenci\xF3n a que hagan bien su trabajo (y que no dejen un desorden)\u2026 as\xED que termina exhausto para la hora a la que llegan los ni\xF1os de la escuela"), /*#__PURE__*/React.createElement("li", null, "No puede llegar con su familia a descansar a su hogar porque siguen trabajando adentro\u2026 aunque hayan dicho que iban a terminar hace 1 semana")), /*#__PURE__*/React.createElement(P, null, "Y dem\xE1s."), /*#__PURE__*/React.createElement(P, null, "Hasta ahora, no hab\xEDa nadie dedicado exclusivamente a ofrecer servicios de construcci\xF3n y mantenimiento (aqu\xED los llamamos creaci\xF3n y cuidado) para familias como la suya."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-ink-black)"
    }
  }, "Decidimos ser la constructora que resolver\xEDa eso\u2026 una cuyo \xFAnico enfoque fuera crear hogares c\xF3modos, seguros y hermosos para familias \u2014 no \u201Ccasas\u201D.")), /*#__PURE__*/React.createElement(P, null, "Primero, porque nuestro negocio est\xE1 conformado por una familia como la de usted, con ni\xF1os peque\xF1os en casa, al igual que adolescentes \u2014 cada uno con necesidades diferentes."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 24,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(P, null, "Aqu\xED est\xE1 una foto del padre de familia (y el encargado de todo esto)."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-ember-flame)",
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "move-down",
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "url('./assets/photos/eduardo-machado.png') center / cover no-repeat",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: "var(--color-ink-black)"
    }
  }, "Arq. Eduardo Machado")), /*#__PURE__*/React.createElement(P, null, "Contamos con m\xE1s de 30 a\xF1os de experiencia en el sector de la construcci\xF3n y mantenimiento de hogares. As\xED que puede confiar en qu\xE9 sabemos qu\xE9 requieren usted y su familia para que puedan dormir tranquilos por la noche."))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48,
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "\xBFPor qu\xE9 confiar en nosotros?",
    subtitle: "Nos comprometemos a siempre hacer trabajos de calidad profesional, brindar atenci\xF3n al cliente fenomenal, y ser siempre honestos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      gap: 18,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 19
    }
  }, "Nuestro trabajo est\xE1 hecho hasta que usted est\xE9 completamente satisfecho."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 16
    }
  }, "Cont\xE1ctenos y le garantizamos que jam\xE1s se quejar\xE1 de la calidad de nuestro trabajo."), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Cont\xE1ctenos"))));
}
window.AboutScreen = AboutScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Construction.jsx
try { (() => {
function ConstructionScreen({
  go
}) {
  const {
    Button,
    TextLink,
    SectionHeading,
    PreviewCard,
    GradientWash
  } = DS;
  const benefits = [{
    t: "Presupuestos claros y detallados",
    p: ["Le damos presupuestos claros y detallados para los materiales que necesitamos comprar y la mano de obra que realizamos.", "Y si tiene alguna pregunta, estaremos encantados de explicárselo todo."]
  }, {
    t: "Proceso de diseño centrado en su visión",
    p: ["Queremos escuchar cuál es la visión exacta que tiene.", "Y haremos todos los cambios que usted desee hasta que todo esté listo para empezar a construir."]
  }, {
    t: "Transparencia en cada decisión y etapa",
    p: ["Le mantendremos siempre informado.", "Si hay algún retraso que esté fuera de nuestro control, se lo haremos saber de inmediato.", "Y si se necesitan hacer cambios, le informaremos de inmediato para que no haya sorpresas al final."]
  }, {
    t: "Calidad dorada de trabajo",
    p: ["Trabajamos con los mejores materiales para construir la casa más sólida y segura posible para su familia. Preferimos no usar materiales de baja calidad, a no ser que sea su preferencia indiscutible. Y si el uso de un material más costoso garantiza la seguridad de su hogar a largo plazo, le informaremos para ver si nos permite usarlo.", "Y en cuanto a la mano de obra, no daremos por terminado su nuevo hogar hasta que no quede ni un simple detalle. Nos enfocamos en los detalles grandes, al igual que los más pequeños."]
  }, {
    t: "Infraestructura segura",
    p: ["No tendrá que preocuparse por problemas estructurales en su hogar al terminar nuestro trabajo. Trabajamos con los más altos estándares para evitar esto.", "Y contratamos a varios profesionales para realizar muchas pruebas que garantizan que no habrá problema alguno con su hogar ahora ni en el futuro."]
  }, {
    t: "0 papeleo molesto",
    p: ["No tendrá que preocuparse por ningún trámite molesto antes ni durante la construcción de su hogar."]
  }, {
    t: "Ayuda en la mudanza",
    p: ["Cuando esté listo su nuevo hogar, no tiene que preocuparse sobre la mudanza — ver a quién contratar, gastar todo un día llevando cosas, y demás.", "Nosotros mismos le ayudaremos a traer todas sus pertenencias."]
  }, {
    t: "Hogar habitable al mudarse",
    p: ["Nos aseguraremos de que su hogar esté completamente habitable cuando se mude.", "Esto significa que tendrá sus muebles, decoración y servicios como agua y luz listos para usar al llegar aquí."]
  }];
  const steps = [["Diseño de su hogar", "Nos reuniremos con usted para entender sus requisitos y deseos. Crearemos un plano según lo que pida."], ["Presupuesto para comenzar la construcción", "Al terminar el diseño, le damos un presupuesto para poder comenzar. Nos enfocamos en que comprenda todos los costos involucrados."], ["Construcción de su hogar", "Comenzaremos a construir una vez que nos dé luz verde. Durante todo el proceso, lo mantenemos informado sobre cómo va su hogar y respondemos todas sus dudas."], ["Avances", "A medida que se hagan avances en construir su hogar, le informamos sobre el dinero requerido para el material y la mano de obra."], ["Entrega de su hogar perfecto", "Terminamos la construcción del nuevo hogar de su familia."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "72px 32px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(GradientWash, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 820,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 54,
      fontWeight: 400,
      lineHeight: 1.2,
      color: "var(--color-ink-black)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Construimos Un Hogar de 1 Piso Para su Familia en Menos de 6 Meses."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--color-warm-stone)",
      margin: 0,
      maxWidth: 600
    }
  }, "(Tambi\xE9n construimos de 2 pisos). Sea cual sea, su nuevo hogar superar\xE1 sus expectativas. Garantizamos 0 estr\xE9s y 0 remordimientos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    style: {
      whiteSpace: "nowrap"
    }
  }, "Construyamos el hogar de mis sue\xF1os"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 40,
      maxWidth: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement(PreviewCard, {
    style: {
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 240,
      background: "url('./assets/photos/fachada-13.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Testimonial, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Beneficios de Trabajar con Nosotros",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(BenefitsAccordion, {
    items: benefits
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Me gusta que garantizan 0 estr\xE9s y 100% calidad dorada")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: -2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/fachada-2.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })), /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: 2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/fachada-1b.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Proceso",
    title: "Proceso",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(ProcessSteps, {
    steps: steps
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Guarantee, {
    go: go,
    title: "Garant\xEDa de Tranquilidad Total",
    text: 'Estamos tan seguros que podemos crear el hogar de sus sueños que le ofrecemos nuestra "Garantía de Tranquilidad Total". Si al final de cualquier etapa del proceso no está completamente satisfecho, le encontraremos una constructora que sí lo entienda. Pero dudamos que eso ocurra. Muchos de nuestros clientes pasados han dicho que aprecian nuestra paciencia, ética y honestidad. Y en cuanto a nuestro trabajo, jamás nos han corrido por mala calidad. Solo hacemos hogares de calidad fenomenal.'
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Gifts, {
    go: go,
    giftText: "D\xEDganos qu\xE9 busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar de su construcci\xF3n. Tambi\xE9n le daremos una lasa\xF1a deliciosa cuando comencemos a trabajar juntos."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(AvailabilityCTA, {
    go: go,
    text: "Nos comprometemos a construir los mejores hogares posibles para las familias de cada uno de nuestros clientes. Pero solo podemos dedicarle todo nuestro tiempo y esfuerzo a un n\xFAmero limitado de proyectos. Por eso no tomamos muchos proyectos a la vez. Cont\xE1ctenos para agendar una consulta ahora mismo y comenzar a crear el hogar ideal para su familia."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PhotoSlider, {
    images: ["casa-san-pedro", "fachada-3", "fachada-4", "fachada-5", "fachada-14", "fachada-12"]
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(ContactSection, {
    go: go
  })));
}
window.ConstructionScreen = ConstructionScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Construction.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function HomeScreen({
  go,
  tweaks
}) {
  const {
    Button,
    TextLink,
    SectionHeading,
    FeatureCard,
    PreviewCard,
    GradientWash
  } = DS;
  const stacked = !tweaks || tweaks.whyLayout !== "2 columnas";
  const P = ({
    children
  }) => /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, children);
  const B = ({
    children
  }) => /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--color-ink-black)"
    }
  }, children);
  React.useEffect(() => {
    lucide.createIcons();
  }, [stacked]);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "72px 32px 56px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(GradientWash, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 820,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 58,
      fontWeight: 400,
      lineHeight: 1.2,
      color: "var(--color-ink-black)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Obtenga el hogar c\xF3modo y bello que su familia merece con 0 dolores de cabeza y 0 remordimientos."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--color-warm-stone)",
      margin: 0,
      maxWidth: 600
    }
  }, "Somos una constructora familiar enfocada en construir y remodelar hogares para familias. Adem\xE1s, les damos mantenimiento."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    style: {
      whiteSpace: "nowrap"
    }
  }, "Empecemos"), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      go("services");
    },
    arrow: true
  }, "Ver m\xE1s"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: -2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/fachada-8.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })), /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: 2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/casa-san-pedro.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Testimonial, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 80
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Servicios"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "hammer",
      size: 44
    }),
    title: "Construcci\xF3n de Hogares Familiares de 1 Piso en Menos de 6 Meses",
    linkLabel: "Ver m\xE1s",
    linkHref: "#construccion"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("construction"),
    style: {
      marginTop: 4
    }
  }, "Construyan mi hogar")), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "paint-roller",
      size: 44
    }),
    title: "Remodelaci\xF3n de Fachadas, Rec\xE1maras y Ba\xF1os",
    linkLabel: "Ver m\xE1s",
    linkHref: "#remodelacion"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("remodel"),
    style: {
      marginTop: 4
    }
  }, "Necesito una remodelaci\xF3n")), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "wrench",
      size: 44
    }),
    title: "Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad",
    linkLabel: "Ver m\xE1s",
    linkHref: "#mantenimiento"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("maintenance"),
    style: {
      marginTop: 4
    }
  }, "Me interesa")))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, stacked ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-title)",
      fontWeight: 600,
      color: "var(--color-ember-flame)",
      lineHeight: 1.2,
      letterSpacing: "0.015em",
      margin: 0,
      textWrap: "pretty"
    }
  }, "\xBFPor qu\xE9 confiar en nosotros y no otra constructora?"), /*#__PURE__*/React.createElement(P, null, "Nos dedicamos a construir y dar mantenimiento ", /*#__PURE__*/React.createElement(B, null, "a hogares, no a casas.")), /*#__PURE__*/React.createElement(P, null, "Esto significa que tenemos conocimientos especializados que no todo constructor de casas tiene. Por ejemplo, sabemos c\xF3mo:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      listStyle: "'\u00b7  '",
      color: "var(--color-ember-flame)",
      fontStyle: "italic",
      fontSize: 15,
      lineHeight: 1.6,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("li", null, "Construir ba\xF1os hermosos y seguros\u2026 ideales para adultos y menores"), /*#__PURE__*/React.createElement("li", null, "Crear habitaciones espaciosas y c\xF3modas para que los ni\xF1os lleguen a descansar (o jugar) despu\xE9s de un largo d\xEDa de clases"), /*#__PURE__*/React.createElement("li", null, "Dar mantenimiento sin invadir su privacidad para que pueda continuar con su rutina diaria sin molestia alguna")), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(B, null, "Ser una constructora familiar significa tener un gran ojo para todos los detalles"), " \u2014 todo para crear un hogar c\xF3modo, bello y seguro para su familia."), /*#__PURE__*/React.createElement(P, null, "El encargado de esta ", /*#__PURE__*/React.createElement(B, null, "constructora familiar es un padre de familia"), " con varios hijos."), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--color-ember-flame)",
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "move-down",
    size: 36
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "url('./assets/photos/eduardo-machado.png') center / cover no-repeat",
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 14,
      color: "var(--color-ink-black)"
    }
  }, "Arq. Eduardo Machado")), /*#__PURE__*/React.createElement(P, null, "As\xED que sabe la importancia de crear un hogar perfecto para apoyar el crecimiento de su familia."), /*#__PURE__*/React.createElement(P, null, /*#__PURE__*/React.createElement(B, null, "Lleva +30 a\xF1os construyendo, remodelando y dando mantenimiento a hogares como el suyo."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "\xBFPor qu\xE9 confiar en nosotros y no otra constructora?",
    subtitle: "Nos dedicamos a construir y dar mantenimiento a hogares, no a casas."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Esto significa que tenemos conocimientos especializados que no todo constructor de casas tiene. Por ejemplo, sabemos c\xF3mo:"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 20,
      color: "var(--color-warm-stone)",
      fontSize: 15,
      lineHeight: 1.7,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("li", null, "Construir ba\xF1os hermosos y seguros\u2026 ideales para adultos y menores"), /*#__PURE__*/React.createElement("li", null, "Crear habitaciones espaciosas y c\xF3modas para que los ni\xF1os lleguen a descansar (o jugar) despu\xE9s de un largo d\xEDa de clases"), /*#__PURE__*/React.createElement("li", null, "Dar mantenimiento sin invadir su privacidad para que pueda continuar con su rutina diaria sin molestia alguna")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "Ser una constructora familiar significa tener un gran ojo para todos los detalles \u2014 todo para crear un hogar c\xF3modo, bello y seguro para su familia."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 15,
      lineHeight: 1.6
    }
  }, "El encargado de esta constructora familiar es un padre de familia con varios hijos: Constructor Eduardo Machado. As\xED que sabe la importancia de crear un hogar perfecto para apoyar el crecimiento de su familia. Lleva +30 a\xF1os construyendo, remodelando y dando mantenimiento a hogares como el suyo.")), /*#__PURE__*/React.createElement(PreviewCard, {
    style: {
      padding: 20,
      width: 329,
      height: 187
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 184,
      width: 324,
      background: "var(--color-marigold-glow)",
      borderRadius: "var(--radius-images)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(ContactSection, {
    go: go
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Maintenance.jsx
try { (() => {
function MaintenanceScreen({
  go
}) {
  const {
    Button,
    TextLink,
    SectionHeading,
    FeatureCard,
    PreviewCard,
    GradientWash
  } = DS;
  const services = [["hammer", "Carpintería", "Desde cocinas hasta libreros, muebles prácticos y bellos."], ["wrench", "Plomería", "Desde reparaciones de fugas hasta instalaciones completas de baño."], ["plug", "Electricidad", "Hacemos instalaciones y actualizaciones eléctricas y seguras para su hogar."], ["layers", "Tablaroca", "Instalaciones profesionales de tablaroca al igual que reparaciones y acabados para un aspecto impecable y pulido a sus paredes."], ["leaf", "Jardinería", "Mantenemos su espacio exterior hermoso y bien conservado."], ["paint-roller", "Pintura", "Desde pequeñas habitaciones hasta hogares completos, creamos una apariencia fresca y renovada."]];
  const benefits = [{
    t: "Mantenimiento rápido y sin estrés",
    p: ["Haremos cada servicio lo más rápido posible para que pueda regresar a su rutina normal.", "Nos comunicaremos con usted sobre lo esencial para garantizar un servicio perfecto y sin estrés."]
  }, {
    t: "Servicios de calidad dorada",
    p: ["Estamos altamente capacitados y experimentados en todos los aspectos del mantenimiento del hogar.", "Hacemos trabajos de calidad profesional que cumplen con los más altos estándares de excelencia."]
  }, {
    t: "Respeto por su hogar",
    p: ["Tratamos su hogar con el máximo respeto, teniendo cuidado con su propiedad y pertenencias durante todo el servicio de mantenimiento."]
  }, {
    t: "Profesionalismo",
    p: ["Nuestro equipo es amable, cortés y siempre profesional.", "Puede confiar en que brindaremos una experiencia positiva y respetuosa hacia usted y su familia mientras trabajamos en su hogar."]
  }, {
    t: "Limpieza",
    p: ["Limpiamos nuestra área en cuanto terminamos.", "Dejamos su hogar en las mismas condiciones en que llegamos, para que no tenga que preocuparse por limpiar después de marcharnos."]
  }, {
    t: "Privacidad",
    p: ["Entendemos que su hogar es su espacio personal, por lo que nos enfocamos únicamente en nuestro trabajo y nunca indagamos o invadimos su privacidad.", "Podrá sentirse cómodo y tranquilo con nosotros en su hogar."]
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "72px 32px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(GradientWash, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 860,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 54,
      fontWeight: 400,
      lineHeight: 1.2,
      color: "var(--color-ink-black)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--color-warm-stone)",
      margin: 0,
      maxWidth: 620
    }
  }, "Deje el mantenimiento de su hogar en manos de expertos de confianza. Cuidaremos de \xE9l como si fuera nuestro."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    style: {
      whiteSpace: "nowrap"
    }
  }, "Quiero darle mantenimiento a mi hogar"), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true
  }, "Ver m\xE1s")))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Testimonial, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Servicios",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "8px 64px",
      maxWidth: 830,
      margin: "0 auto"
    }
  }, services.map(([icon, t, d]) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: t,
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: icon,
      size: 44
    }),
    title: t,
    style: {
      padding: "12px 0",
      gap: 10
    }
  }, d)))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Beneficios",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(BenefitsAccordion, {
    items: benefits
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Me interesa ya que ser\xE1n r\xE1pidos, limpios, y profesionales"))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Guarantee, {
    go: go,
    text: "Brindamos el nivel m\xE1s alto de servicio y calidad. Si por alguna raz\xF3n no est\xE1 completamente satisfecho con el resultado final de cualquier servicio de mantenimiento, seguiremos trabajando con usted hasta que lo est\xE9. Y si no logramos que cambie de opini\xF3n, le ayudaremos a encontrar otros profesionales. A los cuales les diremos todo lo que ya intentamos hacer. Queremos evitarle cualquier dolor de cabeza y estr\xE9s lidiando con su problema y con otros profesionales. Puede confiar en que iremos m\xE1s all\xE1 de lo normal para usted y su familia."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Gifts, {
    go: go,
    giftText: "D\xEDganos qu\xE9 busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar. Tambi\xE9n le daremos una lasa\xF1a deliciosa al comenzar a trabajar juntos."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(ContactSection, {
    go: go
  })));
}
window.MaintenanceScreen = MaintenanceScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Maintenance.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Projects.jsx
try { (() => {
function ProjectsScreen({
  go
}) {
  const {
    SectionHeading,
    PreviewCard
  } = DS;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 64
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    title: "Hogares y Obras"
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24
    }
  }, ["fachada-1", "fachada-3", "fachada-4", "fachada-5", "fachada-6", "interior-1", "fachada-2", "fachada-8", "fachada-9", "fachada-12", "fachada-13", "fachada-14"].map(img => /*#__PURE__*/React.createElement(PreviewCard, {
    key: img,
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: `url('./assets/photos/${img}.png') center / cover no-repeat`,
      borderRadius: "var(--radius-images)"
    }
  }))))));
}
window.ProjectsScreen = ProjectsScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Projects.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Quote.jsx
try { (() => {
function QuoteScreen({
  go
}) {
  const {
    Button,
    Input,
    SectionHeading,
    SymbolCircle,
    TextLink
  } = DS;
  const [sent, setSent] = React.useState(false);
  const [f, setF] = React.useState({
    nombre: "",
    tel: "",
    correo: "",
    msg: ""
  });
  const set = k => e => setF({
    ...f,
    [k]: e.target.value
  });
  const enviar = () => {
    const lineas = [`Hola, quiero agendar una consulta gratis.`, `Nombre: ${f.nombre}`, `Teléfono: ${f.tel}`, f.correo && `Correo: ${f.correo}`, f.msg && `Necesito: ${f.msg}`].filter(Boolean);
    window.open("https://wa.me/526864657305?text=" + encodeURIComponent(lineas.join("\n")), "_blank");
    setSent(true);
  };
  const label = {
    fontSize: 14,
    fontWeight: 600,
    color: "var(--color-ink-black)"
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 64,
      maxWidth: 980
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contacto",
    title: "Agende su consulta gratis",
    subtitle: "Estamos ubicados en Mexicali, Baja California, M\xE9xico. Nuestro horario es de 9-6 de lunes a viernes y 9-2 los s\xE1bados."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 1fr",
      gap: 40,
      marginTop: 44,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-cards)",
      padding: 36,
      boxShadow: "var(--shadow-lg)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "32px 0",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SymbolCircle, {
    size: 56
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "check",
    size: 26
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 600
    }
  }, "\xA1Gracias! Recibimos su solicitud."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 15
    }
  }, "Le contactamos durante nuestro horario laboral para agendar su consulta gratis con el Arq. Machado."), /*#__PURE__*/React.createElement(TextLink, {
    onClick: e => {
      e.preventDefault();
      setSent(false);
      go("home");
    },
    arrow: true
  }, "Volver al inicio")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      color: "var(--color-ember-flame)"
    }
  }, "Opci\xF3n #1 \u2014 Agendar consulta gratis"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: "var(--color-warm-stone)"
    }
  }, "Llene el formulario para agendar una consulta gratis con el Arq. Machado (sin compromiso alguno)."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Su nombre"), /*#__PURE__*/React.createElement(Input, {
    placeholder: "Nombre completo",
    value: f.nombre,
    onChange: set("nombre")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Tel\xE9fono"), /*#__PURE__*/React.createElement(Input, {
    type: "tel",
    placeholder: "686 000 0000",
    value: f.tel,
    onChange: set("tel")
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "Correo (opcional)"), /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "su@correo.com",
    value: f.correo,
    onChange: set("correo")
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: label
  }, "\xBFQu\xE9 necesita?"), /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Ej. Quiero remodelar la fachada de mi hogar\u2026",
    rows: 4,
    value: f.msg,
    onChange: set("msg"),
    style: {
      background: "var(--color-paper-white)",
      border: "1px solid var(--border-input)",
      borderRadius: "var(--radius-inputs)",
      padding: "14px 20px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      color: "var(--text-primary)",
      resize: "vertical"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: enviar
  }, "Agendar consulta gratis"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--color-driftwood)"
    }
  }, "Al enviar se abre WhatsApp con su informaci\xF3n lista para mandarnos."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      color: "var(--color-ember-flame)"
    }
  }, "Opci\xF3n #2 \u2014 Env\xEDe un mensaje directo"), [["mail", "Correo", "contacto.serviciosytodo@gmail.com", "mailto:contacto.serviciosytodo@gmail.com"], ["message-circle", "WhatsApp", "+52 686 243 4292", "https://wa.me/526862434292"], ["clock", "Horario", "Lun–Vie 9–6 · Sáb 9–2"]].map(([icon, t, d, href], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(SymbolCircle, null, /*#__PURE__*/React.createElement(LIcon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15
    }
  }, t), href ? /*#__PURE__*/React.createElement(TextLink, {
    href: href,
    style: {
      fontSize: 14
    }
  }, d) : /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--color-warm-stone)"
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--color-driftwood)"
    }
  }, "Respondemos durante nuestro horario laboral.")))));
}
window.QuoteScreen = QuoteScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Quote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Remodel.jsx
try { (() => {
function RemodelScreen({
  go
}) {
  const {
    Button,
    TextLink,
    SectionHeading,
    PreviewCard,
    GradientWash
  } = DS;
  const benefits = [{
    t: "Presupuestos claros y detallados",
    p: ["Le damos presupuestos claros y detallados para los materiales que necesitamos comprar y la mano de obra que realizamos.", "Y si tiene alguna pregunta, estaremos encantados de explicárselo todo."]
  }, {
    t: "Proceso de diseño centrado en su visión",
    p: ["Queremos escuchar cuál es la visión exacta que tiene.", "Y haremos todos los cambios que usted desee hasta que todo esté listo para empezar la remodelación."]
  }, {
    t: "Transparencia en cada decisión y etapa",
    p: ["Le mantendremos siempre informado.", "Si hay algún retraso que esté fuera de nuestro control, se lo haremos saber de inmediato.", "Y si se necesitan hacer cambios, le informaremos de inmediato para que no haya sorpresas al final."]
  }, {
    t: "Calidad dorada de trabajo",
    p: ["Trabajamos con los mejores materiales para construir la casa más sólida y segura posible para su familia. Preferimos no usar materiales de baja calidad, a no ser que sea su preferencia indiscutible. Y si el uso de un material más costoso garantiza la seguridad de su hogar a largo plazo, le informaremos para ver si nos permite usarlo.", "Y en cuanto a la mano de obra, no daremos por terminada la remodelación hasta que no quede ni un simple detalle. Nos enfocamos en los detalles grandes, al igual que los más pequeños."]
  }, {
    t: "Infraestructura segura",
    p: ["No tendrá que preocuparse por problemas estructurales en su hogar al terminar la remodelación. Trabajamos con los más altos estándares para evitar esto.", "Y contratamos a varios profesionales para realizar muchas pruebas que garantizan que no habrá problema alguno con su hogar ahora ni en el futuro."]
  }, {
    t: "0 papeleo molesto",
    p: ["No tendrá que preocuparse por ningún trámite molesto antes ni durante la remodelación de su hogar."]
  }];
  const steps = [["Consulta gratis", "Nos reuniremos con usted para entender sus requisitos y deseos. Crearemos un plano según lo que pida."], ["Propuestas de diseño", "Tomamos medidas y creamos unos planos. Después, hacemos unos bocetos que pasamos a nuestro dibujante para que cree la remodelación digital—siempre verificando que le guste la dirección del diseño."], ["Presupuesto para comenzar la construcción", "Al terminar el diseño, le damos un presupuesto para poder comenzar. Nos enfocamos en que comprenda todos los costos involucrados."], ["Remodelación de su hogar", "Comenzaremos a remodelar una vez que nos dé luz verde. Durante todo el proceso, lo mantenemos informado sobre cómo va su hogar y respondemos todas sus dudas."]];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      padding: "72px 32px 40px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(GradientWash, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 860,
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-serif)",
      fontSize: 54,
      fontWeight: 400,
      lineHeight: 1.2,
      color: "var(--color-ink-black)",
      margin: 0,
      textWrap: "pretty"
    }
  }, "Remodelaciones Descabelladamente Hermosas... Especializadas en Hogares Familiares"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: "var(--color-warm-stone)",
      margin: 0,
      maxWidth: 620
    }
  }, "Convertimos casas en los hogares m\xE1s hermosos de la cuadra en pocos meses. Con 0 estr\xE9s y 0 remordimientos."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    style: {
      whiteSpace: "nowrap"
    }
  }, "Me interesa hablar con ustedes"), /*#__PURE__*/React.createElement(TextLink, {
    arrow: true
  }, "Ver m\xE1s"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: -2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/fachada-9.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })), /*#__PURE__*/React.createElement(PreviewCard, {
    tilt: 2,
    style: {
      width: 320,
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: "url('./assets/photos/remodelacion-dr-nacho.png') center / cover no-repeat",
      borderRadius: "var(--radius-images)"
    }
  })))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Testimonial, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Beneficios de Trabajar con Nosotros",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(BenefitsAccordion, {
    items: benefits
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Me gusta que garantizan 0 estr\xE9s y 100% calidad dorada"))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Proceso",
    title: "Proceso",
    style: {
      marginBottom: 36
    }
  }), /*#__PURE__*/React.createElement(ProcessSteps, {
    steps: steps
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Guarantee, {
    go: go,
    text: 'Estamos tan seguros que podemos crear el hogar de sus sueños que le ofrecemos nuestra "Garantía de Satisfacción Absoluta". Si al final de cualquier etapa del proceso no está completamente satisfecho, le encontraremos una constructora que sí lo entienda. Pero dudamos que eso ocurra. Muchos de nuestros clientes pasados han dicho que aprecian nuestra paciencia, ética y honestidad. Y en cuanto a nuestro trabajo, jamás nos han corrido por mala calidad. Solo hacemos hogares de calidad fenomenal.'
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(Gifts, {
    go: go,
    giftText: "D\xEDganos qu\xE9 busca. Y le daremos recomendaciones personalizadas, al igual que un desglose general sobre los costos que puede esperar de su remodelaci\xF3n. Tambi\xE9n le daremos una lasa\xF1a deliciosa cuando comencemos a trabajar juntos."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(AvailabilityCTA, {
    go: go,
    text: "Nos comprometemos a hacer remodelaciones bellas y seguras para cada una de las familias de nuestros clientes. Pero solo podemos dedicarle todo nuestro tiempo y esfuerzo a un n\xFAmero limitado de proyectos. Por eso no tomamos muchos proyectos a la vez. Cont\xE1ctenos para agendar una consulta ahora mismo y comenzar a crear el hogar ideal para su familia."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(ContactSection, {
    go: go
  })));
}
window.RemodelScreen = RemodelScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Remodel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
function ServicesScreen({
  go
}) {
  const {
    Button,
    SectionHeading,
    FeatureCard
  } = DS;
  const cards = [{
    icon: "hammer",
    title: "Construcción de Hogares Familiares de 1 Piso en Menos de 6 Meses",
    body: "Su nuevo hogar superará sus expectativas. Garantizamos 0 estrés y 0 remordimientos.",
    cta: "Construyan mi hogar",
    to: "construction",
    hash: "#construccion"
  }, {
    icon: "paint-roller",
    title: "Remodelación de Fachadas, Recámaras y Baños",
    body: "Convertimos casas en los hogares más hermosos de la cuadra en pocos meses.",
    cta: "Necesito una remodelación",
    to: "remodel",
    hash: "#remodelacion"
  }, {
    icon: "wrench",
    title: "Mantenimiento para Familias Que No Quieren Dolores De Cabeza Ni Mala Calidad",
    body: "Deje el mantenimiento de su hogar en manos de expertos de confianza. Cuidaremos de él como si fuera nuestro.",
    cta: "Me interesa",
    to: "maintenance",
    hash: "#mantenimiento"
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Section, {
    style: {
      paddingTop: 64,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "Servicios",
    subtitle: "Construcci\xF3n, remodelaci\xF3n y mantenimiento \u2014 todo para el hogar de su familia."
  })), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24
    }
  }, cards.map(c => /*#__PURE__*/React.createElement(FeatureCard, {
    key: c.to,
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: c.icon,
      size: 44
    }),
    title: c.title,
    linkLabel: "Ver m\xE1s",
    linkHref: c.hash
  }, c.body, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, c.cta)))))), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 72
    }
  }, /*#__PURE__*/React.createElement(Metrics, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement(Testimonial, null)), /*#__PURE__*/React.createElement(Section, {
    style: {
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement(ContactSection, {
    go: go
  })));
}
window.ServicesScreen = ServicesScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
function App() {
  const {
    NavBar
  } = DS;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = React.useState("home");
  React.useEffect(() => {
    lucide.createIcons();
    window.scrollTo(0, 0);
  }, [screen]);
  const go = s => setScreen(s);
  const routes = {
    "#inicio": "home",
    "#servicios": "services",
    "#construccion": "construction",
    "#remodelacion": "remodel",
    "#mantenimiento": "maintenance",
    "#trabajo": "projects",
    "#mision": "about",
    "#contacto": "contact"
  };
  const hrefs = {
    home: "#inicio",
    services: "#servicios",
    construction: "#construccion",
    remodel: "#remodelacion",
    maintenance: "#mantenimiento",
    projects: "#trabajo",
    about: "#mision",
    contact: "#contacto"
  };
  const screens = {
    home: HomeScreen,
    services: ServicesScreen,
    construction: ConstructionScreen,
    remodel: RemodelScreen,
    maintenance: MaintenanceScreen,
    projects: ProjectsScreen,
    about: AboutScreen,
    contact: QuoteScreen
  };
  const Screen = screens[screen];
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const h = a.getAttribute("href");
      if (routes[h]) {
        e.preventDefault();
        go(routes[h]);
      }
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "./assets/logo-horizontal.png",
    activeHref: hrefs[screen],
    links: [{
      label: "Servicios",
      href: "#servicios"
    }, {
      label: "Trabajo",
      href: "#trabajo"
    }, {
      label: "Misión",
      href: "#mision"
    }, {
      label: "Contacto",
      href: "#contacto"
    }],
    ctaLabel: "Empecemos",
    onCta: () => go("contact"),
    style: {
      padding: "14px 32px"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Screen, {
    go: go,
    tweaks: t
  }), /*#__PURE__*/React.createElement(Footer, {
    go: go
  })), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Inicio"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "\xBFPor qu\xE9 confiar?",
    value: t.whyLayout,
    options: ["apilada", "2 columnas"],
    onChange: v => setTweak("whyLayout", v)
  })));
}
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "whyLayout": "apilada"
} /*EDITMODE-END*/;
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
const DS = window.ServiciosYTodoDesignSystem_00dda5;
const LIcon = ({
  name,
  size = 24
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": name,
  style: {
    width: size,
    height: size,
    display: "block"
  }
});
// Placeholder de foto — no se proporcionó fotografía real de proyectos
const PhotoPlaceholder = ({
  label,
  height = 220,
  tone = "var(--color-marigold-glow)"
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height,
    background: tone,
    borderRadius: "var(--radius-images)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    color: "var(--color-ironwood)"
  }
}, /*#__PURE__*/React.createElement(LIcon, {
  name: "image",
  size: 28
}), /*#__PURE__*/React.createElement("span", {
  style: {
    fontSize: 13
  }
}, label));
const Section = ({
  children,
  style
}) => /*#__PURE__*/React.createElement("section", {
  style: {
    maxWidth: "var(--page-max-width)",
    margin: "0 auto",
    padding: "0 32px",
    ...style
  }
}, children);
// Métricas de credibilidad (franja compartida)
const Metrics = ({
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "center",
    gap: 72,
    flexWrap: "wrap",
    ...style
  }
}, [["50+", "Clientes felices"], ["150+", "Proyectos completados"], ["30+", "Años Trabajando"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
  key: l,
  style: {
    textAlign: "center"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 40,
    fontWeight: 700,
    color: "var(--color-ember-flame)"
  }
}, n), /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 15,
    color: "var(--color-warm-stone)"
  }
}, l))));
// Testimonio compartido — Dr. Nacho
const Testimonial = ({
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    background: "var(--color-paper-white)",
    borderRadius: "var(--radius-cards)",
    padding: 40,
    boxShadow: "var(--shadow-lg)",
    maxWidth: 780,
    margin: "0 auto",
    display: "flex",
    gap: 24,
    alignItems: "center",
    ...style
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flexShrink: 0
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "./assets/photos/dr-nacho.png",
  alt: "Dr. Nacho",
  style: {
    width: 96,
    height: 96,
    objectFit: "cover",
    borderRadius: "var(--radius-images)",
    display: "block"
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  }
}, /*#__PURE__*/React.createElement("p", {
  style: {
    margin: 0,
    fontSize: 17,
    color: "var(--color-ink-black)",
    lineHeight: 1.5
  }
}, "\u201CRemodel\xE9 mi casa con ellos y estoy muy satisfecho. Son profesionales y brindan atenci\xF3n muy buena. Su calidad tambi\xE9n habla por s\xED sola porque mi hogar termin\xF3 mucho mejor de lo que imaginaba.\u201D"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
  style: {
    fontWeight: 600
  }
}, "Dr. Nacho"), " ", /*#__PURE__*/React.createElement("span", {
  style: {
    color: "var(--color-driftwood)",
    fontSize: 14
  }
}, "\u2014 Propietario de hogar remodelado"))));
// Componente interactivo de beneficios (acordeón)
function BenefitsAccordion({
  items
}) {
  const [open, setOpen] = React.useState(0);
  React.useEffect(() => {
    lucide.createIcons();
  }, [open]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10,
      maxWidth: 780,
      margin: "0 auto"
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: it.t,
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-cards)",
      boxShadow: i === open ? "var(--shadow-lg)" : "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(i),
    style: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12,
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "18px 24px",
      fontFamily: "var(--font-sans)",
      fontSize: 17,
      fontWeight: 600,
      color: i === open ? "var(--color-ember-flame)" : "var(--color-ink-black)",
      textAlign: "left"
    }
  }, it.t, /*#__PURE__*/React.createElement(LIcon, {
    name: i === open ? "minus" : "plus",
    size: 18
  })), i === open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 24px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, it.p.map((par, j) => /*#__PURE__*/React.createElement("p", {
    key: j,
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--color-warm-stone)",
      lineHeight: 1.55
    }
  }, par))))));
}
// Proceso — pasos numerados
const ProcessSteps = ({
  steps
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    maxWidth: 780,
    margin: "0 auto"
  }
}, steps.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
  key: t,
  style: {
    display: "flex",
    gap: 20,
    alignItems: "flex-start"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    flexShrink: 0,
    width: 44,
    height: 44,
    borderRadius: "50%",
    background: "var(--color-ember-flame)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
    fontSize: 17
  }
}, i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
  style: {
    fontWeight: 600,
    fontSize: 18
  }
}, t), /*#__PURE__*/React.createElement("p", {
  style: {
    margin: "4px 0 0",
    color: "var(--color-warm-stone)",
    fontSize: 15,
    lineHeight: 1.55
  }
}, d)))));
// Garantía de Satisfacción Absoluta
// Slider de fotos — 2 a la vez en escritorio, 1 a la vez (más grande) en móvil
function PhotoSlider({
  images = [],
  height = 150
}) {
  const {
    PreviewCard
  } = DS;
  const [i, setI] = React.useState(0);
  const [mobile, setMobile] = React.useState(() => window.matchMedia("(max-width: 820px)").matches);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 820px)");
    const fn = e => {
      setMobile(e.matches);
      setI(0);
    };
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);
  const per = mobile ? 1 : 2;
  const imgs = images.slice(0, 6);
  React.useEffect(() => {
    lucide.createIcons();
  }, [i, mobile]);
  const btn = (dir, disabled) => /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(i + dir * per),
    disabled: disabled,
    "aria-label": dir < 0 ? "Anterior" : "Siguiente",
    style: {
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "none",
      background: "var(--color-paper-white)",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "default" : "pointer",
      color: disabled ? "var(--color-smoke)" : "var(--color-ink-black)",
      flexShrink: 0,
      opacity: disabled ? 0.5 : 1
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: dir < 0 ? "chevron-left" : "chevron-right",
    size: 18
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: mobile ? 10 : 20
    }
  }, btn(-1, i === 0), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      flex: mobile ? 1 : "initial",
      minWidth: 0
    }
  }, imgs.slice(i, i + per).map((img, k) => /*#__PURE__*/React.createElement(PreviewCard, {
    key: img,
    tilt: mobile ? 0 : k === 0 ? -2 : 2,
    style: {
      width: mobile ? "100%" : 320,
      padding: mobile ? 14 : 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: mobile ? 240 : height,
      background: `url('./assets/photos/${img}.png') center / cover no-repeat`,
      borderRadius: "var(--radius-images)"
    }
  })))), btn(1, i + per >= imgs.length));
}
const Guarantee = ({
  text,
  go,
  title = "Garantía de Satisfacción Absoluta"
}) => {
  const {
    SectionHeading,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-cards)",
      padding: "44px 40px",
      boxShadow: "var(--shadow-lg)",
      maxWidth: 860,
      margin: "0 auto",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: title
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--color-warm-stone)",
      fontSize: 16,
      lineHeight: 1.6,
      maxWidth: 700
    }
  }, text), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Quiero trabajar con su constructora familiar"));
};
// Regalos y beneficios adicionales
const Gifts = ({
  giftText,
  go
}) => {
  const {
    SectionHeading,
    FeatureCard,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Regalos",
    title: "Lo Que Le Regalamos al Trabajar Juntos"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24,
      maxWidth: 900,
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "gift",
      size: 44
    }),
    title: "Consulta personalizada, cotizaci\xF3n gratuita, y una lasa\xF1a deliciosa"
  }, giftText), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "badge-percent",
      size: 44
    }),
    title: "Descuentos especiales"
  }, "Descuentos especiales en proyectos futuros."), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: /*#__PURE__*/React.createElement(LIcon, {
      name: "key-round",
      size: 44
    }),
    title: "Membres\xEDa gratis"
  }, "Obtenga una membres\xEDa gratis para ahorrar en el mantenimiento de su hogar.")));
};
// Llamado a la acción por disponibilidad
const AvailabilityCTA = ({
  text,
  go
}) => {
  const {
    SectionHeading,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\xBFQu\xE9 espera?",
    subtitle: text
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact")
  }, "Agendar una consulta"));
};
// Sección de contacto compartida
const ContactSection = ({
  go,
  compact
}) => {
  const {
    SectionHeading,
    TextLink,
    Button
  } = DS;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contacto",
    title: "Hablemos de su hogar",
    subtitle: "Estamos ubicados en Mexicali, Baja California, M\xE9xico. Nuestro horario es de 9-6 de lunes a viernes y 9-2 los s\xE1bados."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24,
      maxWidth: 860,
      margin: "0 auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-cards)",
      padding: 32,
      boxShadow: "var(--shadow-lg)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      color: "var(--color-ember-flame)"
    }
  }, "Opci\xF3n #1"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 19
    }
  }, "Agendar consulta gratis"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--color-warm-stone)",
      lineHeight: 1.55
    }
  }, "Llene el formulario para agendar una consulta gratis con el Arq. Machado (sin compromiso alguno)."), !compact && /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("contact"),
    style: {
      alignSelf: "flex-start"
    }
  }, "Llenar formulario")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-paper-white)",
      borderRadius: "var(--radius-cards)",
      padding: 32,
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      color: "var(--color-ember-flame)"
    }
  }, "Opci\xF3n #2"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 19
    }
  }, "Env\xEDe un mensaje directo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: "var(--color-warm-stone)",
      lineHeight: 1.55
    }
  }, "Haga clic en el correo o el # de WhatsApp para que conteste cualquiera de sus dudas."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    href: "mailto:contacto.serviciosytodo@gmail.com"
  }, "contacto.serviciosytodo@gmail.com"), /*#__PURE__*/React.createElement(TextLink, {
    href: "https://wa.me/526862434292"
  }, "WhatsApp: +52 686 243 4292")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--color-driftwood)"
    }
  }, "Respondemos durante nuestro horario laboral."))));
};
// Últimas publicaciones
const Posts = () => {
  const {
    SectionHeading,
    TextLink,
    PreviewCard
  } = DS;
  const arts = ["Servicios de mantenimiento en Mexicali: ¿Todo en 1 o especializados?", "Por qué el servicio de plomería en Mexicali más barato puede ser el más caro", "Construcción de una casa vs un hogar en Mexicali: ¿Cuál es la mejor opción para su familia?"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: "\xDAltimas Publicaciones"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 24
    }
  }, arts.map((t, i) => /*#__PURE__*/React.createElement(PreviewCard, {
    key: i,
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(PhotoPlaceholder, {
    label: "Imagen destacada",
    height: 130,
    tone: i % 2 ? "var(--color-parchment-shadow)" : "var(--color-marigold-glow)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      marginTop: 12,
      lineHeight: 1.4
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(TextLink, {
    arrow: true
  }, "Ver m\xE1s")));
};
// Pie de página compartido
const Footer = ({
  go
}) => /*#__PURE__*/React.createElement("footer", {
  style: {
    borderTop: "1px solid var(--color-mist-gray)",
    marginTop: 72,
    padding: "44px 32px 36px",
    maxWidth: "var(--page-max-width)",
    marginLeft: "auto",
    marginRight: "auto"
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    justifyContent: "space-between",
    gap: 32,
    flexWrap: "wrap"
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "#inicio",
  style: {
    display: "inline-flex"
  }
}, /*#__PURE__*/React.createElement("img", {
  src: "./assets/logo-horizontal.png",
  alt: "Servicios y Todo",
  style: {
    height: 42,
    width: 188
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    display: "flex",
    gap: 56,
    flexWrap: "wrap"
  }
}, [["Servicios", [["Construcción", "#construccion"], ["Remodelación", "#remodelacion"], ["Mantenimiento para Hogares", "#mantenimiento"]]], ["Diferenciadores", [["Sobre", "#mision"], ["Hogares y Obras", "#trabajo"]]]].map(([h, links]) => /*#__PURE__*/React.createElement("div", {
  key: h,
  style: {
    display: "flex",
    flexDirection: "column",
    gap: 8
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
    color: "var(--color-warm-stone)"
  }
}, h), links.map(([l, href]) => /*#__PURE__*/React.createElement("a", {
  key: l,
  href: href,
  style: {
    fontSize: 14,
    color: "var(--color-ink-black)",
    textDecoration: "none"
  }
}, l)))))), /*#__PURE__*/React.createElement("div", {
  style: {
    marginTop: 32,
    display: "flex",
    justifyContent: "space-between",
    gap: 16,
    flexWrap: "wrap",
    fontSize: 13,
    color: "var(--color-driftwood)"
  }
}, /*#__PURE__*/React.createElement("span", null, "\xA9 Servicios y Todo de Todo para su Construcci\xF3n. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
  style: {
    display: "flex",
    gap: 16
  }
}, /*#__PURE__*/React.createElement("a", {
  href: "https://www.instagram.com/serviciosytodo/",
  target: "_blank",
  style: {
    color: "var(--color-driftwood)"
  }
}, "Instagram"), /*#__PURE__*/React.createElement("a", {
  href: "https://www.facebook.com/tododetodoparasuconstruccion",
  target: "_blank",
  style: {
    color: "var(--color-driftwood)"
  }
}, "Facebook"))));
Object.assign(window, {
  DS,
  LIcon,
  PhotoPlaceholder,
  Section,
  Metrics,
  Testimonial,
  BenefitsAccordion,
  ProcessSteps,
  PhotoSlider,
  Guarantee,
  Gifts,
  AvailabilityCTA,
  ContactSection,
  Posts,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.FeatureGrid = __ds_scope.FeatureGrid;

__ds_ns.PreviewCard = __ds_scope.PreviewCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SymbolCircle = __ds_scope.SymbolCircle;

__ds_ns.TrustRow = __ds_scope.TrustRow;

__ds_ns.GradientWash = __ds_scope.GradientWash;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

})();
