import React from 'react';
import ece from "../assets/ece.png";

export default function MyStudio({ image }) {
  return (
   <section className="flex-1 my-6 border flex flex-col rounded-md text-text px-6 py-6 md:py-6 w-full">

      <div className="flex items-center gap-3 my-3">
        <span className="bg-primary text-white font-mono text-sm flex items-center justify-center rounded h-10 w-10">
          {'</>'}
        </span>
        <span className="text-base font-semibold tracking-wide">MY STUDIO</span>
      </div>

      <p className="text-left text-muted text-[16px] leading-tight">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum perferendis delectus nulla aliquid voluptatibus rerum similique saepe error cum veniam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, beatae! Incidunt officia laborum adipisci eveniet voluptatum blanditiis sed reprehenderit enim.
      </p>

      <button className="border border-white bg-surface text-white rounded-[20px] text-[14px] w-36 p-1 mt-4 self-start">
        DOWNLOAD RESUME
      </button>
      <div className="flex flex-col lg:flex-row gap-6 my-6">
  {/* Card 1 */}
  <div className="p-4 text-left bg-surface rounded-[20px] border border-white shadow-md w-full lg:w-1/2">
    <div className="text-primary mb-3">
      <svg
        stroke="currentColor"
        fill="#FF5722"
        strokeWidth="0"
        viewBox="0 0 640 512"
        height="24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
      </svg>
    </div>
    <h3 className="text-base font-semibold mb-2 text-text">SOFTWARE DEVELOPER</h3>
    <p className="text-muted text-sm leading-tight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod ducimus culpa enim. Lorem ipsum dolor.
    </p>
  </div>

  {/* Card 2 */}
  <div className="p-4 text-left bg-surface rounded-[20px] border border-white shadow-md w-full lg:w-1/2">
    <div className="text-primary mb-3">
      <img src={ece} className='w-[24px] h-[24px]' />
    </div>
    <h3 className="text-base font-semibold mb-2 text-text">ELECTRONICs ENGINEER</h3>
    <p className="text-muted text-sm leading-tight">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quod ducimus culpa enim. Lorem ipsum dolor.
    </p>
  </div>
</div>



    </section>
  );
}
