import classNames from "classnames";
import classes from "./Avatar.module.css";

interface AvatarProps {
  src: string;
  radius: "def" | "sm" | "xs" | "lg";
}

function XAvatar(props: AvatarProps) {
  const { src, radius } = props;
  return (
    <div className={classes.container}>
      <img
        src={src}
        alt="profile pic"
        className={classNames(
          radius === "def" && classes.def,
          radius === "sm" && classes.sm,
          radius === "xs" && classes.xs,
          radius === "lg" && classes.lg
        )}
      />
    </div>
  );
}

export default XAvatar;
