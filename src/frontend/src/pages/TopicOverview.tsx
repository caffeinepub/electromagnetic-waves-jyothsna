import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const productionPoints = [
  "Accelerating electric charges radiate electromagnetic energy.",
  "An oscillating charge with frequency \u03bd produces EM waves of the same frequency \u03bd.",
  "The changing electric field generates a changing magnetic field, which in turn generates a changing electric field \u2014 creating a self-sustaining wave.",
];

const hertzPoints = [
  {
    title: "Source",
    desc: "Oscillating electric spark discharge between metallic spheres",
  },
  {
    title: "Detection",
    desc: "A wire loop receiver placed some distance away detected the waves",
  },
  {
    title: "Result",
    desc: "Confirmed EM waves travel at c = 3\u00d710\u2078 m/s, matching Maxwell's prediction",
  },
];

export default function TopicOverview() {
  return (
    <div data-ocid="topic.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Chapter 8 \u00b7 Physics Class 12
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Electromagnetic Waves
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Exploring the nature, production, and properties of electromagnetic
            waves \u2014 from Maxwell's revolutionary prediction to Hertz's
            experimental verification.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-10">
        {/* What are EM Waves */}
        <section data-ocid="topic.section">
          <h2 className="font-display text-2xl font-bold mb-4">
            What are Electromagnetic Waves?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Electromagnetic waves are waves produced by the combined oscillation
            of electric and magnetic fields that are perpendicular to each other
            and to the direction of propagation. Unlike mechanical waves, they
            do not require a medium and can travel through vacuum at the speed
            of light.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            They carry energy and momentum from one place to another, and are
            fundamental to technologies like radio communication, medical
            imaging, and wireless internet.
          </p>
        </section>

        {/* Maxwell's Contribution */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">
            Maxwell's Contribution
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">
                  Inconsistency in Ampere's Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  James Clerk Maxwell (1831\u20131879) discovered that Ampere's
                  circuital law was inconsistent for time-varying electric
                  fields. He introduced the concept of{" "}
                  <strong>displacement current</strong> to resolve this
                  inconsistency.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">
                  Displacement Current Formula
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="font-mono text-lg font-bold text-center py-4 text-primary">
                  i<sub>d</sub> = \u03b5\u2080 \u00b7 d\u03a6<sub>E</sub>/dt
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Where \u03b5\u2080 is the permittivity of free space and
                  \u03a6<sub>E</sub> is the electric flux.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Production */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">
            How are EM Waves Produced?
          </h2>
          <div className="bg-secondary rounded-xl p-6">
            <ul className="space-y-3">
              {productionPoints.map((point, i) => (
                <li key={point} className="flex gap-3">
                  <span className="w-7 h-7 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Hertz's Experiment */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">
            Hertz's Experiment (1887)
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Heinrich Hertz experimentally verified Maxwell's prediction in 1887.
            He used an oscillating electric spark between two metallic spheres
            to produce radio waves and detected them with a receiver loop some
            distance away \u2014 confirming that EM waves travel at the speed of
            light.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {hertzPoints.map((item) => (
              <div
                key={item.title}
                className="bg-accent/10 border border-accent/20 rounded-xl p-4"
              >
                <h3 className="font-semibold text-accent-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Properties */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">
            Properties of EM Waves
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">
                  Electric &amp; Magnetic Fields
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>\u2022 E and B fields oscillate sinusoidally</li>
                  <li>\u2022 E \u22a5 B (perpendicular to each other)</li>
                  <li>\u2022 Both perpendicular to direction of propagation</li>
                  <li>\u2022 E and B are always in phase</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-card bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">Speed &amp; Relationships</h3>
                <div className="space-y-3">
                  <div className="font-mono text-center py-2 text-primary font-bold">
                    c = 1/\u221a(\u03bc\u2080\u03b5\u2080)
                  </div>
                  <div className="font-mono text-center py-2 text-primary font-bold">
                    E\u2080/B\u2080 = c = 3\u00d710\u2078 m/s
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    \u03bc\u2080 = 4\u03c0\u00d710\u207b\u2077 T\u00b7m/A,
                    \u03b5\u2080 = 8.85\u00d710\u207b\u00b9\u00b2
                    C\u00b2/N\u00b7m\u00b2
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
