import React from "react";
import { selectUser } from "../providers/userSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const clickButton = () => {
  window.alert("Medical Records Sent");
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  return (
    <div className="flex h-[100vh] w-[100%] bg-black">
      {/* <div className="bg-[#FFFFFF] w-64">side pannel</div> */}
      <div className="h-[100vh] w-full">
        <div className="bg-[#F1F3F4] h-[10vh] w-full flex  flex-wrap items-center justify-start">
          <h1 className="ml-20 font-bold text-2xl">Welcome, {user.name}</h1>
          {/* <h1 className="ml-20 font-bold text-2xl">{user.name}</h1> */}
        </div>
        <div className="bg-[#FFFFFF] h-[90vh] w-full flex justify-center ">
          <div className="m-8   w-full flex flex-col justify-center">
            <div className="w-full h-[50%]  flex justify-center items-center gap-x-6">
              {/* Past record */}
              <div
                style={{
                  backgroundImage: `url(https://as1.ftcdn.net/v2/jpg/04/78/21/44/1000_F_478214482_Ke4Go9H7n899XYqPtnNIOZXdfhthnxlX.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform  hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div
                  onClick={() => navigate("/videoCall")}
                  className="opacity-10 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl"
                >
                  Call Student
                </div>
              </div>
              {/* video call */}
              <div
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1189107436/vector/young-man-with-cold-symptoms-like-fever-headache-and-sore-throat-measuring-temperature-in.jpg?s=612x612&w=0&k=20&c=zAUIfuwD4Vgrw-3XxKJZyj6zKLyZFzFyddGf6VVo6Gw=)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] emr-data_v03  transform bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div
                  onClick={() => navigate("/giveMedicalLeave")}
                  class="opacity-10 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl"
                >
                  Medical Leave
                </div>
              </div>
              {/* Medicine card */}
              <div
                style={{
                  backgroundImage: `url(https://thumbs.dreamstime.com/b/modern-pharmacy-shelves-medicaments-drugs-modern-pharmacy-shelves-medicaments-drugs-healthcare-medical-170691016.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform  bg-blue-400 hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl"
              >
                <div class="opacity-10 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Medicine Stock
                </div>
              </div>
            </div>
            <div className="w-full h-[50%] flex justify-center items-center gap-x-6">
              {/* Past record */}
              <div
                style={{
                  backgroundImage: `url(https://img.freepik.com/free-vector/emails-concept-illustration_114360-1217.jpg?w=2000)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl bg-slate-400"
              >
                <div
                  onClick={clickButton}
                  class="opacity-10 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl"
                >
                  Send Medical Records
                </div>
              </div>
              {/* video call */}
              <div
                style={{
                  backgroundImage: `url(https://media.istockphoto.com/id/1350649897/vector/records-management-concept.jpg?s=612x612&w=0&k=20&c=BX1oVBsB7lAx-AxTNU6XyvgLYpd8qpGFvHWgTjmPSVM=)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
                className="w-[30%] transform hover:bg-blue-600 transition duration-500 hover:scale-105 point cursor-pointer flex justify-center items-center h-[80%] rounded-xl bg-slate-500"
              >
                <div class="opacity-10 hover:opacity-100 hover:bg-black/50 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white font-semibold rounded-xl">
                  Past Records
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
