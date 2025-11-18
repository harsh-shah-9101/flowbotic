import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import Navbar from "@/components/Navbar";

export default function DatabasePage() {
  return (
    <div className="min-h-screen w-full bg-black">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 py-20">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Solutions & Services
          </h1>
          <p className="text-neutral-300 max-w-2xl mx-auto">
            Transform your business with our comprehensive AI services. From intelligent chatbots to custom AI models, we deliver cutting-edge solutions tailored to your needs.
          </p>
        </div>

        <DatabaseWithRestApi
          className="scale-110"
          circleText="AI"
          badgeTexts={{
            first: "AI CHATBOT DEVELOPMENT",
            second: "PROCESS AUTOMATION",
            third: "CUSTOM AI MODELS",
            fourth: "DATA ANALYTICS"
          }}
          buttonTexts={{
            first: "AI Solutions",
            second: "chatbot_api"
          }}
          title="AI-powered REST API for seamless data flow"
          lightColor="#00A6F5"
        />

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          <div className="p-6 rounded-lg border border-neutral-800/50 bg-black/40 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Processing</h3>
            <p className="text-neutral-400 text-sm">
              Process and analyze data in real-time with our high-performance API endpoints.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-neutral-800/50 bg-black/40 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">Secure & Scalable</h3>
            <p className="text-neutral-400 text-sm">
              Enterprise-grade security with automatic scaling to handle any workload.
            </p>
          </div>
          <div className="p-6 rounded-lg border border-neutral-800/50 bg-black/40 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
            <p className="text-neutral-400 text-sm">
              Simple RESTful API design makes integration quick and straightforward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
