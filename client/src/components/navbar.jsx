import { useState, useEffect } from "react"
import { Search, Menu, X, Home, Activity, BarChart2, BookOpen, Info, Newspaper, User, Badge } from "lucide-react"
import Logo from "../../public/images/logo-miIQ_By4 1.svg"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Home")
  const [showBottomNav, setShowBottomNav] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (navItem) => {
    setActiveNav(navItem.label)
    setIsMenuOpen(false)
  }

  // Scroll detection for bottom navigation
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show bottom nav when scrolling down and past 100px
      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        setShowBottomNav(true)
      }
      // Hide bottom nav when scrolling up or at top
      else if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setShowBottomNav(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navItems = [
    { label: "Home", icon: <Home className="h-4 w-4 mr-1" />, to: "/" },
    { label: "Activities", icon: <Activity className="h-4 w-4 mr-1" />, to: "/activities" },
    { label: "Progress", icon: <BarChart2 className="h-4 w-4 mr-1" />, to: "/progress" },
    // { label: "Library", icon: <BookOpen className="h-4 w-4 mr-1" />, to: "/library" },
    { label: "About Us", icon: <Info className="h-4 w-4 mr-1" />, to: "/about-us" },
    { label: "Pricing", icon: <Newspaper className="h-4 w-4 mr-1" />, to: "/pricing" },
    { label: "Badges", icon: <Badge className="h-4 w-4 mr-1" />, to: "/badge-journey" },

  ]

  // Bottom nav items (subset of main nav for mobile)
  const bottomNavItems = [
    { label: "Home", icon: <Home className="h-5 w-5" />, to: "/" },
    { label: "Activities", icon: <Activity className="h-5 w-5" />, to: "/activities" },
    { label: "Progress", icon: <BarChart2 className="h-5  w-5" />, to: "/progress" },
    // { label: "Library", icon: <BookOpen className="h-5  w-5" />, to: "/library" },
    { label: "About Us", icon: <Info className="h-5 w-5" />, to: "/about-us" },
    { label: "Pricing", icon: <Newspaper className="h-5 w-5" />, to: "/pricing" },
    { label: "Badges", icon: <Badge className="h-4 w-4 mr-1" />, to: "/badge-journey" },
  ]

  return (
    <>
      <nav className="sticky top-0 z-[100000] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div>
            <img
  src="https://www.solarcontainerproject.com/assets/logo-miIQ_By4.png"
  alt="Logo"
  className="h-20 w-auto"
  loading="eager"
/>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeNav === item.label ? "text-[#5BA3DD]" : "text-[#000000]"
                    }`}
                    onClick={() => handleNavClick(item)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-[#000000] hover:text-gray-900 cursor-pointer transition-colors duration-200">
                <Search className="h-4 w-4" />
                <span className="text-sm font-medium">Search</span>
              </div>
              <Link to={"/signin"}>
                <button className="text-[#000000] hover:bg-[#000000] hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-500 cursor-pointer border border-[#D9D9D9]">
                  Log In
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="bg-[#000000] text-white hover:bg-gray-900 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                  Sign Up
                </button>
              </Link>
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-[#000000] hover:text-gray-900 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
              >
                {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    activeNav === item.label ? "text-[#5BA3DD]" : "text-[#000000]"
                  }`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200">
                <Search className="h-4 w-4" />
                <span className="text-base font-medium">Search</span>
              </div>

              <div className="px-3 py-2 space-y-2">
                <Link to={"/signin"}>
                  <button className="text-[#000000] w-full hover:bg-[#000000] hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-500 cursor-pointer border border-[#D9D9D9]">
                    Log In
                  </button>
                </Link>
                <Link to={"/signup"}>
                  <button className="bg-[#000000] w-full text-white hover:bg-gray-900 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors duration-500">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation - Mobile Only */}
      <div
  className={`fixed bottom-0 left-0 right-0 overflow-x-auto z-[99999] bg-white border-t border-gray-200 md:hidden transition-transform duration-300 ${
    showBottomNav ? "translate-y-0" : "translate-y-full"
  }`}
>
  <div className="flex w-max items-center gap-4 py-2 px-4">
    {bottomNavItems.map((item) => (
      <Link
        key={item.label}
        to={item.to}
        className={`flex flex-col min-w-[72px] items-center justify-center py-2 px-3 rounded-lg transition-colors duration-200 ${
          activeNav === item.label ? "text-[#5BA3DD] bg-blue-50" : "text-gray-600 hover:text-gray-900"
        }`}
        onClick={() => handleNavClick(item)}
      >
        {item.icon}
        <span className="text-xs font-medium mt-1 whitespace-nowrap">{item.label}</span>
      </Link>
    ))}
  </div>
</div>

    </>
  )
}
