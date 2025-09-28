/* components import */

import { Button } from "./ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@radix-ui/react-popover";
import { Menu } from 'lucide-react';
import Logo from "@/components/logo";
import MobileMenu from "./mobile_menu";
import { navMenu } from "@/constants";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"


const Header = () => {

    return (
        <header className=' h-16 grid grid-cols-1 items-center md:h-20
        lg:h-24'>
            <div className='container flex justify-between'>
                <Logo variant="icon" />
                <NavigationMenu className="max-lg:hidden mx-auto">
                    <NavigationMenuList >
                        {navMenu.map(({ href, label, submenu }, index) => (
                            <NavigationMenuItem key={index}>
                                {submenu ? (
                                    <>
                                    <NavigationMenuTrigger>
                                        {label}
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid grid-cols-2 gap-2 p-2 w-[640px]">{
                                            submenu.map(({href,icon,label,desc},index) => (
                                                <li key={index}> 
                                                <NavigationMenuLink asChild>
                                                <a className="flex gap-3 select-none p-2 rounded-sm transition-colors hover:bg-foreground/5" href={href}>
                                                <div className="w-10 h-10 bg-foreground/10 rounded-sm shadow-sm rounded-sm shadow-sm border-t border-foreground/5 flex-shrink-0 grid place-items-center"> {icon}</div>
                                                <div className=""> 
                                                <div className="text-[13px] leading-normal mb-1">{label}</div>
                                                <p className="text-[13px] leading-normal text-muted-foreground"> {desc}</p>
                                                </div>
                                                </a>
                                                </NavigationMenuLink>
                                                </li>
                                            ))}</ul>
                                    </NavigationMenuContent>
                                    </>
                                ) : (<NavigationMenuLink href={href} className={navigationMenuTriggerStyle()}> {label}</NavigationMenuLink>)}
        
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant='outline'
                            size='icon'
                            className="lg:hidden"
                        >
                            <Menu />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="bg-background/50 backdrop-blur-3xl border-foreground/5 border-b-0 rounded-lg overflow-hidden">
                        <MobileMenu navMenu={navMenu} />
                    </PopoverContent>
                </Popover>
            </div>
        </header>
    )
};

export default Header;