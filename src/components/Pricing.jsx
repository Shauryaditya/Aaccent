import React from 'react';

const PricingComponent = () => {
  // Define the plans
  const plans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: 900,
      classesPerWeek: 2,
      durationInMonths: 1,
      features: [
        'Access to basic lessons and resources',
        'One-on-one coaching sessions with a certified instructor',
        'Weekly progress reports',
        'Interactive quizzes and assessments',
        '24/7 email support',
      ],
      subjectLimit: 1,
    },
    {
      id: 'lite',
      name: 'Lite Plan',
      price: 1600,
      classesPerWeek: 3,
      features: [
        'Access to basic and intermediate lessons and resources',
        'Two one-on-one coaching sessions with certified instructors',
        'Weekly progress reports',
        'Interactive quizzes and assessments',
        '24/7 email support',
      ],
      subjectLimit: 2,
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: 2000,
      classesPerWeek: 5,
      features: [
        'Access to comprehensive lessons and resources',
        'Five one-on-one coaching sessions with certified instructors',
        'Weekly progress reports',
        'Interactive quizzes and assessments',
        'Priority 24/7 email and chat support',
        'Exclusive access to workshops and study materials',
      ],
      subjectLimit: 3,
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mb-8" id="pricing-component">
      <h1 className="text-5xl font-bold text-center my-6">Our Packages for regular classes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className="border p-8 bg-white transition duration-300 ease-in-out transform hover:bg-blue-400 hover:scale-105 rounded-md"
          >
            <h2 className="text-xl font-bold text-center">{plan.name}</h2>
            <p className="flex text-gray-700">   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.707 0.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 10.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                    />
                  </svg>Price: {plan.price} Rupees</p>
            <p className="flex text-gray-700">   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.707 0.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 10.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                    />
                  </svg>{plan.classesPerWeek} Classes Weekly</p>
            <p className="flex text-gray-700">   <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.707 0.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 10.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                    />
                  </svg>Choose {plan.subjectLimit} subject(s)</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-green-500 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19.707 0.293a1 1 0 0 1 1.414 1.414l-10 10a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 10.586l9.293-9.293a1 1 0 0 1 1.414 0z"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
