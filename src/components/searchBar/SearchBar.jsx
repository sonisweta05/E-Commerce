import { Input } from "@material-tailwind/react"

const SearchBar = () => {
  return (
    <div>
        <div className="w-[300px] md:w-[356px] bg-gray-200 placeholder-gray-400 rounded-lg outline-none text-black ">
        <Input  type="text" placeholder="Search Here" />
        </div>
    </div>
  )
}

export default SearchBar
