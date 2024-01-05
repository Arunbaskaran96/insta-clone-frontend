import XAvatar from "../Avatar/Avatar";
import ReactSimplyCarousel from "react-simply-carousel";
import classes from "./Scroller.module.css";
import { useState } from "react";

type key = "name" | "avatar";
type value = string | React.ReactNode;
type objectStructure = Array<Record<key, value>>;

const obj: objectStructure = [
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
  {
    name: "Arun",
    avatar: (
      <XAvatar
        src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
        radius="def"
      />
    ),
  },
];

function Scroller() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <ReactSimplyCarousel
      activeSlideIndex={activeSlideIndex}
      onRequestChange={setActiveSlideIndex}
      itemsToShow={1}
      itemsToScroll={1}
      forwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: {
          alignSelf: "center",
          background: "black",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
        },
        children: <span>{`>`}</span>,
      }}
      backwardBtnProps={{
        //here you can also pass className, or any other button element attributes
        style: {
          alignSelf: "center",
          background: "black",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "20px",
          height: 30,
          lineHeight: 1,
          textAlign: "center",
          width: 30,
        },
        children: <span>{`<`}</span>,
      }}
      responsiveProps={[
        {
          itemsToShow: 2,
          itemsToScroll: 2,
          minWidth: 768,
        },
      ]}
      speed={400}
      easing="linear"
    >
      <div className={classes.container}>
        <div className={classes.storyContainer}>
          {obj.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {item.avatar}
                <span className={classes.profileName}>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </ReactSimplyCarousel>
  );
}

export default Scroller;
