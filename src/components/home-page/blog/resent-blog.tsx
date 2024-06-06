import BlogCard from './blog-card';
import blogImage1 from '/public/images/blog-image-1.png';
import blogImage2 from '/public/images/blog-image-2.png';
import blogImage3 from '/public/images/blog-image-3.png';
interface RecentBlogProps {
  readTime?: boolean | string;
}
const RecentBlog = ({ readTime }: RecentBlogProps) => {
  return (
    <>
      <BlogCard
        readTime={readTime || false}
        title="How to create a blog post in Zequence"
        description="Learn how to create a blog post in Zequence and share your thoughts with the world."
        image={blogImage1}
        href="/blog/how-to-create-a-blog-post-in-zequence"
        category="Category"
      />
      <BlogCard
        readTime={readTime || false}
        title="How to create a blog post in Zequence"
        description="Learn how to create a blog post in Zequence and share your thoughts with the world."
        image={blogImage2}
        href="/blog/how-to-create-a-blog-post-in-zequence"
        category="Category"
      />
      <BlogCard
        readTime={readTime || false}
        title="How to create a blog post in Zequence"
        description="Learn how to create a blog post in Zequence and share your thoughts with the world."
        image={blogImage3}
        href="/blog/how-to-create-a-blog-post-in-zequence"
        category="Category"
      />
    </>
  );
};

export default RecentBlog;
