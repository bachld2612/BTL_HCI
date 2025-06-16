import React, { useState } from "react";
import BlogComponent from "../../components/BlogComponent";
import { blogs } from "../../data/Blog";
import AddressBar from "../../components/AddressBar";
import {
  Button,
  Container,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
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

  const [currentBlog, setCurrentBlog] = useState(filteredBlogs.slice(0, 5));
  const [page, setPage] = useState(1);
  const numberOfBlog = 5;
  const firstBlogInPage = (page - 1) * numberOfBlog;
  const lastBlogInPage = firstBlogInPage + numberOfBlog;
  const paginatedBlogs = filteredBlogs.slice(firstBlogInPage, lastBlogInPage);
  const totalPages = Math.ceil(filteredBlogs.length / numberOfBlog);
  const handlePageChange = (value) => {
    setPage(value);
    setCurrentBlog(filteredBlogs.slice(firstBlogInPage, lastBlogInPage));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Container sx={{ marginTop: "20px", marginBottom: "20px" }}>
      <AddressBar addresses={addresses} />
      <div className=" flex flex-row justify-between items-center">
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
          <div className="flex flex-row items-center ">
            Sắp xếp theo:
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="outlined"
              sx={{
                color: "black",
                border: "none",
                textTransform: "none",
                textDecoration: "underline",
                ":hover": {
                  backgroundColor: "transparent",
                  textTransform: "none",
                  textDecoration: "underline",
                },
              }}
            >
              Theo lượt thích
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              sx={{
                "& .MuiList-root": {
                  padding: "8px",
                },
              }}
            >
              <MenuItem
                sx={{
                  color: "gray",
                  border: "1px solid orange",
                  borderRadius: "4px",
                  fontSize: "14px",
                  minWidth: "150px",
                  marginY: "4px",
                }}
                onClick={handleClose}
              >
                Theo thời gian đăng
              </MenuItem>
              <MenuItem
                sx={{
                  color: "gray",
                  border: "1px solid orange",
                  borderRadius: "4px",
                  fontSize: "14px",
                  minWidth: "150px",
                }}
                onClick={handleClose}
              >
                Theo tiêu đề A-Z
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-4 my-5">
          {paginatedBlogs.map((blog, index) => (
            <BlogComponent key={index} blog={blog} />
          ))}
          <Pagination
            count={totalPages}
            sx={{
              "& .Mui-selected": {
                backgroundColor: "orange !important",
                color: "white !important",
              },
            }}
            onChange={(_, value) => handlePageChange(value)}
            renderItem={(item) => <PaginationItem {...item} />}
          />
          <div className="">
            Kết quả đang trả về từ {firstBlogInPage + 1} đến {lastBlogInPage}{" "}
            của {blogs.length}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BlogPage;
