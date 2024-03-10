import React from "react";
import {CON_URL} from "../utils/constants";
import {useContext} from "react"
import UserContext from "../utils/UserContext"


const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData)
  const {loggedInUser} = useContext(UserContext)

  // Check if resData exists and has the expected structure
 // if (!resData || !resData.data || !resData.data.cloudinaryImageId) {
      // Handle the case when resData is undefined or lacks expected properties
     // return <div>Error: Invalid restaurant data</div>;
 // }


    const{
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } =resData;

   

    const imageUrl = `${CON_URL}${cloudinaryImageId}`;
    console.log(imageUrl)

    return(
      <div  data-testid="resCard"className="m-4 p-4 w-[200px] rounded-lg" style={{backgroundColor: "#f0f0f0"}}>
        
        <img className="rounded-lg"
          alt="res-logo"
          src={imageUrl}/>
         
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h5>{cuisines ? cuisines.join(",") : ''}</h5>
        <h5>{avgRating} stars</h5>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    );
   };

   export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
   }
  
   export default RestaurantCard;