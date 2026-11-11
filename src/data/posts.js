export const categories = [
  { name: "Home Workouts", image: "/images/Home-workout.jpg" },
  { name: "Fitness Tips", image: "/images/fitness-tips.jpg" },
  { name: "Healthy Lifestyle", image: "/images/healthy-food.jpg" },
  { name: "Exercise Guides", image: "/images/squat.jpg" },
];

export const posts = [
  {
    id: 1, title: "10-Minute Home Workout for Beginners", category: "Home Workouts",
    image: "/images/Home-workout.jpg", date: "2026-11-10",
    excerpt: "No equipment needed. A simple 10-minute routine you can do anywhere.",
    content: [
      "You do not need a gym to get started. The World Health Organization recommends that adults do at least 150 to 300 minutes of moderate-intensity aerobic activity per week, plus muscle-strengthening activities on two or more days. Short workouts at home are a practical way to move toward that goal.",
      "This routine has five exercises: jumping jacks, bodyweight squats, knee push-ups, a forearm plank and glute bridges. Do each for 40 seconds, rest 20 seconds, then repeat the full circuit twice. That makes about 10 minutes.",
      "Go at your own pace. If an exercise feels too hard, slow it down or reduce the range of motion. Warm up with an easy march in place for one minute first, and stop if you feel sharp pain or dizziness.",
      "As you get stronger, add a third round or move from knee push-ups to full push-ups. Consistency matters more than intensity, so aim for three or four sessions a week."
    ],
    sources: [{ label: "WHO  Physical activity fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" }]
  },
  {
    id: 2, title: "5 Tips to Stay Consistent With Fitness", category: "Fitness Tips",
    image: "/images/fitness-tips.jpg", date: "2026-11-11",
    excerpt: "Build exercise habits that last with five practical, realistic tips.",
    content: [
        "Starting is easy; sticking with it is hard. Research on habit formation by Lally and colleagues found that it took participants an average of 66 days for a new behaviour to become automatic, with a wide range from 18 to 254 days. Patience is part of the process.",
  "1. Start small. Ten minutes a day is better than an ambitious plan you drop after a week.",
  "2. Schedule it. Put workouts in your calendar like any other appointment.",
  "3. Choose activities you enjoy, whether walking, dancing or cycling.",
  "4. Track progress. A simple note of what you did each day keeps you motivated.",
  "5. Plan rest days and do not quit after a missed session. One missed workout does not undo your progress, so simply continue the next day."
    ],
    sources: [{ label: "Lally P. et al., European Journal of Social Psychology, 2010: How are habits formed", url: "" }]
  },
  {
    id: 3, title: "Building a Balanced Plate", category: "Healthy Lifestyle",
    image: "/images/healthy-food.jpg", date: "2026-11-12",
    excerpt: "A simple guide to eating well without complicated diets.",
    content: [
      "A healthy diet does not need to be complicated. The WHO advises eating at least 400 grams, or five portions, of fruit and vegetables per day, and choosing whole grains, legumes and nuts over refined foods.",
      "A simple way to build a plate is to fill about half with vegetables and fruit, a quarter with whole grains such as brown rice, oats or whole wheat roti, and a quarter with protein such as lentils, beans, eggs, fish or chicken.",
      "The WHO also recommends keeping free sugars below 10 percent of total energy intake and salt below 5 grams (about one teaspoon) per day. Drinking water instead of sugary drinks is an easy first change.",
      "If you have a medical condition or special dietary needs, speak with a doctor or registered dietitian before making big changes."
    ],
    sources: [{ label: "WHO  Healthy diet fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }]
  },
  {
    id: 4, title: "Healthy Sleep Habits for Better Recovery", category: "Healthy Lifestyle",
    image: "/images/habits.jpg", date: "2026-11-13",
    excerpt: "Small changes to your evening routine can improve your sleep.",
    content: [
      "Sleep is when your body recovers, and poor sleep can affect mood, concentration and energy. The US Centers for Disease Control and Prevention (CDC) recommends that adults get at least 7 hours of sleep per night.",
      "Keep a regular schedule by going to bed and waking up at about the same time every day, including weekends. Keep your bedroom dark, quiet and comfortable.",
      "Avoid caffeine in the late afternoon and evening, and avoid large meals right before bed. Try to put screens away for 30 to 60 minutes before sleep.",
      "If you regularly have trouble sleeping or feel very tired during the day, talk to a healthcare professional, as this can be a sign of a sleep problem."
    ],
    sources: [{ label: "CDC  Sleep and Sleep Disorders", url: "https://www.cdc.gov/sleep/" }]
  },
  {
    id: 5, title: "How to Do a Proper Squat", category: "Exercise Guides",
    image: "/images/squat.jpg", date: "2026-11-14",
    excerpt: "A step-by-step form guide for one of the most useful exercises.",
    content: [
      "The squat works your thighs, glutes and core, and mirrors everyday movements like sitting down and standing up. It also counts as a muscle-strengthening activity in WHO guidelines.",
      "Step 1: Stand with feet about shoulder-width apart, toes slightly turned out. Step 2: Keep your chest up and core tight. Step 3: Push your hips back and bend your knees as if sitting into a chair.",
      "Step 4: Lower until your thighs are about parallel to the floor, or as far as you can with good form. Keep your knees in line with your toes and your heels on the floor. Step 5: Push through your heels to stand up.",
      "Common mistakes: knees caving inward, heels lifting, and rounding the lower back. Start with 2 sets of 8 to 10 repetitions, and use a chair behind you for support if needed. Stop if you feel pain in your knees or back."
    ],
    sources: [{ label: "WHO  Physical activity fact sheet", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" }]
  },
];