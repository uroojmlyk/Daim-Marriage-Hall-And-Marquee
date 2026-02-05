// // import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
// // import ContactButton from './ContactButton'

// // const Footer = () => {
// //   const currentYear = new Date().getFullYear()

// //   return (
// //     <footer className="text-white bg-gradient-to-b from-maroon to-black">
// //       <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
// //         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
// //           {/* Brand Info */}
// //           <div className="space-y-4">
// //             <div className="flex items-center space-x-3">
// //               <div className="flex items-center justify-center rounded-full w-14 h-14 bg-gold">
// //                 <span className="text-3xl font-bold text-maroon">D</span>
// //               </div>
// //               <div>
// //                 <h2 className="text-2xl font-bold font-playfair">DAIM</h2>
// //                 <p className="text-sm text-gray-300">Marriage Hall & Marquee</p>
// //               </div>
// //             </div>
// //             <p className="text-gray-300">
// //               Celebrating 25 years of creating unforgettable moments with elegance and tradition.
// //             </p>
// //           </div>

// //           {/* Quick Links */}
// //           <div>
// //             <h3 className="mb-6 text-xl font-bold font-playfair">Quick Links</h3>
// //             <ul className="space-y-3">
// //               {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
// //                 <li key={item}>
// //                   <a
// //                     href={`/${item.toLowerCase()}`}
// //                     className="block text-gray-300 transition-colors duration-300 hover:text-gold hover:pl-2"
// //                   >
// //                     {item}
// //                   </a>
// //                 </li>
// //               ))}
// //             </ul>
// //           </div>

// //           {/* Contact Info */}
// //           <div>
// //             <h3 className="mb-6 text-xl font-bold font-playfair">Contact Info</h3>
// //             <div className="space-y-4">
// //               <div className="flex items-start space-x-3">
// //                 <MapPin className="flex-shrink-0 mt-1 text-gold" size={20} />
// //                 <span className="text-gray-300">Bangla Gogera, Main Road, Near City Center</span>
// //               </div>
// //               <div className="flex items-center space-x-3">
// //                 <Phone className="flex-shrink-0 text-gold" size={20} />
// //                 <span className="text-gray-300">+92 300 1234567</span>
// //               </div>
// //               <div className="flex items-center space-x-3">
// //                 <Mail className="flex-shrink-0 text-gold" size={20} />
// //                 <span className="text-gray-300">info@daimhall.com</span>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Social Media */}
// //           <div>
// //             <h3 className="mb-6 text-xl font-bold font-playfair">Connect With Us</h3>
// //             <div className="flex mb-6 space-x-4">
// //               <ContactButton 
// //                 type="whatsapp" 
// //                 className="p-3 text-white transition-all duration-300 bg-green-600 rounded-full hover:bg-green-700 hover:scale-110"
// //               />
// //               <ContactButton 
// //                 type="instagram" 
// //                 className="p-3 text-white transition-all duration-300 bg-pink-600 rounded-full hover:bg-pink-700 hover:scale-110"
// //               />
// //               <ContactButton 
// //                 type="facebook" 
// //                 className="p-3 text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:scale-110"
// //               />
// //             </div>
// //             <p className="text-sm text-gray-400">
// //               Follow us for updates, special offers, and wedding inspiration.
// //             </p>
// //           </div>
// //         </div>

// //         {/* Copyright */}
// //         <div className="pt-8 mt-8 text-center border-t border-gray-800">
// //           <p className="text-gray-400">
// //             © {currentYear} DAIM Marriage Hall & Marquee. All rights reserved. | Owned by Malik Abdul Rasheed
// //           </p>
// //           <p className="mt-2 text-sm text-gray-500">
// //             Celebrating 25 years of excellence in wedding celebrations
// //           </p>
// //         </div>
// //       </div>
// //     </footer>
// //   )
// // }

// // export default Footer








// import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Heart, Calendar } from 'lucide-react'
// import ContactButton from './ContactButton'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()
  
//   // WhatsApp number with click-to-chat
//   const whatsappNumber = "923216839646" // Remove + for direct linking
//   const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20DAIM%20Marriage%20Hall,%20I%20would%20like%20to%20inquire%20about%20your%20services.`
  
