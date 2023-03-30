import React from 'react'
import Card from '../../shared/layout/card/Card';
import NewsImage from './NewsImage';
import NewsCalender from './NewsCalender';
import NewsDetails from './NewsDetails';
import classes from './newsitem.module.scss';
function NewsItem({image, title,heading,date,list}) {
  return (
    <Card className={classes.newsItem}>
        <NewsImage image={image} />
        <NewsCalender date={date} />
        <NewsDetails heading={heading} title={title} list={list} />
    </Card>
  )
}

export default NewsItem