import Sruthi from "./countercontext";
export default function Counter() {
  const { count, setcounter } = Sruthi();
  return (
    <>
      <div> This is another app</div>
      <button onClick={(e) => setcounter(count + 1)}>+</button>
      <button onClick={(e) => setcounter(count - 1)}>-</button>
      <div>{count}</div>
      <button onClick={(e) => setcounter(0)}>reset</button>
    </>
  );
}
