import Button from "./_components/Button";
import Image from "next/image";
import Link from "next/link";
import DialogButton from "./dialogButton";

interface Props {
    children?: React.ReactNode;
}

const LandingPage = ({ children }: Props) => {
  
  return (
    <main className="flex justify-between">
      <div>
        <div>
          <h1 className="text-5xl font-extrabold leading-[57.6px] pt-[120px] pb-[58px] text-heading">
            Seamlessly Track <br />
            your Attendance, <br />
            Effortlessly Stay <br />
            on Schedule.
          </h1>
        </div>

        <p className="pb-16 text-xl ">
          AttendEase enables you to effortlessly track <br /> attendance while
          staying on schedule seamlessly.
        </p>

        <div className="flex gap-5">
          <DialogButton />
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/home.svg"
          width={500}
          height={500}
          alt="AttendEase Home Page Image"
        />
      </div>
    </main>
  );
}

export default LandingPage;
