"use client";
import Button from "./_components/Button";
import Modal from "./_components/Modal";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [openDialog, setOpenDialog] = useState(false);
  const toggleDialog = () => setOpenDialog(!openDialog);
  const closeDialog = () => setOpenDialog(false);
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
          <Button primary onClick={() => setOpenDialog(true)}>
            Read More
          </Button>
          <Button>Get Started</Button>
        </div>

        <Modal
          open={openDialog}
          onRequestClose={closeDialog}
          closeOnOutsideClick
          className="p-0 sm:mx-[245px] border-2 border-transparent rounded-lg"

          // className="bg-buttonBackgroundPrimary text-white"
        >
          <article className="text-center bg-buttonBgBrown text-white px-5 py-[28px]">
            <h1 className="text-[28px] font-semibold pb-[30px] ">
              Why AttendEase?
            </h1>
            <p className="pb-5  font-light">
              AttendEase is a comprehensive platform designed to make attendance
              tracking a breeze, ensuring that you never miss a beat while
              effortlessly staying on schedule. With its seamless functionality,
              AttendEase allows you to easily monitor and record attendance for
              your classes. By streamlining the process, AttendEase eliminates
              the need for manual record-keeping, paper-based systems, or
              tedious spreadsheets.
            </p>
            <p className="pb-5  font-light">
              It empowers you to efficiently track attendance day by day,
              ensuring accurate and up-to-date records. With AttendEase, you can
              focus on what truly matters - whether its managing a team,
              optimizing productivity, or maintaining punctuality - while the
              platform takes care of the attendance tracking seamlessly, leaving
              you with peace of mind and the ability to effortlessly stay on top
              of your schedule.
            </p>
            {/* <button onClick={() => setOpenDialog(false)}>close</button> */}
          </article>
        </Modal>
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
