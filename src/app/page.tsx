import Link from 'next/link';
import { getAllArticles } from './(server)/api';
import styles from './page.module.css'
import type { Metadata } from 'next'
import { ROOT_DIR_ALIAS } from 'next/dist/lib/constants';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';
import { ArticlePreview } from './articlePreview';


const ARTICLES_PER_PAGE = 10;

export default async function Home({searchParams}:{searchParams:Record<string, string>}) {
// console.log(searchParams['page']);
  const page = Number.parseInt(searchParams['page'] ?? 1);
  const allArticles = await getAllArticles();
  const articles = allArticles.slice((page-1) * ARTICLES_PER_PAGE, page * ARTICLES_PER_PAGE);
  const nextPageUrl = {
    search: new URLSearchParams({page:(page+1).toString()}).toString(),
  }
  
  return (
    <>
    <h1>Blog, page {page}</h1>
    <ul>
      {articles.map(article => (
          <li key={article.name}>
            <ArticlePreview name={article.name} text={article.header} />
            {/* <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink> */}
          </li>
        ))}
    </ul>

    <AppLink href={nextPageUrl}>Next</AppLink>

    </>
  );
}

