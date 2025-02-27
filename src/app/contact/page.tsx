// src/app/contact/page.tsx
'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would typically send the data to your backend or a form service
    // This is just a simulation
    try {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setSubmitStatus({
        success: true,
        message: 'Thank you! Your message has been sent successfully.',
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again.',
      });
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-lg text-foreground/70 mb-12 max-w-2xl">
          Have a question or want to work together? Fill out the form below or reach out directly through my social channels.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <p className="text-foreground/70">Feel free to reach out through any of these channels.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
                    your-email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Social Media</h4>
                  <div className="flex space-x-3 mt-1">
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 transition-colors">
                      GitHub
                    </a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 transition-colors">
                      LinkedIn
                    </a>
                    <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-500 transition-colors">
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="rounded-full bg-blue-500/10 p-3 text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-foreground/70">Remote - Worldwide</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-background border border-black/5 dark:border-white/10 rounded-lg p-6 shadow-sm">
            {submitStatus.message ? (
              <div className={`p-4 rounded-lg mb-6 ${submitStatus.success ? 'bg-green-500/10 text-green-700 dark:text-green-300' : 'bg-red-500/10 text-red-700 dark:text-red-300'}`}>
                {submitStatus.message}
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg bg-background"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg bg-background"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg bg-background"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-3 py-2 border border-black/10 dark:border-white/10 rounded-lg bg-background"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}