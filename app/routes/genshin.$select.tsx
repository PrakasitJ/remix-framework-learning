import { useParams } from "@remix-run/react";
import { useState, useEffect } from "react";

export default function CharacterSelect() {
  const initialImgSrc = {
    Jean: {
      character:
        "https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/b51565c6f1298e534e90b6e63332e9c1_4240077663550682265.png",
      banner:
        "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100911195126176.png",
      element: "Wind",
    },
    Amber: {
      character:
        "https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6f0ef40157e95b0d59455c12f4d3f270_6966278935690800707.png",
      banner:
        "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914373368160.png",
      element: "Fire",
    },
    Lisa: {
      character:
        "https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/43922f5162840c215638affedad0459a_3369229991804918602.png",
      banner:
        "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100915123335708.png",
      element: "Thunder",
    },
    Babara: {
      character:
        "https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/6c009f0631eb71e697c2da76b608a51e_679009763713991286.png",
      banner:
        "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100912320729515.png",
      element: "Water",
    },
    Venti: {
      character:
        "https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/22/965e940e6caafe8fbd4bf0e17653000b_4508958090491775485.png",
      banner:
        "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191122/2019112210310529723.png",
      element: "Wind",
    },
  };

  const elementSrc = {
    Wind: "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100911203322835.png",
    Fire: "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100914374175697.png",
    Thunder:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100915123830794.png",
    Water:
      "https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20191009/2019100912281839220.png",
  };

  const params = useParams();
  const [character, setCharacter] = useState(
    initialImgSrc[params.select] || initialImgSrc["Jean"]
  );
  const [key, setKey] = useState(Date.now());
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    if (params.select && character !== initialImgSrc[params.select]) {
      setIsFadingOut(true);
      setTimeout(() => {
        setCharacter(initialImgSrc[params.select] || initialImgSrc["Jean"]);
        setKey(Date.now());
        setIsFadingOut(false);
      }, 400); // Match the duration of your exit animation
    }
  }, [params.select]);

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = new WebSocket("ws://192.168.31.79:8080");
    const reader = new FileReader();
    socket.onmessage = (event) => {
      const newMessage = event.data;
      reader.readAsText(newMessage);
      reader.onload = () => {
        if (params.select && character !== initialImgSrc[reader.result]) {
          setIsFadingOut(true);
          setTimeout(() => {
            setCharacter(initialImgSrc[reader.result] || initialImgSrc["Jean"]);
            setKey(Date.now());
            setIsFadingOut(false);
          }, 400); // Match the duration of your exit animation
        }
      };
    };

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (name:String) => {
    const socket = new WebSocket("ws://192.168.31.79:8080");
    socket.onopen = () => {
      socket.send(name);
    };
  };

  const handleCharacterClick = (name) => {
    if (character !== initialImgSrc[name]) {
      setIsFadingOut(true);
      sendMessage(name);
      setTimeout(() => {
        setCharacter(initialImgSrc[name]);
        setKey(Date.now());
        setIsFadingOut(false);
      }, 400); // Match the duration of your exit animation
    }
  };

  return (
    <div>
      <div className="grid grid-cols-12 gap-0">
        <div className="col-span-3 translate-y-44 translate-x-full">
          <div className="flex justify-center items-center">
            <img
              src={character.banner}
              className={`relative z-10 translate-x-5 ${
                isFadingOut ? "animate-fadeout" : "animate-genshinBanner"
              }`}
              key={key}
            />
            <img
              src={elementSrc[character.element]}
              className={`opacity-15 absolute inset-0 flex justify-center items-center z-0 -translate-x-12 -translate-y-16 ${
                isFadingOut ? "animate-fadeout" : "animate-genshinElement"
              }`}
              key={key + "-element"}
            />
          </div>
        </div>
        <div className="col-span-9">
          <img
            src={character.character}
            className={`object-cover sc ${
              isFadingOut ? "animate-moveout" : "animate-genshinCharacter"
            }`}
            key={key + "-character"}
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-gray-800 bg-opacity-70 p-4 flex justify-center">
        <div className="flex space-x-4">
          {Object.keys(initialImgSrc).map((name) => (
            <img
              key={name}
              src={initialImgSrc[name].character}
              alt={name}
              className="w-20 h-20 object-contain scale-150 rounded-full cursor-pointer border-2 border-transparent hover:border-white"
              onClick={() => handleCharacterClick(name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
