import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { businessStaticData } from '../../config';

const whatsappLink = `${businessStaticData.phone.whatsappLink}?text=%D7%A9%D7%9C%D7%95%D7%9D%20%D7%A8%D7%95%D7%AA%D7%9D%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%9E%D7%94%D7%90%D7%AA%D7%A8%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%A0%2F%D7%AA%20%D7%91%D7%90%D7%97%D7%93%20%D7%9E%D7%94%D7%A9%D7%99%D7%A8%D7%95%D7%AA%D7%99%D7%9D%20%D7%A9%D7%9C%D7%9A%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%A9%D7%A0%D7%93%D7%91%D7%A8%20%F0%9F%98%8A`;
export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-2.5 right-2.5 w-[70px] h-[70px] bg-[#25d366] rounded-full flex justify-center items-center shadow-lg z-[1000] cursor-pointer">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white text-[30px] z-[1001]">
        <FaWhatsapp className="text-[35px]" />
      </a>
      <div className="absolute w-full h-full rounded-full bg-[rgba(37,211,102,0.5)] animate-wave" />
      <div className="absolute w-full h-full rounded-full bg-[rgba(37,211,102,0.5)] animate-wave delay-[0.9s]" />
    </div>
  );
};