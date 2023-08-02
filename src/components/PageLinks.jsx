import React from "react";
import { pageLinks } from "../data";

function PageLinks({ parentClass, itemClass }) {
  return (
    <ul className={parentClass}>
      {pageLinks.map((links) => {
        const { id, text, href } = links;
        return (
          <li key={id}>
            <a href={href} className={itemClass}>
              {text}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default PageLinks;
