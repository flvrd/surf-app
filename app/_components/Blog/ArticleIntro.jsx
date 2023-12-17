import { formatDate } from "@/utils/strapi.utils";

formatDate;
export const ArticleIntro = ({ article }) => {
  console.log(article);
  return (
    <div className="article-intro">
      <div className="article-intro__background">
        <img src={article.featuredImage} />
      </div>
      <h3 className="article-intro__headline">{article.headline}</h3>
      <p className="copy-small bold">{formatDate(article.publishedAt)}</p>
      <p className="copy-small">{article.author}</p>
    </div>
  );
};

export default ArticleIntro;
// headline: 'environmental awareness in surfing: protecting our oceans and beaches',
//   author: 'ryan',
//   publishedAt: '2023-12-15T03:11:44.743Z',
//   featuredImage: 'http://127.0.0.1:1337/uploads/Rectangle_12_7e76de5db5.png',
