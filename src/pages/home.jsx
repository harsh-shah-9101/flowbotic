import { SplineScene } from "@/components/ui/splite";
import { Card, CardContent } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight-aceternity"
import Navbar from "@/components/Navbar"
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api"
import { Footer } from "@/components/Footer"
import { BentoGrid, aiServices } from "@/components/ui/bento-grid"
import PricingSection from "@/components/pricing-section"
import { Bot, Brain, Code, MessageSquare, Sparkles, Zap } from 'lucide-react'
import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
 
function Home() {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <Card className="w-full h-screen bg-black/[0.96] relative overflow-hidden border-0 shadow-none">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <div className="flex h-full w-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              AI-Powered Solutions
            </motion.h1>
            <motion.p 
              className="mt-4 text-neutral-300 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
            >
              Transform your business with cutting-edge artificial intelligence. 
              Unlock intelligent automation, data insights, and next-generation chatbot experiences 
              tailored to your needs.
            </motion.p>
          </div>

          {/* Right content */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </motion.div>
        </div>
      </Card>

      {/* Database API Section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-8 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            AI Solutions & Services
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI services. From intelligent chatbots to custom AI models, we deliver cutting-edge solutions tailored to your needs.
          </p>
        </div>

        <DatabaseWithRestApi
          className="scale-110"
          circleText="AI"
          badgeTexts={{
            first: "CHATBOT AI",
            second: "AUTOMATION",
            third: "AI MODELS",
            fourth: "ANALYTICS"
          }}
          buttonTexts={{
            first: "AI Solutions",
            second: "chatbot_api"
          }}
          title="Complete AI services ecosystem for your business"
          lightColor="#00A6F5"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {[
            { title: "Real-time Processing", desc: "Process and analyze data in real-time with our high-performance API endpoints." },
            { title: "Secure & Scalable", desc: "Enterprise-grade security with automatic scaling to handle any workload." },
            { title: "Easy Integration", desc: "Simple RESTful API design makes integration quick and straightforward." }
          ].map((item, i) => (
            <div 
              key={item.title}
              className="p-6 rounded-lg border border-neutral-800/50 bg-black/50 hover:border-[#00A6F5]/50 transition-colors duration-200"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-neutral-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 md:py-32 px-6 border-t border-neutral-900/50">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Our AI Services
            </h2>
            <p className="text-base text-neutral-500 max-w-2xl mx-auto">
              Professional AI solutions designed for modern businesses
            </p>
          </div>

          <BentoGrid items={aiServices} />

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="border-t border-neutral-900/50 pt-12">
              <h3 className="text-xl font-semibold text-white mb-2">Ready to Transform Your Business?</h3>
              <p className="text-neutral-600 text-sm mb-6 max-w-xl mx-auto">
                Let's discuss how our AI solutions can help you achieve your goals.
              </p>
              <button className="px-6 py-2.5 bg-white text-black rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Footer Section */}
      <Footer />
    </div>
  )
}

// Memoize the component to prevent unnecessary re-renders
export default memo(Home)
