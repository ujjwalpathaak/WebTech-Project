import React, { useState } from "react";
import axios from "axios";
import logoJuit from "../assets/Logo.png";
const GiveMedicalLeave = () => {
  const [name, setName] = useState("");
  const [rollNum, setRollNum] = useState("");
  const [sdate, setSdate] = useState("");
  const [edate, setEdate] = useState("");
  const [reason, setReason] = useState("");
  const handleSubmit = (e) => {
    console.log(name, rollNum, reason);
    // e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/ff37fa63-fb9d-42e7-b3f3-f4badb43e6e8",
        { name, rollNum, sdate, edate, reason }
      )
      .then((response) => {
        console.log(response);
      });

  };
  return (
    <>
      <div className="healthContainer">
        <div className="navbar">
          <img id='JUITLogo' src={logoJuit} alt="LogoJUIT" />
          <div className="headings">
            <div className="JUIT"><strong>Digital Dispensary System</strong></div>
            <div className="JUIT"><strong>Jaypee University Of Information Technology</strong></div>
          </div>
        </div>
        <div className="bg-slate-300 h-[100vh] w-[100vw] flex flex-col justify-center items-center ">
          <div className="w-1/2">
            <div className="m-5">
              <label
                for="small-input"
                class="inline mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Name:
              </label>
              <input
                type="text"
                id="small-input"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                class="inline w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="m-5">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Roll Number:
              </label>
              <input
                type="text"
                id="small-input"
                onChange={(e) => {
                  setRollNum(e.target.value);
                }}
                class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="m-5">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Leave Start Date:
              </label>
              <div className="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="small-input"
                  onChange={(e) => {
                    setSdate(e.target.value);
                  }}
                  class="pl-10 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <div className="m-5">
              <label
                for="small-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Leave End Date:
              </label>
              <div className="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="small-input"
                  onChange={(e) => {
                    setEdate(e.target.value);
                  }}
                  class="pl-10 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>

            {/* <div className="m-5" date-rangepicker class="flex items-center">
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="start"
              type="text"
              onChange={(e) => {
                setSdate(e.target.value);
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date start"
            /> */}
            {/* </div>
          <span class="mx-4 text-gray-500">to</span>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              name="end"
              type="text"
              onChange={(e) => {
                setEdate(e.target.value);
              }}
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date end"
            />
          </div>
        </div> */}
            <div className="m-5" class="mb-6">
              <label
                for="large-input"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900"
              >
                Reason:{" "}
              </label>
              <input
                type="text"
                onChange={(e) => {
                  setReason(e.target.value);
                }}
                id="large-input"
                class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="m-5">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
        </div>
      </>
      );
};

      export default GiveMedicalLeave;
