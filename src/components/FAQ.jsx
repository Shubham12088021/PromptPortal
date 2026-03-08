import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

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

    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-200">

      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md
              border border-transparent
              hover:border-purple-400
              rounded-xl shadow-md hover:shadow-xl
              transition duration-300"
            >

              {/* QUESTION */}

              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center
                p-6 text-left font-semibold text-lg cursor-pointer"
              >

                {faq.question}

                <FaChevronDown
                  className={`transition-transform duration-300
                  ${active === index ? "rotate-180 text-purple-600" : ""}`}
                />

              </button>

              {/* ANSWER */}

              <div
                className={`overflow-hidden transition-all duration-500
                ${active === index ? "max-h-40 px-6 pb-6 opacity-100"
                                   : "max-h-0 opacity-0"}
                `}
              >

                <p className="text-gray-600 leading-relaxed">
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