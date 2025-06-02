process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// fetch(URL)
//   .then((response) => {
//     // Handle the api response
//   })
//   .catch((error) => {
//     // Handle the error
//   });

let resp;

// fetch("https://jsonplaceholder.typicode.com/posts?userId=8", {
//   method: "GET",
// })
//   .then((data) => {
//     // console.log(data); // Give me the encoded data
//     return data.json();
//   })
//   .then((response) => {
//     // resp = response;
//     console.log(response);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "My New Post Title",
    body: "This is the body of the post",
    userId: 42,
  }),
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((data) => {
    return data.json();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// RBAC --> Role Based Access Control
// Private Protected Public Routes --> reactJS --> React Router DOM v5
// useState --> reactJS --> React Hooks
// State Management --> Redux, Flux, Zustand, Context API

// async await
// const getPostByID = async (postId) => {
//   const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

//   //   .then .catch way
//   //   fetch(url)
//   //     .then((data) => data.json())
//   //     .then((response) => {})
//   //     .catch((error) => {
//   //       console.log(error);
//   //     });

//   //   async-await way
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getPostByID(1);
