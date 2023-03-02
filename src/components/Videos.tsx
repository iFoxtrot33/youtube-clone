import React from "react";
import { VideoCard, ChannelCard } from "./";
import { Stack, Box, Typography } from "@mui/material";
import { VideoType } from "../utils/types";
import { ResponsiveStyleValue } from "@mui/system";

interface VideosProps {
  videos: VideoType[];
  direction?:
    | ResponsiveStyleValue<"row" | "row-reverse" | "column" | "column-reverse">
    | undefined;
}

const Videos: React.FC<VideosProps> = ({ videos = [], direction }) => {
  if (!videos || videos.length === 0)
    return <Typography>Loading...</Typography>;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} marginTop={"auto"} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
