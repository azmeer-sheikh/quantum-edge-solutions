import { RotateCcw, Mail } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface RefundPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function RefundPolicyPage({ onNavigate }: RefundPolicyPageProps) {
  void onNavigate;

  return (
    <div className="min-h-screen bg-[#14141A]">
      <section className="relative py-16 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">LEGAL</span>
          </div>
          <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">Refund and Cancellation Policy</h1>
          <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">Last Updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="text-[#C2C2CC] space-y-2">
                <p>
                  <strong className="text-white">Website:</strong> https://www.quantumedgesolution.org
                </p>
                <p>
                  <strong className="text-white">Company Name:</strong> Quantum Edge Solutions
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">1. Overview</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  At Quantum Edge Solutions, we strive to deliver high-quality digital marketing services, including SEO,
                  social media marketing, advertising campaigns, and website development.
                </p>
                <p>
                  This Refund and Cancellation Policy outlines the terms under which payments can be refunded or
                  services cancelled. By engaging our services or making a payment through our website or proposal,
                  you agree to this policy.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">2. Service-Based Nature</h2>
              <p className="text-[#C2C2CC] leading-relaxed">
                Our services involve strategic planning, content creation, and execution, which require time, effort,
                and resource allocation. Therefore, once a project has started or access to campaign assets has been
                provided, payments are generally non-refundable.
              </p>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Clients enrolled in recurring or subscription-based services may request cancellation of such
                    services by providing 30-days prior written notice. Cancellation requests will become effective
                    only after the completion of the thirty (30) day notice period.
                  </li>
                  <li>Clients may request cancellation of a project or service before work has begun.</li>
                  <li>
                    Any cancellation request must be made in writing via email to{' '}
                    <a href="mailto:support@hivetechsol.com" className="text-[#00D0FF] hover:text-[#75FF00]">
                     support@quantumedgesolution.org
                    </a>
                    .
                  </li>
                  <li>
                    If cancellation is approved before the project starts, a partial refund may be processed after
                    deducting administrative and consultation fees.
                  </li>
                  <li>
                    Once a project has commenced or deliverables have been shared, no cancellation or refund will be
                    granted.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">4. Refund Policy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Refunds may be considered only in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Duplicate or accidental payment made by the client.</li>
                  <li>
                    Service not initiated within the agreed timeline due to reasons solely attributable to Quantum Edge Solutions.
                  </li>
                </ul>
                <p>In such cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refunds (if approved) will be processed within 3–5 business days from the date of approval.</li>
                  <li>Refunds will be issued using the same payment method used for the original transaction.</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">5. Non-Refundable Services</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>The following services are non-refundable under all circumstances once initiated:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SEO campaigns and audits</li>
                  <li>Social media marketing and advertising services (Meta, Google, etc.)</li>
                  <li>Content writing, website design, or development work</li>
                  <li>Any customized marketing or consultancy project</li>
                  <li>Domain name registration, hosting, or third-party subscriptions</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">6. Project Delays and Client Responsibility</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Quantum Edge Solutions is not responsible for delays caused by incomplete information, late approvals, or
                  failure by the client to provide necessary assets (such as content, credentials, or images).
                </p>
                <p>In such cases, refunds will not be issued, and timelines may be adjusted accordingly.</p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">7. Changes to Campaigns or Services</h2>
              <p className="text-[#C2C2CC] leading-relaxed">
                Any change request after project approval (e.g. altering campaign goals, target audience, or
                deliverables) may incur additional costs. Refunds will not be issued due to changes in client
                preferences or business decisions.
              </p>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">8. Force Majeure</h2>
              <p className="text-[#C2C2CC] leading-relaxed">
                Quantum Edge Solutions shall not be held liable for failure to deliver services due to events beyond its
                control (including but not limited to natural disasters, internet outages, or platform restrictions).
                No refund will be applicable in such cases.
              </p>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">9. Dispute Resolution</h2>
              <p className="text-[#C2C2CC] leading-relaxed">
                In the event of a dispute, clients are encouraged to first contact our support team at{' '}
                <a href="mailto:support@hivetechsol.com" className="text-[#00D0FF] hover:text-[#75FF00]">
                 support@quantumedgesolution.org
                </a>{' '}
                to resolve the issue amicably.
              </p>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">10. Policy Updates</h2>
              <p className="text-[#C2C2CC] leading-relaxed">
                We may update this Refund and Cancellation Policy periodically. The revised version will be posted on
                this page with the updated date.
              </p>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">11. Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  If you have questions about this Refund & Cancellation Policy, please contact us:
                </p>
                <p>
                  <strong className="text-white">Quantum Edge Solution LLC</strong>
                  <br />
                  7838 Malton Lane, Appt 22 Worthington, Columbus, Ohio 43085
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
          </div>
        </div>
      </section>
    </div>
  );
}
