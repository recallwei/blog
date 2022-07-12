import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import { switchColor } from "/src/utils/index";

export default function TextHighlight({ bgColor, children, wrapperClassName }) {
  const bgStyle = { backgroundColor: `${switchColor(bgColor)}` };
  return (
    <span
      className={clsx(styles.highlightArea, wrapperClassName)}
      style={bgStyle}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  );
}
