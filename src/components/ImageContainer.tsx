import React from "react";

interface ImageContainerProps {
    imageSource: string;
    description: string;
}

const ImageContainer: React.FC<ImageContainerProps> = ({ imageSource, description }) => {
    return (
        <div className="image-container">
            <img className="h-auto w-full min-w-40 max-w-4xl" src={imageSource} alt="alt text goes here" />
            <p className="date">{description}</p>
        </div>
    );
};

export default ImageContainer;