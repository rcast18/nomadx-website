"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Wifi, Shield, Users, Home, Coffee, ChevronLeft, ChevronRight, Check } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const roomTypes = [
  {
    id: 1,
    name: "Dorm Female",
    description: "Shared dormitory for female guests with wooden bunk bed capsules",
    features: ["Built-in storage", "Privacy features", "Shared bathroom", "Climate control"],
    capacity: "1 Person",
    bed: "Single Bed",
    price: "₩35,000/night",
    image: "/rooms/dorm.jpeg"
  },
  {
    id: 2,
    name: "Dorm Male",
    description: "Shared dormitory for male guests with wooden bunk bed capsules",
    features: ["Built-in storage", "Privacy features", "Shared bathroom", "Climate control"],
    capacity: "1 Person",
    bed: "Single Bed",
    price: "₩35,000/night",
    image: "/rooms/dorm.jpeg"
  },
  {
    id: 3,
    name: "Capsule Female",
    description: "Modern pod-style accommodation for female guests",
    features: ["Built-in shelving", "Privacy curtains", "Personal light", "Power outlets"],
    capacity: "1 Person",
    bed: "Super Single",
    price: "₩45,000/night",
    image: "/rooms/capsule.jpeg"
  },
  {
    id: 4,
    name: "Capsule Male",
    description: "Modern pod-style accommodation for male guests",
    features: ["Built-in shelving", "Privacy curtains", "Personal light", "Power outlets"],
    capacity: "1 Person",
    bed: "Super Single",
    price: "₩45,000/night",
    image: "/rooms/capsule.jpeg"
  },
  {
    id: 5,
    name: "Private Double",
    description: "Spacious private room with king-size loft bed",
    features: ["Dedicated workspace", "Private storage", "City view", "Air conditioning"],
    capacity: "1-2 People",
    bed: "King Bed",
    price: "₩120,000/night",
    image: "/rooms/double-private.jpeg"
  },
  {
    id: 6,
    name: "Private Single",
    description: "Private room for solo travelers with personal workspace",
    features: ["Workspace area", "Private storage", "Natural light", "Air conditioning"],
    capacity: "1 Person",
    bed: "Super Single",
    price: "₩85,000/night",
    image: "/rooms/single.jpeg"
  }
]

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Reliable 500Mbps+ internet perfect for remote work",
    color: "#1DB584"
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description: "Secure keycard access and round-the-clock monitoring",
    color: "#FF6B6B"
  },
  {
    icon: Coffee,
    title: "Shared Kitchen",
    description: "Fully equipped kitchen with modern appliances",
    color: "#A855F7"
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Weekly dinners, workshops, and social gatherings",
    color: "#FFD93D"
  },
  {
    icon: Home,
    title: "Common Areas",
    description: "Comfortable lounges and social spaces",
    color: "#0891B2"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    description: "Walking distance to beach and public transport",
    color: "#065F46"
  }
]

const galleryImages = [
  { src: "/gallery/common-area.jpeg", alt: "Common Area", caption: "Spacious common area for work and relaxation" },
  { src: "/gallery/conference-room.webp", alt: "Conference Room", caption: "Modern conference room for meetings" },
  { src: "/gallery/kitchen-dining.png", alt: "Kitchen & Dining", caption: "Fully equipped shared kitchen and dining space" },
  { src: "/gallery/loft-bedroom.jpeg", alt: "Loft Bedroom", caption: "Comfortable loft-style bedroom" }
]

