"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Factory,
  Shield,
  Users,
  TrendingUp,
  Target,
  Eye,
  Heart,
  Zap,
  CheckCircle,
  Building,
  Clock,
  DollarSign,
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
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function HomePage() {
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
            <div className="flex items-center space-x-2">
              <Flame className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">Refrasynth</span>
            </div>
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
      <section className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">Industry Expert</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Saving Energy Through
              <span className="text-green-600"> Refractories</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Passary Refractories is an industry expert specializing in castable insulation materials, designed for
              furnaces used by steel manufacturers operating through the Direct Reduced Iron (DRI) route. Our refractory
              solutions are tailored to meet specific industrial needs of our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Who We Are</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Experts of Refractory Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are trusted experts of Refractory solutions having global presence. To contribute to the nation's
              growth by being a strong backbone to the steel industry through total refractory management, working in
              support of the Make in India movement.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300">
                <CardHeader>
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Our Purpose</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To contribute to the nation's growth by being a strong backbone to the steel industry through total
                    refractory management, working in support of the Make in India movement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300">
                <CardHeader>
                  <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    To be the leading provider of innovative refractory solutions, setting industry standards for
                    quality, sustainability, and customer satisfaction across global markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300">
                <CardHeader>
                  <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Providing comprehensive refractory solutions with expert insights and end-to-end services tailored
                    to meet specific industrial needs of our clients.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Industry Focus</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600">Providing specialized solutions across multiple industrial sectors</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-blue-500 to-teal-600 p-6 text-white group-hover:from-blue-600 group-hover:to-teal-700 transition-all duration-300">
                  <Factory className="h-12 w-12 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-2">Steel Industry</h3>
                  <p className="opacity-90">
                    Comprehensive refractory solutions for steel manufacturing processes including DRI, SMS, Rolling
                    Mills, and Pellet Plants.
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">DRI - Direct Reduced Iron solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">SMS - Steel Melting Shop applications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Rolling Mill refractory systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Pellet Plant solutions</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 group-hover:bg-green-50 transition-colors duration-300"
                    variant="outline"
                    asChild
                  >
                    <Link href="/clients" className="group">
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 text-white group-hover:from-green-600 group-hover:to-emerald-700 transition-all duration-300">
                  <Zap className="h-12 w-12 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-2">Power Plant</h3>
                  <p className="opacity-90">
                    Specialized refractory solutions for power generation facilities with focus on energy efficiency and
                    durability.
                  </p>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Boiler refractory systems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">High-temperature applications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Energy-efficient solutions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Maintenance and repair services</span>
                    </div>
                  </div>
                  <Button
                    className="w-full mt-4 group-hover:bg-green-50 transition-colors duration-300"
                    variant="outline"
                    asChild
                  >
                    <Link href="/clients" className="group">
                      Learn More{" "}
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Offering Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Offering</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Providing Every Solution</h2>
            <p className="text-xl text-gray-600">Rolling mills, Pellet plants, Steel melting, Power plants</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 h-full flex flex-col">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Refractory Products</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  High-grade castable insulation materials and specialized refractory products for various industrial
                  applications.
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300"
                  asChild
                >
                  <Link href="/products-services">View Products</Link>
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 h-full flex flex-col">
                <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Engineering Services</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Complete project management from design to installation, maintenance, and expert supervision
                  worldwide.
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300"
                  asChild
                >
                  <Link href="/products-services">View Services</Link>
                </Button>
              </Card>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100 hover:border-green-300 h-full flex flex-col">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Total Management</h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  Complete refractory management solutions with long-term partnerships for win-win customer
                  relationships.
                </p>
                <Button
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300"
                  asChild
                >
                  <Link href="/products-services">Learn More</Link>
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover how our refractory solutions can optimize your operations and reduce energy costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 group"
                asChild
              >
                <Link href="/contact">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link href="/about">Learn About Our Company</Link>
              </Button>
            </div>
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
