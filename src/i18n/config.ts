import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

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
    }
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
    }
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
    }
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
    }
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
      exercises: {
        deadlift: "டெட்லிஃப்ட்",
        bench: "பெஞ்ச் பிரஸ்",
        squat: "ஸ்குவாட்",
        descriptions: {
          deadlift: "உங்கள் டெட்லிஃப்ட் ஒன் ரெப் மேக்ஸை கணக்கிடுங்கள்",
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
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
    }
  }
};

// Get initial language from URL if we're in the browser
const getInitialLanguage = () => {
  if (typeof window !== 'undefined') {
    const match = window.location.pathname.match(/^\/(en|zh|es|fr|ar|bn|pt|ru|ur|hi|ta)/);
    console.log('URL:', window.location.pathname, 'Match:', match);
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
    }
  }).then(() => {
    console.log('i18next initialized with:', {
      currentLang: i18next.language,
      availableLangs: i18next.languages,
      loadedResources: i18next.options.resources ? Object.keys(i18next.options.resources) : []
    });
  });

console.log('Available languages:', Object.keys(resources));
console.log('Current language:', i18next.language);

export default i18next;