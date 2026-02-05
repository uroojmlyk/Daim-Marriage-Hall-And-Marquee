





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
//       {/* Hero Section */}
//       <section className="relative flex items-center min-h-screen">
//         <div 
//           className="absolute inset-0 bg-center bg-cover"
//           style={{
//             backgroundImage: 'url("/hall6.jpg")'
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
//         </div>

//         <div className="relative z-10 px-6 mx-auto text-white max-w-7xl">
//           <div className="mb-8">
//             <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
//               <span className="text-sm font-medium">Since 1999</span>
//             </div>
//           </div>
          
//           <h1 className="mb-8 text-6xl font-bold leading-tight text-orange-500 md:text-7xl lg:text-9xl">
//             DAIM <br />
//             <span className="text-6xl text-gray-300 md:text-7xl lg:text-9xl ">Marriage Hall <br /> And Marquee</span>
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
//               className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/10"
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

//       {/* Highlights Section */}
//       <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="mb-20 text-center">
//             <h2 className="mb-6 text-5xl font-bold text-gray-900">
//               Excellence in Every Detail
//             </h2>
//             <p className="max-w-3xl mx-auto text-xl text-gray-600">
//               For 25 years, we've been the trusted choice for celebrations in Bangla Gogera
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
//             {highlights.map((item, index) => (
//               <div 
//                 key={index}
//                 className="p-10 transition-all duration-500 bg-white shadow-lg group rounded-2xl hover:shadow-2xl hover:-translate-y-2"
//               >
//                 <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors bg-gray-100 rounded-2xl group-hover:bg-gray-200">
//                   {item.icon}
//                 </div>
                
//                 <div className="mb-4 text-4xl font-bold text-gray-300 text-gray-900">0{index + 1}</div>
                
//                 <h3 className="mb-4 text-2xl font-bold text-gray-900">
//                   {item.title}
//                 </h3>
//                 <p className="leading-relaxed text-gray-600">
//                   {item.description}
//                 </p>
                
//                 <div className="pt-6 mt-8 transition-colors border-t border-gray-100 group-hover:border-gray-200"></div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 bg-white">
//         <div className="px-6 mx-auto max-w-7xl">
//           <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
//             <div>
//               <div className="mb-8">
//                 <h2 className="mb-6 text-5xl font-bold text-gray-900">
//                   Premium Facilities
//                 </h2>
//                 <p className="text-xl text-gray-600">
//                   Every detail meticulously planned for your perfect celebration
//                 </p>
//               </div>
              
//               <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-center space-x-4">
//                     <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-blue-50">
//                       <span className="font-bold text-blue-600">{feature.icon}</span>
//                     </div>
//                     <span className="text-lg font-medium text-gray-800">{feature.text}</span>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="mt-12">
//                 <Link 
//                   to="/services" 
//                   className="inline-flex items-center text-lg font-bold text-gray-900 transition-colors hover:text-blue-600"
//                 >
//                   View All Services
//                   <ChevronRight className="ml-2" size={20} />
//                 </Link>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="overflow-hidden rounded-2xl">
//                 <div 
//                   className="w-full h-[500px] bg-cover bg-center rounded-2xl hover:scale-105 transition-transform duration-700"
//                   style={{
//                     backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//                   }}
//                 ></div>
//               </div>
//               <div className="absolute p-8 bg-white shadow-2xl -top-6 -right-6 rounded-2xl">
//                 <div className="text-center">
//                   <div className="text-4xl font-bold text-gray-900">2000+</div>
//                   <div className="mt-2 text-gray-600">Guest Capacity</div>
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
import { Calendar, Users, Sparkles, Award, Phone, ChevronRight } from 'lucide-react'

