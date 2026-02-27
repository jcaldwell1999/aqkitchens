import { useState } from 'react';

// ============================================
// WEB3FORMS CONFIGURATION
// Replace this with your actual Web3Forms access key
// Get your key at: https://web3forms.com/
// ============================================
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE';

function Icon({ name }) {
  const size = 28;
  switch (name) {
    case 'pin':
      return (
        <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="8" r="1.8" fill="currentColor"/></svg>
      );
    case 'phone':
      return (
        <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2c-9.2-.99-16.82-8.61-17.81-17.81A2 2 0 0 1 4.08 2h3a2 2 0 0 1 2 1.72c.12 1.21.47 2.39 1.03 3.5a2 2 0 0 1-.45 2.11L9.91 10.91a16 16 0 0 0 6.17 6.17l1.58-1.58a2 2 0 0 1 2.11-.45c1.11.56 2.29.91 3.5 1.03A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    case 'mail':
      return (
        <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8.5l8.5 6L20 8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/></svg>
      );
    case 'socials':
      return (
        <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 7h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
      );
    default:
      return null;
  }
}

function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Check if access key is configured
    if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
      setStatus({ 
        type: 'success', 
        message: 'Form submitted successfully! (Demo mode - configure Web3Forms access key for real submissions)' 
      });
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          message: form.message,
          subject: `New Contact Form Submission from ${form.firstName || 'Website'}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
        setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    }

    setIsSubmitting(false);
  }

  return (
    <main className="contact-page">
      <div className="container">
        <section className="contact-hero">
          <h2>Contact Us</h2>
          <p className="contact-lead">Please feel free to get in contact if you have any questions, or interest and we'll get back to you as soon as possible.</p>
          <p style={{ fontWeight: 'bold', marginTop: '18px', fontSize: '1.1em' }}>
            Our showroom viewings are by appointment only
          </p>
        </section>

        <section className="contact-section">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-info">
                <div className="contact-info-item">
                  <Icon name="pin" />
                  <div>
                    <h4>Address</h4>
                    <address>
                      Unit 6 Easter Park<br />
                      Worcester Rd<br />
                      Kidderminster<br />
                      DY11 7AR
                    </address>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Icon name="phone" />
                  <div>
                    <h4>Phone</h4>
                    <p><a href="tel:07782131359">07782 131 359</a></p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Icon name="mail" />
                  <div>
                    <h4>Email</h4>
                    <p><a href="mailto:aqkitchens@outlook.com">aqkitchens@outlook.com</a></p>
                  </div>
                </div>

                <div className="contact-info-item socials">
                  <Icon name="socials" />
                  <div>
                    <h4>Follow Us</h4>
                    <div className="social-links">
                      <a href="https://www.tiktok.com/@aqkitchens" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                        </svg>
                      </a>
                      <a href="https://www.instagram.com/aq_kitchens/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                        </svg>
                      </a>
                      <a href="https://www.facebook.com/aqkitchens/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input 
                    name="firstName" 
                    value={form.firstName} 
                    onChange={handleChange} 
                    placeholder="First Name" 
                    required
                  />
                  <input 
                    name="lastName" 
                    value={form.lastName} 
                    onChange={handleChange} 
                    placeholder="Last Name" 
                  />
                </div>

                <div className="form-row">
                  <input 
                    name="email" 
                    type="email"
                    value={form.email} 
                    onChange={handleChange} 
                    placeholder="Email *" 
                    required 
                  />
                </div>

                <div className="form-row">
                  <input 
                    name="phone" 
                    type="tel"
                    value={form.phone} 
                    onChange={handleChange} 
                    placeholder="Phone Number" 
                  />
                </div>

                <div className="form-row">
                  <textarea 
                    name="message" 
                    value={form.message} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    rows={6} 
                    required
                  />
                </div>

                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}

                <div className="form-row">
                  <button type="submit" className="btn-send" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-map">
            <iframe 
              title="AQ Kitchens location" 
              src="https://www.google.com/maps?q=Unit%206%20Easter%20Park%20Worcester%20Rd%20Kidderminster&output=embed" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
