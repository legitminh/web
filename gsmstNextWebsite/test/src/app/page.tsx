import Image from "next/image";
import NavBar from "../components/navbar";
import ItemBox from "../components/itemBox";
export default function Home() {
  return (
    <main className="">
        <NavBar></NavBar>
        <div className=" bg-white text-black h-screen">
            Hello World
            <div className=" mx-[6rem] flex overflow-scroll scroll-mx-8">
              <ItemBox imgLink="vercel.svg" name="Snow White and the Seven Dwarfs' Cottage" rating={5} price={219.99}></ItemBox>
              <ItemBox imgLink="vercel.svg" name="Snow White and the Seven Dwarfs' Cottage" rating={4} price={219.99}></ItemBox>
              <ItemBox imgLink="vercel.svg" name="Snow White and the Seven Dwarfs' Cottage" rating={4.5} price={219.99}></ItemBox>
              <ItemBox imgLink="vercel.svg" name="Snow White and the Seven Dwarfs' Cottage" rating={4.25} price={219.99}></ItemBox>
              <ItemBox imgLink="vercel.svg" name="Snow White and the Seven Dwarfs' Cottage" rating={5} price={219.99}></ItemBox>
            </div>
        </div>
    </main>
  );
}
