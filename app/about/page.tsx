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
} from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    { name: "Pradeep Passary", initials: "PP" },
    { name: "Kavit Passary", initials: "KP" },
    { name: "Bitthal Passary", initials: "BP" },
    { name: "Jaidhish Passary", initials: "JP" }
  ]

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
            <Badge className="mb-4 bg-orange-100 text-orange-800">About Us</Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Passary Refractories</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Passary Refractories is an industry expert specializing in castable insulation materials, designed for
              furnaces used by steel manufacturers operating through the Direct Reduced Iron (DRI) route. Our refractory
              solutions are tailored to meet specific industrial needs of our clients. We provide expert solutions &
              industry insights along with end to end refractory solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Purpose */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Purpose</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To contribute to the nation's growth by being a strong backbone to the steel industry through total
                  refractory management, working in support of the Make in India movement. We aim to provide innovative
                  solutions that enhance operational efficiency and sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To be the leading provider of innovative refractory solutions globally, setting industry standards for
                  quality, sustainability, and customer satisfaction. We envision a future where our solutions drive
                  energy efficiency and environmental responsibility.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Providing comprehensive refractory solutions with expert insights and end-to-end services tailored to
                  meet specific industrial needs of our clients. We are committed to delivering excellence through
                  innovation and continuous improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Why Choose Us</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Makes Us Different</h2>
            <p className="text-xl text-gray-600">
              Six key reasons why we're the preferred choice for refractory solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">01. Energy Cost Minimizers</h3>
                  <p className="text-gray-600 text-sm">
                    Remarkable track record in reducing energy consumption through innovative refractory solutions that
                    optimize thermal efficiency.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">02. Remarkable Track Record</h3>
                  <p className="text-gray-600 text-sm">
                    Proven success across multiple industries with extensive experience in complex refractory projects
                    and installations.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">03. One-Stop-Shop</h3>
                  <p className="text-gray-600 text-sm">
                    Complete refractory solutions under one roof - from design and supply to installation and
                    maintenance services.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">04. 24 Months Guarantee</h3>
                  <p className="text-gray-600 text-sm">
                    Extended warranty on all our products and services, demonstrating our confidence in quality and
                    reliability.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">05. Strategically Situated</h3>
                  <p className="text-gray-600 text-sm">
                    Multiple locations across India for better service coverage and faster response to customer needs.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                  <Target className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">06. Narrowed Down Focus</h3>
                  <p className="text-gray-600 text-sm">
                    Specialized expertise in refractory solutions with deep industry knowledge and focused service
                    delivery.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Journey</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Company Timeline</h2>
            <p className="text-xl text-gray-600">Decades of growth and innovation in refractory solutions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex items-start space-x-8">
                <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1980
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Where it all began</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The foundation of our company was laid with a vision to serve the refractory industry with
                    innovative solutions and exceptional quality. Started with a commitment to excellence and customer
                    satisfaction that continues to drive us today.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2002
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Establishment</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Considering the growing demand in service of refractory at customers' end in early 2000, we started
                    our dedicated service activities from 2002 onwards. Till now, we have developed our expertise in
                    different industries and products to give continuous support to customer troubles during operation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-8">
                <div className="bg-orange-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2016
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-2xl font-bold mb-3">Achievement No. 1</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Reached significant milestones in project execution and service delivery, establishing ourselves as
                    a trusted partner in the refractory industry. Expanded our capabilities and strengthened our
                    position in the market through continuous innovation and customer focus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Culture</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Drives Us</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our culture is built on the foundation of excellence, innovation, and customer-centricity. We believe in
                fostering an environment where creativity thrives, and every team member is empowered to contribute to
                our collective success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We are committed to continuous learning and improvement, staying at the forefront of refractory
                technology and industry best practices. Our collaborative approach ensures that we deliver solutions
                that not only meet but exceed our clients' expectations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Integrity, reliability, and sustainability are the core values that guide our operations and
                decision-making processes. We take pride in being a responsible corporate citizen and contributing
                positively to the communities we serve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">Meet the experts driving our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <Card key={i} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl font-bold">
                  {member.initials}
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-orange-600 font-medium mb-4">Managing Director</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Leading the company with extensive experience in refractory solutions and strategic business
                  development. Committed to driving innovation and excellence in all aspects of our operations.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Certifications</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Assurance</h2>
            <p className="text-xl text-gray-600">Our commitment to quality is validated by industry certifications</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="text-center p-8 hover:shadow-lg transition-shadow">
                <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Performance Certificate</h3>
                <p className="text-gray-600">
                  Certified for excellence in refractory solutions and service delivery, meeting international quality
                  standards.
                </p>
              </Card>
            ))}
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