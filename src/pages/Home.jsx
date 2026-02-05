


// // import { Link } from 'react-router-dom'

// // const Home = () => {
// //   const highlights = [
// //     {
// //       title: "Spacious Venue",
// //       description: "Accommodates up to 2000 guests with comfortable seating arrangements in our expansive hall"
// //     },
// //     {
// //       title: "Premium Decor",
// //       description: "Elegant and customizable decoration themes curated for your special occasion"
// //     },
// //     {
// //       title: "25 Years Legacy",
// //       description: "Decades of creating unforgettable wedding memories with impeccable service"
// //     }
// //   ]

// //   const features = [
// //     "Central Air Conditioning",
// //     "Ample Parking Space",
// //     "Modern Sound System",
// //     "Elegant Chandeliers",
// //     "Customizable Layout",
// //     "Bridal Dressing Rooms"
// //   ]

// //   return (
// //     <>
// //       {/* Hero Section - Mila Miami Style */}
// //       <section className="relative h-screen flex items-center">
// //         {/* Background Image with Gradient Overlay */}
// //         <div 
// //           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
// //           style={{
// //             backgroundImage: 'url("https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
// //           }}
// //         >
// //           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
// //         </div>

// //         {/* Hero Content - Left Aligned like Mila Miami */}
// //         <div className="relative z-10 text-white px-6 md:px-12 lg:px-24 max-w-4xl">
// //           <div className="mb-8">
// //             <span className="text-sm tracking-widest uppercase text-gray-300 font-light">
// //               Since 1999
// //             </span>
// //           </div>
          
// //           <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-6">
// //             DAIM <span className="font-medium">Marriage Hall</span>
// //           </h1>
          
// //           <div className="w-24 h-0.5 bg-white mb-8"></div>
          
// //           <p className="text-xl md:text-2xl font-light text-gray-200 mb-12 max-w-2xl leading-relaxed">
// //             Bangla Gogera's premier venue where timeless elegance meets modern sophistication. 
// //             Creating unforgettable celebrations for 25 years.
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row gap-4">
// //             <Link 
// //               to="/contact" 
// //               className="px-10 py-4 bg-transparent border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-light"
// //             >
// //               Book Your Event
// //             </Link>
// //             <Link 
// //               to="/gallery" 
// //               className="px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 font-light"
// //             >
// //               View Gallery
// //             </Link>
// //           </div>
// //         </div>

// //         {/* Scroll Indicator - Minimal */}
// //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
// //           <div className="animate-pulse">
// //             <div className="w-6 h-10 border border-white/50 rounded-full flex justify-center">
// //               <div className="w-0.5 h-3 bg-white/70 mt-2 rounded-full"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Highlights Section - Clean Cards */}
// //       <section className="py-24 bg-white">
// //         <div className="max-w-7xl mx-auto px-6">
// //           {/* Section Header */}
// //           <div className="text-center mb-20">
// //             <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 block font-light">
// //               Why Choose Us
// //             </span>
// //             <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
// //               Excellence in Every Detail
// //             </h2>
// //             <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
// //               For 25 years, we have been the preferred choice for discerning families in Bangla Gogera
// //             </p>
// //           </div>

// //           {/* Highlights Grid */}
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
// //             {highlights.map((item, index) => (
// //               <div 
// //                 key={index}
// //                 className="text-center md:text-left group"
// //               >
// //                 {/* Number Indicator */}
// //                 <div className="text-6xl font-light text-gray-200 mb-6 group-hover:text-gray-300 transition-colors duration-300">
// //                   0{index + 1}
// //                 </div>
                
// //                 <h3 className="text-2xl font-light mb-4 text-gray-800 tracking-wide">
// //                   {item.title}
// //                 </h3>
// //                 <p className="text-gray-600 leading-relaxed font-light">
// //                   {item.description}
// //                 </p>
                
