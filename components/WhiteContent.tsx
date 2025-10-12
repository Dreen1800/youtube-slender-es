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
      title: "Proven Strategies",
      description: "Learn the exact tactics that generated millions of views on real channels.",
      icon: <Zap className="size-5" />,
    },
    {
      title: "Data Analysis",
      description: "Master YouTube Analytics and make decisions based on real metrics.",
      icon: <BarChart className="size-5" />,
    },
    {
      title: "Exclusive Community",
      description: "Connect with other creators and exchange experiences in real time.",
      icon: <Users className="size-5" />,
    },
    {
      title: "Fast Monetization",
      description: "Strategies to reach monetization requirements faster.",
      icon: <Shield className="size-5" />,
    },
    {
      title: "Premium Tools",
      description: "Access to templates, scripts and exclusive tools for creators.",
      icon: <Layers className="size-5" />,
    },
    {
      title: "Lifetime Support",
      description: "Direct support from me and constant content updates.",
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
            <div className="size-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white">
              ▶
            </div>
            <span>YouTube Master</span>
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
            <Button className="rounded-full bg-red-600 hover:bg-red-700">
              Get Started Now
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
                <Button className="rounded-full bg-red-600 hover:bg-red-700">
                  Get Started Now
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
              <div className="inline-block bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🔥 Over 5,000 students have already transformed their channels
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
                Transform Your Channel Into A View-Getting Machine
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Learn the exact method I used to grow from 0 to 1 million subscribers on YouTube.
                No secrets, no tricks - just proven strategies that work in 2025.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30">
                  Secure My Spot Now
                  <ArrowRight className="ml-2 size-5" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-2">
                  View Course Content
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
                { number: "5,000+", label: "Active Students" },
                { number: "50M+", label: "Views Generated" },
                { number: "100K+", label: "Subscribers Gained" },
                { number: "4.9/5", label: "Average Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-bold text-red-600 mb-2">{stat.number}</p>
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
                A complete step-by-step method to transform your YouTube channel into a consistent and scalable income source.
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

        {/* Course Curriculum Section */}
        <section className="w-full py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Complete Course Curriculum</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Over 50 hours of content divided into 8 comprehensive modules
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {[
                {
                  module: "Module 1",
                  title: "YouTube Foundation & Channel Setup",
                  lessons: "12 lessons • 4.5 hours",
                  icon: <Rocket className="size-6" />,
                  topics: ["Channel branding", "Niche selection", "Equipment basics", "YouTube Studio walkthrough"]
                },
                {
                  module: "Module 2",
                  title: "Content Strategy & Viral Video Formula",
                  lessons: "15 lessons • 6 hours",
                  icon: <Target className="size-6" />,
                  topics: ["Viral video psychology", "Trending topic research", "Content calendar creation", "Video ideation techniques"]
                },
                {
                  module: "Module 3",
                  title: "Video Production Mastery",
                  lessons: "18 lessons • 7 hours",
                  icon: <PlayCircle className="size-6" />,
                  topics: ["Filming techniques", "Audio quality", "Lighting setup", "Editing workflows"]
                },
                {
                  module: "Module 4",
                  title: "YouTube SEO & Algorithm Secrets",
                  lessons: "10 lessons • 5 hours",
                  icon: <TrendingUp className="size-6" />,
                  topics: ["Keyword research", "Title optimization", "Tag strategies", "Algorithm understanding"]
                },
                {
                  module: "Module 5",
                  title: "Thumbnail & Title Psychology",
                  lessons: "8 lessons • 3.5 hours",
                  icon: <Zap className="size-6" />,
                  topics: ["Click-worthy thumbnails", "A/B testing", "Color psychology", "Design principles"]
                },
                {
                  module: "Module 6",
                  title: "Audience Growth & Engagement",
                  lessons: "14 lessons • 5.5 hours",
                  icon: <Users className="size-6" />,
                  topics: ["Community building", "Comment strategies", "Collaboration tactics", "Cross-promotion"]
                },
                {
                  module: "Module 7",
                  title: "Monetization & Revenue Streams",
                  lessons: "16 lessons • 6.5 hours",
                  icon: <DollarSign className="size-6" />,
                  topics: ["AdSense optimization", "Sponsorship deals", "Affiliate marketing", "Digital products"]
                },
                {
                  module: "Module 8",
                  title: "Analytics & Scaling Your Channel",
                  lessons: "12 lessons • 5 hours",
                  icon: <Trophy className="size-6" />,
                  topics: ["Data interpretation", "Growth metrics", "Team building", "Automation strategies"]
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
                        <div className="size-12 rounded-lg bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                          {module.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-sm font-semibold text-red-600">{module.module}</span>
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
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-600/10 text-red-600 font-semibold">
                <Trophy className="size-5" />
                <span>50+ Hours of Content • Lifetime Updates Included</span>
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Success Stories From Our Students</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                Real results from real creators who transformed their channels
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  channel: "Tech Tips Daily",
                  result: "0 to 250K subscribers in 8 months",
                  quote: "This course gave me the exact roadmap I needed. My channel went from zero to monetized in just 3 months, and now I'm making $8K/month from YouTube alone!",
                  avatar: "SJ"
                },
                {
                  name: "Michael Chen",
                  channel: "Finance Freedom",
                  result: "100K to 1M subscribers in 1 year",
                  quote: "The monetization module alone was worth 10x the course price. I implemented the strategies and tripled my revenue within 60 days.",
                  avatar: "MC"
                },
                {
                  name: "Emma Rodriguez",
                  channel: "Cooking with Emma",
                  result: "5K to 500K subscribers",
                  quote: "I was stuck at 5,000 subscribers for 2 years. After applying the viral video formula from Module 2, I gained 495K subscribers in just 10 months!",
                  avatar: "ER"
                },
                {
                  name: "David Kim",
                  channel: "Fitness Pro",
                  result: "First video hit 2M views",
                  quote: "The thumbnail psychology section is pure gold. My first video after the course hit 2 million views and changed my life forever.",
                  avatar: "DK"
                },
                {
                  name: "Lisa Anderson",
                  channel: "Travel Adventures",
                  result: "Making $15K/month",
                  quote: "I quit my 9-5 job thanks to this course. Now I'm traveling the world full-time and making $15K per month from my YouTube channel.",
                  avatar: "LA"
                },
                {
                  name: "James Wilson",
                  channel: "Gaming Legends",
                  result: "800K subscribers gained",
                  quote: "Best investment I ever made. The community alone is worth it - I've collaborated with other students and grown my channel to 800K subscribers.",
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
                        <div className="size-12 rounded-full bg-red-600 flex items-center justify-center text-white font-bold">
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
              <div className="inline-block px-4 py-2 rounded-full bg-red-600 text-white font-semibold mb-4">
                🎁 EXCLUSIVE BONUSES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get $2,497 Worth of Bonuses</h2>
              <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto">
                When you enroll today, you'll get instant access to these premium bonuses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Viral Thumbnail Templates Pack",
                  value: "$497",
                  description: "200+ professionally designed thumbnail templates in Photoshop and Canva formats",
                  icon: <Zap className="size-6" />
                },
                {
                  title: "Copyright-Free Music Library",
                  value: "$297",
                  description: "1,000+ royalty-free music tracks and sound effects for your videos",
                  icon: <PlayCircle className="size-6" />
                },
                {
                  title: "Video Script Templates",
                  value: "$197",
                  description: "50+ proven video script templates for different niches and video types",
                  icon: <Star className="size-6" />
                },
                {
                  title: "YouTube SEO Tool Suite",
                  value: "$697",
                  description: "Premium keyword research tools and analytics dashboard (1-year access)",
                  icon: <TrendingUp className="size-6" />
                },
                {
                  title: "Monthly Live Q&A Sessions",
                  value: "$497",
                  description: "Direct access to me in live coaching calls every month (Lifetime access)",
                  icon: <Users className="size-6" />
                },
                {
                  title: "Private Discord Community",
                  value: "$297",
                  description: "Network with 5,000+ creators, find collaborators, and get daily support",
                  icon: <Shield className="size-6" />
                },
              ].map((bonus, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Card className="overflow-hidden border-2 border-red-600/20 bg-background hover:border-red-600/40 hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-red-600/10 flex items-center justify-center text-red-600 shrink-0">
                          {bonus.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-bold">{bonus.title}</h3>
                            <span className="text-sm font-bold text-red-600">{bonus.value}</span>
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
              <p className="text-2xl font-bold mb-2">Total Bonus Value: <span className="text-red-600">$2,497</span></p>
              <p className="text-muted-foreground">All included FREE when you join today</p>
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
                Ready To Explode On YouTube?
              </h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join over 5,000 creators who have already transformed their channels into profitable businesses using this proven method.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button size="lg" variant="secondary" className="rounded-full h-14 px-10 text-lg shadow-lg">
                  Get Lifetime Access
                  <ArrowRight className="ml-2 size-5" />
                </Button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mt-6 max-w-md">
                <p className="text-2xl font-bold mb-2">Only $497</p>
                <p className="text-sm text-primary-foreground/80">or 12 payments of $49.70</p>
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
                <div className="size-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center text-white">
                  ▶
                </div>
                <span>YouTube Master</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The complete course to transform your YouTube channel into a view-getting and monetization machine.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold">Course</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Content
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
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
              &copy; {new Date().getFullYear()} YouTube Master. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              This product is not affiliated with YouTube or Google LLC.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
