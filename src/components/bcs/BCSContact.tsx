import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

interface BCSContactProps {
  cityName: string;
}

export function BCSContact({ cityName }: BCSContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would submit to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#01BAEF]/10 border border-[#01BAEF]/30 text-[#0B4F6C] rounded-full text-xs sm:text-sm">
              Get Started
            </span>
          </div>
          <h2 className="mb-3 sm:mb-4 text-[#0B4F6C] px-2 sm:px-0">
            Request Your Free Consultation
          </h2>
          <p className="text-[#5A6C7D] max-w-3xl mx-auto text-sm sm:text-base px-2 sm:px-0">
            Contact us today to discuss your {cityName} business technology needs and get a customized solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#01BAEF]/10 border-2 border-[#01BAEF] rounded-full flex items-center justify-center mb-4 sm:mb-6">
                  <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#01BAEF]" />
                </div>
                <h3 className="text-[#0B4F6C] mb-2 text-lg sm:text-xl">
                  Thank You for Contacting Us!
                </h3>
                <p className="text-[#5A6C7D] max-w-md text-sm sm:text-base px-4">
                  We've received your inquiry and will respond within 24 hours. For urgent matters, please call us directly at (512) 257-1433.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#0B4F6C] mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors text-sm sm:text-base"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-[#0B4F6C] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors text-sm sm:text-base"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#0B4F6C] mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors text-sm sm:text-base"
                      placeholder="(512) 555-0123"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm text-[#0B4F6C] mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors text-sm sm:text-base"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm text-[#0B4F6C] mb-2">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a service...</option>
                    <option value="data-cabling">Data Installation Cabling</option>
                    <option value="fiber-cabling">Fiber Cabling Installation</option>
                    <option value="security-cameras">Security Camera Installation</option>
                    <option value="network-installation">Computer Network Installation</option>
                    <option value="managed-it">Managed IT Services</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="access-control">Access Control Installation</option>
                    <option value="voip">VOIP Phone System</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#0B4F6C] mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white border border-gray-300 rounded-lg text-[#0B4F6C] placeholder-gray-400 focus:outline-none focus:border-[#01BAEF] focus:ring-2 focus:ring-[#01BAEF]/20 transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#01BAEF] text-white rounded-lg transition-all hover:bg-[#0B4F6C] shadow-md hover:shadow-xl text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>

                <p className="text-xs text-[#5A6C7D]">
                  <span className="text-red-500">*</span> Required fields. We respect your privacy and will never share your information.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 shadow-sm">
              <h3 className="text-[#0B4F6C] mb-3 sm:mb-4 text-base sm:text-lg">
                Contact Information
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                <a 
                  href="tel:+15122571433"
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#01BAEF] hover:bg-[#01BAEF]/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center group-hover:bg-[#01BAEF]/20 transition-colors">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A6C7D] mb-1">Call Anytime</div>
                    <div className="text-sm sm:text-base text-[#0B4F6C] group-hover:text-[#01BAEF] transition-colors">
                      (512) 257-1433
                    </div>
                  </div>
                </a>

                <a 
                  href="mailto:austin@bcs-ip.com"
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg hover:border-[#01BAEF] hover:bg-[#01BAEF]/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#20A4F3]/10 rounded-lg flex items-center justify-center group-hover:bg-[#20A4F3]/20 transition-colors">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#20A4F3]" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-[#5A6C7D] mb-1">Email Us</div>
                    <div className="text-sm sm:text-base text-[#0B4F6C] group-hover:text-[#01BAEF] transition-colors break-all">
                      austin@bcs-ip.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 bg-[#01BAEF]/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#01BAEF]" />
                  </div>
                  <div>
                    <div className="text-xs text-[#5A6C7D] mb-1">Service Area</div>
                    <div className="text-sm sm:text-base text-[#0B4F6C]">
                      {cityName} & Surrounding
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B4F6C] to-[#01BAEF] border border-[#01BAEF]/30 rounded-xl p-5 sm:p-6 text-white">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <h3 className="text-white text-base sm:text-lg">
                  Business Hours
                </h3>
              </div>
              
              <div className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-white/20">
                  <span className="text-white/80">Monday - Friday</span>
                  <span className="text-white">8 AM - 6 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-white/20">
                  <span className="text-white/80">Saturday</span>
                  <span className="text-white">9 AM - 2 PM</span>
                </div>
                <div className="flex justify-between items-center pb-2.5 sm:pb-3 border-b border-white/20">
                  <span className="text-white/80">Sunday</span>
                  <span className="text-white">Emergency Only</span>
                </div>
                <div className="pt-1 sm:pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm text-white">24/7 Emergency Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}