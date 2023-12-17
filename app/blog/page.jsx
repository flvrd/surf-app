import FeaturedItems from "../_components/FeaturedItems/FeaturedItems";
import HighlightArticle from "../_components/Blog/HighlightArticle";
import Subscribe from "../_components/Blog/Subscribe";
import { fetchBlogArticles, fetchDataFromStrapi } from "@/utils/strapi.utils";

export default async function Page() {
  // Fetch blog data
  const blogData = await fetchDataFromStrapi("blog-articles?populate=deep");

  // Process blog data
  const processedBlogArticles = await fetchBlogArticles();

  // Find the highlight article (you need to define a condition for the find method)
  const foundHighlightArticle = processedBlogArticles.find((article) => {
    // Define your condition here, for example, you might want to find the first article
    return true; // Modify this condition according to your logic
  });

  // If no highlight article is found, you might want to handle that case

  return (
    <main className="blog-page">
      <HighlightArticle data={foundHighlightArticle} />
      <Subscribe />
      <FeaturedItems items={processedBlogArticles} />
    </main>
  );
}

export const revalidate = 300;
