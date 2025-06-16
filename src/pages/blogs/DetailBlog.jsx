import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { blogs } from "../../data/Blog";
import CommentComponent from "../../components/CommentComponent";
import DetailBlogComponent from "../../components/DetailBlogComponent";
import CreateCommentComponent from "../../components/CreateCommentComponent";
import ExploreMoreComponent from "../../components/ExploreMoreComponent";
import { Container } from "@mui/material";
import BackButton from "../../components/BackButton";
import { comments } from "../../data/Comment";
import LoadMoreButton from "../../components/LoadMoreButton";

export default function DetailBlog() {
  const navigate = useNavigate();
  const [comment, setComment] = React.useState({
    id: "",
    created_by: "",
    title: "",
    content: "",
    like: 0,
    time: "",
  });
  const { id } = useParams();
  console.log("id", id);
  const [blog, setBlog] = React.useState(blogs.find((blog) => blog.id == id));
  useEffect(() => {
    setBlog(blogs.find((blog) => blog.id == id));
    window.scrollTo(0, 0);
  }, [id]);

  const newExploreBlogs = blogs.filter((blog) => blog.id != id);
  const exploreBlogs = newExploreBlogs.slice(0, 4);

  const [visible, setVisible] = React.useState(3);
  const [visibleComments, setVisibleComments] = React.useState(
    comments.slice(0, visible)
  );
  const handleLoadMoreComments = () => {
    const newVisible = visible + 3;
    setVisible(newVisible);
    setVisibleComments(comments.slice(0, newVisible));
  };
  const onSubmit = () => {};
  return (
    <Container className="my-10">
      <div className="flex flex-col gap-3 items-end">
        <DetailBlogComponent blog={blog} />
        <div>
          <BackButton navigateTo="/blogs" />
        </div>
      </div>
      <div className="flex mb-5 flex-col gap-3">
        {visibleComments.map((comment) => (
          <div className="my-3">
            <CommentComponent comment={comment} />
          </div>
        ))}
        {visibleComments.length < comments.length && (
          <LoadMoreButton onClick={() => handleLoadMoreComments()} />
        )}
      </div>
      <CreateCommentComponent
        comment={comment}
        setComment={setComment}
        onSubmit={() => onSubmit}
      />

      <div className="my-5 grid grid-cols-4 gap-3 grid-rows-1">
        {exploreBlogs.map((blog) => (
          <ExploreMoreComponent
            blog={blog}
            onClick={() => {
              navigate(`/blogs/${blog.id}`);
            }}
          />
        ))}
      </div>
    </Container>
  );
}
