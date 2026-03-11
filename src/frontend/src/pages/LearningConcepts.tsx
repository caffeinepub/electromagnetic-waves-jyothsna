import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const emWaves = [
  {
    type: "Radio Waves",
    wavelength: "> 0.1 m",
    production: "Rapid acceleration of electrons in aerials",
    detection: "Receiver's aerials",
    color: "bg-blue-100 border-blue-300",
    badge: "bg-blue-100 text-blue-800",
    description:
      "Used in AM/FM radio, TV broadcasting, and mobile communications.",
    applications: [
      "AM/FM Radio",
      "Television",
      "Mobile phones",
      "Satellite communication",
    ],
  },
  {
    type: "Microwaves",
    wavelength: "0.1 m – 1 mm",
    production: "Klystron or magnetron valve",
    detection: "Point contact diodes",
    color: "bg-teal-50 border-teal-300",
    badge: "bg-teal-100 text-teal-800",
    description:
      "Used in microwave ovens, radar systems, and Wi-Fi technology.",
    applications: ["Microwave ovens", "Radar", "Wi-Fi", "Bluetooth"],
  },
  {
    type: "Infrared",
    wavelength: "1 mm – 700 nm",
    production: "Vibration of atoms and molecules",
    detection: "Thermopiles, Bolometer, IR photographic film",
    color: "bg-orange-50 border-orange-300",
    badge: "bg-orange-100 text-orange-800",
    description:
      "Also called heat waves. Used in remote controls, thermal imaging, and night-vision.",
    applications: [
      "TV remotes",
      "Thermal cameras",
      "Night vision",
      "Physiotherapy",
    ],
  },
  {
    type: "Visible Light",
    wavelength: "700 nm – 400 nm",
    production:
      "Electrons in atoms emit light when moving between energy levels",
    detection: "The eye, Photocells, Photographic film",
    color: "bg-yellow-50 border-yellow-300",
    badge: "bg-yellow-100 text-yellow-800",
    description:
      "The only part of the EM spectrum visible to the human eye — VIBGYOR.",
    applications: ["Human vision", "Photography", "Optical fibers", "Lasers"],
  },
  {
    type: "Ultraviolet",
    wavelength: "400 nm – 1 nm",
    production: "Inner shell electrons in atoms moving to lower energy levels",
    detection: "Photocells, Photographic film",
    color: "bg-violet-50 border-violet-300",
    badge: "bg-violet-100 text-violet-800",
    description:
      "Used in sterilization, LASIK surgery, and security markings. Mostly absorbed by ozone layer.",
    applications: [
      "LASIK surgery",
      "Sterilization",
      "Vitamin D synthesis",
      "UV lamps",
    ],
  },
  {
    type: "X-rays",
    wavelength: "1 nm – 10⁻³ nm",
    production: "X-ray tubes or inner shell electrons",
    detection: "Photographic film, Geiger tubes, Ionisation chamber",
    color: "bg-gray-50 border-gray-300",
    badge: "bg-gray-100 text-gray-800",
    description:
      "Penetrate soft tissue but are absorbed by bones — widely used in medical diagnostics.",
    applications: [
      "Medical imaging",
      "Crystallography",
      "Airport security",
      "Cancer therapy",
    ],
  },
  {
    type: "Gamma Rays",
    wavelength: "< 10⁻³ nm",
    production: "Radioactive decay of the nucleus",
    detection: "Same as X-rays",
    color: "bg-red-50 border-red-300",
    badge: "bg-red-100 text-red-800",
    description:
      "Highest energy EM waves, produced in nuclear reactions. Used in cancer treatment.",
    applications: [
      "Cancer treatment",
      "Nuclear medicine",
      "Food irradiation",
      "Sterilization",
    ],
  },
];

export default function LearningConcepts() {
  return (
    <div data-ocid="concepts.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Learning Concepts
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            The Electromagnetic Spectrum
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            A comprehensive overview of all 7 types of electromagnetic waves —
            their properties, production, detection, and real-world
            applications.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12 space-y-12">
        {/* Table 8.1 */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-4">
            Table 8.1 — EM Wave Types
          </h2>
          <div className="rounded-xl overflow-hidden border border-border shadow-card">
            <Table>
              <TableHeader>
                <TableRow className="bg-primary/10">
                  <TableHead className="font-bold">Type</TableHead>
                  <TableHead className="font-bold">Wavelength Range</TableHead>
                  <TableHead className="font-bold">Production</TableHead>
                  <TableHead className="font-bold">Detection</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {emWaves.map((wave, idx) => (
                  <TableRow
                    key={wave.type}
                    className={
                      idx % 2 === 0 ? "bg-background" : "bg-secondary/50"
                    }
                  >
                    <TableCell className="font-semibold">{wave.type}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {wave.wavelength}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {wave.production}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {wave.detection}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Individual wave cards */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">
            Individual Wave Types
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {emWaves.map((wave) => (
              <Card
                key={wave.type}
                className={`wave-card shadow-card border ${wave.color}`}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{wave.type}</CardTitle>
                    <Badge className={`text-xs ${wave.badge}`}>
                      {wave.wavelength}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    {wave.description}
                  </p>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                      Applications
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {wave.applications.map((app) => (
                        <span
                          key={app}
                          className="text-xs bg-foreground/5 rounded-full px-2 py-0.5"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
