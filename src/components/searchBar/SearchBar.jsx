import { Input } from "@material-tailwind/react"

const SearchBar = () => {
  return (
    <div className="">
        <Input className="h-[35px] w-[250px] md:w-[340px] bg-gray-200 placeholder-gray-400 rounded-lg outline-none text-black"  type="text" placeholder="Search Here" />
    </div>
  )
}

export default SearchBar
