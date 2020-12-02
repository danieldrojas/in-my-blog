import React from 'react';
import ArticlesList from '../components/ArticlesList'
import articlesContent from './article-content';


const ArticlesListPage = () => (
    <>
        <h1>Articles</h1>
        <ArticlesList articles={articlesContent} />
    </>
);

export default ArticlesListPage;