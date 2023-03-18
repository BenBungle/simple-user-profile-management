import React, { useState } from "react";

const UserProfile = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleProfilePictureChange = (event) => {
    setProfilePicture(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      bio,
      phoneNumber,
      email,
      profilePicture,
    });
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        ></textarea>

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="profilePicture">Profile Picture</label>
        {profilePicture && (
          <img src={profilePicture} alt="Profile Picture" width="200" />
        )}
        <input
          type="file"
          id="profilePicture"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default UserProfile;
