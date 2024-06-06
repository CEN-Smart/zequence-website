import BlogHeading from '../home-page/blog/blog-heading';
import RecentPress from '../home-page/blog/resent-blog';

const PressNews = () => {
  return (
    <section className="bg-custom">
      <BlogHeading heading="Press" title=" Latest Press News">
        <RecentPress />
      </BlogHeading>
    </section>
  );
};

export default PressNews;
