import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {

  const faqs = [
    {
      question: "What is Prompt Engineering?",
      answer:
        "Prompt engineering is the process of designing inputs for AI models so they generate better, more accurate, and useful responses."
    },
    {
      question: "Why is Prompt Engineering important?",
      answer:
        "Well-designed prompts improve AI output quality, reduce errors, and help users interact more effectively with AI tools."
    },
    {
      question: "Who should learn Prompt Engineering?",
      answer:
        "Developers, marketers, researchers, content creators, and anyone working with AI systems can benefit from prompt engineering."
    }
  ];

  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (

    <section className="faq-section">

      <div className="faq-container">

        <h2 className="faq-title">
          Frequently Asked Questions
        </h2>

        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div key={index} className="faq-card">

              <button
                onClick={() => toggle(index)}
                className="faq-question"
              >

                {faq.question}

                <FaChevronDown
                  className={`faq-icon ${active === index ? "rotate" : ""}`}
                />

              </button>

              <div className={`faq-answer ${active === index ? "active" : ""}`}>

                <p>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}

export default FAQ;