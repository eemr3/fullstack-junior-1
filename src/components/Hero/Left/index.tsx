import Link from 'next/link';
import { LeftArrow } from '../../Icons/LeftArrow';

export function LeftHero() {
  return (
    <div className="w-[60%] h-[783px] bg-[#515DEF] text-white pt-40">
      <div className="container mx-auto w-[70%] h-[90%] flex flex-col justify-around">
        <h3 className="text-[24px]">Hi, There!</h3>
        <h1 className="font-bold text-[64px] leading-[80px]">
          We are a growing-up Creative Agency from Indonesia!
        </h1>
        <p className="text-[24px]">
          We provides you with modest and professional design templates that come from the
          synergy of design and technology
        </p>
        <Link
          href="/jobs"
          className="flex items-center rounded bg-[#FBFBFB] w-[210px] p-4 text-[#333333]"
        >
          Let’s Collaborate{' '}
          <span>
            <LeftArrow />
          </span>
        </Link>
      </div>
    </div>
  );
}
