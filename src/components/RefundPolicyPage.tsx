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
          <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">Last Updated: March 13, 2026</p>
        </div>
      </section>

      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="text-[#C2C2CC] space-y-2">
                <p>
                  <strong className="text-white">Website:</strong> www.quantumedgesolution.org
                </p>
                <p>
                  <strong className="text-white">Company Name:</strong> Quantum Edge Solutions LLC
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
                  Quantum Edge Solutions LLC provides high-quality digital marketing services including SEO,
                  social media marketing, advertising campaigns, and website development.
                </p>
                <p>
                  This Refund and Cancellation Policy outlines the terms under which payments may be refunded
                  or services cancelled. By engaging our services or making a payment through our website or
                  proposal, you agree to the terms of this policy.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">2. Service-Based Nature</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Our services involve strategic planning, content creation, and campaign execution, which require
                  significant time, effort, and resource allocation. Accordingly, once a project has commenced or
                  access to campaign assets has been provided, payments are generally non-refundable except as
                  outlined in Section 4 of this policy.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">3. Definitions</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>For the purposes of this policy:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-white">Project Commencement</strong> means the point at which any of
                    the following occurs: (a) a formal kickoff call has taken place, (b) a written project brief or
                    strategy document has been delivered to the client, or (c) any campaign assets, login credentials,
                    or deliverables have been shared.
                  </li>
                  <li>
                    <strong className="text-white">Written Notice</strong> means a written communication sent via
                    email to{' '}
                    <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">
                      support@quantumedgesolution.org
                    </a>
                    , which has been acknowledged and confirmed by Quantum Edge Solutions.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">4. Cancellation Policy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <h3 className="text-white text-xl font-semibold">4.1 Recurring / Subscription Services</h3>
                <p>
                  Clients enrolled in recurring or subscription-based services may cancel by providing 30 days'
                  prior Written Notice. Cancellation takes effect only after the 30-day notice period has elapsed.
                  The client remains responsible for fees accrued during this period.
                </p>

                <h3 className="text-white text-xl font-semibold">4.2 Project-Based Services (Before Commencement)</h3>
                <p>
                  Clients may cancel a project before Project Commencement (as defined in Section 3) by submitting
                  a Written Notice. If cancellation is approved, a partial refund may be issued after deducting an
                  administrative and consultation fee not exceeding 15% of the total project value paid.
                </p>

                <h3 className="text-white text-xl font-semibold">4.3 Project-Based Services (After Commencement)</h3>
                <p>
                  Once a project has commenced, no cancellation or refund will be granted for work already performed.
                  Quantum Edge Solutions will document project commencement in writing to the client at the start of
                  each engagement.
                </p>

                <h3 className="text-white text-xl font-semibold">4.4 Cancellation by Quantum Edge Solutions</h3>
                <p>
                  If Quantum Edge Solutions is unable to commence or complete a project due to reasons solely within
                  our control, the client will be entitled to a pro-rated refund for undelivered work, calculated based
                  on the proportion of the project not yet completed at the time of cancellation.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">5. Refund Policy</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Refunds will be considered only in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Duplicate or accidental payment made by the client.</li>
                  <li>
                    Service not initiated within the agreed timeline due to reasons solely attributable to
                    Quantum Edge Solutions.
                  </li>
                  <li>Cancellation by Quantum Edge Solutions as described in Section 4.4.</li>
                </ul>
                <p>Where a refund is approved:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Refunds will be processed within 5-7 business days from the date of approval.</li>
                  <li>Refunds will be issued using the same payment method as the original transaction.</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">6. Non-Refundable Services</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>Once commenced, the following services are non-refundable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>SEO campaigns and audits</li>
                  <li>Social media marketing and advertising services (Meta, Google, and other platforms)</li>
                  <li>Content writing, website design, and development work</li>
                  <li>Customized marketing strategies and consultancy projects</li>
                  <li>Domain registration, hosting, and third-party subscription fees paid on behalf of the client</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">7. Client Responsibilities and Project Delays</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Clients are responsible for providing accurate information, timely approvals, and necessary assets
                  (including but not limited to content, credentials, and images) required to deliver the agreed services.
                </p>
                <p>
                  Quantum Edge Solutions is not responsible for project delays caused by incomplete information,
                  late approvals, or failure by the client to provide required materials. In such cases, no refund
                  will be issued and project timelines will be adjusted accordingly.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">8. Scope Changes</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Any change request submitted after project approval including alterations to campaign goals,
                  target audience, deliverables, or creative direction may incur additional costs at the discretion
                  of Quantum Edge Solutions. No refund will be issued as a result of client-initiated scope changes.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">9. Force Majeure</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Quantum Edge Solutions shall not be liable for failure to deliver services due to events genuinely
                  beyond its reasonable control, including but not limited to natural disasters, acts of war,
                  government-mandated shutdowns, or major platform outages affecting service availability industry-wide.
                  Foreseeable platform disruptions, routine maintenance, or standard operational risks do not constitute
                  force majeure events. No refund will apply in qualifying force majeure circumstances.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">10. Dispute Resolution</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>In the event of a dispute, the following process applies:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Step 1 - Informal Resolution: The client must first contact our support team at{' '}
                    <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">
                      support@quantumedgesolution.org
                    </a>
                    , providing a written description of the issue. We aim to respond within 5 business days.
                  </li>
                  <li>
                    Step 2 - Formal Complaint: If the matter is not resolved within 14 days of Step 1, either party
                    may submit a formal written complaint outlining the dispute in detail.
                  </li>
                  <li>
                    Step 3 - Arbitration: If no resolution is reached after Step 2, the parties agree to submit the
                    dispute to binding arbitration in Columbus, Ohio, in accordance with applicable Ohio arbitration rules.
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">11. Governing Law</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  This policy and any disputes arising from it shall be governed by and construed in accordance with
                  the laws of the State of Ohio, without regard to conflict of law provisions. Any legal proceedings
                  shall be conducted in Franklin County, Ohio.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">12. Payment Processor Compliance</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  This policy is intended to be consistent with the chargeback and dispute resolution policies of our
                  payment processors. Clients are encouraged to contact us directly before initiating a chargeback,
                  as unresolved chargebacks may affect the client's ability to engage our services in the future.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <h2 className="text-white text-2xl font-semibold mb-4">13. Policy Updates</h2>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  Quantum Edge Solutions may update this Refund and Cancellation Policy from time to time.
                  Any revised version will be posted on our website with an updated "Last Updated" date.
                  Continued use of our services following any update constitutes acceptance of the revised policy.
                </p>
              </div>
            </div>

            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">14. Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>
                  If you have any questions about this policy, please contact us:
                </p>
                <p>
                  <strong className="text-white">Quantum Edge Solutions LLC</strong>
                  <br />
                  7838 Malton Lane, Apt 22, Worthington, Ohio 43085
                  <br />
                  Email:{' '}
                  <a href="mailto:support@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">
                    support@quantumedgesolution.org
                  </a>
                  <br />
                  Phone: +1 (614) 405-5814
                  <br />
                  Website: www.quantumedgesolution.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
