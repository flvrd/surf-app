import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();

  const article = articles.find((item) => item.slug === slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <ArticleOverview article={article} />
    </main>
  );
}

export async function getStaticParams() {
  const articles = await fetchDataFromStrapi("blog-articles");

  const paths = articles.map((article) => ({
    params: {
      article: article.attributes.slug,
    },
  }));
}
