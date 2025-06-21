import { useState } from "react"
import { Search, Menu, X, Home, Activity, BarChart2, BookOpen, Info, Newspaper } from "lucide-react"
import Logo from '../../public/images/logo.svg'
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (navItem) => {
    setActiveNav(navItem.label)
    setIsMenuOpen(false)
  }

  const navItems = [
    { label: "Home", icon: <Home className="h-4 w-4 mr-1" />, to: "/" },
    { label: "Activities", icon: <Activity className="h-4 w-4 mr-1" />, to: "/activities" },
    { label: "Progress", icon: <BarChart2 className="h-4 w-4 mr-1" />, to: "/progress" },
    { label: "Library", icon: <BookOpen className="h-4 w-4 mr-1" />, to: "/library" },
    { label: "About Us", icon: <Info className="h-4 w-4 mr-1" />, to: "/about-us" },
    { label: "Blog", icon: <Newspaper className="h-4 w-4 mr-1" />, to: "/blog" },
  ]

  return (
    <nav className="bg-white sticky top-0 z-[99999]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5 lg:px-8">
        <div className="flex md:ml-0 ml-12 justify-between items-center h-16">
          <div>
            <img src={Logo} alt="Logo" />
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
  )
}
