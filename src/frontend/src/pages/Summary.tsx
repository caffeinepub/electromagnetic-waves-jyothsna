import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const summaryPoints = [
  {
    number: 1,
    title: "Maxwell's Displacement Current",
    content:
      "Maxwell found an inconsistency in Ampere's circuital law when applied to time-varying electric fields. He introduced the concept of displacement current to resolve this: i_d = ε₀ dΦ_E/dt",
    formula: "i_d = ε₀ · dΦ_E/dt",
    color: "border-blue-300",
    num: "bg-blue-100 text-blue-800",
  },
  {
    number: 2,
    title: "Production by Accelerating Charges",
    content:
      "Electromagnetic waves are produced by accelerating electric charges. An oscillating charge with frequency ν produces EM waves of the same frequency ν. The energy comes from the kinetic energy of the oscillating charge.",
    formula: null,
    color: "border-teal-300",
    num: "bg-teal-100 text-teal-800",
  },
  {
    number: 3,
    title: "Hertz's Experimental Verification",
    content:
      "EM waves were first produced experimentally by Heinrich Hertz in 1887, verifying Maxwell's equations. He used an oscillating electric spark to generate radio waves and detected them with a wire loop receiver.",
    formula: null,
    color: "border-purple-300",
    num: "bg-purple-100 text-purple-800",
  },
  {
    number: 4,
    title: "Transverse Wave Nature",
    content:
      "In an EM wave, the electric field E and magnetic field B oscillate sinusoidally. They are perpendicular to each other and to the direction of propagation. Both fields are always in phase with each other.",
    formula: "E ⊥ B ⊥ direction of propagation",
    color: "border-amber-300",
    num: "bg-amber-100 text-amber-800",
  },
  {
    number: 5,
    title: "Speed of EM Waves",
    content:
      "The speed of electromagnetic waves in vacuum equals the speed of light. This was one of Maxwell's most profound predictions — light itself is an electromagnetic wave.",
    formula: "c = 1/√(μ₀ε₀) = E₀/B₀ = 3×10⁸ m/s",
    color: "border-green-300",
    num: "bg-green-100 text-green-800",
  },
  {
    number: 6,
    title: "The Electromagnetic Spectrum",
    content:
      "The EM spectrum stretches over an infinite range of wavelengths — from 10⁻² Å (gamma rays) to 10⁶ m (radio waves). All types travel at the same speed c in vacuum but differ in frequency and wavelength.",
    formula: "λ·f = c (for all EM waves)",
    color: "border-red-300",
    num: "bg-red-100 text-red-800",
  },
];

export default function Summary() {
  return (
    <div data-ocid="summary.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Chapter Summary
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Key Takeaways
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Six essential points that capture the essence of Electromagnetic
            Waves — Chapter 8, Physics Class 12.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {summaryPoints.map((point) => (
            <Card
              key={point.number}
              className={`shadow-card border-l-4 ${point.color} wave-card`}
              data-ocid={`summary.item.${point.number}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <span
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-lg flex-shrink-0 ${point.num}`}
                  >
                    {point.number}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">
                      {point.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {point.content}
                    </p>
                    {point.formula && (
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-3 font-mono text-sm font-semibold text-primary text-center">
                        {point.formula}
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-10 bg-accent/10 border border-accent/30 rounded-xl p-6">
          <h3 className="font-display text-xl font-bold mb-3">Remember</h3>
          <p className="text-muted-foreground leading-relaxed">
            All electromagnetic waves — from low-frequency radio waves to
            high-frequency gamma rays — are fundamentally the same phenomenon.
            They are all transverse waves consisting of oscillating electric and
            magnetic fields, all traveling at the speed of light (c = 3×10⁸ m/s)
            in vacuum. What differs is only their frequency (and hence
            wavelength), which determines their energy and how they interact
            with matter.
          </p>
        </div>
      </div>
    </div>
  );
}
