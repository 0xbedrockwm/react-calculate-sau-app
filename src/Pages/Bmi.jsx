import {Link} from "react-router"
import bmi from "./../assets/bmi.png"
export default function Bmi() {
  return (
    <>
        <div className="w-[65%] border border-gray-200 rounded-2xl
                     shadow-xl mt-20 mx-auto flex flex-col items-center p-10">
            <p className="font-kanit text-2xl font-bold">
                BMI Calculator
            </p>
            <p className="font-kanit text-gray-500 font-bold">
                คำนวณ BMI
            </p>
            <img src={bmi} alt="bmi" className="w-20 mt-5" />

            {/* ส่วนของฟอร์ม สำหรับป้อน เลือก คลิก */}
            <form className="w-full ">
                <label className="font-kanit">ป้อนน่้ำหนัก (kg)</label>
                <input type="number" name=""  id="" placeholder="เช่น 65"
                    className="border border-gray-300 p-2 rounded-md
                                placeholder: font-kanit" />

                <label className="font-kanit mt-3">ส่วนสูง (cm)</label>
                <input type="number" name=""  id="" placeholder="เช่น 170"
                    className="border border-gray-300 p-2 rounded-md"
                                 placeholder: font-kanit/>

                <button className="w-full bg-blue-600 hover:bg-blue-800 text-white
                                font-kanit font-bold py-2 px-4 rounded mt-5">
                คํานวณ BMI
                </button>
                <button className="w-full bg-gray-600 mt-3 p-2 rouded-me
                                     text-black font-kanit font-bold cursor-pointer hover:bg-gray-500">
                    
                </button>
            </form>
            <div className="flex justify-center mt-5">
                <p className="font-kanit font-bold">
                    ค่า BMI ที่คำนวณได้ :
                </p>
                <p className="font-kanit font-bold text-blue-600">
                    0.00
                </p>
            </div>
            <link to="/" className="w-full bg-gray-600 mt-3 p-2 rouded-me
                                     text-black font-kanit font-bold text-center hover:bg-gray-500">
            กลับหน้าหลัก                            
            </link>

        </div>
    </>
  )
}