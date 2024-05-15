export default function Header() {
  return (
    <header>
      <div>
        <section className="grid grid-cols-3">
          <div></div>
          <h1 className="grid justify-items-center">EXGRO</h1>
            <nav className="grid grid-cols-3">
                <button className="text-xs border-2 border-black rounded p-1 mx-5">About Us</button>
                <button className="text-xs border-2 border-black rounded p-1 mx-5">test</button>
            </nav>
        </section>
        <div>test</div>
      </div>
    </header>
  );
}
