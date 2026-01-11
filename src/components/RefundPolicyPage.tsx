import { RotateCcw, Clock, CreditCard, AlertCircle, CheckCircle, Mail } from 'lucide-react';
import { CircuitBackground } from './CircuitBackground';

interface RefundPolicyPageProps {
  onNavigate: (page: string) => void;
}

export function RefundPolicyPage({ onNavigate }: RefundPolicyPageProps) {
  return (
    <div className="min-h-screen bg-[#14141A]">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden hex-pattern">
        <CircuitBackground />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#00D0FF]/10 border border-[#00D0FF]/30 rounded-md">
            <span className="text-[#00D0FF] text-sm font-mono">LEGAL</span>
          </div>
          <h1 className="text-white mb-6 text-4xl md:text-5xl font-bold">Refund & Cancellation Policy</h1>
          <p className="text-[#C2C2CC] text-lg max-w-2xl mx-auto">
            Last updated: January 1, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-[#14141A]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert max-w-none">
            
            {/* Overview */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <RotateCcw className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Overview</h2>
              </div>
              <p className="text-[#C2C2CC] leading-relaxed">
                At Quantum Edge Solution LLC, we strive to provide exceptional services and ensure customer satisfaction. This policy outlines our refund and cancellation terms for both our SaaS platform subscriptions and managed agency services.
              </p>
            </div>

            {/* Software Subscriptions */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Software Subscription Refunds</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p><strong className="text-white">Monthly Subscriptions:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund available within 14 days of initial subscription</li>
                  <li>No refunds for partial months after the 14-day period</li>
                  <li>Cancel anytime to prevent future billing</li>
                </ul>
                <p><strong className="text-white">Annual Subscriptions:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Full refund available within 30 days of initial subscription</li>
                  <li>Pro-rated refund available within the first 90 days</li>
                  <li>No refunds after 90 days; subscription remains active until expiration</li>
                </ul>
              </div>
            </div>

            {/* Managed Services */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">Managed Services Refunds</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p><strong className="text-white">Project-Based Work:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Deposits are non-refundable once work has commenced</li>
                  <li>Refunds for undelivered work are calculated based on work completed</li>
                  <li>Custom development work is non-refundable once delivered</li>
                </ul>
                <p><strong className="text-white">Monthly Retainers:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>30-day written notice required for cancellation</li>
                  <li>No refunds for the current billing period</li>
                  <li>Unused hours do not roll over or qualify for refunds</li>
                </ul>
              </div>
            </div>

            {/* Non-Refundable Items */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Non-Refundable Items</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>The following are not eligible for refunds:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Third-party software licenses or subscriptions purchased on your behalf</li>
                  <li>Domain registrations and hosting fees</li>
                  <li>Advertising spend (Google Ads, Facebook Ads, etc.)</li>
                  <li>Consultation and strategy session fees</li>
                  <li>Rush or expedited service fees</li>
                  <li>Services cancelled after project completion</li>
                </ul>
              </div>
            </div>

            {/* How to Request */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-[#75FF00]" />
                <h2 className="text-white text-2xl font-semibold m-0">How to Request a Refund</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>To request a refund or cancellation:</p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Email us at <a href="mailto:contact@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">contact@quantumedgesolution.org</a> with your request</li>
                  <li>Include your account information and order/invoice number</li>
                  <li>Provide a brief explanation for the refund request</li>
                  <li>Our team will respond within 2-3 business days</li>
                </ol>
                <p>Approved refunds are processed within 5-10 business days to the original payment method.</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-[#1A1A22] border border-[#00D0FF]/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-[#00D0FF]" />
                <h2 className="text-white text-2xl font-semibold m-0">Contact Us</h2>
              </div>
              <div className="text-[#C2C2CC] space-y-4">
                <p>If you have questions about this Refund & Cancellation Policy, please contact us:</p>
                <p><strong className="text-white">Quantum Edge Solution LLC</strong><br />
                Fort Worth, TX, United States<br />
                Email: <a href="mailto:contact@quantumedgesolution.org" className="text-[#00D0FF] hover:text-[#75FF00]">contact@quantumedgesolution.org</a><br />
                Phone: +1 (614) 405-5814</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
