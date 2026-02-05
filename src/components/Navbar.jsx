





// import { useState, useEffect } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X, Calendar, Phone, MessageSquare } from 'lucide-react'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [showBookingForm, setShowBookingForm] = useState(false)
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

//   const handleBookingSubmit = (e) => {
//     e.preventDefault()
//     // Handle booking submission
//     setShowBookingForm(false)
//     alert('Booking request submitted! We will contact you shortly.')
//   }

//   return (
//     <>
//       <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-gray-900/20 backdrop-blur-sm'}`}>
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="flex items-center justify-between h-20">
//             {/* Logo */}
//             <Link to="/" className="flex items-center space-x-3">
//               <div className={`w-12 h-12 rounded-full flex items-center justify-center ${scrolled ? 'bg-gray-900' : 'bg-white'}`}>
//                 <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-gray-900'}`}>D</span>
//               </div>
//               <div>
//                 <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>DAIM</h1>
//                 <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-300'}`}>MARRIAGE HALL</p>
//               </div>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="items-center hidden space-x-10 md:flex">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   className={`font-semibold transition-all duration-300 relative ${
//                     location.pathname === item.path
//                       ? scrolled ? 'text-gray-900' : 'text-white'
//                       : scrolled
//                       ? 'text-gray-700 hover:text-gray-900'
//                       : 'text-gray-300 hover:text-white'
//                   }`}
//                 >
//                   {item.name}
//                   {location.pathname === item.path && (
//                     <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${scrolled ? 'bg-gray-900' : 'bg-white'}`}></div>
//                   )}
//                 </Link>
//               ))}
//               <button
//                 onClick={() => setShowBookingForm(true)}
//                 className={`px-6 py-3 font-bold rounded-lg transition-all duration-300 ${
//                   scrolled 
//                     ? 'bg-gray-900 text-white hover:bg-gray-800' 
//                     : 'bg-white text-gray-900 hover:bg-gray-100'
//                 }`}
//               >
//                 <Calendar className="inline mr-2" size={18} />
//                 Book Now
//               </button>
//             </div>

//             {/* Mobile menu button */}
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
//             >
//               {isOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>

//           {/* Mobile Navigation */}
//           {isOpen && (
//             <div className="py-4 mt-2 bg-white rounded-lg shadow-xl md:hidden">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-6 py-3 font-semibold ${
//                     location.pathname === item.path
//                       ? 'text-gray-900 bg-gray-50'
//                       : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-6 pt-4">
//                 <button
//                   onClick={() => {
//                     setIsOpen(false)
//                     setShowBookingForm(true)
//                   }}
//                   className="w-full px-6 py-3 font-bold text-center text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
//                 >
//                   <Calendar className="inline mr-2" size={18} />
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </nav>

//       {/* Booking Form Modal */}
//       {showBookingForm && (
//         <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
//           <div className="w-full max-w-md p-8 bg-white rounded-2xl">
//             <div className="flex items-center justify-between mb-8">
//               <h2 className="text-2xl font-bold text-gray-900">Book Your Event</h2>
//               <button
//                 onClick={() => setShowBookingForm(false)}
//                 className="text-gray-400 hover:text-gray-600"
//               >
//                 <X size={24} />
//               </button>
//             </div>

//             <form onSubmit={handleBookingSubmit} className="space-y-6">
//               <div>
//                 <label className="block mb-2 font-medium text-gray-700">Your Name *</label>
//                 <input
//                   type="text"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium text-gray-700">Phone Number *</label>
//                 <input
//                   type="tel"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
//                   placeholder="0321 6839646"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium text-gray-700">Event Date *</label>
//                 <input
//                   type="date"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-2 font-medium text-gray-700">Guest Count *</label>
//                 <select
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-200"
//                 >
//                   <option value="">Select guests</option>
//                   <option value="1-100">1-100 Guests</option>
//                   <option value="101-300">101-300 Guests</option>
//                   <option value="301-600">301-600 Guests</option>
//                   <option value="600+">600+ Guests</option>
//                 </select>
//               </div>

