import { favicon,logo } from "@/assets";

type LogoProps = {
    variant?: 'default' | 'icon';
};

const Logo = ({variant = 'default'}:LogoProps) => {
    return(
        <a href="/" className="">
        {variant === "default" && (
            <img src={logo} alt="GeniFlow Logo" width={150} height={31}/>
        )}

        {variant === "icon" && (
            <img src={favicon} alt="GeniFlow Logo" width={32} height={32}/>
        )}
        </a>
    )
}

export default Logo;