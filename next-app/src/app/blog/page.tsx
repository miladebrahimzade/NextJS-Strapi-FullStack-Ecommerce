import Link from 'next/link'
import { getAllPosts } from '../../../lib/cms'

const Blog = async () => {
  const posts = await getAllPosts()

  return (
    <div>
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.slug}`}>
          <div>
            <h1>{post.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
