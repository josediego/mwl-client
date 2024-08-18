export default function Header() {
  return (
    <header className="container mx-auto relative pt-5">
      <div className="flex items-center justify-between">
        <h1>LOGO</h1>
        <button className="border border-[#242424] flex items-center justify-center h-[40px] rounded-[40px] px-10 bg-[#F4F4F4]">
          <span className="text-sm font-semibold">Sign In</span>
        </button>
      </div>
    </header>
  );
}
