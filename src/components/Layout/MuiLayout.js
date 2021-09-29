import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import MuiNavigation from "../Navigation/MuiNavigation";
import MuiNews from "../News/MuiNews";

const MuiLayout = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    (async function () {
      const res = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2021-08-29&sortBy=publishedAt&apiKey=c9e8ee1d319f4b49918565a9e2f146ba"
      );
      const data = await res.json();
      setNews(data.articles);
    })();
  }, []);
  return (
    <>
      <MuiNavigation />

      <Grid container spacing={2}>
        {news.map((nw) => (
          <Grid item xs={6} md={3}>
            <MuiNews news={nw} key={Math.random()} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MuiLayout;
