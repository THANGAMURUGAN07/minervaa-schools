import ParticlesBackground from './ParticlesBackground';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  category: string;
  questions: { question: string; answer: string }[];
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqData: FAQ[] = [
    {
      category: 'Admissions',
      questions: [
        {
          question: 'What is the admission process?',
          answer:
            'The admission process begins with filling out an application form available at our office or online. This is followed by an interaction with the child and parents. Once approved, you will receive an admission letter with details about fees and formalities.',
        },
        {
          question: 'What age groups do you accept?',
          answer:
            'We accept children from age 2.5 years for Pre-KG to age 14 for Grade 8. Age criteria are strictly followed as per CBSE guidelines.',
        },
        {
          question: 'What documents are required for admission?',
          answer:
            'Required documents include: Birth certificate, Address proof, Previous school transfer certificate (if applicable), Passport size photographs, Aadhar card copy of student and parents.',
        },
        {
          question: 'Is there an entrance exam?',
          answer:
            'For Pre-KG to Grade 2, there is no formal entrance exam, only an informal interaction. For Grades 3 and above, a simple assessment test in Math, English, and General Knowledge is conducted.',
        },
      ],
    },
    {
      category: 'Fees & Payment',
      questions: [
        {
          question: 'What is the fee structure?',
          answer:
            'Fee structure varies by grade and includes tuition, activity fees, and other charges. Detailed fee structure is provided during the admission process. We offer multiple payment options including annual, semi-annual, and quarterly payments.',
        },
        {
          question: 'Are there any additional charges?',
          answer:
            'Additional charges may include transportation (optional), uniform, textbooks, and stationery. Special activity programs or field trips may have separate nominal charges which will be communicated in advance.',
        },
        {
          question: 'Do you offer sibling discounts?',
          answer:
            'Yes, we offer a 10% discount on tuition fees for the second child and 15% for the third child from the same family.',
        },
        {
          question: 'What is the refund policy?',
          answer:
            'Refunds are processed as per school policy. If withdrawal happens before the academic year starts, 80% of fees paid will be refunded. No refunds are applicable once the academic year has commenced.',
        },
      ],
    },
    {
      category: 'Curriculum & Academics',
      questions: [
        {
          question: 'Which curriculum does the school follow?',
          answer:
            'Minervaa Vidhya Mandhir follows the CBSE (Central Board of Secondary Education) curriculum with English as the primary medium of instruction.',
        },
        {
          question: 'What subjects are taught?',
          answer:
            'Core subjects include English, Mathematics, Science, Social Studies, Hindi, and Computer Science. We also offer Music, Art, Physical Education, and Life Skills as part of the comprehensive curriculum.',
        },
        {
          question: 'How do you assess student progress?',
          answer:
            'We follow continuous and comprehensive evaluation (CCE) as per CBSE guidelines. This includes periodic tests, assignments, projects, class participation, and annual examinations. Regular parent-teacher meetings keep parents informed about their child\'s progress.',
        },
        {
          question: 'Do you provide extra coaching?',
          answer:
            'Yes, we offer after-school remedial classes for students who need additional support in specific subjects. We also have enrichment programs for advanced learners.',
        },
      ],
    },
    {
      category: 'Facilities & Safety',
      questions: [
        {
          question: 'What safety measures are in place?',
          answer:
            'Safety is our top priority. We have CCTV surveillance throughout the campus, trained security personnel, controlled entry/exit points, fire safety equipment, first-aid facilities, and a strict visitor policy. All staff undergo background verification.',
        },
        {
          question: 'Is transportation provided?',
          answer:
            'Yes, we provide safe and reliable transportation covering major areas of Pollachi. All buses are equipped with GPS tracking, CCTV cameras, speed governors, and first-aid kits. Each bus has a trained attendant.',
        },
        {
          question: 'What medical facilities are available?',
          answer:
            'We have a well-equipped medical room with a trained nurse available during school hours. Regular health check-ups are conducted. We maintain emergency contact information and have tie-ups with nearby hospitals for emergencies.',
        },
        {
          question: 'How do you handle bullying?',
          answer:
            'We have a zero-tolerance policy towards bullying. Our teachers and counselors are trained to identify and address bullying. We conduct regular workshops on empathy, respect, and kindness. Any reported incidents are taken seriously and handled promptly with appropriate action.',
        },
      ],
    },
    {
      category: 'Parent Engagement',
      questions: [
        {
          question: 'How often are parent-teacher meetings held?',
          answer:
            'Regular parent-teacher meetings are held every quarter. Additionally, parents can schedule appointments with teachers or the principal as needed. We maintain open communication through our mobile app and regular updates.',
        },
        {
          question: 'How can parents track their child\'s progress?',
          answer:
            'Parents receive regular updates through our mobile app, which includes attendance, homework, assessment results, and teacher remarks. Report cards are issued every term with detailed performance analysis.',
        },
        {
          question: 'Can parents visit the school campus?',
          answer:
            'Yes, parents are welcome to visit the school during office hours (9 AM to 4 PM) with prior appointment. We also organize open house events where parents can interact with teachers and visit classrooms.',
        },
        {
          question: 'How does the school communicate with parents?',
          answer:
            'We use multiple channels for communication including our mobile app, SMS, email, phone calls, and notice circulars. Important announcements and emergency information are communicated immediately through all available channels.',
        },
      ],
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <section id="faq" className="relative overflow-hidden py-20 bg-gradient-to-b from-green-50 to-blue-50">
      <ParticlesBackground />
      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold section-title-shine mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Find answers to common questions about our school</p>
        </div>

        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white text-xl mr-4">
                  {categoryIndex + 1}
                </span>
                {category.category}
              </h3>

              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const id = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === id;

                  return (
                    <div
                      key={id}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                      <button
                        onClick={() => toggleAccordion(id)}
                        className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-bold text-gray-800 text-lg pr-4">{faq.question}</span>
                        <ChevronDown
                          className={`w-6 h-6 text-gray-600 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-8 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Still have questions?</h3>
          <p className="text-xl mb-6">We're here to help! Get in touch with us.</p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              }
            }}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 hover:text-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
