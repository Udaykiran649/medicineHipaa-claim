import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { blogs } from "./Blogs";
import "../css/Blogs.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);
  const relatedBlogs = blogs.filter((item) => item.slug !== slug).slice(0, 4);

  if (!blog) {
    return (
      <div className="blog-detail-page-light">
        <div className="blog-detail-wrap-light">
          <h1>Blog Not Found</h1>
          <Link to="/news-blogs" className="blog-read-btn">← Back to Blogs</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail-page-light">
      <Helmet>
        <title>{blog.metaTitle} | Revno RCM</title>
        <meta name="description" content={blog.metaDescription} />
        <meta name="keywords" content={blog.keywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://www.revnorcm.com/news-blogs/${blog.slug}`} />
        <meta property="og:title" content={`${blog.metaTitle} | Revno RCM`} />
        <meta property="og:description" content={blog.metaDescription} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://www.revnorcm.com/news-blogs/${blog.slug}`} />
      </Helmet>

      <section className="blog-detail-hero-light">
        <div className="blog-detail-hero-inner">
          <div className="blogs-breadcrumb">
            <Link to="/">Home</Link> › News & Blogs › {blog.category}
          </div>
          <h1>{blog.title}</h1>
          <p>{blog.excerpt}</p>
          <div className="detail-meta-light">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </section>

      <main className="blog-detail-layout-light">
        <article className="blog-detail-main-light">
          <img src={blog.image} alt={blog.title} className="detail-feature-img" />

          {blog.content.map(([heading, text]) => (
            <section key={heading}>
              <h2>{heading}</h2>
              <p>{text}</p>
            </section>
          ))}

          <div className="detail-cta-light">
            <h3>Need help improving your revenue cycle?</h3>
            <p>Get a free RCM audit and discover where your practice may be losing revenue.</p>
            <Link to="/contact-us">Request Free Audit →</Link>
          </div>
        </article>

        <aside className="blog-sidebar-light">
          <div className="sidebar-card-light">
            <h3>Trending Blogs</h3>
            {relatedBlogs.map((item) => (
              <Link key={item.id} to={`/news-blogs/${item.slug}`}>
                {item.title}
              </Link>
            ))}
          </div>

          <div className="sidebar-cta-light">
            <h3>Start With a Free Audit</h3>
            <p>Find hidden revenue gaps in your billing process.</p>
            <Link to="/contact-us">Get Free Audit</Link>
          </div>
        </aside>
      </main>
    </div>
  );
}