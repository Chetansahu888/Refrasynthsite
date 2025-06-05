"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Factory,
  Settings,
  Cog,
  Zap,
  CheckCircle,
  ArrowRight,
  Flame,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MapPin,
  Menu,
  X,
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ClientsPage() {
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
            <Badge className="mb-4 bg-green-100 text-green-800">Our Clients</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Industry Focus</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We serve leading companies across steel and power industries, providing specialized refractory solutions
              that optimize operations and reduce energy costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Focus - Steel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4">Steel Industry</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">GO TO STEEL</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our comprehensive refractory solutions for the steel industry are designed to meet the demanding
                  requirements of modern steel manufacturing processes. We specialize in Direct Reduced Iron (DRI)
                  applications, Steel Melting Shop (SMS) operations, Rolling Mills, and Pellet Plants.
                </p>
                <p>
                  With extensive experience in steel industry applications, we provide tailored solutions that enhance
                  operational efficiency, reduce energy consumption, and extend equipment life. Our products are
                  specifically optimized for the high-temperature, corrosive environments typical in steel production.
                </p>
                <p>
                  We understand the critical nature of steel production processes and provide reliable, high-performance
                  refractory solutions that minimize downtime and maximize productivity. Our team works closely with
                  steel manufacturers to develop customized solutions that meet their specific operational requirements.
                </p>
                <p>
                  Our steel industry solutions include innovative lining methods, high-grade products with innovative
                  design solutions, and individually adapted system packages to solve any operational challenges.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Factory className="h-16 w-16 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Steel Industry Applications</h3>
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div variants={scaleIn} className="text-center group">
                    <Settings className="h-12 w-12 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-medium">DRI</div>
                    <div className="text-sm opacity-90">Direct Reduced Iron solutions for optimal performance</div>
                  </motion.div>
                  <motion.div variants={scaleIn} className="text-center group">
                    <Cog className="h-12 w-12 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-medium">SMS</div>
                    <div className="text-sm opacity-90">Steel Melting Shop applications for high efficiency</div>
                  </motion.div>
                  <motion.div variants={scaleIn} className="text-center group">
                    <Factory className="h-12 w-12 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-medium">Rolling Mill</div>
                    <div className="text-sm opacity-90">Advanced rolling mill refractory systems</div>
                  </motion.div>
                  <motion.div variants={scaleIn} className="text-center group">
                    <Zap className="h-12 w-12 mx-auto mb-3 transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-lg font-medium">Pellet Plant</div>
                    <div className="text-sm opacity-90">Specialized pellet plant solutions</div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing Process for Steel */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Steel Industry Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testing Process</h2>
            <p className="text-xl text-gray-600">Our comprehensive approach to steel industry applications</p>
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
                title: "Material Analysis",
                desc: "Comprehensive analysis of steel production requirements and environmental conditions to select optimal refractory materials.",
              },
              {
                step: "02",
                title: "Performance Testing",
                desc: "Rigorous testing under actual steel production conditions to validate performance and durability of refractory solutions.",
              },
              {
                step: "03",
                title: "Continuous Monitoring",
                desc: "Ongoing monitoring and optimization of installed systems with regular performance reporting and maintenance support.",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
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

      {/* Industry Focus - Power Plant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Zap className="h-16 w-16 mb-6" />
                <h3 className="text-2xl font-bold mb-6">Power Plant Applications</h3>
                <div className="space-y-4">
                  {[
                    "High-temperature boiler applications",
                    "Energy-efficient thermal solutions",
                    "Corrosion-resistant materials",
                    "Extended service life solutions",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <CheckCircle className="h-6 w-6 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4">Power Plant Industry</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">GO TO POWER PLANT</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our power plant refractory solutions are specifically designed for the demanding conditions of power
                  generation facilities. We provide specialized materials and systems that withstand extreme
                  temperatures, thermal cycling, and corrosive environments typical in power plant operations.
                </p>
                <p>
                  With deep understanding of power plant operations, we deliver solutions that enhance energy
                  efficiency, reduce maintenance costs, and extend equipment life. Our products are engineered to meet
                  the stringent requirements of modern power generation technologies.
                </p>
                <p>
                  We work closely with power plant operators to develop customized refractory solutions that optimize
                  performance while minimizing environmental impact. Our comprehensive approach includes design,
                  installation, and ongoing maintenance support.
                </p>
                <p>
                  Our power plant solutions feature innovative technology with the latest safety standards, optimized
                  lining concepts adapted to production process requirements, and materials specifically designed for
                  power generation applications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Types */}
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
            <Badge className="mb-4">Our Client Base</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Clients We Serve</h2>
            <p className="text-xl text-gray-600">Diverse industrial sectors trust our refractory expertise</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Factory,
                title: "Steel Manufacturers",
                desc: "Leading steel companies utilizing DRI, SMS, and rolling mill technologies",
              },
              {
                icon: Zap,
                title: "Power Plants",
                desc: "Thermal power generation facilities requiring high-performance refractory solutions",
              },
              {
                icon: Settings,
                title: "Pellet Plants",
                desc: "Iron ore pelletizing facilities needing specialized high-temperature applications",
              },
              {
                icon: Cog,
                title: "Industrial Furnaces",
                desc: "Various industrial furnace operations across multiple manufacturing sectors",
              },
            ].map((client, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm bg-white/80 border-green-100 hover:border-green-300 group">
                  <client.icon className="h-12 w-12 text-green-600 mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold text-lg mb-2">{client.title}</h3>
                  <p className="text-gray-600 text-sm">{client.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Client Statistics</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Market Presence</h2>
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
                number: "54",
                title: "Potential Clients in Raipur",
                desc: "Strong market presence in the Raipur industrial corridor with significant growth opportunities",
              },
              {
                number: "125",
                title: "Crores Annual Turnover",
                desc: "Demonstrating strong client relationships and successful project delivery across industries",
              },
              {
                number: "3-5",
                title: "Years Maintenance Cycle",
                desc: "Long-term client relationships with extended maintenance cycles demonstrating product reliability",
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={scaleIn}>
                <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 group">
                  <div className="text-4xl font-bold text-green-600 mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
                  <p className="text-gray-600">{stat.desc}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Client Base</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Discover how our refractory solutions can optimize your industrial operations and reduce operational
              costs.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 group"
              asChild
            >
              <Link href="/contact">
                Contact Us Today{" "}
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
                  <span>marketing@pasmin.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Multiple locations across India</span>
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
