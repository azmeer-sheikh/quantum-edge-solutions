import { FileText, Scale, AlertTriangle, CreditCard, Ban, Mail } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">LEGAL</span>
          </div>
          <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            
            {/* Agreement */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Agreement to Terms</h2>
              </div>
              <p className="text-[#C2C2CC] leading-relaxed">
                By accessing or using the services provided by Quantum Edge Solution LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, and your continued use of our services constitutes acceptance of any changes.
              </p>
            </div>

            {/* Services */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Our Services</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Quantum Edge Solution LLC provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">SaaS Platform:</strong> Software subscription services including marketing automation, analytics, and business tools (recurring license fees)</li>
                  <li><strong className="text-white">Managed Services:</strong> Professional agency services including SEO, web design, digital marketing, and consulting (labor/retainer fees)</li>
                </ul>
                <p>The specific terms, deliverables, and pricing for each engagement will be outlined in a separate service agreement or statement of work.</p>
              </div>
            </div>

            {/* Payment Terms */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Payment Terms</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p><strong className="text-white">Software Subscriptions:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                  <li>Prices are subject to change with 30 days notice</li>
                </ul>
                <p><strong className="text-white">Managed Services:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project fees and retainers are billed as specified in your service agreement</li>
                  <li>Payment is due within 30 days of invoice unless otherwise agreed</li>
                  <li>Late payments may incur interest at 1.5% per month</li>
                </ul>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Intellectual Property</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>All content, features, and functionality of our platform and website are owned by Quantum Edge Solution LLC and are protected by intellectual property laws. You may not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, modify, or distribute our proprietary content</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                  <li>Use our trademarks without written permission</li>
                  <li>Resell or redistribute our services without authorization</li>
                </ul>
                <p>Work product created specifically for clients under managed services agreements will be governed by the terms of those agreements.</p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Limitation of Liability</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our services are provided "as is" without warranties of any kind</li>
                  <li>We are not liable for indirect, incidental, or consequential damages</li>
                  <li>Our total liability is limited to the amount paid for services in the preceding 12 months</li>
                  <li>We do not guarantee specific results from marketing or SEO services</li>
                </ul>
              </div>
            </div>

            {/* Governing Law */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Governing Law</h2>
              </div>
              <p className="text-[#C2C2CC] leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law provisions. Any disputes arising from these terms shall be resolved in the courts of Tarrant County, Texas.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <p><strong className="text-white">Quantum Edge Solution LLC</strong><br />
                7838 Malton Lane, Appt 22
Worthington, Columbus, Ohio 43085<br />
                Email: <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">support@quantumedgesolution.org</a><br />
                Phone: +1 (614) 405-5814</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
