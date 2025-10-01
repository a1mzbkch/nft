"use client";

import React from "react";
import Welcome from "@/components/pages/welcome/Welcome";
import Popular from "./popular/Popular";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import Info from "./info/Info";
import Images from "./image/Images";
import Logos from "@/components/pages/logos/Logos";
import Trending from "./trending/Trending";
import Contact from "./contact/Contact";
import Social from "./social/Social";

const MainPage = () => {
  return (
    <Provider store={store}>
      <section>
        <Welcome />
        <Popular />
        <Info />
        <Images />
        <Logos />
        <Trending />
        <Contact />
        <Social />
      </section>
    </Provider>
  );
};

export default MainPage;
