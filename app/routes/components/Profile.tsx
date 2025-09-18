export default function Profile(){
    return (
        <>
        <div className="bg-purple-200 min-h-screen p-5">
            <h1 className="text-2xl text-fuchsia-400 text-center bg-purple-700">Profile</h1>
            <div className="p-10 bg-purple-400 rounded">
                <img src="\images/download.jpg" className="rounded-full w-35 shadow-lg border-4 border-purple-700 mx-auto"/>
                <h2 className="text-xl text-center text-fuchsia-400">About Me</h2>
                <p className="text-regula">
                    Name Sakda Prasert <br/>
                    20 years old <br/>
                    NickName tiger <br/>
                    Address 4/8 Moo 7, Bang Kru Subdistrict, Phra Pradaeng District, Samut Prakan Province <br/>
                    phone 097-035-6704 <br/>
                </p>
            </div>
            <div className="p-5 pe-5 pt-3 pb-3 bg-purple-600 rounded-xl w-20 flex justify-center mt-5">
                <a href="/">Back</a>
            </div>
        </div>
        </>
    );
}
