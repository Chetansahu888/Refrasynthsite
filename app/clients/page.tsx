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
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function ClientsPage() {
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
            <Badge className="mb-4 bg-orange-100 text-orange-800">Our Clients</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Industry Focus</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We serve leading companies across steel and power industries, providing specialized refractory solutions
              that optimize operations and reduce energy costs.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Focus - Steel */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
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
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
              <Factory className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-bold mb-6">Steel Industry Applications</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Settings className="h-12 w-12 mx-auto mb-3" />
                  <div className="text-lg font-medium">DRI</div>
                  <div className="text-sm opacity-90">Direct Reduced Iron solutions for optimal performance</div>
                </div>
                <div className="text-center">
                  <Cog className="h-12 w-12 mx-auto mb-3" />
                  <div className="text-lg font-medium">SMS</div>
                  <div className="text-sm opacity-90">Steel Melting Shop applications for high efficiency</div>
                </div>
                <div className="text-center">
                  <Factory className="h-12 w-12 mx-auto mb-3" />
                  <div className="text-lg font-medium">Rolling Mill</div>
                  <div className="text-sm opacity-90">Advanced rolling mill refractory systems</div>
                </div>
                <div className="text-center">
                  <Zap className="h-12 w-12 mx-auto mb-3" />
                  <div className="text-lg font-medium">Pellet Plant</div>
                  <div className="text-sm opacity-90">Specialized pellet plant solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process for Steel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Steel Industry Process</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Testing Process</h2>
            <p className="text-xl text-gray-600">Our comprehensive approach to steel industry applications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Material Analysis</h3>
              <p className="text-gray-600">
                Comprehensive analysis of steel production requirements and environmental conditions to select optimal
                refractory materials.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Performance Testing</h3>
              <p className="text-gray-600">
                Rigorous testing under actual steel production conditions to validate performance and durability of
                refractory solutions.
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Ongoing monitoring and optimization of installed systems with regular performance reporting and
                maintenance support.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Focus - Power Plant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-8 text-white">
              <Zap className="h-16 w-16 mb-6" />
              <h3 className="text-2xl font-bold mb-6">Power Plant Applications</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>High-temperature boiler applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>Energy-efficient thermal solutions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>Corrosion-resistant materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 flex-shrink-0" />
                  <span>Extended service life solutions</span>
                </div>
              </div>
            </div>
            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Client Base</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Types of Clients We Serve</h2>
            <p className="text-xl text-gray-600">Diverse industrial sectors trust our refractory expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Factory className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Steel Manufacturers</h3>
              <p className="text-gray-600 text-sm">
                Leading steel companies utilizing DRI, SMS, and rolling mill technologies
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Zap className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Power Plants</h3>
              <p className="text-gray-600 text-sm">
                Thermal power generation facilities requiring high-performance refractory solutions
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Settings className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Pellet Plants</h3>
              <p className="text-gray-600 text-sm">
                Iron ore pelletizing facilities needing specialized high-temperature applications
              </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Cog className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Industrial Furnaces</h3>
              <p className="text-gray-600 text-sm">
                Various industrial furnace operations across multiple manufacturing sectors
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Client Statistics</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Market Presence</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">54</div>
              <h3 className="text-xl font-bold mb-2">Potential Clients in Raipur</h3>
              <p className="text-gray-600">
                Strong market presence in the Raipur industrial corridor with significant growth opportunities
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">125</div>
              <h3 className="text-xl font-bold mb-2">Crores Annual Turnover</h3>
              <p className="text-gray-600">
                Demonstrating strong client relationships and successful project delivery across industries
              </p>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-orange-600 mb-2">3-5</div>
              <h3 className="text-xl font-bold mb-2">Years Maintenance Cycle</h3>
              <p className="text-gray-600">
                Long-term client relationships with extended maintenance cycles demonstrating product reliability
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Growing Client Base</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Discover how our refractory solutions can optimize your industrial operations and reduce operational costs.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100" asChild>
            <Link href="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-5 w-5" />
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
