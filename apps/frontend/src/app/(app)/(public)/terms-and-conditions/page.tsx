import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - Kaziday.com',
  description: 'Terms of Service for Kaziday.com (LunaBazar)',
};

export default function TermsAndConditions() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-4">Terms of Service</h1>
      <p className="mb-1">Kaziday.com - LunaBazar</p>
      <p className="text-sm text-gray-400 mb-10">Last updated: July 16, 2025</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">1. Acceptance of Terms</h2>
        <p>
          By accessing or using Kaziday ("Platform") at{' '}
          <a href="https://kaziday.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://kaziday.com</a>, operated by LunaBazar ("we," "us," or "our"), you expressly agree to these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our Platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">2. Description of Service</h2>
        <p>Kaziday is a self-hosted platform provided by LunaBazar for managing social media content including scheduling, posting, analytics, and content optimization across various social platforms.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">3. Eligibility and Account Responsibility</h2>
        <p>You must be at least 18 years old to use the Service. Notify us immediately at <a href="mailto:service@kaziday.com" className="text-primary underline">service@kaziday.com</a> of any unauthorized use.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">4. Payment Terms</h2>
        <p>Certain Platform features may require payment. Payments are non-refundable unless explicitly stated otherwise.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">5. User License</h2>
        <p>LunaBazar grants you a limited, non-exclusive, non-transferable, revocable license to use Kaziday under self-hosted conditions. Unauthorized reproduction or modification is prohibited.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">6. Intellectual Property</h2>
        <p>All content, software, and code are protected by intellectual property laws. LunaBazar retains ownership of all rights related to the Platform.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">7. Third-Party Services</h2>
        <p>The Platform integrates with third-party services. Usage of YouTube API services is governed by YouTube's Terms: <a href="https://www.youtube.com/t/terms" target="_blank" rel="noopener noreferrer" className="text-primary underline">YouTube Terms of Service</a>.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">8. User Content</h2>
        <p>You retain ownership of your content. By submitting content, you grant LunaBazar rights to use and display it for Service operation.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">9. Prohibited Conduct</h2>
        <p>Do not use the Service for illegal, fraudulent, or harmful activities.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">10. Intellectual Property Protection</h2>
        <p>If you believe your intellectual property rights have been violated, contact us at <a href="mailto:service@kaziday.com" className="text-primary underline">service@kaziday.com</a>.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">11. Termination</h2>
        <p>LunaBazar may suspend or terminate your Platform access for violations without notice.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">12. Self-Hosting Responsibilities</h2>
        <p>You are solely responsible for your server environment including security and compliance. LunaBazar disclaims related liabilities.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">13. Limitation of Liability</h2>
        <p>The Platform is provided "as is" without warranties. Our total liability is limited to amounts paid by you.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">14. Disputes and Governing Law</h2>
        <p>Disputes shall be settled via arbitration under French jurisdiction. Jury trials and class actions are waived.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">15. General Provisions</h2>
        <p>If any term is invalid or unenforceable, remaining terms remain valid.</p>
      </section>

      <footer className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-400">
        For inquiries, please contact{' '}
        <a href="mailto:service@kaziday.com" className="text-primary underline">service@kaziday.com</a>.
      </footer>
    </div>
  );
} 