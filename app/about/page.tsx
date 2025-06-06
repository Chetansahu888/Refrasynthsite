"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Target,
  Eye,
  Heart,
  Zap,
  CheckCircle,
  Shield,
  MapPin,
  Award,
  Flame,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Menu,
  X,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AboutPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${scrolled ? "bg-white/95 shadow-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Flame className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Refrasynth</span>
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-green-600 transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors relative group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/products-services"
                className="text-gray-700 hover:text-green-600 transition-colors relative group"
              >
                Products & Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/clients" className="text-gray-700 hover:text-green-600 transition-colors relative group">
                Clients
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors relative group">
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </nav>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4"
            >
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/products-services"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products & Services
                </Link>
                <Link
                  href="/clients"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Clients
                </Link>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-green-600 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-green-100 text-green-800">About Us</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Passary Refractories</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Passary Refractories is an industry expert specializing in castable insulation materials, designed for
              furnaces used by steel manufacturers operating through the Direct Reduced Iron (DRI) route. Our refractory
              solutions are tailored to meet specific industrial needs of our clients. We provide expert solutions &
              industry insights along with end to end refractory solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn}>
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                <CardHeader>
                  <Target className="h-16 w-16 text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">Our Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To contribute to the nation's growth by being a strong backbone to the steel industry through total
                    refractory management, working in support of the Make in India movement. We aim to provide
                    innovative solutions that enhance operational efficiency and sustainability.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                <CardHeader>
                  <Eye className="h-16 w-16 text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading provider of innovative refractory solutions globally, setting industry standards
                    for quality, sustainability, and customer satisfaction. We envision a future where our solutions
                    drive energy efficiency and environmental responsibility.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                <CardHeader>
                  <Heart className="h-16 w-16 text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    Providing comprehensive refractory solutions with expert insights and end-to-end services tailored
                    to meet specific industrial needs of our clients. We are committed to delivering excellence through
                    innovation and continuous improvement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">
              Six key reasons why we're the preferred choice for refractory solutions
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "01. Energy Cost Minimizers",
                desc: "Remarkable track record in reducing energy consumption through innovative refractory solutions that optimize thermal efficiency.",
              },
              {
                icon: Award,
                title: "02. Remarkable Track Record",
                desc: "Proven success across multiple industries with extensive experience in complex refractory projects and installations.",
              },
              {
                icon: CheckCircle,
                title: "03. One-Stop-Shop",
                desc: "Complete refractory solutions under one roof - from design and supply to installation and maintenance services.",
              },
              {
                icon: Shield,
                title: "04. 24 Months Guarantee",
                desc: "Extended warranty on all our products and services, demonstrating our confidence in quality and reliability.",
              },
              {
                icon: MapPin,
                title: "05. Strategically Situated",
                desc: "Multiple locations across India for better service coverage and faster response to customer needs.",
              },
              {
                icon: Target,
                title: "06. Narrowed Down Focus",
                desc: "Specialized expertise in refractory solutions with deep industry knowledge and focused service delivery.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg flex-shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-green-600 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Company Timeline 
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Timeline</h2>
            <p className="text-xl text-gray-600">Decades of growth and innovation in refractory solutions</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "1980",
                  title: "Where it all began",
                  desc: "The foundation of our company was laid with a vision to serve the refractory industry with innovative solutions and exceptional quality. Started with a commitment to excellence and customer satisfaction that continues to drive us today.",
                },
                {
                  year: "2002",
                  title: "Establishment",
                  desc: "Considering the growing demand in service of refractory at customers' end in early 2000, we started our dedicated service activities from 2002 onwards. Till now, we have developed our expertise in different industries and products to give continuous support to customer troubles during operation.",
                },
                {
                  year: "2016",
                  title: "Achievement No. 1",
                  desc: "Reached significant milestones in project execution and service delivery, establishing ourselves as a trusted partner in the refractory industry. Expanded our capabilities and strengthened our position in the market through continuous innovation and customer focus.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-8"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
                    {item.year}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Our Culture */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Culture</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-white/80 hover:shadow-lg transition-all duration-300">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our culture is built on the foundation of excellence, innovation, and customer-centricity. We believe
                  in fostering an environment where creativity thrives, and every team member is empowered to contribute
                  to our collective success.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are committed to continuous learning and improvement, staying at the forefront of refractory
                  technology and industry best practices. Our collaborative approach ensures that we deliver solutions
                  that not only meet but exceed our clients' expectations.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Integrity, reliability, and sustainability are the core values that guide our operations and
                  decision-making processes. We take pride in being a responsible corporate citizen and contributing
                  positively to the communities we serve.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our success</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { initials: "PP", name: "Pradeep Passary", title: "Director" },
              { initials: "KP", name: "Kavit Passary", title: "Director" },
              { initials: "BP", name: "Bitthal Passary", title: "Director" },
              { initials: "JP", name: "Jaidhish Passary", title: "Director" },
            ].map((member, i) => (
              <motion.div key={i} variants={scaleIn}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {member.initials}
                  </div>
                  <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-4">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Leading the company with extensive experience in refractory solutions and strategic business
                    development. Committed to driving innovation and excellence in all aspects of our operations.
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Certifications</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <p className="text-xl text-gray-600">Our commitment to quality is validated by industry certifications</p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="text-center p-12 max-w-2xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-green-200 hover:border-green-400 group bg-white/80 backdrop-blur-sm">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-green-100 rounded-full opacity-50 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-8 h-8 bg-emerald-100 rounded-full opacity-50 animate-pulse animation-delay-1000"></div>

                <Award className="h-24 w-24 text-green-600 mx-auto mb-8 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500" />

                <h3 className="text-3xl font-bold mb-6 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
                  Performance Certificate
                </h3>

                <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto mb-6 rounded-full"></div>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Certified for excellence in refractory solutions and service delivery, meeting international quality
                  standards. This certification validates our commitment to providing superior products and services
                  that exceed industry benchmarks.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="h-8 w-8 text-green-500" />
                <span className="text-2xl font-bold">Refrasynth</span>
              </div>
              <p className="text-gray-400 text-sm">
                Leading provider of refractory solutions for steel and power industries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors block">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-green-400 transition-colors block">
                  About Us
                </Link>
                <Link href="/products-services" className="text-gray-400 hover:text-green-400 transition-colors block">
                  Products & Services
                </Link>
                <Link href="/clients" className="text-gray-400 hover:text-green-400 transition-colors block">
                  Clients
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors block">
                  Contact Us
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Refractory Application</p>
                <p className="text-gray-400">Engineering Services</p>
                <p className="text-gray-400">Installation & Maintenance</p>
                <p className="text-gray-400">Expert Supervision</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>refrasynthminerals@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>M/s REFRASYNTH MINERALS INDIA PVT LTD.</span>
                </div>
              </div>
              <div className="mt-4">
                <h5 className="font-semibold mb-2">Follow Us</h5>
                <div className="flex space-x-3">
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
                  >
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110"
                  >
                    <Youtube className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; 2024 Refrasynth. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
