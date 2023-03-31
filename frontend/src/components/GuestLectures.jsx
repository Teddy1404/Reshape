import { TitleText } from "./CustomTexts";

const GuestLectures = () => {
    return (  
        <>  
        <TitleText title={<>Guest Lectures</>} textStyles="text-center" />
            <div className="flex gap-10 mx-auto justify-center">
                <div className="my-20 flex justify-center">
                    <div className="bg-white w-[300px] h-[550px] rounded-xl">
                        <img src="Dr_Satheesh_Reddy.jpg" className="w-[90%] my-4 rounded-xl mx-auto h-[200px]" />
                        <p className="w-[90%] text-md text-left ml-5 my-2">
                        Was the chief guest for the inaugural evening. With his vast expeyin navigation and avionics Design for missile systems he demonstrated exemplary courage and leadership during pandemic.
                        </p><br />
                        <button className="ml-5 my-2 text-white font-bold hover:bg-sky-800 duration-200 transition ease-in bg-sky-500 px-4 py-2 rounded-lg">View More</button>
                        <div className="flex ml-5 my-2">
                            <img src="Dr_Satheesh_Reddy.jpg" className="mt-2 w-[30px] h-[30px] rounded-full" />
                            <div className="ml-2">
                                <h1>
                                    Dr.G.SATHEESH REDDY
                                </h1>
                                <p>
                                    19 March 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                    <div className="bg-white my-20 w-[300px] h-[550px] rounded-xl">
                        <img src="Dr A.S. Pillai.jpg" className="w-[90%] my-4 rounded-xl mx-auto h-[200px]" />
                        <p className="w-[90%] text-md text-left ml-5 my-2">
                        Former CEO and MD of BrahMos Aerospace and recipient of The Padma Shri and Padma Bhushan awards imparted wisdom on the subject of Disruptive Innovations and the Future during the inaugural evening.
                        </p>
                        <button className="ml-5 my-2 text-white font-bold hover:bg-sky-800 duration-200 transition ease-in bg-sky-500 px-4 py-2 rounded-lg">View More</button>
                        <div className="flex ml-5 my-2">
                            <img src="Dr A.S. Pillai.jpg" className="mt-2 w-[30px] h-[30px] rounded-full" />
                            <div className="ml-2">
                                <h1>
                                Dr.A.Sivathanu Pillai
                                </h1>
                                <p>
                                19 March 2021
                                </p>
                            </div>
                        </div>
                    </div>
                
                    <div className="bg-white my-20 w-[300px] h-[550px] rounded-xl">
                        <img src="Pete-Draper.jpg" className="w-[90%] my-4 rounded-xl mx-auto h-[200px]" />
                        <p className="w-[90%] text-md text-left ml-5 my-2">
                        Co-founder of Makuta, a multi winning effects facility was our honored guest for the inaugural evening. His vast experience and his wisdom were a big treat for all film and special effects fans.
                        </p><br />
                        <button className="ml-5 my-2 text-white font-bold hover:bg-sky-800 duration-200 transition ease-in bg-sky-500 px-4 py-2 rounded-lg">View More</button>
                        <div className="flex ml-5 my-2">
                            <img src="Pete-Draper.jpg" className="mt-2 w-[30px] h-[30px] rounded-full" />
                            <div className="ml-2">
                                <h1>
                                Pete Draper
                                </h1>
                                <p>
                                    19 March 2021
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}
 
export default GuestLectures;