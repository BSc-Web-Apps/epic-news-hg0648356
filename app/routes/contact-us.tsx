export default function ContactUsRoute() {
	return (
		<main className="min-h-screen bg-slate-900 py-20">
			<div className="container mx-auto max-w-3xl px-6">
				<h1 className="text-mega text-white">Contact Us</h1>
				<p className="mt-4 text-slate-400">
					Have a question, tip, or story to share? We’d love to hear from you.
				</p>

				<div className="mt-12 grid gap-12 md:grid-cols-2">
					{/* Contact details */}
					<div>
						<h2 className="mb-4 text-xl font-semibold text-white">
							Our Office
						</h2>

						<p className="text-slate-400">
							Epic News Ltd
							<br />
							42 Parliament Lane
							<br />
							London, SW1A 2AA
							<br />
							United Kingdom
						</p>

						<p className="mt-6 text-slate-400">
							Email: <span className="text-white">contact@epicnews.co.uk</span>
						</p>
					</div>

					{/* Fake form */}
					<div className="rounded-xl bg-slate-800 p-8 shadow-lg">
						<h2 className="mb-6 text-xl font-semibold text-white">
							Send us a message
						</h2>

						<div className="space-y-4">
							<input
								type="text"
								placeholder="Your name"
								className="w-full rounded-md bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-slate-600"
							/>

							<input
								type="email"
								placeholder="Your email"
								className="w-full rounded-md bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-slate-600"
							/>

							<textarea
								placeholder="Your message"
								rows={4}
								className="w-full rounded-md bg-slate-900 p-3 text-white placeholder-slate-500 outline-none focus:ring-2 focus:ring-slate-600"
							/>

							<button
								type="button"
								className="w-full rounded-md bg-white py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
							>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}
