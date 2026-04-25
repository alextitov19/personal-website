import { LegalShell } from "@/components/LegalShell";

export default function PocketPulsePrivacyPolicy() {
  const today = new Date().toLocaleDateString();
  return (
    <LegalShell title="PocketPulse — Privacy Policy" backTo="/" backLabel="Home">
      <p>
        <strong>Effective Date:</strong> {today}
      </p>
      <p>
        PocketPulse respects your privacy and is committed to protecting it
        through this Privacy Policy. This policy describes the types of
        information we may collect or that you may provide when you use our
        application and our practices for collecting, using, maintaining,
        protecting, and disclosing that information.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        PocketPulse does not collect any personal data from users. The app is
        designed to function entirely offline. All data you enter into the app
        stays on your device and is never transmitted to any external servers
        or third-party services.
      </p>

      <h2>2. Local Storage and Data Control</h2>
      <p>
        Your budgeting data, preferences, and any other information you input
        into the app are stored locally on your device using secure storage
        mechanisms provided by your operating system. You maintain full control
        over this data and may delete it at any time through your device
        settings.
      </p>

      <h2>3. Third-Party Services</h2>
      <p>
        PocketPulse does not integrate or communicate with any third-party
        services, analytics platforms, advertising networks, or APIs. This
        ensures that your data is not subject to external tracking or analysis.
      </p>

      <h2>4. Children's Privacy</h2>
      <p>
        Our app is not intended for children under 13 years of age. We do not
        knowingly collect personal information from children. If we learn we
        have collected or received personal information from a child under 13
        without verification of parental consent, we will delete that
        information immediately.
      </p>

      <h2>5. Security</h2>
      <p>
        We take the security of your locally stored data seriously. While we do
        not transmit or store any data on our servers, we encourage users to
        protect their devices with passwords or biometric authentication to
        prevent unauthorized access to sensitive information.
      </p>

      <h2>6. Changes to This Policy</h2>
      <p>
        We may update our Privacy Policy from time to time. Any changes will be
        posted within the app and take effect immediately upon posting. We
        encourage you to periodically review this page for the latest
        information on our privacy practices.
      </p>

      <h2>7. Legal Compliance</h2>
      <p>
        Although we do not collect data, we still take legal compliance
        seriously. We are committed to complying with data protection
        regulations, including the GDPR, CCPA, and other applicable laws. If
        you are located in a jurisdiction that requires data protection rights,
        you can rest assured that PocketPulse does not gather any personally
        identifiable information.
      </p>

      <h2>8. Your Rights</h2>
      <p>
        Since we do not store or manage your data, there is no personal data to
        access, correct, or delete. However, if you have concerns about how the
        app handles your device's local storage, you may contact us directly.
      </p>

      <h2>9. Contact Us</h2>
      <p>
        If you have any questions, comments, or concerns about this Privacy
        Policy, please contact us at{" "}
        <a href="mailto:alextitov203@gmail.com">alextitov203@gmail.com</a>.
      </p>

      <p style={{ opacity: 0.6 }}>Last updated: {today}</p>
    </LegalShell>
  );
}
