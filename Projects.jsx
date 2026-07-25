function ProjectsScreen({ go }) {
  const { SectionHeading, PreviewCard } = DS;
  return (
    <main>
      <Section style={{ paddingTop: 64 }}>
        <SectionHeading align="left" title="Hogares y Obras" />
      </Section>
      <Section style={{ marginTop: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
          {["fachada-1", "fachada-3", "fachada-4", "fachada-5", "fachada-6", "interior-1", "fachada-2", "fachada-8", "fachada-9", "fachada-12", "fachada-13", "fachada-14"].map((img) => (
            <PreviewCard key={img} style={{ padding: 16 }}>
              <div style={{ height: 200, background: `url('./assets/photos/${img}.png') center / cover no-repeat`, borderRadius: "var(--radius-images)" }}></div>
            </PreviewCard>
          ))}
        </div>
      </Section>
    </main>
  );
}
window.ProjectsScreen = ProjectsScreen;
