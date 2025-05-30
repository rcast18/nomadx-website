"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Users, Briefcase, Coffee, Globe, Mail, Calendar, ChevronDown } from "lucide-react"

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

export default function JoinPage() {
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
              <span className="text-xl font-black text-gray-900 tracking-tight">NOMAD</span>
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
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                projects →
              </Link>
              <Link href="/join" className="text-blue-600 font-medium tracking-tight">
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
                get started →
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">join us</Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
            ready to start your
            <span className="block text-blue-600">nomad journey?</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight">
            multiple ways to get involved with the nomadx community - from crew membership to partnerships. find the
            perfect way to connect with our global network of digital nomads.
          </p>
        </div>
      </section>

      {/* Join Options */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">become a crew member →</CardTitle>
                <CardDescription className="font-normal tracking-tight mb-6">
                  join our core team and help build the future of nomad communities
                </CardDescription>
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight w-full">
                  apply now →
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">stay-for-work program →</CardTitle>
                <CardDescription className="font-normal tracking-tight mb-6">
                  work while you stay - perfect for digital nomads seeking community
                </CardDescription>
                <Button variant="outline" className="rounded-full font-normal tracking-tight w-full">
                  <Link href="https://forms.office.com/r/CDmvfsX05S" target="_blank">
                    apply here →
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">local volunteer program →</CardTitle>
                <CardDescription className="font-normal tracking-tight mb-6">
                  give back to the community while experiencing nomad life
                </CardDescription>
                <Button variant="outline" className="rounded-full font-normal tracking-tight w-full">
                  <Link href="https://forms.office.com/r/R7jKusxCRi" target="_blank">
                    volunteer →
                  </Link>
                </Button>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">partnership opportunities →</CardTitle>
                <CardDescription className="font-normal tracking-tight mb-6">
                  collaborate, partner, or invest in the nomadx ecosystem
                </CardDescription>
                <Button variant="outline" className="rounded-full font-normal tracking-tight w-full">
                  <Link href="https://forms.office.com/r/yHXezNNN3N" target="_blank">
                    partner with us →
                  </Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">get in touch</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
              have questions? want to learn more? reach out to our team and we'll help you find the perfect way to join
              the nomadx community.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight">email us →</CardTitle>
                <CardDescription className="font-normal tracking-tight">nomadx@nomadx.life</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight">visit us →</CardTitle>
                <CardDescription className="font-normal tracking-tight">busan, korea</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-2xl">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight">schedule a call →</CardTitle>
                <CardDescription className="font-normal tracking-tight">let's chat about opportunities</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-medium text-gray-900 mb-4 tracking-tight">our location</h3>
              <div className="text-gray-600 font-normal leading-relaxed tracking-tight">
                <p className="mb-2">nomadx headquarters</p>
                <p className="mb-2">13f-04, 48 centum jungang-ro</p>
                <p className="mb-4">haeundae-gu, busan, korea 48059</p>
                <Button variant="outline" className="rounded-full font-normal tracking-tight">
                  get directions →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 rounded-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-1 mb-4">
                <span className="text-xl font-black text-white tracking-tight">NOMAD</span>
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
