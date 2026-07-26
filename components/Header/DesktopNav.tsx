import { navigation } from "@/data/navigation";
import NavLink from "./NavLink";
import ClubMenu from "./ClubMenu";

export default function DesktopNav() {
  return (
    <nav className="hidden items-center gap-3 md:flex">
      {navigation.map((item) => {
        if (item.type === "dropdown") {
          return <ClubMenu key={item.title} item={item} />;
        }

        return (
          <NavLink key={item.href} href={item.href}>
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
