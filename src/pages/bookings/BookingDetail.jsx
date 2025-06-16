import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import room from "../../assets/images/room.png";

import { apartments } from "../../data/Apartments";
import banner from "../../assets/images/soha_banner.png";
import { Button, Container } from "@mui/material";
import AddressBar from "../../components/AddressBar";
import roomDetail from "../../assets/images/room_detail.png";
import BackButton from "../../components/BackButton";
import NewsComponent from "../../components/NewsComponent";
import LoadMoreButton from "../../components/LoadMoreButton";

export default function BookingDetail() {
  const { id } = useParams();
  const addresses = ["Trang chủ", "Thuê phòng"];
  const [booking, setBooking] = React.useState(
    apartments.find((apartment) => apartment.id == id)
  );
  React.useEffect(() => {
    setBooking(apartments.find((apartment) => apartment.id == id));
    window.scrollTo(0, 0);
  }, [id]);
  const [visible, setVisible] = useState(6);
  const [apartmentsList, setApartmentsList] = useState(
    apartments.filter((apartment) => apartment.id !== id)
  );

  return (
    <div>
      <img src={banner} className="w-screen h-[500px]" alt="" />
      <Container className="m-5">
        <div className="m-5">
          <AddressBar addresses={addresses} />
        </div>

        <div className="flex gap-3 items-start justify-center">
          <div className="w-1/3">
            <img src={roomDetail} className="w-full" alt="" />
          </div>
          <div className="flex flex-col gap-3 w-1/3">
            <div className="">Thông tin gói</div>
            <div className="">Địa điểm: {booking.address}</div>
            <div className="">Giá: {booking.price}</div>
            <div className="">Thời gian: 3 ngày - 7 ngày</div>
            <div className="">Dịch vụ: Ăn sáng, trưa, tối, massage,...</div>
            <div className="font-bold">Số người</div>
            <input
              className="border border-gray-300 w-1/3 rounded-[8px] p-2 "
              disabled
              placeholder="3 người"
            />
            <div className="font-bold">Thời gian</div>
            <input
              className="border border-gray-300 w-2/3 rounded-[8px] p-2 "
              disabled
              placeholder="Từ 01/01/2025 đến 04/01/2025"
            />
          </div>
          <div className="flex items-start flex-col gap-2.5">
            <div className="font-bold text-3xl">Trạng thái</div>
            <div className="text-green-700 mb-20 font-semibold text-xl">
              {booking.state}
            </div>

            <Button
              variant="contained"
              className="!bg-orange-500 text-white !text-md !font-semibold !p-3 w-5/6 hover:!bg-orange-300"
            >
              Đặt phòng
            </Button>
            <Link
              to="/bookings"
              className="bg-blue-900 text-[20px] font-semibold w-5/6 text-center p-3 hover:bg-blue-600  py-2 px-4 text-white  rounded-[8px] h-[50px]"
            >
              Trở về
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-20 gap-5">
          <h1 className="font-bold uppercase text-[30px]">Danh Sách Phòng</h1>
          <div className="grid grid-cols-3 grid-rows-2 gap-3">
            {apartmentsList.slice(0, visible).map((apartment) => (
              <NewsComponent
                img={room}
                componentType="phòng"
                status={apartment}
                detailNavigate={`/bookings/${apartment.id}`}
                updateNavigate={`/apartments/${apartment.id}/edit`}
                onDelete={() => handleDelete(apartment.id)}
                isAdmin={false}
              />
            ))}
          </div>
          {visible < apartmentsList.length && (
            <div className="flex justify-center items-center">
              <LoadMoreButton onClick={() => setVisible(visible + 3)} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
