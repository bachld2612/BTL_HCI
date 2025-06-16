import React from "react";
import { useParams } from "react-router-dom";
import { apartments } from "../../data/Apartments";
import AddressBar from "../../components/AddressBar";
import { Container } from "@mui/material";
import banner from "../../assets/images/soha_banner.png";
import room from "../../assets/images/room.png";
import BackButton from "../../components/BackButton";
const DetailApartment = () => {
  const { id } = useParams();
  const currentNews = apartments.find((news) => news.id == id);
  const addresses = [
    "Trang chủ",
    "Danh sách phòng",
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

        <div className="flex flex-col justify-center items-center">
          <div className="w-full bg-white rounded-xl my-4 text-justify">
            <b>Mô tả: </b>
            {currentNews.content}
          </div>
          <img src={room} className="max-w-1/2" alt="" />
          <div className="w-full bg-white rounded-xl my-4 text-justify">
            <b>Thời gian: </b>
            {currentNews.time}
          </div>
          <div className="w-full bg-white rounded-xl my-4 text-justify">
            <b>Giá: </b>
            {currentNews.price}
          </div>
          <div className="font-bold text-green-700 w-full bg-white rounded-xl my-4 text-justify"><b className="text-black">Tình trạng: </b>{currentNews.state}</div>
        </div>

        <div className="flex justify-end mx-5">
          <BackButton navigateTo={`/apartments`} />
        </div>
      </Container>
    </div>
  );
};

export default DetailApartment;
