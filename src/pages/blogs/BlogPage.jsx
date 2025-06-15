import React, { useState } from "react";
import BlogComponent from "../../components/BlogComponent";
import { blogs } from "../../data/Blog";
import AddressBar from "../../components/AddressBar";
import { Container } from "@mui/material";
import SearchComponent from "../../components/SearchComponent";
import AcceptButton from "../../components/AcceptButton";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const navigator = useNavigate();
  const addresses = ["Trang chủ", "Blog"];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
  };

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <AddressBar addresses={addresses} />
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-[40px] font-bold">Blog</h1>
        <SearchComponent
          placeholder="Tìm kiếm"
          input={searchInput}
          setInput={setSearchInput}
          onSubmit={handleSearch}
        />
      </div>
      <div className="-ml-2">
        <AcceptButton
          content="Tạo blog"
          onClick={() => navigator("/blogs/create")}
        />
      </div>

      <div className="flex flex-col w-3/4 justify-center self-center mx-auto">
        <div className="flex justify-between items-center my-5">
          <div>{filteredBlogs.length} results</div>
          <div>
            Sắp xếp theo:
            <u className="ml-2">Theo thời gian đăng</u>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4 my-5">
          {filteredBlogs.map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
