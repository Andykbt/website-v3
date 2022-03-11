import { Block } from "../../constants/types";

const defaults = { nonTextBehaviour: "remove" };

export const blocksToText = (blocks: Block[], opts = {}) => {
  const options = Object.assign({}, defaults, opts);
  return blocks.map(block => {
    if (!block.children) {
      return options.nonTextBehaviour === "remove" ? "" : `[${block._type} block]`;
    }

    return block.children.map(child => child.text).join("");
  }).join("\n\n");
};

export const formateDate = (date: string) => {
  const d = Date.parse(date);

  return new Intl.DateTimeFormat("en-GB", {
    month: "long",
    year: "numeric",
  }).format(d);
};