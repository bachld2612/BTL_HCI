import React, { useEffect, useState } from "react";
import NewsComponent from "../../components/NewsComponent";
import SearchComponent from "../../components/SearchComponent";
import AddressBar from "../../components/AddressBar";
import CreateButton from "../../components/CreateButton";
import LoadMoreButton from "../../components/LoadMoreButton";
import { Container } from "@mui/material";
import banner from "../../assets/images/soha_banner.png";
import { news } from "../../data/News";
import { useNavigate, useSearchParams } from "react-router-dom";
import checkmark from "../../assets/images/checkmark.png";

const NewsPage = () => {
  const [searchParams] = useSearchParams();
  const navigator = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (searchParams.get("createSuccess") === "true") {
      setMessage("Tạo bài viết thành công!");
    } else if (searchParams.get("updateSuccess") === "true") {
      setMessage("Cập nhật bài viết thành công!");
    } else if (searchParams.get("deleteSuccess") === "true") {
      setMessage("Xóa bài viết thành công!");
    } else {
      setMessage("");
    }
  }, [searchParams]);
  const [newsSearch, setNewsSearch] = React.useState("");
  const [visible, setVisible] = useState(6);
  const addresses = ["Trang chủ", "Tin tức"];
  const contentType = "Tin tức";
  const [newsList, setNewsList] = useState(news);
  const handleSearch = (e) => {
    e.preventDefault();
    const filterNews = news.filter((item) =>
      item.title.toLowerCase().includes(newsSearch.toLowerCase())
    );
    setNewsList(filterNews);
  };

  const handleDelete = (id) => { 
    const updatedNewsList = newsList.filter((item) => item.id !== id); 
    const index = news.findIndex((item) => item.id === id);
    if (index !== -1) {
      news.splice(index, 1);
    }
    setNewsList(updatedNewsList);
    setMessage("Xóa bài viết thành công!");
    navigator("/apartments/admin?deleteSuccess=true");
  }
  return (
    <div className="">
      <img src={banner} className="w-screen h-80" alt="" />
      <Container sx={{ marginBottom: "30px" }}>
        <div className="my-5">
          <AddressBar addresses={addresses} />
        </div>

        <div className="text-center my-5">
          <h1 className="font-bold uppercase text-[30px]">Tin tức</h1>
          <h3 className="font-semibold text-gray-600 text-[18px] uppercase">
            Cập nhập tin tức mới nhất từ soha homestay
          </h3>
          {message && (
            <div className="flex flex-row justify-center items-center border w-1/3 border-orange-200 mx-auto my-2 p-2 text-[20px] font-semibold text-green-600">
              <img src={checkmark} className="h-1/8 w-1/8" alt="" />
              <div>{message}</div>
            </div>
          )}
        </div>

        <div className="flex flex-row justify-between my-5">
          <CreateButton contentType={contentType} navigateTo="/news/create" />
          <SearchComponent
            onSubmit={handleSearch}
            placeholder="Tin Tức"
            input={newsSearch}
            setInput={setNewsSearch}
          />
        </div>

        {newsList.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <svg
              className="w-14 h-14 mb-4"
              fill="none"
              viewBox="0 0 48 48"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="6" y="12" width="36" height="24" rx="4" fill="#f3f4f6" />
              <path
                d="M12 24h24M12 30h12"
                stroke="#cbd5e1"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="17" cy="18" r="2" fill="#e5e7eb" />
            </svg>
            <span className="text-lg font-medium">
              Không có bài viết nào phù hợp
            </span>
            <span className="text-sm text-gray-500 mt-1">
              Vui lòng thử lại với từ khóa khác.
            </span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-18 ">
          {newsList.slice(0, visible).map((newsItem) => (
            <NewsComponent
              componentType="tin tức"
              status={newsItem}
              detailNavigate={`/news/${newsItem.id}`}
              updateNavigate={`/news/admin/${newsItem.id}/edit`}
              onDelete={() => handleDelete(newsItem.id)}
            />
          ))}
        </div>

        {visible < newsList.length && (
          <div className="justify-center items-center flex my-10">
            <LoadMoreButton onClick={() => setVisible(visible + 3)} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default NewsPage;
