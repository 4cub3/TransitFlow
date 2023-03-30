import React from "react";
import Container from "../../shared/layout/container/Container";
import NewsItem from "./NewsItem";
import Label from "../../shared/label/Label";
import classes from './newslist.module.scss';
import Button from "../../shared/buttons/Button";
const NewsData = [
  {
    id: 0,
    date: new Date("04/12/2022"),
    heading: "Inland freight a worthy solution for your business",
    title:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work. ",
    list: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
    image: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1231&q=80'
  },
  {
    id: 1,
    date: new Date("06/10/2022"),
    heading: "How technology can help redraw the supply chain map",
    title:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work.  ",
    list: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],
    image: 'https://plus.unsplash.com/premium_photo-1661873184237-a06debd40731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80'
  },
  {
    id: 2,
    date: new Date("05/24/2023"),
    heading: "Five things you should have ready for your broker",
    title:
      "We are dedicated in creating added value for our customers by implementing modern technology in our work.  ",
    list: [
      "Urgent transport solutions",
      "Reliable & experienced staffs",
      "Urgent transport solutions",
      "Reliable & experienced staffs",
    ],

    image: 'https://plus.unsplash.com/premium_photo-1661873184237-a06debd40731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80'
  },
];
function NewsList() {
    const listItem = NewsData.map(data =>(
        <NewsItem key={data.id}
            date={data.date}
            heading={data.heading}
            title={data.title}
            list={data.list}
            image={data.image}
        />
    ))
  return (
    <Container className={classes.newsList}>
        <Label>Our blog</Label>
        <h2>Our Latest News</h2>
      {listItem}
      <Button className={classes.secondary}>More blog</Button>
    </Container>
  );
}

export default NewsList;
