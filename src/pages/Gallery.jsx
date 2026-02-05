import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Filter, Grid, List, ZoomIn } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [loadedImages, setLoadedImages] = useState([])

  // Updated High Quality Wedding Images - All Working URLs
  const galleryImages = [
    // Venue Images
    { id: 1, category: 'venue', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Grand Entrance Hall', description: 'Majestic entrance with traditional Pakistani decor' },
    { id: 2, category: 'venue', url: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Main Wedding Hall', description: 'Spacious hall for 2000+ guests with elegant decor' },
    { id: 3, category: 'venue', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Outdoor Marquee', description: 'Beautiful outdoor setup with modern facilities' },
    { id: 4, category: 'venue', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Evening Setup', description: 'Magical evening ambiance with perfect lighting' },
    
    // Decor Images
    { id: 5, category: 'decor', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Stage Decor', description: 'Elegant traditional stage for bride and groom' },
    { id: 6, category: 'decor', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Floral Decorations', description: 'Fresh flower arrangements throughout venue' },
    { id: 7, category: 'decor', url: 'https://images.unsplash.com/photo-1562825618-2c7a89f8c3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Table Settings', description: 'Premium table arrangements for guest comfort' },
    { id: 8, category: 'decor', url: 'https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Lighting Effects', description: 'Custom lighting designs for every event' },
    
    // Events Images
    { id: 9, category: 'events', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Mehndi Function', description: 'Vibrant colors and traditional mehndi celebrations' },
    { id: 10, category: 'events', url: 'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Baraat Ceremony', description: 'Grand groom procession with traditional music' },
    { id: 11, category: 'events', url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Nikah Ceremony', description: 'Traditional Islamic wedding ceremony setup' },
    { id: 12, category: 'events', url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Walima Reception', description: 'Grand reception dinner with premium catering' },
    
    // Facilities Images
    { id: 13, category: 'facilities', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Catering Service', description: 'Exquisite food arrangements and live counters' },
    { id: 14, category: 'facilities', url: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Bridal Suite', description: 'Luxurious dressing rooms for bridal party' },
    { id: 15, category: 'facilities', url: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Parking Area', description: 'Ample secured parking space for guests' },
    { id: 16, category: 'facilities', url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Guest Seating', description: 'Comfortable seating for large gatherings' },
    
    // Additional Images
    { id: 17, category: 'decor', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Entrance Decor', description: 'Beautiful traditional entrance decorations' },
    { id: 18, category: 'venue', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Night Ambiance', description: 'Stunning night time wedding setup' },
    { id: 19, category: 'events', url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Dance Performances', description: 'Cultural dance performances and entertainment' },
    { id: 20, category: 'facilities', url: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Buffet Counters', description: 'Organized food counters with variety' },
    
    // More Images for Variety
    { id: 21, category: 'venue', url: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Daytime Setup', description: 'Beautiful daylight wedding arrangements' },
    { id: 22, category: 'decor', url: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Stage Lighting', description: 'Professional stage lighting effects' },
    { id: 23, category: 'events', url: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Traditional Music', description: 'Live traditional music performances' },
    { id: 24, category: 'facilities', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80', title: 'Service Staff', description: 'Professional and courteous service staff' },
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-sm tracking-[0.3em] uppercase text-gray-400 font-semibold">
              VISUAL GALLERY
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8">
            Our <span className="font-normal text-gray-300">Gallery</span>
          </h1>
          
          <div className="w-24 h-1 bg-white/60 mx-auto mb-10"></div>
          
          <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl mx-auto font-medium leading-relaxed">
            Experience 25 years of beautiful celebrations through our collection of cherished moments
          </p>
          
          <div className="mt-16 p-6 bg-white/5 backdrop-blur-sm rounded-xl inline-block">
            <div className="text-4xl font-bold text-white mb-2">{galleryImages.length}+</div>
            <div className="text-gray-300 text-lg font-medium">Precious Moments Captured</div>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
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
              <span className="text-gray-400 text-sm tracking-widest font-medium">VIEW:</span>
              <div className="flex bg-gray-700 rounded-lg p-1">
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
        <div className="max-w-7xl mx-auto px-6">
          {/* Loading Indicator */}
          {loadedImages.length < galleryImages.length && (
            <div className="text-center mb-8">
              <div className="inline-block animate-pulse text-gray-400">
                Loading images... {loadedImages.length}/{galleryImages.length}
              </div>
            </div>
          )}

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="group relative overflow-hidden rounded-lg bg-gray-700 border border-gray-600 hover:border-gray-400 transition-all duration-500 cursor-pointer transform hover:-translate-y-1 hover:shadow-2xl"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Loading Placeholder */}
                    {!loadedImages.includes(image.id) && (
                      <div className="absolute inset-0 bg-gray-600 animate-pulse flex items-center justify-center">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2">{image.title}</h3>
                            <p className="text-gray-300 text-sm">{image.description}</p>
                          </div>
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                            <ZoomIn className="text-white" size={18} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 bg-gray-900/90 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-gray-700">
                      {image.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Info Bar */}
                  <div className="p-4 bg-gray-700">
                    <h3 className="font-semibold text-white mb-1 truncate">{image.title}</h3>
                    <p className="text-gray-400 text-sm truncate">{image.description}</p>
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
                  className="group flex flex-col lg:flex-row items-stretch bg-gray-700 border border-gray-600 rounded-lg overflow-hidden hover:border-gray-400 transition-all duration-500 cursor-pointer hover:shadow-xl"
                  onClick={() => openLightbox(image, index)}
                >
                  {/* Image */}
                  <div className="lg:w-1/3 relative overflow-hidden">
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
                      <span className="px-3 py-1 bg-gray-900/90 text-white text-xs font-bold rounded-full">
                        {image.category.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors">
                      {image.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{image.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
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
            <div className="text-center py-20">
              <div className="text-gray-500 text-6xl mb-6">📷</div>
              <h3 className="text-2xl font-bold text-white mb-4">No Images Found</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                We're updating this category. Please check back soon or browse other categories.
              </p>
            </div>
          )}

          {/* Image Count */}
          <div className="mt-16 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm tracking-widest font-medium">
              DISPLAYING <span className="text-white font-bold">{filteredImages.length}</span> OF <span className="text-white font-bold">{galleryImages.length}</span> TOTAL IMAGES
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800/80 p-3 rounded-full backdrop-blur-sm"
          >
            <X size={28} />
          </button>

          <button
            onClick={() => navigateImage('prev')}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800/80 p-4 rounded-full backdrop-blur-sm"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage('next')}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-gray-800/80 p-4 rounded-full backdrop-blur-sm"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-6xl w-full relative">
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
              <h3 className="text-2xl font-bold text-white mb-3">{selectedImage.title}</h3>
              <p className="text-lg text-gray-300 mb-4 max-w-2xl mx-auto">{selectedImage.description}</p>
              <p className="text-gray-400 font-medium">
                Image {currentIndex + 1} of {filteredImages.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="mt-8 flex gap-3 overflow-x-auto py-3 px-1">
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
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Footer */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            See Our Venue in Person
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
            Experience the elegance and grandeur of DAIM Marriage Hall with a personal tour.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="px-10 py-4 bg-white text-gray-900 text-base font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Book a Personal Tour
              <ChevronRight className="ml-3" size={20} />
            </a>
            <a 
              href="tel:+923001234567"
              className="px-10 py-4 bg-transparent border border-white text-white text-base font-bold rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              Call for Gallery Tour
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm mb-4 font-medium">
              For gallery inquiries and photography requests:
            </p>
            <p className="text-xl font-bold text-white">+92 321 6839 646</p>
            <p className="text-gray-500 text-sm mt-2">Gallery Department • DAIM Marriage Hall And Marquee</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery