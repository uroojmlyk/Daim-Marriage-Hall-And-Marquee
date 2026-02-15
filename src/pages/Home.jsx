
// import { Link } from 'react-router-dom'
// import { Calendar, Users, Sparkles, Award, Phone, ChevronRight } from 'lucide-react'

// const Home = () => {
//   const highlights = [
//     {
//       icon: <Users className="text-gray-800" size={28} />,
//       title: "Spacious Venue",
//       description: "Accommodates up to 2000 guests with premium seating arrangements"
//     },
//     {
//       icon: <Sparkles className="text-gray-800" size={28} />,
//       title: "Premium Decor",
//       description: "Customizable elegant decoration themes for every celebration"
//     },
//     {
//       icon: <Award className="text-gray-800" size={28} />,
//       title: "25 Years Legacy",
//       description: "Decades of excellence in creating unforgettable wedding memories"
//     }
//   ]

//   const features = [
//     { icon: "✓", text: "Central Air Conditioning" },
//     { icon: "✓", text: "Ample Parking Space" },
//     { icon: "✓", text: "Modern Sound System" },
//     { icon: "✓", text: "Elegant Chandeliers" },
//     { icon: "✓", text: "Customizable Layout" },
//     { icon: "✓", text: "Bridal Dressing Rooms" }
//   ]

//   return (
//     <>
//       {/* Hero Section - Blue overlay removed */}
//       <section className="relative flex items-center min-h-screen">
//         <div 
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/hall6.jpg")'
//           }}
//         ></div>

//         <div className="relative z-10 px-6 mx-auto text-white max-w-7xl">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
//               <span className="text-sm font-medium">Since 1999</span>
//             </div>
//           </div>
          
//           <h1 className="mb-8 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-9xl">
//             DAIM <br />
//             <span className="text-6xl text-white md:text-7xl lg:text-9xl ">Marriage Hall <br /> And Marquee</span>
//           </h1>
          
//           <div className="w-24 h-1 mb-10 bg-white"></div>
          
//           <p className="max-w-2xl mb-12 text-2xl font-light leading-relaxed text-gray-200 md:text-3xl">
//             Bangla Gogera's premier destination for elegant celebrations. 
//             25 years of creating timeless memories.
//           </p>
          
//           <div className="flex flex-col gap-6 sm:flex-row">
//             <Link 
//               to="/contact" 
//               className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg group hover:bg-gray-100"
//             >
//               <Calendar className="mr-3" size={24} />
//               Book Your Event
//               <ChevronRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
//             </Link>
//             <Link 
//               to="/gallery" 
//               className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 border-2 border-white rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
//             >
//               View Our Gallery
//             </Link>
//           </div>
//         </div>

//         <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
//           <div className="animate-bounce">
//             <ChevronRight className="text-white rotate-90" size={24} />
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section - Styled */}
//       <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="mb-20 text-center">
//             <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
//               WHY CHOOSE US
//             </span>
//             <h2 className="mb-6 text-5xl font-bold text-white">
//               Excellence in Every Detail
//             </h2>
//             <p className="max-w-3xl mx-auto text-xl text-gray-300">
//               For 25 years, we've been the trusted choice for celebrations in Bangla Gogera
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
//             {highlights.map((item, index) => (
//               <div 
//                 key={index}
//                 className="p-10 transition-all duration-500 border bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors bg-white/10 rounded-2xl group-hover:bg-white/20">
//                   {item.icon}
//                 </div>
                
//                 <div className="mb-4 text-4xl font-bold text-white/40">0{index + 1}</div>
                
//                 <h3 className="mb-4 text-2xl font-bold text-white">
//                   {item.title}
//                 </h3>
//                 <p className="leading-relaxed text-gray-300">
//                   {item.description}
//                 </p>
                
//                 <div className="pt-6 mt-8 transition-colors border-t border-white/10 group-hover:border-white/20"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section - Styled */}
//       <section className="py-24 bg-gray-900">
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
//             <div>
//               <div className="mb-8">
//                 <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
//                   PREMIUM AMENITIES
//                 </span>
//                 <h2 className="mb-6 text-5xl font-bold text-white">
//                   State-of-the-Art Facilities
//                 </h2>
//                 <p className="text-xl text-gray-300">
//                   Every detail meticulously planned for your perfect celebration
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-4">
//                     <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-white/10">
//                       <span className="font-bold text-white">{feature.icon}</span>
//                     </div>
//                     <span className="text-lg font-medium text-white">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-12">
//                 <Link 
//                   to="/services" 
//                   className="inline-flex items-center text-lg font-bold text-white transition-colors hover:text-gray-300"
//                 >
//                   View All Services
//                   <ChevronRight className="ml-2" size={20} />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="overflow-hidden rounded-2xl">
//                 <div 
//                   className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
//                   style={{
//                     backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//                   }}
//                 ></div>
//               </div>
//               <div className="absolute p-8 border shadow-2xl bg-white/10 backdrop-blur-sm -top-6 -right-6 rounded-2xl border-white/20">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-white">2000+</div>
//                   <div className="mt-2 text-gray-300">Guest Capacity</div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-32 overflow-hidden">
//         <div 
//           className="absolute inset-0 bg-fixed bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
//           <div className="mb-12">
//             <h2 className="mb-6 text-5xl font-bold text-white">
//               Begin Your Celebration
//             </h2>
//             <p className="text-2xl text-gray-200">
//               Schedule a personal consultation with Malik Abdul Rasheed
//             </p>
//           </div>
          
//           <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
//             <Link 
//               to="/contact" 
//               className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg group hover:bg-gray-100"
//             >
//               <Calendar className="mr-4" size={24} />
//               Book Consultation
//               <ChevronRight className="ml-4 transition-transform group-hover:translate-x-2" size={20} />
//             </Link>
            
//             <a 
//               href="tel:03216839646"
//               className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/10"
//             >
//               <Phone className="mr-4" size={24} />
//               Call Directly
//             </a>
//           </div>
          
//           <div className="pt-12 border-t border-white/20">
//             <div className="inline-block px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl">
//               <p className="mb-2 text-lg text-gray-300">Direct Contact</p>
//               <p className="text-3xl font-bold text-white">0321 6839646</p>
//               <p className="mt-2 text-gray-400">Malik Abdul Rasheed • Owner</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Home 









import { Link } from 'react-router-dom'
import { Calendar, Users, Sparkles, Award, Phone, ChevronRight, Star, Clock, MapPin, Camera } from 'lucide-react'
import { useState, useEffect } from 'react'

