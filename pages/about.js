import React from "react";
import Header from "../components/header";
import Head from "next/head";
import Footer from "../components/footer";

export default function about() {
  return (
    <div>
      <Head>
        <title>About | Domain Square +</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/d2s-logo.png" />
      </Head>
      <Header />
      <div className="about-content" id="about">
        <h1 className="about md:text-5xl text-3xl font-semibold title-font text-left text-gray-100 md:my-8 my-4">
          Domain Square +
        </h1>
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200">
          DomainSquare+ is the gaming society of Delhi Public School R. K. Puram
          and is the first of its kind in all of India. Our motto is ‘Redefining
          Moves’ which in essence means that we aim to elevate gaming to the
          ranks of other art forms.
        </p>
        <br />
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200">
          Founded in 2015 by the Head of Department, Computer Science, Mr.
          Mukesh Kumar and 4 talented and enthusiastic gamers, the club goes
          hand-in-hand with the extremely accomplished Exun Clan and along with
          them, aims to achieve new heights.
        </p>
        <br />
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200">
          Now a 25+ member organisation it is divided into two departments
          namely, the Competitive Division and the Review Division. The
          Competitive division is led by a group of competent gamers who aim to
          improve gaming as a whole by competing on an institutional level and
          conquering leaderboards around the globe. The Review division,
          publishes reviews, makes original content, and spreads information
          related to gaming in our school and the city through our blog.
        </p>
      </div>
      <div className="about-content" id="about">
        <h1 className="about md:text-5xl text-3xl font-semibold title-font text-left text-gray-100 md:my-4 my-4">
          Delhi Public School R K Puram
        </h1>
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200">
          Delhi Public School, RK Puram is a highly renowned institution that
          has, over the years, consistently been placed as one of the top
          schools in the country. In 2020, Education World India rated DPS RK
          Puram as the number one school nationally in the day/boarding school
          category, adding yet another credential to its historically impressive
          record.
        </p>
        <br />
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200">
          With its universally acknowledged academic rigor, DPS RK Puram has
          been an aspirational destination for ambitious students to benchmark
          themselves against & joust with the brightest student body in the
          country. The school has produced many notable alumni, including former
          RBI governor Raghuram Rajan, Snapdeal founders Kunal Bahl and Rohit
          Bansal, among countless others.
        </p>
        <br />
        <p className="sm:text-xl text-md font-small sm:text-left text-justify text-gray-200 mb-8">
          Your association with Delhi Public School, R.K. Puram will lead to an
          increased brand-product awareness among schools and the vast student
          community at large.
        </p>
      </div>
      <Footer />
    </div>
  );
}
