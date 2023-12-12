import Logo from "./Logo";
import MenuItems from "./MenuItems";

const Header = () => {
  return (
    <header className="bg-violetBg py-8">
      <div className="container-area flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex gap-8 text-white text-xl">
            <MenuItems />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
