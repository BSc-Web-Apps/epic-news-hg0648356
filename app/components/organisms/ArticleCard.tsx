import { Link } from 'react-router'
import { getArticleImgSrc } from '~/utils/misc.tsx'
import siteLogo from '~app\assets\png\epic-news-logo.png'

interface ArticleCardProps {
	articleId: string
	title: string
	category?: string
}

export default function ArticleCard({
	articleId,
	title,
	category,
}: ArticleCardProps) {
	return (
		<Link to={`/article/${articleId}`}>
			<div className="bg-red-900 p-4">
				<h3>{title}</h3>
				<p>{category || 'General News'}</p>
			</div>
		</Link>
	)
}
