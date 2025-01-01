import React from 'react';
import Figure from '../../../Components/Common/Figure/Figure';
import Heading from '../../../Components/Common/Heading/Heading';
import Overall from "../../../assets/Protective_Clothing/Overalls.jpg";
import Rain_Coat from "../../../assets/Protective_Clothing/Rain_Coat.jpg";
import PVC_Apron from "../../../assets/Protective_Clothing/PVC_Apron.webp";
import Dust_Coat from "../../../assets/Protective_Clothing/Dust_Coats.png";
import Spray_Suit from "../../../assets/Protective_Clothing/Spray_Suit.webp";
import Eskimo_Suit from "../../../assets/Protective_Clothing/Eskimo_Suit.jpg";

const Protective_Clothing:React.FC = () => {
return (
    <div>
        <Heading 
            idName='Protective_Clothing'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 mb-10 text-center text-white'
            Heading= 'Protective Clothing'
            HeadingStyle= 'font-bold text-6xl'
        />
        <section className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Dust_Coat }
                NavigateText='Dust Coats'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Eskimo_Suit }
                NavigateText='Eskimo Suit'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Overall }
                NavigateText='Overalls'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ PVC_Apron }
                NavigateText='PVC Apron'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Rain_Coat }
                NavigateText='Rain Coat'
            />
            <Figure
                ContainerStyle='flex flex-col gap-4'
                Image={ Spray_Suit }
                NavigateText='Spray Suit'
            />
        </section>
    </div>
)
}

export default Protective_Clothing