"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "es", name: "Español", flag: "🇲🇽" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
]

export default function FestivalPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
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
              <Link href="/festival" className="text-blue-600 font-medium tracking-tight">
                festival →
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
                    <span className="text-sm font-black text-gray-900 tracking-tight mr-1">
                      {selectedLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDown className="h-3 w-3 text-gray-500" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-24 p-2" align="end">
                  <div className="space-y-1">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language)}
                        className="w-full px-3 py-2 text-sm rounded-lg hover:bg-gray-100 transition-colors text-center"
                      >
                        <span className="font-black text-gray-900 tracking-tight text-sm">
                          {language.code.toUpperCase()}
                        </span>
                      </button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-20 text-center max-w-6xl mx-auto px-4">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 rounded-full font-normal tracking-tight text-lg px-6 py-2">
            coming soon
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            NOMAD<span className="text-cyan-300">X</span>
            <span className="block text-4xl md:text-6xl mt-2">FESTIVAL</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto font-normal leading-relaxed tracking-tight mb-8">
            the ultimate celebration of digital nomad culture, creativity, and community in the heart of busan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full font-normal tracking-tight text-lg px-8 py-3">
              get early access →
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 rounded-full font-normal tracking-tight text-lg px-8 py-3"
            >
              learn more →
            </Button>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-medium text-white mb-4 tracking-tight">be the first to know</h2>
          <p className="text-xl text-purple-100 mb-8 font-normal leading-relaxed tracking-tight">
            join our early access list to get exclusive updates, early bird pricing, and first access to tickets when
            they go live
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 rounded-full font-normal tracking-tight">
              join early access list →
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 rounded-full font-normal tracking-tight"
            >
              follow updates →
            </Button>
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
                  <Link href="/live" className="hover:text-white transition-colors font-normal tracking-tight">
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
