import { Link } from 'react-router'
import { getArticleImgSrc } from '~/utils/misc.tsx'
import siteLogo from '~/assets/png/epic-news-logo.png'

interface ArticleCardProps {
	articleId: string
	title: string
	category?: string
	objectKey?: string
}

export default function ArticleCard({
	articleId,
	title,
	category,
	objectKey,
}: ArticleCardProps) {
	const imageSrc = objectKey ? getArticleImgSrc(objectKey) : siteLogo
	return (
		<Link to={`/article/${articleId}`}>
			<div>
				<div className="bg-card text-card-foreground border-border bg-card text-card-foreground border-border flex aspect-square flex-col overflow-hidden rounded-lg border shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md hover:brightness-95">
					<div className="flex-1 overflow-hidden">
						<img
							src={imageSrc}
							alt={title}
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="p-4">
						<h3 className="text-body-md line-clamp-2 font-semibold">{title}</h3>
						<p className="text-body-xs text-muted-foreground mt-1">
							{category || 'General News'}
						</p>
					</div>
				</div>
			</div>
		</Link>
	)
}
