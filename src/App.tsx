import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Home = lazy(() => import("@/pages/Home"));
const Projects = lazy(() => import("@/pages/Projects"));
const ProjectDisplay = lazy(() => import("@/pages/ProjectDisplay"));
const Experience = lazy(() => import("@/pages/Experience"));
const Research = lazy(() => import("@/pages/Research"));
const ResearchDetail = lazy(() => import("@/pages/ResearchDetail"));

const ParkPalsPrivacyPolicy = lazy(
  () => import("@/pages/ParkPalsPrivacyPolicy"),
);
const ParkPalsTermsOfService = lazy(
  () => import("@/pages/ParkPalsTermsOfService"),
);
const AlgoNinjaPrivacyPolicy = lazy(
  () => import("@/pages/AlgoNinjaPrivacyPolicy"),
);
const AlgoNinjaTermsOfService = lazy(
  () => import("@/pages/AlgoNinjaTermsOfService"),
);
const PocketPulsePrivacyPolicy = lazy(
  () => import("@/pages/PocketPulsePrivacyPolicy"),
);
const PocketPulseTermsOfService = lazy(
  () => import("@/pages/PocketPulseTermsOfService"),
);

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PageTransitions() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDisplay />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<ResearchDetail />} />
        <Route path="/privacy/parkpals" element={<ParkPalsPrivacyPolicy />} />
        <Route path="/tos/parkpals" element={<ParkPalsTermsOfService />} />
        <Route path="/privacy/algoninja" element={<AlgoNinjaPrivacyPolicy />} />
        <Route path="/tos/algoninja" element={<AlgoNinjaTermsOfService />} />
        <Route
          path="/privacy/pocketpulse"
          element={<PocketPulsePrivacyPolicy />}
        />
        <Route
          path="/tos/pocketpulse"
          element={<PocketPulseTermsOfService />}
        />
      </Routes>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<ResearchDetail />} />
          <Route path="/privacy/parkpals" element={<ParkPalsPrivacyPolicy />} />
          <Route path="/tos/parkpals" element={<ParkPalsTermsOfService />} />
          <Route
            path="/privacy/algoninja"
            element={<AlgoNinjaPrivacyPolicy />}
          />
          <Route path="/tos/algoninja" element={<AlgoNinjaTermsOfService />} />
          <Route
            path="/privacy/pocketpulse"
            element={<PocketPulsePrivacyPolicy />}
          />
          <Route
            path="/tos/pocketpulse"
            element={<PocketPulseTermsOfService />}
          />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function PageFallback() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-[60vh] items-center justify-center"
    >
      <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--color-accent)]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-dvh bg-[var(--color-bg)] text-[var(--color-fg)]">
      <Navbar />
      <ScrollToTop />
      <main>
        <Suspense fallback={<PageFallback />}>
          <PageTransitions />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
