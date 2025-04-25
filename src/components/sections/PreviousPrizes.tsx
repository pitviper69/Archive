export const PreviousPrizes = () => {
    return (
        <>
            <h2 className="mt-20 text-center font-bf-header uppercase tracking-wide font-bold text-white text-7xl text-shadow-bf">What's In it for you?</h2>
            <img className="m-auto max-w-lg" src="/src/assets/underline.svg"/>
            <p className="max-w-sm m-auto text-center font-bf-header text-white text-4xl pt-3">Prizes that we’ve given away before to talentless losers just like you.</p>
            <div className="flex flex-row justify-evenly m-auto max-w-5xl">
                <div className="relative p-6 max-w-2xs">
                    <div
                        className="bg-prev-prize rounded-t-full absolute h-[72%] blur-sm left-0 right-0 w-full top-[100px] z-0"></div>
                    <div className=" w-[80%] m-auto z-10 relative">
                        <img className="w-full" src="/src/assets/20k-giftcard.png"/>
                    </div>
                    <div className="h-[200px] p-2 relative z-10">
                        <h2 className="text-white text-center text-shadow-bf-sm font-bold text-[32px] uppercase tracking-wider font-bf-header"> Pit
                            Viper Gift Card</h2>
                        <p className="font-rhodium text-center text-white">
                            The MacDaddy of gift cards. $20,000 in pit vipers, apparel, gear, random bullshit, and
                            whatever else our bosses decided.
                        </p>
                    </div>
                </div>
                <div className="relative p-6 max-w-2xs">
                    <div
                        className="bg-prev-prize rounded-t-full absolute h-[72%] blur-sm left-0 right-0 w-full top-[100px] z-0"></div>
                    <div className=" w-[80%] m-auto z-10 relative">
                        <img className="w-full" src="/src/assets/truxedo-3.png"/>
                    </div>
                    <div className="h-[200px] p-2 relative z-10">
                        <h2 className="text-white text-center text-shadow-bf-sm font-bold text-[32px] uppercase tracking-wider font-bf-header">Canadian Truxedo</h2>
                        <p className="font-rhodium text-center text-white">
                            A Jruck? A trean? An OBS Ford F-whatever wearing Wrangler jeans? Does a truck wear jeans over the bed or just the wheels?
                        </p>
                    </div>
                </div>
                <div className="relative p-6 max-w-2xs">
                    <div
                        className="bg-prev-prize rounded-t-full absolute h-[72%] blur-sm left-0 right-0 w-full top-[100px] z-0"></div>
                    <div className=" w-[80%] m-auto z-10 relative">
                        <img className="w-full" src="/src/assets/glenplake-heliski-1-fullsize.png"/>
                    </div>
                    <div className="h-[200px] p-2 relative z-10">
                        <h2 className="text-white text-center text-shadow-bf-sm font-bold text-[32px] uppercase tracking-wider font-bf-header">Heli-Skiing Vacation</h2>
                        <p className="font-rhodium text-center text-white">
                            An all inclusive Heli Ski Vacation from Alaska Heli Skiing in Haines, AK.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}