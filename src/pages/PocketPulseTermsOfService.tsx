import { LegalShell } from "@/components/LegalShell";

export default function PocketPulseTermsOfService() {
  const today = new Date().toLocaleDateString();
  return (
    <LegalShell title="PocketPulse — Terms of Service" backTo="/" backLabel="Home">
      <p>
        <strong>Effective Date:</strong> {today}
      </p>
      <p>
        Welcome to PocketPulse. By using this application, you agree to be
        bound by the following Terms of Service. Please read them carefully.
        If you do not agree with any part of these terms, you must discontinue
        use of the app immediately.
      </p>

      <h2>1. License to Use</h2>
      <p>
        PocketPulse grants you a limited, non-exclusive, non-transferable,
        revocable license to use the app strictly in accordance with these
        Terms. You agree not to use the app for any unlawful purpose, or in any
        way that could damage, disable, or impair the application.
      </p>

      <h2>2. User Conduct</h2>
      <p>
        You agree not to misuse the app or attempt to gain unauthorized access
        to any part of it. Misuse includes, but is not limited to, reverse
        engineering, distributing, or reproducing any part of the software for
        commercial or illegal use.
      </p>

      <h2>3. Data Ownership</h2>
      <p>
        All data entered into the app by the user is stored locally on the
        device. PocketPulse does not have access to this data and assumes no
        responsibility for loss of data due to user error, device failure, or
        deletion.
      </p>

      <h2>4. Privacy</h2>
      <p>
        PocketPulse does not collect or transmit any personal information. For
        details, refer to our <a href="/privacy/pocketpulse">Privacy Policy</a>.
      </p>

      <h2>5. Updates and Modifications</h2>
      <p>
        We reserve the right to modify or discontinue the app at any time
        without notice. These Terms may also be updated periodically. Continued
        use of the app following changes constitutes your acceptance of those
        changes.
      </p>

      <h2>6. Termination</h2>
      <p>
        We may terminate or suspend your access to PocketPulse without notice
        if you breach any of these Terms. You may also discontinue use at any
        time by deleting the app from your device.
      </p>

      <h2>7. Limitation of Liability</h2>
      <p>
        PocketPulse is provided “as-is” without warranties of any kind. In no
        event shall the developers be liable for any indirect, incidental, or
        consequential damages arising out of or related to the use or
        performance of the application.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        We do not warrant that the app will be error-free, secure, or operate
        without interruption. All risks associated with the use of the app are
        assumed by the user.
      </p>

      <h2>9. Governing Law</h2>
      <p>
        These Terms shall be governed by the laws of the State of California,
        without regard to its conflict of law principles. Any disputes will be
        resolved in accordance with California law.
      </p>

      <h2>10. Contact</h2>
      <p>
        If you have questions or concerns about these Terms, please contact us
        at <a href="mailto:alextitov203@gmail.com">alextitov203@gmail.com</a>.
      </p>

      <p style={{ opacity: 0.6 }}>Last updated: {today}</p>
    </LegalShell>
  );
}