//   // Social media links
//   const socialLinks = {
//     instagram: "https://instagram.com/daim_marriage_hall",
//     facebook: "https://facebook.com/malik.abdul.rasheed.daim"
//   }

//   return (
//     <footer className="relative overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div 
//         className="absolute inset-0 bg-center bg-cover"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
//         }}
//       >
//         <div className="absolute inset-0 bg-black/85"></div>
//       </div>

//       <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
//           {/* Brand Info */}
//           <div className="space-y-6">
//             <div className="flex items-center space-x-4">
//               <div className="flex items-center justify-center w-16 h-16 border-2 border-white rounded-full">
//                 <span className="text-3xl font-bold text-white">D</span>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-bold text-white">DAIM</h2>
//                 <p className="text-sm text-gray-300">Marriage Hall & Marquee</p>
//               </div>
//             </div>
//             <p className="text-lg leading-relaxed text-gray-300">
//               Creating unforgettable wedding memories for 25 years in Bangla Gogera.
//             </p>
//             <div className="flex items-center space-x-2 text-gray-400">
//               <Heart size={16} />
//               <span className="text-sm">Since 1999</span>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="pb-2 mb-8 text-xl font-bold text-white border-b border-white/20">
//               Quick Links
//             </h3>
//             <ul className="space-y-4">
//               {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`/${item.toLowerCase()}`}
//                     className="block text-lg font-medium text-gray-300 transition-all duration-300 hover:text-white hover:pl-3"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="pb-2 mb-8 text-xl font-bold text-white border-b border-white/20">
//               Contact Us
//             </h3>
//             <div className="space-y-6">
//               <div className="flex items-start space-x-4">
//                 <MapPin className="flex-shrink-0 mt-1 text-white" size={20} />
//                 <span className="text-lg text-gray-300">Bangla Gogera, Main Road, Near City Center</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Phone className="flex-shrink-0 text-white" size={20} />
//                 <div>
//                   <a 
//                     href="tel:+923216839646"
//                     className="block text-xl font-bold text-white transition-colors hover:text-gray-300"
//                   >
//                     0321 6839646
//                   </a>
//                   <p className="text-sm text-gray-400">Malik Abdul Rasheed</p>
//                 </div>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <Mail className="flex-shrink-0 text-white" size={20} />
//                 <a 
//                   href="mailto:info@daimhall.com"
//                   className="text-lg text-gray-300 transition-colors hover:text-white"
//                 >
//                   info@daimhall.com
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="pb-2 mb-8 text-xl font-bold text-white border-b border-white/20">
//               Connect With Us
//             </h3>
            
//             {/* WhatsApp Button - Direct Chat */}
//             <div className="mb-8">
//               <a
//                 href={whatsappUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-flex items-center justify-center w-full px-6 py-4 space-x-3 text-white transition-all duration-300 bg-green-600 rounded-lg hover:bg-green-700 hover:scale-105 group"
//               >
//                 <MessageCircle size={24} />
//                 <div className="text-left">
//                   <div className="text-lg font-bold">WhatsApp Chat</div>
//                   <div className="text-sm text-green-100">Click to chat on 0321 6839646</div>
//                 </div>
//               </a>
//             </div>

//             {/* Other Social Media */}
//             <div className="space-y-6">
//               <a
//                 href={socialLinks.instagram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center p-4 space-x-4 transition-all duration-300 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90 group"
//               >
//                 <Instagram size={24} className="text-white" />
//                 <div>
//                   <div className="font-bold text-white">Instagram</div>
//                   <div className="text-sm text-gray-200">@daim_marriage_hall</div>
//                 </div>
//               </a>

//               <a
//                 href={socialLinks.facebook}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center p-4 space-x-4 transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90 group"
//               >
//                 <Facebook size={24} className="text-white" />
//                 <div>
//                   <div className="font-bold text-white">Facebook</div>
//                   <div className="text-sm text-gray-200">Malik Abdul Rasheed</div>
//                 </div>
//               </a>
//             </div>

//             {/* Booking Button */}
//             <div className="mt-8">
//               <a
//                 href="/contact"
//                 className="inline-flex items-center justify-center w-full px-6 py-4 space-x-3 font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg hover:bg-gray-100"
//               >
//                 <Calendar size={20} />
//                 <span>Book Your Event</span>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright & Info */}
//         <div className="pt-8 mt-16 border-t border-white/20">
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div>
//               <p className="text-lg text-gray-400">
//                 © {currentYear} DAIM Marriage Hall & Marquee. All rights reserved.
//               </p>
//               <p className="mt-2 text-gray-500">
//                 Owned and operated by <span className="font-bold text-white">Malik Abdul Rasheed</span>
//               </p>
//             </div>
            
