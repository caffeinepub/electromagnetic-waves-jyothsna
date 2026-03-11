import { useState } from "react";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import ActivitiesStrategies from "./pages/ActivitiesStrategies";
import AssessmentReflection from "./pages/AssessmentReflection";
import LearningConcepts from "./pages/LearningConcepts";
import References from "./pages/References";
import Summary from "./pages/Summary";
import TopicOverview from "./pages/TopicOverview";

export type PageId =
  | "about"
  | "topic"
  | "concepts"
  | "activities"
  | "assessment"
  | "summary"
  | "references";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("about");

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation currentPage={currentPage} onNavigate={navigate} />
      <main className="flex-1">
        {currentPage === "about" && <AboutMe onNavigate={navigate} />}
        {currentPage === "topic" && <TopicOverview />}
        {currentPage === "concepts" && <LearningConcepts />}
        {currentPage === "activities" && <ActivitiesStrategies />}
        {currentPage === "assessment" && <AssessmentReflection />}
        {currentPage === "summary" && <Summary />}
        {currentPage === "references" && <References />}
      </main>
      <footer className="bg-primary text-primary-foreground py-6 text-center">
        <p className="text-sm opacity-80">
          © {new Date().getFullYear()} Talari Jyothsna. Built with love using{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-100"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
