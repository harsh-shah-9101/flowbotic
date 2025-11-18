import { Card, CardContent } from '@/components/ui/card'
import { Bot, Brain, Code, MessageSquare, Sparkles, Zap } from 'lucide-react'

export function Services() {
    return (
        <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
            <div className="mx-auto max-w-3xl lg:max-w-6xl px-6">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our AI Services</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Transform your business with cutting-edge AI solutions tailored to your needs
                    </p>
                </div>

                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-6">
                        {/* Custom AI Chatbot Development */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-2">
                            <CardContent className="pt-6 h-full flex flex-col">
                                <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5 mb-6">
                                    <MessageSquare className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3 flex-1 flex flex-col">
                                    <h2 className="text-2xl font-semibold">Custom AI Chatbots</h2>
                                    <p className="text-foreground flex-1">
                                        Build intelligent conversational agents that understand context, handle complex queries, and provide human-like interactions for customer support and engagement.
                                    </p>
                                    <div className="pt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>24/7 Customer Support</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Multi-language Support</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Custom Integration</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Machine Learning Solutions */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-2">
                            <CardContent className="pt-6 h-full flex flex-col">
                                <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5 mb-6">
                                    <Brain className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3 flex-1 flex flex-col">
                                    <h2 className="text-2xl font-semibold">Machine Learning Solutions</h2>
                                    <p className="text-foreground flex-1">
                                        Leverage advanced ML algorithms to predict trends, automate decisions, and extract valuable insights from your data for smarter business operations.
                                    </p>
                                    <div className="pt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Predictive Analytics</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Data Pattern Recognition</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Model Training & Deployment</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Natural Language Processing */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-2">
                            <CardContent className="pt-6 h-full flex flex-col">
                                <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5 mb-6">
                                    <Sparkles className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                </div>
                                <div className="space-y-3 flex-1 flex flex-col">
                                    <h2 className="text-2xl font-semibold">Natural Language Processing</h2>
                                    <p className="text-foreground flex-1">
                                        Transform unstructured text into actionable insights with sentiment analysis, entity recognition, and advanced language understanding capabilities.
                                    </p>
                                    <div className="pt-4 space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Sentiment Analysis</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Text Classification</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="size-1.5 rounded-full bg-primary"></div>
                                            <span>Language Translation</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* AI-Powered Automation */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="pt-6 h-full">
                                <div className="grid sm:grid-cols-2 gap-6 h-full">
                                    <div className="space-y-6">
                                        <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                            <Zap className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="text-2xl font-semibold">AI-Powered Automation</h2>
                                            <p className="text-foreground">
                                                Streamline workflows and boost productivity by automating repetitive tasks with intelligent AI systems that learn and adapt to your processes.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full max-w-[240px]">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                                            <svg className="relative w-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="100" cy="100" r="80" className="stroke-muted-foreground dark:stroke-muted" strokeWidth="1" fill="none" />
                                                <circle cx="100" cy="100" r="60" className="stroke-muted-foreground dark:stroke-muted" strokeWidth="1" fill="none" />
                                                <circle cx="100" cy="100" r="40" className="stroke-muted-foreground dark:stroke-muted" strokeWidth="1" fill="none" />
                                                <circle cx="100" cy="20" r="8" className="fill-primary" />
                                                <circle cx="180" cy="100" r="8" className="fill-primary" />
                                                <circle cx="100" cy="180" r="8" className="fill-primary" />
                                                <circle cx="20" cy="100" r="8" className="fill-primary" />
                                                <path d="M100 20 L100 100" className="stroke-primary" strokeWidth="2" />
                                                <path d="M180 100 L100 100" className="stroke-primary" strokeWidth="2" />
                                                <path d="M100 180 L100 100" className="stroke-primary" strokeWidth="2" />
                                                <path d="M20 100 L100 100" className="stroke-primary" strokeWidth="2" />
                                                <circle cx="100" cy="100" r="12" className="fill-primary" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Computer Vision */}
                        <Card className="relative col-span-full overflow-hidden lg:col-span-3">
                            <CardContent className="pt-6 h-full">
                                <div className="grid sm:grid-cols-2 gap-6 h-full">
                                    <div className="space-y-6">
                                        <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                            <Bot className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="text-2xl font-semibold">Computer Vision</h2>
                                            <p className="text-foreground">
                                                Enable machines to see and interpret visual data with object detection, facial recognition, and image analysis for innovative applications.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
                                            {[...Array(9)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="aspect-square rounded border dark:border-white/10 bg-gradient-to-br from-primary/10 to-transparent relative overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 bg-primary/5 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Custom AI Development */}
                        <Card className="relative col-span-full overflow-hidden">
                            <CardContent className="pt-6">
                                <div className="grid lg:grid-cols-3 gap-6 items-center">
                                    <div className="lg:col-span-2 space-y-6">
                                        <div className="relative flex aspect-square size-16 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                                            <Code className="m-auto size-8 text-primary" strokeWidth={1.5} />
                                        </div>
                                        <div className="space-y-3">
                                            <h2 className="text-3xl font-semibold">Custom AI Development</h2>
                                            <p className="text-foreground text-lg">
                                                Tailored AI solutions designed specifically for your unique business challenges. We develop end-to-end AI systems from concept to deployment.
                                            </p>
                                            <div className="grid sm:grid-cols-2 gap-4 pt-4">
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">Consultation & Strategy</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">Custom Model Development</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">API Integration</span>
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">Cloud Deployment</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">Ongoing Support</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-2 rounded-full bg-primary"></div>
                                                        <span className="font-medium">Performance Optimization</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div className="relative w-full max-w-[280px] aspect-square">
                                            <div className="absolute inset-0 border rounded-lg dark:border-white/10 rotate-6"></div>
                                            <div className="absolute inset-0 border rounded-lg dark:border-white/10 -rotate-6"></div>
                                            <div className="absolute inset-0 border rounded-lg dark:border-white/10 flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
                                                <div className="text-center space-y-2">
                                                    <div className="text-6xl font-bold text-primary">AI</div>
                                                    <div className="text-sm text-muted-foreground">Powered Solutions</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
                        <CardContent className="pt-12 pb-12">
                            <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Let's discuss how our AI solutions can help you achieve your goals. Get in touch for a free consultation.
                            </p>
                            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition">
                                Get Started
                            </button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
