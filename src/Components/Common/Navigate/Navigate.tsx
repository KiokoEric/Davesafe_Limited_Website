import React from 'react';
import { Link } from 'react-router-dom';

interface NavigateProps {
    Image?: any;
    Navigation?: any;
    NavigateText: string;
    NavigateStyle: string;
}

const Navigate: React.FC<NavigateProps> = ({ Navigation, NavigateStyle, Image, NavigateText }) => {
return (
    <Link to={Navigation} className={NavigateStyle}>
        <img src={Image} alt="" />
        { NavigateText }
    </Link>
)
}

export default React.memo(Navigate)