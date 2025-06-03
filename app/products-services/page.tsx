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
} from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function ProductsServicesPage() {
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
            <Badge className="mb-4 bg-orange-100 text-orange-800">Our Offering</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Products & Services</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive refractory solutions from design to maintenance. Service is our mindset... World is our
              playground. We provide complete project management and total refractory management solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Products */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Products</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Refractory Products</h2>
            <p className="text-xl text-gray-600">High-grade products with innovative design solutions</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">Refractory Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Castable Insulation Materials</h4>
                    <p className="text-sm text-gray-600">
                      High-grade refractory castables designed for furnaces used by steel manufacturers operating
                      through the Direct Reduced Iron (DRI) route.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">High-Grade Products</h4>
                    <p className="text-sm text-gray-600">
                      Products which, in addition to their refractoriness, also include innovative design solutions
                      tailored to specific applications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Individually Adapted Systems</h4>
                    <p className="text-sm text-gray-600">
                      System packages individually adapted to solve any problems with materials specifically optimized
                      for special metallurgical requirements.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Factory className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-2xl">SS Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Specialized Stainless Steel Products</h4>
                    <p className="text-sm text-gray-600">
                      Advanced stainless steel refractory products designed for high-temperature applications and
                      corrosive environments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Innovative Technology</h4>
                    <p className="text-sm text-gray-600">
                      Products manufactured using innovative technology with the latest safety standards and diligence
                      in quality control.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Optimized Lining Concepts</h4>
                    <p className="text-sm text-gray-600">
                      Lining concepts specifically adapted to the requirements of the production process for maximum
                      efficiency.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engineering Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Engineering Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Refractories Engineering Services</h2>
            <p className="text-xl text-gray-600">
              Complete project services and regular management services with expert supervision worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded">
                  <Wrench className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">01. Supply of Refractories</h3>
              </div>
              <p className="text-gray-600">
                Complete supply of refractory materials and auxiliary items with quality assurance and timely delivery
                to meet project requirements.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">02. Detail Engineering and Drawing</h3>
              </div>
              <p className="text-gray-600">
                Comprehensive engineering services including detailed drawings, specifications, and technical
                documentation for optimal installation.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">03. Installation & Commissioning</h3>
              </div>
              <p className="text-gray-600">
                Professional dismantling, installation, dry out, commissioning, and after-sales service with expert
                supervision.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-100 p-2 rounded">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">04. Maintenance & Repair</h3>
              </div>
              <p className="text-gray-600">
                Ongoing maintenance and repair services through expert supervision with periodic reporting on all
                processes, costs, and consumption.
              </p>
            </Card>
          </div>

          {/* Project Experience */}
          <div className="bg-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Project Experience</h3>
            <p className="text-gray-600 text-center mb-8">
              We have successfully executed a large number of projects including:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Factory className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Coke Oven & Blast Furnace</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Settings className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Mini Blast Furnace & Trough</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Cog className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Torpedo Ladle & SMS Area</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Zap className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Limekiln & DRI</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Target className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Pellet Plant</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Carbon Black Reactors</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Building className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Coke Calcination Unit</h4>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-lg mb-3">
                  <Factory className="h-8 w-8 text-orange-600 mx-auto" />
                </div>
                <h4 className="font-semibold text-sm">Boilers & Arc Furnace</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Service Types</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Service Portfolio</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">DRI Applications</h3>
              <p className="text-gray-600 mb-6">
                Specialized refractory solutions for Direct Reduced Iron processes, optimized for high-temperature
                operations and energy efficiency.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">High-temperature resistance materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Energy-efficient lining solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Customized installation processes</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">SMS Applications</h3>
              <p className="text-gray-600 mb-6">
                Steel Melting Shop refractory applications designed for extreme conditions and continuous operation
                requirements.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Corrosion-resistant materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Thermal shock resistance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Extended service life</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Rolling Mill Solutions</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive refractory solutions for rolling mill operations, ensuring optimal performance and
                durability.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Wear-resistant linings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Quick installation methods</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Minimal downtime solutions</span>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Pellet Plant Services</h3>
              <p className="text-gray-600 mb-6">
                Specialized refractory services for pellet plant operations, optimized for continuous high-temperature
                processing.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">High-alumina refractory systems</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Thermal efficiency optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Predictive maintenance programs</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Quality Assurance</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testing Process</h2>
            <p className="text-xl text-gray-600">Rigorous quality control ensures optimal performance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Material Testing</h3>
              <p className="text-gray-600">
                Comprehensive testing of raw materials and finished products to ensure they meet stringent quality
                standards and performance requirements.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Validation</h3>
              <p className="text-gray-600">
                Real-world performance testing under actual operating conditions to validate product effectiveness and
                durability in industrial applications.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Ongoing monitoring and evaluation of installed systems with periodic reporting on performance, costs,
                and consumption patterns.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Management Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Total Refractories Management</h2>
            <p className="text-xl text-gray-600">Complete project management and partnership solutions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-6">01. Maximizing Value to Customer</h3>
              <p className="text-gray-600 mb-6">
                Our approach focuses on delivering maximum value through optimized solutions, cost-effective
                implementations, and long-term performance benefits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Cost optimization strategies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Performance enhancement solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Energy efficiency improvements</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-6">02. Partnership for Long Term Basis</h3>
              <p className="text-gray-600 mb-6">
                We believe in building long-term partnerships that create win-win solutions for sustainable business
                growth and mutual success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Strategic partnership approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Continuous support and service</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Collaborative problem-solving</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Optimize Your Operations?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your refractory needs and discover how our solutions can enhance your industrial
            processes.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
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
