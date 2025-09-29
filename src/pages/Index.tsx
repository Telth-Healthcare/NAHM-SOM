import React, { Suspense, lazy } from "react";

// Eager load = critical components (always needed above the fold)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load = non-critical components
const About = lazy(() => import("@/components/About"));
const Objectives = lazy(() => import("@/components/Objectives"));
const Centers = lazy(() => import("@/components/Centers"));
const Impact = lazy(() => import("@/components/Impact"));
const Partners = lazy(() => import("@/components/Partners"));
const GetInvolved = lazy(() => import("@/components/GetInvolved"));
const Schema = lazy(() => import("@/components/Schema"));
const Governance = lazy(() => import("@/components/Governance"));
const CareToHome = lazy(() => import("@/components/CareToHome"));
const CareToCommunity = lazy(() => import("@/components/CareToCommunity"));

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Schema is not always visible first — lazy load */}
      <Suspense fallback={<div className="text-center py-10">Loading Schema...</div>}>
        <Schema />
      </Suspense>

      <Header />

      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Centers...</div>}>
          <Centers />
        </Suspense>

         <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Care to Home...</div>}>
          <CareToHome />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Care to Community...</div>}>
          <CareToCommunity />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Governance...</div>}>
          <Governance />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Objectives...</div>}>
          <Objectives />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Impact...</div>}>
          <Impact />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Partners...</div>}>
          <Partners />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading Get Involved...</div>}>
          <GetInvolved />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center">Loading About...</div>}>
          <About />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
