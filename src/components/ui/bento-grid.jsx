import { cn } from "@/lib/utils";
import { memo } from "react";
import {
    MessageSquare,
    Brain,
    Sparkles,
    Zap,
    Bot,
    Code,
} from "lucide-react";

export const BentoGrid = memo(function BentoGrid({ items }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-7xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={cn(
                        "group relative p-6 rounded-xl overflow-hidden transition-transform duration-200",
                        "border border-neutral-800/50 bg-black/50",
                        "hover:border-[#00A6F5]/50 hover:-translate-y-1",
                        "transform-gpu",
                        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
                        {
                            "border-[#00A6F5]/50 -translate-y-1":
                                item.hasPersistentHover,
                        }
                    )}
                >
                    <div
                        className={`absolute inset-0 ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
                    </div>

                    <div className="relative flex flex-col space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="w-10 h-10 flex items-center justify-center transition-all duration-50">
                                {item.icon}
                            </div>
                            {item.status && (
                                <span
                                    className={cn(
                                        "text-xs font-medium px-2.5 py-1 rounded-md",
                                        "bg-white/10 text-neutral-400",
                                        "transition-colors duration-200 group-hover:bg-white/20 group-hover:text-neutral-300"
                                    )}
                                >
                                    {item.status}
                                </span>
                            )}
                        </div>

                        <div className="space-y-2">
                            <h3 className="font-semibold text-white tracking-tight text-lg">
                                {item.title}
                            </h3>
                            <p className="text-sm text-neutral-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>

                        <div className="flex items-center justify-between mt-2 pt-2">
                            <div className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-600">
                                {item.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-0.5 rounded-md bg-white/5 transition-colors duration-200 hover:bg-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <span className="text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                {item.cta || "Learn more →"}
                            </span>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/5 to-transparent ${
                            item.hasPersistentHover
                                ? "opacity-100"
                                : "opacity-0 group-hover:opacity-100"
                        } transition-opacity duration-300`}
                    />
                </div>
            ))}
        </div>
    );
});

export const aiServices = [
    {
        title: "Custom AI Chatbots",
        description:
            "Intelligent conversational agents that understand context and provide human-like interactions for customer support.",
        icon: <MessageSquare className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        status: "Popular",
        tags: ["24/7 Support", "Multi-language", "Integration"],
        colSpan: 1,
    },
    {
        title: "Machine Learning Solutions",
        description:
            "Advanced ML algorithms to predict trends, automate decisions, and extract valuable insights from your data.",
        icon: <Brain className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        status: "Enterprise",
        tags: ["Predictive", "Analytics", "Automation"],
        colSpan: 1,
    },
    {
        title: "Natural Language Processing",
        description:
            "Transform unstructured text into actionable insights with sentiment analysis and advanced language understanding.",
        icon: <Sparkles className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        tags: ["Sentiment", "Classification", "Translation"],
        colSpan: 1,
    },
    {
        title: "AI-Powered Automation",
        description:
            "Streamline workflows and boost productivity by automating repetitive tasks with intelligent AI systems.",
        icon: <Zap className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        status: "New",
        tags: ["Workflow", "Efficiency", "Smart Systems"],
        colSpan: 2,
    },
    {
        title: "Computer Vision",
        description:
            "Enable machines to see and interpret visual data with object detection, facial recognition, and image analysis.",
        icon: <Bot className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        tags: ["Detection", "Recognition", "Analysis"],
        colSpan: 1,
    },
    {
        title: "Custom AI Development",
        description:
            "Tailored AI solutions designed for your unique business challenges. End-to-end development from concept to deployment.",
        icon: <Code className="w-10 h-10 text-neutral-400 group-hover:text-white transition-colors" strokeWidth={1.5} />,
        status: "Premium",
        tags: ["Custom Models", "API", "Deployment", "Support"],
        colSpan: 2,
    },
];
