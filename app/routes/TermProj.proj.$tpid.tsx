import { myTermProj } from "./TermProject";
import { useParams } from "@remix-run/react";
export default function ProjView(){
    const {tpid} = useParams();

    const tpTmp = myTermProj.filter((item)=>{
      return   item.tpID === Number (tpid) ;
}).map((TpObj,index)=>
    <>
        <p>รหัสโปรเจค: {TpObj.tpID}</p>
        <p>รายวิชา: {TpObj.tpTitle}</p>
        <p>รายละเอียด: {TpObj.tpSudject}</p>
         <p>หน้าปก: {TpObj.tpCover}</p>
          <p>ลิ้ง: {TpObj.tpUrl}</p>
           <p>กลุ่ม: {TpObj.tpTeam}</p>

    </>
);
    if(tpTmp.length=== 0){
        return"***ไม่พบข้อมมูลโปรเจค***";
    }
    return (
        <>
        คุณเลือกข้อมูลโปรเจตรายวิชา : {tpid}
        {tpTmp}
        <a href="/TermProj/termpeojist" className="text-2xl text-fuchsia-400 text-center bg-blue-700" >Back </a>
        </>
    );
}