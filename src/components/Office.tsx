import consultorio01 from "@/assets/consultorio-01.jpg.asset.json";
import consultorio03 from "@/assets/consultorio-03.jpg.asset.json";
import consultorio04 from "@/assets/consultorio-04.jpg.asset.json";
import recepcao from "@/assets/consultorio-recepcao.jpg.asset.json";

const photos = [
  {
    src: consultorio01.url,
    alt: "Sala clínica do consultório do Prof. Eduardo Moiolli na Barra da Tijuca, Rio de Janeiro, com vista panorâmica",
  },
  {
    src: recepcao.url,
    alt: "Sala de espera do consultório odontológico do Prof. Eduardo Moiolli na Av. das Américas, Barra da Tijuca",
  },
  {
    src: consultorio04.url,
    alt: "Consultório odontológico iluminado com vista para a Barra da Tijuca — Prof. Eduardo Moiolli",
  },
  {
    src: consultorio03.url,
    alt: "Paciente em atendimento de ATM e dor orofacial no consultório do Prof. Eduardo Moiolli",
  },
];

export function Office() {
  return (
    <section id="consultorio" className="py-20 sm:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            Conheça o consultório
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
            Um ambiente preparado para o seu conforto
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground">
            Consultório próprio na Av. das Américas, 3333 — Barra da Tijuca, com vista panorâmica e
            estrutura completa para atendimento particular.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-6xl mx-auto">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-sm"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                width={480}
                height={600}
                sizes="(min-width: 1024px) 300px, (min-width: 768px) 25vw, 50vw"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