export default function FacilitiesPage() {
  const [currentRoom, setCurrentRoom] = useState(0)
  const [currentGallery, setCurrentGallery] = useState(0)

  const nextRoom = () => {
    setCurrentRoom((prev) => (prev + 1) % roomTypes.length)
  }

  const prevRoom = () => {
    setCurrentRoom((prev) => (prev - 1 + roomTypes.length) % roomTypes.length)
  }

  const nextGallery = () => {
    setCurrentGallery((prev) => (prev + 1) % galleryImages.length)
  }

  const prevGallery = () => {
    setCurrentGallery((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black z-50">
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-black tracking-wider">
                <span className="text-white">NOMAD</span><span style={{ color: '#755B05' }}>X</span>
              </span>
            </Link>
            
            <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base">
                BOOK A ROOM
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-16 sm:pt-20">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #1DB584 0%, #0891B2 50%, #065F46 100%)'
          }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 px-4 py-1 text-sm">
              NOMADX LIVE FACILITIES
            </Badge>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
              Your Home in Busan
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience world-class facilities designed for digital nomads, featuring modern amenities, comfortable accommodations, and vibrant community spaces
            </p>
            <Link href="#location">
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold inline-flex items-center group">
                Explore Our Facilities
                <div className="ml-2 bg-black text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 lg:py-32">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Prime Location in Haeundae
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">Address</p>
                    <p className="text-gray-600">13F-04, 48 Centum Jungang-ro, Haeundae-gu, Busan, Korea 48059</p>
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4 border-2 hover:border-emerald-500 transition-colors">
                  <h3 className="font-semibold mb-2">🏖️ Beach Access</h3>
                  <p className="text-sm text-gray-600">5-minute walk to Haeundae Beach</p>
                </Card>
                <Card className="p-4 border-2 hover:border-emerald-500 transition-colors">
                  <h3 className="font-semibold mb-2">🚇 Public Transport</h3>
                  <p className="text-sm text-gray-600">3-minute walk to subway station</p>
                </Card>
                <Card className="p-4 border-2 hover:border-emerald-500 transition-colors">
                  <h3 className="font-semibold mb-2">🍽️ Restaurants</h3>
                  <p className="text-sm text-gray-600">50+ restaurants within 10 minutes</p>
                </Card>
                <Card className="p-4 border-2 hover:border-emerald-500 transition-colors">
                  <h3 className="font-semibold mb-2">☕ Cafes</h3>
                  <p className="text-sm text-gray-600">20+ cafes perfect for remote work</p>
                </Card>
              </div>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/community-beach-photo.jpeg"
                alt="Haeundae Beach View"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium mb-1">HAEUNDAE DISTRICT</p>
                <p className="text-2xl font-bold">Heart of Busan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              World-Class Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need for a productive and comfortable stay
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {amenities.map((amenity, index) => (
              <Card 
                key={index}
                className="p-8 rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                style={{ borderTop: `4px solid ${amenity.color}` }}
              >
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${amenity.color}20` }}
                >
                  <amenity.icon className="h-7 w-7" style={{ color: amenity.color }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {amenity.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Room Types Carousel */}
      <section className="py-20 lg:py-32">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Accommodation Options
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From budget-friendly dorms to private rooms, find your perfect space
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentRoom * 100}%)` }}
              >
                {roomTypes.map((room, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg">
                      <div className="relative h-[300px] lg:h-[400px]">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      
                      <div className="p-8 lg:p-12">
                        <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
                          {room.capacity}
                        </Badge>
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                          {room.name}
                        </h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                          {room.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          {room.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Check className="h-5 w-5 text-emerald-600" />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <p className="text-sm text-gray-500">Bed Type</p>
                            <p className="font-semibold">{room.bed}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-500">Starting from</p>
                            <p className="text-2xl font-bold text-emerald-600">{room.price}</p>
                          </div>
                        </div>
                        
                        <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
                          <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-full py-3 font-semibold">
                            Book This Room
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <button
              onClick={prevRoom}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextRoom}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {roomTypes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentRoom(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentRoom 
                      ? 'bg-gray-800 scale-150 w-8' 
                      : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Spaces
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our modern facilities and community areas
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGallery * 100}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-full flex-shrink-0 relative">
                    <div className="relative h-[400px] lg:h-[600px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-8 left-8 right-8 text-white">
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">{image.alt}</h3>
                        <p className="text-lg opacity-90">{image.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation */}
            <button
              onClick={prevGallery}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextGallery}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-2 mt-4">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGallery(index)}
                  className={`relative h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentGallery 
                      ? 'ring-2 ring-emerald-500 scale-105' 
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" style={{ backgroundColor: '#1DB584' }}>
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Experience NomadX Live?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Join our vibrant community of digital nomads in the heart of Busan
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank">
              <Button className="bg-white text-emerald-700 hover:bg-gray-100 rounded-full px-10 py-6 text-xl font-semibold inline-flex items-center group">
                Book Your Stay
                <div className="ml-3 bg-emerald-700 text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </Button>
            </Link>
            <Link href="/live">
              <Button 
                variant="outline" 
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-emerald-700 rounded-full px-10 py-6 text-xl font-semibold"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center">
            <h3 className="text-3xl font-black mb-4">
              <span style={{ color: '#755B05' }}>NOMAD</span><span className="text-white">X</span>
            </h3>
            <p className="mb-2">13F-04, 48 Centum Jungang-ro</p>
            <p className="mb-8">Haeundae-gu, Busan, Korea 48059</p>
            <p className="text-sm">&copy; 2024 NOMADX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}