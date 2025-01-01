import React from 'react';
import { Link } from 'react-router-dom';

interface FigureProps {
    Image: any;
    onClick?:any;
    Items?: string;
    children?: any;
    Navigation?: any;
    Description?: any;
    NavigateText?: string;
    ContainerStyle?: string;
    DescriptionStyle?:string;
}

const Figure: React.FC<FigureProps> = ({ Navigation, ContainerStyle, Image, NavigateText, Description, DescriptionStyle, Items, children }) => {
return (
    <Link to={Navigation} className={ContainerStyle} >
        <img src={Image} alt="" className='flex-1 rounded-md' width='600px' />
        <figcaption className='flex flex-col flex-1 items-center'>
            <h2 className='font-bold text-3xl'>{NavigateText}</h2>
            <p className={DescriptionStyle}>{Description}<span className='font-bold'>{ Items }</span></p>
            {children}
        </figcaption>
    </Link>
)
}

export default React.memo(Figure)