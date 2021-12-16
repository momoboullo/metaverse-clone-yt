import Image from "next/image";
import { useMoralis } from "react-moralis";
import { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";

function Login() {
  const { authenticate } = useMoralis();

  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xfaf3f5,
          maxDistance: 30.0,
        })
      );
    }
    return () => {
      if (vantaEffect) {
        vantaEffect;
      }
    };
  }, [vantaEffect]);

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-center space-y-4">
        {/* PAPA fam logo */}
        <Image
          className="object-cover rounded-full"
          src="https://www.howtogeek.com/wp-content/uploads/2021/08/shutterstock_739699258.png?width=1198&trim=1,1&bg-color=000&pad=1,1"
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className="bg-blue-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to METAVERSE
        </button>
        <h1 className="justify-center items-center -pb-8 pt-10">
          -- Created by{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100033857033325"
            target="_blank"
          >
            Mohamed Ali Boullo
          </a>{" "}
          ❤️ --
        </h1>
      </div>

      <div className="">
        <Image
          src="https://media.istockphoto.com/photos/artificial-intelligence-3d-robot-hand-finger-pointing-in-futuristic-picture-id1345991634?b=1&k=20&m=1345991634&s=170667a&w=0&h=oPVTPJ6EVIAAjErkc_JYUPowZe9Q-dxZg1vdcz-IZmw="
          layout="fill"
          objectFit="cover"
        />
        <div
          className="w-full h-screen z-10 overflow-hidden scrollbar-hide opacity-40"
          ref={vantaRef}
        />
      </div>
    </div>
  );
}

export default Login;
