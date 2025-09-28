import { useEffect, useRef } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type CardProps = {
    image: string,
    title: string,
    desc: string,
    link: string,
    moreDetails?: {
        title: string,
        desc: string
    }
}

import { Plus } from 'lucide-react';

const Card = ({ image, title, desc, link, moreDetails }: CardProps) => {
    const hasMoreDetails = moreDetails && moreDetails.title && moreDetails.desc;
    
    const cardContent = (
        <div className={`card ${hasMoreDetails ? 'cursor-pointer' : ''}`}>
            <div className="card-border"></div>
            <div className="card-content flex flex-col space-y-4 p-6">
                {/* Image*/}
                {image && (
                    <div className="relative w-full h-48 overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                       
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-lg"></div>
                    </div>
                )}

                {/* Title */}
                <h2 className="text-xl font-bold text-foreground leading-tight mb-1">
                    {title}
                </h2>

                {/* Description*/}
                <div className="flex justify-between items-end">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1 pr-2">
                        {desc}
                    </p>
                    
                    {hasMoreDetails && (
                        <div className="flex-shrink-0">
                            <Plus className="w-3 h-3 text-muted-foreground/50" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    if (hasMoreDetails) {
        return (
            <Dialog>
                <DialogTrigger asChild>
                    {cardContent}
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{moreDetails.title}</DialogTitle>
                        <DialogDescription>
                            {moreDetails.desc}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        );
    }

    return cardContent;
}

type FeatureCardProp = {
    img: string,
    title: string,
    desc: string,
    link: string,
    moreDetails: {
        title?: string,
        desc?: string
    }
}

type FeatureCardsProp = {
    featureCards: FeatureCardProp[]
}

const GridCard: React.FC<FeatureCardsProp> = ({ featureCards }) => {
    const cardsContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cardsContainer = cardsContainerRef.current;

        const handleMouseMove = (e: MouseEvent) => {
            if (!cardsContainer) return;
            
            // Only get cards within this specific container
            const cards = cardsContainer.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
            
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        if (cardsContainer) {
            cardsContainer.addEventListener('mousemove', handleMouseMove);
        }

        // Cleanup function
        return () => {
            if (cardsContainer) {
                cardsContainer.removeEventListener('mousemove', handleMouseMove);
            }
        };
    }, []);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    .card:hover::before{   
                        opacity: 1; 
                    }   
                    
                    .cards-container:hover > .card > .card-border {
                        opacity:1;
                    }

                    .card::before, .card > .card-border {    
                        border-radius: inherit;   
                        content: "";   
                        height: 100%;   
                        left: 0px;   
                        position: absolute;   
                        top: 0px;   
                        opacity: 0;   
                        transition: opacity 500ms;   
                        width: 100%;  
                    }   
                    
                    .card::before {   
                        background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.06), transparent 40%);    
                        z-index: 3; 
                    }      
                    
                    .card > .card-content {   
                        background-color: var(--card);   
                        height: calc(100% - 2px);   
                        width: calc(100% - 2px);   
                        border-radius: inherit;   
                        margin: 1px;   
                        position: relative;   
                        z-index: 2; 
                    }  
                    
                    .card > .card-border {     
                        background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,0.3), transparent 40%);      
                        z-index: 1; 
                    }  
                    
                    .card {   
                        background-color: rgba(255,255,255,0.1);   
                        border-radius: 10px;   
                        cursor: pointer;    
                        height: 260px;   
                        position: relative;   
                        width: 300px; 
                    }
                `
            }} />

            <div className="min-h-screen ">
                <div 
                    ref={cardsContainerRef}
                    className="cards-container flex flex-wrap gap-2 max-w-[1000px] mx-auto w-[calc(100%-10px)] mb-2"
                >
                    {
                        featureCards.map(({ img, title, desc, link, moreDetails }, index) => (
                            <Card 
                                key={index}
                                image={img} 
                                title={title} 
                                desc={desc} 
                                link={link} 
                                moreDetails={moreDetails}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default GridCard;