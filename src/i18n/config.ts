import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import plateCalculatorEN from './namespaces/plateCalculator/en.json';
import plateCalculatorZH from './namespaces/plateCalculator/zh.json';
import plateCalculatorES from './namespaces/plateCalculator/es.json';
import plateCalculatorFR from './namespaces/plateCalculator/fr.json';
import plateCalculatorAR from './namespaces/plateCalculator/ar.json';
import plateCalculatorBN from './namespaces/plateCalculator/bn.json';
import plateCalculatorPT from './namespaces/plateCalculator/pt.json';
import plateCalculatorRU from './namespaces/plateCalculator/ru.json';
import plateCalculatorUR from './namespaces/plateCalculator/ur.json';
import plateCalculatorHI from './namespaces/plateCalculator/hi.json';
import plateCalculatorTA from './namespaces/plateCalculator/ta.json';
import plateCalculatorDE from './namespaces/plateCalculator/de.json';
import plateCalculatorJA from './namespaces/plateCalculator/ja.json';
import plateCalculatorPA from './namespaces/plateCalculator/pa.json';
import plateCalculatorJV from './namespaces/plateCalculator/jv.json';
import plateCalculatorKO from './namespaces/plateCalculator/ko.json';
import plateCalculatorVI from './namespaces/plateCalculator/vi.json';
import plateCalculatorTR from './namespaces/plateCalculator/tr.json';
import plateCalculatorSW from './namespaces/plateCalculator/sw.json';
import plateCalculatorIT from './namespaces/plateCalculator/it.json';
import plateCalculatorFA from './namespaces/plateCalculator/fa.json';
import plateCalculatorPL from './namespaces/plateCalculator/pl.json';

