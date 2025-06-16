import React from "react";
import { useParams } from "react-router-dom";
import { news } from "../../data/News";
import AddressBar from "../../components/AddressBar";
import { Container } from "@mui/material";
import banner from "../../assets/images/soha_banner.png";
import BackButton from "../../components/BackButton";
import newsImg from "../../assets/images/news_img.png";
const DetailNewsPage = () => {
  const { id } = useParams();
  const currentNews = news.find((news) => news.id == id);
  const addresses = [
    "Trang chủ",
    "Tin tức",
    currentNews
      ? currentNews.title.split(" ").length > 4
        ? currentNews.title.split(" ").slice(0, 4).join(" ") + "..."
        : currentNews.title
      : "Chi tiết tin tức",
  ];
  return (
    <div>
      <img src={banner} className="w-screen h-80" alt="" />
      <Container sx={{ marginBottom: "30px" }}>
        <div className="my-5">
          <AddressBar addresses={addresses} />
        </div>

        <h1 className="text-center my-5 font-bold uppercase text-[30px]">
          {currentNews ? currentNews.title : "Chi tiết tin tức"}
        </h1>

        <div className="flex justify-center items-center">
          <img className="w-[400px] " src={newsImg} alt="" />
        </div>

        <div className="flex justify-center">
          <div className="w-full bg-white rounded-xl p-6 text-justify">
            {currentNews.content}
          </div>
        </div>

        <div className="flex justify-end mx-5">
          <BackButton navigateTo={`/news`} />
        </div>
      </Container>
    </div>
  );
};

export default DetailNewsPage;
