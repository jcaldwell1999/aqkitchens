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
                      <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
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
