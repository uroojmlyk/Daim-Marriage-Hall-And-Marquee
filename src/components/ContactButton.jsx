// import { MessageCircle, Instagram, Facebook } from 'lucide-react'

// const ContactButton = ({ type, className = '' }) => {
//   const getButtonConfig = () => {
//     switch (type) {
//       case 'whatsapp':
//         return {
//           icon: <MessageCircle size={24} />,
//           text: 'WhatsApp',
//           url: 'https://wa.me/923001234567',
//           bgColor: 'bg-green-600 hover:bg-green-700'
//         }
//       case 'instagram':
//         return {
//           icon: <Instagram size={24} />,
//           text: 'Instagram',
//           url: 'https://instagram.com/daimmarriagehall',
//           bgColor: 'bg-pink-600 hover:bg-pink-700'
//         }
//       case 'facebook':
//         return {
//           icon: <Facebook size={24} />,
//           text: 'Facebook',
//           url: 'https://facebook.com/daimmarriagehall',
//           bgColor: 'bg-blue-600 hover:bg-blue-700'
//         }
//       default:
//         return {
//           icon: <MessageCircle size={24} />,
//           text: 'Contact',
//           url: '#',
//           bgColor: 'bg-gray-600 hover:bg-gray-700'
//         }
//     }
//   }

//   const config = getButtonConfig()

//   const handleClick = () => {
//     window.open(config.url, '_blank', 'noopener,noreferrer')
//   }

//   return (
//     <button
//       onClick={handleClick}
//       className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${config.bgColor} ${className}`}
//     >
//       {config.icon}
//       <span>{config.text}</span>
//     </button>
//   )
// }

// export default ContactButton



import { MessageCircle, Instagram, Facebook } from 'lucide-react'

const ContactButton = ({ type, className = '' }) => {
  const getButtonConfig = () => {
    switch (type) {
      case 'whatsapp':
        return {
          icon: <MessageCircle size={24} />,
          text: 'WhatsApp',
          url: 'https://wa.me/923216839646?text=Hello%20DAIM%20Marriage%20Hall,%20I%20would%20like%20to%20inquire%20about%20your%20services.',
          bgColor: 'bg-green-600 hover:bg-green-700'
        }
      case 'instagram':
        return {
          icon: <Instagram size={24} />,
          text: 'Instagram',
          url: 'https://instagram.com/daim_marriage_hall',
          bgColor: 'bg-gradient-to-r from-pink-600 to-purple-600 hover:opacity-90'
        }
      case 'facebook':
        return {
          icon: <Facebook size={24} />,
          text: 'Facebook',
          url: 'https://facebook.com/malik.abdul.rasheed.daim',
          bgColor: 'bg-blue-600 hover:bg-blue-700'
        }
      default:
        return {
          icon: <MessageCircle size={24} />,
          text: 'Contact',
          url: '#',
          bgColor: 'bg-gray-600 hover:bg-gray-700'
        }
    }
  }

  const config = getButtonConfig()

  const handleClick = () => {
    window.open(config.url, '_blank', 'noopener,noreferrer')
  }

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-105 shadow-lg ${config.bgColor} ${className}`}
    >
      {config.icon}
      <span>{config.text}</span>
    </button>
  )
}

export default ContactButton