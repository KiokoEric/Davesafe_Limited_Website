import AOS from 'aos';
import React, { useEffect } from 'react';
import Figure from '../../Components/Common/Figure/Figure';
import Heading from '../../Components/Common/Heading/Heading';
import Head_Gear from "../../assets/Home_Page/Protective_HeadGear.jpg";
import Eye_Protection from "../../assets/Home_Page/Eye_Protection.jpg";
import Ear_Protection from "../../assets/Home_Page/Ear_Protection.jpg";
import Foot_Protection from "../../assets/Home_Page/Foot_Protection.jpeg";
import Hand_Gloves from "../../assets/Home_Page/Protective_HandGloves.jpg";
import Protective_Clothing from "../../assets/Home_Page/Protective_Clothing.webp";
import Respiratory_Protection from "../../assets/Home_Page/Respiratory_Protection.jpg";

const Home: React.FC = () => {

    useEffect(() => {
        AOS.init();
    })

return (
    <div className='mb-5'>
        <Heading 
            idName='Home'
            ContainerStyle= 'flex flex-col items-center justify-center gap-5 h-max mb-10 py-4 text-white'
            Heading= 'Davesafe Limited'
            HeadingStyle= 'font-bold text-5xl sm:text-6xl'
            FirstText='Supplier of Personal Protective Equipment in Kenya'
            FirstStyle='font-bold mx-auto text-center text-2xl w-11/12 sm:text-4xl'
            SecondText='Welcome to Davesafe Limited, your trusted partner in providing high-quality Personal Protective Equipment (PPE) solutions for a safer and healthier living and working environment. We are dedicated to safeguarding lives by offering a comprehensive range of protective gear designed to meet the ever-evolving needs of individuals, businesses and communities.'
            SecondStyle='text-xl text-center w-10/12'
        />
        <h3 className='font-bold mb-10 text-center text-3xl underline'>Our Products</h3>
        <section data-aos="zoom-out-up" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end gap-20 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/HeadGear'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Head_Gear}
                NavigateText='Protective Head Gear'
                DescriptionStyle='text-center'
                Description= 'Protective head gear refers to equipment designed to protect the head from various types of injuries and is commonly used in sports, industrial settings, and other activities where there is a risk of head trauma. Protective headgears that we provide are'
                Items='Motorcycle Helmets, Industrial Helmets and Firefighter Helmets.'
            />
            <Figure
                Navigation={'/FaceProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Eye_Protection }
                NavigateText='Eye and Face Protection'
                DescriptionStyle='text-center'
                Description= 'Eye and face protection rfers to equipment designed to safeguard the eyes and face from various potential hazards in settings where there is a risk of eye injuries, such as exposure to flying debris, chemical splashes, high-velocity impact, intense light, or harmful radiation. Eye and face protection that we provide are '
                Items='Antimist Goggles, Face Shield, Safety Glasses/ Spectacles, Safety Goggles, Welding Helmet and Welding Safety Goggles.'
            />
            <Figure
                Navigation={'/HearingProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Ear_Protection }
                NavigateText='Hearing Protection'
                DescriptionStyle='text-center'
                Description= 'Hearing protection refers to equipment designed to reduce or eliminate exposure to excessive noise levels, thereby safeguarding the hearing of individuals who are at risk of noise-induced hearing damage or loss. Hearing Protection devices that we provide are '
                Items='Earplugs and Ear Muffs.'
            />
        </section>
        <section data-aos="zoom-out-left" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/RespiratoryProtection'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Respiratory_Protection }
                NavigateText='Respiratory Protection'
                DescriptionStyle='text-center'
                Description= 'Respiratory protection refers to equipment used to safeguard the respiratory system from exposure to harmful airborne contaminants, particles, gases, vapors, or pathogens. Respiratory protection devices we provide are '
                Items='Disposable Dustmasks, 3M Half Face Respiratory Mask and 3M Full Face Respiratory Mask.'
            />
            <Figure
                Navigation={'/HandGloves'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Hand_Gloves }
                NavigateText='Protective Hand Gloves'
                DescriptionStyle='text-center'
                Description= 'Protective hand gloves are specialized gloves designed to protect the hands from various hazards including physical injuries, chemicals, extreme temperatures, and biological agents. Protective hand gloves that we provide are '
                Items='Canvas Gloves, Cold Room Gloves, Cotton Hand Gloves, Cut Resistant Gloves, Diamond Grip Work Gloves, Latex Gloves, Leather Gloves, Nitrile Gloves, PVC Gloves, Rider Hand Gloves and Welding Gloves.'
            />
            <Figure
                Navigation={'/FootWear'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Foot_Protection }
                NavigateText='Protective Foot Wear'
                DescriptionStyle='text-center'
                Description= 'Protective foot wear, also known as safety footwear or work boots, are footwear to protect the feet from various workplace hazards and injuries. Protective Footwear that we provide are '
                Items='Gum Boots, Safety Shoes, Safety Boots, Security Boots and Steel-Toed Boots.'
            />
        </section>
        <section data-aos="zoom-out-right" data-aos-easing="linear" data-aos-duration="1500" className='grid grid-cols-1 items-end justify-center gap-20 mb-5 mx-auto w-11/12 sm:grid-cols-3'>
            <Figure
                Navigation={'/ProtectiveClothing'}
                ContainerStyle='cursor-pointer flex flex-col gap-4 text-center'
                Image={ Protective_Clothing }
                NavigateText='Personal Protective Clothing'
                DescriptionStyle='text-center'
                Description= 'Personal protective clothing refers to apparel designed to protect individuals from various workplace hazards and risks. Personal protective clothing that we provide are '
                Items='Aprons, Chef Uniform, Dust Coats, Dungarees, Eskimo Suits, Kaunda Suits, Overalls, PVC Aprons, Rain Coats, Rider Suits, Security Guard Uniform and Spray Suits.'
            />
        </section>
    </div>
)
}

export default Home