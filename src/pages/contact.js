import React from "react";
import { Helmet } from "react-helmet";
import PageLayout from "../components/pageLayout";
import ContactMe from "../components/Section/contactMe";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Mustafa Rahman</title>
      </Helmet>

      <PageLayout>
        <ContactMe />
      </PageLayout>
    </>
  );
}
