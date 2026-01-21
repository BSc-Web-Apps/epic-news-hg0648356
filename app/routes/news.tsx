import { NavLink, Outlet } from 'react-router'

export default function NewsPage() {
	return (
		<main className="flex flex-col py-24">
			<div className="container">
				<h1 className="text-h1">News</h1>
				<div className="mt-8 flex flex-wrap gap-8">
					<div className="flex space-x-4 py-4">
						<NavLink
							to="technology"
							prefetch="intent"
							className={({ isActive }) =>
								`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
							}
						>
							Technology
						</NavLink>
					</div>
					<div className="flex space-x-4 py-4">
						<NavLink
							to="entertainment"
							prefetch="intent"
							className={({ isActive }) =>
								`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
							}
						>
							Entertainment
						</NavLink>
					</div>
					<div className="flex space-x-4 py-4">
						<NavLink
							to="business"
							prefetch="intent"
							className={({ isActive }) =>
								`${isActive ? 'text-blue-300 underline underline-offset-8' : 'text-blue-500'}`
							}
						>
							Business
						</NavLink>
					</div>
				</div>
			</div>

			<Outlet />
		</main>
	)
}
