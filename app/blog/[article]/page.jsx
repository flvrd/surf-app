import ArticleIntro from "@/app/_components/Blog/ArticleIntro";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";
import ArticleOverview from "@/app/_components/Blog/ArticleOverview";
import ArticleComponent from "@/app/_components/Blog/ArticleComponent";

export default async function Page({ params }) {
  const { article: slug } = params;

  const articles = await fetchBlogArticles();

  const article = articles.find((item) => item.slug === slug);

  return (
    <main>
      <ArticleIntro article={article} />
      <section className="article-section">
        <ArticleOverview article={article} />
        {article.articleContent.map((component) => (
          <ArticleComponent key={component.id} component={component.id} />
        ))}
      </section>
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
