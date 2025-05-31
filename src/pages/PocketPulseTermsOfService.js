import React from "react";

const PocketPulseTermsOfService = () => {
	return (
		<div className="max-w-4xl mx-auto px-6 py-10 text-black">
			<h1 className="text-4xl font-bold mb-8">Terms of Service</h1>

			<p className="mb-6">
				<strong>Effective Date:</strong> {new Date().toLocaleDateString()}
			</p>

			<p className="mb-6">
				Welcome to PocketPulse. By downloading, accessing, or using the
				PocketPulse application, you agree to comply with and be bound by the
				following Terms of Service ("Terms"). Please carefully read these terms
				before using the app. If you disagree with any part of the terms, please
				discontinue use immediately.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">License and Use</h2>
			<p className="mb-6">
				PocketPulse grants you a limited, personal, non-exclusive,
				non-transferable, revocable license to use the application for personal,
				non-commercial use only. You agree not to copy, modify, distribute,
				sell, lease, reverse engineer, or create derivative works based on the
				app or its components.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">No Data Collection</h2>
			<p className="mb-6">
				PocketPulse does not collect, store, or share any of your personal or
				financial data. All information entered into the app remains strictly on
				your device, providing you full control and privacy of your data.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Disclaimer of Warranties
			</h2>
			<p className="mb-6">
				PocketPulse is provided "as-is" without warranties or representations of
				any kind, either express or implied. We make no guarantees regarding the
				accuracy, reliability, or completeness of any content or functionality
				within the app.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Limitation of Liability
			</h2>
			<p className="mb-6">
				In no event shall PocketPulse or its developers be liable for any
				direct, indirect, incidental, special, consequential, or exemplary
				damages, including but not limited to damages for loss of profits, data,
				or other intangible losses, arising from or related to your use of the
				app.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">
				Modifications to the Terms
			</h2>
			<p className="mb-6">
				We reserve the right to update or modify these Terms at any time. You
				are encouraged to review the terms periodically. Your continued use of
				PocketPulse following the posting of any changes constitutes acceptance
				of those changes.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Termination</h2>
			<p className="mb-6">
				PocketPulse reserves the right to terminate your access to the app
				immediately, without prior notice, for any reason, including but not
				limited to violations of these Terms.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
			<p className="mb-6">
				These Terms are governed by and construed in accordance with the laws of
				the jurisdiction where PocketPulse developers reside, without regard to
				conflicts of law principles.
			</p>

			<h2 className="text-2xl font-semibold mt-8 mb-4">Contact Information</h2>
			<p className="mb-6">
				For any questions, concerns, or feedback regarding these Terms of
				Service, please contact us at:
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

export default PocketPulseTermsOfService;
