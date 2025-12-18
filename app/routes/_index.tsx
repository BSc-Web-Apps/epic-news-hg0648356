import { invariant } from '@epic-web/invariant'
import {
	data,
	useLoaderData,
	type LoaderFunctionArgs,
	type MetaFunction,
} from 'react-router'
import { prisma } from '#app/utils/db.server.ts'
import { toTitleCase } from '#app/utils/stringUtils.ts'
import heroImage from '~/assets/jpg/10downingstreet.jpg'
import ArticleCard from '#app/components/organisms/ArticleCard.tsx'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export async function loader() {
	const allArticles = await prisma.article.findMany({
		where: {
			isPublished: true,
		},
		select: {
			id: true,
			title: true,
			category: { select: { name: true } },
			images: { select: { id: true, objectKey: true } },
		},
		orderBy: {
			createdAt: 'desc',
		},
	})

	return data({ allArticles })
}

export default function Index() {
	const { allArticles } = useLoaderData<typeof loader>()

	return (
		<main className="h-full">
			<div
				className="flex h-[80vh] items-center justify-center bg-cover bg-center"
				style={{
					backgroundImage: `url(${heroImage})`,
					backgroundAttachment: 'fixed',
				}}
			>
				<div className="text-center text-white">
					<h1 className="text-mega mb-2">Hear it Here First!</h1>
					<p className="text-base md:text-lg lg:text-xl">
						Welcome to Epic News. We're on the heartbeat of the nations
						developments.
					</p>
				</div>
			</div>

			<div className="container mx-auto py-16">
				<div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
					{allArticles.map((article, index) => {
						const isMainArticle = index === 0

						return isMainArticle ? (
							<div className="col-span-2 row-span-2">
								<ArticleCard
									key={article.id}
									articleId={article.id}
									title={article.title}
									category={article.category?.name}
									objectKey={article.images[0]?.objectKey}
								/>
							</div>
						) : (
							<ArticleCard
								key={article.id}
								articleId={article.id}
								title={article.title}
								category={article.category?.name}
								objectKey={article.images[0]?.objectKey}
							/>
						)
					})}
				</div>
			</div>
		</main>
	)
}
