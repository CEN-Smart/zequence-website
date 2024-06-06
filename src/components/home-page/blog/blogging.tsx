'use client';
import BlogHeading from './blog-heading';
import RecentBlog from './resent-blog';

const Blogging = () => {
	return (
		<section className='bg-custom'>
			<BlogHeading
				heading='Blog'
				title={`Read the latest news, blogs, stories from the tech world.`}>
				<RecentBlog readTime='5 min read' />
			</BlogHeading>
		</section>
	);
};

export default Blogging;
