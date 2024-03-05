import React from "react";
import Listing from './Listing'


const Board = () => {
    return (
        <div className="Board">
            <div class="flex-container">

                <Listing listing="Disneyland Park" location="Anaheim, CA" link="https://disneyland.disney.go.com/destinations/disneyland/" image="https://cdn1.parksmedia.wdprapps.disney.com/resize/mwImage/1/1600/900/75/dam/disneyland/attractions/disneyland/sleeping-beauty-castle-walkthrough/sleeping-beauty-castle-exterior-16x9.jpg?1699632197159" />
                <Listing listing="Disneyland California Adventure" location="Anaheim, CA" link="https://disneyland.disney.go.com/destinations/disney-california-adventure/" image="https://upload.wikimedia.org/wikipedia/commons/e/e6/Pixarpiersunset2019_%28cropped%29.jpg" />
                <Listing listing="Universal Studios Hollywood" location="Los Angeles, CA" link="https://www.universalstudioshollywood.com/web/en/us" image="https://a.cdn-hotels.com/gdcs/production90/d635/57124149-9b01-4768-8c0f-8a195ec181bb.jpg" />
                <Listing listing="Legoland California" location="Carlsbad, CA" link="https://www.legoland.com/california/" image="https://www.legoland.com/california/media/150ipzxc/25th-birthday-cake-miniland.jpg"/>
                <Listing listing="Seaworld San Diego" location="San Diego, CA" link="https://seaworld.com/san-diego/" image="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2022-12/57ddfdd0-5506-4e77-a46c-ed0eeb8a7cd3.jpeg?h=1d0fc9ba&itok=29WwEP0M"/>
                <Listing listing="Belmont Park" location="San Diego, CA" link="https://www.belmontpark.com/" image="https://media.cntraveler.com/photos/5d80fa9508534100083376d8/16:9/w_2560,c_limit/00-sandiego-belmontpark-2019-GettyImages-917493306.jpg"/>
                <Listing listing="Knotts Berry Farm" location="Buena Park, CA" link="https://www.knotts.com/" image="https://s.hdnux.com/photos/01/33/17/12/23917186/8/rawImage.jpg"/>
                <Listing listing="Six Flags" location="Los Angeles, CA" link="https://www.sixflags.com/magicmountain" image="https://media.california.com/media/_versions_jpg/articlecomponent/shutterstock_2260831329__7943x5295____v1220x__.jpg"/>
                <Listing listing="Hershey Park" location="Hershey, PA" link="https://www.hersheypark.com/" image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/4f/cb/5d/hersheypark.jpg?w=1200&h=-1&s=1"/>
                <Listing listing="Disney World" location="Anaheim, CA" link="https://disneyworld.disney.go.com/" image="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iYMAgAF8DNvM/v1/-1x-1.jpg" />
                <Listing listing="Nickelodeon Universe" location="Bloomington, MN" link="https://nickelodeonuniverse.com/home/" image="https://www.exploreminnesota.com/sites/default/files/2022-10/rock-bottom-plunge-credit-mall-of-america.jpg" />

            </div>
        </div>
    )
}
export default Board;