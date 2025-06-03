import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Flame, Instagram, Linkedin, Youtube, Building, Clock, Users } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Flame className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">Refrasynth</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
                About Us
              </Link>
              <Link href="/products-services" className="text-gray-700 hover:text-orange-600 transition-colors">
                Products & Services
              </Link>
              <Link href="/clients" className="text-gray-700 hover:text-orange-600 transition-colors">
                Clients
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-orange-100 text-orange-800">Get in Touch</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Ready to discuss your refractory needs? Reach out to us and discover how our solutions can optimize your
              industrial operations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8">Reach Out to Us</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Address</h3>
                    <p className="text-gray-600">marketing@pasmin.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone Numbers</h3>
                    <p className="text-gray-600">Phone No. 1: Available on request</p>
                    <p className="text-gray-600">Phone No. 2: Available on request</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Find an Office</h3>
                    <p className="text-gray-600">Multiple locations across India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Link href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                    <Instagram className="h-5 w-5 text-orange-600" />
                  </Link>
                  <Link href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                    <Linkedin className="h-5 w-5 text-orange-600" />
                  </Link>
                  <Link href="#" className="bg-orange-100 p-3 rounded-lg hover:bg-orange-200 transition-colors">
                    <Youtube className="h-5 w-5 text-orange-600" />
                  </Link>
                </div>
              </div>
            </div>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="industry">Industry</Label>
                    <Input id="industry" placeholder="Your industry" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone No.</Label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                <div>
                  <Label htmlFor="requirements">Requirements</Label>
                  <Textarea id="requirements" placeholder="Tell us about your requirements" rows={4} />
                </div>
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Submit</Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Presence</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Factory Outlets & Offices</h2>
            <p className="text-xl text-gray-600">Discover our sites - Strategically located across India</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-8 w-8 text-orange-600" />
                <h3 className="font-bold text-lg">Head Office</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Passary Minerals Pvt. Ltd.</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Kachery Road, Near Axis Bank
                <br />
                Rourkela 769 012
                <br />
                Dist. Sundergarh, Odisha. BHARAT
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-8 w-8 text-orange-600" />
                <h3 className="font-bold text-lg">Corporate Office</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Passary Minerals Madhya Pvt. Ltd.</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                B-602, Babylon Tower, VIP Road
                <br />
                Raipur - 492 001, CG. BHARAT
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-8 w-8 text-orange-600" />
                <h3 className="font-bold text-lg">Odisha Works</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Passary Minerals Pvt. Ltd.</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Vill. Bijabahal, PO. Kumjharia
                <br />
                Via. Kuarmunda, Dist. Sundargarh
                <br />
                770 039 Odisha. BHARAT
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="h-8 w-8 text-orange-600" />
                <h3 className="font-bold text-lg">Raipur Works</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Passary Minerals Madhya Pvt. Ltd.</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                61/39, 61/41, Urkura Road
                <br />
                Birgaon Raipur 493 221
                <br />
                CG. BHARAT
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Manufacturing Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Factories</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
            <p className="text-xl text-gray-600">Direct from field - RAIPUR manufacturing facility</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Manufacturing Capabilities</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 flex-shrink-0" />
                  <span>7 days from order to delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 flex-shrink-0" />
                  <span>250 skilled staff members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Building className="h-6 w-6 flex-shrink-0" />
                  <span>Modern manufacturing facility</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 flex-shrink-0" />
                  <span>Strategic location in industrial corridor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Information */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-600">Comprehensive approach to refractory solutions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Innovative Lining Methods</h3>
                  <p className="text-gray-600">
                    We employ cutting-edge lining techniques that maximize efficiency and extend service life of
                    refractory installations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">High-Grade Products with Innovative Design Solutions</h3>
                  <p className="text-gray-600">
                    Our products combine superior refractoriness with innovative design elements tailored to specific
                    industrial applications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Individually Adapted System Packages</h3>
                  <p className="text-gray-600">
                    Custom system packages designed to solve specific operational challenges and optimize performance.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Materials Optimized for Special Metallurgical Requirements</h3>
                  <p className="text-gray-600">
                    Specialized materials engineered to meet unique metallurgical demands and operating conditions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Innovative Technology with Latest Safety Standards</h3>
                  <p className="text-gray-600">
                    Implementation of advanced technology while maintaining the highest safety standards and quality
                    diligence.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Optimized Lining Concepts</h3>
                  <p className="text-gray-600">
                    Lining concepts specifically adapted to production process requirements for maximum operational
                    efficiency.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Periodic Reporting</h3>
                  <p className="text-gray-600">
                    Comprehensive reporting on all processes, costs, and consumption patterns to ensure optimal
                    performance.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific refractory requirements and discover how we can optimize your
            industrial operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
              Call Us Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              Send Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="h-8 w-8 text-orange-600" />
                <span className="text-2xl font-bold">Refrasynth</span>
              </div>
              <p className="text-gray-400 text-sm">
                Leading provider of refractory solutions for steel and power industries.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <Link href="/" className="text-gray-400 hover:text-white transition-colors block">
                  Home
                </Link>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors block">
                  About Us
                </Link>
                <Link href="/products-services" className="text-gray-400 hover:text-white transition-colors block">
                  Products & Services
                </Link>
                <Link href="/clients" className="text-gray-400 hover:text-white transition-colors block">
                  Clients
                </Link>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors block">
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
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
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
