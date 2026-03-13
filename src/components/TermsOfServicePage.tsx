import { FileText, Scale, AlertTriangle, CreditCard, Ban, Mail } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface TermsOfServicePageProps {
  onNavigate: (page: string) => void;
}

export function TermsOfServicePage({ onNavigate }: TermsOfServicePageProps) {
  void onNavigate;

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
            Last updated: March 13, 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">

            {/* 1. Agreement to Terms */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">1. Agreement to Terms</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  By accessing or using the services provided by Quantum Edge Solution LLC ("Company," "we,"
                  "our," or "us"), you agree to be bound by these Terms of Service. If you do not agree to these
                  terms, please do not use our services. We reserve the right to modify these terms at any time with
                  reasonable notice, and your continued use of our services following such notice constitutes
                  acceptance of any changes.
                </p>
              </div>
            </div>

            {/* 2. Our Services */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">2. Our Services</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Quantum Edge Solution LLC provides the following services:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong className="text-white">SaaS Platform:</strong> Software subscription services including marketing automation, analytics, and business tools (recurring license fees)</li>
                  <li><strong className="text-white">Managed Services:</strong> Professional agency services including SEO, web design, digital marketing, and consulting (labor/retainer fees)</li>
                </ul>
                <p>
                  The specific terms, deliverables, and pricing for each engagement will be outlined in a separate
                  service agreement or statement of work ("SOW"). In the event of any conflict between these Terms
                  of Service and a specific SOW, the SOW shall take precedence.
                </p>
              </div>
            </div>

            {/* 3. Payment Terms */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">3. Payment Terms</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <h3 className="text-white text-xl font-semibold">Software Subscriptions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Subscription fees are billed in advance on a monthly or annual basis</li>
                  <li>Subscriptions automatically renew unless cancelled at least 5 business days before the renewal date</li>
                  <li>Prices are subject to change with 30 days written notice</li>
                </ul>

                <h3 className="text-white text-xl font-semibold">Managed Services</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Project fees and retainers are billed as specified in your service agreement or SOW</li>
                  <li>Payment is due within 30 days of invoice unless otherwise agreed in writing</li>
                  <li>Late payments may incur simple (non-compounding) interest at 1.5% per month, calculated on the outstanding balance from the due date</li>
                </ul>
              </div>
            </div>

            {/* 4. Intellectual Property */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Ban className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">4. Intellectual Property</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  All content, features, and functionality of our platform and website are owned by Quantum Edge
                  Solution LLC and are protected by applicable intellectual property laws. You may not:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Copy, modify, or distribute our proprietary content</li>
                  <li>Reverse engineer or attempt to extract source code from our platform</li>
                  <li>Use our trademarks or branding without prior written permission</li>
                  <li>Resell or redistribute our services without written authorization</li>
                </ul>
                <p>
                  Work products created specifically for clients under managed services agreements, including all
                  deliverables, creative assets, and custom code, will be owned by the client upon receipt of full
                  payment, unless otherwise specified in the applicable SOW.
                </p>
              </div>
            </div>

            {/* 5. Limitation of Liability */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">5. Limitation of Liability</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Our services are provided "as is" and "as available" without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                  <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
                  <li>Our total aggregate liability is limited to the total amount paid by you for services in the preceding 12 months</li>
                  <li>We do not guarantee specific outcomes or results from marketing, SEO, or other managed services</li>
                </ul>
              </div>
            </div>

            {/* 6. Acceptable Use */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">6. Acceptable Use</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  You agree to use our services only for lawful purposes and in a manner consistent with these Terms.
                  You may not use our platform to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable local, state, national, or international law or regulation</li>
                  <li>Transmit any unsolicited or unauthorized advertising or promotional material (spam)</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                  <li>Interfere with or disrupt the integrity or performance of the platform or its data</li>
                </ul>
              </div>
            </div>

            {/* 7. Termination */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">7. Termination</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Either party may terminate services as follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SaaS subscriptions may be cancelled by the client at any time before the next renewal date; no refunds will be issued for unused portions of a current billing period</li>
                  <li>Managed services engagements may be terminated by either party with 30 days written notice, unless otherwise specified in the applicable SOW</li>
                  <li>We reserve the right to suspend or terminate access immediately in cases of material breach of these Terms, non-payment, or conduct that poses a risk to our platform or other users</li>
                </ul>
              </div>
            </div>

            {/* 8. Privacy */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">8. Privacy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Your use of our services is also governed by our Privacy Policy, which is incorporated into these
                  Terms by reference. By using our services, you consent to the collection and use of your information
                  as described in the Privacy Policy. Please review our Privacy Policy at www.quantumedgesolution.com/privacy.
                </p>
              </div>
            </div>

            {/* 9. Force Majeure */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">9. Force Majeure</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Neither party shall be liable for any failure or delay in performance under these Terms to the extent
                  such failure or delay is caused by circumstances beyond that party's reasonable control, including but
                  not limited to acts of God, natural disasters, pandemic, war, terrorism, internet outages, or
                  government actions. The affected party shall provide prompt written notice and use reasonable efforts
                  to resume performance as soon as practicable.
                </p>
              </div>
            </div>

            {/* 10. Dispute Resolution */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>In the event of any dispute arising from or related to these Terms or our services, the parties agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>First attempt to resolve the dispute informally by contacting the other party in writing and allowing 30 days for good-faith negotiation</li>
                  <li>If informal resolution fails, submit the dispute to binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules</li>
                  <li>You agree to waive any right to participate in a class-action lawsuit or class-wide arbitration</li>
                </ul>
              </div>
            </div>

            {/* 11. Governing Law */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">11. Governing Law</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of the State
                  of Ohio, United States, without regard to its conflict of law provisions. To the extent any dispute
                  is not resolved through arbitration, the parties consent to the exclusive jurisdiction of the state
                  and federal courts located in Franklin County, Ohio.
                </p>
              </div>
            </div>

            {/* 12. Severability */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">12. Severability</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid under applicable law, that
                  provision shall be modified to the minimum extent necessary to make it enforceable, or severed if
                  modification is not possible. The remaining provisions of these Terms shall continue in full force
                  and effect.
                </p>
              </div>
            </div>

            {/* 13. Entire Agreement */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">13. Entire Agreement</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  These Terms of Service, together with any applicable SOW or service agreement and our Privacy
                  Policy, constitute the entire agreement between you and Quantum Edge Solution LLC with respect to
                  the subject matter herein and supersede all prior or contemporaneous agreements, representations,
                  or understandings.
                </p>
              </div>
            </div>

            {/* 14. Contact Us */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">14. Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>If you have questions about these Terms of Service, please contact us:</p>
                <p>
                  <strong className="text-white">Quantum Edge Solution LLC</strong>
                  <br />
                  7838 Malton Lane, Apt 22
                  <br />
                  Worthington, Ohio 43085
                  <br />
                  Email:{' '}
                  <a href="mailto:support@quantumedgesolution.com" className="text-[#00D0FF] hover:text-[#75FF00]">
                    support@quantumedgesolution.com
                  </a>
                  <br />
                  Phone: +1 (614) 405-5814
                  <br />
                  Website:{' '}
                  <a href="https://www.quantumedgesolution.org/" className="text-[#00D0FF] hover:text-[#75FF00]" target="_blank" rel="noopener noreferrer">
                    https://www.quantumedgesolution.org/
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
