// // import { useState, useEffect } from 'react'
// // import { Link, useLocation } from 'react-router-dom'
// // import { Menu, X, Home, Info, Images, Briefcase, Phone } from 'lucide-react'

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [scrolled, setScrolled] = useState(false)
// //   const location = useLocation()

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       setScrolled(window.scrollY > 50)
// //     }
// //     window.addEventListener('scroll', handleScroll)
// //     return () => window.removeEventListener('scroll', handleScroll)
// //   }, [])

// //   const navItems = [
// //     { name: 'Home', path: '/', icon: <Home size={20} /> },
// //     { name: 'About', path: '/about', icon: <Info size={20} /> },
// //     { name: 'Gallery', path: '/gallery', icon: <Images size={20} /> },
// //     { name: 'Services', path: '/services', icon: <Briefcase size={20} /> },
// //     { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
// //   ]

// //   return (
// //     <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //         <div className="flex justify-between items-center h-20">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center space-x-2">
// //             <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
// //               <span className="text-2xl font-bold text-maroon">D</span>
// //             </div>
// //             <div className="text-left">
// //               <h1 className="text-xl font-playfair font-bold text-maroon">DAIM</h1>
// //               <p className="text-xs text-gray-600">Marriage Hall & Marquee</p>
// //             </div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <div className="hidden md:flex items-center space-x-8">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.name}
// //                 to={item.path}
// //                 className={`flex items-center space-x-2 transition-colors duration-300 font-medium ${
// //                   location.pathname === item.path
// //                     ? 'text-gold'
// //                     : scrolled
// //                     ? 'text-gray-700 hover:text-gold'
// //                     : 'text-white hover:text-gold'
// //                 }`}
// //               >
// //                 {item.icon}
// //                 <span>{item.name}</span>
// //               </Link>
// //             ))}
// //             <Link
// //               to="/contact"
// //               className="btn-primary text-sm"
// //             >
// //               Book Now
// //             </Link>
// //           </div>

// //           {/* Mobile menu button */}
// //           <button
// //             onClick={() => setIsOpen(!isOpen)}
// //             className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
// //           >
// //             {isOpen ? <X size={28} /> : <Menu size={28} />}
// //           </button>
// //         </div>

// //         {/* Mobile Navigation */}
// //         {isOpen && (
// //           <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 py-4">
// //             {navItems.map((item) => (
// //               <Link
// //                 key={item.name}
// //                 to={item.path}
// //                 onClick={() => setIsOpen(false)}
// //                 className={`flex items-center space-x-3 px-4 py-3 text-lg ${
// //                   location.pathname === item.path
// //                     ? 'text-gold bg-gray-50'
// //                     : 'text-gray-700 hover:text-gold hover:bg-gray-50'
// //                 }`}
// //               >
// //                 {item.icon}
// //                 <span>{item.name}</span>
// //               </Link>
// //             ))}
// //             <div className="px-4 pt-4">
// //               <Link
// //                 to="/contact"
// //                 onClick={() => setIsOpen(false)}
// //                 className="btn-primary w-full text-center block"
// //               >
// //                 Book Now
// //               </Link>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </nav>
// //   )
// // }

// // export default Navbar






// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const location = useLocation()

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20)
//     }
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Services', path: '/services' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="w-10 h-10 border border-gray-800 rounded-full flex items-center justify-center group-hover:border-gray-600 transition-colors">
//               <span className="text-xl font-medium text-gray-800 group-hover:text-gray-600">D</span>
//             </div>
//             <div className="text-left">
//               <h1 className="text-xl font-medium text-gray-800 tracking-wide">DAIM</h1>
//               <p className="text-xs text-gray-500 tracking-widest">MARRIAGE HALL</p>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-10">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`text-sm tracking-widest transition-all duration-300 relative ${
//                   location.pathname === item.path
//                     ? 'text-gray-800 font-medium'
//                     : scrolled
//                     ? 'text-gray-600 hover:text-gray-800'
//                     : 'text-white hover:text-gray-200'
//                 }`}
//               >
//                 {item.name}
//                 {location.pathname === item.path && (
//                   <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-800"></div>
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               className="px-6 py-2 border border-gray-800 text-gray-800 text-sm tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-all duration-300"
//             >
//               Book Now
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg mt-2 py-4 rounded-lg">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 onClick={() => setIsOpen(false)}
//                 className={`flex items-center px-6 py-3 text-sm tracking-widest ${
//                   location.pathname === item.path
//                     ? 'text-gray-800 font-medium bg-gray-50'
//                     : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <div className="px-6 pt-4">
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block w-full text-center px-6 py-3 border border-gray-800 text-gray-800 text-sm tracking-widest uppercase hover:bg-gray-800 hover:text-white transition-all duration-300"
//               >
//                 Book Now
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar   






import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Calendar, Phone, MessageSquare } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  const handleBookingSubmit = (e) => {
    e.preventDefault()
    // Handle booking submission
    setShowBookingForm(false)
    alert('Booking request submitted! We will contact you shortly.')
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-gray-900/20 backdrop-blur-sm'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${scrolled ? 'bg-gray-900' : 'bg-white'}`}>
                <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-gray-900'}`}>D</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>DAIM</h1>
                <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>MARRIAGE HALL</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-semibold transition-all duration-300 relative ${
                    location.pathname === item.path
                      ? scrolled ? 'text-gray-900' : 'text-white'
                      : scrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
                  )}
                </Link>
              ))}
              <button
                onClick={() => setShowBookingForm(true)}
                className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
                  scrolled 
                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Calendar className="inline mr-2" size={18} />
                Book Now
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden bg-white shadow-xl rounded-lg mt-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-3 font-semibold ${
                    location.pathname === item.path
                      ? 'text-gray-900 bg-gray-50'
                      : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-6 pt-4">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowBookingForm(true)
                  }}
                  className="w-full text-center px-6 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Calendar className="inline mr-2" size={18} />
                  Book Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Book Your Event</h2>
              <button
                onClick={() => setShowBookingForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Your Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-200 outline-none"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-200 outline-none"
                  placeholder="0321 6839646"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Event Date *</label>
                <input
                  type="date"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2 font-medium">Guest Count *</label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-gray-500 focus:ring-1 focus:ring-gray-200 outline-none"
                >
                  <option value="">Select guests</option>
                  <option value="1-100">1-100 Guests</option>
                  <option value="101-300">101-300 Guests</option>
                  <option value="301-600">301-600 Guests</option>
                  <option value="600+">600+ Guests</option>
                </select>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Submit Booking
                </button>
                <a
                  href="https://wa.me/923216839646"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="mr-2" size={20} />
                  WhatsApp
                </a>
              </div>

              <div className="text-center">
                <a 
                  href="tel:03216839646" 
                  className="inline-flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Phone className="mr-2" size={18} />
                  Or call directly: 0321 6839646
                </a>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar