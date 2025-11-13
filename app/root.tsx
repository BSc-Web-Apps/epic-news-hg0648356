import { RiLinkedinBoxFill, RiTwitterXFill } from 'react-icons/ri'
import { useLoaderData } from 'react-router'
import { type Route } from './+types/root.ts'
import { type loader } from './__root.server.tsx'
import { GeneralErrorBoundary } from './components/error-boundary.tsx'
import Document from './components/shared-layout/Document.tsx'
import { ThemeSwitch, useTheme } from './routes/resources+/theme-switch.tsx'
import { useNonce } from './utils/nonce-provider.ts'
import rootLinkElements from './utils/providers/rootLinkElements.ts'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import FooterBasic from './components/organisms/Footer/FooterBasic.tsx'
import portrait1 from '~/assets/jpg/hairybiker.jpg'
import portrait2 from '~/assets/jpg/nintchdbpict000338874152.jpg'

export const links: Route.LinksFunction = () => {
	return rootLinkElements
}
export { meta } from './__root.client.tsx'
export { headers, loader } from './__root.server.tsx'

interface TeamMemberCardProps {
	name: string
	role: string
	imageSrc: string
}

export function TeamMemberCard({ name, role, imageSrc }: TeamMemberCardProps) {
	return (
		<div className="w-fit rounded-lg bg-slate-800 p-8">
			<img
				src={imageSrc}
				alt="An employee"
				className="mx-auto h-64 w-64 rounded-full"
			/>

			<div className="pt-6">
				<h3 className="font-semi-bold text-center text-white">{name}</h3>
				<p className="pt-1 text-center text-slate-400">{role}</p>

				<div className="flex justify-center gap-4 pt-6 text-slate-400">
					<RiTwitterXFill />
					<RiLinkedinBoxFill />
				</div>
			</div>
		</div>
	)
}

export default function App() {
	const data = useLoaderData<typeof loader | null>()
	const nonce = useNonce()
	const theme = useTheme()

	return (
		<Document theme={theme} nonce={nonce} honeyProps={data?.honeyProps}>
			<div className="flex h-screen flex-col justify-between">
				<HeaderWithSearch />
				<div className="flex-1">
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Epic News</h1>
						<h2 className="text-2xl">harry gee news read now</h2>
						<div className="m-4 flex gap-4">
							<TeamMemberCard
								name="Geoff Einstein"
								role="Senior Visionary"
								imageSrc={portrait1}
							></TeamMemberCard>

							<TeamMemberCard
								name="Shaun Dunlop"
								role="Office Catering"
								imageSrc={portrait2}
							></TeamMemberCard>

							<TeamMemberCard
								name="Shaun Dunlop"
								role="Office Catering"
								imageSrc={portrait2}
							></TeamMemberCard>
						</div>
					</main>
				</div>
				<div className="container flex justify-between pb-5">
					<ThemeSwitch userPreference={data?.requestInfo.userPrefs.theme} />
				</div>
				<FooterBasic />
			</div>
		</Document>
	)
}

export const ErrorBoundary = GeneralErrorBoundary
