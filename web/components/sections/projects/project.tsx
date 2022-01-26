import React, { useState } from "react";
import { TextTrail } from "@website-v3/web/helpers/springs";
type Props = {

};

export const Project = (props: Props) => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(!open)}>Test</button>

    </>
  );
};
