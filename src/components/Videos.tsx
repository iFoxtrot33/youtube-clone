import React from "react";

import { VideoCard, ChannelCard } from "./";

import { Stack, Box } from "@mui/material";
import { VideoType } from "../utils/types";

interface VideosProps {
  videos: VideoType[];
}

const Videos: React.FC<VideosProps> = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
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
