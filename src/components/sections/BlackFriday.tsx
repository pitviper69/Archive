import { BlackFridayHeader } from "./BlackFridayHeader.tsx";
import { BlackFridayIntro } from "./BlackFridayIntro.tsx";
import {PreviousPrizes} from "./PreviousPrizes.tsx";
import CurrentPrizes from "./CurrentPrizes.tsx";
import FAQ  from "./FAQ.tsx";

export const BlackFriday = () => {
    return (
       <>
           <div className="bg-[url(/assets/tiling-background-1080.jpg)] bg-repeat bg-contain pt-40">
               <BlackFridayHeader />
               <BlackFridayIntro/>
               <PreviousPrizes/>
               <CurrentPrizes />
               <FAQ/>

           </div>
       </>
    )
}