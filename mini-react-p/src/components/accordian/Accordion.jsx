import { useState } from 'react'


function Accordion() {
    const faq = [
        {
            id: 1,
            title: "Title",
            desc: "This is Description 1",
        },
        {
            id: 2,
            title: "Title 2",
            desc: "This is Description 2",
        },
        {
            id: 3,
            title: "Title 3",
            desc: "This is Description 3",
        },
    ]
    
    function handleClick(){
        
    }

  return (
    <>
    <h1>Accordion FAQ</h1>

    {faq.map((faqs) => (
        <div key={faqs.id} style={{
            padding: "max(1rem, 2vw)",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}>
            <h2 onClick={handleClick}>{faqs.title}</h2>
            <p>{faqs.desc}</p>
        </div>
    ))}
    </>
  );
}

export default Accordion
