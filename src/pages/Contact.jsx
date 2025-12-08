import { useState } from 'react';

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
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', message: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder behavior: show a quick confirmation (replace with real submit later)
    alert('Thanks — message sent (demo).');
    setForm({ firstName: '', lastName: '', email: '', message: '' });
  }

  return (
    <main>
      <div className="container">
        <section className="contact-hero">
          <h2>Contact Us</h2>
          <p className="contact-lead">Please feel free to get in contact if you have any questions, or interest and we'll get back to you as soon as possible.</p>
          <div className="hero-actions">
            <a href="#" className="btn-brochure">Brochure</a>
          </div>
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
                    <p>07782131359</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <Icon name="mail" />
                  <div>
                    <h4>Email</h4>
                    <p>aqkitchens@outlook.com</p>
                  </div>
                </div>

                <div className="contact-info-item socials">
                  <Icon name="socials" />
                  <div>
                    <h4>Socials</h4>
                    <p className="social-icons">TikTok · Instagram · Facebook</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" />
                  <input name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" />
                </div>

                <div className="form-row">
                  <input name="email" value={form.email} onChange={handleChange} placeholder="Email *" required />
                </div>

                <div className="form-row">
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={6} />
                </div>

                <div className="form-row">
                  <button type="submit" className="btn-send">Send</button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-map">
            <iframe title="AQ Kitchens location" src="https://www.google.com/maps?q=Unit%206%20Easter%20Park%20Worcester%20Rd%20Kidderminster&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Contact;
