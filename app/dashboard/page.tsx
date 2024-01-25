import Block from "../_components/Block";
import Button from "../_components/Button";
import { middleware } from "../middleware";
import Total from "../_components/Total";
import { redirect } from "next/navigation";

const DashboardPage = () => {
  return (
    <div className=" w-full flex flex-col justify-center p-6 gap-6">
      <div className="flex flex-row justify-between place-items-end">
        <h1 className="text-4xl sm:text-7xl font-extrabold">
          Welcome <br /> cyto sidhwani{" "}
        </h1>
        <Button 
        // onClick={() => redirect('/uploadAttendance')}
        >Upload Attendance</Button>
      </div>

      <div className="flex flex-wrap w-full justify-around">
        <Block subject="Subject 1" present={34} total={44} />
        <Block subject="Subject 1" present={34} total={44} />
        <Block subject="Subject 1" present={34} total={44} />
        <Block subject="Subject 1" present={34} total={44} />
        <Block subject="Subject 1" present={34} total={44} />
      </div>
      <div></div>
      <Total />
    </div>
  );
};

export const config = {
  matcher: ["/dashboard"], // Protect /dashboard route
  middleware: [middleware],
};

export default DashboardPage;
