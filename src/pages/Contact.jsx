// import { useState } from 'react'
// import { MapPin, Phone, Mail, Calendar, MessageSquare, CheckCircle } from 'lucide-react'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     phone: '',
//     eventDate: '',
//     guestCount: '',
//     message: ''
//   })

//   const [submitted, setSubmitted] = useState(false)

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     setSubmitted(true)
//     setTimeout(() => setSubmitted(false), 3000)
//     setFormData({
//       name: '',
//       phone: '',
//       eventDate: '',
//       guestCount: '',
//       message: ''
//     })
//   }

//   return (
//     <div className="pt-20">
//       {/* Header with Color */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700">
//         <div className="px-6 py-20 mx-auto max-w-7xl">
//           <h1 className="mb-4 text-5xl font-bold text-white">Contact Us</h1>
//           <p className="text-lg text-blue-100">Get in touch to book your special event</p>
//         </div>
//       </div>

//       <div className="bg-gradient-to-b from-gray-50 to-white">
//         <div className="px-6 py-16 mx-auto max-w-7xl">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//             {/* Left Column - Contact Info */}
//             <div className="space-y-6">
//               {/* Phone Card */}
//               <div className="p-6 transition-shadow bg-white border-l-4 border-blue-600 rounded-lg shadow-md hover:shadow-lg">
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-blue-100 rounded-full">
//                     <Phone className="text-blue-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 text-lg font-bold text-gray-900">Call Directly</h3>
//                     <a 
//                       href="tel:03216839646" 
//                       className="text-xl font-bold text-blue-700 hover:text-blue-800"
//                     >
//                       0321 6839646
//                     </a>
//                     <p className="mt-1 text-sm text-gray-500">Malik Abdul Rasheed</p>
//                   </div>
//                 </div>
//               </div>

//               {/* WhatsApp Card */}
//               <a 
//                 href="https://wa.me/923216839646" 
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 shadow-md rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-green-100 rounded-full">
//                     <MessageSquare className="text-green-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 text-lg font-bold text-gray-900">WhatsApp Chat</h3>
//                     <p className="text-gray-700">Click to chat instantly</p>
//                     <p className="mt-1 text-sm font-medium text-green-600">Direct message with owner</p>
//                   </div>
//                 </div>
//               </a>

//               {/* Location Card */}
//               <div className="p-6 transition-shadow bg-white border-l-4 border-purple-600 rounded-lg shadow-md hover:shadow-lg">
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 bg-purple-100 rounded-full">
//                     <MapPin className="text-purple-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 text-lg font-bold text-gray-900">Our Location</h3>
//                     <p className="text-gray-700">Bangla Gogera, Main Road</p>
//                     <p className="mt-1 text-sm text-gray-500">Near City Center</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Email Card */}
//               <div className="p-6 transition-shadow bg-white border-l-4 rounded-lg shadow-md border-amber-600 hover:shadow-lg">
//                 <div className="flex items-center space-x-4">
//                   <div className="p-3 rounded-full bg-amber-100">
//                     <Mail className="text-amber-600" size={24} />
//                   </div>
//                   <div>
//                     <h3 className="mb-1 text-lg font-bold text-gray-900">Email Us</h3>
//                     <a 
//                       href="mailto:info@daimhall.com" 
//                       className="text-amber-700 hover:text-amber-800"
//                     >
//                       info@daimhall.com
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Middle Column - Form */}
//             <div className="lg:col-span-2">
//               <div className="p-8 bg-white border border-gray-200 shadow-xl rounded-xl">
//                 <div className="mb-8">
//                   <h2 className="mb-2 text-3xl font-bold text-gray-900">Send Your Inquiry</h2>
//                   <p className="text-gray-600">Fill the form below and we'll contact you within hours</p>
//                 </div>

