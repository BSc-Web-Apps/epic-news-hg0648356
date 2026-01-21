import { RiTwitterXFill, RiLinkedinBoxFill } from 'react-icons/ri'
import portrait1 from '~/assets/jpg/hairybiker.jpg'
import portrait2 from '~/assets/jpg/portrait-03.jpg'
import portrait3 from '~/assets/jpg/portrait-04.jpg'

interface TeamMemberCardProps {
	name: string
	role: string
	imageSrc: string
}

export function TeamMemberCard({ name, role, imageSrc }: TeamMemberCardProps) {
	return (
		<div className="flex w-72 flex-col items-center rounded-xl bg-slate-800 p-8 shadow-lg transition hover:scale-105">
			<img
				src={imageSrc}
				alt="An employee"
				className="h-40 w-40 rounded-full object-cover ring-4 ring-slate-700"
			/>

			<div className="pt-6 text-center">
				<h3 className="text-lg font-semibold text-white">{name}</h3>
				<p className="mt-1 text-sm text-slate-400">{role}</p>

				<div className="mt-6 flex justify-center gap-6 text-xl text-slate-400">
					<RiTwitterXFill className="cursor-pointer hover:text-white" />
					<RiLinkedinBoxFill className="cursor-pointer hover:text-white" />
				</div>
			</div>
		</div>
	)
}

export default function AboutUsRoute() {
	return (
		<main className="min-h-screen bg-slate-900 py-20">
			<div className="container mx-auto px-6 text-center">
				<h1 className="text-mega text-white">Epic News</h1>
				<p className="mx-auto mt-4 max-w-2xl text-slate-400">
					Epic News brings you the stories that matter most, delivered by a
					passionate team of journalists and editors at the heart of the nation.
				</p>

				<h2 className="mt-16 text-3xl font-semibold text-white">
					Meet Our Team
				</h2>

				<div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
					<TeamMemberCard
						name="Steven Smith"
						role="Senior Editor"
						imageSrc={portrait1}
					/>

					<TeamMemberCard
						name="Paul Johnson"
						role="Chief Executive Officer"
						imageSrc={portrait2}
					/>

					<TeamMemberCard
						name="Richard Williams"
						role="Chief Publisher"
						imageSrc={portrait3}
					/>
				</div>
			</div>
		</main>
	)
}
