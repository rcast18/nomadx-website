"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Users, Wifi, Dumbbell, Home, Briefcase, Play, Mountain, Zap, Globe, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import AnimatedMountains from "@/components/animated-mountains"

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
    spaces: "spaces →",
    community: "community →",
    programs: "programs →",
    projects: "projects →",
    joinUs: "join us →",
    getStarted: "get started →",

    // Hero
    welcomeTo: "welcome to",
    heroDescription:
      "a communal space platform where digital nomads work, play, learn, and live together. experience mobility, autonomy, and sustainability in busan, korea.",
    exploreSpaces: "explore spaces →",
    joinCommunity: "join community →",

    // Core Values
    coreValues: "our core values",
    mobility: "mobility",
    mobilityDesc: "freedom to work and live anywhere",
    autonomy: "autonomy",
    autonomyDesc: "independence in your lifestyle choices",
    sustainability: "sustainability",
    sustainabilityDesc: "building a better future together",

    // Spaces
    ourSpaces: "our spaces",
    workPlayLearnLive: "work, play, learn, live",
    spacesDescription: "discover our physical spaces designed for the modern digital nomad lifestyle in busan, korea.",
    nomadLive: "nomad live →",
    nomadLiveDesc: "coliving & coworking hostel for digital nomads seeking community and comfort",
    visitLive: "visit live.nomadx.life →",
    nomadWork: "nomad work →",
    nomadWorkDesc: "coworking lounge & office spaces designed for productivity and collaboration",
    visitWork: "visit nomadwork.co.kr →",
    nomadGym: "nomad gym →",
    nomadGymDesc: "smart fitness with immersive workouts and personalized training programs",
    visitGym: "visit gym.nomadx.life →",

    // Community
    joinOurCommunity: "join our community",
    connectWithNomads: "connect with fellow nomads",
    communityDescription:
      "become part of a global community of digital nomads. attend events, join programs, and build lasting connections with like-minded individuals.",
    movieNights: "sunday movie nights →",
    stayForWork: "stay-for-work program →",
    outdoorAdventures: "outdoor adventures →",
    onlinePlatform: "online community platform →",
    explorePrograms: "explore programs →",

    // Footer
    footerDescription: "communal space platform for digital nomads in busan, korea.",
    contact: "contact",
    copyright: "© 2024 nomadx. all rights reserved.",
  },
  ko: {
    // Navigation
    spaces: "공간 →",
    community: "커뮤니티 →",
    programs: "프로그램 →",
    projects: "프로젝트 →",
    joinUs: "참여하기 →",
    getStarted: "시작하기 →",

    // Hero
    welcomeTo: "환영합니다",
    heroDescription:
      "디지털 노마드들이 함께 일하고, 놀고, 배우고, 생활하는 공동 공간 플랫폼입니다. 부산, 한국에서 이동성, 자율성, 지속가능성을 경험하세요.",
    exploreSpaces: "공간 둘러보기 →",
    joinCommunity: "커뮤니티 참여 →",

    // Core Values
    coreValues: "우리의 핵심 가치",
    mobility: "이동성",
    mobilityDesc: "어디서든 일하고 살 수 있는 자유",
    autonomy: "자율성",
    autonomyDesc: "라이프스타일 선택의 독립성",
    sustainability: "지속가능성",
    sustainabilityDesc: "함께 더 나은 미래 만들기",

    // Spaces
    ourSpaces: "우리의 공간",
    workPlayLearnLive: "일하고, 놀고, 배우고, 살기",
    spacesDescription: "부산, 한국의 현대 디지털 노마드 라이프스타일을 위해 설계된 물리적 공간을 발견하세요.",
    nomadLive: "노마드 라이브 →",
    nomadLiveDesc: "커뮤니티와 편안함을 추구하는 디지털 노마드를 위한 코리빙 & 코워킹 호스텔",
    visitLive: "live.nomadx.life 방문 →",
    nomadWork: "노마드 워크 →",
    nomadWorkDesc: "생산성과 협업을 위해 설계된 코워킹 라운지 & 오피스 공간",
    visitWork: "nomadwork.co.kr 방문 →",
    nomadGym: "노마드 짐 →",
    nomadGymDesc: "몰입형 운동과 개인 맞춤 트레이닝 프로그램을 제공하는 스마트 피트니스",
    visitGym: "gym.nomadx.life 방문 →",

    // Community
    joinOurCommunity: "우리 커뮤니티에 참여하세요",
    connectWithNomads: "동료 노마드들과 연결하기",
    communityDescription:
      "글로벌 디지털 노마드 커뮤니티의 일원이 되세요. 이벤트에 참석하고, 프로그램에 참여하며, 같은 생각을 가진 사람들과 지속적인 관계를 구축하세요.",
    movieNights: "일요일 영화의 밤 →",
    stayForWork: "체류-업무 프로그램 →",
    outdoorAdventures: "야외 모험 →",
    onlinePlatform: "온라인 커뮤니티 플랫폼 →",
    explorePrograms: "프로그램 둘러보기 →",

    // Footer
    footerDescription: "부산, 한국의 디지털 노마드를 위한 공동 공간 플랫폼.",
    contact: "연락처",
    copyright: "© 2024 nomadx. 모든 권리 보유.",
  },
  es: {
    // Navigation
    spaces: "espacios →",
    community: "comunidad →",
    programs: "programas →",
    projects: "proyectos →",
    joinUs: "únete →",
    getStarted: "comenzar →",

    // Hero
    welcomeTo: "bienvenido a",
    heroDescription:
      "una plataforma de espacios comunitarios donde los nómadas digitales trabajan, juegan, aprenden y viven juntos. experimenta movilidad, autonomía y sostenibilidad en busan, corea.",
    exploreSpaces: "explorar espacios →",
    joinCommunity: "unirse a la comunidad →",

    // Core Values
    coreValues: "nuestros valores fundamentales",
    mobility: "movilidad",
    mobilityDesc: "libertad para trabajar y vivir en cualquier lugar",
    autonomy: "autonomía",
    autonomyDesc: "independencia en tus decisiones de estilo de vida",
    sustainability: "sostenibilidad",
    sustainabilityDesc: "construyendo un futuro mejor juntos",

    // Spaces
    ourSpaces: "nuestros espacios",
    workPlayLearnLive: "trabajar, jugar, aprender, vivir",
    spacesDescription:
      "descubre nuestros espacios físicos diseñados para el estilo de vida moderno del nómada digital en busan, corea.",
    nomadLive: "nomad live →",
    nomadLiveDesc: "hostel de coliving y coworking para nómadas digitales que buscan comunidad y comodidad",
    visitLive: "visitar live.nomadx.life →",
    nomadWork: "nomad work →",
    nomadWorkDesc: "espacios de coworking y oficinas diseñados para productividad y colaboración",
    visitWork: "visitar nomadwork.co.kr →",
    nomadGym: "nomad gym →",
    nomadGymDesc: "fitness inteligente con entrenamientos inmersivos y programas de entrenamiento personalizados",
    visitGym: "visitar gym.nomadx.life →",

    // Community
    joinOurCommunity: "únete a nuestra comunidad",
    connectWithNomads: "conecta con otros nómadas",
    communityDescription:
      "forma parte de una comunidad global de nómadas digitales. asiste a eventos, únete a programas y construye conexiones duraderas con personas afines.",
    movieNights: "noches de película dominicales →",
    stayForWork: "programa quedarse-para-trabajar →",
    outdoorAdventures: "aventuras al aire libre →",
    onlinePlatform: "plataforma de comunidad en línea →",
    explorePrograms: "explorar programas →",

    // Footer
    footerDescription: "plataforma de espacios comunitarios para nómadas digitales en busan, corea.",
    contact: "contacto",
    copyright: "© 2024 nomadx. todos los derechos reservados.",
  },
  fr: {
    // Navigation
    spaces: "espaces →",
    community: "communauté →",
    programs: "programmes →",
    projects: "projets →",
    joinUs: "nous rejoindre →",
    getStarted: "commencer →",

    // Hero
    welcomeTo: "bienvenue à",
    heroDescription:
      "une plateforme d'espaces communautaires où les nomades numériques travaillent, jouent, apprennent et vivent ensemble. découvrez la mobilité, l'autonomie et la durabilité à busan, corée.",
    exploreSpaces: "explorer les espaces →",
    joinCommunity: "rejoindre la communauté →",

    // Core Values
    coreValues: "nos valeurs fondamentales",
    mobility: "mobilité",
    mobilityDesc: "liberté de travailler et vivre n'importe où",
    autonomy: "autonomie",
    autonomyDesc: "indépendance dans vos choix de style de vie",
    sustainability: "durabilité",
    sustainabilityDesc: "construire un avenir meilleur ensemble",

    // Spaces
    ourSpaces: "nos espaces",
    workPlayLearnLive: "travailler, jouer, apprendre, vivre",
    spacesDescription:
      "découvrez nos espaces physiques conçus pour le mode de vie moderne du nomade numérique à busan, corée.",
    nomadLive: "nomad live →",
    nomadLiveDesc: "auberge de coliving et coworking pour nomades numériques recherchant communauté et confort",
    visitLive: "visiter live.nomadx.life →",
    nomadWork: "nomad work →",
    nomadWorkDesc: "espaces de coworking et bureaux conçus pour la productivité et la collaboration",
    visitWork: "visiter nomadwork.co.kr →",
    nomadGym: "nomad gym →",
    nomadGymDesc: "fitness intelligent avec entraînements inmersifs et programmes d'entraînement personnalisés",
    visitGym: "visiter gym.nomadx.life →",

    // Community
    joinOurCommunity: "rejoignez notre communauté",
    connectWithNomads: "connectez-vous avec d'autres nomades",
    communityDescription:
      "devenez membre d'une communauté mondiale de nomades numériques. assistez à des événements, rejoignez des programmes et créez des connexions durables avec des personnes partageant les mêmes idées.",
    movieNights: "soirées cinéma du dimanche →",
    stayForWork: "programme rester-pour-travailler →",
    outdoorAdventures: "aventures en plein air →",
    onlinePlatform: "plateforme communautaire en ligne →",
    explorePrograms: "explorer les programmes →",

    // Footer
    footerDescription: "plateforme d'espaces communautaires pour nomades numériques à busan, corée.",
    contact: "contact",
    copyright: "© 2024 nomadx. tous droits réservés.",
  },
  de: {
    // Navigation
    spaces: "räume →",
    community: "gemeinschaft →",
    programs: "programme →",
    projects: "projekte →",
    joinUs: "mitmachen →",
    getStarted: "loslegen →",

    // Hero
    welcomeTo: "willkommen bei",
    heroDescription:
      "eine gemeinschaftsraum-plattform, wo digitale nomaden zusammen arbeiten, spielen, lernen und leben. erlebe mobilität, autonomie und nachhaltigkeit in busan, korea.",
    exploreSpaces: "räume erkunden →",
    joinCommunity: "gemeinschaft beitreten →",

    // Core Values
    coreValues: "unsere grundwerte",
    mobility: "mobilität",
    mobilityDesc: "freiheit, überall zu arbeiten und zu leben",
    autonomy: "autonomie",
    autonomyDesc: "unabhängigkeit bei ihren lifestyle-entscheidungen",
    sustainability: "nachhaltigkeit",
    sustainabilityDesc: "gemeinsam eine bessere zukunft aufbauen",

    // Spaces
    ourSpaces: "unsere räume",
    workPlayLearnLive: "arbeiten, spielen, lernen, leben",
    spacesDescription:
      "entdecken sie unsere physischen räume, die für den modernen digitalen nomaden-lifestyle in busan, korea entwickelt wurden.",
    nomadLive: "nomad live →",
    nomadLiveDesc: "coliving & coworking hostel für digitale nomaden, die gemeinschaft und komfort suchen",
    visitLive: "live.nomadx.life besuchen →",
    nomadWork: "nomad work →",
    nomadWorkDesc: "coworking-lounge & büroräume für produktivität und zusammenarbeit",
    visitWork: "nomadwork.co.kr besuchen →",
    nomadGym: "nomad gym →",
    nomadGymDesc: "intelligentes fitness mit immersiven workouts und personalisierten trainingsprogrammen",
    visitGym: "gym.nomadx.life besuchen →",

    // Community
    joinOurCommunity: "treten sie unserer gemeinschaft bei",
    connectWithNomads: "verbinden sie sich mit anderen nomaden",
    communityDescription:
      "werden sie teil einer globalen gemeinschaft digitaler nomaden. besuchen sie veranstaltungen, treten sie programmen bei und bauen sie dauerhafte verbindungen mit gleichgesinnten auf.",
    movieNights: "sonntag filmabende →",
    stayForWork: "bleiben-für-arbeit programm →",
    outdoorAdventures: "outdoor-abenteuer →",
    onlinePlatform: "online-gemeinschaftsplattform →",
    explorePrograms: "programme erkunden →",

    // Footer
    footerDescription: "gemeinschaftsraum-plattform für digitale nomaden in busan, korea.",
    contact: "kontakt",
    copyright: "© 2024 nomadx. alle rechte vorbehalten.",
  },
  ja: {
    // Navigation
    spaces: "スペース →",
    community: "コミュニティ →",
    programs: "プログラム →",
    projects: "プロジェクト →",
    joinUs: "参加する →",
    getStarted: "始める →",

    // Hero
    welcomeTo: "ようこそ",
    heroDescription:
      "デジタルノマドが一緒に働き、遊び、学び、生活する共同スペースプラットフォームです。韓国・釜山でモビリティ、自律性、持続可能性を体験してください。",
    exploreSpaces: "スペースを探索 →",
    joinCommunity: "コミュニティに参加 →",

    // Core Values
    coreValues: "私たちの核となる価値観",
    mobility: "モビリティ",
    mobilityDesc: "どこでも働き、生活する自由",
    autonomy: "自律性",
    autonomyDesc: "ライフスタイル選択の独立性",
    sustainability: "持続可能性",
    sustainabilityDesc: "一緒により良い未来を築く",

    // Spaces
    ourSpaces: "私たちのスペース",
    workPlayLearnLive: "働く、遊ぶ、学ぶ、生活する",
    spacesDescription:
      "韓国・釜山の現代的なデジタルノマドライフスタイルのために設計された物理的スペースを発見してください。",
    nomadLive: "ノマドライブ →",
    nomadLiveDesc: "コミュニティと快適さを求めるデジタルノマドのためのコリビング＆コワーキングホステル",
    visitLive: "live.nomadx.life を訪問 →",
    nomadWork: "ノマドワーク →",
    nomadWorkDesc: "生産性とコラボレーションのために設計されたコワーキングラウンジ＆オフィススペース",
    visitWork: "nomadwork.co.kr を訪問 →",
    nomadGym: "ノマドジム →",
    nomadGymDesc: "没入型ワークアウトとパーソナライズされたトレーニングプログラムを備えたスマートフィットネス",
    visitGym: "gym.nomadx.life を訪問 →",

    // Community
    joinOurCommunity: "私たちのコミュニティに参加",
    connectWithNomads: "仲間のノマドとつながる",
    communityDescription:
      "グローバルなデジタルノマドコミュニティの一員になりましょう。イベントに参加し、プログラムに参加し、同じ志を持つ人々と永続的なつながりを築きましょう。",
    movieNights: "日曜映画の夜 →",
    stayForWork: "滞在-仕事プログラム →",
    outdoorAdventures: "アウトドアアドベンチャー →",
    onlinePlatform: "オンラインコミュニティプラットフォーム →",
    explorePrograms: "プログラムを探索 →",

    // Footer
    footerDescription: "韓国・釜山のデジタルノマドのための共同スペースプラットフォーム。",
    contact: "お問い合わせ",
    copyright: "© 2024 nomadx. 全著作権所有。",
  },
  zh: {
    // Navigation
    spaces: "空间 →",
    community: "社区 →",
    programs: "项目 →",
    projects: "计划 →",
    joinUs: "加入我们 →",
    getStarted: "开始 →",

    // Hero
    welcomeTo: "欢迎来到",
    heroDescription: "一个数字游牧者共同工作、娱乐、学习和生活的社区空间平台。在韩国釜山体验流动性、自主性和可持续性。",
    exploreSpaces: "探索空间 →",
    joinCommunity: "加入社区 →",

    // Core Values
    coreValues: "我们的核心价值观",
    mobility: "流动性",
    mobilityDesc: "在任何地方工作和生活的自由",
    autonomy: "自主性",
    autonomyDesc: "生活方式选择的独立性",
    sustainability: "可持续性",
    sustainabilityDesc: "共同建设更美好的未来",

    // Spaces
    ourSpaces: "我们的空间",
    workPlayLearnLive: "工作、娱乐、学习、生活",
    spacesDescription: "发现我们为韩国釜山现代数字游牧生活方式设计的物理空间。",
    nomadLive: "游牧生活 →",
    nomadLiveDesc: "为寻求社区和舒适的数字游牧者提供的共居和共享办公旅舍",
    visitLive: "访问 live.nomadx.life →",
    nomadWork: "游牧工作 →",
    nomadWorkDesc: "为生产力和协作设计的共享办公休息室和办公空间",
    visitWork: "访问 nomadwork.co.kr →",
    nomadGym: "游牧健身 →",
    nomadGymDesc: "具有沉浸式锻炼和个性化训练计划的智能健身",
    visitGym: "访问 gym.nomadx.life →",

    // Community
    joinOurCommunity: "加入我们的社区",
    connectWithNomads: "与其他游牧者联系",
    communityDescription: "成为全球数字游牧者社区的一员。参加活动，加入项目，与志同道合的人建立持久的联系。",
    movieNights: "周日电影之夜 →",
    stayForWork: "留下工作计划 →",
    outdoorAdventures: "户外冒险 →",
    onlinePlatform: "在线社区平台 →",
    explorePrograms: "探索项目 →",

    // Footer
    footerDescription: "韩国釜山数字游牧者的社区空间平台。",
    contact: "联系",
    copyright: "© 2024 nomadx. 版权所有。",
  },
}

