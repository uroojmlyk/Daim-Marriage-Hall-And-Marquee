import React from 'react'
import { 
  Palette, Utensils, Users, Lightbulb, 
  Music, Camera, Flower2, ShieldCheck, 
  CheckCircle, Star, Sparkles, Award, Phone 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Palette size={28} className="text-white" />,
      title: "Premium Decoration",
      description: "Custom theme-based decoration with floral arrangements, lighting, and elegant drapery",
      features: ["Themed Decor", "Floral Arrangements", "Stage Design", "Entrance Decor", "Table Settings"]
    },
    {
      icon: <Utensils size={28} className="text-white" />,
      title: "Catering Services",
      description: "Traditional and contemporary menu options with live counters and premium service",
      features: ["Buffet Service", "Live Counters", "Traditional Cuisine", "Dessert Stations", "Beverage Service"]
    },
    {
      icon: <Users size={28} className="text-white" />,
      title: "Seating & Layout",
      description: "Comfortable seating for 2000+ guests with multiple elegant layout options",
      features: ["Round Tables", "Theater Style", "U-Shape", "Banquet Style", "VIP Seating"]
    },
    {
      icon: <Lightbulb size={28} className="text-white" />,
      title: "Lighting & Sound",
      description: "Professional lighting and sound systems for perfect ambiance and audio quality",
      features: ["LED Lighting", "Sound System", "Stage Lighting", "Dance Floor Lights", "Effects Lighting"]
    },
    {
      icon: <Music size={28} className="text-white" />,
      title: "Entertainment",
      description: "Complete entertainment solutions for traditional and modern celebrations",
      features: ["DJ Services", "Live Bands", "Cultural Dancers", "Anchor/MC", "Sound System"]
    },
    {
      icon: <Camera size={28} className="text-white" />,
      title: "Photography",
      description: "Professional photography and videography to capture every precious moment",
      features: ["Pre-Wedding Shoots", "Event Coverage", "Cinematic Videos", "Photo Albums", "Drone Shots"]
    },
    {
      icon: <Flower2 size={28} className="text-white" />,
      title: "Bridal Services",
      description: "Complete bridal services including mehndi, makeup, and traditional setups",
      features: ["Mehndi Artists", "Bridal Makeup", "Dressing Room", "Traditional Setup", "Bridal Attire"]
    },
    {
      icon: <ShieldCheck size={28} className="text-white" />,
      title: "Event Management",
      description: "End-to-end event planning and coordination for stress-free celebrations",
      features: ["Event Planning", "Day Coordination", "Vendor Management", "Timeline Management", "Setup Crew"]
    }
  ]

  const packages = [
    {
      name: "Basic Package",
      price: "PKR 250,000",
      duration: "For Small Gatherings",
      features: [
        "Basic Decoration Setup",
        "Buffet Service for 300 guests",
        "Standard Sound System",
        "Basic Seating Arrangements",
        "8 Hours Venue Booking",
        "Standard Lighting"
      ],
      popular: false,
      note: "Perfect for intimate gatherings"
    },
    {
      name: "Premium Package",
      price: "PKR 450,000",
      duration: "Most Popular Choice",
      features: [
        "Premium Themed Decoration",
        "Buffet + Live Food Counters",
        "Professional Sound & Lighting",
        "VIP Seating Area",
        "12 Hours Venue Booking",
        "Basic Photography Coverage",
        "Stage & Entrance Decor",
        "Basic Entertainment Setup"
      ],
      popular: true,
      note: "Best value for medium-sized weddings"
    },
    {
      name: "Platinum Package",
      price: "PKR 750,000",
      duration: "Luxury Experience",
      features: [
        "Luxury Themed Decor",
        "Premium Catering with Multiple Live Counters",
        "Complete Professional Sound & Lighting",
        "Professional Photography & Videography",
        "24 Hours Venue Booking",
        "Dedicated Event Coordinator",
        "Full Entertainment Package",
        "Bridal Suite & Groom Lounge",
        "Valet Parking Service",
        "Generator Backup"
      ],
      popular: false,
      note: "Complete luxury experience for large weddings"
    }
  ]

  const amenities = [
    { icon: "❖", text: "Fully Air-Conditioned Hall" },
    { icon: "❖", text: "Ample Parking Space" },
    { icon: "❖", text: "Separate Bridal & Groom Suites" },
    { icon: "❖", text: "Prayer Area Facility" },
    { icon: "❖", text: "24/7 Generator Backup" },
    { icon: "❖", text: "Professional Security Staff" },
    { icon: "❖", text: "Valet Parking Service" },
    { icon: "❖", text: "Stage with Premium Sound" },
    { icon: "❖", text: "Customizable Layout Options" },
    { icon: "❖", text: "Clean Restroom Facilities" },
    { icon: "❖", text: "Decoration Storage Area" },
    { icon: "❖", text: "24/7 Management Support" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold">
              COMPREHENSIVE SERVICES
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="font-normal text-gray-300">Services</span>
          </h1>
          
          <div className="w-24 h-1 bg-white/60 mx-auto mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Complete wedding solutions with 25 years of excellence in event management. 
            From intimate gatherings to grand celebrations.
          </p>
          
          <div className="mt-12 inline-flex items-center gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white">8</div>
              <div className="text-gray-400 text-sm">Core Services</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">3</div>
              <div className="text-gray-400 text-sm">Packages</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white">25</div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              WHAT WE OFFER
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Wedding Solutions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Every service you need for a perfect celebration, all under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-gray-700 border border-gray-600 rounded-xl p-8 hover:border-gray-400 hover:bg-gray-600 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon Container */}
                <div className="mb-8 flex justify-center">
                  <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center group-hover:bg-gray-500 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-gray-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Hover Line */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white group-hover:w-24 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative py-24 overflow-hidden bg-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              WEDDING PACKAGES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Perfect Package
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Transparent pricing with realistic Pakistani rates for every budget
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index}
                className={`relative bg-gray-800 border rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'border-white shadow-xl' 
                    : 'border-gray-700'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-white text-gray-900 px-6 py-3 rounded-bl-lg">
                    <div className="flex items-center gap-2 font-bold text-sm">
                      <Star size={16} fill="currentColor" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Package Name */}
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {pkg.name}
                  </h3>
                  
                  {/* Duration */}
                  <p className="text-gray-400 text-sm mb-6">{pkg.duration}</p>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="text-4xl font-bold text-white mb-2">{pkg.price}</div>
                    <div className="text-gray-400 text-sm">Starting Price</div>
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-10">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle size={18} className="text-gray-400 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Note */}
                  <div className="mb-8 p-4 bg-gray-700/50 rounded-lg">
                    <p className="text-gray-300 text-sm italic">{pkg.note}</p>
                  </div>
                  
                  {/* CTA Button */}
                  <button className={`w-full py-4 font-bold rounded-lg transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-white text-gray-900 hover:bg-gray-100'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  }`}>
                    Get Quote for {pkg.name}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Package CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-4 mb-8">
              <Sparkles className="text-gray-400" />
              <span className="text-gray-300 text-lg font-medium">Need a Custom Package?</span>
              <Sparkles className="text-gray-400" />
            </div>
            
            <div className="max-w-2xl mx-auto bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Customize Your Perfect Package</h3>
              <p className="text-gray-300 mb-6">
                We understand every wedding is unique. Contact us for a personalized quote 
                tailored to your specific needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Request Custom Quote
                </button>
                <button className="px-8 py-3 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors">
                  Contact for Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              VENUE AMENITIES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Premium Facilities Included
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-medium">
              Everything you need for a seamless and comfortable celebration
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-4 p-6 bg-gray-700 border border-gray-600 rounded-lg hover:border-gray-400 hover:bg-gray-600 transition-all duration-300"
              >
                <div className="text-2xl text-white opacity-70 group-hover:opacity-100">{amenity.icon}</div>
                <span className="text-white font-medium">{amenity.text}</span>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="mt-20 pt-16 border-t border-gray-700">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-4">Why Choose DAIM Hall?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                25 years of trusted service with thousands of satisfied families
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gray-700/50 rounded-xl">
                <Award className="text-white mb-6 mx-auto" size={40} />
                <h4 className="text-xl font-bold text-white mb-4">Trusted Experience</h4>
                <p className="text-gray-300">25 years of creating perfect weddings in Bangla Gogera</p>
              </div>
              
              <div className="text-center p-8 bg-gray-700/50 rounded-xl">
                <ShieldCheck className="text-white mb-6 mx-auto" size={40} />
                <h4 className="text-xl font-bold text-white mb-4">All-In-One Solution</h4>
                <p className="text-gray-300">Every service you need, managed by one trusted team</p>
              </div>
              
              <div className="text-center p-8 bg-gray-700/50 rounded-xl">
                <Star className="text-white mb-6 mx-auto" size={40} />
                <h4 className="text-xl font-bold text-white mb-4">Premium Quality</h4>
                <p className="text-gray-300">Uncompromising standards in every detail of your event</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Plan Your Celebration?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-medium">
            Contact us today for a detailed consultation and personalized quote
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+923216839646"
              className="px-12 py-4 bg-white text-gray-900 text-lg font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Call for Quote
              <Phone className="ml-3" size={20} />
            </a>
            <a 
              href="/contact"
              className="px-12 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Book Consultation
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4 font-medium">
              For service inquiries and package details:
            </p>
            <p className="text-2xl font-bold text-white">+92 321 683 9646</p>
            <p className="text-gray-500 mt-2">Services Department • DAIM Marriage Hall</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services   



