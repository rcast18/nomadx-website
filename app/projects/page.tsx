"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Camera, Mountain, Zap, Dumbbell, Briefcase, Coffee, Calendar, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸", country: "USA" },
  { code: "ko", name: "한국어", flag: "🇰🇷", country: "Korea" },
  { code: "es", name: "Español", flag: "🇲🇽", country: "Mexico" },
  { code: "fr", name: "Français", flag: "🇫🇷", country: "France" },
  { code: "de", name: "Deutsch", flag: "🇩🇪", country: "Germany" },
  { code: "ja", name: "日本語", flag: "🇯🇵", country: "Japan" },
  { code: "zh", name: "中文", flag: "🇨🇳", country: "China" },
]

export default function ProjectsPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
    console.log(`Translating to ${language.name} (${language.code})`)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 tracking-tight">NOMAD</span>
              <Image src="/nomadx-logo.png" alt="X Logo" width={24} height={24} />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#spaces"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                spaces →
              </Link>
              <Link
                href="/#community"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                community →
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                programs →
              </Link>
              <Link href="/projects" className="text-blue-600 font-medium tracking-tight">
                projects →
              </Link>
              <Link
                href="/join"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                join us →
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-gray-100 rounded-full">
                    <span className="text-lg mr-1">{selectedLanguage.flag}</span>
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2" align="end">
                  <div className="space-y-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className="w-full flex items-center space-x-3 px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <span className="text-lg">{language.flag}</span>
                        <div className="flex-1 text-left">
                          <div className="font-medium text-gray-900">{language.name}</div>
                          <div className="text-xs text-gray-500">{language.country}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight">
                <Link href="/join">get started →</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">our projects</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
            building the nomad
            <span className="block text-blue-600">ecosystem</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
            from content creation to startup acceleration, we're creating opportunities for digital nomads worldwide.
            explore our innovative projects that connect, inspire, and empower the global nomad community.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD TV content creation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Camera className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad tv →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  youtube channel featuring nomad life stories, interviews, challenges, and original content — all
                  filmed in busan and at nomad live.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  watch on youtube →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD TOUR adventures"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Mountain className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad tour →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  adventure experiences curated for digital nomads — from biking across jeju to mountain hikes, diving
                  cruises, ski marathons, and horse riding in mongolia.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  explore tours →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD CAMP bootcamp"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad camp →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  all-in-one self-development bootcamp combining fitness, english, work skills, and entrepreneurship —
                  designed for modern nomads who want to grow fast and live fully.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  join bootcamp →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD FITNESS workouts"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Dumbbell className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad fitness →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  immersive group workouts via large studio screens and personalized training through the nomadx app.
                  10+ fitness categories with 50–100 pre-recorded programs for all levels.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  start training →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD ACCELERATOR startups"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad accelerator →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  startup program designed to support high-potential teams — offering mentorship, resources, and a
                  global community, inspired by models like y-combinator.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  apply now →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD EVENT festivals"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad event →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  large-scale event planning and commercialization — from global festivals to startup competitions that
                  bring communities and creators together.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  upcoming events →
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-64">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="NOMAD GOODS travel essentials"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Coffee className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">nomad goods →</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight mb-4">
                  smart, durable travel essentials — designed for digital nomads and sold through our global e-commerce
                  platform.
                </CardDescription>
                <Button variant="outline" size="sm" className="rounded-full font-normal tracking-tight w-fit">
                  shop now →
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tight">
            ready to get involved?
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-8 font-normal leading-relaxed tracking-tight">
            join our community and be part of the projects that are shaping the future of digital nomadism.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight">
              <Link href="/join">join our community →</Link>
            </Button>
            <Button variant="outline" className="rounded-full font-normal tracking-tight">
              <Link href="/#community">learn more →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">NOMAD</span>
                <Image src="/nomadx-logo.png" alt="X Logo" width={24} height={24} />
              </div>
              <p className="text-gray-400 font-normal leading-relaxed tracking-tight">
                communal space platform for digital nomads in busan, korea.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">spaces</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    nomad live →
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    nomad work →
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    nomad gym →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors font-normal tracking-tight">
                    projects →
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors font-normal tracking-tight">
                    programs →
                  </Link>
                </li>
                <li>
                  <Link href="/festival" className="hover:text-white transition-colors font-normal tracking-tight">
                    festival →
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="hover:text-white transition-colors font-normal tracking-tight">
                    join us →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">contact</h3>
              <div className="space-y-2 text-gray-400 font-normal leading-relaxed tracking-tight">
                <p>13f-04, 48 centum jungang-ro</p>
                <p>haeundae-gu, busan, korea 48059</p>
                <p>nomadx@nomadx.life</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-normal tracking-tight">&copy; 2024 nomadx. all rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
