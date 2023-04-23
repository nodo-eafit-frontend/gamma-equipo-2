'use client';
/* import React from "react";
import VideoCarousel from "@/components/paginaCausas/VideoCarousel";
import { infoTestimonios } from "@/data/causas/videos";
import PlaylistEmbed from "@/components/paginaCausas/Playlist";

const Testimonios = () => (
    <div>
      <h1 className="col__subtitle">Testimonios</h1>
      <PlaylistEmbed playlistId="PLTu5IPwrEBe-3wDuIueTPYoSFINOJ-vgR&index=1" />
    </div>
  );
  
  export default Testimonios; */



  import React from "react";
  import CardGrid from "../../../components/paginaCausas/CardGrid";
  import infoTestimonios from "@/data/causas/videos";
  
  const Videos = () => {
    const videos = infoTestimonios;
  
    return (
      <div>
        <h1 className="col__subtitle">Testimonios<br/></h1>
        <CardGrid videos={videos} />
      </div>
    );
  };
  
  export default Videos;






/* const Testimonios = () => {
    const videos = infoTestimonios();
    const videoIds = videos.map((videos) => videos.id);

  return (
    <div>
        <h1 className="col__subtitle">Testimonios</h1>
      <VideoCarousel videos={videoIds} />
    </div>
  );
  }
  
  export default Testimonios; */

/*   const Testimonios = () => {
    const videos = [
        { id: 'AiawXUVgnns', titulo: 'Video 1' },
        { id: 'n0fEDFvT-cs', titulo: 'Video 2' },
        { id: 'Dr3ZJ7Z8lb0', titulo: 'Video 3' }
    ];
  
    return (
      <div>
        <h1>TESTIMONIOS</h1>
        <VideoCarousel videos={videos} />
      </div>
    );
  };
  
  export default Testimonios; */