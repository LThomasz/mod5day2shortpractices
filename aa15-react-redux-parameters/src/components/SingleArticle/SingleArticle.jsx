import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './SingleArticle.css';

const SingleArticle = () => {
  
  const { id } = useParams()
  const articles = useSelector((state) => state.articleState.entries)
  const article = articles.find(article => article.id == id)
  // console.log(article)

  if (!article) return null;

  return (
    <div className='singleArticle'>
      <h1>{article.title}</h1>
      <img
        src={article.imageUrl}
        alt=''
      />
      <p>
        {article.body}
      </p>
    </div>
  );
};

export default SingleArticle;
