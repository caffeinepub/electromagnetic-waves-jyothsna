import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BookOpen,
  Clock,
  FlaskConical,
  Lightbulb,
  Network,
  Users,
} from "lucide-react";

const strategies = [
  {
    number: 1,
    title: "Demonstration",
    icon: <FlaskConical className="w-6 h-6" />,
    duration: "20 minutes",
    grouping: "Whole class",
    description:
      "Show the EM spectrum using a prism and white light. Demonstrate how white light disperses into VIBGYOR and explain where different EM waves sit beyond visible light.",
    instructions: [
      "Set up a prism and direct a beam of white light through it.",
      "Observe and label the resulting spectrum on a screen.",
      "Discuss what lies beyond violet (UV) and beyond red (IR).",
      "Use a thermometer near the red end to detect infrared heat.",
    ],
    outcomes: [
      "Students visualize the concept of the electromagnetic spectrum",
      "Understand why visible light is only a small part of the EM spectrum",
    ],
    color: "border-blue-300 bg-blue-50/50",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    number: 2,
    title: "Think-Pair-Share",
    icon: <Users className="w-6 h-6" />,
    duration: "15 minutes",
    grouping: "Pairs",
    description:
      "Students discuss 'How do microwaves heat food?' in pairs before sharing with the class. This encourages peer learning and deeper conceptual understanding.",
    instructions: [
      "Pose the question: 'Why do microwaves heat food but not the container?'",
      "Give students 3 minutes to think individually.",
      "Pair up students for 5 minutes of discussion.",
      "Select pairs to share their reasoning with the class.",
    ],
    outcomes: [
      "Deep understanding of microwave frequency resonance with water molecules",
      "Develops communication and reasoning skills",
    ],
    color: "border-teal-300 bg-teal-50/50",
    badgeColor: "bg-teal-100 text-teal-800",
  },
  {
    number: 3,
    title: "Mind Mapping",
    icon: <Network className="w-6 h-6" />,
    duration: "25 minutes",
    grouping: "Small groups (3\u20134)",
    description:
      "Create a mind map of all EM wave types and their uses. The central node is 'Electromagnetic Spectrum' branching into each wave type with properties and applications.",
    instructions: [
      "Provide large paper and colored markers to each group.",
      "Central node: 'Electromagnetic Spectrum'.",
      "Branch into 7 wave types, each with wavelength, source, and uses.",
      "Groups present their maps to the class for gallery walk.",
    ],
    outcomes: [
      "Holistic view of the EM spectrum",
      "Visual-spatial organization of knowledge",
      "Collaborative learning skills",
    ],
    color: "border-purple-300 bg-purple-50/50",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    number: 4,
    title: "Case Study Analysis",
    icon: <Lightbulb className="w-6 h-6" />,
    duration: "30 minutes",
    grouping: "Individual / Pairs",
    description:
      "Analyze real-world applications of EM waves: TV remote controls (infrared), X-ray diagnostics in medicine, and radio communication systems.",
    instructions: [
      "Provide case sheets: TV Remote, X-ray in Hospital, Radio Tower.",
      "Students identify the wave type, wavelength range, and mechanism.",
      "They write a short analysis explaining why that specific wave type is used.",
      "Class discussion to compare findings.",
    ],
    outcomes: [
      "Connect theoretical knowledge to real-world technology",
      "Critical thinking and analytical skills",
    ],
    color: "border-amber-300 bg-amber-50/50",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    number: 5,
    title: "Jigsaw Activity",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "40 minutes",
    grouping: "Expert groups of 5\u20137",
    description:
      "Each group becomes expert on one type of EM wave and teaches others. Groups study their assigned wave type deeply then regroup to teach the full spectrum.",
    instructions: [
      "Divide class into 7 expert groups \u2014 one per wave type.",
      "Each group studies their wave: properties, production, uses (15 min).",
      "Regroup so each new group has one expert from each wave type.",
      "Each expert teaches their wave to the new group (3\u20134 min each).",
    ],
    outcomes: [
      "Mastery of individual wave types",
      "Teaching-to-learn deepens understanding",
      "Interdependence and collaboration",
    ],
    color: "border-green-300 bg-green-50/50",
    badgeColor: "bg-green-100 text-green-800",
  },
];

export default function ActivitiesStrategies() {
  return (
    <div data-ocid="activities.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Pedagogy
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Activities &amp; Teaching Strategies
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Engaging, student-centered approaches to teaching Electromagnetic
            Waves \u2014 promoting deeper understanding through active
            participation.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl px-4 py-12">
        {/* Strategy cards */}
        <div className="space-y-8">
          {strategies.map((strategy) => (
            <Card
              key={strategy.number}
              className={`shadow-card border-2 ${strategy.color}`}
              data-ocid={`activities.item.${strategy.number}`}
            >
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {strategy.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-2">
                      <Badge className={strategy.badgeColor}>
                        Strategy {strategy.number}
                      </Badge>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" /> {strategy.duration}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Users className="w-3 h-3" /> {strategy.grouping}
                      </span>
                    </div>
                    <CardTitle className="font-display text-xl">
                      {strategy.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {strategy.description}
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-bold mb-2">Instructions</h4>
                    <ol className="space-y-1">
                      {strategy.instructions.map((step) => (
                        <li
                          key={step}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="font-semibold text-primary flex-shrink-0">
                            {strategy.instructions.indexOf(step) + 1}.
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-2">
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-1">
                      {strategy.outcomes.map((outcome) => (
                        <li
                          key={outcome}
                          className="text-sm text-muted-foreground flex gap-2"
                        >
                          <span className="text-green-600 flex-shrink-0">
                            \u2713
                          </span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
