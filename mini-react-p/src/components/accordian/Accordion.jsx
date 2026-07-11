import { useState } from 'react'


function Accordion() {

    const [activeItem, setActiveItem] = useState(null);

    const faq = [
        {
            id: 1,
            title: "What is an Accordion in React?",
            desc: "An Accordion is a UI component that displays a list of items where users can expand or collapse each item to show or hide its content. It helps organize information and saves screen space by displaying only the necessary content.",
        },
        {
            id: 2,
            title: "How does an Accordion work?",
            desc: "An Accordion works by storing the currently opened item in React state using 'useState'. When a user clicks on a question:",
        },
        {
            id: 3,
            title: "What React concepts are used in the Accordion project?",
            desc: "This project uses several core React concepts like Functional Components, JSX, useState, Event Hanlding, Conditional Rendering, Dynamic UI updates, Rendering Lists etc.",
        },
        {
            id: 4,
            title: "Why is 'useState' used in the Accordion?",
            desc: "'useState' is used to remember which accordion item is currently open. Without state, React would not know which description should be displayed.",
        },
        {
            id: 5,
            title: "Why do we use conditional rendering in an Accordion?",
            desc: "Conditional rendering allows React to display content only when a specific condition is true. If the item's id matches activeItem, React displays the description. Otherwise, nothing is rendered. This creates the expand and collapse behavior.",
        },
    ]
    
    const handleClick = (id) =>{
        setActiveItem((prev) => (prev === id ? null : id));
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
            <h2 style={{border: "none",
  background: "transparent",
  cursor: "pointer",}} onClick={ () => handleClick(faqs.id)}>{faqs.title}</h2> 
            <div style={{padding: "1em", maxWidth: "50ch"}}>
                {activeItem === faqs.id && <div>{faqs.desc}</div>}
            </div>
        </div>
    ))}
    </>
  );
}

export default Accordion
