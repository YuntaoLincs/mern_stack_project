import { type CSSProperties } from "react";

import "./Avatar.css";

type AvatarType = {
  image: string;
  className?: string;
  style?: CSSProperties;
  alt?: string;
  width?: string;
};

const Avatar = (props: AvatarType) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
