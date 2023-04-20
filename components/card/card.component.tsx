import clsx from 'clsx'
import Image from 'next/image'

import { CardProps } from './card.type'

export function Card({ isExpanded = false, date, title, paragraph, image }: CardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col mx-auto my-2 bg-black rounded-2xl w-[390px] max-w-md h-[573px]',
        isExpanded
          ? 'md:w-[372px] md:max-w-screen-md md:h-[620px] md:my-px lg:w-[320px] lg:max-w-screen-lg lg:h-[573px] lg:my-3 lg:flex-col'
          : 'md:w-[750px] md:max-w-screen-md md:mx-auto md:my-20 lg:h-[360px] lg:w-[990px] lg:max-w-screen-lg lg:mx-auto lg:my-18 lg:flex-row',
      )}
    >
      <div
        className={clsx(
          'mx-2 mt-2 mb-4 bg-black w-[374px] max-w-sm h-72 md:mx-2',
          isExpanded
            ? 'md:w-[355px] md:max-w-screen-md md:h-72 lg:m-2 lg:w-[305px] lg:max-w-screen-lg'
            : 'md:w-[740px] md:max-w-screen-md md:h-80 lg:w-[800px] lg:max-w-screen-lg lg:my-5 lg:ml-5 lg:mr-3',
        )}
      >
        <Image
          alt="img"
          className="object-cover w-screen h-full bg-contain rounded-2xl"
          src={image}
          width={200}
          height={200}
          priority={true}
        />
      </div>
      <div
        className={clsx(
          'mx-2 mt-4 mb-6 bg-black w-[374px] h-72',
          isExpanded
            ? 'md:w-[340px] md:max-w-screen-md lg:w-[300px] lg:max-w-screen-lg lg:m-2'
            : 'md:my-6 md:mx-2 md:w-[740px] md:max-w-screen-md  lg:ml-4 lg:mt-14 lg:mr-2',
        )}
      >
        <h1
          className={clsx(
            'mb-4 text-base font-extrabold w-125',
            isExpanded ? 'md:text-lg ' : 'md:text-2xl lg:text-4xl',
          )}
        >
          {title}
        </h1>
        <p
          className={clsx(
            'mb-10 text-base font-nunito w-100',
            isExpanded ? '' : 'md:text-xl lg:text-lg lg:mb-8',
          )}
        >
          {paragraph}
        </p>

        <p className="text-xs text-gray-400 font-nunito md:text-sm lg:text-base">
          {date.toString()}
        </p>
      </div>
    </div>
  )
}
