'use client';
import React, { useState } from 'react';
import { MailIcon, MapPinIcon, CheckIcon } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            CONTACT
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for print inqueries or to discuss my work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              SEND A MESSAGE
            </h2>
            {formStatus === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-2 mb-4">
                  <CheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-green-800 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-green-700 mb-4">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
                <button onClick={() => setFormStatus('idle')} className="px-4 py-2 bg-white border border-green-600 text-green-700 hover:bg-green-50">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"></textarea>
                </div>
                <div>
                  <button type="submit" disabled={formStatus === 'submitting'} className={`w-full px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 flex justify-center ${formStatus === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}>
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            )}
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
                  <p className="text-gray-600">samjoyner@mac.com</p>
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
                  <p className="text-gray-500 text-sm mt-2">
                    Represented by M.A. Doran Gallery, Tulsa
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