import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import LandingNav from "../components/landing/LandingNav";
import LandingHero from "../components/landing/LandingHero";
import CategoryShowcase from "../components/landing/CategoryShowcase";
import FeaturedModels from "../components/landing/FeaturedModels";
import IncludesGrid from "../components/landing/IncludesGrid";
import HowItWorksSteps from "../components/landing/HowItWorksSteps";
import PlansSection from "../components/landing/PlansSection";
import RequestForm from "../components/landing/RequestForm";
import TrustSection from "../components/landing/TrustSection";
import LandingClosing from "../components/landing/LandingClosing";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { RDRP_WHATSAPP_NUMBER, buildModelRequestMessage } from "../config/whatsapp";
export default function LandingPage() {
 const { hash, key, search } = useLocation();
 useEffect(() => { document.title = "RDRP Te Invito | Invitaciones digitales"; if (hash) document.getElementById(hash.slice(1))?.scrollIntoView(); else window.scrollTo(0, 0); }, [hash, key]);
 return <div className="landing-page"><LandingNav /><main id="contenido"><LandingHero /><CategoryShowcase /><FeaturedModels /><IncludesGrid /><HowItWorksSteps /><PlansSection /><RequestForm key={search} /><TrustSection /></main><LandingClosing /><FloatingWhatsApp phone={RDRP_WHATSAPP_NUMBER} message={buildModelRequestMessage()} /></div>;
}
