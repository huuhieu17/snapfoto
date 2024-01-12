import { memo } from "react";
import WritePost from "./components/WritePost";
import Posts from "./components/Posts";
import styles from "./styles/Feed.module.scss";
import { Box } from "@mui/material";
const Feed = () => {
  return (
    <div className="mt-5 w-full h-full flex gap-x-5">
      <div className={`lg:w-2/3 w-full h-full  ${styles.posts}`}>
        <div className="w-full rounded">
          <WritePost />
          <Posts />
        </div>
      </div>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
        }}
        className="lg:block hidden w-1/3 sticky h-full border rounded"
      ></Box>
    </div>
  );
};

export default memo(Feed);
