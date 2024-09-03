import { useDispatch } from "react-redux";
import Counter from "./Counter";

export default function Home() {
  const dispatch  = useDispatch();
  return (
    <div className="h-screen overflow-y-auto bg-gray-400">
    <div className="flex justify-center items-center flex-col m-20">
    <Counter/>
    <div className="flex flex-row gap-5">
    <button className="bg-blue-600 text-white p-5" onClick={() => dispatch({type: 'Increment'})}>Increment</button>
    <button className="bg-red-600 text-white p-5" onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
    </div>
    </div>
    </div>
  )
}
