import { type ReactNode, type CSSProperties } from "react";

import "./Card.css";
type CardType = {
  className?: string;
  cardStyle?: CSSProperties;
  children: ReactNode;
};

const Card = ({ className, children, cardStyle }: CardType) => {
  return (
    <div className={`card ${className}`} style={cardStyle}>
      {children}
    </div>
  );
};

export default Card;
