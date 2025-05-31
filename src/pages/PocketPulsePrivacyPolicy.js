import React from "react";

const PocketPulsePrivacyPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 py-10 text-black">
			<h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

			<p className="mb-6">
				<strong>Effective Date:</strong> {new Date().toLocaleDateString()}
			</p>

			<p className="mb-6">
				PocketPulse is committed to respecting and protecting your privacy. This
				privacy policy clearly outlines our practices regarding the information
				we handle.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Information Collection
			</h2>
			<p className="mb-6">
				PocketPulse does not collect or store any personal or sensitive user
				information. All transaction and budget data entered into the app remain
				solely on your device. PocketPulse functions completely offline and does
				not rely on internet connectivity for its core features.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Use of Personal Information
			</h2>
			<p className="mb-6">
				As no data is collected, we do not use your personal information for any
				purpose. PocketPulse does not analyze, track, or share your personal or
				budgeting data with any third party.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Third-Party Services</h2>
			<p className="mb-6">
				PocketPulse does not integrate any third-party analytics, advertising,
				or tracking technologies. Your data is never exposed or shared with any
				other services or external entities.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Data Security</h2>
			<p className="mb-6">
				We ensure that your budgeting data remains exclusively on your device
				with robust local storage mechanisms. However, as your data resides
				locally, we strongly advise you to safeguard your device using standard
				security practices such as password protection or biometric
				authentication.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
			<p className="mb-6">
				PocketPulse is not specifically designed for users under the age of 13,
				and we do not knowingly collect information from children. If we become
				aware of any inadvertent data collection from a minor, we will promptly
				delete such data.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Changes to This Privacy Policy
			</h2>
			<p className="mb-6">
				We reserve the right to modify this privacy policy occasionally. Should
				we make any changes, we will promptly update this policy on our app and
				notify users of significant updates through an in-app message.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
			<p className="mb-6">
				If you have questions, concerns, or suggestions regarding our privacy
				practices, please feel free to contact us at:
				<br />
				<a
					href="mailto:alextitov203@gmail.com"
					className="text-blue-600 underline"
				>
					alextitov203@gmail.com
				</a>
				.
			</p>
		</div>
	);
};

export default PocketPulsePrivacyPolicy;
