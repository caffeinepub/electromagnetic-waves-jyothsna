import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Star, XCircle } from "lucide-react";
import { useState } from "react";

const quizQuestions = [
  {
    id: 1,
    question: "Who predicted the existence of electromagnetic waves?",
    options: ["Einstein", "Newton", "Maxwell", "Hertz"],
    answer: 2,
  },
  {
    id: 2,
    question: "What is the speed of light in vacuum?",
    options: [
      "3\u00d710\u2076 m/s",
      "3\u00d710\u2078 m/s",
      "3\u00d710\u00b9\u2070 m/s",
      "3\u00d710\u2074 m/s",
    ],
    answer: 1,
  },
  {
    id: 3,
    question: "Which EM wave has the longest wavelength?",
    options: ["X-rays", "Gamma rays", "Radio waves", "Microwaves"],
    answer: 2,
  },
  {
    id: 4,
    question: "Infrared waves are also known as:",
    options: ["Cold waves", "Heat waves", "Light waves", "Sound waves"],
    answer: 1,
  },
  {
    id: 5,
    question: "UV radiation is mostly absorbed by:",
    options: ["Ionosphere", "Troposphere", "Ozone layer", "Stratosphere"],
    answer: 2,
  },
  {
    id: 6,
    question: "Which waves are used in LASIK eye surgery?",
    options: ["X-rays", "Microwaves", "UV rays", "Gamma rays"],
    answer: 2,
  },
  {
    id: 7,
    question: "Gamma rays are produced by:",
    options: [
      "Hot bodies",
      "X-ray tubes",
      "Radioactive decay",
      "Electron oscillations",
    ],
    answer: 2,
  },
  {
    id: 8,
    question: "The displacement current is due to:",
    options: [
      "Conduction of charges",
      "Time-varying electric field",
      "Constant magnetic field",
      "Static charges",
    ],
    answer: 1,
  },
  {
    id: 9,
    question: "Which EM wave is used in remote controls?",
    options: ["UV", "Infrared", "Microwave", "Radio"],
    answer: 1,
  },
  {
    id: 10,
    question: "What is the wavelength range of visible light?",
    options: ["700nm\u2013400nm", "1mm\u2013700nm", "400nm\u20131nm", "> 0.1m"],
    answer: 0,
  },
];

