import Image from "next/image";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/mesa.png" alt="MESA Logo" width={50} height={50} />
          <span className="ml-2 text-xl font-bold">MESA</span>
        </Link>
        <Menubar className="bg-gray-800 border-none">
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:bg-gray-700">
              Home
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/">Home</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="text-white hover:bg-gray-700">
              Teams
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href="/teams/rainbow-six-siege">Rainbow Six: Siege</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/league-of-legends">League of Legends</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/rocket-league">Rocket League</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/valorant">Valorant</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/overwatch-2">Overwatch 2</Link>
              </MenubarItem>
              <MenubarItem>
                <Link href="/teams/dota-2">DOTA 2</Link>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};

export default Navbar;
