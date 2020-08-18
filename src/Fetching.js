import React, { useState, useEffect } from "react";

const FetchFolks = ({ count }) => {

  const [commitHistory, setCommitHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?page=${count}&results=12&seed=folks`)
      .then(res => res.json())
      .then(response => {
        setCommitHistory(response.results);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, [count]);


  return (
    <>
      {isLoading && <p>Loading profiles...</p>}
      
      {commitHistory.map((profile, index) => (
        <div key={index}>
         <>
            <div className="folks-info-wrapper">
              <h2>
                Namn: {profile.name.first}
              </h2>
              <p>Födelseår: {(profile.dob.date.substring(0, 10))}</p>
              <div>
                <img className="folks-image-resposive" src={
                  profile.picture.large ? profile.picture.large : 'https://via.placeholder.com/480?text=Bild+saknas'
                  } alt="profile image" />
                </div>
              </div>
            </>
       </div>
      ))}
    </>
  );
};

export default FetchFolks;
