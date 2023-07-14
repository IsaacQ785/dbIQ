import { Grid } from "@mui/material";
import React, {useEffect, useRef} from "react";
import AnswerCard from "./components/AnswerCard";
import UserQuestionCard from "./components/UserQuestionCard";

function ChatBox({ list }: any) {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [list])
  return (
    <>
      <Grid
        sx={{
          height: "86vh",
          marginBottom: "12px",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ maxHeight: "100%", maxWidth: "100%", marginBottom: "8px" }}
        >
          <div
            ref={scrollContainerRef}
            style={{
              width: "100%",
              marginLeft: "8px",
              marginRight: "8px",
              overflowY: "scroll",
              flexDirection: "column-reverse",
              scrollBehavior: "smooth",

            }}
          >
            {list &&
              list.map((item: any, index: any) => {
                {
                  if (index % 2 != 0) {
                    return <AnswerCard text={item} />
                  } else {
                    return <UserQuestionCard text={item} />;
                  }
                }
              })}
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ChatBox;
