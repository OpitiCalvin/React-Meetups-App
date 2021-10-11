import React from "react";
import  {useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewmeetupsPage() {
    const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-app-backend-default-rtdb.europe-west1.firebasedatabase.app/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
        history.replace('/');
    });
  }

  return (
    <section>
      <h1>New Meetups page</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewmeetupsPage;