//                 {submitted ? (
//                   <div className="py-12 text-center">
//                     <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-green-100 rounded-full">
//                       <CheckCircle className="text-green-600" size={40} />
//                     </div>
//                     <h3 className="mb-3 text-2xl font-bold text-gray-900">Message Sent Successfully!</h3>
//                     <p className="mb-8 text-gray-600">Malik Abdul Rasheed will contact you shortly</p>
//                     <button
//                       onClick={() => setSubmitted(false)}
//                       className="px-8 py-3 font-bold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
//                     >
//                       Send Another Message
//                     </button>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-8">
//                     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                       <div>
//                         <label className="block mb-3 font-medium text-gray-700">Your Name *</label>
//                         <input
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-5 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                           placeholder="Enter your name"
//                         />
//                       </div>
//                       <div>
//                         <label className="block mb-3 font-medium text-gray-700">Phone Number *</label>
//                         <input
//                           type="tel"
//                           name="phone"
//                           value={formData.phone}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-5 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                           placeholder="0321 6839646"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//                       <div>
//                         <label className="block mb-3 font-medium text-gray-700">Event Date *</label>
//                         <div className="relative">
//                           <Calendar className="absolute text-gray-400 transform -translate-y-1/2 left-4 top-1/2" size={20} />
//                           <input
//                             type="date"
//                             name="eventDate"
//                             value={formData.eventDate}
//                             onChange={handleChange}
//                             required
//                             className="w-full px-12 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <label className="block mb-3 font-medium text-gray-700">Guest Count *</label>
//                         <select
//                           name="guestCount"
//                           value={formData.guestCount}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                         >
//                           <option value="">Select number of guests</option>
//                           <option value="1-100">1-100 Guests</option>
//                           <option value="101-300">101-300 Guests</option>
//                           <option value="301-600">301-600 Guests</option>
//                           <option value="600+">600+ Guests</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block mb-3 font-medium text-gray-700">Your Message *</label>
//                       <textarea
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         rows="4"
//                         className="w-full px-5 py-3 transition-all border border-gray-300 rounded-lg outline-none resize-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//                         placeholder="Tell us about your event requirements..."
//                       ></textarea>
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full py-4 font-bold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 hover:shadow-lg"
//                     >
//                       Send Message
//                     </button>
//                   </form>
//                 )}
//               </div>

//               {/* Features Section */}
//               <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-2">
//                 <div className="p-6 border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
//                   <h3 className="mb-3 text-lg font-bold text-blue-900">Why Choose Us?</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-blue-600" size={18} />
//                       <span className="text-gray-800">25+ Years Experience</span>
//                     </li>
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-blue-600" size={18} />
//                       <span className="text-gray-800">Direct Owner Contact</span>
//                     </li>
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-blue-600" size={18} />
//                       <span className="text-gray-800">Flexible Packages</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="p-6 border border-green-200 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
//                   <h3 className="mb-3 text-lg font-bold text-green-900">Quick Response</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-green-600" size={18} />
//                       <span className="text-gray-800">Response within 2 hours</span>
//                     </li>
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-green-600" size={18} />
//                       <span className="text-gray-800">Personal Consultation</span>
//                     </li>
//                     <li className="flex items-center">
//                       <CheckCircle className="mr-3 text-green-600" size={18} />
//                       <span className="text-gray-800">Venue Tour Available</span>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Quick Actions Section */}
//           <div className="mt-20">
//             <div className="mb-12 text-center">
//               <h2 className="mb-4 text-4xl font-bold text-gray-900">Quick Contact Options</h2>
//               <p className="text-gray-600">Choose your preferred way to reach us</p>
//             </div>
            
//             <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//               <a 
//                 href="tel:03216839646"
//                 className="p-8 text-center transition-all border border-blue-200 shadow-md group bg-gradient-to-br from-blue-50 to-white rounded-2xl hover:shadow-xl hover:border-blue-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-colors bg-blue-100 rounded-full group-hover:bg-blue-200">
//                   <Phone className="text-blue-600" size={28} />
//                 </div>
//                 <h3 className="mb-3 text-xl font-bold text-gray-900">Call Now</h3>
//                 <p className="mb-4 text-gray-600">Speak directly with owner</p>
//                 <div className="text-lg font-bold text-blue-600">0321 6839646</div>
//               </a>

//               <a 
//                 href="https://wa.me/923216839646"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-8 text-center transition-all border border-green-200 shadow-md group bg-gradient-to-br from-green-50 to-white rounded-2xl hover:shadow-xl hover:border-green-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-colors bg-green-100 rounded-full group-hover:bg-green-200">
//                   <MessageSquare className="text-green-600" size={28} />
//                 </div>
//                 <h3 className="mb-3 text-xl font-bold text-gray-900">WhatsApp</h3>
//                 <p className="mb-4 text-gray-600">Chat instantly on WhatsApp</p>
//                 <div className="font-bold text-green-600">Click to Open Chat</div>
//               </a>

//               <a 
//                 href="/contact#visit"
//                 className="p-8 text-center transition-all border border-purple-200 shadow-md group bg-gradient-to-br from-purple-50 to-white rounded-2xl hover:shadow-xl hover:border-purple-300"
//               >
//                 <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-colors bg-purple-100 rounded-full group-hover:bg-purple-200">
//                   <Calendar className="text-purple-600" size={28} />
//                 </div>
//                 <h3 className="mb-3 text-xl font-bold text-gray-900">Book a Tour</h3>
//                 <p className="mb-4 text-gray-600">Visit our venue in person</p>
//                 <div className="font-bold text-purple-600">Schedule Visit</div>
//               </a>
//             </div>
//           </div>

//           {/* Bottom Info */}
//           <div className="mt-20 text-center">
//             <div className="inline-block px-8 py-6 text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl">
//               <p className="mb-2 text-lg">For immediate assistance, call:</p>
//               <p className="text-3xl font-bold">0321 6839646</p>
//               <p className="mt-2 text-blue-100">Malik Abdul Rasheed • DAIM Marriage Hall</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Contact    







import { useState } from 'react'
import { MapPin, Phone, Mail, Calendar, MessageSquare, CheckCircle, Clock, Users, Star } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({
      name: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      message: ''
    })
  }

  return (
    <div className="pt-20">
      {/* Premium Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        <div className="relative z-10 px-6 py-24 mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold mb-6 block">
              GET IN TOUCH
            </span>
            <h1 className="mb-8 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
              Contact <span className="font-normal text-gray-300">DAIM Hall</span>
            </h1>
            <div className="w-24 h-1 mx-auto mb-10 bg-white/60"></div>
            <p className="max-w-2xl mx-auto text-2xl font-medium leading-relaxed text-gray-200">
              Schedule a personal consultation with Malik Abdul Rasheed for your dream celebration
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-900 to-black">
        <div className="px-6 py-16 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Left Column - Premium Contact Cards */}
            <div className="space-y-8">
              {/* Phone Card - Premium */}
              <div className="p-6 transition-all duration-300 border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:shadow-2xl group">
                <div className="flex items-center space-x-5">
                  <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl group-hover:scale-110">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">Direct Owner Line</h3>
                    <a 
                      href="tel:03216839646" 
                      className="text-2xl font-bold text-white transition-colors hover:text-blue-400"
                    >
                      0321 6839646
                    </a>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-400">Malik Abdul Rasheed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card - Premium */}
              <a 
                href="https://wa.me/923216839646" 
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-5">
                  <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-green-500 to-green-600 rounded-xl group-hover:scale-110">
                    <MessageSquare className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">WhatsApp Chat</h3>
                    <p className="text-gray-300">Instant Response</p>
                    <div className="flex items-center mt-2 space-x-2">
                      <div className="px-2 py-1 text-xs text-green-400 rounded-full bg-green-500/20">
                        ONLINE NOW
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Location Card - Premium */}
              <div className="p-6 transition-all duration-300 border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:shadow-2xl group">
                <div className="flex items-center space-x-5">
                  <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl group-hover:scale-110">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">Venue Location</h3>
                    <p className="text-gray-300">Bangla Gogera, Main Road</p>
                    <p className="mt-1 text-sm text-gray-500">Near City Center • Landmark: DAIM Hall</p>
                  </div>
                </div>
              </div>

              {/* Email Card - Premium */}
              <div className="p-6 transition-all duration-300 border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl hover:shadow-2xl group">
                <div className="flex items-center space-x-5">
                  <div className="p-4 transition-transform duration-300 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl group-hover:scale-110">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-white">Email Inquiry</h3>
                    <a 
                      href="mailto:info@daimhall.com" 
                      className="text-gray-300 transition-colors hover:text-white"
                    >
                      info@daimhall.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="p-6 border border-gray-700 shadow-xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Clock className="text-gray-400" size={20} />
                      <span className="text-gray-400">Response Time</span>
                    </div>
                    <span className="font-bold text-green-400">Within 2 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Users className="text-gray-400" size={20} />
                      <span className="text-gray-400">Consultation</span>
                    </div>
                    <span className="font-bold text-blue-400">Personal Meeting</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Star className="text-gray-400" size={20} />
                      <span className="text-gray-400">25 Years</span>
                    </div>
                    <span className="font-bold text-amber-400">Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Premium Form */}
            <div className="lg:col-span-2">
              <div className="p-10 border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
                <div className="mb-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold">
                        ENQUIRY FORM
                      </span>
                      <h2 className="mt-2 text-4xl font-bold text-white">Book Your Consultation</h2>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Direct to</div>
                      <div className="text-lg font-bold text-white">Malik Abdul Rasheed</div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-300">Fill the form below for a personalized quote and venue tour</p>
                </div>

                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full shadow-lg bg-gradient-to-br from-green-500 to-green-600">
                      <CheckCircle className="text-white" size={48} />
                    </div>
                    <h3 className="mb-4 text-3xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="mb-10 text-lg text-gray-300">Malik Abdul Rasheed will contact you within 2 hours</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-10 py-4 font-bold text-white transition-all border border-gray-700 rounded-lg shadow-lg bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 hover:shadow-xl"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-4 text-lg font-medium text-gray-300">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 text-white transition-all border border-gray-600 outline-none bg-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block mb-4 text-lg font-medium text-gray-300">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-4 text-white transition-all border border-gray-600 outline-none bg-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                          placeholder="0321 6839646"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div>
                        <label className="block mb-4 text-lg font-medium text-gray-300">Event Date *</label>
                        <div className="relative">
                          <Calendar className="absolute text-gray-400 transform -translate-y-1/2 left-5 top-1/2" size={22} />
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                            className="w-full py-4 pr-4 text-white transition-all border border-gray-600 outline-none pl-14 bg-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block mb-4 text-lg font-medium text-gray-300">Guest Count *</label>
                        <div className="relative">
                          <select
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            required
                            className="w-full px-6 py-4 text-white transition-all border border-gray-600 outline-none appearance-none bg-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                          >
                            <option value="" className="bg-gray-800">Select number of guests</option>
                            <option value="1-100" className="bg-gray-800">1-100 Guests</option>
                            <option value="101-300" className="bg-gray-800">101-300 Guests</option>
                            <option value="301-600" className="bg-gray-800">301-600 Guests</option>
                            <option value="600+" className="bg-gray-800">600+ Guests</option>
                          </select>
                          <div className="absolute text-gray-400 transform -translate-y-1/2 right-4 top-1/2">
                            ↓
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block mb-4 text-lg font-medium text-gray-300">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="5"
                        className="w-full px-6 py-4 text-white transition-all border border-gray-600 outline-none resize-none bg-gray-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 placeholder:text-gray-500"
                        placeholder="Tell us about your event requirements, preferred dates, and any special requests..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                    >
                      Send Message to Owner
                    </button>
                  </form>
                )}

                {/* Premium Features Section */}
                <div className="pt-10 mt-12 border-t border-gray-700">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="p-6 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                      <h3 className="flex items-center mb-4 text-lg font-bold text-white">
                        <CheckCircle className="mr-3 text-blue-400" size={22} />
                        Why Choose DAIM?
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></div>
                          25+ Years Experience
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></div>
                          Direct Owner Contact
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></div>
                          Premium Facilities
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-blue-500 rounded-full"></div>
                          Customized Packages
                        </li>
                      </ul>
                    </div>

                    <div className="p-6 border border-gray-700 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl">
                      <h3 className="flex items-center mb-4 text-lg font-bold text-white">
                        <Clock className="mr-3 text-green-400" size={22} />
                        Quick Response Guarantee
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                          Response within 2 hours
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                          Personal Consultation
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                          Free Venue Tour
                        </li>
                        <li className="flex items-center text-gray-300">
                          <div className="w-2 h-2 mr-3 bg-green-500 rounded-full"></div>
                          Detailed Quotation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Quick Actions */}
          <div className="mt-24">
            <div className="mb-16 text-center">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold mb-4 block">
                QUICK CONTACT
              </span>
              <h2 className="mb-6 text-4xl font-bold text-white">Reach Us Instantly</h2>
              <p className="max-w-2xl mx-auto text-xl text-gray-300">Choose your preferred way to contact Malik Abdul Rasheed</p>
            </div>
            
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <a 
                href="tel:03216839646"
                className="group p-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:border-blue-500/30 transition-all duration-300 text-center transform hover:scale-[1.02]"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 transition-transform duration-300 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 group-hover:scale-110">
                  <Phone className="text-white" size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Call Directly</h3>
                <p className="mb-6 text-gray-300">Speak personally with the owner</p>
                <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text">
                  0321 6839646
                </div>
              </a>

              <a 
                href="https://wa.me/923216839646"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:border-green-500/30 transition-all duration-300 text-center transform hover:scale-[1.02]"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 transition-transform duration-300 rounded-full bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110">
                  <MessageSquare className="text-white" size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">WhatsApp Chat</h3>
                <p className="mb-6 text-gray-300">Instant messaging with photos</p>
                <div className="text-xl font-bold text-green-400">
                  Click to Chat
                </div>
              </a>

              <a 
                href="/contact#visit"
                className="group p-10 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all duration-300 text-center transform hover:scale-[1.02]"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-8 transition-transform duration-300 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110">
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-white">Book a Tour</h3>
                <p className="mb-6 text-gray-300">Visit our premium venue in person</p>
                <div className="text-xl font-bold text-purple-400">
                  Schedule Personal Tour
                </div>
              </a>
            </div>
          </div>

          {/* Premium Bottom Info */}
          <div className="mt-24 text-center">
            <div className="inline-block p-12 border border-gray-700 shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl">
              <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold mb-4 block">
                IMMEDIATE ASSISTANCE
              </span>
              <p className="mb-6 text-xl text-gray-300">For urgent wedding inquiries and bookings:</p>
              <div className="mb-6 text-4xl font-bold text-white">0321 6839646</div>
              <div className="flex items-center justify-center space-x-4 text-gray-400">
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-2 bg-green-500 rounded-full"></div>
                  <span>Malik Abdul Rasheed</span>
                </div>
                <span>•</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 mr-2 bg-blue-500 rounded-full"></div>
                  <span>DAIM Marriage Hall & Marquee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact