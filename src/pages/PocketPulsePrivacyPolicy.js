import React from "react";

const PocketPulsePrivacyPolicy = () => {
	return (
		<div
			style={{
				minHeight: "100vh",
				backgroundColor: "#111827",
				color: "white",
				display: "flex",
				justifyContent: "center",
				padding: "3rem 1rem",
			}}
		>
			<div
				style={{
					maxWidth: "768px",
					width: "100%",
					backgroundColor: "#1F2937",
					padding: "2rem",
					borderRadius: "0.5rem",
					boxShadow:
						"0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)",
				}}
			>
				<h1
					style={{
						fontSize: "2.25rem",
						fontWeight: "bold",
						marginBottom: "1.5rem",
						paddingBottom: "0.5rem",
						borderBottom: "1px solid #4B5563",
					}}
				>
					Privacy Policy
				</h1>

				<p style={{ marginBottom: "1rem" }}>
					<strong>Effective Date:</strong> {new Date().toLocaleDateString()}
				</p>

				<p style={{ marginBottom: "1rem" }}>
					PocketPulse respects your privacy and is committed to protecting it
					through this Privacy Policy. This policy describes the types of
					information we may collect or that you may provide when you use our
					application and our practices for collecting, using, maintaining,
					protecting, and disclosing that information.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					1. Information We Collect
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					PocketPulse does not collect any personal data from users. The app is
					designed to function entirely offline. All data you enter into the app
					stays on your device and is never transmitted to any external servers
					or third-party services.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					2. Local Storage and Data Control
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					Your budgeting data, preferences, and any other information you input
					into the app are stored locally on your device using secure storage
					mechanisms provided by your operating system. You maintain full
					control over this data and may delete it at any time through your
					device settings.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					3. Third-Party Services
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					PocketPulse does not integrate or communicate with any third-party
					services, analytics platforms, advertising networks, or APIs. This
					ensures that your data is not subject to external tracking or
					analysis.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					4. Children's Privacy
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					Our app is not intended for children under 13 years of age. We do not
					knowingly collect personal information from children. If we learn we
					have collected or received personal information from a child under 13
					without verification of parental consent, we will delete that
					information immediately.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					5. Security
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					We take the security of your locally stored data seriously. While we
					do not transmit or store any data on our servers, we encourage users
					to protect their devices with passwords or biometric authentication to
					prevent unauthorized access to sensitive information.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					6. Changes to This Policy
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					We may update our Privacy Policy from time to time. Any changes will
					be posted within the app and take effect immediately upon posting. We
					encourage you to periodically review this page for the latest
					information on our privacy practices.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					7. Legal Compliance
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					Although we do not collect data, we still take legal compliance
					seriously. We are committed to complying with data protection
					regulations, including the GDPR, CCPA, and other applicable laws. If
					you are located in a jurisdiction that requires data protection
					rights, you can rest assured that PocketPulse does not gather any
					personally identifiable information.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					8. Your Rights
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					Since we do not store or manage your data, there is no personal data
					to access, correct, or delete. However, if you have concerns about how
					the app handles your device's local storage, you may contact us
					directly.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					9. Contact Us
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					If you have any questions, comments, or concerns about this Privacy
					Policy, please contact us at:
				</p>
				<p style={{ marginBottom: "1rem" }}>
					Email:{" "}
					<a
						href="mailto:alextitov203@gmail.com"
						style={{ color: "#60A5FA", textDecoration: "underline" }}
					>
						alextitov203@gmail.com
					</a>
				</p>

				<p style={{ fontSize: "0.875rem", color: "#9CA3AF" }}>
					Last updated: {new Date().toLocaleDateString()}
				</p>
			</div>
		</div>
	);
};

export default PocketPulsePrivacyPolicy;
