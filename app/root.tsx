import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import portrait1 from '~/assets/jpg/hairybiker.jpg'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()

	return (
		<Document nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your Journey Begins!</h1>
						<p className="text-base text-gray-600 md:text-lg lg:text-xl">
							Welcome to Epic News, where the latest developments in tech are
							found.
						</p>
						<button className="h-2/10 w-1/2 rounded-lg bg-blue-700 p-1 font-semibold hover:cursor-pointer hover:bg-blue-900 hover:underline hover:underline-offset-2 sm:h-3/10 sm:text-sm md:h-4/10 md:text-2xl lg:h-5/10 lg:text-5xl">
							Learn More
						</button>
						<div className="grid grid-cols-1 grid-rows-4 bg-gray-800 p-1">
							<img src={portrait1} />
							<div> Geoff Bingle</div>
							<div> Designer in Chief</div>
							<div> linkedin x</div>
						</div>
					</main>
				</div>
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
