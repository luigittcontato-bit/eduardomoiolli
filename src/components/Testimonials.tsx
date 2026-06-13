const videos = [
  {
    id: "gMPGy6f_c3E",
    title: "Depoimento 1",
  },
  {
    id: "R3ykQbnSHZQ",
    title: "Depoimento 2",
  },
  {
    id: "LFaWgaDU3aU",
    title: "Depoimento 3",
  },
  {
    id: "bXjbpeeWJpo",
    title: "Depoimento 4",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-section-soft">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1]">
            O que nossos pacientes <span className="text-gradient-primary">dizem</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-muted-foreground">
            Histórias reais de quem confiou no nosso cuidado.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-5 md:gap-6">
          {videos.map((v) => (
            <div
              key={v.id}
              className="rounded-2xl border border-border bg-card p-4 shadow-card"
            >
              <div className="relative w-full overflow-hidden rounded-xl aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="absolute inset-0 h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
