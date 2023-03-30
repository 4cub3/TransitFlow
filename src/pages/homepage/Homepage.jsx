import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/CargoServices/Services";
import ImageSplash from "../../components/ImageSplash/ImageSplash";
import WhyUs from "../../components/whyUs/WhyUs";
import ServiceList from "../../components/TransportService/ServiceList";
import Testimonial from "../../components/testimonial/Testimonial";
import WhyChoose from "../../components/whychoose/WhyChoose";
import ExpertTeam from "../../components/expertteam/ExpertTeam";
import GetInTouch from "../../components/getintouch/GetInTouch";
import NewsList from "../../components/news/NewsList";
import ImageSplashTwo from "../../components/ImageSplash/ImageSplashTwo";
import Footer from "../../components/footer/Footer";
function Homepage() {
  return (
    <>
      <Header />
      <Hero>
        <Navbar />
      </Hero>
      <Services />
      <ImageSplash />
      <WhyUs />
      <ServiceList />
      <Testimonial />
      <WhyChoose />
      <ExpertTeam />
      <GetInTouch />
      <NewsList />
      <ImageSplashTwo />
      <Footer />
    </>
  );
}

export default Homepage;
