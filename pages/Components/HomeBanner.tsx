import type { NextPage } from "next"
import Image from 'next/image'
import Homebanner from "/public/images/HomePageBanner.png"



const HomeBanner: NextPage = () => {

    return(
        <>
        <div className="mt-8">
            <Image src={Homebanner} alt="Home Banner" height="600"/>
        </div>
        <div className="pt-4 text-center px-4">
            <p className="text-indigo-600 font-semibold">One stop shop for all your industrial and project requisites</p>
        </div>

        </>
    )
}

export default HomeBanner;