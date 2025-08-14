import Header from "./components/Header";
import Footer from "./components/Footer";
import { myTermProj } from "./TermProject";
import { useState } from "react";
export default function MyTermProjecr(){

    const[isTeam, setisTeam] =useState (null); 

    const handleteam =(isTeam : any) =>{
        setisTeam(isTeam);
    }
    const myPage ="Sakda term project";
    const myName ="Sakda Prasert";
    const myStudID ="026730491013-1";
    
    const tpSingle = myTermProj.filter(tptmp=> {
        if(isTeam === null)
       return  tptmp.tpTeam === true || tptmp.tpTeam === false
    else
       return tptmp.tpTeam === isTeam;
        
    }
      
    );
    
    const handleClick = (tpID : any , ind : any ) =>{
        let myOutput ="";
        let myObj =myTermProj[ind];
        
        myOutput+= "[ข้อมูลโปรเจต]\n";
        myOutput+= "รหัส(ID):"+myObj.tpID+"\n";
        myOutput+= "รายวิชา (Sudject):"+myObj.tpSudject+"\n"
         myOutput+= "หน้าปก(Cover):"+myObj.tpCover+"\n"
         myOutput+= "ลิ้งค์ (URL):"+myObj.tpUrl+"\n"
         myOutput+= "มีกี่คน (URL):"+myObj.tpTeam+"\n"
         myOutput+= "\n-- Thank you --";
         alert(myOutput)

        // alert("คุณไม่ได้เลือกโปรเจต รหัส:"+ tpId+"|");
    }
const TeamProj = tpSingle.map((tpObj , index ) =>
    <div className="grid grid-cols-5 mx-auto border-gray-300"key = {index}>
<div className="w-32 p-1">
<img src={tpObj.tpCover} className="w-full rounded-full" title={tpObj. tpSudject+"(ID:)"+tpObj.tpID+")"} />
</div>
<div className="p-4 col-span-3 mb-auto">
<h2 className="text-lg font-semibold text-gray-800">{tpObj.tpSudject}</h2>
<p className="text-gray-600 text-sm mt-2">{tpObj.tpTitle}</p>
<ItemTeam isTeam = {tpObj.tpTeam} />
</div>
<div className="p-4 mb-auto">
<a href={tpObj.tpUrl} className="bg-indigo-600 text-white rounded-sm hover:bg-indigo-700 
px-10 py-2"
onClick={() => handleClick(tpObj.tpID, index)}
>View</a>

</div>
</div>
);
    return(
        <>
        <Header messenger ={myPage}/>
        <p className="text-xl m-3 text-center">
            Name: {myName} Studert ID :{myStudID}
        </p>
         <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
        
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        onClick={() => handleteam(null)}>
        [A] ALL
        </button>
        <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
         onClick={() => handleteam(true)}>
        [T] TEAM
        </button>
        <button type="button" className="text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
         onClick={() => handleteam(false)}>
        [S] Single
        </button>
         </div>ป
        <div className="w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6 ">
        {TeamProj}
        </div>
        <h3 className = "w-1/2 grid mx-auto h-100 overflow-auto rounded-2xl border border-gray-300 m-6  ">
            โปรเจตมีจำนวน : {myTermProj   .length} รายการ
        </h3>
        <Footer messenger = "@ 2525 Sakda - "/>
           </>
    );

}

function ItemTeam ({isTeam}) {
if(isTeam)
    return    <p>
              Grop
        </p>
    return (<p>
        Ungrop  
    </p>);
}