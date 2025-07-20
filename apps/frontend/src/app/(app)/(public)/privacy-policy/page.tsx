import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Kaziday.com',
  description: 'Privacy Policy for Kaziday.com (LunaBazar)',
};

export default function PrivacyPolicy() {
  return (
    <div className="prose prose-invert max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-extrabold mb-4">Privacy Policy</h1>
      <h2 className="text-2xl font-bold mb-2">Kaziday.com - LunaBazar</h2>
      <p className="mb-8"><strong>Last updated:</strong> July 16, 2025</p>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">1. Introduction</h2>
        <p>
          This Privacy Policy explains how LunaBazar ("we," "us," or "our") collects, uses, and protects personal information gathered through your use of the Kaziday Platform available at{' '}
          <a href="https://kaziday.com" target="_blank" rel="noopener noreferrer" className="text-primary underline">https://kaziday.com</a>.
        </p>
        <p>
          By using our Platform, you consent to the collection and use of your personal information as described in this Privacy Policy. You may withdraw your consent at any time; however, doing so may limit your access to certain features or functions of our Platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">2. Information We Collect</h2>
        <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information (secured through encryption and processed by reputable payment gateways to ensure protection of your financial data)</li>
        </ul>

        <h3 className="text-xl font-semibold mb-2">Usage Data</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Visited pages and duration of visits</li>
          <li>Date and time of visits</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">3. How We Use Your Information</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Providing and maintaining our Platform</li>
          <li>Informing you about updates or changes to our services</li>
          <li>Providing customer support</li>
          <li>Processing payments and managing billing</li>
          <li>Analyzing usage patterns to enhance our services</li>
          <li>Detecting, preventing, and addressing technical issues</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">4. Sharing Your Information</h2>
        <p className="mb-3">We will not share your personal information with third parties except:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>When you explicitly consent to sharing</li>
          <li>To comply with legal obligations</li>
          <li>To protect and defend our rights and property</li>
          <li>To investigate and prevent potential wrongdoing</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">5. Third-Party Services</h2>
        <p className="mb-3">Our Platform integrates with third-party services and social media platforms that may independently collect information. We encourage you to review their privacy policies, including:</p>
        <ul className="list-disc list-inside space-y-1">
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">YouTube Privacy Policy</a></li>
          <li><a href="https://www.facebook.com/policy.php" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Facebook Privacy Policy</a></li>
          <li><a href="https://help.instagram.com/519522125107875" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">Instagram Privacy Policy</a></li>
          <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">LinkedIn Privacy Policy</a></li>
          <li><a href="https://www.tiktok.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">TikTok Privacy Policy</a></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">6. Data Security</h2>
        <p>
          We employ industry-standard security measures to protect your personal information. However, please note that no method of electronic transmission or storage is completely secure. While we strive to safeguard your data, we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">7. Data Retention</h2>
        <p>
          We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with applicable laws, or resolve any disputes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">8. Your Rights</h2>
        <p className="mb-3">You have the right to:</p>
        <ul className="list-disc list-inside space-y-1 mb-4">
          <li>Access, update, or delete your personal information</li>
          <li>Object to or restrict the processing of your personal information</li>
          <li>Withdraw your consent at any time</li>
        </ul>
        <p>
          To exercise these rights, please contact us at{' '}
          <a href="mailto:service@kaziday.com" className="text-primary underline">service@kaziday.com</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">9. Cookies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your user experience, analyze usage patterns, and improve our services. You can configure your browser settings to reject all cookies or notify you when cookies are being used.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">10. Children's Privacy</h2>
        <p>
          Our Platform is not intended for individuals under the age of 18. We do not knowingly collect personal data from minors under 18. If we become aware of collecting data from minors, we will take immediate steps to delete such information.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">11. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy periodically. Any changes will be communicated through email or prominently posted on our Platform. Continued use of our Platform following changes indicates your acceptance of the updated Privacy Policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-3 mt-6">12. Contact Us</h2>
        <p className="mb-3">For any questions or concerns regarding this Privacy Policy, please contact us at:</p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:service@kaziday.com" className="text-primary underline">service@kaziday.com</a>
        </p>
      </section>
    </div>
  );
} 