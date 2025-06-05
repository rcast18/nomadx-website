"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Wifi, Dumbbell, Coffee, Gamepad2, Music, ChefHat, Tv, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function FacilitiesPage() {
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
      <section className="pt-24 pb-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-black text-gray-900 mb-4">
            Our Facilities - NOMAD<span style={{ color: '#755B05' }}>X</span> Live
          </h1>
          <p className="text-xl text-gray-600">
            Everything you need for work, play, and community living
          </p>
        </div>
      </section>

      {/* Main Facilities Grid */}
      <section className="pb-20 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kitchen */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <ChefHat className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Kitchen</h3>
              <p className="text-gray-600">Fully equipped and free to use</p>
            </Card>

            {/* Cafeteria */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Coffee className="h-8 w-8 text-orange-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Cafeteria</h3>
              <p className="text-gray-600">Breakfast is included, don't miss it!</p>
            </Card>

            {/* Working Spaces */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Wifi className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Working Spaces</h3>
              <p className="text-gray-600">Take a walk around facilities and check it out!</p>
            </Card>

            {/* Game Area */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Gamepad2 className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Game Area</h3>
              <p className="text-gray-600">Pool, darts, and board/card games available</p>
            </Card>

            {/* TV Lounge */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Tv className="h-8 w-8 text-indigo-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">TV Lounge</h3>
              <p className="text-gray-600">4 TV spaces available next to the game area!</p>
            </Card>

            {/* Music Room */}
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Music className="h-8 w-8 text-pink-600 mb-3" />
              <h3 className="text-xl font-bold mb-2">Music Room</h3>
              <p className="text-gray-600">Next to the cafeteria!</p>
            </Card>
          </div>

          {/* Special Facilities */}
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {/* Nomad Gym */}
            <Card className="p-8 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Dumbbell className="h-10 w-10 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-3">Nomad Gym</h3>
                  <p className="text-gray-600 mb-2">2nd floor in this building, use the QR code for access!</p>
                  <div className="space-y-1 text-sm">
                    <p className="font-semibold">Hours:</p>
                    <p>Weekday: 6am - 11pm</p>
                    <p>Weekend: 8am - 11pm</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Rooftop */}
            <Card className="p-8 bg-gray-50 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <svg className="h-10 w-10 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M12 3v18M9 21V9.5a2.5 2.5 0 015 0V21" />
                </svg>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Rooftop</h3>
                  <p className="text-gray-600 mb-2">Accessible from 9am to 5pm!</p>
                  <p className="text-sm">Go to 15th floor and take the stairs till the rooftop</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Important Information</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <Clock className="h-6 w-6 text-gray-600 mb-2" />
              <h3 className="font-bold mb-1">Check-out</h3>
              <p className="text-gray-700">11am</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <Coffee className="h-6 w-6 text-gray-600 mb-2" />
              <h3 className="font-bold mb-1">Breakfast</h3>
              <p className="text-gray-700">8 to 11am</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <svg className="h-6 w-6 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              <h3 className="font-bold mb-1">Laundry</h3>
              <p className="text-gray-700">Self payment machine and self service</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <svg className="h-6 w-6 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="font-bold mb-1">Fridge</h3>
              <p className="text-gray-700">Pay in the reception and label the container</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <svg className="h-6 w-6 text-gray-600 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <h3 className="font-bold mb-1">Bikes</h3>
              <p className="text-gray-700">1st floor outdoor parking lot (right side)<br/>Password: 01225</p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <Users className="h-6 w-6 text-gray-600 mb-2" />
              <h3 className="font-bold mb-1">Guest Group Chat</h3>
              <p className="text-gray-700">WhatsApp QR code available at reception</p>
            </div>
          </div>

          {/* Important Notice */}
          <Card className="mt-8 p-6 bg-red-50 border-red-200">
            <p className="text-red-800 font-semibold text-center">
              ⚠️ Kitchen and TV room are free to use BUT clean after yourself!<br/>
              Fine for not cleaning after yourself: 5,000Won
            </p>
          </Card>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16">
        <div className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Other NOMADX Locations</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Nomadwork Green City</h3>
              <p className="text-gray-600">Coworking space</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-2">Nomadwork Centum City</h3>
              <p className="text-gray-600">Coworking space</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Do you want to work with us?</h2>
          <Link href="https://www.nomadx.life/join">
            <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-4 text-lg font-semibold">
              Join NOMADX Team
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="px-4 sm:px-8 lg:px-16 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-black mb-4">
            <span style={{ color: '#755B05' }}>NOMAD</span><span className="text-white">X</span>
          </h3>
          <p className="text-sm">&copy; 2024 NOMADX. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}