import styles from "../../styles/Home.module.scss";
import Image from "next/image";

function MobileNav() {
  return (
    <>
      <div className={styles.container}>
        {/* <div className="flex justify-evenly items-center"> */}
          <div className="grid justify-self-center">
            <Image src="/icons/contactus.png" alt="contactus" width={28} height={28}/>
            <p className="text-white text-xs">Contact</p>
          </div>
          <div className="grid justify-self-center">
            <Image src="/icons/aboutus.png" alt="about us" width={28} height={28}/>
            <p className="text-white text-xs">About</p>
          </div>
          <div className="grid justify-self-center">
            <Image src="/icons/home.png" alt="about us" width={28} height={28}/>
            <p className="text-white text-xs">Home</p>
          </div>
          <div className="grid justify-self-center">
            <Image src="/icons/chat.png" alt="about us" width={28} height={28}/>
            <p className="text-white text-xs">Chat</p>
          </div>
          <div className="grid justify-self-center">
            <Image src="/icons/products.png" alt="about us" width={28} height={28}/>
            <p className="text-white text-xs">Products</p>
          </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default MobileNav;
