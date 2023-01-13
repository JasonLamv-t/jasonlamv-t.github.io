import authorData from 'data/meta/author';
import siteData from 'data/meta/site';
import Link from 'next/link';
import SocialIconLink from './SocialIconLink';

const Footer = () => {
  const socialData = Object.entries(authorData.social);

  return (
    <footer className="mt-16 flex flex-col items-center">
      <div className="mb-3 flex space-x-4">
        {socialData.map(([platform, value]) => (
          <SocialIconLink platform={platform} value={value} key={platform} />
        ))}
      </div>
      <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{siteData.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteData.title}</Link>
      </div>
      <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <Link href="https://github.com/jasonlamv-t/tailwind-next-blog">
          Tailwind Next Blog
        </Link>
        {/* <div>{` • `}</div> */}
        {/* <Link href="https://beian.miit.gov.cn/">{siteData.beian}</Link> */}
      </div>
    </footer>
  );
};

export default Footer;
