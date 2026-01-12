import { Shield, Lock, Eye, Database, Mail, Clock } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface PrivacyPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">LEGAL</span>
          </div>
          <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">Privacy Policy</h1>
          <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
            Last updated: January 12, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Introduction</h2>
              </div>
              <p className="text-[#C2C2CC] leading-relaxed">
                Quantum Edge Solution LLC ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Information We Collect</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p><strong className="text-white">Personal Information:</strong> We may collect personal information that you voluntarily provide when using our services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Business information (company name, job title)</li>
                  <li>Payment and billing information</li>
                  <li>Communications and correspondence with us</li>
                </ul>
                <p><strong className="text-white">Automatically Collected Information:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referring website addresses</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">How We Use Your Information</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing and maintaining our services</li>
                  <li>Processing transactions and sending related information</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending marketing and promotional communications (with your consent)</li>
                  <li>Improving our website and services</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Data Security</h2>
              </div>
              <p className="text-[#C2C2CC] leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Your Rights</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Depending on your location, you may have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to access your personal data</li>
                  <li>Right to correct inaccurate data</li>
                  <li>Right to delete your data</li>
                  <li>Right to restrict processing</li>
                  <li>Right to data portability</li>
                  <li>Right to withdraw consent</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">support@quantumedgesolution.org</a></p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>If you have questions about this Privacy Policy, please contact us:</p>
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
