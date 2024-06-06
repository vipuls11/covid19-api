import React from 'react';
import Netflixcrad from './Netflixcrad';

const Card = () =>{
    const netflixcontent = [
    {   
        id:1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8a3HkLo6V4CsP1aSIAev0k5WcSW6yl1vzqEIamupya6C5OAS0nvhvY0-cW9OM3tLdbYk&usqp=CAU",
      heading: "Stanger things1",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {   
        id:2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8a3HkLo6V4CsP1aSIAev0k5WcSW6yl1vzqEIamupya6C5OAS0nvhvY0-cW9OM3tLdbYk&usqp=CAU",
      heading: "Stanger things2",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {   
        id:3,
      image:
        "https://www.scrolldroll.com/wp-content/uploads/2022/08/stranger-things-best-web-series-2022-819x1024.jpg",
      heading: "Stanger things3",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {   
        id:4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqK6cPSUZTHg58gedDX6XlaJ_ZR6bgPb0kPY1pWwwnLyx_1PqYJTNA7pBlviPkWjCBG4&usqp=CAU",
      heading: "Stanger things4",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {   
        id:5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEK2jvTMvc5G101NUeQg-B51SMK2Fx72G9XRfghQZL8XhF8C0_hJSZhgMzNDX4bx9-sTE&usqp=CAU",
      heading: "Stanger things5",
      content:
        "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const netflixcontentlist = netflixcontent.map((item, pos) => {
    console.log(item);
    return (
      <Netflixcrad
        key={item.id}
        image={item.image}
        heading={item.heading}
        content={item.content}
      />
    );
  });

  return <div className="App">{netflixcontentlist}</div>; 
}
export default Card;
