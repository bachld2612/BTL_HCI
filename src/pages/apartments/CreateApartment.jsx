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
import { apartments } from "../../data/Apartments";
import { data, useNavigate } from "react-router-dom";
import CKEditorCompnent from "../../components/CKEditorCompnent";

const CreateApartment = () => {
  const addresses = ["Trang chủ", "Danh sách phòng", "Thêm phòng"];
  const navigator = useNavigate();
  const [titleMessage, setTitleMessage] = React.useState("");
  const [timeMessage, setTimeMessage] = React.useState("");
  const [priceMessage, setPriceMessage] = React.useState("");
  const [stateMessage, setStateMessage] = React.useState("");
  const [contentMessage, setContentMessage] = React.useState("");
  const [newsItem, setNewsItem] = React.useState({
    id: "",
    title: "",
    content: "",
    description: "",
    time: "",
    price: "",
    state: "",
    addresses: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleMessage("");
    setContentMessage("");
    setTimeMessage("");
    setPriceMessage("");
    setStateMessage("");
    if (!newsItem.title) {
      setTitleMessage("* Tiêu đề không được bỏ trống");
      return;
    }
    if (!newsItem.content) {
      setContentMessage("* Nội dung không được bỏ trống");
      return;
    }
    if (!newsItem.time) {
      setTimeMessage("* Thời gian không được bỏ trống");
      return;
    }
    if (!newsItem.price) {
      setPriceMessage("* Giá không được bỏ trống");
      return;
    }
    if (!newsItem.state) {
      setStateMessage("* Tình trạng không được bỏ trống");
      return;
    }
    newsItem.id = Math.floor(Math.random() * 1000).toString();
    if (newsItem.content.length > 20) {
      newsItem.description = newsItem.content.slice(0, 20);
    } else {
      newsItem.description = newsItem.content;
    }
    apartments.unshift(newsItem);
    navigator("/apartments/?createSuccess=true");
  };

return (
    <div className="">
        <img src={banner} className="w-screen h-80" alt="" />
        <Container sx={{ marginBottom: "30px" }}>
            <div className="my-5">
                <AddressBar addresses={addresses} />
            </div>

            <h1 className="text-center my-5 font-bold uppercase text-[30px]">
                Thêm phòng mới
            </h1>

            <Box component="form" sx={{ width: "100%" }} onSubmit={handleSubmit}>
                <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                        sx={{ fontWeight: "semibold", fontSize: "20px", color: "black" }}
                    >
                        Tiêu đề
                    </FormLabel>
                    {titleMessage && <div className="text-red-500">{titleMessage}</div>}
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
                </FormControl>
                <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                        sx={{
                            fontWeight: "semibold",
                            fontSize: "20px",
                            color: "black",
                            marginTop: "20px",
                        }}
                    >
                        Mô tả
                    </FormLabel>
                    {contentMessage && (
                        <div className="text-red-500">{contentMessage}</div>
                    )}
                    <Box sx={{ height: "300px", marginBottom: "20px" }}>
                        <CKEditorCompnent
                            placeholder="Tiêu đề bài viết"
                            value={newsItem.content}
                            onChange={(val) => setNewsItem({ ...newsItem, content: val })}
                        />
                    </Box>
                </FormControl>

                <FormControl sx={{ width: "100%" }}>
                    <FormLabel
                        sx={{ fontWeight: "semibold", fontSize: "20px", color: "black" }}
                    >
                        Thời gian
                    </FormLabel>
                    {timeMessage && <div className="text-red-500">{timeMessage}</div>}
                    <TextField
                        placeholder="Nhập thời gian"
                        size="small"
                        sx={{}}
                        fullWidth
                        value={newsItem.time}
                        onChange={(e) =>
                            setNewsItem({ ...newsItem, time: e.target.value })
                        }
                    />
                </FormControl>

                <FormControl sx={{ width: "100%", marginTop: "20px" }}>
                    <FormLabel
                        sx={{ fontWeight: "semibold", fontSize: "20px", color: "black" }}
                    >
                        Giá
                    </FormLabel>
                    {priceMessage && <div className="text-red-500">{priceMessage}</div>}
                    <TextField
                        placeholder="Nhập giá"
                        size="small"
                        sx={{}}
                        fullWidth
                        value={newsItem.price}
                        onChange={(e) =>
                            setNewsItem({ ...newsItem, price: e.target.value })
                        }
                    />
                </FormControl>

                <FormControl sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}>
                    <FormLabel
                        sx={{ fontWeight: "semibold", fontSize: "20px", color: "black" }}
                    >
                        Tình trạng
                    </FormLabel>
                    {stateMessage && <div className="text-red-500">{stateMessage}</div>}
                    <TextField
                        placeholder="Nhập tình trạng"
                        size="small"
                        sx={{}}
                        fullWidth
                        value={newsItem.state}
                        onChange={(e) =>
                            setNewsItem({ ...newsItem, state: e.target.value })
                        }
                    />
                </FormControl>

                <div className="flex flex-row justify-end ">
                    <BackButton navigateTo="/apartments" />
                    <AcceptButton content="Thêm phòng" type="submit" />
                </div>
            </Box>
        </Container>
    </div>
);
};

export default CreateApartment;