//               <div className="flex gap-4">
//                 <button
//                   type="submit"
//                   className="flex-1 py-3 font-bold text-white transition-colors bg-gray-900 rounded-lg hover:bg-gray-800"
//                 >
//                   Submit Booking
//                 </button>
//                 <a
//                   href="https://wa.me/923216839646"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center justify-center flex-1 py-3 font-bold text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
//                 >
//                   <MessageSquare className="mr-2" size={20} />
//                   WhatsApp
//                 </a>
//               </div>

//               <div className="text-center">
//                 <a 
//                   href="tel:03216839646" 
//                   className="inline-flex items-center text-gray-600 hover:text-gray-900"
//                 >
//                   <Phone className="mr-2" size={18} />
//                   Or call directly: 0321 6839646
//                 </a>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
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
    setShowBookingForm(false)
    alert('Booking request submitted! We will contact you shortly.')
  }

  return (
    <>
      {/* Premium Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-800' : 'bg-transparent'}`}>
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex items-center justify-between h-24">
            {/* Logo - Premium */}
            <Link to="/" className="flex items-center space-x-4 group">
              <div className={`relative transition-all duration-300 ${scrolled ? 'w-12 h-12' : 'w-14 h-14'}`}>
                <div className={`absolute inset-0 border-2 ${scrolled ? 'border-white' : 'border-white'} rounded-lg transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className={`absolute inset-0 flex items-center justify-center ${scrolled ? 'bg-white/10' : 'bg-white/10'} backdrop-blur-sm rounded-lg`}>
                  <span className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-white'}`}>D</span>
                </div>
              </div>
              <div className="transition-all duration-300 transform group-hover:translate-x-1">
                <h1 className={`text-2xl font-bold ${scrolled ? 'text-white' : 'text-white'}`}>DAIM</h1>
                <p className={`text-xs tracking-widest ${scrolled ? 'text-gray-400' : 'text-gray-300'}`}>MARRIAGE HALL</p>
              </div>
            </Link>

            {/* Desktop Navigation - Premium */}
            <div className="items-center hidden space-x-2 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-6 py-3 font-semibold transition-all duration-300 relative group ${
                    location.pathname === item.path
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                  <div className={`absolute -bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 w-0 group-hover:w-full transition-all duration-300 ${location.pathname === item.path ? 'w-full bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-500 to-purple-500'}`}></div>
                  <div className="absolute inset-0 transition-all duration-300 rounded-lg bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/5"></div>
                </Link>
              ))}
              
              {/* Premium Booking Button */}
              <button
                onClick={() => setShowBookingForm(true)}
                className="relative px-8 py-3 ml-6 overflow-hidden font-bold transition-all duration-500 rounded-lg group"
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 transition-all duration-500 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
                <div className="absolute inset-0 transition-all duration-500 transform opacity-0 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:opacity-100 group-hover:scale-110"></div>
                
                {/* Content */}
                <div className="relative flex items-center text-white">
                  <Calendar className="mr-3 transition-transform group-hover:scale-110" size={20} />
                  <span className="tracking-wide">Book Now</span>
                </div>
              </button>

              {/* Direct Contact Button */}
              <a 
                href="tel:03216839646"
                className="flex items-center px-6 py-3 space-x-3 text-white transition-colors duration-300 hover:text-blue-300 group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
                  <Phone className="relative text-green-400" size={20} />
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold">0321 6839646</div>
                  <div className="text-xs text-gray-400 group-hover:text-gray-300">Owner</div>
                </div>
              </a>
            </div>

            {/* Mobile menu button - Premium */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-lg transition-all duration-300 ${scrolled ? 'bg-white/10 backdrop-blur-sm text-white' : 'bg-white/10 backdrop-blur-sm text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Premium */}
      {isOpen && (
        <div className="fixed inset-x-0 z-40 top-24 md:hidden">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="p-6 border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900/95 to-gray-900/90 backdrop-blur-xl rounded-2xl">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-4 px-6 py-5 font-semibold rounded-lg transition-all duration-300 mb-2 last:mb-0 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full ${location.pathname === item.path ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-600'}`}></div>
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="mt-6 space-y-4">
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowBookingForm(true)
                  }}
                  className="w-full px-8 py-4 font-bold text-white transition-all duration-500 transform rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105"
                >
                  <Calendar className="inline mr-3" size={20} />
                  Book Your Event
                </button>
                
                <a 
                  href="tel:03216839646"
                  className="flex items-center justify-center px-8 py-4 space-x-3 font-bold text-white transition-all duration-300 border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:bg-gradient-to-r hover:from-gray-700 hover:to-gray-800"
                >
                  <Phone size={20} />
                  <span>Call Owner: 0321 6839646</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Premium Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 backdrop-blur-sm"
            onClick={() => setShowBookingForm(false)}
          ></div>
          
          {/* Modal */}
          <div className="relative w-full max-w-md overflow-hidden border border-gray-800 shadow-2xl bg-gradient-to-b from-gray-900 to-black rounded-2xl">
            {/* Header */}
            <div className="p-8 border-b border-gray-800">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">Book Your Event</h2>
                  <p className="mt-1 text-sm text-gray-400">Direct consultation with owner</p>
                </div>
                <button
                  onClick={() => setShowBookingForm(false)}
                  className="p-2 text-gray-400 transition-colors rounded-lg hover:text-white hover:bg-gray-800"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex items-center p-4 space-x-4 border border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900">
                <Phone className="text-blue-400" size={20} />
                <div>
                  <div className="text-sm text-gray-400">Direct contact</div>
                  <div className="font-bold text-white">0321 6839646</div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleBookingSubmit} className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block mb-3 font-medium text-gray-300">Your Name *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-5 py-4 text-white transition-all border border-gray-700 outline-none bg-gray-800/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-300">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-5 py-4 text-white transition-all border border-gray-700 outline-none bg-gray-800/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 placeholder:text-gray-500"
                    placeholder="0321 6839646"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-300">Event Date *</label>
                  <input
                    type="date"
                    required
                    className="w-full px-5 py-4 text-white transition-all border border-gray-700 outline-none bg-gray-800/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div>
                  <label className="block mb-3 font-medium text-gray-300">Guest Count *</label>
                  <select
                    required
                    className="w-full px-5 py-4 text-white transition-all border border-gray-700 outline-none appearance-none bg-gray-800/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="" className="bg-gray-900">Select number of guests</option>
                    <option value="1-100" className="bg-gray-900">1-100 Guests</option>
                    <option value="101-300" className="bg-gray-900">101-300 Guests</option>
                    <option value="301-600" className="bg-gray-900">301-600 Guests</option>
                    <option value="600+" className="bg-gray-900">600+ Guests</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-4 font-bold text-white transition-all duration-500 transform bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 hover:scale-105"
                  >
                    Submit Booking
                  </button>
                  <a
                    href="https://wa.me/923216839646"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center flex-1 py-4 font-bold text-white transition-all duration-500 transform bg-gradient-to-r from-green-600 to-green-700 rounded-xl hover:from-green-700 hover:to-green-800 hover:scale-105"
                  >
                    <MessageSquare className="mr-3" size={20} />
                    WhatsApp
                  </a>
                </div>

                <div className="pt-6 text-center border-t border-gray-800">
                  <a 
                    href="tel:03216839646" 
                    className="inline-flex items-center text-gray-400 transition-colors hover:text-white"
                  >
                    <Phone className="mr-3" size={18} />
                    <span>Call directly: <span className="font-bold text-white">0321 6839646</span></span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar