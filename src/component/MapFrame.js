import React from 'react'

const MapFrame = () => {
  return (
    <>
      <div className="map-iframe style-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d244934.17139458598!2d75.27787773507539!3d25.125368923263647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1678086292169!5m2!1sen!2sin"
                width="600" height="450" style={{ border: '0' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </>
  )
}

export default MapFrame
