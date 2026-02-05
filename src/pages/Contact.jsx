import { useState } from 'react'
import { MapPin, Phone, Mail, Calendar, MessageSquare, CheckCircle } from 'lucide-react'

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
      {/* Header with Color */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg">Get in touch to book your special event</p>
        </div>
      </div>

      <div className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-white border-l-4 border-blue-600 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Call Directly</h3>
                    <a 
                      href="tel:03216839646" 
                      className="text-blue-700 text-xl font-bold hover:text-blue-800"
                    >
                      0321 6839646
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Malik Abdul Rasheed</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Card */}
              <a 
                href="https://wa.me/923216839646" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 shadow-md rounded-lg p-6 hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MessageSquare className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">WhatsApp Chat</h3>
                    <p className="text-gray-700">Click to chat instantly</p>
                    <p className="text-green-600 text-sm mt-1 font-medium">Direct message with owner</p>
                  </div>
                </div>
              </a>

              {/* Location Card */}
              <div className="bg-white border-l-4 border-purple-600 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Our Location</h3>
                    <p className="text-gray-700">Bangla Gogera, Main Road</p>
                    <p className="text-gray-500 text-sm mt-1">Near City Center</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white border-l-4 border-amber-600 shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <Mail className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email Us</h3>
                    <a 
                      href="mailto:info@daimhall.com" 
                      className="text-amber-700 hover:text-amber-800"
                    >
                      info@daimhall.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-xl rounded-xl p-8 border border-gray-200">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Send Your Inquiry</h2>
                  <p className="text-gray-600">Fill the form below and we'll contact you within hours</p>
                </div>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                      <CheckCircle className="text-green-600" size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-8">Malik Abdul Rasheed will contact you shortly</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-3 font-medium">Your Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-3 font-medium">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          placeholder="0321 6839646"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 mb-3 font-medium">Event Date *</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                          <input
                            type="date"
                            name="eventDate"
                            value={formData.eventDate}
                            onChange={handleChange}
                            required
                            className="w-full px-12 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-gray-700 mb-3 font-medium">Guest Count *</label>
                        <select
                          name="guestCount"
                          value={formData.guestCount}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                        >
                          <option value="">Select number of guests</option>
                          <option value="1-100">1-100 Guests</option>
                          <option value="101-300">101-300 Guests</option>
                          <option value="301-600">301-600 Guests</option>
                          <option value="600+">600+ Guests</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-3 font-medium">Your Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                        placeholder="Tell us about your event requirements..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Features Section */}
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <h3 className="font-bold text-blue-900 text-lg mb-3">Why Choose Us?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-blue-600 mr-3" size={18} />
                      <span className="text-gray-800">25+ Years Experience</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-blue-600 mr-3" size={18} />
                      <span className="text-gray-800">Direct Owner Contact</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-blue-600 mr-3" size={18} />
                      <span className="text-gray-800">Flexible Packages</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <h3 className="font-bold text-green-900 text-lg mb-3">Quick Response</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-3" size={18} />
                      <span className="text-gray-800">Response within 2 hours</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-3" size={18} />
                      <span className="text-gray-800">Personal Consultation</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-green-600 mr-3" size={18} />
                      <span className="text-gray-800">Venue Tour Available</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Contact Options</h2>
              <p className="text-gray-600">Choose your preferred way to reach us</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a 
                href="tel:03216839646"
                className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-200 shadow-md hover:shadow-xl hover:border-blue-300 transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors">
                  <Phone className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Now</h3>
                <p className="text-gray-600 mb-4">Speak directly with owner</p>
                <div className="text-blue-600 font-bold text-lg">0321 6839646</div>
              </a>

              <a 
                href="https://wa.me/923216839646"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border border-green-200 shadow-md hover:shadow-xl hover:border-green-300 transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors">
                  <MessageSquare className="text-green-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
                <p className="text-gray-600 mb-4">Chat instantly on WhatsApp</p>
                <div className="text-green-600 font-bold">Click to Open Chat</div>
              </a>

              <a 
                href="/contact#visit"
                className="group bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-200 shadow-md hover:shadow-xl hover:border-purple-300 transition-all text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6 group-hover:bg-purple-200 transition-colors">
                  <Calendar className="text-purple-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Book a Tour</h3>
                <p className="text-gray-600 mb-4">Visit our venue in person</p>
                <div className="text-purple-600 font-bold">Schedule Visit</div>
              </a>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="mt-20 text-center">
            <div className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-6 rounded-2xl">
              <p className="text-lg mb-2">For immediate assistance, call:</p>
              <p className="text-3xl font-bold">0321 6839646</p>
              <p className="text-blue-100 mt-2">Malik Abdul Rasheed • DAIM Marriage Hall</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact