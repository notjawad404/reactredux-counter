import { useSelector } from "react-redux"
export default function Counter() {
  const count = useSelector((state) => state)
  return (
    <div className="p-20 m-10">
    <h1 className="text-black font-bold text-lg">{count}</h1>
    </div>
  )
}