const Home = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeImage, setActiveImage] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    
    // Image slideshow
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearInterval(interval)
    }
  }, [])

  const heroImages = [
    '/hall6.jpg',
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ]

  const highlights = [
    {
      icon: <Users className="text-white" size={32} />,
      title: "Spacious Venue",
      description: "Accommodates up to 2000 guests with premium seating arrangements",
      stats: "2000+ Guests",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="text-white" size={32} />,
      title: "Premium Decor",
      description: "Customizable elegant decoration themes for every celebration",
      stats: "50+ Themes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Award className="text-white" size={32} />,
      title: "25 Years Legacy",
      description: "Decades of excellence in creating unforgettable wedding memories",
      stats: "1000+ Events",
      color: "from-amber-500 to-orange-500"
    }
  ]

  const features = [
    { icon: "✓", text: "Central Air Conditioning", category: "comfort" },
    { icon: "✓", text: "Ample Parking Space", category: "comfort" },
    { icon: "✓", text: "Modern Sound System", category: "tech" },
    { icon: "✓", text: "Elegant Chandeliers", category: "luxury" },
    { icon: "✓", text: "Customizable Layout", category: "flexibility" },
    { icon: "✓", text: "Bridal Dressing Rooms", category: "luxury" }
  ]

  const stats = [
    { number: "25+", label: "Years of Excellence", icon: <Award size={24} /> },
    { number: "2000+", label: "Guest Capacity", icon: <Users size={24} /> },
    { number: "1000+", label: "Happy Couples", icon: <Star size={24} /> },
    { number: "50+", label: "Themes Available", icon: <Sparkles size={24} /> }
  ]

  return (
    <>
      {/* Hero Section - Modern with Image Slideshow */}
      <section className="relative flex items-center min-h-screen overflow-hidden">
        {/* Background Images with Transition */}
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 scale-105 ${
              index === activeImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url("${img}")`,
              transform: `scale(${index === activeImage ? '1.05' : '1'})`,
              transition: 'opacity 1.5s ease-in-out, transform 8s ease-out'
            }}
          >
            {/* Overlay - Psychological gradient for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
          </div>
        ))}

        {/* Image Indicators */}
        <div className="absolute z-20 flex space-x-2 bottom-32 left-6">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === activeImage 
                  ? 'w-12 bg-white' 
                  : 'w-4 bg-white/40 hover:bg-white/60'
              }`}
            ></button>
          ))}
        </div>

        <div className="relative z-10 w-full px-6 mx-auto text-white max-w-7xl">
          <div className="max-w-3xl">
            {/* Badge - Psychological trust builder */}
            <div className="mb-8 inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
              <div className="flex -space-x-2">
                <div className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-gradient-to-r from-blue-500 to-purple-500">25</div>
                <div className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-gradient-to-r from-amber-500 to-orange-500">✨</div>
              </div>
              <span className="text-sm font-medium tracking-wide">Since 1999 • 25 Years of Excellence</span>
            </div>
            
            {/* Main Title - Psychologically optimized hierarchy */}
            <h1 className="mb-4 text-7xl md:text-8xl lg:text-9xl font-black leading-[0.8] tracking-tight">
              <span className="block text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                DAIM
              </span>
              <span className="block mt-4 text-4xl font-light md:text-5xl lg:text-6xl text-white/90">
                Marriage Hall & Marquee
              </span>
            </h1>
            
            {/* Location - Adds credibility */}
            <div className="flex items-center mb-8 space-x-2 text-gray-300">
              <MapPin size={20} className="text-blue-400" />
              <span>Bangla Gogera • Premium Wedding Destination</span>
            </div>
            
            {/* Divider - Elegant */}
            <div className="w-32 h-1 mb-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            {/* Description - Concise but powerful */}
            <p className="max-w-2xl mb-12 text-xl leading-relaxed text-gray-200 md:text-2xl">
              Creating timeless memories for 25 years. Bangla Gogera's most trusted venue for elegant celebrations, weddings, and corporate events.
            </p>
            
            {/* CTA Buttons - Clear hierarchy */}
            <div className="flex flex-col gap-5 sm:flex-row">
              <Link 
                to="/contact" 
                className="relative inline-flex items-center justify-center px-10 py-5 overflow-hidden text-lg font-bold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30"
              >
                <span className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></span>
                <Calendar className="mr-3" size={24} />
                Book Free Consultation
                <ChevronRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
              </Link>
              <Link 
                to="/gallery" 
                className="inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 border-2 border-white/30 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:border-white/50 hover:scale-105 group"
              >
                <Camera className="mr-3 transition-transform group-hover:scale-110" size={24} />
                View Gallery
              </Link>
            </div>

            {/* Trust badges - Social proof */}
            <div className="flex flex-wrap items-center gap-8 mt-12">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 border-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-600 border-white/20"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-300">1000+ Happy Couples</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span className="ml-2 text-sm text-gray-300">5.0 (500+ reviews)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center">
            <span className="mb-2 text-xs tracking-widest text-gray-400">SCROLL</span>
            <div className="flex justify-center w-5 h-10 border-2 rounded-full border-white/30">
              <div className="w-1 h-2 mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Floating stats for credibility */}
      <section className="relative z-20 px-6 -mt-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-4 p-8 border border-gray-800 shadow-2xl md:grid-cols-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl">
            {stats.map((stat, index) => (
              <div key={index} className="text-center cursor-default group">
                <div className="text-3xl font-bold text-transparent transition-transform duration-300 md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text group-hover:scale-110">
                  {stat.number}
                </div>
                <div className="flex items-center justify-center mt-2 text-gray-400">
                  {stat.icon}
                  <span className="ml-2 text-sm">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section - Modern Cards */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-sm tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 block font-semibold">
              WHY CHOOSE US
            </span>
            <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Excellence in{' '}
              <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Every Detail
              </span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              For 25 years, we've been the trusted choice for celebrations in Bangla Gogera
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="relative p-8 overflow-hidden transition-all duration-500 border border-gray-800 group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-transparent hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.color} rounded-2xl -z-10 blur-xl`}></div>
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${item.color} rounded-2xl -z-10`}></div>
                
                <div className={`relative z-10 w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${item.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                <div className="relative z-10">
                  <h3 className="mb-3 text-2xl font-bold text-white transition-colors group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                  <div className="inline-block px-4 py-2 text-sm font-semibold text-white rounded-lg bg-white/10">
                    {item.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Split Layout */}
      <section className="py-24 bg-black">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 block font-semibold">
                  PREMIUM AMENITIES
                </span>
                <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
                  State-of-the-Art{' '}
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    Facilities
                  </span>
                </h2>
                <p className="text-xl leading-relaxed text-gray-300">
                  Every detail meticulously planned for your perfect celebration. Experience luxury like never before.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 space-x-4 transition-all duration-300 border border-gray-800 rounded-xl bg-white/5 hover:bg-white/10 group">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 transition-transform duration-300 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 group-hover:scale-110">
                      <span className="font-bold text-white">{feature.icon}</span>
                    </div>
                    <span className="text-lg font-medium text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mt-12 space-x-6">
                <Link 
                  to="/services" 
                  className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 hover:scale-105 group"
                >
                  View All Services
                  <ChevronRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Get Quote →
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl group">
                <div 
                  className="w-full h-[600px] bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute flex flex-col space-y-3 top-6 left-6">
                  <div className="flex items-center px-4 py-2 text-sm font-semibold text-white border rounded-lg bg-white/10 backdrop-blur-md border-white/20">
                    <Clock size={16} className="mr-2" />
                    Available 24/7
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6">
                  <div className="px-6 py-4 text-center border bg-white/10 backdrop-blur-md border-white/20 rounded-xl">
                    <div className="text-3xl font-bold text-white">2000+</div>
                    <div className="text-sm text-gray-200">Guest Capacity</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute w-24 h-24 rounded-full -top-4 -right-4 bg-blue-500/20 blur-2xl"></div>
              <div className="absolute w-32 h-32 rounded-full -bottom-4 -left-4 bg-purple-500/20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Strong Call to Action */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
          {/* Decorative elements */}
          <div className="absolute top-0 w-40 h-40 -translate-x-1/2 rounded-full left-1/2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          
          <div className="mb-8">
            <span className="inline-block px-6 py-3 text-sm font-semibold tracking-widest text-transparent uppercase border rounded-full bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text border-white/10">
              BEGIN YOUR JOURNEY
            </span>
          </div>
          
          <h2 className="mb-6 text-5xl font-bold text-white md:text-6xl">
            Ready to Create Your{' '}
            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Perfect Celebration?
            </span>
          </h2>
          <p className="mb-12 text-2xl text-gray-200">
            Schedule a personal consultation with Malik Abdul Rasheed, our owner
          </p>
          
          <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
            <Link 
              to="/contact" 
              className="relative inline-flex items-center justify-center px-12 py-6 overflow-hidden text-xl font-bold text-white transition-all duration-300 group rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/30"
            >
              <span className="absolute inset-0 transition-transform duration-1000 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full"></span>
              <Calendar className="mr-4" size={24} />
              Book Free Consultation
              <ChevronRight className="ml-4 transition-transform group-hover:translate-x-2" size={20} />
            </Link>
            
            <a 
              href="tel:03216839646"
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/30 rounded-xl hover:bg-white/10 hover:border-white/50 hover:scale-105 group"
            >
              <Phone className="mr-4 group-hover:animate-pulse" size={24} />
              Call Owner Directly
            </a>
          </div>
          
          {/* Contact card */}
          <div className="inline-block p-8 border bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-white/20 rounded-2xl">
            <p className="mb-3 text-lg text-gray-300">Direct Contact with Owner</p>
            <p className="mb-2 text-4xl font-bold text-white">0321 6839646</p>
            <p className="flex items-center justify-center text-gray-400">
              <Award size={16} className="mr-2 text-blue-400" />
              Malik Abdul Rasheed • 25 Years Experience
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home