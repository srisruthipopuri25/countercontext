import Sruthi from "./countercontext";
export default function header() {
  const { count } = Sruthi();
  return (
    <>
      <div>abcs,{count}</div>
    </>
  );
}
