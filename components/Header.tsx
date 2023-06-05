import AuthStateButton from "components/AuthStateButton.tsx";

export { Header };

export default function Header() {
  const menus = [
    { name: "Home", href: "/" }
  ];

  return (
    <div class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <div class="text-2xl  ml-1 font-bold">
          SOMETHING
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === "" ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
        <li><AuthStateButton /></li>
      </ul>
    </div>
  );
}
