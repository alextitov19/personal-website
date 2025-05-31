import React from "react";

const PocketPulseTermsOfService = () => {
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
					Terms of Service
				</h1>

				<p style={{ marginBottom: "1rem" }}>
					<strong>Effective Date:</strong> {new Date().toLocaleDateString()}
				</p>

				<p style={{ marginBottom: "1rem" }}>
					Welcome to PocketPulse. By using this application, you agree to be
					bound by the following Terms of Service. Please read them carefully.
					If you do not agree with any part of these terms, you must discontinue
					use of the app immediately.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					1. License to Use
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					PocketPulse grants you a limited, non-exclusive, non-transferable,
					revocable license to use the app strictly in accordance with these
					Terms. You agree not to use the app for any unlawful purpose, or in
					any way that could damage, disable, or impair the application.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					2. User Conduct
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					You agree not to misuse the app or attempt to gain unauthorized access
					to any part of it. Misuse includes, but is not limited to, reverse
					engineering, distributing, or reproducing any part of the software for
					commercial or illegal use.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					3. Data Ownership
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					All data entered into the app by the user is stored locally on the
					device. PocketPulse does not have access to this data and assumes no
					responsibility for loss of data due to user error, device failure, or
					deletion.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					4. Privacy
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					PocketPulse does not collect or transmit any personal information. For
					details, refer to our
					<a
						href="/privacy/pocketpulse"
						style={{ color: "#60A5FA", textDecoration: "underline" }}
					>
						{" "}
						Privacy Policy
					</a>
					.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					5. Updates and Modifications
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					We reserve the right to modify or discontinue the app at any time
					without notice. These Terms may also be updated periodically.
					Continued use of the app following changes constitutes your acceptance
					of those changes.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					6. Termination
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					We may terminate or suspend your access to PocketPulse without notice
					if you breach any of these Terms. You may also discontinue use at any
					time by deleting the app from your device.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					7. Limitation of Liability
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					PocketPulse is provided “as-is” without warranties of any kind. In no
					event shall the developers be liable for any indirect, incidental, or
					consequential damages arising out of or related to the use or
					performance of the application.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					8. Disclaimers
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					We do not warrant that the app will be error-free, secure, or operate
					without interruption. All risks associated with the use of the app are
					assumed by the user.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					9. Governing Law
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					These Terms shall be governed by the laws of the State of California,
					without regard to its conflict of law principles. Any disputes will be
					resolved in accordance with California law.
				</p>

				<h2
					style={{
						fontSize: "1.5rem",
						fontWeight: "600",
						marginTop: "2rem",
						marginBottom: "0.5rem",
					}}
				>
					10. Contact
				</h2>
				<p style={{ marginBottom: "1rem" }}>
					If you have questions or concerns about these Terms, please contact us
					at:
					<br />
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

export default PocketPulseTermsOfService;
