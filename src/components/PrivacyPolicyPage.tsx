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
            Last Updated: March 13, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">

            {/* 1. Introduction */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">1. Introduction</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Quantum Edge Solution LLC ("we," "our," or "us"), a limited liability company registered in
                  the State of Ohio, USA, respects your privacy and is committed to protecting your personal data.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
                  you visit our website or use our services.
                </p>
                <p>
                  By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not
                  agree, please discontinue use of our services.
                </p>
              </div>
            </div>

            {/* 2. Information We Collect */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">2. Information We Collect</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <h3 className="text-white text-xl font-semibold">2.1 Personal Information You Provide</h3>
                <p>We may collect personal information that you voluntarily provide when using our services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name and contact information (email address, phone number, mailing address)</li>
                  <li>Business information (company name, job title, industry)</li>
                  <li>Payment and billing information (processed securely through third-party payment processors)</li>
                  <li>Communications and correspondence you send to us</li>
                </ul>

                <h3 className="text-white text-xl font-semibold">2.2 Automatically Collected Information</h3>
                <p>When you visit our website, we automatically collect certain technical data, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address and device identifiers</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited, time spent on pages, and navigation paths</li>
                  <li>Referring website addresses</li>
                  <li>Cookie and similar tracking technology data (see Section 8)</li>
                </ul>
              </div>
            </div>

            {/* 3. How We Use Your Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">3. How We Use Your Information</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>We use the information we collect for the following specific purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing, operating, and maintaining our services</li>
                  <li>Processing transactions and sending related confirmations and receipts</li>
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Sending marketing and promotional communications (only with your prior consent)</li>
                  <li>Analyzing usage patterns to improve our website and services</li>
                  <li>Complying with applicable legal obligations and regulatory requirements</li>
                  <li>Detecting and preventing fraudulent or unauthorized activity</li>
                </ul>
              </div>
            </div>

            {/* 4. How We Share Your Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">4. How We Share Your Information</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>We do not sell your personal data to third parties. We may share your information in the following limited circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Service Providers:</strong> With trusted third-party vendors who assist
                    in operating our business (e.g., payment processors, cloud hosting, email delivery, analytics). These
                    parties are contractually obligated to protect your data and use it only for the purposes we specify.
                  </li>
                  <li>
                    <strong className="text-white">Legal Requirements:</strong> When required by law, court order,
                    or governmental authority.
                  </li>
                  <li>
                    <strong className="text-white">Business Transfers:</strong> In connection with a merger, acquisition,
                    or sale of assets, in which case we will notify you before your data is transferred.
                  </li>
                  <li>
                    <strong className="text-white">With Your Consent:</strong> For any other purpose with your explicit consent.
                  </li>
                </ul>
              </div>
            </div>

            {/* 5. Cookies and Tracking Technologies */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Our website uses cookies and similar technologies (e.g., web beacons, pixel tags) to enhance your
                  experience, analyze traffic, and support marketing efforts. Types of cookies we use include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">Essential Cookies:</strong> Necessary for the website to function properly.</li>
                  <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
                  <li><strong className="text-white">Marketing Cookies:</strong> Used to deliver relevant advertisements (only with your consent).</li>
                </ul>
                <p>
                  You may control cookie preferences through your browser settings or our cookie consent tool.
                  Note that disabling certain cookies may affect the functionality of our services.
                </p>
              </div>
            </div>

            {/* 6. Data Retention */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">6. Data Retention</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  We retain your personal data only for as long as necessary to fulfill the purposes outlined in
                  this Privacy Policy, unless a longer retention period is required or permitted by law. Specifically:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account and transaction data is retained for a minimum of 7 years to comply with financial and tax regulations.</li>
                  <li>Marketing data is retained until you withdraw consent or request deletion.</li>
                  <li>Website usage logs are retained for up to 12 months.</li>
                </ul>
                <p>Upon expiry of the applicable retention period, your data will be securely deleted or anonymized.</p>
              </div>
            </div>

            {/* 7. Data Security */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">7. Data Security</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures
                  include SSL/TLS encryption, access controls, and regular security assessments.
                </p>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While we
                  strive to use commercially acceptable means to protect your personal data, we cannot guarantee its
                  absolute security. In the event of a data breach that affects your rights, we will notify you in
                  accordance with applicable law.
                </p>
              </div>
            </div>

            {/* 8. Your Privacy Rights */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">8. Your Privacy Rights</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Right to Access: Request a copy of the personal data we hold about you.</li>
                  <li>Right to Rectification: Request correction of inaccurate or incomplete data.</li>
                  <li>Right to Erasure: Request deletion of your personal data (subject to legal exceptions).</li>
                  <li>Right to Restrict Processing: Request that we limit how we use your data.</li>
                  <li>Right to Data Portability: Receive your data in a structured, machine-readable format.</li>
                  <li>Right to Withdraw Consent: Withdraw consent for marketing communications at any time.</li>
                  <li>Right to Object: Object to processing based on legitimate interests.</li>
                  <li>Right to Lodge a Complaint: EU/UK residents may file a complaint with their local data protection authority (e.g., the ICO in the UK, or a relevant EU supervisory authority).</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us using the details in Section 10. We will respond
                  to verified requests within 30 days (or as required by applicable law).
                </p>
              </div>
            </div>

            {/* 9. Children's Privacy */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">9. Children's Privacy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Our services are not directed to individuals under the age of 13, and we do not knowingly collect
                  personal information from children under 13. If we become aware that we have inadvertently collected
                  data from a child under 13, we will promptly delete it. If you believe we may have collected such
                  data, please contact us immediately.
                </p>
              </div>
            </div>

            {/* 10. Contact Us */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">10. Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>If you have questions, concerns, or requests relating to this Privacy Policy, please contact us:</p>
                <p>
                  <strong className="text-white">Quantum Edge Solution LLC</strong>
                  <br />
                  Registered Office: 7838 Malton Lane, Apt 22, Worthington, Ohio 43085, USA
                  <br />
                  Email:{' '}
                  <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">
                    support@quantumedgesolution.org
                  </a>
                  <br />
                  Phone: +1 (614) 405-5814
                </p>
              </div>
            </div>

            {/* 11. Changes to This Privacy Policy */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. When we do, we will revise the "Last Updated"
                  date at the top of this page and, where appropriate, notify you by email or through a prominent
                  notice on our website. We encourage you to review this policy periodically. Your continued use of our
                  services after any changes constitutes your acceptance of the revised policy.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
