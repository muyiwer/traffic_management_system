import { Link } from "react-router-dom";
export const AppMenu = () => {
  const menus = [
    {
      title: "Dashboard",
      key: "1",
    },
  ];
  return (
    <nav className="flex flex-col gap-4 mt-8 md:mt-0">
      {menus.map((menu) => (
        <Link key={menu.key} to="/" className="hover:bg-gray-700 p-2 rounded-md">
          {menu.title}
        </Link>
      ))}
    </nav>
  );
};
