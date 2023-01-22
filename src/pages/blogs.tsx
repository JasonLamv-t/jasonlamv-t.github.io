import Card from '@/components/Card';
import { getAllBlogsMeta } from '@/libs/blog';
import { BlogMeta } from '@/types/blog';

function Article({ blog }: { blog: BlogMeta }) {
  return (
    <article className="md:grid md:grid-cols-5 md:items-baseline">
      <Card.Eyebrow
        as="time"
        className="hidden md:block md:col-span-1"
        dateTime={blog.date}
      >
        {blog.dateString}
      </Card.Eyebrow>
      <Card href="/" className="md:col-span-4">
        <Card.Eyebrow
          as="time"
          className="md:hidden md:col-span-1"
          dateTime={blog.date}
        >
          <div className="flex flex-row mb-2">
            <span
              className="h-5 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"
              aria-hidden="true"
            />
            <span className="h-auto ml-2">{blog.dateString}</span>
          </div>
        </Card.Eyebrow>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Description>{blog.summary}</Card.Description>
        <Card.CTA>Read more</Card.CTA>
      </Card>
    </article>
  );
}

export default function Blogs({ blogs }: { blogs: BlogMeta[] }) {
  return (
    <>
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-4xl flex-col space-y-2">
          {blogs.map((blog) => (
            <Article key={blog.title} blog={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

export function getStaticProps() {
  const AllBlogsMeta = getAllBlogsMeta();
  return { props: { blogs: AllBlogsMeta } };
}
