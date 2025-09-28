import type { MenuItem } from "@/types";
import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

/*assest import */

import { ChevronsUpDown } from "lucide-react";

type MobilEmenuProps = {
    navMenu : MenuItem[];
};

const MobileMenu = ({navMenu}:MobilEmenuProps) => {

    return (
        <div>
            <ul className="">
                {navMenu.map(({href,label,submenu},index) =>(
                    <li key={index}>
                        {submenu ? (
                            <Collapsible>
                            <CollapsibleTrigger asChild>
                            <Button variant="ghost" className="w-full justify-between " >
                            {label}
                            <ChevronsUpDown />
                            </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="border-l border-l-muted-foreground/100">
                            <ul className="ps-2">

                                {submenu.map(({href,label},index) =>(
                                    <li key={index}> 
                                    <Button asChild variant="ghost" className="w-full justify-start text-muted-foreground opacity-70 hover:opacity-100 transition-opacity duration-300">
                                    <a href={href}>{label}</a>
                                    </Button>
                                    </li>

                                )) }

                            </ul>
                            
                            </CollapsibleContent>
                            </Collapsible>
                        ):(
                            <Button asChild variant="ghost" className="w-full justify-start ">
                            <a href={href}>{label}</a>
                        </Button>
                        )}
                    
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default MobileMenu;