// //                 {/* Divider */}
// //                 <div className="w-12 h-0.5 bg-gray-300 mt-8 mx-auto md:mx-0 group-hover:w-16 transition-all duration-300"></div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Features Section - Minimal Grid */}
// //       <section className="py-20 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-6">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
// //             {/* Left Content */}
// //             <div>
// //               <span className="text-sm tracking-widest uppercase text-gray-500 mb-4 block font-light">
// //                 Our Amenities
// //               </span>
// //               <h2 className="text-4xl md:text-5xl font-light mb-8 text-gray-900">
// //                 Premium Facilities
// //               </h2>
// //               <p className="text-lg text-gray-600 mb-12 leading-relaxed font-light">
// //                 Every detail is meticulously planned to ensure your celebration is flawless and memorable.
// //               </p>
              
// //               {/* Features List */}
// //               <div className="grid grid-cols-2 gap-6">
// //                 {features.map((feature, index) => (
// //                   <div key={index} className="flex items-center">
// //                     <div className="w-1 h-1 bg-gray-400 rounded-full mr-3"></div>
// //                     <span className="text-gray-700 font-light">{feature}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* Right Image */}
// //             <div className="relative">
// //               <div className="aspect-w-4 aspect-h-3">
// //                 <div 
// //                   className="w-full h-full bg-cover bg-center"
// //                   style={{
// //                     backgroundImage: 'url("https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
// //                   }}
// //                 ></div>
// //               </div>
// //               <div className="absolute -left-6 -bottom-6 w-48 h-48 border border-gray-200"></div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section - Minimal */}
// //       <section className="relative py-32 bg-gray-900">
// //         {/* Subtle Pattern Overlay */}
// //         <div className="absolute inset-0 opacity-5">
// //           <div className="absolute inset-0" style={{
// //             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
// //             backgroundSize: '60px 60px'
// //           }}></div>
// //         </div>

// //         <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
// //           <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
// //             Begin Your Celebration
// //           </h2>
// //           <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
// //             Contact us for a personal consultation and experience the DAIM difference
// //           </p>
          
// //           <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //             <Link 
// //               to="/contact" 
// //               className="px-12 py-4 bg-transparent border border-white text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-light"
// //             >
// //               Schedule a Visit
// //             </Link>
// //             <Link 
// //               to="/about" 
// //               className="px-12 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 font-light"
// //             >
// //               Learn More
// //             </Link>
// //           </div>
          
// //           {/* Contact Info */}
// //           <div className="mt-16 pt-8 border-t border-white/10">
// //             <p className="text-gray-400 text-sm tracking-widest uppercase mb-4 font-light">
// //               Contact Directly
// //             </p>
// //             <p className="text-white text-xl font-light">
// //               +92 300 123 4567
// //             </p>
// //             <p className="text-gray-400 mt-2 font-light">
// //               Malik Abdul Rasheed
// //             </p>
// //           </div>
// //         </div>
// //       </section>
// //     </>
// //   )
// // }

// // export default Home   






// import { Link } from 'react-router-dom'

// const Home = () => {
//   const highlights = [
//     {
//       title: "Spacious Venue",
//       description: "Accommodates up to 2000 guests with comfortable seating arrangements"
//     },
//     {
//       title: "Premium Decor",
//       description: "Elegant and customizable decoration themes curated for your occasion"
//     },
//     {
//       title: "25 Years Legacy",
//       description: "Decades of creating unforgettable wedding memories with impeccable service"
//     }
//   ]

//   const features = [
//     { icon: "❖", text: "Central Air Conditioning" },
//     { icon: "❖", text: "Ample Parking Space" },
//     { icon: "❖", text: "Modern Sound System" },
//     { icon: "❖", text: "Elegant Chandeliers" },
//     { icon: "❖", text: "Customizable Layout" },
//     { icon: "❖", text: "Bridal Dressing Rooms" }
//   ]

//   return (
//     <>
//       {/* Hero Section */}
//       <section className="relative h-screen flex items-center">
//         {/* Background Image with Dark Overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
//         </div>

//         {/* Hero Content */}
//         <div className="relative z-10 text-white px-6 md:px-12 lg:px-24 max-w-5xl">
//           <div className="mb-6">
//             <span className="text-sm tracking-[0.2em] uppercase text-gray-300 font-light">
//               Since 1999 • Bangla Gogera
//             </span>
//           </div>
          
//           <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal leading-tight mb-6">
//             DAIM <span className="font-light">Marriage Hall</span>
//           </h1>
          
//           <div className="w-20 h-0.5 bg-white/70 mb-8"></div>
          
