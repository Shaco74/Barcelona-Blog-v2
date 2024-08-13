import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'

const ALL_BLOGS_FILTERED = allBlogs.filter((post) => post.draft !== true)

export default async function Page() {
  const sortedPosts = sortPosts(ALL_BLOGS_FILTERED)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
