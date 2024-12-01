
export default function SearchBar() {
    return (
        <div className="hidden md:flex flex-1 justify-center">
  <input
    type="text"
    placeholder="Search..."
    className="w-1/2 max-w-xs px-3 py-3 border rounded-[50px] outline-none focus:ring-2 focus:ring-[#ffc125] text-black"
  />
</div>


    )
}