export default function AssessmentReflection() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [reflectionName, setReflectionName] = useState("");
  const [reflectionLearned, setReflectionLearned] = useState("");
  const [reflectionRating, setReflectionRating] = useState("3");
  const [reflectionQuestions, setReflectionQuestions] = useState("");
  const [reflectionSubmitted, setReflectionSubmitted] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);

  const handleAnswer = (questionId: number, optionIndex: number) => {
    if (!submitted) {
      setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
    }
  };

  const handleSubmitQuiz = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const score = quizQuestions.filter((q) => answers[q.id] === q.answer).length;

  const handleReflectionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReflectionSubmitted(true);
  };

  return (
    <div data-ocid="assessment.page" className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-4">
            Assessment &amp; Reflection
          </Badge>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Test Your Knowledge
          </h1>
          <p className="text-primary-foreground/80 text-lg">
            A 10-question quiz on Electromagnetic Waves, followed by a
            reflection form to consolidate your learning.
          </p>
        </div>
      </section>

      <div className="container mx-auto max-w-4xl px-4 py-12 space-y-12">
        {/* Score banner (after submit) */}
        {submitted && (
          <div
            data-ocid="assessment.success_state"
            className={`rounded-xl p-6 text-center ${
              score >= 8
                ? "bg-green-50 border-2 border-green-400"
                : score >= 5
                  ? "bg-amber-50 border-2 border-amber-400"
                  : "bg-red-50 border-2 border-red-400"
            }`}
          >
            <div className="text-6xl font-display font-bold mb-2">
              {score}/10
            </div>
            <p className="text-xl font-semibold">
              {score >= 8
                ? "Excellent! \ud83c\udf89"
                : score >= 5
                  ? "Good effort! Keep practicing."
                  : "Keep studying \u2014 you've got this!"}
            </p>
          </div>
        )}

        {/* Quiz */}
        <section data-ocid="assessment.section">
          <h2 className="font-display text-2xl font-bold mb-6">
            Multiple Choice Quiz
          </h2>
          <div className="space-y-6">
            {quizQuestions.map((q, qIdx) => (
              <Card
                key={q.id}
                className="shadow-card"
                data-ocid={`assessment.item.${qIdx + 1}`}
              >
                <CardContent className="pt-6">
                  <p className="font-semibold mb-4">
                    <span className="text-primary mr-2">{q.id}.</span>
                    {q.question}
                  </p>
                  <div className="space-y-2">
                    {q.options.map((option, optIdx) => {
                      const isSelected = answers[q.id] === optIdx;
                      const isCorrect = optIdx === q.answer;
                      let cls =
                        "quiz-option cursor-pointer flex items-center gap-3 p-3 rounded-lg border transition-colors ";
                      if (!submitted) {
                        cls += isSelected
                          ? "selected border-primary bg-primary/10"
                          : "border-border hover:bg-secondary";
                      } else {
                        if (isCorrect)
                          cls += "correct border-green-500 bg-green-50";
                        else if (isSelected && !isCorrect)
                          cls += "incorrect border-red-400 bg-red-50";
                        else cls += "border-border";
                      }
                      return (
                        <button
                          type="button"
                          key={option}
                          data-ocid="assessment.radio"
                          className={cls}
                          onClick={() => handleAnswer(q.id, optIdx)}
                        >
                          <span className="w-7 h-7 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span className="flex-1 text-left">{option}</span>
                          {submitted && isCorrect && (
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          )}
                          {submitted && isSelected && !isCorrect && (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!submitted && (
            <div className="mt-8 text-center">
              <Button
                data-ocid="assessment.submit_button"
                onClick={handleSubmitQuiz}
                disabled={Object.keys(answers).length < quizQuestions.length}
                className="px-10 py-3 text-base"
                size="lg"
              >
                Submit Quiz ({Object.keys(answers).length}/
                {quizQuestions.length} answered)
              </Button>
            </div>
          )}
        </section>

        {/* Reflection Form */}
        <section>
          <h2 className="font-display text-2xl font-bold mb-6">
            Reflection Form
          </h2>
          {reflectionSubmitted ? (
            <div
              data-ocid="assessment.success_state"
              className="bg-green-50 border-2 border-green-400 rounded-xl p-8 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold mb-2">
                Thank You, {reflectionName || "Student"}!
              </h3>
              <p className="text-muted-foreground">
                Your reflection has been recorded. Keep exploring and
                questioning!
              </p>
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <form onSubmit={handleReflectionSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="ref-name">Your Name</Label>
                    <Input
                      id="ref-name"
                      data-ocid="assessment.input"
                      placeholder="Enter your name"
                      value={reflectionName}
                      onChange={(e) => setReflectionName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ref-learned">
                      What did you learn today?
                    </Label>
                    <Textarea
                      id="ref-learned"
                      data-ocid="assessment.textarea"
                      placeholder="Share your key learnings from this lesson..."
                      value={reflectionLearned}
                      onChange={(e) => setReflectionLearned(e.target.value)}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Rate your understanding (1\u20135)</Label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          data-ocid="assessment.toggle"
                          onClick={() => setReflectionRating(String(star))}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="transition-colors"
                          aria-label={`Rate ${star}`}
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${
                              star <= (hoverRating || Number(reflectionRating))
                                ? "text-accent fill-current"
                                : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Selected: {reflectionRating}/5
                    </p>
                  </div>

                  <div className="space-y-3">
                    <Label>Understanding Level</Label>
                    <RadioGroup
                      value={reflectionRating}
                      onValueChange={setReflectionRating}
                      className="flex flex-wrap gap-4"
                    >
                      {["1", "2", "3", "4", "5"].map((val) => (
                        <div key={val} className="flex items-center gap-2">
                          <RadioGroupItem
                            value={val}
                            id={`rating-${val}`}
                            data-ocid="assessment.radio"
                          />
                          <Label htmlFor={`rating-${val}`}>
                            {val} \u2014{" "}
                            {
                              [
                                "Very Poor",
                                "Poor",
                                "Fair",
                                "Good",
                                "Excellent",
                              ][Number(val) - 1]
                            }
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ref-questions">
                      Any questions remaining?
                    </Label>
                    <Textarea
                      id="ref-questions"
                      data-ocid="assessment.textarea"
                      placeholder="What are you still curious about? What needs more clarification?"
                      value={reflectionQuestions}
                      onChange={(e) => setReflectionQuestions(e.target.value)}
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    data-ocid="assessment.submit_button"
                    className="w-full"
                    size="lg"
                  >
                    Submit Reflection
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </section>
      </div>
    </div>
  );
}
