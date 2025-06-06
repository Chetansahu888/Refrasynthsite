"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Flame, Instagram, Linkedin, Youtube, Building, Clock, Users, Menu, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function ContactPage() {
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
            <Badge className="mb-4 bg-green-100 text-green-800">Get in Touch</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to discuss your refractory needs? Reach out to us and discover how our solutions can optimize your
              industrial operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Reach Out to Us</h2>
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  { icon: Mail, title: "Email Address", desc: "refrasynthminerals@gmail.com" },
                  {
                    icon: Phone,
                    title: "Phone Numbers",
                    desc: "+917222980807",
                  },
                  { icon: MapPin, title: "Find an Office", desc: "M/s REFRASYNTH MINERALS INDIA PVT LTD. \nWORKS: - KHASRA NO. 297/3,297/5,297/7,297/8, \nVILL AKOLI, NEAR TARPONGI TOLL PLAZA.\n P.O.: DEVRI, RAIPUR, CHATTISGARH \n PINCODE: 493221 \nGST NO – 22AAJCR9122Q1ZW" },
                ].map((contact, index) => (
                  <motion.div key={index} variants={scaleIn} className="flex items-center space-x-4 group">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                      <contact.icon className="h-6 w-6 text-green-600 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{contact.title}</h3>
                      <p className="text-gray-600 whitespace-pre-line">{contact.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[Instagram, Linkedin, Youtube].map((Icon, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="bg-green-100 p-3 rounded-lg hover:bg-green-200 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="h-5 w-5 text-green-600" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border-green-100 hover:border-green-300">
                <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" className="border-green-200 focus:border-green-500" />
                    </div>
                    <div>
                      <Label htmlFor="industry">Industry</Label>
                      <Input
                        id="industry"
                        placeholder="Your industry"
                        className="border-green-200 focus:border-green-500"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone No.</Label>
                    <Input
                      id="phone"
                      placeholder="Your phone number"
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="requirements">Requirements</Label>
                    <Textarea
                      id="requirements"
                      placeholder="Tell us about your requirements"
                      rows={4}
                      className="border-green-200 focus:border-green-500"
                    />
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105">
                    Submit
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4">Our Factories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600">Direct from field - RAIPUR manufacturing facility</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6">RAIPUR Manufacturing Hub</h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our Raipur manufacturing facility represents the heart of our production capabilities, strategically
                  located to serve the industrial corridor of Central India. This state-of-the-art facility is equipped
                  with modern technology and follows stringent quality control processes.
                </p>
                <p>
                  The facility specializes in producing high-grade refractory materials directly from field operations,
                  ensuring optimal quality and cost-effectiveness. Our manufacturing process incorporates innovative
                  technology with the latest safety standards and diligence.
                </p>
                <p>
                  With a focus on sustainability and efficiency, our Raipur works serves as a model facility that
                  demonstrates our commitment to excellence in refractory manufacturing. The facility supports our
                  extensive client base across steel and power industries.
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
                <h3 className="text-2xl font-bold mb-6">Manufacturing Capabilities</h3>
                <motion.div
                  className="space-y-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { icon: Clock, text: "7 days from order to delivery" },
                    { icon: Users, text: "250 skilled staff members" },
                    { icon: Building, text: "Modern manufacturing facility" },
                    { icon: MapPin, text: "Strategic location in industrial corridor" },
                  ].map((capability, index) => (
                    <motion.div key={index} variants={scaleIn} className="flex items-center space-x-3 group">
                      <capability.icon className="h-6 w-6 flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300" />
                      <span>{capability.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Information */}
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
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">Comprehensive approach to refractory solutions</p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 backdrop-blur-sm bg-white/80 hover:shadow-lg transition-all duration-300">
              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  {
                    title: "Innovative Lining Methods",
                    desc: "We employ cutting-edge lining techniques that maximize efficiency and extend service life of refractory installations.",
                  },
                  {
                    title: "High-Grade Products with Innovative Design Solutions",
                    desc: "Our products combine superior refractoriness with innovative design elements tailored to specific industrial applications.",
                  },
                  {
                    title: "Individually Adapted System Packages",
                    desc: "Custom system packages designed to solve specific operational challenges and optimize performance.",
                  },
                  {
                    title: "Materials Optimized for Special Metallurgical Requirements",
                    desc: "Specialized materials engineered to meet unique metallurgical demands and operating conditions.",
                  },
                  {
                    title: "Innovative Technology with Latest Safety Standards",
                    desc: "Implementation of advanced technology while maintaining the highest safety standards and quality diligence.",
                  },
                  {
                    title: "Optimized Lining Concepts",
                    desc: "Lining concepts specifically adapted to production process requirements for maximum operational efficiency.",
                  },
                  {
                    title: "Periodic Reporting",
                    desc: "Comprehensive reporting on all processes, costs, and consumption patterns to ensure optimal performance.",
                  },
                ].map((process, index) => (
                  <motion.div key={index} variants={fadeIn}>
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-600">{process.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </Card>
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
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your specific refractory requirements and discover how we can optimize your
              industrial operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Call Us Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 transition-all duration-300 transform hover:scale-105"
              >
                Send Email
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
