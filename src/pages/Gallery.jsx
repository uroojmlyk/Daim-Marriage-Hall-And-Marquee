







import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Filter, Grid, List, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [loadedImages, setLoadedImages] = useState([])

  // Updated Gallery Images with Proper Descriptions Based on Image Content
  const galleryImages = [
    // Venue Images - Hall aur venue ki pictures
    { 
      id: 1, 
      category: 'venue', 
      url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
      title: 'DAIM Main Hall Entrance', 
      description: 'Grand main entrance of DAIM Marriage Hall with traditional welcome setup' 
    },
    { 
      id: 2, 
      category: 'venue', 
      url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
      title: 'Main Wedding Hall', 
      description: 'Spacious indoor hall accommodating 2000+ guests with premium seating' 
    },
    { 
      id: 3, 
      category: 'venue', 
      url: '/wedding11.jpg', 
      title: 'Outdoor Marquee Area', 
      description: 'Beautiful outdoor marquee setup with modern facilities and decor' 
    },
    { 
      id: 4, 
      category: 'venue', 
      url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', 
      title: 'Evening Wedding Setup', 
      title: 'Evening Wedding Setup', 
      description: 'Magical evening ambiance with perfect lighting arrangements' 
    },
    
    // Decor Images - Decoration aur rangon ki pictures
    { 
      id: 5, 
      category: 'decor', 
      url: '/wedding10.jpg', 
      title: 'Stage Decor for Nikah', 
      description: 'Elegant traditional stage decor for bride and groom ceremony' 
    },
    { 
      id: 6, 
      category: 'decor', 
      url: '/hall5.jpg', 
      title: 'Floral Arrangements', 
      description: 'Beautiful fresh flower decorations throughout the venue' 
    },
    { 
      id: 7, 
      category: 'decor', 
      url: '/wedding8.jpg', 
      title: 'Guest Table Decorations', 
      description: 'Premium table settings and arrangements for guest comfort' 
    },
    { 
      id: 8, 
      category: 'decor', 
      url: '/wedding7.jpg', 
      title: 'Lighting and Effects', 
      description: 'Custom lighting designs and special effects for weddings' 
    },
    
    // Events Images - Functions ki pictures
    { 
      id: 9, 
      category: 'events', 
      url: '/wedding6.jpg', 
      title: 'Mehndi Function', 
      description: 'Vibrant Mehndi ceremony with traditional colors and henna' 
    },
    { 
      id: 10, 
      category: 'events', 
      url: '/wedding5.jpg', 
      title: 'Baraat Procession', 
      description: 'Grand Baraat ceremony with traditional groom procession' 
    },
    { 
      id: 11, 
      category: 'events', 
      url: '/wedding4.jpg', 
      title: 'Nikah Ceremony', 
      description: 'Traditional Islamic Nikah ceremony setup at DAIM Hall' 
    },
    { 
      id: 12, 
      category: 'events', 
      url: '/wedding3.jpg', 
      title: 'Walima Reception', 
      description: 'Grand Walima reception dinner with premium catering service' 
    },
    
    // Facilities Images - Facilities aur amenities ki pictures
    { 
      id: 13, 
      category: 'facilities', 
      url: '/wedding2.jpg', 
      title: 'Catering Service Area', 
      description: 'Exquisite food arrangements and live food counters' 
    },
    { 
      id: 14, 
      category: 'facilities', 
      url: '/wedding1.jpg', 
      title: 'Bridal Dressing Room', 
      description: 'Luxurious dressing rooms for bridal party preparations' 
    },
    { 
      id: 15, 
      category: 'facilities', 
      url: '/hall7.jpg', 
      title: 'Ample Parking Space', 
      description: 'Secured parking area with ample space for guests vehicles' 
    },
    { 
      id: 16, 
      category: 'facilities', 
      url: '/hall6.jpg', 
      title: 'Comfortable Seating', 
      description: 'Premium comfortable seating arrangements for guests' 
    },
    
    // Additional Images - Aur decoration pictures
    { 
      id: 17, 
      category: 'decor', 
      url: '/hall4.jpg', 
      title: 'Traditional Entrance Decor', 
      description: 'Beautiful traditional entrance decorations for weddings' 
    },
    { 
      id: 18, 
      category: 'venue', 
      url: '/hall3.jpg', 
      title: 'Night Wedding Ambiance', 
      description: 'Stunning night time wedding setup with lighting' 
    },
    { 
      id: 19, 
      category: 'events', 
      url: '/hall2.jpg', 
      title: 'Cultural Dance Performances', 
      description: 'Traditional cultural dance performances and entertainment' 
    },
    { 
      id: 20, 
      category: 'facilities', 
      url: '/hall1.jpg', 
      title: 'Buffet Food Counters', 
      description: 'Organized buffet counters with variety of delicious food' 
    },
    
    // More Images - Last few pictures
    { 
      id: 21, 
      category: 'venue', 
      url: '/malik4.jpg', 
      title: 'Daytime Wedding Setup', 
      description: 'Beautiful daylight wedding arrangements at DAIM Hall' 
    },
    { 
      id: 22, 
      category: 'decor', 
      url: '/malik3.jpg', 
      title: 'Stage Lighting Setup', 
      description: 'Professional stage lighting effects and arrangements' 
    },
    { 
      id: 23, 
      category: 'events', 
      url: '/malik2.jpg', 
      title: 'Live Music Performances', 
      description: 'Live traditional music performances for wedding functions' 
    },
    { 
      id: 24, 
      category: 'facilities', 
      url: '/malik1.jpg', 
      title: 'Professional Service Staff', 
      description: 'Professional and courteous service staff for events' 
    },
  ]

  const categories = [
    { id: 'all', label: 'All Photos', count: galleryImages.length },
    { id: 'venue', label: 'Venue', count: galleryImages.filter(img => img.category === 'venue').length },
    { id: 'decor', label: 'Decor', count: galleryImages.filter(img => img.category === 'decor').length },
    { id: 'events', label: 'Events', count: galleryImages.filter(img => img.category === 'events').length },
    { id: 'facilities', label: 'Facilities', count: galleryImages.filter(img => img.category === 'facilities').length },
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (image, index) => {
    setSelectedImage(image)
    setCurrentIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    
    setCurrentIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  // Track loaded images
  useEffect(() => {
    const loadPromises = galleryImages.map(img => {
      return new Promise((resolve) => {
        const image = new Image()
        image.src = img.url
        image.onload = () => {
          setLoadedImages(prev => [...prev, img.id])
          resolve()
        }
        image.onerror = () => {
          console.log(`Failed to load image: ${img.url}`)
          resolve()
        }
      })
    })

    Promise.all(loadPromises).then(() => {
      console.log('All images loaded successfully')
    })
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section - No Blue Overlay */}
      <section className="relative py-32 overflow-hidden bg-gray-900">
        {/* Dark Gradient Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
          {/* Subtle Pattern */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 px-6 mx-auto text-center max-w-7xl">
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold">
              VISUAL GALLERY
            </span>
          </div>
          
          <h1 className="mb-8 text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Our <span className="font-normal text-gray-300">Gallery</span>
          </h1>
          
          <div className="w-24 h-1 mx-auto mb-10 bg-white/60"></div>
          
          <p className="max-w-3xl mx-auto text-2xl font-medium leading-relaxed text-gray-200 md:text-3xl">
            Experience 25 years of beautiful celebrations through our collection of cherished moments
          </p>
          
          <div className="inline-block p-6 mt-16 bg-white/5 backdrop-blur-sm rounded-xl">
            <div className="mb-2 text-4xl font-bold text-white">{galleryImages.length}+</div>
            <div className="text-lg font-medium text-gray-300">Precious Moments Captured</div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-gray-800 border-b border-gray-700">
        <div className="px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg text-sm tracking-widest font-semibold transition-all duration-300 flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-white text-gray-900 hover:bg-gray-100 shadow-lg'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                  }`}
                >
                  <Filter size={16} />
                  {category.label}
                  <span className={`px-2 py-1 text-xs rounded ${
                    activeCategory === category.id ? 'bg-gray-800 text-white' : 'bg-gray-600 text-gray-300'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium tracking-widest text-gray-400">VIEW:</span>
              <div className="flex p-1 bg-gray-700 rounded-lg">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-md transition-all ${viewMode === 'list' ? 'bg-white text-gray-900' : 'text-gray-400 hover:text-white'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-800">
        <div className="px-6 mx-auto max-w-7xl">
          {/* Loading Indicator */}
          {loadedImages.length < galleryImages.length && (
            <div className="mb-8 text-center">
              <div className="inline-block text-gray-400 animate-pulse">
                Loading images... {loadedImages.length}/{galleryImages.length}
              </div>
            </div>
          )}

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="relative overflow-hidden transition-all duration-500 transform bg-gray-700 border border-gray-600 rounded-lg cursor-pointer group hover:border-gray-400 hover:-translate-y-1 hover:shadow-2xl"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Loading Placeholder */}
                    {!loadedImages.includes(image.id) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-600 animate-pulse">
                        <div className="text-gray-400">Loading...</div>
                      </div>
                    )}
                    
                    <img
                      src={image.url}
                      alt={image.title}
                      className={`w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ${
                        !loadedImages.includes(image.id) ? 'opacity-0' : 'opacity-100'
                      }`}
                      loading="lazy"
                      onLoad={() => {
                        if (!loadedImages.includes(image.id)) {
                          setLoadedImages(prev => [...prev, image.id])
                        }
                      }}
                    />
                    
                    {/* Hover Overlay - Dark Theme */}
                    <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent group-hover:opacity-100">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="mb-2 text-lg font-bold text-white">{image.title}</h3>
                            <p className="text-sm text-gray-300">{image.description}</p>
                          </div>
                          <div className="p-2 rounded-full bg-white/20 backdrop-blur-sm">
                            <ZoomIn className="text-white" size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 text-xs font-bold text-white border border-gray-700 rounded-full bg-gray-900/90 backdrop-blur-sm">
                      {image.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Info Bar */}
                  <div className="p-4 bg-gray-700">
                    <h3 className="mb-1 font-semibold text-white truncate">{image.title}</h3>
                    <p className="text-sm text-gray-400 truncate">{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* List View */
            <div className="space-y-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="flex flex-col items-stretch overflow-hidden transition-all duration-500 bg-gray-700 border border-gray-600 rounded-lg cursor-pointer group lg:flex-row hover:border-gray-400 hover:shadow-xl"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden lg:w-1/3">
                    {!loadedImages.includes(image.id) && (
                      <div className="absolute inset-0 bg-gray-600 animate-pulse"></div>
                    )}
                    <img
                      src={image.url}
                      alt={image.title}
                      className={`w-full h-56 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ${
                        !loadedImages.includes(image.id) ? 'opacity-0' : 'opacity-100'
                      }`}
                      loading="lazy"
                      onLoad={() => {
                        if (!loadedImages.includes(image.id)) {
                          setLoadedImages(prev => [...prev, image.id])
                        }
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 text-xs font-bold text-white rounded-full bg-gray-900/90">
                        {image.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col justify-center p-6 lg:w-2/3">
                    <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-gray-200">
                      {image.title}
                    </h3>
                    <p className="mb-4 text-gray-300">{image.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <ZoomIn size={16} className="mr-2" />
                        Click to view full size
                      </div>
                      <span className="px-4 py-1.5 bg-gray-600 text-white text-xs font-bold rounded-full">
                        VIEW IMAGE
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Images Message */}
          {filteredImages.length === 0 && (
            <div className="py-20 text-center">
              <div className="mb-6 text-6xl text-gray-500">📷</div>
              <h3 className="mb-4 text-2xl font-bold text-white">No Images Found</h3>
              <p className="max-w-md mx-auto text-gray-400">
                We're updating this category. Please check back soon or browse other categories.
              </p>
            </div>
          )}

          {/* Image Count */}
          <div className="pt-8 mt-16 text-center border-t border-gray-700">
            <p className="text-sm font-medium tracking-widest text-gray-400">
              DISPLAYING <span className="font-bold text-white">{filteredImages.length}</span> OF <span className="font-bold text-white">{galleryImages.length}</span> TOTAL IMAGES
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute z-10 p-3 text-white transition-colors rounded-full top-6 right-6 hover:text-gray-300 bg-gray-800/80 backdrop-blur-sm"
          >
            <X size={28} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute z-10 p-4 text-white transition-colors transform -translate-y-1/2 rounded-full left-6 top-1/2 hover:text-gray-300 bg-gray-800/80 backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute z-10 p-4 text-white transition-colors transform -translate-y-1/2 rounded-full right-6 top-1/2 hover:text-gray-300 bg-gray-800/80 backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative w-full max-w-6xl">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full max-h-[70vh] object-contain"
              />
            </div>
            
            {/* Image Info */}
            <div className="mt-6 text-center">
              <div className="mb-3">
                <span className="px-4 py-1.5 bg-gray-800 text-white text-sm font-bold rounded-full border border-gray-700">
                  {selectedImage.category.toUpperCase()}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-white">{selectedImage.title}</h3>
              <p className="max-w-2xl mx-auto mb-4 text-lg text-gray-300">{selectedImage.description}</p>
              <p className="font-medium text-gray-400">
                Image {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex gap-3 px-1 py-3 mt-8 overflow-x-auto">
              {filteredImages.map((img, index) => (
                <button
                  key={img.id}
                  onClick={() => {
                    setSelectedImage(img)
                    setCurrentIndex(index)
                  }}
                  className={`flex-shrink-0 w-16 h-16 rounded overflow-hidden border-2 transition-all ${
                    currentIndex === index ? 'border-white' : 'border-transparent hover:border-gray-500'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="object-cover w-full h-full"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Footer */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl px-6 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white">
            See Our Venue in Person
          </h2>
          <p className="max-w-2xl mx-auto mb-10 text-lg font-medium text-gray-300">
            Experience the elegance and grandeur of DAIM Marriage Hall with a personal tour.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-gray-900 transition-all duration-300 bg-white rounded-lg hover:bg-gray-100 hover:scale-105"
            >
              Book a Personal Tour
              <ChevronRight className="ml-3" size={20} />
            </a>
            <a 
              href="tel:+923216839646"
              className="px-10 py-4 text-base font-bold text-white transition-all duration-300 bg-transparent border border-white rounded-lg hover:bg-white/10 hover:scale-105"
            >
              Call for Gallery Tour
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="pt-8 mt-12 border-t border-gray-800">
            <p className="mb-4 text-sm font-medium text-gray-400">
              For gallery inquiries and photography requests:
            </p>
            <p className="text-xl font-bold text-white">+92 321 6839 646</p>
            <p className="mt-2 text-sm text-gray-500">Gallery Department • DAIM Marriage Hall And Marquee</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery