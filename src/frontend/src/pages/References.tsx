import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ExternalLink, FlaskConical, Globe } from "lucide-react";

const furtherReading = [
  "Concepts of Physics \u2014 H.C. Verma, Chapter on Electromagnetic Waves",
  "University Physics \u2014 Young & Freedman, Chapter 32",
  "Feynman Lectures on Physics, Vol. II \u2014 Chapter on Electromagnetic Radiation",
  "Khan Academy: Electromagnetic Waves module",
];

const references = [
  {
    id: 1,
    type: "Textbook",
    icon: <BookOpen className="w-5 h-5" />,
    title: "NCERT Physics Class 12, Chapter 8: Electromagnetic Waves",
    authors: "National Council of Educational Research and Training (NCERT)",
    year: "2023",
    url: "https://ncert.nic.in/",
    color: "border-blue-300 bg-blue-50/50",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    id: 2,
    type: "Research Paper",
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Electromagnetic Wave Experiments",
    authors: "Hertz, H.",
    year: "1887",
    url: null,
    color: "border-teal-300 bg-teal-50/50",
    badge: "bg-teal-100 text-teal-800",
  },
  {
    id: 3,
    type: "Research Paper",
    icon: <FlaskConical className="w-5 h-5" />,
    title: "A Dynamical Theory of the Electromagnetic Field",
    authors: "Maxwell, J.C.",
    year: "1865",
    url: null,
    color: "border-purple-300 bg-purple-50/50",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    id: 4,
    type: "Online Resource",
    icon: <Globe className="w-5 h-5" />,
    title: "Electromagnetic Spectrum \u2014 Educational Resources",
    authors: "NASA Science",
    year: "2024",
    url: "https://science.nasa.gov/ems/",
    color: "border-amber-300 bg-amber-50/50",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    id: 5,
    type: "Online Simulation",
    icon: <Globe className="w-5 h-5" />,
    title: "PhET Interactive Simulations \u2014 Wave on a String",
    authors: "University of Colorado Boulder",
    year: "2024",
    url: "https://phet.colorado.edu/en/simulations/wave-on-a-string",
    color: "border-green-300 bg-green-50/50",
    badge: "bg-green-100 text-green-800",
  },
];

export default function References() {
  return (
    <div data-ocid="references.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Bibliography
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            References &amp; Resources
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            Academic sources, textbooks, and digital resources used in preparing
            this lesson on Electromagnetic Waves.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="space-y-4">
          {references.map((ref) => (
            <Card
              key={ref.id}
              className={`shadow-card border-l-4 ${ref.color} wave-card`}
              data-ocid={`references.item.${ref.id}`}
            >
              <CardContent className="pt-5 pb-5">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {ref.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={`text-xs ${ref.badge}`}>
                        {ref.type}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {ref.year}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {ref.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {ref.authors}
                    </p>
                    {ref.url && (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-ocid="references.link"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {ref.url}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Suggested further reading */}
        <div className="mt-10 bg-secondary rounded-xl p-6">
          <h2 className="font-display text-xl font-bold mb-4">
            Suggested Further Reading
          </h2>
          <ul className="space-y-2">
            {furtherReading.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-muted-foreground"
              >
                <span className="text-primary font-bold">\u2192</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
