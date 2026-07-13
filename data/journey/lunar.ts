export interface Achievement {
  title: string;
  category: string;
  date: string;

  result?: string;
  organizer?: string;
  location?: string;

  summary: string;
  description: string;

  images: string[];
}

export const lunarAchievements: Achievement[] = [
  {
    title: "Inter-house Spelling Competition",

    category: "Competition",

    date: "2073 B.S.",

    result: "Second Position",

    organizer: "Lunar English Boarding School",

    location: "Kathmandu, Nepal",

    summary:
      "The first certificate and achievement of my life.",

    description:
      "This was the very first certificate I received in my academic journey. Although it was an inter-house competition during Class 3, it remains one of my most treasured achievements because it marked the beginning of my confidence in participating in competitions.",

    images: [
      "/journey/lunar/spelling/1.jpg",
    ],
  },

  {
    title:
      "3rd Valley-wide Inter-school Quiz Contest (Divya Gyan Intelligent Cup)",

    category: "Quiz Competition",

    date: "2075 B.S.",

    result: "3rd Runner-up",

    organizer: "Divya Gyan School",

    location: "Dallu, Kathmandu",

    summary:
      "Secured Third Runner-up in a valley-wide inter-school quiz competition.",

    description:
      "Representing Lunar English Boarding School, me and my team participated in the 3rd Valley-wide Inter-school Quiz Contest and secured Third Runner-up among participating schools from across Kathmandu Valley.",

    images: [
      "/journey/lunar/dgic2075/1.jpeg",
      "/journey/lunar/dgic2075/2.jpeg",
      "/journey/lunar/dgic2075/3.jpeg",
      "/journey/lunar/dgic2075/4.jpeg",
      "/journey/lunar/dgic2075/5.jpeg",
      "/journey/lunar/dgic2075/6.jpeg",
      "/journey/lunar/dgic2075/7.jpeg",
      "/journey/lunar/dgic2075/8.jpeg",
      "/journey/lunar/dgic2075/9.jpeg",
      "/journey/lunar/dgic2075/10.jpeg",
      "/journey/lunar/dgic2075/12.jpeg",
      "/journey/lunar/dgic2075/11.jpg",
    ],
  },

  {
    title:
      "4th Valley-wide Inter-school Quiz Contest (Divya Gyan Intelligent Cup)",

    category: "Quiz Competition",

    date: "2076 B.S.",

    result: "Second Position",

    organizer: "Divya Gyan School",

    location: "Dallu, Kathmandu",

    summary:
      "Finished as Second Position in the prestigious Divya Gyan Intelligent Cup.",

    description:
      "A year after securing Third Runner-up, our team improved our performance and finished as Second Position in the next edition of the valley-wide competition.",

    images: ["/journey/lunar/dgic2076/1.jpg",
      "/journey/lunar/dgic2076/2.jpg",],
  },

  {
    title:
      "1st Valley-wide Quiz Competition",

    category: "Quiz Competition",

    date: "2077 B.S.",

    result: "Fourth Position",

    organizer: "National PABSON",

    location: "Kathmandu Valley",

    summary:
      "Competed against Grade 9 and Grade 10 students while studying in Grade 7.",

    description:
      "Despite being only a Grade 7 and 8 student, our team represented our school in a competition largely dominated by senior students from Grades 9 and 10 and secured Fourth Position.",

    images: [
      "/journey/lunar/pabsan2077/1.jpeg",
      "/journey/lunar/pabsan2077/2.jpg", 
    ],
  },

{
  title: "Other Memories and Achievements",

  category: "Academic & Co-curricular",

  date: "2073–2078 B.S.",

  summary:
    "A collection of certificates, participations and inter-house achievements earned during my years at Lunar English Boarding School.",

  description:
    `Throughout my years at Lunar English Boarding School, I actively participated in numerous inter-house and school-level competitions, securing various positions in quizzes, spelling contests, speech competitions, handwriting, essay writing, drawing, general knowledge, and other co-curricular activities. While these certificates may not individually represent major milestones, together they reflect my consistent participation and enthusiasm beyond academics`,

  images: [
    "/journey/lunar/others/1.jpg",
    "/journey/lunar/others/2.jpg",
    "/journey/lunar/others/3.jpg",
  ],
},

  {
    title:
      "Basic Level Education (BLE)",

    category: "Academics",

    date: "2078 B.S.",

    result: "GPA 3.78",

    organizer: "Lunar English Boarding School",

    location: "Kathmandu",

    summary:
      "Successfully completed Basic Level Education.",

    description:
      "Completed Basic Level Education (BLE) with a GPA of 3.78, concluding eleven memorable years at Lunar English Boarding School.",

    images: [
      "/journey/lunar/ble/gradesheet.jpg",
    ],
  },
];