// import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail } from 'lucide-react'
// import ContactButton from './ContactButton'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   return (
//     <footer className="bg-gradient-to-b from-maroon to-black text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand Info */}
//           <div className="space-y-4">
//             <div className="flex items-center space-x-3">
//               <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center">
//                 <span className="text-3xl font-bold text-maroon">D</span>
//               </div>
//               <div>
//                 <h2 className="text-2xl font-playfair font-bold">DAIM</h2>
//                 <p className="text-sm text-gray-300">Marriage Hall & Marquee</p>
//               </div>
//             </div>
//             <p className="text-gray-300">
//               Celebrating 25 years of creating unforgettable moments with elegance and tradition.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-playfair font-bold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
//                 <li key={item}>
//                   <a
//                     href={`/${item.toLowerCase()}`}
//                     className="text-gray-300 hover:text-gold transition-colors duration-300 hover:pl-2 block"
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-xl font-playfair font-bold mb-6">Contact Info</h3>
//             <div className="space-y-4">
//               <div className="flex items-start space-x-3">
//                 <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
//                 <span className="text-gray-300">Bangla Gogera, Main Road, Near City Center</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Phone className="text-gold flex-shrink-0" size={20} />
//                 <span className="text-gray-300">+92 300 1234567</span>
//               </div>
//               <div className="flex items-center space-x-3">
//                 <Mail className="text-gold flex-shrink-0" size={20} />
//                 <span className="text-gray-300">info@daimhall.com</span>
//               </div>
//             </div>
//           </div>

//           {/* Social Media */}
//           <div>
//             <h3 className="text-xl font-playfair font-bold mb-6">Connect With Us</h3>
//             <div className="flex space-x-4 mb-6">
//               <ContactButton 
//                 type="whatsapp" 
//                 className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//               />
//               <ContactButton 
//                 type="instagram" 
//                 className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//               />
//               <ContactButton 
//                 type="facebook" 
//                 className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
//               />
//             </div>
//             <p className="text-gray-400 text-sm">
//               Follow us for updates, special offers, and wedding inspiration.
//             </p>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center">
//           <p className="text-gray-400">
//             © {currentYear} DAIM Marriage Hall & Marquee. All rights reserved. | Owned by Malik Abdul Rasheed
//           </p>
//           <p className="text-gray-500 text-sm mt-2">
//             Celebrating 25 years of excellence in wedding celebrations
//           </p>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer








import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, Heart, Calendar } from 'lucide-react'
import ContactButton from './ContactButton'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  // WhatsApp number with click-to-chat
  const whatsappNumber = "923216839646" // Remove + for direct linking
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20DAIM%20Marriage%20Hall,%20I%20would%20like%20to%20inquire%20about%20your%20services.`
  
  // Social media links
  const socialLinks = {
    instagram: "https://instagram.com/daim_marriage_hall",
    facebook: "https://facebook.com/malik.abdul.rasheed.daim"
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                <span className="text-3xl font-bold text-white">D</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">DAIM</h2>
                <p className="text-sm text-gray-300">Marriage Hall & Marquee</p>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Creating unforgettable wedding memories for 25 years in Bangla Gogera.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart size={16} />
              <span className="text-sm">Since 1999</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-2 border-b border-white/20">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {['Home', 'About', 'Gallery', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-all duration-300 hover:pl-3 block text-lg font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-2 border-b border-white/20">
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-white mt-1 flex-shrink-0" size={20} />
                <span className="text-gray-300 text-lg">Bangla Gogera, Main Road, Near City Center</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-white flex-shrink-0" size={20} />
                <div>
                  <a 
                    href="tel:+923216839646"
                    className="text-white text-xl font-bold hover:text-gray-300 transition-colors block"
                  >
                    0321 6839646
                  </a>
                  <p className="text-gray-400 text-sm">Malik Abdul Rasheed</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-white flex-shrink-0" size={20} />
                <a 
                  href="mailto:info@daimhall.com"
                  className="text-gray-300 hover:text-white transition-colors text-lg"
                >
                  info@daimhall.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-8 pb-2 border-b border-white/20">
              Connect With Us
            </h3>
            
            {/* WhatsApp Button - Direct Chat */}
            <div className="mb-8">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-lg w-full transition-all duration-300 hover:scale-105 group"
              >
                <MessageCircle size={24} />
                <div className="text-left">
                  <div className="font-bold text-lg">WhatsApp Chat</div>
                  <div className="text-sm text-green-100">Click to chat on 0321 6839646</div>
                </div>
              </a>
            </div>

            {/* Other Social Media */}
            <div className="space-y-6">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:opacity-90 transition-all duration-300 group"
              >
                <Instagram size={24} className="text-white" />
                <div>
                  <div className="text-white font-bold">Instagram</div>
                  <div className="text-sm text-gray-200">@daim_marriage_hall</div>
                </div>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg hover:opacity-90 transition-all duration-300 group"
              >
                <Facebook size={24} className="text-white" />
                <div>
                  <div className="text-white font-bold">Facebook</div>
                  <div className="text-sm text-gray-200">Malik Abdul Rasheed</div>
                </div>
              </a>
            </div>

            {/* Booking Button */}
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center space-x-3 bg-white text-gray-900 px-6 py-4 rounded-lg w-full font-bold hover:bg-gray-100 transition-all duration-300"
              >
                <Calendar size={20} />
                <span>Book Your Event</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright & Info */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-400 text-lg">
                © {currentYear} DAIM Marriage Hall & Marquee. All rights reserved.
              </p>
              <p className="text-gray-500 mt-2">
                Owned and operated by <span className="text-white font-bold">Malik Abdul Rasheed</span>
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-gray-400">
                <span className="text-white font-bold">25 Years</span> of Excellence
              </p>
              <p className="text-gray-500 text-sm mt-1">
                Trusted by thousands of families in Bangla Gogera
              </p>
            </div>
          </div>
          
          {/* Important Notice */}
          <div className="mt-8 p-4 bg-white/10 rounded-lg text-center">
            <p className="text-gray-300 text-sm">
              For immediate inquiries, WhatsApp us directly at <span className="text-white font-bold">0321 6839646</span> 
              or call for a personal consultation with Malik Abdul Rasheed.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer