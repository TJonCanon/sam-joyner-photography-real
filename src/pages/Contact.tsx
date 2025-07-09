import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, CheckIcon } from 'lucide-react';
const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };
  return <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-serif tracking-wide mb-4">
            CONTACT
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch for print inquiries, commissions, or to discuss
            photography projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif tracking-wide mb-6">
              SEND A MESSAGE
            </h2>
            {formStatus === 'success' ? <div className="bg-green-50 border border-green-200 rounded-md p-6 flex flex-col items-center text-center">
                <div className="bg-green-100 rounded-full p-2 mb-4">
                  <CheckIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-medium text-green-800 mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-green-700 mb-4">
                  Thank you for reaching out. I'll get back to you as soon as
                  possible.
                </p>
                <button onClick={() => setFormStatus('idle')} className="px-4 py-2 bg-white border border-green-600 text-green-700 hover:bg-green-50">
                  Send Another Message
                </button>
              </div> : <form onSubmit={handleSubmit} className="space-y-6">
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
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black">
                    <option value="">Select a subject</option>
                    <option value="Print Inquiry">Print Inquiry</option>
                    <option value="Commission Request">
                      Commission Request
                    </option>
                    <option value="Exhibition Opportunity">
                      Exhibition Opportunity
                    </option>
                    <option value="Workshop Information">
                      Workshop Information
                    </option>
                    <option value="Other">Other</option>
                  </select>
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
              </form>}
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
                  <p className="text-gray-600">
                    contact@robertsmithphotography.com
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <PhoneIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-gray-600">+1 (503) 555-0123</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4">
                  <MapPinIcon className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Studio Location</h3>
                  <p className="text-gray-600">
                    123 Gallery Street
                    <br />
                    Portland, OR 97205
                    <br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-medium mb-4">Studio Hours</h3>
              <table className="w-full text-gray-600">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Monday - Friday</td>
                    <td className="py-2">10:00 AM - 6:00 PM</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">Saturday</td>
                    <td className="py-2">11:00 AM - 4:00 PM</td>
                  </tr>
                  <tr>
                    <td className="py-2">Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-gray-600 italic">
                * Visits by appointment only
              </p>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-gray-200 w-full h-[400px] flex items-center justify-center">
            <p className="text-gray-500">Map will be embedded here</p>
            {/* In a real implementation, you would embed a Google Map or similar here */}
          </div>
        </div>
      </div>
    </div>;
};
export default Contact;