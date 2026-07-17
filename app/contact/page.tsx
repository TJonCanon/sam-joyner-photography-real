'use client';
import React, { useState } from 'react';
import { MailIcon, MapPinIcon } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: ''
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
          access_key: '18ec7625-10d8-4c84-a7ea-d4b79da524dc',
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
    // ...everything else stays the same, except the form:
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Remove `disabled` and the gray/cursor-not-allowed classes from each input.
          Add `required` to each. Example: */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black focus:border-black" />
      </div>
      {/* ...same treatment for email, subject, message... */}
      <button type="submit" disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors duration-300 flex justify-center rounded disabled:opacity-75">
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-600 text-sm text-center">Message sent! We'll be in touch.</p>}
      {status === 'error' && <p className="text-red-600 text-sm text-center">Something went wrong — please email us directly.</p>}
    </form>
    // ...
  );
};
