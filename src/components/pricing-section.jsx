import { memo } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Sparkles as SparklesComp } from "@/components/ui/sparkles";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description:
      "Great for small businesses and startups looking to get started with AI",
    price: 299,
    yearlyPrice: 2999,
    buttonText: "Get Started",
    buttonVariant: "outline",
    includes: [
      "Basic AI Chatbot",
      "Up to 1,000 conversations/month",
      "Email support",
      "Basic analytics",
      "1 team member",
    ],
  },
  {
    name: "Business",
    description:
      "Best value for growing businesses that need more advanced features",
    price: 799,
    yearlyPrice: 7999,
    buttonText: "Get Started",
    buttonVariant: "default",
    popular: true,
    includes: [
      "Everything in Starter, plus:",
      "Advanced AI Models",
      "Up to 10,000 conversations/month",
      "Priority support",
      "Advanced analytics",
      "Up to 10 team members",
      "Custom integrations",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    description:
      "Advanced plan with enhanced security and unlimited access for large teams",
    price: 1999,
    yearlyPrice: 19999,
    buttonText: "Contact Sales",
    buttonVariant: "outline",
    includes: [
      "Everything in Business, plus:",
      "Unlimited conversations",
      "Dedicated account manager",
      "Custom AI model training",
      "Unlimited team members",
      "SLA guarantee",
      "White-label solution",
      "Advanced security",
    ],
  },
];

const PricingSwitch = memo(function PricingSwitch({ onSwitch }) {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className="flex justify-center">
      <div className="relative z-10 mx-auto flex w-fit rounded-full bg-neutral-900 border border-neutral-700 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit h-10 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "0" ? "text-white" : "text-neutral-400",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-white/20 border-white/30 bg-gradient-to-b from-neutral-200 to-neutral-400"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative text-black">Monthly</span>
        </button>

        <button
          onClick={() => handleSwitch("1")}
          className={cn(
            "relative z-10 w-fit h-10 flex-shrink-0 rounded-full sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors",
            selected === "1" ? "text-white" : "text-neutral-400",
          )}
        >
          {selected === "1" && (
            <motion.span
              layoutId="pricing-switch"
              className="absolute top-0 left-0 h-10 w-full rounded-full border-2 shadow-sm shadow-white/20 border-white/30 bg-gradient-to-b from-neutral-200 to-neutral-400"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative flex items-center gap-2">
            Yearly
            <span className="text-xs bg-white/10 text-neutral-300 px-2 py-0.5 rounded-full">Save 20%</span>
          </span>
        </button>
      </div>
    </div>
  );
});

export default memo(function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricingPeriod = (value) =>
    setIsYearly(Number.parseInt(value) === 1);

  return (
    <div className="min-h-screen mx-auto relative bg-black overflow-hidden py-20">
      {/* Background Effects */}
      <div className="absolute top-0 h-96 w-full overflow-hidden opacity-30">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:70px_80px]"></div>
        <SparklesComp
          density={800}
          direction="bottom"
          speed={0.5}
          color="#FFFFFF"
          className="absolute inset-x-0 bottom-0 h-full w-full"
        />
      </div>

      {/* Gradient Glow */}
      <div
        className="absolute top-0 left-[20%] right-[20%] w-[60%] h-[600px] z-0 blur-[120px] opacity-10"
        style={{
          background: "radial-gradient(circle at center, #FFFFFF 0%, transparent 70%)",
        }}
      />

      <article className="text-center mb-12 max-w-3xl mx-auto space-y-6 relative z-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.08}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
            }}
          >
            Choose Your Perfect Plan
          </VerticalCutReveal>
        </h2>

        <TimelineContent
          as="p"
          animationNum={0}
          className="text-neutral-400 text-base"
        >
          Transform your business with our AI-powered solutions. Select the plan that fits your needs.
        </TimelineContent>

        <TimelineContent as="div" animationNum={1}>
          <PricingSwitch onSwitch={togglePricingPeriod} />
        </TimelineContent>
      </article>

      <div className="grid md:grid-cols-3 max-w-6xl gap-6 py-6 mx-auto px-6 relative z-10">
        {plans.map((plan, index) => (
          <TimelineContent key={plan.name} as="div" animationNum={2 + index}>
            <Card
              className={cn(
                "relative text-white border-neutral-800 bg-black/40 h-full flex flex-col",
                plan.popular &&
                  "border-neutral-400/50 shadow-[0px_0px_60px_0px_rgba(255,255,255,0.1)] scale-105"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-b from-neutral-100 to-neutral-300 text-black text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg">
                  Most Popular
                </div>
              )}

              <CardHeader className="text-left">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                </div>
                <div className="flex items-baseline mb-4">
                  <span className="text-5xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  <span className="text-neutral-400 ml-2">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0 flex-1 flex flex-col">
                <button
                  className={cn(
                    "w-full mb-6 py-3 text-base font-semibold rounded-lg transition-all duration-200",
                    plan.popular
                      ? "bg-gradient-to-b from-neutral-100 to-neutral-300 hover:shadow-lg hover:shadow-white/20 text-black"
                      : "bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-white"
                  )}
                >
                  {plan.buttonText}
                </button>

                <div className="space-y-3 pt-4 border-t border-neutral-800/50 flex-1">
                  <ul className="space-y-3">
                    {plan.includes.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-neutral-300 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-300 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TimelineContent>
        ))}
      </div>
    </div>
  );
});
