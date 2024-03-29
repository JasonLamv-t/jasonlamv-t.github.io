import { Author } from 'next/dist/lib/metadata/types/metadata-types';
import { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types';
import { Twitter } from 'next/dist/lib/metadata/types/twitter-types';
import Platform from '../app/types/Platform';

interface Config {
  siteMeta: {
    title: string;
    description: string;
    authors?: Author[];
    keywords?: string[] | string;
    locale: string;
    language: string;
    theme: 'system' | 'light' | 'dark';
    url: string;
    logo: string;
    banner: string;
    siteRepo?: string;
    openGraph?: OpenGraph; // TODO: add example setting
    twitter?: Twitter; // TODO: add example setting
  };
  navigation: [title: string, path: string][];
  feature?: {
    showCodeLineNumbers?: boolean;
    // TODO: To be implemented for local
    search?: 'algolia'; // | 'local'
  };
  footer?: {
    beian?: string;
    socialLinks?: [platform: Platform, value: string][];
  };
  // For env verify
  env: {
    algolia: {
      app_id: string | undefined;
      api_key: string | undefined;
      index_name: string | undefined;
    };
    isAlgoliaAvailable: boolean;
  };
}

const checkConfigAndEnvironments = (config: Omit<Config, 'env'>): Config => {
  const algolia = {
    app_id: process.env.NEXT_PUBLIC_DOCSEARCH_APP_ID,
    api_key: process.env.NEXT_PUBLIC_DOCSEARCH_API_KEY,
    index_name: process.env.NEXT_PUBLIC_DOCSEARCH_INDEX_NAME,
  };
  const env = {
    algolia,
    isAlgoliaAvailable: Object.values(algolia).every((v) => !!v),
  };
  return { ...config, env };
};

const config: Config = checkConfigAndEnvironments({
  siteMeta: {
    title: 'Brachistochrone',
    authors: [{ name: 'Jason Lam', url: '/about/JasonLamv-t' }],
    description: "Jason Lam's personal website",
    locale: 'zh-CN',
    language: 'zh-cn, en-us',
    theme: 'system',
    url: 'https://jasonlam.ccp',
    logo: '/data/images/logo.jpg',
    banner: "Jason Lam's personal website",
    siteRepo: 'https://github.com/JasonLamv-t/jasonlamv-t.github.io',
  },
  navigation: [
    ['Blogs', '/posts'],
    ['Projects', '/projects'],
    ['Resources', '/resources'],
    ['About', '/about'],
  ],
  feature: {
    search: 'algolia',
  },
  footer: {
    // beian: '你的备案号',
    socialLinks: [
      [Platform.email, 'jasonlamv-t@hotmail.com'],
      [Platform.github, 'JasonLamv-t'],
      [Platform.linkedin, 'https://www.linkedin.com/in/jason-lam-0827181b0'],
      [Platform.bilibili, '10905363'],
      [Platform.instagram, 'jasonlamvt'],
      [Platform.weibo, 'https://weibo.com/u/5609011652'],
    ],
  },
});

export { config, config as default };
export const siteMeta = config.siteMeta;
export const navigation = config.navigation;
export const feature = config.feature;
export const footer = config.footer;
export const env = config.env;