//             <div className="text-right">
//               <p className="text-gray-400">
//                 <span className="font-bold text-white">25 Years</span> of Excellence
//               </p>
//               <p className="mt-1 text-sm text-gray-500">
//                 Trusted by thousands of families in Bangla Gogera
//               </p>
//             </div>
//           </div>
          
//           {/* Important Notice */}
//           <div className="p-4 mt-8 text-center rounded-lg bg-white/10">
//             <p className="text-sm text-gray-300">
//               For immediate inquiries, WhatsApp us directly at <span className="font-bold text-white">0321 6839646</span> 
//               or call for a personal consultation with Malik Abdul Rasheed.
//             </p>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer








import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/daim_marriage_hall",
    facebook: "https://facebook.com/malik.abdul.rasheed.daim",
    whatsapp: "https://wa.me/923216839646?text=Hello%20DAIM%20Marriage%20Hall,%20I%20would%20like%20to%20inquire%20about%20your%20services."
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">
      <div className="relative z-10 px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 border border-gray-600 rounded-full">
                <span className="text-xl font-bold text-white">D</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">DAIM</h2>
                <p className="text-xs text-gray-400">Marriage Hall & Marquee</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Creating unforgettable wedding memories for 25 years in Bangla Gogera.
            </p>
            <div className="flex items-center space-x-2 text-gray-500">
              <Heart size={14} />
              <span className="text-xs">Since 1999</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="pb-2 mb-5 text-base font-semibold text-white border-b border-gray-700">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="block text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="pb-2 mb-5 text-base font-semibold text-white border-b border-gray-700">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-gray-400 mt-0.5 flex-shrink-0" size={16} />
                <span className="text-sm text-gray-400">Bangla Gogera, Main Road</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="flex-shrink-0 text-gray-400" size={16} />
                <div>
                  <a 
                    href="tel:+923216839646"
                    className="block text-sm font-medium text-white transition-colors hover:text-gray-300"
                  >
                    0321 6839646
                  </a>
                  <p className="text-xs text-gray-500">Malik Abdul Rasheed</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 text-gray-400" size={16} />
                <a 
                  href="mailto:info@daimhall.com"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  info@daimhall.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="pb-2 mb-5 text-base font-semibold text-white border-b border-gray-700">
              Connect With Us
            </h3>
            
            {/* Social Media Buttons */}
            <div className="mb-6 space-y-3">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 space-x-3 text-sm text-white transition-all duration-200 bg-green-600 rounded-md hover:bg-green-700"
              >
                <MessageCircle size={18} />
                <span className="font-medium">WhatsApp</span>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 space-x-3 text-sm text-white transition-all duration-200 rounded-md bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90"
              >
                <Instagram size={18} />
                <span className="font-medium">Instagram</span>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-3 space-x-3 text-sm text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700"
              >
                <Facebook size={18} />
                <span className="font-medium">Facebook</span>
              </a>
            </div>

            {/* Quick Contact */}
            <div className="mt-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2 space-x-2 text-sm font-medium text-white transition-colors bg-gray-800 rounded-md hover:bg-gray-700"
              >
                <Phone size={16} />
                <span>Book Consultation</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-10 border-t border-gray-800">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="text-sm text-gray-500">
                © {currentYear} DAIM Marriage Hall & Marquee. All rights reserved.
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Owned by <span className="font-medium text-gray-400">Malik Abdul Rasheed</span>
              </p>
            </div>
            
            <div className="md:text-right">
              <p className="text-sm text-gray-500">
                <span className="font-medium text-gray-400">25 Years</span> of Excellence
              </p>
              <p className="mt-1 text-xs text-gray-600">
                Trusted by thousands of families
              </p>
            </div>
          </div>
          
          {/* Contact Notice */}
          <div className="p-3 mt-6 text-center rounded bg-gray-800/50">
            <p className="text-xs text-gray-400">
              For immediate inquiries, contact: <span className="font-medium text-white">0321 6839646</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer