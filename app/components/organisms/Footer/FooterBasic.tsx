import logo from '~/assets/svg/icon-placeholder.svg'

export interface FooterProps {
	companyName?: string
	altText?: string
}

const FooterBasic = ({
	companyName = 'Epic News',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="border-t border-slate-800 bg-slate-900 py-12">
			<div className="container mx-auto flex flex-col items-center justify-between gap-y-6 px-6 lg:flex-row">
				<div className="flex items-center gap-3">
					<img src={logo} alt={altText} className="h-8 w-8 opacity-80" />
					<span className="text-sm font-semibold text-white">
						{companyName}
					</span>
				</div>

				<div className="text-xs text-slate-500">
					&copy; {new Date().getFullYear()} {companyName}. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default FooterBasic
