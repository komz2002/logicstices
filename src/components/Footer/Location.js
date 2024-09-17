import React from 'react'

function Location() {
  return (
    <>
  <div style={{ width: '100%', height: '500px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.5742661032746!2d76.68287479700648!3d30.70225240465192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef8c87691c2b%3A0x1e625b93fab0a93a!2sMitisha%20Softech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1726589808395!5m2!1sen!2sin"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  </>

  )
}

export default Location