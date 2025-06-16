import React, { useEffect, useState } from "react";
import NewsComponent from "../../components/NewsComponent";
import AddressBar from "../../components/AddressBar";
import CreateButton from "../../components/CreateButton";
import LoadMoreButton from "../../components/LoadMoreButton";
import { Container } from "@mui/material";
import banner from "../../assets/images/soha_banner.png";
import { apartments } from "../../data/Apartments";
import { useNavigate, useSearchParams } from "react-router-dom";
import checkmark from "../../assets/images/checkmark.png";
import FilterComponent from "../../components/FilterComponent";
import room from "../../assets/images/room.png";

const BookingPages = () => {
  const [searchParams] = useSearchParams();
  const [filterOn, setFilterOn] = useState(false);
  const handleFilterToggle = () => {
    setFilterOn(!filterOn);
    console.log(filterOn);
  };
  const navigator = useNavigate();
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (searchParams.get("createSuccess") === "true") {
      setMessage("Tạo phòng thành công!");
    } else if (searchParams.get("updateSuccess") === "true") {
      setMessage("Cập nhật phòng thành công!");
    } else if (searchParams.get("deleteSuccess") === "true") {
      setMessage("Xóa phòng thành công!");
    } else {
      setMessage("");
    }
  }, [searchParams]);
  const [newsSearch, setNewsSearch] = React.useState("");
  const [visible, setVisible] = useState(6);
  const addresses = ["Trang chủ", "Danh sách phòng"];
  const contentType = "phòng";
  const [apartmentsList, setApartmentsList] = useState(apartments);

  const handleDelete = (id) => {
    const updatedApartmentsList = apartmentsList.filter(
      (item) => item.id !== id
    );
    const index = apartments.findIndex((item) => item.id === id);
    if (index !== -1) {
      apartments.splice(index, 1);
    }
    setApartmentsList(updatedApartmentsList);
    setMessage("Xóa bài viết thành công!");
    navigator("/apartments?deleteSuccess=true");
  };
  return (
    <div className="">
      <img src={banner} className="w-screen h-80" alt="" />
      <Container sx={{ marginBottom: "30px" }}>
        <div className="my-5">
          <AddressBar addresses={addresses} />
        </div>

        <div className="text-center my-5">
          <h1 className="font-bold uppercase text-[30px]">Danh Sách Phòng</h1>
          <h3 className="font-semibold text-gray-600 text-[18px] uppercase">
            Danh sách các phòng đã được thêm
          </h3>
          {message && (
            <div className="flex flex-row justify-center items-center border w-1/3 border-orange-200 mx-auto my-2 p-2 text-[20px] font-semibold text-green-600">
              <img src={checkmark} className="h-1/8 w-1/8" alt="" />
              <div>{message}</div>
            </div>
          )}
        </div>

        {!filterOn && (
          <div className="flex flex-row justify-between my-5">
            <div></div>
            <FilterComponent onClick={handleFilterToggle} />
          </div>
        )}

        {filterOn && (
          <div className="relative flex flex-col justify-center items-center w-full">
            {/* Nút chevron-down ở góc phải trên */}
            <button
              className="absolute top-2 right-6 flex items-center gap-1 bg-white rounded-full px-2 py-1 shadow hover:bg-gray-100 transition"
              onClick={handleFilterToggle}
            >
              <svg
                className="w-5 h-5 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Khối filter */}
            <div className="w-full grid grid-cols-4 gap-6 px-6 py-4 bg-white rounded-xl shadow mt-4">
              {/* Loại phòng */}
              <div>
                <div className="font-bold mb-2">Loại phòng</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Phòng đơn
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Phòng đôi
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Phòng tập thể
                  </label>
                </div>
              </div>

              {/* Tình trạng phòng */}
              <div>
                <div className="font-bold mb-2">Tình trạng phòng</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Còn trống
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Đã đặt
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Sắp trả
                  </label>
                </div>
              </div>

              {/* Thời gian */}
              <div>
                <div className="font-bold mb-2">Thời gian</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />1 ngày
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />2 - 7
                    ngày
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Trên 7 ngày
                  </label>
                </div>
              </div>

              {/* Giá cả */}
              <div>
                <div className="font-bold mb-2">Giá cả</div>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Dưới 500 000 VNĐ
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    500 000 - 1 000 000 VNĐ
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    Trên 1 000 000 VNĐ
                  </label>
                </div>
              </div>
            </div>
            <div className="my-10">
              <LoadMoreButton content="Tìm kiếm" />
            </div>
          </div>
        )}

        <div className="grid grid-cols-3 gap-18 ">
          {apartmentsList.slice(0, visible).map((newsItem) => (
            <NewsComponent
              img={room}
              componentType="phòng"
              status={newsItem}
              detailNavigate={`/bookings/${newsItem.id}`}
              updateNavigate={`/apartments/${newsItem.id}/edit`}
              onDelete={() => handleDelete(newsItem.id)}
              isAdmin={false}
            />
          ))}
        </div>

        {visible < apartmentsList.length && (
          <div className="justify-center items-center flex my-10">
            <LoadMoreButton onClick={() => setVisible(visible + 3)} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default BookingPages;
