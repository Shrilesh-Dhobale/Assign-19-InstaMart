import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <h2>InstaMart Contact & Support</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> help@instamart.com</p>
        <p><strong>Phone:</strong> +91 90000 00000</p>
        <p><strong>Address:</strong> 123 Insta St, Mumbai</p>
        <p><strong>Hours:</strong> Mon–Sun 8:00 AM – 10:00 PM</p>
        <p><strong>Orders:</strong> track your order at /orders</p>
        <p><strong>FAQs:</strong> /help/faqs</p>
        <p><strong>Returns:</strong> 7-day return policy</p>
        <p><strong>Live chat:</strong> available in app</p>
        <p><strong>Follow:</strong> @instamart_official</p>
        <p><strong>Support portal:</strong> /support</p>
      </div>
    </div>
  )
}

export default Contact
