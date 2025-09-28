import { Button } from "./ui/button";

type tutorialLinkProps = {
  name: string,
  url: string,
  icon: string,
  color: string
}

type tutorialsLinksProps = {
  tutorialLinks: tutorialLinkProps[]
}

const TutorialLinksCard = ({ tutorialLinks }: tutorialsLinksProps) => {
  const handleLinkClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section className=" px-6 max-w-5xl mx-auto">
      <div className="w-full max-w-sm mx-auto sm:max-w-2xl lg:max-w-3xl xl:max-w-6xl 2xl:max-w-5xl">
        {/* Tutorial Links Card */}
        <div className=" rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
          
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Watch Now!!
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Discover amazing tutorials and learn something new about 
            </p>
          </div>

          {/* Tutorial Links - Centered relative to title */}
          <div className="flex flex-col items-center mb-6 sm:mb-8">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-full">
              {tutorialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <div key={index} className="relative group">
                    <Button
                      variant="default"
                      onClick={() => handleLinkClick(link.url)}
                      className={`
                        group flex flex-col items-center justify-center p-2 sm:p-3 rounded-xl
                        transition-all duration-300 ease-out
                        bg-white/5 backdrop-blur-sm border border-white/10
                        hover:bg-white/10 hover:border-white/20 hover:scale-[1.02]
                        active:scale-[0.98]
                        shadow-lg hover:shadow-xl
                        w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-22 lg:h-22
                        flex-shrink-0 min-w-0 cursor-pointer
                      `}
                    >
                      <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mb-0.5 text-white/80 group-hover:text-white transition-colors duration-200" />
                      <span className="text-[8px] sm:text-[9px] md:text-[10px] font-medium text-white/90 group-hover:text-white text-center leading-tight transition-colors duration-200 px-1 break-words max-w-full overflow-hidden line-clamp-2">
                        {link.name}
                      </span>
                    </Button>
                    
                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                      {link.name}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialLinksCard;