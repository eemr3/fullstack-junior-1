import { Design } from '../Icons/Design';
import { Document } from '../Icons/Document';
import { DownArrow } from '../Icons/DownArrow';
import { SocialMedia } from '../Icons/SocialMedia';

export function Footer() {
  return (
    <footer className="fixed bottom-0 w-[1352px] h-[200px] bg-[#FBFBFB] py-6">
      <div className="flex items-center">
        <div className="flex flex-col w-[10%]  h-[200px] items-center justify-center gap-6">
          <span className="-rotate-90 whitespace-nowrap text-[18px] tracking-widest text-[#909090]">
            Scroll
          </span>
          <DownArrow />
        </div>
        <div className="w-[90%] grid grid-cols-3">
          <div className="flex flex-col gap-2 w-[328px] h-[177px]">
            <Document />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#333333]">Web Design Projects</h3>
              <p className="text-[#909090]">
                Make your website user friendly and look more professional
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[328px] h-[177px]">
            <SocialMedia />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#333333]">Social Media Templates</h3>
              <p className="text-[#909090]">
                Gain more followers or subscribers with the right template
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[328px] h-[177px]">
            <Design />
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-[#333333]">Digital Artwork</h3>
              <p className="text-[#909090]">
                Gain more followers or subscribers with the right template
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
