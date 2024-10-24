

import Link from 'next/link'

export default function BlogPostPage({params}) {
	return (
		<main>
			<h1>Blog Post</h1>
			<p>{params.post}</p>
			<p>
				<Link href='./'>Go to Blog</Link>
			</p>
		</main>
	)
}