//           <p className="text-xl md:text-2xl font-light text-white mb-12 max-w-2xl leading-relaxed">
//             Where timeless elegance meets modern sophistication. Creating unforgettable celebrations for 25 years.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4">
//             <Link 
//               to="/contact" 
//               className="px-10 py-4 bg-white text-black text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 font-medium inline-flex items-center justify-center"
//             >
//               Book Your Event
//               <span className="ml-3">→</span>
//             </Link>
//             <Link 
//               to="/gallery" 
//               className="px-10 py-4 bg-transparent border border-white/50 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 font-medium"
//             >
//               View Gallery
//             </Link>
//           </div>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
//           <div className="animate-pulse flex flex-col items-center">
//             <span className="text-white/70 text-xs mb-2 tracking-widest">SCROLL</span>
//             <div className="w-4 h-8 border border-white/30 rounded-full flex justify-center">
//               <div className="w-0.5 h-3 bg-white/60 mt-1 rounded-full"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Highlights Section with Background Image */}
//       <section className="relative py-24 bg-white">
//         {/* Subtle Background Pattern */}
//         <div className="absolute inset-0 opacity-[0.02] bg-[url('https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"></div>
        
//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           {/* Section Header */}
//           <div className="text-center mb-20">
//             <span className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 block font-medium">
//               Why Choose Us
//             </span>
//             <h2 className="text-4xl md:text-5xl font-normal mb-6 text-gray-900">
//               Excellence in Every Detail
//             </h2>
//             <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light">
//               For 25 years, we have been the preferred choice for discerning families
//             </p>
//           </div>

//           {/* Highlights Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {highlights.map((item, index) => (
//               <div 
//                 key={index}
//                 className="text-center group relative"
//               >
//                 {/* Card Background */}
//                 <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 border border-gray-100 rounded-lg transform group-hover:scale-[1.02] transition-all duration-500"></div>
                
//                 <div className="relative p-8">
//                   {/* Number Indicator */}
//                   <div className="text-5xl font-light text-gray-800/10 mb-6 group-hover:text-gray-800/20 transition-colors duration-300">
//                     0{index + 1}
//                   </div>
                  
//                   <h3 className="text-2xl font-medium mb-4 text-gray-800 tracking-wide">
//                     {item.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed font-light">
//                     {item.description}
//                   </p>
                  
//                   {/* Bottom Line */}
//                   <div className="w-16 h-0.5 bg-gray-800 mt-8 mx-auto group-hover:w-20 transition-all duration-300"></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Features Section with Image Background */}
//       <section className="relative py-24 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0">
//           <div 
//             className="absolute inset-0 bg-cover bg-center opacity-10"
//             style={{
//               backgroundImage: 'url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//             }}
//           ></div>
//           <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-gray-50"></div>
//         </div>

//         <div className="relative z-10 max-w-7xl mx-auto px-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             {/* Left Content */}
//             <div>
//               <span className="text-sm tracking-[0.2em] uppercase text-gray-500 mb-4 block font-medium">
//                 Our Amenities
//               </span>
//               <h2 className="text-4xl md:text-5xl font-normal mb-8 text-gray-900">
//                 Premium Facilities
//               </h2>
//               <p className="text-lg text-gray-700 mb-12 leading-relaxed font-light">
//                 Every detail is meticulously planned to ensure your celebration is flawless and memorable.
//               </p>
              
//               {/* Features Grid */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {features.map((feature, index) => (
//                   <div key={index} className="flex items-start group">
//                     <div className="text-gray-800 mr-4 mt-1 text-lg group-hover:text-gray-600 transition-colors">❖</div>
//                     <div>
//                       <span className="text-gray-800 font-medium block">{feature.text}</span>
//                       <div className="w-8 h-0.5 bg-gray-300 mt-2 group-hover:w-12 transition-all duration-300"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="relative">
//               <div className="relative overflow-hidden rounded-lg">
//                 <div 
//                   className="w-full h-96 bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
//                   style={{
//                     backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")'
//                   }}
//                 ></div>
//               </div>
//               <div className="absolute -right-6 -bottom-6 w-64 h-64 border-2 border-gray-200/50 rounded-lg"></div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section with Background Image */}
//       <section className="relative py-32 overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div 
//           className="absolute inset-0 bg-cover bg-center bg-fixed"
//           style={{
//             backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")'
//           }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
//         </div>

