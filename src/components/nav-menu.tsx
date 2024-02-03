import { siteConfig } from "@/config/site";
import { NavigationMenu as RadixNavMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { getWindowLocation } from "@/lib/utils";



export default function NavigationMenu() {
    const navLinks = siteConfig.mainNav;

    const path = getWindowLocation()?.pathname

    return (
        <RadixNavMenu>
            <NavigationMenuList className='gap-6 text-lg'>
                {navLinks.map((link) => (
                    <NavigationMenuItem key={link.href}>
                        <a href={link.href}>
                            <NavigationMenuLink className={(navigationMenuTriggerStyle(), path === link.href ? "border-b-2 border-b-accent text-accent" : "")}>{link.title}</NavigationMenuLink>
                        </a>
                    </NavigationMenuItem>
                ))}
            </NavigationMenuList>
        </RadixNavMenu>
    )
}