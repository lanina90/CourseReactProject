import {AiOutlineCompass, AiOutlineHome} from "react-icons/ai";
import {BsArrowClockwise, BsCameraReelsFill, BsEmojiSmile, BsFire} from "react-icons/bs";
import {MdFlutterDash} from "react-icons/md";
import {GiCastle, GiDramaMasks, GiGhost, GiPistolGun, GiRainbowStar} from "react-icons/gi";
import {SiOpenstreetmap} from "react-icons/si";
import React from "react";

export const navigationLinks = {
  menu: [
    {
      to: "/",
      label: "Home",
      icon: <AiOutlineHome size={24}/>
    },
    {
      to: "/discovery",
      label: "Discovery",
      icon: <AiOutlineCompass size={24}/>
    },
    {
      to: "/fresh",
      label: "Fresh movies",
      icon: <BsArrowClockwise size={24}/>
    },
    {
      to: "/trending",
      label: "Trending now",
      icon: <BsFire size={24}/>
    },
    {
      to: "/popMovies",
      label: "Popular Movie",
      icon: <MdFlutterDash size={24}/>
    }
  ],
  genders: [
    {
      to: "/genre/action",
      label: "Action",
      icon: <GiPistolGun size={24}/>
    },
    {
      to: "/genre/adventure",
      label: "Adventure",
      icon: <SiOpenstreetmap size={24}/>
    },
    {
      to: "/genre/comedy",
      label: "Comedy",
      icon: <BsEmojiSmile size={24}/>
    },
    {
      to: "/genre/drama",
      label: "Drama",
      icon: <GiDramaMasks size={24}/>
    },
    {
      to: "/genre/animation",
      label: "Animation",
      icon: <GiRainbowStar size={24}/>
    },
    {
      to: "/genre/fantasy",
      label: "Fantasy",
      icon: <GiCastle size={24}/>
    },
    {
      to: "/genre/documentary",
      label: "Documentary",
      icon: <BsCameraReelsFill size={24}/>
    },
    {
      to: "/genre/horror",
      label: "Horror",
      icon: <GiGhost size={24}/>
    }
  ]
}