import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";


const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { userMetadata, setUserMetaData } = useState(null);

  // useEffect(() => {
  //   const getUserMetadata = async () => {
  //     const domain = "api.twitter.com/2";
  //     const TOKEN = process.env.REACT_APP_BEARER_TOKEN;
      
  //     try {
  //       const accessToken = await getAccessTokenSilently({
  //         audience: `https://${domain}/users`,
  //         scope: "tweet.read users.read bookmark.write",
  //       });

  //       const userDetailsByIdUrl = `https://${domain}/users/${user.sub}`;

  //       console.log('user sub', user?.sub)
  //       const metadataResponse = await fetch(userDetailsByIdUrl, {
  //         headers: {
  //           Authorization: `Bearer ${TOKEN}`,
  //         },
  //       });

  //       const { user_metadata } = await metadataResponse.json();

  //       setUserMetaData(user_metadata);
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   getUserMetadata();
  // }, [getAccessTokenSilently, user?.sub]);

  console.log(user)

  return (
    isAuthenticated && (
      <div>
        <h3>{user.name}</h3>
        <img src={user.picture} alt={user.name} />
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
