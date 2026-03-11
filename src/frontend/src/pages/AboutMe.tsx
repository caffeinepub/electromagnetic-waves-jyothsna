import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Briefcase, Code, GraduationCap, Layout } from "lucide-react";
import type { PageId } from "../App";

interface AboutMeProps {
  onNavigate: (page: PageId) => void;
}

export default function AboutMe({ onNavigate }: AboutMeProps) {
  const qualifications = [
    "BSc (Computers)",
    "BEd",
    "MEd — 3rd Semester (Pursuing)",
  ];

  const expertise = [
    {
      icon: <Code className="w-5 h-5" />,
      title: "Technology Integration",
      desc: "Leveraging ICT tools, simulations, and digital resources to enrich classroom experiences.",
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Curriculum Design",
      desc: "Developing comprehensive lesson plans, learning materials, and assessment strategies.",
    },
  ];

  return (
    <div data-ocid="about.page" className="min-h-screen">
      {/* Hero */}
      <section
        data-ocid="about.section"
        className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20 px-4"
      >
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-10">
          <div className="w-40 h-40 rounded-full bg-accent/20 border-4 border-accent flex items-center justify-center flex-shrink-0">
            <span className="font-display text-5xl font-bold text-accent">
              TJ
            </span>
          </div>
          <div className="text-center md:text-left">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">
              Educator &amp; Technologist
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">
              Talari Jyothsna
            </h1>
            <p className="text-primary-foreground/80 text-lg mb-4">
              9 Years of Combined Experience in IT Industry &amp; Education
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {qualifications.map((q) => (
                <Badge
                  key={q}
                  className="bg-accent/20 text-accent border-accent/40 font-medium"
                >
                  {q}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="container mx-auto max-w-4xl px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am Talari Jyothsna, a passionate educator with a strong
              foundation in both the IT industry and academic teaching. With a
              BSc in Computers, BEd, and currently pursuing MEd (3rd Semester),
              I bring a unique interdisciplinary perspective to the classroom.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              My 9-year journey has spanned software development, educational
              technology, and classroom instruction — giving me the ability to
              bridge the gap between theoretical knowledge and practical
              application.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that every student deserves engaging, meaningful
              learning experiences. My teaching philosophy centers on making
              complex scientific concepts accessible through visual aids,
              interactive activities, and real-world connections.
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Professional Journey
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">IT Industry</h3>
                  <p className="text-sm text-muted-foreground">
                    Software development, system analysis, and technology
                    solutions — building a strong technical foundation.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    Education Sector
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Teaching Physics and Computer Science, designing curricula,
                    and mentoring students through challenging concepts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="bg-secondary py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
            Areas of Expertise
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {expertise.map((item) => (
              <Card key={item.title} className="wave-card shadow-card">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus CTA */}
      <section className="container mx-auto max-w-4xl px-4 py-12 text-center">
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8">
          <h2 className="font-display text-2xl font-bold mb-3">
            Current Focus: Electromagnetic Waves
          </h2>
          <p className="text-muted-foreground mb-6">
            This educational website is a lesson plan resource for Physics Class
            12, Chapter 8 — Electromagnetic Waves. Explore the pages to learn
            about Maxwell's discovery, the EM spectrum, and much more.
          </p>
          <button
            type="button"
            data-ocid="about.primary_button"
            onClick={() => onNavigate("topic")}
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore the Topic →
          </button>
        </div>
      </section>
    </div>
  );
}
