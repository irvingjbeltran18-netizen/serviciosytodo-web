function App() {
  const { NavBar } = DS;
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [screen, setScreen] = React.useState("home");
  React.useEffect(() => { lucide.createIcons(); window.scrollTo(0, 0); }, [screen]);
  const go = (s) => setScreen(s);
  const routes = { "#inicio": "home", "#servicios": "services", "#construccion": "construction", "#remodelacion": "remodel", "#mantenimiento": "maintenance", "#trabajo": "projects", "#mision": "about", "#contacto": "contact" };
  const hrefs = { home: "#inicio", services: "#servicios", construction: "#construccion", remodel: "#remodelacion", maintenance: "#mantenimiento", projects: "#trabajo", about: "#mision", contact: "#contacto" };
  const screens = { home: HomeScreen, services: ServicesScreen, construction: ConstructionScreen, remodel: RemodelScreen, maintenance: MaintenanceScreen, projects: ProjectsScreen, about: AboutScreen, contact: QuoteScreen };
  const Screen = screens[screen];
  return (
    <div onClick={(e) => {
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a) return;
      const h = a.getAttribute("href");
      if (routes[h]) { e.preventDefault(); go(routes[h]); }
    }}>
      <NavBar logoSrc="./assets/logo-horizontal.png" activeHref={hrefs[screen]}
        links={[{ label: "Servicios", href: "#servicios" }, { label: "Trabajo", href: "#trabajo" }, { label: "Misión", href: "#mision" }, { label: "Contacto", href: "#contacto" }]}
        ctaLabel="Empecemos" onCta={() => go("contact")}
        style={{ padding: "14px 32px" }} />
      <div>
        <Screen go={go} tweaks={t} />
        <Footer go={go} />
      </div>
      <TweaksPanel>
        <TweakSection label="Inicio" />
        <TweakRadio label="¿Por qué confiar?" value={t.whyLayout} options={["apilada", "2 columnas"]} onChange={(v) => setTweak("whyLayout", v)} />
      </TweaksPanel>
    </div>
  );
}
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "whyLayout": "apilada"
}/*EDITMODE-END*/;
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
