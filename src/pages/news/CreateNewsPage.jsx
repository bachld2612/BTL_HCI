import React from "react";
import banner from "../../assets/images/soha_banner.png";
import {
  Container,
  Box,
  FormLabel,
  FormControl,
  TextField,
} from "@mui/material";
import AddressBar from "../../components/AddressBar";
import BackButton from "../../components/BackButton";
import AcceptButton from "../../components/AcceptButton";
import { news } from "../../data/News";
import { data, useNavigate } from "react-router-dom";
import CKEditorCompnent from "../../components/CKEditorCompnent";

const CreateNewsPage = () => {
  const addresses = ["Trang chủ", "Tin tức", "Tạo tin tức"];
  const navigator = useNavigate();
  const [titleMessage, setTitleMessage] = React.useState("");
  const [contentMessage, setContentMessage] = React.useState("");
  const [newsItem, setNewsItem] = React.useState({
    id: "",
    title: "",
    content: "",
    description: "",
    view: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newsItem.title) {
      setTitleMessage("* Tiêu đề không được bỏ trống");
      return;
    }
    if (!newsItem.content) {
      setContentMessage("* Nội dung không được bỏ trống");
      return;
    }
    newsItem.id = Math.floor(Math.random() * 1000).toString();
    if (newsItem.content.length > 20) {
      newsItem.description = newsItem.content.slice(0, 20);
    } else {
      newsItem.description = newsItem.content;
    }
    newsItem.view = 0;
    news.unshift(newsItem);
    navigator("/news/admin?createSuccess=true");
  };

  return (
    <div className="">
      <img src={banner} className="w-screen h-80" alt="" />
      <Container sx={{ marginBottom: "30px" }}>
        <div className="my-5">
          <AddressBar addresses={addresses} />
        </div>

        <h1 className="text-center my-5 font-bold uppercase text-[30px]">
          Tạo tin tức
        </h1>

        <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
          <FormControl sx={{ width: "100%" }}>
            {titleMessage && <div className="text-red-500">{titleMessage}</div>}
            <FormLabel
              sx={{ fontWeight: "semibold", fontSize: "20px", color: "black" }}
            >
              Tiêu đề
            </FormLabel>
            <TextField
              placeholder="Tiêu đề tin tức"
              size="small"
              sx={{}}
              fullWidth
              value={newsItem.title}
              onChange={(e) =>
                setNewsItem({ ...newsItem, title: e.target.value })
              }
            />
            <style>
              {`
                .ck-editor__editable {
                  height: 250px;
                }
              `}
            </style>
            <Box
              sx={{ marginTop: "20px", height: "300px", marginBottom: "20px" }}
            >
              {contentMessage && (
                <div className="text-red-500">{contentMessage}</div>
              )}
              <CKEditorCompnent
                placeholder="Tiêu đề bài viết"
                value={newsItem.content}
                onChange={(val) => setNewsItem({ ...newsItem, content: val })}
              />
            </Box>
          </FormControl>
          <div className="flex flex-row justify-end ">
            <BackButton navigateTo="/news/admin" />
            <AcceptButton content="Đăng" type="submit" />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default CreateNewsPage;
