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
} from "lucide-react"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function HomePage() {
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
      <section className="relative bg-gradient-to-br from-orange-50 to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-orange-100 text-orange-800">Industry Expert</Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Saving Energy Through
                <span className="text-orange-600"> Refractories</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Passary Refractories is an industry expert specializing in castable insulation materials, designed for
                furnaces used by steel manufacturers operating through the Direct Reduced Iron (DRI) route. Our
                refractory solutions are tailored to meet specific industrial needs of our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">Company Figures</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">125</div>
                    <div className="text-sm opacity-90">Crores Turnover</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">250</div>
                    <div className="text-sm opacity-90">Staff Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">7</div>
                    <div className="text-sm opacity-90">Days Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">54</div>
                    <div className="text-sm opacity-90">Potential Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Who We Are</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Trusted Experts of Refractory Solutions</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We are trusted experts of Refractory solutions having global presence. To contribute to the nation's
              growth by being a strong backbone to the steel industry through total refractory management, working in
              support of the Make in India movement.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Our Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To contribute to the nation's growth by being a strong backbone to the steel industry through total
                  refractory management, working in support of the Make in India movement.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To be the leading provider of innovative refractory solutions, setting industry standards for quality,
                  sustainability, and customer satisfaction across global markets.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Providing comprehensive refractory solutions with expert insights and end-to-end services tailored to
                  meet specific industrial needs of our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Industry Focus</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Expertise</h2>
            <p className="text-xl text-gray-600">Providing specialized solutions across multiple industrial sectors</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
                <Factory className="h-12 w-12 mb-4" />
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
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/clients">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 text-white">
                <Zap className="h-12 w-12 mb-4" />
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
                <Button className="w-full mt-4" variant="outline" asChild>
                  <Link href="/clients">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Offering Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Offering</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Providing Every Solution</h2>
            <p className="text-xl text-gray-600">Rolling mills, Pellet plants, Steel melting, Power plants</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Shield className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Refractory Products</h3>
              <p className="text-gray-600 mb-4">
                High-grade castable insulation materials and specialized refractory products for various industrial
                applications.
              </p>
              <Button variant="outline" asChild>
                <Link href="/products-services">View Products</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Engineering Services</h3>
              <p className="text-gray-600 mb-4">
                Complete project management from design to installation, maintenance, and expert supervision worldwide.
              </p>
              <Button variant="outline" asChild>
                <Link href="/products-services">View Services</Link>
              </Button>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Total Management</h3>
              <p className="text-gray-600 mb-4">
                Complete refractory management solutions with long-term partnerships for win-win customer relationships.
              </p>
              <Button variant="outline" asChild>
                <Link href="/products-services">Learn More</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Factory Outlets & Performance</h2>
            <p className="text-xl opacity-90">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">125</div>
                <div className="text-sm opacity-90">Crores Previous Year Turnover</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6">
                <Users className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">250</div>
                <div className="text-sm opacity-90">Labour Staff</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">7</div>
                <div className="text-sm opacity-90">Days from Order to Delivery</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6">
                <DollarSign className="h-12 w-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">1.5-2</div>
                <div className="text-sm opacity-90">Crores Installation Cost</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">3-5 Years</div>
              <div className="text-sm opacity-90">Maintenance Frequency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">54</div>
              <div className="text-sm opacity-90">Potential Clients in Raipur</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">50</div>
              <div className="text-sm opacity-90">Managers</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg opacity-90 mb-2">Maintenance Cost: Approximately 1/3 of installation cost</p>
            <p className="text-lg opacity-90">60L Labour Staff across all locations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover how our refractory solutions can optimize your operations and reduce energy costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn About Our Company</Link>
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
