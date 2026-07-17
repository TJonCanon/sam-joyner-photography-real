'use client';
import React, { useState } from 'react';
import { MailIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '18ec7625-10d8-4c84-a7ea-d4b79da524dc', // <-- paste your Web3Forms key here
          ...formData,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full bg-white py-16 md:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            CONTACT
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for print inquiries or to discuss my work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              SEND A MESSAGE
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input type="text" id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" required value={formData.message} onChange={handleChange} rows={6} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"></textarea>
              </div>
              <div>
                <button type="submit" disabled={status === 'sending'} className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 flex justify-center rounded disabled:opacity-75">
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-600 text-sm text-center">Message sent! We'll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Something went wrong — please email us directly at info@samjoynerestate.com.</p>
              )}
            </form>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              CONTACT INFORMATION
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="mr-4">
                  <MailIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-gray-600">info@samjoynerestate.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPinIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Location</h3>
                  <p className="text-gray-600">
                    Tulsa, Oklahoma
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.google.com/maps?q=3509+S+Peoria+Ave+%23180,+Tulsa,+OK+74105&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="M.A. Doran Gallery Location - 3509 S Peoria Ave #180, Tulsa, OK 74105"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p className="text-sm">
              <strong>M.A. Doran Gallery</strong><br />
              3509 S Peoria Ave #180<br />
              Tulsa, OK 74105
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