//         <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
//           <span className="text-sm tracking-[0.2em] uppercase text-gray-300 mb-4 block font-medium">
//             Begin Your Celebration
//           </span>
          
//           <h2 className="text-4xl md:text-5xl font-normal text-white mb-8">
//             Experience the DAIM Difference
//           </h2>
          
//           <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
//             Contact us for a personal consultation with Malik Abdul Rasheed
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               to="/contact" 
//               className="px-12 py-4 bg-white text-gray-900 text-sm tracking-widest uppercase hover:bg-gray-100 transition-all duration-300 font-medium inline-flex items-center justify-center"
//             >
//               Schedule a Visit
//               <span className="ml-3">→</span>
//             </Link>
//             <Link 
//               to="/about" 
//               className="px-12 py-4 bg-transparent border border-white/30 text-white text-sm tracking-widest uppercase hover:bg-white/10 transition-all duration-300 font-medium"
//             >
//               Learn About Us
//             </Link>
//           </div>
          
//           {/* Contact Info */}
//           <div className="mt-20 pt-8 border-t border-white/20">
//             <p className="text-gray-300 text-sm tracking-[0.2em] uppercase mb-4 font-medium">
//               Contact Directly
//             </p>
//             <p className="text-white text-2xl font-light mb-2">
//               +92 300 123 4567
//             </p>
//             <p className="text-gray-400 font-light">
//               Malik Abdul Rasheed • Owner
//             </p>
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
              <span className="text-sm font-medium">Since 1999</span>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            DAIM <br />
            <span className="text-gray-300">Marriage Hall</span>
          </h1>
          
          <div className="w-24 h-1 bg-white mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-gray-200 mb-12 max-w-2xl leading-relaxed font-light">
            Bangla Gogera's premier destination for elegant celebrations. 
            25 years of creating timeless memories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Calendar className="mr-3" size={24} />
              Book Your Event
              <ChevronRight className="ml-3 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
            <Link 
              to="/gallery" 
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View Our Gallery
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronRight className="text-white rotate-90" size={24} />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Excellence in Every Detail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For 25 years, we've been the trusted choice for celebrations in Bangla Gogera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-8 group-hover:bg-gray-200 transition-colors">
                  {item.icon}
                </div>
                
                <div className="text-4xl font-bold text-gray-900 mb-4 text-gray-300">0{index + 1}</div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-gray-200 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h2 className="text-5xl font-bold text-gray-900 mb-6">
                  Premium Facilities
                </h2>
                <p className="text-xl text-gray-600">
                  Every detail meticulously planned for your perfect celebration
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold">{feature.icon}</span>
                    </div>
                    <span className="text-gray-800 font-medium text-lg">{feature.text}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-gray-900 font-bold text-lg hover:text-blue-600 transition-colors"
                >
                  View All Services
                  <ChevronRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="w-full h-[500px] bg-cover bg-center rounded-2xl hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
                  }}
                ></div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-8 rounded-2xl shadow-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-900">2000+</div>
                  <div className="text-gray-600 mt-2">Guest Capacity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-5xl font-bold text-white mb-6">
              Begin Your Celebration
            </h2>
            <p className="text-2xl text-gray-200">
              Schedule a personal consultation with Malik Abdul Rasheed
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-12 py-5 bg-white text-gray-900 text-xl font-bold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              <Calendar className="mr-4" size={24} />
              Book Consultation
              <ChevronRight className="ml-4 group-hover:translate-x-2 transition-transform" size={20} />
            </Link>
            
            <a 
              href="tel:03216839646"
              className="inline-flex items-center justify-center px-12 py-5 bg-transparent border-2 border-white text-white text-xl font-bold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <Phone className="mr-4" size={24} />
              Call Directly
            </a>
          </div>
          
          <div className="pt-12 border-t border-white/20">
            <div className="inline-block px-8 py-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="text-gray-300 text-lg mb-2">Direct Contact</p>
              <p className="text-3xl font-bold text-white">0321 6839646</p>
              <p className="text-gray-400 mt-2">Malik Abdul Rasheed • Owner</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home