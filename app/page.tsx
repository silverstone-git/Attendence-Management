export default function Home() {
  return (
    <div className="w-[1440px] h-[827px] relative bg-stone-950">
      <div className="w-[1440px] h-[1614px] left-0 top-0 absolute bg-stone-950"></div>
      <div className="w-[135px] h-6 left-[248px] top-[48px] absolute text-rose-200 text-2xl font-bold font-['Inter']">
        AttendEase
      </div>
      <div className="w-[173px] h-12 left-[440px] top-[613px] absolute bg-green-500 rounded shadow justify-center items-center inline-flex">
        <div className="w-[173px] h-12 text-center text-stone-950 text-base font-normal font-['Inter']">
          Get Started
        </div>
      </div>
      <div className="w-[173px] h-12 left-[834px] top-[48px] absolute bg-green-500 rounded shadow justify-center items-center inline-flex">
        <div className="w-[173px] h-12 text-center text-stone-950 text-base font-normal font-['Inter']">
          Get Started
        </div>
      </div>
      <div className="w-[173px] h-12 left-[1022px] top-[47px] absolute bg-green-500 rounded shadow justify-center items-center inline-flex">
        <div className="w-[173px] h-12 text-center text-stone-950 text-base font-normal font-['Inter']">
          Log In
        </div>
      </div>
      <div className="w-[173px] h-12 left-[247px] top-[613px] absolute bg-red-900 rounded shadow justify-center items-center inline-flex">
        <div className="w-[173px] h-12 text-center text-rose-200 text-base font-normal font-['Inter']">
          Read More
        </div>
      </div>
      <div className="w-[456px] h-56 left-[247px] top-[205px] absolute text-rose-200 text-5xl font-black font-['Inter'] leading-[57.60px]">
        Seamlessly Track <br />
        your Attendance, Effortlessly Stay
        <br />
        on Schedule.
      </div>
      <div className="w-[463px] h-[53px] left-[247px] top-[487px] absolute text-rose-200 text-xl font-normal font-['Inter'] leading-[30px]">
        AttendEase enables you to effortlessly track attendance while staying on
        schedule seamlessly.
      </div>
      <img
        className="w-[473px] h-[335px] left-[724px] top-[205px] absolute"
        src="https://via.placeholder.com/473x335"
      />
    </div>
  );
}
