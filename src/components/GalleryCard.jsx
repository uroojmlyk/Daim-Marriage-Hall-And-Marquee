import { ZoomIn } from 'lucide-react'

const GalleryCard = ({ image, index, onClick }) => {
  return (
    <div 
      className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer card-hover"
      onClick={() => onClick(image, index)}
    >
      <div className="aspect-w-4 aspect-h-3">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-playfair font-bold mb-1">{image.title}</h3>
              <div className="inline-block px-3 py-1 bg-gold text-white text-sm rounded-full">
                {image.category.charAt(0).toUpperCase() + image.category.slice(1)}
              </div>
            </div>
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <ZoomIn size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryCard