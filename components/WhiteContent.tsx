"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Check,
  ChevronRight,
  Menu,
  X,
  Moon,
  Sun,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Users,
  BarChart,
  Layers,
  PlayCircle,
  Trophy,
  Target,
  Rocket,
  TrendingUp,
  DollarSign,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function WhiteContent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const features = [
    {
      title: "Peak Health & Fitness",
      description: "Optimize your physical health with expert nutrition, training, and recovery protocols.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Productivity Mastery",
      description: "Learn systems and habits used by top performers to maximize output and focus.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Elite Community",
      description: "Network with ambitious high-performers and build lasting partnerships.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Wealth Building",
      description: "Master financial strategies, investments, and wealth creation principles.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Mental Performance",
      description: "Develop unshakeable mindset, resilience, and emotional intelligence.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Expert Coaching",
      description: "Direct access to coaches and specialists across all life domains.",
      icon: <Star className="size-5" />,
    },
  ]

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header
        className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <div className="size-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
              👑
            </div>
            <span>ROYAL PASS</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              What You'll Learn
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
              Join Now
              <ChevronRight className="ml-1 size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-4 md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
          >
            <div className="container py-4 flex flex-col gap-4">
              <Link href="#features" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                What You'll Learn
              </Link>
              <Link href="#testimonials" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#pricing" className="py-2 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <div className="flex flex-col gap-2 pt-2 border-t">
                <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
                  Join Now
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 overflow-hidden">
          <div className="container px-4 md:px-6 relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="inline-block bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                👑 Over 5,000 members have already transformed their lives
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Elevate Every Area of Your Life
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Join the elite high-performance community where ambitious individuals master health, productivity, wealth, and personal growth.
                ROYAL PASS is your gateway to excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-600/30">
                  Secure My Membership
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-2">
                  Explore Benefits
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-green-600" />
                  <span>Lifetime access</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-green-600" />
                  <span>Certificate of completion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="size-5 text-green-600" />
                  <span>30-day guarantee</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mx-auto max-w-5xl"
            >

              <div className="absolute -bottom-6 -right-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-red-600/30 to-orange-600/30 blur-3xl opacity-70"></div>
              <div className="absolute -top-6 -left-6 -z-10 h-[300px] w-[300px] rounded-full bg-gradient-to-br from-orange-600/30 to-red-600/30 blur-3xl opacity-70"></div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { number: "5,000+", label: "Elite Members" },
                { number: "95%", label: "Success Rate" },
                { number: "7", label: "Life Areas Covered" },
                { number: "4.9/5", label: "Member Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</p>
                  <p className="text-sm md:text-base text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What You'll Master</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-lg">
                A comprehensive high-performance program covering every area of life - from peak health to maximum productivity and beyond.
              </p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature, i) => (
                <motion.div key={i} variants={item}>
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Program Content Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Program Pillars</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                7 fundamental pillars for total life transformation
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  module: "Pillar 1",
                  title: "Health & Fitness Excellence",
                  lessons: "Weekly coaching calls",
                  icon: <Rocket className="size-6" />,
                  topics: ["Nutrition optimization", "Training protocols", "Sleep mastery", "Longevity strategies"]
                },
                {
                  module: "Pillar 2",
                  title: "Peak Productivity Systems",
                  lessons: "Daily challenges",
                  icon: <Target className="size-6" />,
                  topics: ["Time management", "Focus techniques", "Energy optimization", "Goal achievement"]
                },
                {
                  module: "Pillar 3",
                  title: "Wealth & Financial Mastery",
                  lessons: "Expert workshops",
                  icon: <DollarSign className="size-6" />,
                  topics: ["Investment strategies", "Business growth", "Passive income", "Financial freedom"]
                },
                {
                  module: "Pillar 4",
                  title: "Mental Performance & Mindset",
                  lessons: "Mindset sessions",
                  icon: <TrendingUp className="size-6" />,
                  topics: ["Resilience building", "Confidence mastery", "Stress management", "Peak state control"]
                },
                {
                  module: "Pillar 5",
                  title: "Relationship & Social Mastery",
                  lessons: "Group sessions",
                  icon: <Users className="size-6" />,
                  topics: ["Communication skills", "Leadership development", "Networking mastery", "Influence tactics"]
                },
                {
                  module: "Pillar 6",
                  title: "Career & Professional Growth",
                  lessons: "Career coaching",
                  icon: <Trophy className="size-6" />,
                  topics: ["Career strategy", "Personal branding", "Skill development", "Industry mastery"]
                },
                {
                  module: "Pillar 7",
                  title: "Purpose & Life Design",
                  lessons: "Vision workshops",
                  icon: <Zap className="size-6" />,
                  topics: ["Life purpose", "Vision clarity", "Legacy building", "Fulfillment strategies"]
                },
              ].map((module, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="overflow-hidden border-border/40 bg-background hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-purple-600/10 flex items-center justify-center text-purple-600 shrink-0">
                          {module.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-purple-600">{module.module}</span>
                            <span className="text-xs text-muted-foreground">{module.lessons}</span>
                          </div>
                          <h3 className="text-lg font-bold mb-3">{module.title}</h3>
                          <div className="flex flex-wrap gap-2">
                            {module.topics.map((topic, j) => (
                              <span key={j} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                {topic}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600/10 text-purple-600 font-semibold">
                <Trophy className="size-5" />
                <span>All 7 Pillars • Lifetime Membership</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Success Stories From Our Members</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Real transformations from high-performers who elevated every area of their lives
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  channel: "Tech Entrepreneur",
                  result: "Lost 30lbs, 2x income, launched startup",
                  quote: "ROYAL PASS transformed everything. I optimized my health, doubled my income, and finally launched my dream business. The accountability and community are unmatched.",
                  avatar: "SJ"
                },
                {
                  name: "Michael Chen",
                  channel: "Investment Banker",
                  result: "Peak performance across all areas",
                  quote: "As a high-achiever, I thought I had it figured out. ROYAL PASS showed me how much more was possible. My energy, focus, and results skyrocketed.",
                  avatar: "MC"
                },
                {
                  name: "Emma Rodriguez",
                  channel: "Marketing Executive",
                  result: "Promoted to VP in 6 months",
                  quote: "The productivity and career pillars gave me the edge I needed. I went from manager to VP in 6 months while maintaining work-life balance.",
                  avatar: "ER"
                },
                {
                  name: "David Kim",
                  channel: "Fitness Coach",
                  result: "Built 6-figure online business",
                  quote: "The wealth-building strategies combined with health optimization helped me scale my coaching business to 6 figures while staying in peak shape.",
                  avatar: "DK"
                },
                {
                  name: "Lisa Anderson",
                  channel: "Digital Nomad",
                  result: "Location-free lifestyle achieved",
                  quote: "ROYAL PASS gave me the systems to build a location-independent business. Now I travel the world while maintaining peak performance and growing my wealth.",
                  avatar: "LA"
                },
                {
                  name: "James Wilson",
                  channel: "Tech Founder",
                  result: "Raised $2M seed round",
                  quote: "The network alone is worth 10x the membership. I met my co-founder and key investors through ROYAL PASS. Game-changing community.",
                  avatar: "JW"
                },
              ].map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Card className="h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 hover:shadow-md transition-all">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="size-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.channel}</p>
                        </div>
                      </div>
                      <div className="mb-4 px-3 py-2 rounded-lg bg-green-600/10 text-green-700 dark:text-green-400 text-sm font-semibold">
                        ✓ {testimonial.result}
                      </div>
                      <div className="flex mb-3">
                        {Array(5).fill(0).map((_, j) => (
                          <Star key={j} className="size-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm leading-relaxed flex-grow">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-muted/50 to-background">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-purple-600 text-white font-semibold mb-4">
                👑 EXCLUSIVE MEMBER BENEFITS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">$15,000+ in Premium Resources</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                When you join ROYAL PASS today, you'll get instant access to these exclusive benefits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Weekly Expert Coaching Calls",
                  value: "$5,997",
                  description: "Live coaching from industry experts across health, wealth, productivity, and mindset",
                  icon: <Zap className="size-6" />
                },
                {
                  title: "Premium Resource Vault",
                  value: "$2,997",
                  description: "500+ templates, worksheets, protocols, and tools for all life areas",
                  icon: <PlayCircle className="size-6" />
                },
                {
                  title: "Elite Mastermind Network",
                  value: "$3,997",
                  description: "Connect with 5,000+ high-performers, entrepreneurs, and industry leaders",
                  icon: <Users className="size-6" />
                },
                {
                  title: "24/7 Accountability System",
                  value: "$997",
                  description: "Daily check-ins, progress tracking, and peer accountability partnerships",
                  icon: <Shield className="size-6" />
                },
                {
                  title: "Monthly Guest Expert Sessions",
                  value: "$1,497",
                  description: "Learn from world-class performers, CEOs, athletes, and thought leaders",
                  icon: <Star className="size-6" />
                },
                {
                  title: "Personalized Growth Roadmap",
                  value: "$497",
                  description: "Custom 90-day plan tailored to your goals across all 7 life pillars",
                  icon: <TrendingUp className="size-6" />
                },
              ].map((bonus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-2 border-purple-600/20 bg-background hover:border-purple-600/40 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-purple-600/10 flex items-center justify-center text-purple-600 shrink-0">
                          {bonus.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{bonus.title}</h3>
                            <span className="text-sm font-bold text-purple-600">{bonus.value}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-center mt-12"
            >
              <p className="text-2xl font-bold mb-2">Total Value: <span className="text-purple-600">$15,982</span></p>
              <p className="text-muted-foreground">All included with your ROYAL PASS membership</p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center justify-center space-y-6 text-center"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Ready To Join The Elite?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join over 5,000 high-performers who have elevated every area of their lives through ROYAL PASS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg shadow-lg">
                  Claim Your Membership
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-6 max-w-md">
                <p className="text-2xl font-bold mb-2">Only $37</p>
                <p className="text-sm text-primary-foreground/80">Limited time offer - Join today</p>
                <div className="flex items-center justify-center gap-2 mt-4 text-sm">
                  <Shield className="size-4" />
                  <span>Unconditional 30-day guarantee</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background/95 backdrop-blur-sm">
        <div className="container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2 font-bold text-xl">
                <div className="size-10 rounded-lg bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-white">
                  👑
                </div>
                <span>ROYAL PASS</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The elite high-performance community for ambitious individuals committed to mastering every area of life.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Program</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Benefits
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Success Stories
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Support</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Guarantee
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} ROYAL PASS. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Transform every area of your life. Join the elite.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
