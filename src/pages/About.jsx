import { Building2, Clock, Trophy, Users, Award, Sparkles, Heart, Star, Calendar, MapPin, Phone } from 'lucide-react'

const About = () => {
  const achievements = [
    { icon: <Clock className="text-white" size={20} />, label: "25+ Years", value: "Of Excellence" },
    { icon: <Building2 className="text-white" size={20} />, label: "2000+", value: "Events Hosted" },
    { icon: <Users className="text-white" size={20} />, label: "5000+", value: "Happy Families" },
    { icon: <Trophy className="text-white" size={20} />, label: "98%", value: "Satisfaction Rate" },
  ]

  const coreValues = [
    { 
      icon: <Heart className="text-gray-900" size={24} />,
      title: "Personal Attention", 
      description: "Each event receives our undivided attention and personalized care"
    },
    { 
      icon: <Star className="text-gray-900" size={24} />,
      title: "Premium Excellence", 
      description: "Uncompromising quality and attention to every single detail"
    },
    { 
      icon: <Sparkles className="text-gray-900" size={24} />,
      title: "Modern Traditions", 
      description: "Blending cultural heritage with contemporary wedding trends"
    },
    { 
      icon: <Award className="text-gray-900" size={24} />,
      title: "Trusted Heritage", 
      description: "25 years of trusted reputation in Bangla Gogera community"
    },
  ]

  const timeline = [
    { year: "1999", title: "The Beginning", description: "DAIM Marriage Hall founded by Malik Abdul Rasheed with a vision for premium celebrations" },
    { year: "2005", title: "Major Expansion", description: "Added expansive marquee facilities and introduced premium decor services" },
    { year: "2015", title: "Modern Revolution", description: "Complete renovation with state-of-the-art amenities and modern design" },
    { year: "2024", title: "Silver Legacy", description: "Celebrating 25 glorious years of creating unforgettable wedding memories" },
  ]

  const facilityFeatures = [
    { icon: <Calendar size={20} />, text: "Spacious Indoor & Outdoor Areas" },
    { icon: <Building2 size={20} />, text: "Separate Bridal & Groom Suites" },
    { icon: <MapPin size={20} />, text: "Central Location in Bangla Gogera" },
    { icon: <Phone size={20} />, text: "24/7 Event Coordination Support" },
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image with Gradient */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/95"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-300 font-semibold">
              THE DAIM STORY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="font-normal text-gray-300">25-Year</span> Legacy
          </h1>
          
          <div className="w-24 h-1 bg-white/80 mx-auto mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Bangla Gogera's premier destination where timeless traditions meet modern elegance. 
            Creating unforgettable celebrations since 1999.
          </p>
        </div>
      </section>

      {/* Founder Section with Dark Background */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Founder Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-xl">
                <div 
                  className="w-full h-[500px] bg-cover bg-center transform hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: 'url("https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80")'
                  }}
                ></div>
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-900 px-10 py-8 shadow-2xl border border-gray-200">
                <div className="text-center">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm tracking-[0.2em] uppercase mt-2 font-semibold">Years Excellence</div>
                </div>
              </div>
            </div>

            {/* Founder Info */}
            <div>
              <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
                VISIONARY LEADER
              </span>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Malik Abdul Rasheed
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                  For over <span className="text-white font-bold">two decades</span>, Malik Abdul Rasheed has been the driving force behind DAIM Marriage Hall. 
                  His unwavering commitment to excellence and passion for creating memorable celebrations 
                  has established DAIM as <span className="text-white font-bold">Bangla Gogera's most trusted wedding venue</span>.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed font-medium">
                  With <span className="text-white font-bold">meticulous attention to detail</span> and deep respect for cultural traditions, 
                  he personally oversees every event, ensuring perfection in execution. 
                  His <span className="text-white font-bold">25 years of expertise</span> bring unparalleled wisdom and excellence to every celebration.
                </p>
              </div>

              {/* Quote Card */}
              <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                <p className="text-2xl italic text-white mb-6 font-light">
                  "Every wedding is a unique love story. <span className="font-semibold not-italic">Our privilege is to make yours the most beautiful chapter</span>."
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-white font-bold text-lg">— Malik Abdul Rasheed</p>
                  <div className="text-sm text-gray-400 font-medium">Founder & Owner</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Stats with Gradient */}
      <section className="py-24 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              OUR ACHIEVEMENTS
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Numbers That Speak
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              A legacy built on trust, excellence, and countless happy memories
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="text-center p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                    {achievement.icon}
                  </div>
                </div>
                <div className="text-4xl font-bold text-white mb-3">{achievement.label}</div>
                <div className="text-sm tracking-[0.2em] uppercase text-gray-300 font-semibold">{achievement.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section with Image Background */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/80 to-black/75"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-300 mb-4 block font-semibold">
              OUR JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              25 Years of Excellence
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
              A remarkable journey from humble beginnings to becoming Bangla Gogera's premier venue
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/30 hidden lg:block"></div>
            
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-16 lg:mb-0 lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'}`}>
                  <div className="p-10 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-500">
                    <div className="text-sm tracking-[0.3em] uppercase text-gray-300 mb-3 font-bold">{item.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-gray-300 font-medium">{item.description}</p>
                  </div>
                </div>
                
                {/* Year Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-900 border-4 border-white rounded-full items-center justify-center z-10">
                  <span className="text-lg font-bold text-white">{item.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values with Dark Background */}
      <section className="py-32 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 mb-4 block font-semibold">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              The DAIM Difference
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
              Core principles that define our approach and set us apart in the industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="p-10 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 group"
              >
                <div className="flex items-center mb-8">
                  <div className="p-5 bg-white rounded-full group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{value.title}</h3>
                <p className="text-gray-300 font-medium leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Facility Features */}
          <div className="mt-24 p-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl border border-gray-700">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">Premium Facilities</h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
                State-of-the-art amenities for a flawless celebration experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <span className="text-lg font-medium text-white">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-900/90 to-gray-800/95"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm tracking-[0.3em] uppercase text-gray-300 mb-6 block font-semibold">
            EXPERIENCE THE LEGACY
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-10">
            Visit DAIM Hall
          </h2>
          
          <p className="text-2xl text-gray-200 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
            Schedule a personal tour with Malik Abdul Rasheed and discover why generations trust us with their celebrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+923001234567"
              className="px-16 py-5 bg-white text-gray-900 text-lg tracking-widest uppercase hover:bg-gray-100 hover:scale-105 transition-all duration-300 font-bold inline-flex items-center justify-center"
            >
              Call For Tour
              <Phone className="ml-4" size={20} />
            </a>
            <a 
              href="/contact"
              className="px-16 py-5 bg-transparent border-2 border-white text-white text-lg tracking-widest uppercase hover:bg-white/10 hover:scale-105 transition-all duration-300 font-bold"
            >
              Book Consultation
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-20 pt-12 border-t border-white/20">
            <p className="text-gray-300 text-lg mb-8 font-medium">
              DAIM Marriage Hall & Marquee • Bangla Gogera
            </p>
            <p className="text-3xl font-bold text-white mb-4">+92 300 123 4567</p>
            <p className="text-gray-400 font-medium">Malik Abdul Rasheed • Direct Line</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About