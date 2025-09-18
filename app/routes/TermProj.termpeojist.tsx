import { Link } from "@remix-run/react";
import { myTermProj } from "./TermProject";
export default function ProjList (){
return (
    <>
    <h1>ข้อมูลโปรเจครายวิชา</h1>
    <p>
        {
            myTermProj.map((tpObj, index)=>
                <li key={index} className="text-2xl text-fuchsia-400 text-center bg-purple-700">
                    โปรเจควิชา{tpObj.tpSudject}
               <Link to = {`/termproj/proj/${tpObj.tpID}`} className="mb-3 font-normal text-gray-700 dark:text-gray-400">View</Link>
                </li>
        )
        }
        {/** *ให้ดึงข้อมูลโครงงานรายวิชามาแสดผล***/}
    </p>
    </>
);
}