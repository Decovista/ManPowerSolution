import React, { useState } from 'react';
import './FAQ.css'

const faqData = [
  {
    id: 'q1',
    question: 'What is Manpower Solutions?',
    answer: 'Manpower Solutions is a forward-thinking startup dedicated to revolutionizing education and skill development. We offer industry-relevant courses designed to equip learners with practical knowledge, hands-on training, and career-ready skills.',
  },
  {
    id: 'q2',
    question: 'Who can enroll in your courses?',
    answer: 'Our programs are open to all individuals — students, job seekers, and working professionals — who are looking to enhance their skills, learn new trades, or pursue vocational training for better career opportunities.',
  },
  {
    id: 'q3',
    question: 'What types of courses do you offer?',
    answer: 'We provide a wide range of vocational and technical training programs, including but not limited to solar energy, electronics, mobile repair, driving, hotel management, mechanical work, safety training, computer repair, and more.',
  },
  {
    id: 'q4',
    question: 'Are your courses recognized by any authority or organization?',
    answer: 'Yes, our courses follow industry standards and align with government skill development initiatives. Where applicable, certifications are provided to validate your learning and improve your employability.',
  },
  {
    id: 'q5',
    question: 'Do you provide job placement assistance?',
    answer: 'Absolutely. Our goal is not just to educate but to empower. We collaborate with various industries and companies to provide job placement support for our students after course completion.',
  },
  {
    id:'q6',
    question: 'How do I apply for a course?',
    answer:"You can visit our official website, browse through the list of available courses, and apply online. You may also contact our team directly for guidance and enrollment support."
  }
];

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className='Faq'>
        <h1>Frequently Asked Questions</h1>
      <div className='FAQ-wrapper'>
        <ul>
          {faqData.map(({ id, question, answer }) => (
            <li key={id}>
              <h2 onClick={() => toggleFAQ(id)}>
                {question}{' '}
                <i
                  className={`fa-solid ${
                    activeId === id ? 'fa-chevron-up' : 'fa-chevron-down'
                  }`}
                ></i>
              </h2>
              {activeId === id && <div className='dropItem'>{answer}</div>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FAQ;
