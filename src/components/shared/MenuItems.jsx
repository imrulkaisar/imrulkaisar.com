import Link from "next/link";

const MenuItems = () => {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/portfolios">Portfolios</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
};

export default MenuItems;
