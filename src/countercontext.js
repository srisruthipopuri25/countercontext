import { useState, createContext, useContext } from "react";

const Countercontext = createContext();

export function Counterprovider({ children }) {
  const [count, setcounter] = useState(0);
  return (
    <Countercontext value={{ count, setcounter }}>{children}</Countercontext>
  );
}
export default function Sruthi() {
  return useContext(Countercontext);
}
