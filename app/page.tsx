"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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

const translations = {
  en: {
    // Navigation
    space: "Space",
    community: "Community", 
    programs: "Programs",
    projects: "Projects",
    joinUs: "Join us",
    contactUs: "Contact Us",
    bookRoom: "BOOK A ROOM",
    
    // Hero
    heroTitle: "NOMADX Life",
    heroSubtitle: "Work • Play • Live • Learn",
    heroDescription: "A communal space platform where digital nomads work, play, learn, and live together. Experience mobility, autonomy, and sustainability in Busan, Korea.",
    viewSpaces: "VIEW OUR SPACES",
    
    // Hub
    hubTitle: "WE ARE A NOMAD HUB BASED IN BUSAN, KOREA",
    hubLocation: "📍 Haeundae area.",
    hubDescription: "A coliving, coworking, fitness, creative, community.",
    
    // Cards
    liveTitle: "LIVE",
    liveDescription: "Coliving / Coworking hostel for digital nomads seeking Community and comfort",
    liveButton: "Book Your Stay",
    workTitle: "WORK", 
    workDescription: "Coworking lounge & office spaces designed for productivity and collaboration",
    workButton: "View Co-Working Spaces",
    gymTitle: "GYM",
    gymDescription: "Smart fitness with immersive workouts and personalized training programs", 
    gymButton: "Start Training",
    
    // Team
    teamTitle: "Team NomadX",
    teamDescription: "Get to know the amazing people who make NOMADX possible. Our diverse team brings passion, creativity, and expertise to create an unforgettable nomad experience.",
    teamCounter: "of",
    teamHint: "Click to meet the team",
    
    // About
    aboutTitle: "ABOUT US",
    aboutDescription1: "Welcome to NOMADX, the premier destination for digital nomads in Busan, Korea. We're more than just a space – we're a thriving community where remote workers, entrepreneurs, and creatives come together to live, work, and grow.",
    aboutDescription2: "Our mission is to create an ecosystem that supports the nomadic lifestyle through thoughtfully designed spaces, engaging programs, and meaningful connections.",
    learnMore: "Learn More",
    
    // Navigation hints
    clickArrows: "Click arrows or dots to browse spaces"
  },
  ko: {
    // Navigation
    space: "공간",
    community: "커뮤니티",
    programs: "프로그램", 
    projects: "프로젝트",
    joinUs: "참여하기",
    contactUs: "연락처",
    bookRoom: "객실 예약",
    
    // Hero
    heroTitle: "NOMADX 라이프",
    heroSubtitle: "일하고 • 놀고 • 살고 • 배우고",
    heroDescription: "디지털 노마드들이 함께 일하고, 놀고, 배우고, 생활하는 공동 공간 플랫폼입니다. 부산, 한국에서 이동성, 자율성, 지속가능성을 경험하세요.",
    viewSpaces: "공간 둘러보기",
    
    // Hub
    hubTitle: "우리는 부산, 한국에 기반한 노마드 허브입니다",
    hubLocation: "📍 해운대 지역.",
    hubDescription: "코리빙, 코워킹, 피트니스, 크리에이티브, 커뮤니티.",
    
    // Cards
    liveTitle: "라이브",
    liveDescription: "커뮤니티와 편안함을 추구하는 디지털 노마드를 위한 코리빙 / 코워킹 호스텔",
    liveButton: "숙박 예약하기",
    workTitle: "워크",
    workDescription: "생산성과 협업을 위해 설계된 코워킹 라운지 & 오피스 공간",
    workButton: "코워킹 공간 보기",
    gymTitle: "짐",
    gymDescription: "몰입형 운동과 개인 맞춤 트레이닝 프로그램을 제공하는 스마트 피트니스",
    gymButton: "트레이닝 시작하기",
    
    // Team
    teamTitle: "Team NomadX",
    teamDescription: "NOMADX를 가능하게 하는 놀라운 사람들을 알아보세요. 우리의 다양한 팀은 잊을 수 없는 노마드 경험을 만들기 위해 열정, 창의성, 전문성을 제공합니다.",
    teamCounter: "중",
    teamHint: "팀을 만나려면 클릭하세요",
    
    // About
    aboutTitle: "회사 소개",
    aboutDescription1: "부산, 한국의 프리미어 디지털 노마드 목적지인 NOMADX에 오신 것을 환영합니다. 우리는 단순한 공간 그 이상입니다. 원격 근무자, 기업가, 크리에이터들이 함께 살고, 일하고, 성장하는 번영하는 커뮤니티입니다.",
    aboutDescription2: "우리의 사명은 신중하게 설계된 공간, 매력적인 프로그램, 의미 있는 연결을 통해 노마드 라이프스타일을 지원하는 생태계를 만드는 것입니다.",
    learnMore: "더 알아보기",
    
    // Navigation hints
    clickArrows: "화살표나 점을 클릭하여 공간을 탐색하세요"
  }
}

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  const t = translations[selectedLanguage.code as keyof typeof translations]
  
  const cards = [
    {
      id: 0,
      number: "01",
      title: t.liveTitle,
      description: t.liveDescription,
      color: "#1DB584",
      link: "/live",
      buttonText: t.liveButton
    },
    {
      id: 1,
      number: "02", 
      title: t.workTitle,
      description: t.workDescription,
      color: "#FF6B6B",
      link: "http://nomadwork.co.kr",
      buttonText: t.workButton
    },
    {
      id: 2,
      number: "03",
      title: t.gymTitle, 
      description: t.gymDescription,
      color: "#A855F7",
      link: "https://gym.nomadx.life",
      buttonText: t.gymButton
    }
  ]

  const teamMembers = [
    { name: "Aaliyah", role: "SNS Lead • Web Design Lead • Marketing Coordinator", image: "/team/Aaliyah.jpeg" },
    { name: "Brandon", role: "YouTube Producing Lead", image: "/team/Brandon.jpeg" },
    { name: "Cody", role: "YouTube Producing Coordinator", image: "/team/Cody.jpeg" },
    { name: "Ingrid", role: "Operation Lead", image: "/team/Ingrid.jpeg" },
    { name: "Karla", role: "YouTube Editing Lead", image: "/team/Karla.jpeg" },
    { name: "Mathias", role: "YouTube Editing Coordinator", image: "/team/Mathias.jpeg" },
    { name: "Pablo", role: "AI Automation Coordinator", image: "/team/Pablo.jpeg" },
    { name: "Rui", role: "Tech & AI Coordinator", image: "/team/Rui.jpeg" },
    { name: "Sage", role: "Ecommerce Design Lead", image: "/team/Sage.jpeg" },
    { name: "Seong", role: "Business Strategy • CEO", image: "/team/Seong.jpeg" },
    { name: "Tania", role: "YouTube Producing Coordinator", image: "/team/Tania.jpeg" },
    { name: "Vaina", role: "Event Outdoors Lead", image: "/team/Vaina.jpeg" }
  ]

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % cards.length)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + cards.length) % cards.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextTeamSlide = () => {
    setCurrentTeamSlide(prev => (prev + 1) % teamMembers.length)
  }

  const prevTeamSlide = () => {
    setCurrentTeamSlide(prev => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  const goToTeamSlide = (index: number) => {
    setCurrentTeamSlide(index)
  }

  // Close mobile menu when clicking outside or pressing Escape
  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black z-50">
        <div className="px-4 sm:px-8 lg:px-16">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <Link href="/" className="flex items-center">
              <span className="text-lg sm:text-xl font-black text-white tracking-wider">NOMADX</span>
            </Link>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#space" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.space}
              </Link>
              <Link href="#community" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.community}
              </Link>
              <Link href="#programs" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.programs}
              </Link>
              <Link href="#join" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.joinUs}
              </Link>
              <Link href="#projects" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.projects}
              </Link>
              <Link href="#contact" className="text-white hover:opacity-80 transition-opacity font-medium">
                {t.contactUs}
              </Link>
            </div>
            
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-white/10 rounded-full">
                    <span className="text-sm font-black text-white tracking-tight mr-1">
                      {selectedLanguage.code.toUpperCase()}
                    </span>
                    <ChevronDown className="h-3 w-3 text-white" />
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
              
              <Link href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" target="_blank" className="hidden sm:block">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-4 sm:px-6 py-2 font-semibold text-sm sm:text-base">
                  {t.bookRoom}
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <Link 
                href="#space" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.space}
              </Link>
              <Link 
                href="#community" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.community}
              </Link>
              <Link 
                href="#programs" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.programs}
              </Link>
              <Link 
                href="#join" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.joinUs}
              </Link>
              <Link 
                href="#projects" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.projects}
              </Link>
              <Link 
                href="#contact" 
                className="block text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.contactUs}
              </Link>
              <Link 
                href="https://us2.cloudbeds.com/en/reservation/RW1b6i?currency=krw" 
                target="_blank"
                className="block sm:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-full py-3 font-semibold">
                  {t.bookRoom}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 sm:pt-20 overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(135deg, #7C3AED 0%, #2563EB 30%, #0891B2 70%, #065F46 100%)'
          }}
        />
        
        <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-8 sm:py-0">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white mb-4 sm:mb-6">
                {t.heroTitle}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 sm:mb-8 font-light">
                {t.heroSubtitle}
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-white/80 mb-6 sm:mb-10 leading-relaxed">
                {t.heroDescription}
              </p>
              <Link href="#space">
                <Button className="bg-white text-black hover:bg-gray-100 rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold inline-flex items-center group w-full sm:w-auto justify-center">
                  {t.viewSpaces}
                  <div className="ml-2 bg-black text-white rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Button>
              </Link>
            </div>
            
            <div className="flex justify-center order-1 lg:order-2">
              <div className="relative">
                <div 
                  className="w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(90deg, #7C3AED 0%, #2563EB 25%, #0891B2 50%, #10B981 75%, #F59E0B 100%)',
                    padding: '4px'
                  }}
                >
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center p-12 sm:p-20">
                    <Image
                      src="/nomadx-emblem.jpg"
                      alt="NOMADX Emblem"
                      width={220}
                      height={220}
                      className="w-full h-full object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hub Section */}
      <section id="space" className="py-16 sm:py-20 lg:py-32">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {t.hubTitle}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-3 sm:mb-4">
                {t.hubLocation}
              </p>
              <p className="text-lg sm:text-xl text-gray-600">
                {t.hubDescription}
              </p>
            </div>
            
            <div className="relative max-w-lg mx-auto">
              {/* Carousel Container */}
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {cards.map((card, index) => (
                    <Card 
                      key={card.id}
                      className="w-full flex-shrink-0 p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl" 
                      style={{ backgroundColor: card.color }}
                    >
                      <div className="text-white">
                        <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 sm:mb-4 opacity-20">{card.number}</div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">{card.title}</h3>
                        <p className="text-base sm:text-lg md:text-xl mb-4 sm:mb-6 opacity-90 leading-relaxed">
                          {card.description}
                        </p>
                        <Link href={card.link} target={card.link.startsWith('http') ? '_blank' : undefined}>
                          <Button 
                            className="bg-white hover:bg-gray-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 font-semibold inline-flex items-center group text-sm sm:text-base w-full sm:w-auto justify-center"
                            style={{ color: card.color }}
                          >
                            {card.buttonText}
                            <div 
                              className="ml-2 rounded-full p-1 group-hover:translate-x-1 transition-transform"
                              style={{ backgroundColor: card.color, color: 'white' }}
                            >
                              <ArrowRight className="h-3 sm:h-4 w-3 sm:w-4" />
                            </div>
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
              </button>

              {/* Dot Navigation */}
              <div className="flex justify-center mt-4 sm:mt-6 space-x-2 sm:space-x-3">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-gray-800 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              {/* Navigation hint */}
              <div className="flex justify-center mt-3 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-500">{t.clickArrows}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-8">
                {t.aboutTitle}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                {t.aboutDescription1}
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                {t.aboutDescription2}
              </p>
              <Link href="/join">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold inline-flex items-center group w-full sm:w-auto justify-center">
                  {t.learnMore}
                  <div className="ml-2 bg-white text-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Button>
              </Link>
            </div>
            
            <div className="relative h-64 sm:h-80 lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/nomad-work-interior.jpeg"
                alt="NOMADX Interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="community" className="py-16 sm:py-20 lg:py-32">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <Card className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#1DB584' }}>
              <div className="text-white">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 opacity-20">01</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Events &<br />Gatherings</h3>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Weekly meetups, workshops, and social events
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#FF6B6B' }}>
              <div className="text-white">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 opacity-20">02</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Online<br />Community</h3>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Connect with nomads worldwide 24/7
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#A855F7' }}>
              <div className="text-white">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 opacity-20">03</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Meet the<br />Crew</h3>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Our friendly team is here to help
                </p>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl" style={{ backgroundColor: '#FFD93D' }}>
              <div className="text-gray-900">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3 sm:mb-4 opacity-20">04</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Stay-for-Work<br />Program</h3>
                <p className="text-sm sm:text-base lg:text-lg opacity-90">
                  Long-term stays with special perks
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-8 sm:mb-12 lg:mb-16">
            NOMADX Projects
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX TV</h3>
              <p className="text-sm sm:text-base text-gray-600">
                YouTube channel featuring nomad life stories and interviews
              </p>
            </div>
            
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX TOUR</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Adventure experiences curated for digital nomads
              </p>
            </div>
            
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX CAMP</h3>
              <p className="text-sm sm:text-base text-gray-600">
                All-in-one self-development bootcamp
              </p>
            </div>
            
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX FITNESS</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Immersive group workouts and personalized training
              </p>
            </div>
            
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX ACCELERATOR</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Startup program for high-potential teams
              </p>
            </div>
            
            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">NOMADX EVENT</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Large-scale festivals and competitions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 sm:py-20 lg:py-32" style={{ backgroundColor: '#FFD93D' }}>
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join the NOMADX movement
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-800 mb-6 sm:mb-10 max-w-3xl mx-auto px-4">
            Become part of our global community and start your journey today
          </p>
          <Link href="/join">
            <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-semibold inline-flex items-center group w-auto">
              Apply here
              <div className="ml-2 sm:ml-3 bg-white text-black rounded-full p-1 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="h-4 sm:h-5 w-4 sm:w-5" />
              </div>
            </Button>
          </Link>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              {t.teamTitle}
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              {t.teamDescription}
            </p>
          </div>

          <div className="relative max-w-2xl mx-auto">
            {/* Team Carousel Container */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTeamSlide * 100}%)` }}
              >
                {teamMembers.map((member, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 px-8 sm:px-0"
                  >
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="flex-1 max-w-sm text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
                        {member.name}
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTeamSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
            </button>
            
            <button
              onClick={nextTeamSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight className="h-5 sm:h-6 w-5 sm:w-6 text-gray-800" />
            </button>

            {/* Dot Navigation */}
            <div className="flex justify-center mt-4 sm:mt-6 space-x-2 flex-wrap">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTeamSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTeamSlide 
                      ? 'bg-gray-800 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
            
            {/* Navigation hint */}
            <div className="flex justify-center mt-3 sm:mt-4">
              <p className="text-xs sm:text-sm text-gray-500">
                {currentTeamSlide + 1} {t.teamCounter} {teamMembers.length} • {t.teamHint}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-12 sm:py-16">
        <div className="px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6">NOMADX</h3>
              <div>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base">Join our newsletter</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 mb-2 text-sm sm:text-base"
                />
                <Button className="w-full bg-white text-black hover:bg-gray-100 rounded-lg py-2 font-semibold text-sm sm:text-base">
                  Subscribe
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#space" className="hover:opacity-80 transition-opacity">Space</Link></li>
                <li><Link href="#community" className="hover:opacity-80 transition-opacity">Community</Link></li>
                <li><Link href="/programs" className="hover:opacity-80 transition-opacity">Programs</Link></li>
                <li><Link href="#projects" className="hover:opacity-80 transition-opacity">Projects</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Social</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="hover:opacity-80 transition-opacity">Instagram</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition-opacity">YouTube</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition-opacity">LinkedIn</Link></li>
                <li><Link href="#" className="hover:opacity-80 transition-opacity">Twitter</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <p className="mb-2 text-sm sm:text-base">nomadx@nomadx.life</p>
              <p className="mb-2 text-sm sm:text-base">13f-04, 48 centum jungang-ro</p>
              <p className="text-sm sm:text-base">haeundae-gu, busan, korea 48059</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center">
            <p className="text-xs sm:text-sm">&copy; 2024 NOMADX. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}