"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import {
  Users,
  Wifi,
  Coffee,
  Utensils,
  Bed,
  Car,
  Shield,
  Clock,
  MapPin,
  ChevronDown,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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

export default function LivePage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const images = [
    "/gallery/conference-room.webp",
    "/gallery/loft-bedroom.jpeg",
    "/gallery/common-area.jpeg",
    "/gallery/kitchen-dining.png",
  ]

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000) // Resume auto-play after 3 seconds
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000) // Resume auto-play after 3 seconds
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 3000) // Resume auto-play after 3 seconds
  }

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, images.length])

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
              <Link
                href="/join"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                join us →
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
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
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight text-sm sm:text-base px-3 sm:px-4">
                <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
                  <span className="hidden sm:inline">book now →</span>
                  <span className="sm:hidden">book →</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-yellow-400">
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
            Live
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto font-normal leading-relaxed tracking-tight px-4">
            NOMAD LIVE coliving where digital nomads come together and live in harmony.
          </p>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800 animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">
                coliving reimagined
              </Badge>
              <h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tight">
                your home away from home in busan
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-normal leading-relaxed tracking-tight">
                NOMAD LIVE offers a unique coliving experience designed specifically for digital nomads. Our
                thoughtfully designed spaces foster community, productivity, and personal growth while providing all the
                comforts you need for extended stays.
              </p>
              <p className="text-base text-gray-600 mb-8 font-normal leading-relaxed tracking-tight">
                Located in the heart of Busan's Haeundae district, you'll have easy access to beaches, coworking spaces,
                restaurants, and the vibrant nomad community that calls this city home.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight">
                <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
                  explore availability →
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative">
                <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl shadow-xl group">
                  {/* Image Container */}
                  <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    <Image
                      src="/gallery/conference-room.webp"
                      alt="NOMAD LIVE conference room"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <Image
                      src="/gallery/loft-bedroom.jpeg"
                      alt="NOMAD LIVE loft bedroom"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <Image
                      src="/gallery/common-area.jpeg"
                      alt="NOMAD LIVE common area"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                    <Image
                      src="/gallery/kitchen-dining.png"
                      alt="NOMAD LIVE kitchen dining"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover flex-shrink-0"
                    />
                  </div>

                  {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
                  <button
                    onClick={goToPrevious}
                    className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 sm:p-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                  >
                    <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                  </button>

                  {/* Dots Indicator */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {[0, 1, 2, 3].map((index) => (
                      <button
                        key={index}
                        onClick={() => goToImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">everything you need to thrive</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
              from fully furnished rooms to community spaces, we've thought of everything to make your stay comfortable
              and productive.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">private rooms →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  fully furnished private bedrooms with comfortable beds, storage, and personal workspace
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">shared kitchen →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  modern, fully equipped kitchen with all appliances and cooking essentials for preparing meals
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Wifi className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">high-speed wifi →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  reliable, fast internet throughout the space perfect for remote work and video calls
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">common areas →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  comfortable lounges and social spaces designed for relaxation and community building
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">24/7 security →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  secure building with keycard access and 24-hour security for peace of mind
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">prime location →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  walking distance to beach, restaurants, cafes, and public transportation
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Room Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-100 text-orange-800 rounded-full font-normal tracking-tight">
              economy comfort
            </Badge>
            <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">explore rooms</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
              experience our modern accommodations designed for comfort, privacy, and community living in the heart of
              busan.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Dorm Female */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/dorm.jpeg"
                  alt="Dorm Female - wooden bunk bed capsules"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (Single)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">dorm female →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  shared dormitory with wooden bunk bed capsules, built-in storage, and privacy features for female
                  guests
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Dorm Male */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/dorm.jpeg"
                  alt="Dorm Male - wooden bunk bed capsules"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (Single)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">dorm male →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  shared dormitory with wooden bunk bed capsules, built-in storage, and privacy features for male guests
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Capsule Female */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/capsule.jpeg"
                  alt="Capsule Female - pod style accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (Super Single)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">capsule female →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  modern pod-style accommodation with built-in storage, shelving, and privacy curtains designed for
                  female guests
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Capsule Male */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/capsule.jpeg"
                  alt="Capsule Male - pod style accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (Super Single)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">capsule male →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  modern pod-style accommodation with built-in storage, shelving, and privacy curtains designed for male
                  guests
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Private Double */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/double-private.jpeg"
                  alt="Private Double - loft style king bed"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (King)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1-2 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">private double →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  spacious private room with king-size loft bed and dedicated workspace area underneath
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Private Single */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48 sm:h-56 lg:h-64">
                <Image
                  src="/rooms/single.jpeg"
                  alt="Private Single - loft style single bed"
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500">1 Bed (SuperSingle)</span>
                  <Users className="h-4 w-4 text-gray-500 ml-2" />
                  <span className="text-sm text-gray-500">1 People</span>
                </div>
                <CardTitle className="font-medium tracking-tight mb-2">private single →</CardTitle>
                <CardDescription className="font-normal tracking-tight">
                  private room with super single loft bed and personal workspace area for solo travelers
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 rounded-full font-normal tracking-tight">
              <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
                view availability & pricing →
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <Image
                src="/community-beach-photo.jpeg"
                alt="NOMAD LIVE community gathering at Busan beach with Gwangan Bridge"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">
                vibrant community
              </Badge>
              <h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tight">
                connect with like-minded nomads
              </h2>
              <p className="text-lg text-gray-600 mb-6 font-normal leading-relaxed tracking-tight">
                Living at NOMAD LIVE means joining a community of ambitious, creative, and adventurous digital nomads
                from around the world. Share experiences, collaborate on projects, and build lasting friendships.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">weekly community dinners</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Coffee className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">coworking sessions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">group adventures & tours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">skill sharing workshops</span>
                </div>
              </div>
              <Button variant="outline" className="rounded-full font-normal tracking-tight">
                <Link href="/join">join our community →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-medium text-white mb-4 tracking-tight">ready to call busan home?</h2>
          <p className="text-xl text-blue-100 mb-8 font-normal leading-relaxed tracking-tight">
            join our community of digital nomads and experience coliving at its finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full font-normal tracking-tight">
              <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
                book your stay →
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full font-normal tracking-tight"
            >
              <Link href="/join">learn more →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
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
