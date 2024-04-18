import React, { useEffect } from 'react';
import axios from 'axios';

const Post = ({ steps }) => {
  useEffect(() => {
    const { submit, firstname, lastname, email } = steps;
    const userObject = {
      submit: submit.value,
      first_name: firstname.value,
      last_name: lastname.value,
      email: email.value,
    };

    const postData = async () => {
      try {
        const res = await axios.post(`/api`, userObject);
        console.log(res.status);
      } catch (error) {
        console.error(error);
      }
    };

    postData();
  }, [steps]);

  return <div>Thank you! Your data was submitted successfully!</div>;
};

export default Post;