const resources = {
  en: {
    translation: {
      site: {
        title: "One Rep Max Calculator",
        tagline: "Calculate Your One Rep Max",
        description: "Use our advanced calculator to determine your maximum lifting potential across different exercises.",
        quote: "The only person you are destined to become is the person you decide to be.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "One Rep Max Calculator Blog",
        description: "Read our tips and guides on how to improve your strength, stamina, and overall fitness levels.",
        readMore: "Read More"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "Calculate your deadlift one rep max",
          bench: "Calculate your bench press one rep max",
          squat: "Calculate your squat one rep max"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM Calculator",
        targetWeight: "Target Weight",
        reps: "Repetitions",
        results: "Results",
        calculate: "Calculate",
        plateCalculator: "Plate Loading Calculator",
        plateCalculatorDesc: "Calculate the plates you need to load on your barbell for the desired total weight",
        platesPerSide: "Plates Per Side",
        errors: {
          errorWeightTooLight: "Weight must be heavier than the bar",
          errorImpossibleWeight: "Cannot make exact weight with available plates"
        },
        barWeight: "Bar Weight"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "One Rep Max Calculator | Calculate Your Maximum Lifting Potential",
          description: "Free one rep max calculator for deadlift, bench press, and squat. Get accurate estimates using multiple proven formulas."
        },
        deadlift: {
          title: "Deadlift 1RM Calculator | Calculate Your Max Deadlift",
          description: "Calculate your deadlift one rep max using proven formulas. Get accurate estimates of your maximum deadlift potential."
        },
        bench: {
          title: "Bench Press 1RM Calculator | Calculate Your Max Bench",
          description: "Calculate your bench press one rep max using proven formulas. Get accurate estimates of your maximum bench press potential."
        },
        squat: {
          title: "Squat 1RM Calculator | Calculate Your Max Squat",
          description: "Calculate your squat one rep max using proven formulas. Get accurate estimates of your maximum squat potential."
        }
      }
    },
    plateCalculator: plateCalculatorEN.plateCalculator
  },
  zh: {
    translation: {
      site: {
        title: "一次性最大重量计算器",
        tagline: "计算您的一次性最大重量",
        description: "使用我们的高级计算器来确定您在不同运动中的最大举重潜力。",
        quote: "你注定会成为的那个人，就是你决定要成为的那个人。",
        quoteAuthor: "拉尔夫·沃尔多·爱默生"
      },
      blog: {
        title: "一次性最大重量计算器博客",
        description: "阅读我们的提示和指南，了解如何提高您的力量、耐力和整体健康水平。",
        readMore: "阅读更多"
      },
      exercises: {
        deadlift: "硬拉",
        bench: "卧推",
        squat: "深蹲",
        descriptions: {
          deadlift: "计算您的硬拉一次性最大重量",
          bench: "计算您的卧推一次性最大重量",
          squat: "计算您的深蹲一次性最大重量"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM计算器",
        weight: "重量",
        reps: "重复次数",
        results: "结果",
        calculate: "计算"
      },
      units: {
        kg: "公斤",
        lbs: "磅"
      },
      seo: {
        home: {
          title: "一次性最大重量计算器 | 计算您的最大举重潜力",
          description: "免费的一次性最大重量计算器，用于硬拉、卧推和深蹲。使用多种已证实的公式获得准确的估计。"
        },
        deadlift: {
          title: "硬拉1RM计算器 | 计算您的最大硬拉",
          description: "使用已证实的公式计算硬拉一次最大重量。获得准确的硬拉潜力估计。"
        },
        bench: {
          title: "卧推1RM计算器 | 计算您的最大卧推",
          description: "使用已证实的公式计算卧推一次最大重量。获得准确的卧推潜力估计。"
        },
        squat: {
          title: "深蹲1RM计算器 | 计算您的最大深蹲",
          description: "使用已证实的公式计算深蹲一次最大重量。获得准确的最大深蹲潜力估计。"
        }
      }
    },
    plateCalculator: plateCalculatorZH.plateCalculator
  },
  es: {
    translation: {
      site: {
        title: "Calculadora de Una Repetición Máxima",
        tagline: "Calcula Tu Máxima Repetición",
        description: "Utiliza nuestra calculadora avanzada para determinar tu potencial máximo de levantamiento en diferentes ejercicios.",
        quote: "La única persona en la que estás destinado a convertirte es la persona que decides ser.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Blog de Calculadora de Una Repetición Máxima",
        description: "Lee nuestros consejos y guías sobre cómo mejorar tu fuerza, resistencia y niveles generales de fitness.",
        readMore: "Leer Más"
      },
      exercises: {
        deadlift: "Peso Muerto",
        bench: "Press de Banca",
        squat: "Sentadilla",
        descriptions: {
          deadlift: "Calcula tu peso muerto máximo",
          bench: "Calcula tu press de banca máximo",
          squat: "Calcula tu sentadilla máxima"
        }
      },
      calculator: {
        title: "Calculadora 1RM de {{exercise}}",
        weight: "Peso",
        reps: "Repeticiones",
        results: "Resultados",
        calculate: "Calcular"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "Calculadora de Una Repetición Máxima | Calcula Tu Máxima Repetición",
          description: "Utiliza nuestra calculadora avanzada para determinar tu potencial máximo de levantamiento en diferentes ejercicios. Get accurate estimates using multiple proven formulas."
        },
        deadlift: {
          title: "Calculadora 1RM de Peso Muerto | Calcula Tu Máxima Peso Muerto",
          description: "Calcula tu peso muerto máximo usando formulas probadas. Get accurate estimates of your maximum deadlift potential."
        },
        bench: {
          title: "Calculadora 1RM de Press de Banca | Calcula Tu Máxima Press de Banca",
          description: "Calcula tu press de banca máximo usando formulas probadas. Get accurate estimates of your maximum bench press potential."
        },
        squat: {
          title: "Calculadora 1RM de Sentadilla | Calcula Tu Máxima Sentadilla",
          description: "Calcula tu sentadilla máxima usando formulas probadas. Get accurate estimates of your maximum squat potential."
        }
      }
    },
    plateCalculator: plateCalculatorES.plateCalculator
  },
  hi: {
    translation: {
      site: {
        title: "वन रेप मैक्स कैलकुलेटर",
        tagline: "अपना वन रेप मैक्स कैलकुलेट करें",
        description: "विभिन्न व्यायामों में अपनी अधिकतम लिफ्टिंग क्षमता निर्धारित करने के लिए हमारा उन्नत कैलकुलेटर उपयोग करें।",
        quote: "आप जो व्यक्ति बनने के लिए नियत हैं वह वही व्यक्ति है जो आप बनने का निर्णय लेते हैं।",
        quoteAuthor: "राल्फ वाल्डो एमर्सन"
      },
      blog: {
        title: "One Rep Max Calculator Blog",
        description: "Read our tips and guides on how to improve your strength, stamina, and overall fitness levels.",
        readMore: "Read More"
      },
      exercises: {
        deadlift: "डेडलिफ्ट",
        bench: "बेंच प्रेस",
        squat: "स्क्वाट",
        descriptions: {
          deadlift: "अपना डेडलिफ्ट वन रेप मैक्स कैलकुलेट करें",
          bench: "अपना बेंच प्रेस वन रेप मैक्स कैलकुलेट करें",
          squat: "अपना स्क्वाट वन रेप मैक्स कैलकुलेट करें"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM कैलकुलेटर",
        weight: "वजन",
        reps: "दोहराव",
        results: "परिणाम",
        calculate: "गणना करें"
      },
      units: {
        kg: "किग्रा",
        lbs: "पाउंड"
      },
      seo: {
        home: {
          title: "वन रेप मैक्स कैलकुलेटर | अपना वन रेप मैक्स कैलकुलेट करें",
          description: "विभिन्न व्यायामों में अपनी अधिकतम लिफ्टिंग क्षमता निर्धारित करने के लिए हमारा उन्नत कैलकुलेटर उपयोग करें।"
        },
        deadlift: {
          title: "डेडलिफ्ट 1RM कैलकुलेटर | अपना डेडलिफ्ट मैक्स कैलकुलेट करें",
          description: "अपना डेडलिफ्ट वन रेप मैक्स कैलकुलेट करें। सटीक अनुमान प्राप्त करें।"
        },
        bench: {
          title: "बेंच प्रेस 1RM कैलकुलेटर | अपना बेंच प्रेस मैक्स कैलकुलेट करें",
          description: "अपना बेंच प्रेस वन रेप मैक्स कैलकुलेट करें। सटीक अनुमान प्राप्त करें।"
        },
        squat: {
          title: "स्क्वाट 1RM कैलकुलेटर | अपना स्क्वाट मैक्स कैलकुलेट करें",
          description: "अपना स्क्वाट वन रेप मैक्स कैलकुलेट करें। सटीक अनुमान प्राप्त करें।"
        }
      }
    },
    plateCalculator: plateCalculatorHI.plateCalculator
  },
  ta: {
    translation: {
      site: {
        title: "ஒன் ரெப் மேக்ஸ் கால்குலேட்டர்",
        tagline: "உங்கள் ஒன் ரெப் மேக்ஸை கணக்கிடுங்கள்",
        description: "பல்வேறு பயிற்சிகளில் உங்கள் அதிகபட்ச தூக்கும் திறனை தீர்மானிக்க எங்கள் மேம்பட்ட கால்குலேட்டரைப் பயன்படுத்தவும்.",
        quote: "நீங்கள் யாராக மாற விதிக்கப்பட்டுள்ளீர்களோ அந்த நபராக மாறுவதற்கு நீங்கள் முடிவெடுக்கிறீர்கள்.",
        quoteAuthor: "ரால்ப் வால்டோ எமர்சன்"
      },
      blog: {
        title: "One Rep Max Calculator Blog",
        description: "Read our tips and guides on how to improve your strength, stamina, and overall fitness levels.",
        readMore: "Read More"
      },
      exercises: {
        deadlift: "டெட்லிப்ட்",
        bench: "பெஞ்ச் பிரஸ்",
        squat: "ஸ்குவாட்",
        descriptions: {
          deadlift: "உங்கள் டெட்லிப்ட் ஒன் ரெப் மேக்ஸை கணக்கிடுங்கள்",
          bench: "உங்கள் பெஞ்ச் பிரஸ் ஒன் ரெப் மேக்ஸை கணக்கிடுங்கள்",
          squat: "உங்கள் ஸ்குவாட் ஒன் ரெப் மேக்ஸை கணக்கிடுங்கள்"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM கால்குலேட்டர்",
        weight: "எடை",
        reps: "மறுபடியும்",
        results: "முடிவுகள்",
        calculate: "கணக்கிடு"
      },
      units: {
        kg: "கிலோ",
        lbs: "பவுண்டு"
      }
    },
    plateCalculator: plateCalculatorTA.plateCalculator
  },
  fr: {
    translation: {
      site: {
        title: "Calculateur de Maximum",
        tagline: "Calculez Votre Maximum",
        description: "Utilisez notre calculateur avancé pour déterminer votre potentiel maximum de levage pour différents exercices.",
        quote: "La seule personne que vous êtes destiné à devenir est celle que vous décidez d'être.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Calculateur de Maximum Blog",
        description: "Lisez nos conseils et guides sur comment améliorer votre force, votre résistance et vos niveaux de forme physique générale.",
        readMore: "Lire Plus"
      },
      exercises: {
        deadlift: "Soulevé de Terre",
        bench: "Développé Couché",
        squat: "Squat",
        descriptions: {
          deadlift: "Calculez votre maximum au soulevé de terre",
          bench: "Calculez votre maximum au développé couché",
          squat: "Calculez votre maximum au squat"
        }
      },
      calculator: {
        title: "Calculateur 1RM {{exercise}}",
        weight: "Poids",
        reps: "Répétitions",
        results: "Résultats",
        calculate: "Calculer"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "Calculateur de Maximum | Calculez Votre Potentiel Maximum",
          description: "Calculateur gratuit de maximum pour soulevé de terre, développé couché et squat. Obtenez des estimations précises avec plusieurs formules éprouvées."
        },
        deadlift: {
          title: "Calculateur 1RM Soulevé de Terre | Calculez Votre Maximum",
          description: "Calculez votre maximum au soulevé de terre avec des formules éprouvées. Obtenez des estimations précises de votre potentiel."
        },
        bench: {
          title: "Calculateur 1RM Développé Couché | Calculez Votre Maximum",
          description: "Calculez votre maximum au développé couché avec des formules éprouvées. Obtenez des estimations précises de votre potentiel."
        },
        squat: {
          title: "Calculateur 1RM Squat | Calculez Votre Maximum",
          description: "Calculez votre maximum au squat avec des formules éprouvées. Obtenez des estimations précises de votre potentiel."
        }
      }
    },
    plateCalculator: plateCalculatorFR.plateCalculator
  },
  ar: {
    translation: {
      site: {
        title: "حاسبة الحد الأقصى لتكرار واحد",
        tagline: "احسب الحد الأقصى لتكرار واحد",
        description: "استخدم حاسبتنا المتقدمة لتحديد أقصى إمكانات الرفع في التمارين المختلفة.",
        quote: "الشخص الوحيد الذي من المقدر أن تصبحه هو الشخص الذي تقرر أن تكونه.",
        quoteAuthor: "رالف والدو إيمرسون"
      },
      blog: {
        title: "حاسبة الحد الأقصى لتكرار واحد Blog",
        description: "اقرأ مقالاتنا عن كيفية تحسين قدرتك القوية ومقاومتك المستمرة ومستويات اللياقة العامة.",
        readMore: "قراءة المزيد"
      },
      exercises: {
        deadlift: "الرفعة الميتة",
        bench: "بنش بريس",
        squat: "القرفصاء",
        descriptions: {
          deadlift: "احسب الحد الأقصى للرفعة الميتة",
          bench: "احسب الحد الأقصى للبنش بريس",
          squat: "احسب الحد الأقصى للقرفصاء"
        }
      },
      calculator: {
        title: "حاسبة {{exercise}} 1RM",
        weight: "الوزن",
        reps: "التكرارات",
        results: "النتائج",
        calculate: "احسب"
      },
      units: {
        kg: "كجم",
        lbs: "رطل"
      },
      seo: {
        home: {
          title: "حاسبة الحد الأقصى لتكرار واحد | احسب قدرتك القصوى",
          description: "حاسبة مجانية للحد الأقصى للرفعة الميتة والبنش بريس والقرفصاء. احصل على تقديرات دقيقة باستخدام صيغ مثبتة."
        },
        deadlift: {
          title: "حاسبة 1RM للرفعة الميتة | احسب حدك الأقصى",
          description: "احسب الحد الأقصى للرفعة الميتة باستخدام صيغ مثبتة. احصل على تقديرات دقيقة لقدرتك القصوى."
        },
        bench: {
          title: "حاسبة 1RM للبنش بريس | احسب حدك الأقصى",
          description: "احسب الحد الأقصى للبنش بريس باستخدام صيغ مثبتة. احصل على تقديرات دقيقة لقدرتك القصوى."
        },
        squat: {
          title: "حاسبة 1RM للقرفصاء | احسب حدك الأقصى",
          description: "احسب الحد الأقصى للقرفصاء باستخدام صيغ مثبتة. احصل على تقديرات دقيقة لقدرتك القصوى."
        }
      }
    },
    plateCalculator: plateCalculatorAR.plateCalculator
  },
  bn: {
    translation: {
      site: {
        title: "ওয়ান রেপ ম্যাক্স ক্যালকুলেটর",
        tagline: "আপনার ওয়ান রেপ ম্যাক্স গণনা করুন",
        description: "বিভিন্ন ব্যায়ামে আপনার সর্বোচ্চ ওজন তোলার ক্ষমতা নির্ধারণ করতে আমাদের উন্নত ক্যালকুলেটর ব্যবহার করুন।",
        quote: "আপনি যে ব্যক্তি হতে চান, সেই ব্যক্তি হওয়াই আপনার নিয়তি।",
        quoteAuthor: "র‍্যাল্ফ ওয়াল্ডো এমারসন"
      },
      blog: {
        title: "ওয়ান রেপ ম্যাক্স ক্যালকুলেটর Blog",
        description: "আপনার সর্বোচ্চ ওজন তোলার ক্ষমতা নির্ধারণ করতে আমাদের উন্নত ক্যালকুলেটর ব্যবহার করুন। আপনার সর্বোচ্চ ক্ষমতা গণনা করুন।",
        readMore: "পড়া আরো"
      },
      exercises: {
        deadlift: "ডেডলিফট",
        bench: "বেঞ্চ প্রেস",
        squat: "স্কোয়াট",
        descriptions: {
          deadlift: "আপনার ডেডলিফট ওয়ান রেপ ম্যাক্স গণনা করুন",
          bench: "আপনার বেঞ্চ প্রেস ওয়ান রেপ ম্যাক্স গণনা করুন",
          squat: "আপনার স্কোয়াট ওয়ান রেপ ম্যাক্স গণনা করুন"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM ক্যালকুলেটর",
        weight: "ওজন",
        reps: "পুনরাবৃত্তি",
        results: "ফলাফল",
        calculate: "গণনা করুন"
      },
      units: {
        kg: "কেজি",
        lbs: "পাউন্ড"
      },
      seo: {
        home: {
          title: "ওয়ান রেপ ম্যাক্স ক্যালকুলেটর | আপনার সর্বোচ্চ ক্ষমতা গণনা করুন",
          description: "ডেডলিফট, বেঞ্চ প্রেস এবং স্কোয়াটের জন্য বিনামূল্যে ওয়ান রেপ ম্যাক্স ক্যালকুলেটর। প্রমাণিত সূত্র ব্যবহার করে সঠিক অনুমান পান।"
        },
        deadlift: {
          title: "ডেডলিফট 1RM ক্যালকুলেটর | আপনার সর্বোচ্চ ডেডলিফট গণনা করুন",
          description: "প্রমাণিত সূত্র ব্যবহার করে আপনার ডেডলিফট ওয়ান রেপ ম্যাক্স গণনা করুন। আপনার সর্বোচ্চ ক্ষমতার সঠিক অনুমান পান।"
        },
        bench: {
          title: "বেঞ্চ প্রেস 1RM ক্যালকুলেটর | আপনার সর্বোচ্চ বেঞ্চ প্রেস গণনা করুন",
          description: "প্রমাণিত সূত্র ব্যবহার করে আপনার বেঞ্চ প্রেস ওয়ান রেপ ম্যাক্স গণনা করুন। আপনার সর্বোচ্চ ক্ষমতার সঠিক অনুমান পান।"
        },
        squat: {
          title: "স্কোয়াট 1RM ক্যালকুলেটর | আপনার সর্বোচ্চ স্কোয়াট গণনা করুন",
          description: "প্রমাণিত সূত্র ব্যবহার করে আপনার স্কোয়াট ওয়ান রেপ ম্যাক্স গণনা করুন। আপনার সর্বোচ্চ ক্ষমতার সঠিক অনুমান পান।"
        }
      }
    },
    plateCalculator: plateCalculatorBN.plateCalculator
  },
  pt: {
    translation: {
      site: {
        title: "Calculadora de Repetição Máxima",
        tagline: "Calcule Sua Repetição Máxima",
        description: "Use nossa calculadora avançada para determinar seu potencial máximo de levantamento em diferentes exercícios.",
        quote: "A única pessoa que você está destinado a se tornar é a pessoa que você decide ser.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Calculadora de Repetição Máxima Blog",
        description: "Leia nossos conselhos e guias sobre como melhorar sua força, resistência e níveis gerais de forma física.",
        readMore: "Leia Mais"
      },
      exercises: {
        deadlift: "Levantamento Terra",
        bench: "Supino",
        squat: "Agachamento",
        descriptions: {
          deadlift: "Calcule seu máximo no levantamento terra",
          bench: "Calcule seu máximo no supino",
          squat: "Calcule seu máximo no agachamento"
        }
      },
      calculator: {
        title: "Calculadora 1RM {{exercise}}",
        weight: "Peso",
        reps: "Repetições",
        results: "Resultados",
        calculate: "Calcular"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "Calculadora de Repetição Máxima | Calcule Seu Potencial Máximo",
          description: "Calculadora gratuita de repetição máxima para levantamento terra, supino e agachamento. Obtenha estimativas precisas usando múltiplas fórmulas comprovadas."
        },
        deadlift: {
          title: "Calculadora 1RM de Levantamento Terra | Calcule Seu Máximo",
          description: "Calcule seu máximo no levantamento terra usando fórmulas comprovadas. Obtenha estimativas precisas do seu potencial máximo."
        },
        bench: {
          title: "Calculadora 1RM de Supino | Calcule Seu Máximo",
          description: "Calcule seu máximo no supino usando fórmulas comprovadas. Obtenha estimativas precisas do seu potencial máximo."
        },
        squat: {
          title: "Calculadora 1RM de Agachamento | Calcule Seu Máximo",
          description: "Calcule seu máximo no agachamento usando fórmulas comprovadas. Obtenha estimativas precisas do seu potencial máximo."
        }
      }
    },
    plateCalculator: plateCalculatorPT.plateCalculator
  },
  ru: {
    translation: {
      site: {
        title: "Калькулятор Максимального Веса",
        tagline: "Рассчитайте Свой Максимальный Вес",
        description: "Используйте наш продвинутый калькулятор для определения вашего максимального потенциала в различных упражнениях.",
        quote: "Единственный человек, которым вам суждено стать - это человек, которым вы решите быть.",
        quoteAuthor: "Ральф Уолдо Эмерсон"
      },
      blog: {
        title: "Калькулятор Максимального Веса Blog",
        description: "Читайте наши советы и руководства о том, как улучшить вашу силу, выносливость и общий уровень физической формы.",
        readMore: "Читать больше"
      },
      exercises: {
        deadlift: "Становая Тяга",
        bench: "Жим Лёжа",
        squat: "Приседания",
        descriptions: {
          deadlift: "Рассчитайте максимальный вес в становой тяге",
          bench: "Рассчитайте максимальный вес в жиме лёжа",
          squat: "Рассчитайте максимальный вес в приседаниях"
        }
      },
      calculator: {
        title: "Калькулятор 1RM {{exercise}}",
        weight: "Вес",
        reps: "Повторения",
        results: "Результаты",
        calculate: "Рассчитать"
      },
      units: {
        kg: "кг",
        lbs: "фунты"
      },
      seo: {
        home: {
          title: "Калькулятор Максимального Веса | Рассчитайте Свой Максимальный Потенциал",
          description: "Бесплатный калькулятор максимального веса для становой тяги, жима лёжа и приседаний. Получите точные оценки с помощью проверенных формул."
        },
        deadlift: {
          title: "Калькулятор 1RM Становой Тяги | Рассчитайте Свой Максимум",
          description: "Рассчитайте свой максимальный вес в становой тяге используя проверенные формулы. Получите точные оценки вашего потенциала."
        },
        bench: {
          title: "Калькулятор 1RM Жима Лёжа | Рассчитайте Свой Максимум",
          description: "Рассчитайте свой максимальный вес в жиме лёжа используя проверенные формулы. Получите точные оценки вашего потенциала."
        },
        squat: {
          title: "Калькулятор 1RM Приседаний | Рассчитайте Свой Максимум",
          description: "Рассчитайте свой максимальный вес в приседаниях используя проверенные формулы. Получите точные оценки вашего потенциала."
        }
      }
    },
    plateCalculator: plateCalculatorRU.plateCalculator
  },
  ur: {
    translation: {
      site: {
        title: "ون ریپ میکس کیلکولیٹر",
        tagline: "اپنی زیادہ سے زیادہ صلاحیت کا حساب کریں",
        description: "ڈیڈ لفٹ، بینچ پریس اور اسکواٹ کے لیے مفت ون ریپ میکس کیلکولیٹر۔ متعدد ثابت شدہ فارمولوں کا استعمال کرتے ہوئے درست تخمینہ حاصل کریں۔",
        quote: "آپ جو شخص بننے کے لیے مقدر ہیں وہ وہی شخص ہے جو آپ بننے کا فیصلہ کرتے ہیں۔",
        quoteAuthor: "رالف والڈو ایمرسن"
      },
      blog: {
        title: "ون ریپ میکس کیلکولیٹر Blog",
        description: "اپنی زیادہ سے زیادہ صلاحیت کا حساب کریں۔ متعدد ثابت شدہ فارمولوں کا استعمال کرتے ہوئے درست تخمینہ حاصل کریں۔",
        readMore: "مزید پڑھیں"
      },
      exercises: {
        deadlift: "ڈیڈ لفٹ",
        bench: "بینچ پریس",
        squat: "اسکواٹ",
        descriptions: {
          deadlift: "اپنا ڈیڈ لفٹ ون ریپ میکس حساب کریں",
          bench: "اپنا بینچ پریس ون ریپ میکس حساب کریں",
          squat: "اپنا اسکواٹ ون ریپ میکس حساب کریں"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM کیلکولیٹر",
        weight: "وزن",
        reps: "دہرائی",
        results: "نتائج",
        calculate: "حساب کریں"
      },
      units: {
        kg: "کلو",
        lbs: "پاؤنڈ"
      },
      seo: {
        home: {
          title: "ون ریپ میکس کیلکولیٹر | اپنی زیادہ سے زیادہ صلاحیت کا حساب کریں",
          description: "ڈیڈ لفٹ، بینچ پریس اور اسکواٹ کے لیے مفت ون ریپ میکس کیلکولیٹر۔ متعدد ثابت شدہ فارمولوں کا استعمال کرتے ہوئے درست تخمینہ حاصل کریں۔"
        },
        deadlift: {
          title: "ڈیڈ لفٹ 1RM کیلکولیٹر | اپنا زیادہ سے زیادہ ڈیڈ لفٹ حساب کریں",
          description: "ثابت شدہ فارمولوں کا استعمال کرتے ہوئے اپنا ڈیڈ لفٹ ون ریپ میکس حساب کریں۔ اپنی زیادہ سے زیادہ صلاحیت کا درست تخمینہ حاصل کریں۔"
        },
        bench: {
          title: "بینچ پریس 1RM کیلکولیٹر | اپنا زیادہ سے زیادہ بینچ پریس حساب کریں",
          description: "ثابت شدہ فارمولوں کا استعمال کرتے ہوئے اپنا بینچ پریس ون ریپ میکس حساب کریں۔ اپنی زیادہ سے زیادہ صلاحیت کا درست تخمینہ حاصل کریں۔"
        },
        squat: {
          title: "اسکواٹ 1RM کیلکولیٹر | اپنا زیادہ سے زیادہ اسکواٹ حساب کریں",
          description: "ثابت شدہ فارمولوں کا استعمال کرتے ہوئے اپنا اسکواٹ ون ریپ میکس حساب کریں۔ اپنی زیادہ سے زیادہ صلاحیت کا درست تخمینہ حاصل کریں۔"
        }
      }
    },
    plateCalculator: plateCalculatorUR.plateCalculator
  },
  de: {
    translation: {
      site: {
        title: "One Rep Max Rechner",
        tagline: "Berechne dein One Rep Maximum",
        description: "Nutze unseren fortgeschrittenen Rechner, um dein maximales Hebepotential bei verschiedenen Übungen zu bestimmen.",
        quote: "Die einzige Person, zu der du bestimmt bist zu werden, ist die Person, die du entscheidest zu sein.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "One Rep Max Rechner Blog",
        description: "Lies unsere Tipps und Anleitungen, wie du deine Stärke, Ausdauer und dein allgemeines Fitnessniveau verbessern kannst.",
        readMore: "Mehr lesen"
      },
      exercises: {
        deadlift: "Kreuzheben",
        bench: "Bankdrücken",
        squat: "Kniebeuge",
        descriptions: {
          deadlift: "Berechne dein Kreuzheben One Rep Max",
          bench: "Berechne dein Bankdrücken One Rep Max",
          squat: "Berechne dein Kniebeuge One Rep Max"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM Rechner",
        weight: "Gewicht",
        reps: "Wiederholungen",
        results: "Ergebnisse",
        calculate: "Berechnen"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "One Rep Max Rechner | Berechne dein maximales Hebepotential",
          description: "Kostenloser One Rep Max Rechner für Kreuzheben, Bankdrücken und Kniebeuge. Erhalte genaue Schätzungen mit mehreren bewährten Formeln."
        },
        deadlift: {
          title: "Kreuzheben 1RM Rechner | Berechne dein maximales Kreuzheben",
          description: "Berechne dein Kreuzheben One Rep Max mit bewährten Formeln. Erhalte genaue Schätzungen deines maximalen Kreuzheben-Potentials."
        },
        bench: {
          title: "Bankdrücken 1RM Rechner | Berechne dein maximales Bankdrücken",
          description: "Berechne dein Bankdrücken One Rep Max mit bewährten Formeln. Erhalte genaue Schätzungen deines maximalen Bankdrück-Potentials."
        },
        squat: {
          title: "Kniebeuge 1RM Rechner | Berechne deine maximale Kniebeuge",
          description: "Berechne dein Kniebeuge One Rep Max mit bewährten Formeln. Erhalte genaue Schätzungen deines maximalen Kniebeuge-Potentials."
        }
      }
    },
    plateCalculator: plateCalculatorDE.plateCalculator
  },
  ja: {
    translation: {
      site: {
        title: "1RMカウンター",
        tagline: "1RMを計算する",
        description: "異なるトレーニングでの最大重量挙上力を判断するために、高度な計算機を使用します。",
        quote: "あなたがなるべき人は、あなたがなろうと決めた人です。",
        quoteAuthor: "ラルフ・ワルド・エマーソン"
      },
      blog: {
        title: "1RMカウンター Blog",
        description: "異なるトレーニングでの最大重量挙上力を判断するために、高度な計算機を使用します。",
        readMore: "もっと読む"
      },
      exercises: {
        deadlift: "デッドリフト",
        bench: "ベンチプレス",
        squat: "スクワット",
        descriptions: {
          deadlift: "デッドリフトの1RMを計算する",
          bench: "ベンチプレスの1RMを計算する",
          squat: "スクワットの1RMを計算する"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM計算機",
        weight: "重量",
        reps: "回数",
        results: "結果",
        calculate: "計算"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "1RM計算機 | 最大挙上重量を計算する",
          description: "デッドリフト、ベンチプレス、スクワットのための無料1RM計算機。複数の実証済みの計算式を使用して正確な推定値を取得します。"
        },
        deadlift: {
          title: "デッドリフト1RM計算機 | 最大デッドリフトを計算する",
          description: "実証済みの計算式を使用してデッドリフトの1RMを計算します。最大潜在能力の正確な推定値を取得します。"
        },
        bench: {
          title: "ベンチプレス1RM計算機 | 最大ベンチプレスを計算する",
          description: "実証済みの計算式を使用してベンチプレスの1RMを計算します。最大潜在能力の正確な推定値を取得します。"
        },
        squat: {
          title: "スクワット1RM計算機 | 最大スクワットを計算する",
          description: "実証済みの計算式を使用してスクワットの1RMを計算します。最大潜在能力の正確な推定値を取得します。"
        }
      }
    },
    plateCalculator: plateCalculatorJA.plateCalculator
  },
  pa: {
    translation: {
      site: {
        title: "ਪੱਤਰ ਮਾਕਸ ਕੈਲਕੁਲੇਟਰ",
        tagline: "ਤੁਹਾਰ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ",
        description: "ਵਿਵਿਨ ਵਿਯਾਮਾਂ ਵਿਚ ਤੁਹਾਰ ਸਰਬਾਂ ਵਾਂ ਤੋਲਾ ਕਰਨ ਲਈ ਮਾਮ ਦੇਰ ਉੰਨਤ ਕੈਲਕੁਲੇਟਰ ਵਪਣ ਕਰੋ।",
        quote: "ਤੁਹਾਰ ਨਿਯਤਿ ਜੋ ਤੁਹਾਰ ਨਿਯਤਿ ਹੋਵਾ ਜੋ ਤੁਹਾਰ ਨਿਯਤਿ ਲਈ ਤੁਹਾਰ ਨਿਯਤਿ ਲੈ ਤਾਂ ਤੁਹਾਰ ਨਿਯਤਿ ਹੋਵਾ।",
        quoteAuthor: "ਰਾਲਫ ਵਾਲਡੋ ਏਮਰਸਨ"
      },
      blog: {
        title: "ਪੱਤਰ ਮਾਕਸ ਕੈਲਕੁਲੇਟਰ Blog",
        description: "ਤੁਹਾਰ ਸਰਬਾਂ ਵਾਂ ਤੋਲਾ ਕਰਨ ਲਈ ਮਾਮ ਦੇਰ ਉੰਨਤ ਕੈਲਕੁਲੇਟਰ ਵਪਣ ਕਰੋ। ਤੁਹਾਰ ਸਰਬਾਂ ਕਰਨ ਕਰੋ।",
        readMore: "ਹੋਰ ਪੜ੍ਤਾ ਪੜ੍ਤਾ"
      },
      exercises: {
        deadlift: "ਡੈਡਲਿਫਟ",
        bench: "ਬੈਨਚ ਪ੍ਰੈਸ",
        squat: "ਸਕਵਾਟ",
        descriptions: {
          deadlift: "ਤੁਹਾਰ ਡੈਡਲਿਫਟ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ",
          bench: "ਤੁਹਾਰ ਬੈਨਚ ਪ੍ਰੈਸ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ",
          squat: "ਤੁਹਾਰ ਸਕਵਾਟ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM ਕੈਲਕੁਲੇਟਰ",
        weight: "ਵਾਂ",
        reps: "ਪੁਨਰਾਬ੃ਤਿ",
        results: "ਫਲਾਫਲ",
        calculate: "ਗਣਨਾ ਕਰੋ"
      },
      units: {
        kg: "ਕੈਲੋ",
        lbs: "ਪਾੌਂਡ"
      },
      seo: {
        home: {
          title: "ਪੱਤਰ ਮਾਕਸ ਕੈਲਕੁਲੇਟਰ | ਤੁਹਾਰ ਸਰਬਾਂ ਵਾਂ ਕਰੋ",
          description: "ਡੈਡਲਿਫਟ, ਬੈਨਚ ਪ੍ਰੈਸ ਅਤੇ ਸਕਵਾਟ ਲਈ ਬਿਨਾਮੂਲ੍ਯੇ ਪੱਤਰ ਮਾਕਸ ਕੈਲਕੁਲੇਟਰ। ਪ੍ਰਮਾਣਿਤ ਸੂਤਰ ਵਪਣ ਕਰੋ।"
        },
        deadlift: {
          title: "ਡੈਡਲਿਫਟ 1RM ਕੈਲਕੁਲੇਟਰ | ਤੁਹਾਰ ਸਰਬਾਂ ਡੈਡਲਿਫਟ ਗਣਨਾ ਕਰੋ",
          description: "ਪ੍ਰਮਾਣਿਤ ਸੂਤਰ ਵਪਣ ਕਰੋ ਤੁਹਾਰ ਡੈਡਲਿਫਟ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ। ਤੁਹਾਰ ਸਰਬਾਂ ਕਰਨ ਕਰੋ।"
        },
        bench: {
          title: "ਬੈਨਚ ਪ੍ਰੈਸ 1RM ਕੈਲਕੁਲੇਟਰ | ਤੁਹਾਰ ਸਰਬਾਂ ਬੈਨਚ ਪ੍ਰੈਸ ਕਰੋ",
          description: "ਪ੍ਰਮਾਣਿਤ ਸੂਤਰ ਵਪਣ ਕਰੋ ਤੁਹਾਰ ਬੈਨਚ ਪ੍ਰੈਸ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ। ਤੁਹਾਰ ਸਰਬਾਂ ਕਰਨ ਕਰੋ।"
        },
        squat: {
          title: "ਸਕਵਾਟ 1RM ਕੈਲਕੁਲੇਟਰ | ਤੁਹਾਰ ਸਰਬਾਂ ਸਕਵਾਟ ਕਰੋ",
          description: "ਪ੍ਰਮਾਣਿਤ ਸੂਤਰ ਵਪਣ ਕਰੋ ਤੁਹਾਰ ਸਕਵਾਟ ਪੱਤਰ ਮਾਕਸ ਗਣਨਾ ਕਰੋ। ਤੁਹਾਰ ਸਰਬਾਂ ਕਰਨ ਕਰੋ।"
        }
      }
    },
    plateCalculator: plateCalculatorPA.plateCalculator
  },
  jv: {
    translation: {
      site: {
        title: "Kalkulator 1RM",
        tagline: "Hitung 1RM Anda",
        description: "Gunakan kalkulator lanjutan kami untuk menentukan potensi maksimum otot Anda dalam latihan yang berbeda.",
        quote: "Orang yang Anda dikaitkan untuk menjadi adalah orang yang Anda inginkan untuk menjadi.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Kalkulator 1RM Blog",
        description: "Baca tips dan panduan kami tentang cara meningkatkan kekuatan, ketahanan, dan tingkat kebugaran umum Anda.",
        readMore: "Baca Lebih Lanjut"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "Hitung 1RM Deadlift Anda",
          bench: "Hitung 1RM Bench Press Anda",
          squat: "Hitung 1RM Squat Anda"
        }
      },
      calculator: {
        title: "Kalkulator 1RM {{exercise}}",
        weight: "Berat",
        reps: "Pengulangan",
        results: "Hasil",
        calculate: "Hitung"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "Kalkulator 1RM | Hitung Potensi Maksimum Anda",
          description: "Kalkulator 1RM gratis untuk deadlift, bench press, dan squat. Dapatkan perkiraan yang akurat menggunakan beberapa rumus yang terbukti."
        },
        deadlift: {
          title: "Kalkulator 1RM Deadlift | Hitung Maksimum Deadlift Anda",
          description: "Hitung 1RM Deadlift Anda menggunakan rumus yang terbukti. Dapatkan perkiraan yang akurat dari potensi maksimum Anda."
        },
        bench: {
          title: "Kalkulator 1RM Bench Press | Hitung Maksimum Bench Press Anda",
          description: "Hitung 1RM Bench Press Anda menggunakan rumus yang terbukti. Dapatkan perkiraan yang akurat dari potensi maksimum Anda."
        },
        squat: {
          title: "Kalkulator 1RM Squat | Hitung Maksimum Squat Anda",
          description: "Hitung 1RM Squat Anda menggunakan rumus yang terbukti. Dapatkan perkiraan yang akurat dari potensi maksimum Anda."
        }
      }
    },
    plateCalculator: plateCalculatorJV.plateCalculator
  },
  ko: {
    translation: {
      site: {
        title: "1RM 계산기",
        tagline: "1RM 계산하기",
        description: "다른 운동에서 최대 중량을 결정하기 위해 고급 계산기를 사용하세요.",
        quote: "너가 되어야 할 사람은 너가 되기로 결정한 사람입니다.",
        quoteAuthor: "랄프 왈도 에머슨"
      },
      blog: {
        title: "1RM 계산기 Blog",
        description: "다른 운동에서 최대 중량을 결정하기 위해 고급 계산기를 사용하세요. 최대 중량을 계산하세요.",
        readMore: "더 읽기"
      },
      exercises: {
        deadlift: "데드리프트",
        bench: "벤치 프레스",
        squat: "스쿼트",
        descriptions: {
          deadlift: "데드리프트 1RM 계산하기",
          bench: "벤치 프레스 1RM 계산하기",
          squat: "스쿼트 1RM 계산하기"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM 계산기",
        weight: "무게",
        reps: "반복",
        results: "결과",
        calculate: "계산하기"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "1RM 계산기 | 최대 중량 계산하기",
          description: "데드리프트, 벤치 프레스, 스쿼트를 위한 무료 1RM 계산기. 확인된 공식을 사용하여 정확한 추정치를 얻으세요."
        },
        deadlift: {
          title: "데드리프트 1RM 계산기 | 최대 데드리프트 계산하기",
          description: "확인된 공식을 사용하여 데드리프트 1RM을 계산하세요. 최대 중량의 정확한 추정치를 얻으세요."
        },
        bench: {
          title: "벤치 프레스 1RM 계산기 | 최대 벤치 프레스 계산하기",
          description: "확인된 공식을 사용하여 벤치 프레스 1RM을 계산하세요. 최대 중량의 정확한 추정치를 얻으세요."
        },
        squat: {
          title: "스쿼트 1RM 계산기 | 최대 스쿼트 계산하기",
          description: "확인된 공식을 사용하여 스쿼트 1RM을 계산하세요. 최대 중량의 정확한 추정치를 얻으세요."
        }
      }
    },
    plateCalculator: plateCalculatorKO.plateCalculator
  },
  vi: {
    translation: {
      site: {
        title: "Bàn Tập 1RM",
        tagline: "Tính 1RM Của Bạn",
        description: "Sử dụng máy tính nâng cao của chúng tôi để xác định sức mạnh tối đa của bạn trong các bài tập khác nhau.",
        quote: "Người mà bạn được kết nối để trở thành là người mà bạn quyết định trở thành.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Bàn Tập 1RM Blog",
        description: "Đọc bài viết của chúng tôi về cách tăng cường sức mạnh của bạn trong các bài tập khác nhau.",
        readMore: "Đọc Thêm"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "Tính 1RM Deadlift Của Bạn",
          bench: "Tính 1RM Bench Press Của Bạn",
          squat: "Tính 1RM Squat Của Bạn"
        }
      },
      calculator: {
        title: "Bàn Tập 1RM {{exercise}}",
        weight: "Cân Nặng",
        reps: "Lặp Lại",
        results: "Kết Quả",
        calculate: "Tính"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "Bàn Tập 1RM | Tính Sức Mạnh Tối Đa Của Bạn",
          description: "Bàn Tập 1RM miễn phí cho deadlift, bench press, và squat. Nhận được ước tính chính xác bằng cách sử dụng nhiều công thức đã được chứng minh."
        },
        deadlift: {
          title: "Bàn Tập 1RM Deadlift | Tính Mức Tối Đa Deadlift Của Bạn",
          description: "Tính 1RM Deadlift Của Bạn bằng cách sử dụng công thức đã được chứng minh. Nhận được ước tính chính xác của sức mạnh tối đa."
        },
        bench: {
          title: "Bàn Tập 1RM Bench Press | Tính Mức Tối Đa Bench Press Của Bạn",
          description: "Tính 1RM Bench Press Của Bạn bằng cách sử dụng công thức đã được chứng minh. Nhận được ước tính chính xác của sức mạnh tối đa."
        },
        squat: {
          title: "Bàn Tập 1RM Squat | Tính Mức Tối Đa Squat Của Bạn",
          description: "Tính 1RM Squat Của Bạn bằng cách sử dụng công thức đã được chứng minh. Nhận được ước tính chính xác của sức mạnh tối đa."
        }
      }
    },
    plateCalculator: plateCalculatorVI.plateCalculator
  },
  tr: {
    translation: {
      site: {
        title: "1RM Hesaplama",
        tagline: "1RM Hesaplamak",
        description: "Farklı egzersizlerde maksimum ağırlık kaldırma kapasitesini belirlemek için gelişmiş hesap makinesini kullanın.",
        quote: "Senin olmanı gereken kişi, senin olmağını istediğin kişi.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "1RM Hesaplama Blog",
        description: "Farklı egzersizlerde maksimum ağırlık kaldırma kapasitesini belirlemek için gelişmiş hesap makinesini kullanın. Maksimum ağırlık için doğru tahminler elde edin.",
        readMore: "Daha Fazla Oku"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "1RM Deadlift Hesaplamak",
          bench: "1RM Bench Press Hesaplamak",
          squat: "1RM Squat Hesaplamak"
        }
      },
      calculator: {
        title: "{{exercise}} 1RM Hesaplama",
        weight: "Ağırlık",
        reps: "Tekrar",
        results: "Sonuç",
        calculate: "Hesapla"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "1RM Hesaplama | Maksimum Ağırlık Hesaplamak",
          description: "Deadlift, bench press ve squat için ücretsiz 1RM hesap makinesi. Doğrulanmış formüller kullanarak doğru tahminler elde edin."
        },
        deadlift: {
          title: "1RM Deadlift Hesaplama | Maksimum Deadlift Hesaplamak",
          description: "Doğrulanmış formüller kullanarak 1RM Deadlift Hesaplamak. Maksimum ağırlık için doğru tahminler elde edin."
        },
        bench: {
          title: "1RM Bench Press Hesaplama | Maksimum Bench Press Hesaplamak",
          description: "Doğrulanmış formüller kullanarak 1RM Bench Press Hesaplamak. Maksimum ağırlık için doğru tahminler elde edin."
        },
        squat: {
          title: "1RM Squat Hesaplama | Maksimum Squat Hesaplamak",
          description: "Doğrulanmış formüller kullanarak 1RM Squat Hesaplamak. Maksimum ağırlık için doğru tahminler elde edin."
        }
      }
    },
    plateCalculator: plateCalculatorTR.plateCalculator
  },
  sw: {
    translation: {
      site: {
        title: "Kalkulator 1RM",
        tagline: "Kutoa 1RM Yako",
        description: "Tumia kalkulator yenyejuzi kwa kupata potensiali maksima kwa kila mazingira.",
        quote: "Mtu ambao unapaswa kuwa ni mtu ambao unapaswa kuwa.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Kalkulator 1RM Blog",
        description: "Tumia kalkulator yenyejuzi kwa kupata potensiali maksima kwa kila mazingira. Kutoa matokeo zimeongezeka kutumia mifumo mengi ya formulas zimeongezeka.",
        readMore: "Tumia Matokeo zaidi"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "Kutoa 1RM Deadlift Yako",
          bench: "Kutoa 1RM Bench Press Yako",
          squat: "Kutoa 1RM Squat Yako"
        }
      },
      calculator: {
        title: "Kalkulator 1RM {{exercise}}",
        weight: "Kipaji",
        reps: "Kuzidisha",
        results: "Matokeo",
        calculate: "Kutoa"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "Kalkulator 1RM | Kutoa 1RM Yako",
          description: "Kalkulator 1RM ya kwa deadlift, bench press na squat. Kutoa matokeo zimeongezeka kutumia mifumo mengi ya formulas zimeongezeka."
        },
        deadlift: {
          title: "Kalkulator 1RM Deadlift | Kutoa 1RM Deadlift Yako",
          description: "Kutoa 1RM Deadlift Yako kwa kutumia formulas zimeongezeka. Kutoa matokeo zimeongezeka kwa potensiali maksima."
        },
        bench: {
          title: "Kalkulator 1RM Bench Press | Kutoa 1RM Bench Press Yako",
          description: "Kutoa 1RM Bench Press Yako kwa kutumia formulas zimeongezeka. Kutoa matokeo zimeongezeka kwa potensiali maksima."
        },
        squat: {
          title: "Kalkulator 1RM Squat | Kutoa 1RM Squat Yako",
          description: "Kutoa 1RM Squat Yako kwa kutumia formulas zimeongezeka. Kutoa matokeo zimeongezeka kwa potensiali maksima."
        }
      }
    },
    plateCalculator: plateCalculatorSW.plateCalculator
  },
  it: {
    translation: {
      site: {
        title: "Calcolatore 1RM",
        tagline: "Calcola il tuo 1RM",
        description: "Utilizza il nostro calcolatore avanzato per determinare la tua potenziale massima di sollevamento in diversi esercizi.",
        quote: "La persona a cui sei destinato a diventare è la persona che decidi di essere.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Calcolatore 1RM Blog",
        description: "Leggi i nostri consigli e guide su come migliorare la tua forza, la tua resistenza e i tuoi livelli generali di fitness.",
        readMore: "Leggi di più"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "Calcola il tuo 1RM Deadlift",
          bench: "Calcola il tuo 1RM Bench Press",
          squat: "Calcola il tuo 1RM Squat"
        }
      },
      calculator: {
        title: "Calcolatore 1RM {{exercise}}",
        weight: "Peso",
        reps: "Ripetizioni",
        results: "Risultati",
        calculate: "Calcolare"
      },
      units: {
        kg: "kg",
        lbs: "lbs"
      },
      seo: {
        home: {
          title: "Calcolatore 1RM | Calcola il tuo Potenziale Massimo",
          description: "Calcolatore gratuito di 1RM per deadlift, bench press e squat. Ottieni stime accurate utilizzando molte formule provate."
        },
        deadlift: {
          title: "Calcolatore 1RM Deadlift | Calcola il tuo Massimo",
          description: "Calcola il tuo 1RM Deadlift utilizzando formule provate. Ottieni stime accurate del tuo potenziale massimo."
        },
        bench: {
          title: "Calcolatore 1RM Bench Press | Calcola il tuo Massimo",
          description: "Calcola il tuo 1RM Bench Press utilizzando formule provate. Ottieni stime accurate del tuo potenziale massimo."
        },
        squat: {
          title: "Calcolatore 1RM Squat | Calcola il tuo Massimo",
          description: "Calcola il tuo 1RM Squat utilizzando formule provate. Ottieni stime accurate del tuo potenziale massimo."
        }
      }
    },
    plateCalculator: plateCalculatorIT.plateCalculator
  },
  fa: {
    translation: {
      site: {
        title: "ماشین حساب 1RM",
        tagline: "1RM محاسبه کنید",
        description: "برای تعیین ظرفیت بیشینه بارگیری در تمرین‌های مختلف از ماشین حساب پیشرفته استفاده کنید.",
        quote: "شخصی که باید باشید، شخصی است که تصمیم می‌دهید باشید.",
        quoteAuthor: "رالف والدو إیمرسون"
      },
      blog: {
        title: "ماشین حساب 1RM Blog",
        description: "برای تعیین ظرفیت بیشینه بارگیری در تمرین‌های مختلف از ماشین حساب پیشرفته استفاده کنید. ظرفیت بیشینه بارگیری با استفاده از چند فرمول اثبات شده را بدست آورید.",
        readMore: "مزید بخوانید"
      },
      exercises: {
        deadlift: "Deadlift",
        bench: "Bench Press",
        squat: "Squat",
        descriptions: {
          deadlift: "1RM Deadlift محاسبه کنید",
          bench: "1RM Bench Press محاسبه کنید",
          squat: "1RM Squat محاسبه کنید"
        }
      },
      calculator: {
        title: "ماشین حساب 1RM {{exercise}}",
        weight: "وزن",
        reps: "تکرار",
        results: "نتیجه",
        calculate: "محاسبه کنید"
      },
      units: {
        kg: "کیلوگرم",
        lbs: "پوند"
      },
      seo: {
        home: {
          title: "ماشین حساب 1RM | ظرفیت بیشینه بارگیری محاسبه کنید",
          description: "ماشین حساب 1RM برای deadlift، bench press و squat ارائه می‌دهد. ظرفیت بیشینه بارگیری با استفاده از چند فرمول اثبات شده را بدست آورید."
        },
        deadlift: {
          title: "ماشین حساب 1RM Deadlift | ظرفیت بیشینه Deadlift محاسبه کنید",
          description: "1RM Deadlift با استفاده از فرمول‌های اثبات شده محاسبه کنید. ظرفیت بیشینه بارگیری بدست آورید."
        },
        bench: {
          title: "ماشین حساب 1RM Bench Press | ظرفیت بیشینه Bench Press محاسبه کنید",
          description: "1RM Bench Press با استفاده از فرمول‌های اثبات شده محاسبه کنید. ظرفیت بیشینه بارگیری بدست آورید."
        },
        squat: {
          title: "ماشین حساب 1RM Squat | ظرفیت بیشینه Squat محاسبه کنید",
          description: "1RM Squat با استفاده از فرمول‌های اثبات شده محاسبه کنید. ظرفیت بیشینه بارگیری بدست آورید."
        }
      }
    },
    plateCalculator: plateCalculatorFA.plateCalculator
  },
  pl: {
    translation: {
      site: {
        title: "Kalkulator Maksymalnego Powtórzenia",
        tagline: "Oblicz Swoje Maksymalne Powtórzenie",
        description: "Użyj naszego zaawansowanego kalkulatora, aby określić swój maksymalny potencjał w różnych ćwiczeniach.",
        quote: "Jedyną osobą, którą masz się stać, jest osoba, którą postanawiasz być.",
        quoteAuthor: "Ralph Waldo Emerson"
      },
      blog: {
        title: "Kalkulator Maksymalnego Powtórzenia Blog",
        description: "Użyj naszego zaawansowanego kalkulatora, aby określić swój maksymalny potencjał w różnych ćwiczeniach. Uzyskaj dokładne oszacowania używając sprawdzonych formuł.",
        readMore: "Czytaj Więcej"
      },
      exercises: {
        deadlift: "Martwy Ciąg",
        bench: "Wyciskanie Leżąc",
        squat: "Przysiad",
        descriptions: {
          deadlift: "Oblicz swój maksymalny martwy ciąg",
          bench: "Oblicz swoje maksymalne wyciskanie leżąc",
          squat: "Oblicz swój maksymalny przysiad"
        }
      },
      calculator: {
        title: "Kalkulator 1RM {{exercise}}",
        weight: "Ciężar",
        reps: "Powtórzenia",
        results: "Wyniki",
        calculate: "Oblicz"
      },
      units: {
        kg: "kg",
        lbs: "lb"
      },
      seo: {
        home: {
          title: "Kalkulator Maksymalnego Powtórzenia | Oblicz Swój Maksymalny Potencjał",
          description: "Darmowy kalkulator maksymalnego powtórzenia dla martwego ciągu, wyciskania leżąc i przysiadu. Uzyskaj dokładne oszacowania używając sprawdzonych formuł."
        },
        deadlift: {
          title: "Kalkulator 1RM Martwego Ciągu | Oblicz Swój Maksymalny Martwy Ciąg",
          description: "Oblicz swój maksymalny martwy ciąg używając sprawdzonych formuł. Uzyskaj dokładne oszacowania swojego maksymalnego potencjału."
        },
        bench: {
          title: "Kalkulator 1RM Wyciskania | Oblicz Swoje Maksymalne Wyciskanie",
          description: "Oblicz swoje maksymalne wyciskanie używając sprawdzonych formuł. Uzyskaj dokładne oszacowania swojego maksymalnego potencjału."
        },
        squat: {
          title: "Kalkulator 1RM Przysiadu | Oblicz Swój Maksymalny Przysiad",
          description: "Oblicz swój maksymalny przysiad używając sprawdzonych formuł. Uzyskaj dokładne oszacowania swojego maksymalnego potencjału."
        }
      }
    },
    plateCalculator: plateCalculatorPL.plateCalculator
  }
};

// Get initial language from URL if we're in the browser
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const match = window.location.pathname.match(/^\/(en|zh|es|fr|de|ja|pa|jv|ko|vi|tr|sw|it|fa|ar|bn|pt|ru|ur|hi|ta|pl)/);
    return match ? match[1] : 'en';
  }
  return 'en';
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    ns: ['translation', 'plateCalculator'],
    defaultNS: 'translation'
  });

export default i18next;