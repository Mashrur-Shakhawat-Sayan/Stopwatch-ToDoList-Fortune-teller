document.addEventListener("DOMContentLoaded", () => {

  const fortunes = [
  {
    text: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا\n(And whoever fears Allah – He will make for him a way out. – Quran 65:2)",
    color: "#1a237e",
    background: "#c5cae9",
    border: "#3949ab",
    font: "Georgia, serif",
    size: "18px"
  },
  {
    text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا\n(Indeed, with hardship [will be] ease. – Quran 94:6)",
    color: "#004d40",
    background: "#b2dfdb",
    border: "#00796b",
    font: "Verdana, Geneva, sans-serif",
    size: "17px"
  },
  {
    text: "وَتَوَكَّلْ عَلَى اللَّهِ وَكَفَى بِاللَّهِ وَكِيلًا\n(And rely upon Allah; and sufficient is Allah as Disposer of affairs. – Quran 33:3)",
    color: "#6a1b9a",
    background: "#f3e5f5",
    border: "#8e24aa",
    font: "Tahoma, Geneva, sans-serif",
    size: "18px"
  },
  {
    text: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً\n(Our Lord, give us in this world good and in the Hereafter good. – Quran 2:201)",
    color: "#1b5e20",
    background: "#c8e6c9",
    border: "#2e7d32",
    font: "\"Courier New\", Courier, monospace",
    size: "17px"
  },
  {
    text: "إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ\n(Indeed, Allah loves those who do good. – Quran 2:195)",
    color: "#01579b",
    background: "#bbdefb",
    border: "#0277bd",
    font: "\"Trebuchet MS\", Helvetica, sans-serif",
    size: "18px"
  },
  {
    text: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ\n(And my success is not but through Allah. – Quran 11:88)",
    color: "#4a148c",
    background: "#ede7f6",
    border: "#6a1b9a",
    font: "Palatino, 'Palatino Linotype', serif",
    size: "19px"
  },
  {
    text: "وَلِلَّهِ غَيْبُ السَّمَاوَاتِ وَالْأَرْضِ\n(And to Allah belongs the unseen of the heavens and the earth. – Quran 35:3)",
    color: "#33691e",
    background: "#dcedc8",
    border: "#558b2f",
    font: "Cambria, Georgia, serif",
    size: "18px"
  },
  {
    text: "إِنَّ اللَّهَ كَانَ عَلَى كُلِّ شَيْءٍ قَدِيرًا\n(Indeed, Allah is over all things competent. – Quran 2:20)",
    color: "#b71c1c",
    background: "#ffcdd2",
    border: "#d32f2f",
    font: "\"Times New Roman\", Times, serif",
    size: "17px"
  },
  {
    text: "وَعَسَى أَنْ تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ\n(And it may be that you dislike a thing which is good for you. – Quran 2:216)",
    color: "#1a237e",
    background: "#c5cae9",
    border: "#3949ab",
    font: "\"Lucida Sans\", \"Lucida Grande\", sans-serif",
    size: "18px"
  },
  {
    text: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا\n(And worship Allah and associate nothing with Him. – Quran 4:36)",
    color: "#bf360c",
    background: "#ffe0b2",
    border: "#e65100",
    font: "Arial, Helvetica, sans-serif",
    size: "18px"
  },
  {
    text: "رَبِّ اشْرَحْ لِي صَدْرِي\n(My Lord, expand for me my chest. – Quran 20:25)",
    color: "#0d47a1",
    background: "#bbdefb",
    border: "#1976d2",
    font: "Verdana, Geneva, sans-serif",
    size: "18px"
  },
  {
    text: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا\n(Our Lord, let not our hearts deviate after You have guided us. – Quran 3:8)",
    color: "#1b5e20",
    background: "#dcedc8",
    border: "#2e7d32",
    font: "Georgia, serif",
    size: "17px"
  },
  {
    text: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي\n(My Lord, make me steadfast in prayer and [raise] among my descendants. – Quran 14:40)",
    color: "#4a148c",
    background: "#ede7f6",
    border: "#6a1b9a",
    font: "Tahoma, Geneva, sans-serif",
    size: "18px"
  },
  {
    text: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ\n(Our Lord, grant us from our spouses and offspring comfort to our eyes. – Quran 25:74)",
    color: "#01579b",
    background: "#bbdefb",
    border: "#0277bd",
    font: "\"Trebuchet MS\", Helvetica, sans-serif",
    size: "18px"
  },
  {
    text: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ\n(And We made from water every living thing. – Quran 21:30)",
    color: "#006064",
    background: "#b2dfdb",
    border: "#00838f",
    font: "Palatino, 'Palatino Linotype', serif",
    size: "17px"
  },
  {
    text: "فَاسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا\n(So seek forgiveness of your Lord; indeed He is ever Forgiving. – Quran 71:10)",
    color: "#4e342e",
    background: "#d7ccc8",
    border: "#6d4c41",
    font: "Cambria, Georgia, serif",
    size: "18px"
  },
  {
    text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَل لَهُ نُورًا\n(And whoever fears Allah – He will make for him light. – Quran 64:16)",
    color: "#1b5e20",
    background: "#c8e6c9",
    border: "#2e7d32",
    font: "Arial, Helvetica, sans-serif",
    size: "18px"
  },
  {
    text: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ\n(Indeed, Allah and His angels send blessings upon the Prophet. – Quran 33:56)",
    color: "#6a1b9a",
    background: "#f3e5f5",
    border: "#8e24aa",
    font: "Tahoma, Geneva, sans-serif",
    size: "17px"
  },
  {
    text: "وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا\n(And hold firmly to the rope of Allah all together. – Quran 3:103)",
    color: "#0d47a1",
    background: "#bbdefb",
    border: "#1976d2",
    font: "\"Courier New\", Courier, monospace",
    size: "18px"
  }
];


  const fortuneBox = document.getElementById("fortune-box");
  const fortuneText = document.getElementById("fortune-text");

  // Pick random fortune on page load
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  // Apply default style from fortune
  fortuneText.textContent = randomFortune.text;
  fortuneBox.style.color = randomFortune.color;
  fortuneBox.style.backgroundColor = randomFortune.background;
  fortuneBox.style.border = `3px solid ${randomFortune.border}`;
  fortuneBox.style.fontFamily = randomFortune.font;
  fortuneBox.style.fontSize = randomFortune.size;

  // Arrays for cycling button styles
  const fontColors = ["#ff5722", "#e91e63", "#3f51b5", "#009688"];
  const bgColors   = ["#fff9c4", "#ffe0b2", "#c8e6c9", "#bbdefb"];
  const borderColors = ["#795548", "#607d8b", "#ff9800", "#9c27b0"];
  const fontStyles = [
    { font: "Comic Sans MS, cursive, sans-serif", size: "20px" },
    { font: "Arial, Helvetica, sans-serif", size: "18px" },
    { font: "Tahoma, Geneva, sans-serif", size: "19px" },
    { font: "Georgia, serif", size: "18px" }
  ];

  // Track indices for each button
  let fontIndex = 0, bgIndex = 0, borderIndex = 0, styleIndex = 0;

  // Button event listeners
  document.getElementById("font-color-btn").addEventListener("click", () => {
    fortuneBox.style.color = fontColors[fontIndex];
    fontIndex = (fontIndex + 1) % fontColors.length;
  });

  document.getElementById("bg-color-btn").addEventListener("click", () => {
    fortuneBox.style.backgroundColor = bgColors[bgIndex];
    bgIndex = (bgIndex + 1) % bgColors.length;
  });

  document.getElementById("border-color-btn").addEventListener("click", () => {
    fortuneBox.style.border = `3px solid ${borderColors[borderIndex]}`;
    borderIndex = (borderIndex + 1) % borderColors.length;
  });

  document.getElementById("font-style-btn").addEventListener("click", () => {
    fortuneBox.style.fontFamily = fontStyles[styleIndex].font;
    fortuneBox.style.fontSize = fontStyles[styleIndex].size;
    styleIndex = (styleIndex + 1) % fontStyles.length;
  });





});