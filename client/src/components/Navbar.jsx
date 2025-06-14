import { useState } from "react"
import { Search, Menu, X } from "lucide-react"
import Logo from '../../public/images/logo.svg'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("Home")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavClick = (navItem) => {
    setActiveNav(navItem)
    setIsMenuOpen(false)
  }

  const navItems = ["Home", "Activities", "Progress", "Library", "About Us", "Blog"]

  return (
    <nav className="bg-white sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5  lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="">
            <img src={Logo} alt="" />
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`cursor-pointer px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeNav === item
                      ? "text-[#5BA3DD]"
                      : "text-[#000000] "
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item)
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-[#000000] hover:text-gray-900 cursor-pointer transition-colors duration-200">
              <Search className="h-4 w-4" />
              <span className="text-sm font-medium">Search</span>
            </div>

            <button className="text-[#000000] hover:bg-[#000000] hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-500 cursor-pointer border border-[#D9D9D9]">
              Log In
            </button>
            <button className="bg-[#000000] text-white hover:bg-gray-900 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              Sign Up
            </button>
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
              <a
                key={item}
                href="#"
                className={`cursor-pointer block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  activeNav === item
                    ? "text-[#5BA3DD]"
                    : "text-[#000000] "
                }`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item)
                }}
              >
                {item}
              </a>
            ))}

            <div className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-900 cursor-pointer transition-colors duration-200">
              <Search className="h-4 w-4" />
              <span className="text-base font-medium">Search</span>
            </div>

            <div className="px-3 py-2 space-y-2">
              <button className="text-[#000000] w-full hover:bg-[#000000] hover:text-white px-4 py-2 text-sm font-medium rounded-md transition-colors duration-500 cursor-pointer border border-[#D9D9D9]">
                Log In
              </button>
              <button className="bg-[#000000] w-full text-white hover:bg-gray-900 cursor-pointer px-4 py-2 rounded-md text-sm font-medium transition-colors duration-500">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}