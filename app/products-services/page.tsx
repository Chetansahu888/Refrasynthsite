"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Factory,
  Cog,
  Wrench,
  Building,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Settings,
  Zap,
  Target,
  Flame,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ProductsServicesPage() {
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
            <Badge className="mb-4 bg-green-100 text-green-800">Our Offering</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Products & Services</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive refractory solutions from design to maintenance. Service is our mindset... World is our
              playground. We provide complete project management and total refractory management solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Products</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Refractory Products</h2>
            <p className="text-xl text-gray-600">High-grade products with innovative design solutions</p>
          </motion.div>

          <div className="flex justify-center">
            <div className="max-w-2xl w-full">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                  <CardHeader>
                    <Shield className="h-12 w-12 text-green-600 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-2xl">Refractory Products</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      {
                        title: "Castable Insulation Materials",
                        desc: "High-grade refractory castables designed for furnaces used by steel manufacturers operating through the Direct Reduced Iron (DRI) route.",
                      },
                      {
                        title: "High-Grade Products",
                        desc: "Products which, in addition to their refractoriness, also include innovative design solutions tailored to specific applications.",
                      },
                      {
                        title: "Individually Adapted Systems",
                        desc: "System packages individually adapted to solve any problems with materials specifically optimized for special metallurgical requirements.",
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                      >
                        <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Engineering Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Refractories Engineering Services</h2>
            <p className="text-xl text-gray-600">
              Complete project services and regular management services with expert supervision worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Wrench,
                title: "01. Supply of Refractories",
                desc: "Complete supply of refractory materials and auxiliary items with quality assurance and timely delivery to meet project requirements.",
              },
              {
                icon: BarChart3,
                title: "02. Detail Engineering and Drawing",
                desc: "Comprehensive engineering services including detailed drawings, specifications, and technical documentation for optimal installation.",
              },
              {
                icon: Building,
                title: "03. Installation & Commissioning",
                desc: "Professional dismantling, installation, dry out, commissioning, and after-sales service with expert supervision.",
              },
              {
                icon: Users,
                title: "04. Maintenance & Repair",
                desc: "Ongoing maintenance and repair services through expert supervision with periodic reporting on all processes, costs, and consumption.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-green-100 p-2 rounded group-hover:bg-green-200 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-green-600 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Experience */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Project Experience</h3>
            <p className="text-gray-600 text-center mb-8">
              We have successfully executed a large number of projects including:
            </p>
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: Factory, title: "Coke Oven & Blast Furnace" },
                { icon: Settings, title: "Mini Blast Furnace & Trough" },
                { icon: Cog, title: "Torpedo Ladle & SMS Area" },
                { icon: Zap, title: "Limekiln & DRI" },
                { icon: Target, title: "Pellet Plant" },
                { icon: Shield, title: "Carbon Black Reactors" },
                { icon: Building, title: "Coke Calcination Unit" },
                { icon: Factory, title: "Boilers & Arc Furnace" },
              ].map((item, index) => (
                <motion.div key={index} variants={scaleIn} className="text-center group">
                  <div className="bg-green-100 p-4 rounded-lg mb-3 group-hover:bg-green-200 transition-colors duration-300">
                    <item.icon className="h-8 w-8 text-green-600 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Service Types</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Portfolio</h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: "DRI Applications",
                desc: "Specialized refractory solutions for Direct Reduced Iron processes, optimized for high-temperature operations and energy efficiency.",
                features: [
                  "High-temperature resistance materials",
                  "Energy-efficient lining solutions",
                  "Customized installation processes",
                ],
              },
              {
                title: "SMS Applications",
                desc: "Steel Melting Shop refractory applications designed for extreme conditions and continuous operation requirements.",
                features: ["Corrosion-resistant materials", "Thermal shock resistance", "Extended service life"],
              },
              {
                title: "Rolling Mill Solutions",
                desc: "Comprehensive refractory solutions for rolling mill operations, ensuring optimal performance and durability.",
                features: ["Wear-resistant linings", "Quick installation methods", "Minimal downtime solutions"],
              },
              {
                title: "Pellet Plant Services",
                desc: "Specialized refractory services for pellet plant operations, optimized for continuous high-temperature processing.",
                features: [
                  "High-alumina refractory systems",
                  "Thermal efficiency optimization",
                  "Predictive maintenance programs",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 h-full">
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Process */}
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
            <Badge className="mb-4">Quality Assurance</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testing Process</h2>
            <p className="text-xl text-gray-600">Rigorous quality control ensures optimal performance</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Material Testing",
                desc: "Comprehensive testing of raw materials and finished products to ensure they meet stringent quality standards and performance requirements.",
              },
              {
                step: "02",
                title: "Performance Validation",
                desc: "Real-world performance testing under actual operating conditions to validate product effectiveness and durability in industrial applications.",
              },
              {
                step: "03",
                title: "Continuous Monitoring",
                desc: "Ongoing monitoring and evaluation of installed systems with periodic reporting on performance, costs, and consumption patterns.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm bg-white/80 border-green-100 hover:border-green-300 group">
                  <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold transform group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Management Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Total Refractories Management</h2>
            <p className="text-xl text-gray-600">Complete project management and partnership solutions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "01. Maximizing Value to Customer",
                desc: "Our approach focuses on delivering maximum value through optimized solutions, cost-effective implementations, and long-term performance benefits.",
                features: [
                  "Cost optimization strategies",
                  "Performance enhancement solutions",
                  "Energy efficiency improvements",
                ],
              },
              {
                title: "02. Partnership for Long Term Basis",
                desc: "We believe in building long-term partnerships that create win-win solutions for sustainable business growth and mutual success.",
                features: [
                  "Strategic partnership approach",
                  "Continuous support and service",
                  "Collaborative problem-solving",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 h-full">
                  <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your refractory needs and discover how our solutions can enhance your
              industrial processes.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
              asChild
            >
              <Link href="/contact">
                Get Started Today{" "}
                <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
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
