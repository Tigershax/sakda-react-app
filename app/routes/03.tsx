import Profile from "./components/Profile";
import Contact from "./components/Contact";

export default function MyProfile(){
    return (
        <>
        < Profile />    
        <h2 className="text-2xl text-fuchsia-400 text-center bg-purple-700">Contact</h2>
<div className="flex items-center m-5 w-1/2 mx-auto">
        <div className="grid grid-cols-3 gap-3 mx-auto">
       < Contact
         label="Sakda PS" 
        link="https://www.facebook.com/share/19Hup7KXqf/?mibextid=qi2Omg" 
        icon="/images/download9.jpg"
        />
         < Contact
        label="Sd_pssss" 
        link="https://www.instagram.com/sd_pssss?igsh=MXRrN2ZvbXJ0aHBybg==" 
        icon="/images/images.png"
         />
        </div>
    </div>
    <div className="p-5 pe-5 pt-3 pb-3 bg-purple-600 rounded-xl w-20 flex justify-center mt-5">
                <a href="/">Back</a>
</div>
        </>
    );
}