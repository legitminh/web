import Image from "next/image";
import NavBar from "../../components/navbar"; 
export default function Page() {
  return (
    <main className="">
        <NavBar></NavBar>
        <div className=" bg-white text-black">

            Hello World
            <Image src={"/next.svg"} alt="nextLogo" width={100} height={100}></Image>
        </div>
    </main>
  );
}