const Home = () => {
  const highlights = [
    {
      icon: <Users className="text-gray-800" size={28} />,
      title: "Spacious Venue",
      description: "Accommodates up to 2000 guests with premium seating arrangements"
    },
    {
      icon: <Sparkles className="text-gray-800" size={28} />,
      title: "Premium Decor",
      description: "Customizable elegant decoration themes for every celebration"
    },
    {
      icon: <Award className="text-gray-800" size={28} />,
      title: "25 Years Legacy",
      description: "Decades of excellence in creating unforgettable wedding memories"
    }
  ]

  const features = [
    { icon: "✓", text: "Central Air Conditioning" },
    { icon: "✓", text: "Ample Parking Space" },
    { icon: "✓", text: "Modern Sound System" },
    { icon: "✓", text: "Elegant Chandeliers" },
    { icon: "✓", text: "Customizable Layout" },
    { icon: "✓", text: "Bridal Dressing Rooms" }
  ]

  return (
    <>
      {/* Hero Section - Blue overlay removed */}
      <section className="relative flex items-center min-h-screen">
        <div 
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: 'url("/hall6.jpg")'
          }}
        ></div>

        <div className="relative z-10 px-6 mx-auto text-white max-w-7xl">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-sm font-medium">Since 1999</span>
            </div>
          </div>
          
          <h1 className="mb-8 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-9xl">
            DAIM <br />
            <span className="text-6xl text-white md:text-7xl lg:text-9xl ">Marriage Hall <br /> And Marquee</span>
          </h1>
          
          <div className="w-24 h-1 mb-10 bg-white"></div>
          
          <p className="max-w-2xl mb-12 text-2xl font-light leading-relaxed text-gray-200 md:text-3xl">
            Bangla Gogera's premier destination for elegant celebrations. 
            25 years of creating timeless memories.
          </p>
          
          <div className="flex flex-col gap-6 sm:flex-row">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg group hover:bg-gray-100"
            >
              <Calendar className="mr-3" size={24} />
              Book Your Event
              <ChevronRight className="ml-3 transition-transform group-hover:translate-x-2" size={20} />
            </Link>
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-300 border-2 border-white rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              View Our Gallery
            </Link>
          </div>
        </div>

        <div className="absolute transform -translate-x-1/2 bottom-10 left-1/2">
          <div className="animate-bounce">
            <ChevronRight className="text-white rotate-90" size={24} />
          </div>
        </div>
      </section>

      {/* Highlights Section - Styled */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              WHY CHOOSE US
            </span>
            <h2 className="mb-6 text-5xl font-bold text-white">
              Excellence in Every Detail
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              For 25 years, we've been the trusted choice for celebrations in Bangla Gogera
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-10 transition-all duration-500 border bg-white/5 backdrop-blur-sm rounded-2xl border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-8 transition-colors bg-white/10 rounded-2xl group-hover:bg-white/20">
                  {item.icon}
                </div>
                
                <div className="mb-4 text-4xl font-bold text-white/40">0{index + 1}</div>
                
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-gray-300">
                  {item.description}
                </p>
                
                <div className="pt-6 mt-8 transition-colors border-t border-white/10 group-hover:border-white/20"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Styled */}
      <section className="py-24 bg-gray-900">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8">
                <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
                  PREMIUM AMENITIES
                </span>
                <h2 className="mb-6 text-5xl font-bold text-white">
                  State-of-the-Art Facilities
                </h2>
                <p className="text-xl text-gray-300">
                  Every detail meticulously planned for your perfect celebration
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-lg bg-white/10">
                      <span className="font-bold text-white">{feature.icon}</span>
                    </div>
                    <span className="text-lg font-medium text-white">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-lg font-bold text-white transition-colors hover:text-gray-300"
                >
                  View All Services
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="w-full h-[500px] bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                  }}
                ></div>
              </div>
              <div className="absolute p-8 border shadow-2xl bg-white/10 backdrop-blur-sm -top-6 -right-6 rounded-2xl border-white/20">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">2000+</div>
                  <div className="mt-2 text-gray-300">Guest Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl px-6 mx-auto text-center">
          <div className="mb-12">
            <h2 className="mb-6 text-5xl font-bold text-white">
              Begin Your Celebration
            </h2>
            <p className="text-2xl text-gray-200">
              Schedule a personal consultation with Malik Abdul Rasheed
            </p>
          </div>
          
          <div className="flex flex-col justify-center gap-6 mb-16 sm:flex-row">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg group hover:bg-gray-100"
            >
              <Calendar className="mr-4" size={24} />
              Book Consultation
              <ChevronRight className="ml-4 transition-transform group-hover:translate-x-2" size={20} />
            </Link>
            
            <a 
              href="tel:03216839646"
              className="inline-flex items-center justify-center px-12 py-5 text-xl font-bold text-white transition-all duration-300 bg-transparent border-2 border-white rounded-lg hover:bg-white/10"
            >
              <Phone className="mr-4" size={24} />
              Call Directly
            </a>
          </div>
          
          <div className="pt-12 border-t border-white/20">
            <div className="inline-block px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="mb-2 text-lg text-gray-300">Direct Contact</p>
              <p className="text-3xl font-bold text-white">0321 6839646</p>
              <p className="mt-2 text-gray-400">Malik Abdul Rasheed • Owner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home