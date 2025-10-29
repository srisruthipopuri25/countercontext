import { Counterprovider } from "./countercontext";
import Header from "./header";
import Counter from "./counter";
export default function App() {
  return (
    <>
      <div>This is my App</div>
      <Counterprovider>
        <Counter></Counter>
        <hr></hr>
        <Header></Header>
      </Counterprovider>
    </>
  );
}
