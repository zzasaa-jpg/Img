import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import React from 'react'

export default function Image() {
    const [imageUrl, setImageUrl] = useState('');
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [loader, setLoader] = useState(true);
    
    useEffect(() => {
        const fetchRandomImage = async () => {
            try {
                const response = await axios.get('https://source.unsplash.com/random'
                );

                setImageUrl(response.request.responseURL);
                setLoader(false);
                const storedLikes = localStorage.getItem(response.request.responseaURL);
                if(storedLikes){
                    setLikeCount(Number(storedLikes));
                }
            } catch (error) {
                console.log('Error fetching random image:', error);
            }
        }

        fetchRandomImage();
    }, [])

    const handleLike = () => {
        if (!liked) {
          setLiked(true);
          setLikeCount(likeCount + 1);
          localStorage.setItem(imageUrl, String(likeCount + 1));
        }
      };

    return (
        <div className="">
            <div className='bg-[#eae6e625] min-h-[470px] w-auto flex flex-col justify-center rounded-[10px] mb-14 shadow-2xl'>{
                loader ? (
                    <Loader/>
                ):(

                    <img className=' w-full h-96 object-cover' src={imageUrl} alt='Not available' />
                )
            }
                <div className=" flex justify-between items-center p-2">
                <button onClick={handleLike} disabled={liked} className=" text-white text-[25px]">{liked? <ion-icon name="thumbs-up"></ion-icon> : <ion-icon name="thumbs-up-outline"></ion-icon>}</button>
                <p className="text-white text-[18px] sm:text-[20px]">Likes: {likeCount}</p>
                </div>
            </div>
        </div>
    )
}
