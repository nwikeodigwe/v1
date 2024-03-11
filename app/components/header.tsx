export default function Header() {
  return (
    <header className="p-4">
      <div className="flex px-10 items-center justify-between">
        <div>
          <h1>Logo</h1>
        </div>
        <div className="flex items-center gap-4">
          <div>About</div>
          <div>Experience</div>
          <div>Work</div>
          <div>Contact</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-sm p-3">
            Resume
          </button>
        </div>
      </div>
    </header>
  );
}
