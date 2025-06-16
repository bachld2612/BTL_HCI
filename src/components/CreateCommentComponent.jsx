import { Box, Button, FormControl, FormLabel, TextField } from "@mui/material";
import React from "react";
import CreateButton from "./CreateButton";
import { esES } from "@mui/material/locale";

export default function CreateCommentComponent({
  comment,
  setComment,
  onSubmit,
}) {
  return (
    <Box
      onSubmit={onSubmit}
      component="form"
      fullWidth
      className="flex flex-col w-full items-start justify-center gap-2"
    >
      <FormControl fullWidth className="flex flex-col gap-1">
        <FormLabel htmlFor="title">Tiêu đề</FormLabel>
        <TextField
          onChange={(e) => setComment({ ...comment, title: e.target.value })}
          value={comment?.title}
          id="title"
          fullWidth
          size="small"
        />
      </FormControl>
      <FormControl fullWidth className="flex flex-col gap-1">
        <FormLabel htmlFor="content">Nội dung</FormLabel>
        <TextField
          id="content"
          multiline
          rows={3}
          value={comment?.content}
          onChange={(e) => setComment({ ...comment, content: e.target.value })}
          variant="outlined"
          fullWidth
        ></TextField>
      </FormControl>
      <Button
        variant="contained"
        className="!bg-orange-500 hover:bg-orange-300 "
        sx={{ color: "white", borderRadius: "10px" }}
      >
        Tạo comment
      </Button>
    </Box>
  );
}