// Remove unused translation keys
for (const lang in translations) {
  delete translations[lang as keyof typeof translations].live
  delete translations[lang as keyof typeof translations].liveSubtext
  delete translations[lang as keyof typeof translations].stay
  delete translations[lang as keyof typeof translations].staySubtext
  delete translations[lang as keyof typeof translations].workStay
  delete translations[lang as keyof typeof translations].workStaySubtext
}

export default function HomePage() {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (language: (typeof languages)[0]) => {
    setSelectedLanguage(language)
    setIsOpen(false)
  }

  const t = translations[selectedLanguage.code as keyof typeof translations]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-lg sm:text-xl font-black text-gray-900 tracking-tight">NOMAD</span>
              <Image src="/nomadx-logo.png" alt="X Logo" width={20} height={20} className="sm:w-6 sm:h-6" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#spaces"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                {t.spaces}
              </Link>
              <Link
                href="#community"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                {t.community}
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                {t.programs}
              </Link>
              <Link
                href="/projects"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                {t.projects}
              </Link>
              <Link
                href="/join"
                className="text-gray-700 hover:text-blue-600 transition-colors font-normal tracking-tight"
              >
                {t.joinUs}
              </Link>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-gray-100 rounded-full">
                    <span className="text-xs sm:text-sm font-black text-gray-900 tracking-tight mr-1">
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white px-4">
        <AnimatedMountains />
        <div className="relative z-20 text-center max-w-4xl mx-auto w-full">
          <div className="mb-6 md:mb-8">
            <div className="flex items-center justify-center">
              <Image
                src="/nomadx-full-logo.png"
                alt="NOMAD X Logo"
                width={200}
                height={200}
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80"
                priority
              />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-black max-w-3xl mx-auto font-normal leading-relaxed tracking-tight px-4">
            {t.heroDescription}
          </p>
          <div className="flex flex-col gap-4 justify-center max-w-sm sm:max-w-2xl md:max-w-4xl mx-auto">
            <Card className="w-full border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-white hover:bg-yellow-400 cursor-pointer">
              <Link href="/live">
                <CardHeader className="text-center py-6 sm:py-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2">Live</CardTitle>
                  <CardDescription className="text-gray-600 font-normal tracking-tight">explore →</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="w-full border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-white hover:bg-green-400 cursor-pointer">
              <Link href="http://nomadwork.co.kr" target="_blank">
                <CardHeader className="text-center py-6 sm:py-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2">Work</CardTitle>
                  <CardDescription className="text-gray-600 font-normal tracking-tight">learn more →</CardDescription>
                </CardHeader>
              </Link>
            </Card>

            <Card className="w-full border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg overflow-hidden bg-white hover:bg-red-400 cursor-pointer">
              <Link href="https://gym.nomadx.life" target="_blank">
                <CardHeader className="text-center py-6 sm:py-8">
                  <CardTitle className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2">Gym</CardTitle>
                  <CardDescription className="text-gray-600 font-normal tracking-tight">get started →</CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-4 tracking-tight">{t.coreValues}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 tracking-tight">{t.mobility}</h3>
              <p className="text-sm sm:text-base text-gray-600 font-normal tracking-tight">{t.mobilityDesc}</p>
            </div>
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 tracking-tight">{t.autonomy}</h3>
              <p className="text-sm sm:text-base text-gray-600 font-normal tracking-tight">{t.autonomyDesc}</p>
            </div>
            <div>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 tracking-tight">{t.sustainability}</h3>
              <p className="text-sm sm:text-base text-gray-600 font-normal tracking-tight">{t.sustainabilityDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Spaces Section */}
      <section id="spaces" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">
              {t.ourSpaces}
            </Badge>
            <h2 className="text-4xl font-medium text-gray-900 mb-4 tracking-tight">{t.workPlayLearnLive}</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight">
              {t.spacesDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image src="/nomad-live-interior.jpeg" alt="NOMAD LIVE coliving space" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Home className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">{t.nomadLive}</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight">
                  {t.nomadLiveDesc}
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4 rounded-full font-normal tracking-tight w-fit">
                  {t.visitLive}
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image src="/nomad-work-interior.jpeg" alt="NOMAD WORK coworking space" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Briefcase className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">{t.nomadWork}</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight">
                  {t.nomadWorkDesc}
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4 rounded-full font-normal tracking-tight w-fit">
                  {t.visitWork}
                </Button>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image src="/nomad-gym-interior.jpeg" alt="NOMAD GYM fitness space" fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Dumbbell className="h-5 w-5 text-blue-600" />
                  <CardTitle className="font-medium tracking-tight">{t.nomadGym}</CardTitle>
                </div>
                <CardDescription className="font-normal leading-relaxed tracking-tight">
                  {t.nomadGymDesc}
                </CardDescription>
                <Button variant="outline" size="sm" className="mt-4 rounded-full font-normal tracking-tight w-fit">
                  {t.visitGym}
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800 rounded-full font-normal tracking-tight">
                {t.joinOurCommunity}
              </Badge>
              <h2 className="text-4xl font-medium text-gray-900 mb-6 tracking-tight">{t.connectWithNomads}</h2>
              <p className="text-base text-gray-600 mb-6 font-normal leading-relaxed tracking-tight">
                {t.communityDescription}
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Play className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">{t.movieNights}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">{t.stayForWork}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mountain className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">{t.outdoorAdventures}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Wifi className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-normal tracking-tight">{t.onlinePlatform}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-full font-normal tracking-tight">
                  <Link href="/programs">{t.explorePrograms}</Link>
                </Button>
                <Button variant="outline" className="rounded-full font-normal tracking-tight">
                  <Link href="/join">{t.joinCommunity}</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-video rounded-2xl shadow-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/-oR_MxwcQco"
                  title="NOMADX Community Video"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
              <p className="text-gray-400 font-normal leading-relaxed tracking-tight">{t.footerDescription}</p>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">{t.spaces}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.nomadLive}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.nomadWork}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.nomadGym}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">explore</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.projects}
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.programs}
                  </Link>
                </li>
                <li>
                  <Link href="/festival" className="hover:text-white transition-colors font-normal tracking-tight">
                    festival →
                  </Link>
                </li>
                <li>
                  <Link href="/join" className="hover:text-white transition-colors font-normal tracking-tight">
                    {t.joinUs}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium mb-4 tracking-tight">{t.contact}</h3>
              <div className="space-y-2 text-gray-400 font-normal leading-relaxed tracking-tight">
                <p>13f-04, 48 centum jungang-ro</p>
                <p>haeundae-gu, busan, korea 48059</p>
                <p>nomadx@nomadx.life</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p className="font-normal tracking-tight">{t.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
