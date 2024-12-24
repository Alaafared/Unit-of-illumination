// الأسئلة والإجابات
const questions = [
    { 
        question: "يتم تحديد المتطلبات الفنية لاضاءة المبني", 
        answers: [
               "نوع اللمبات المستخدمة للإنارة"
            , "شدة الاضاءة",
             "تحديد أماكن ونوعية المخارج العامة (البرايز)",
            "كل ما سبق"], 

        correct: "كل ما سبق"
    },
    { 
        question: "النقاط الواجب مراعاتها عند تصميم الاضاءة االصطناعية", 
        answers: ["أن تعطى المصابيح الفيض الضوئي اللازم لتوفير مستوى الإضاءة المناسب للعمل بالمكان",
             "أن تكون الإضاءة متجانسة بقدر الامكان",
              "أن يتفادى بقدر الامكان وجود ظلال ناتجة عن سوء توزيع المصادر الضوئية بالمكان",
            "ثبات الإضاءة واستقرار الضوء باستمرار",
        "كل ما سبق"], 
        correct: "كل ما سبق"
    },
    { 
        question: "حاصل ضرب الفيض الضوئي في الزمن...............", 
        answers: [
            " كمية الضوء Q", 
            "شدة الضوء", 
            "لون الضوء"], 
        correct: " كمية الضوء Q"
    },
    { 
        question: "هو الانطباع اللوني الذي يحدثه مصدر الضوء.............", 
        answers: ["لون الضوء",
             "الجو اللوني",
             "السطوع"], 
        correct: "لون الضوء" 
    },
    { 
        question: "الكثافة السطحية للفيض الضوئي..............", 
        answers: ["شدة الإضاءة E", "الشدة الضوئية I", "الكفاية الضوئية"], 
        correct: "شدة الإضاءة E"
    },
    { 
        question: "نسبة الفيض الضوئي عند مستوى التشغيل مقسوما على الفيض المتولد من المصباح..............", 
        answers: ["معامل الصيانة ML", "معامل فقد الطاقة LL","معامل الانتفاع UF" ], 
        correct: "معامل الانتفاع UF"
    },
    { 
        question: "طاقة على شكل ذبذبات كهرومغناطيسية تنتشر على خطوط مستقيمةبسرعة الضوء..............", 
        answers: ["الفيض الضوئي", "الاشعاع البصرى", "الضوء"], 
        correct: "الاشعاع البصرى"
    },
    { 
        question: "النسبة بين الفيض الضوئي والقدرة الكهربية المأخوذة...............", 
        answers: ["الضوء", "الكفاية الضوئية", "الفيض الضوئي"], 
        correct: "الكفاية الضوئية"
    },
    { 
        question: "كثافة الفيض الضوئي في الزاوية المجسمة W المقابلة لمساحة السطح المضاء", 
        answers: ["الاشعاع البصرى", "كمية الضوء", "I ( شدة الضوء (الشدة الضوئية"], 
        correct: "I ( شدة الضوء (الشدة الضوئية"
    },
    { 
        question: "ذبذبة كهرومغناطيسية تحس بها العين البشرية من خلال اللون والسطوع", 
        answers: ["لون الضوء", "التدفق الاشعاعي", "الضوء"], 
        correct: "الضوء" 
    },
    { 
        question: "التأثير المشترك لمستوى الاضاءة ولون الضوء ولون السقف والجدران والارضية", 
        answers: ["لون الضوء", "الجو اللوني", "الضوء"], 
        correct: "الجو اللوني"
    },
    { 
        question: "تنفيذات تقنيه مصادر الضوء الاصطناعية ، تحول الطاقة الكهربية الى ضوء", 
        answers: ["لون الضوء", "المصابيح", "الضوء"], 
        correct: "المصابيح"
    },
    { 
        question: " يستخدم الكوارتز المنصهر كغلاف للمصابيح الهالوجينية لأن درجة انصهاره عالية" , 
        answers: ["اجابة صحيحة", "اجابة خاطئة"], 
        correct:  "اجابة صحيحة"
    },
    { 
        question: "تحتوي المصابيح الفلورسنت غاز بخار الزئبق تحت ضغط منخفض لأنه يساعد على ابقائه على هيئة غاز", 
        answers: ["اجابة صحيحة", "اجابة خاطئة"], 
        correct: "اجابة صحيحة" 
    },
    { 
        question: "لابد ان تعطي المصابيح الفيض الضوئي اللازم", 
        answers: ["لتوفير مستوى الاضاءة المناسب", "ليكون مستوى الاضاءة ثابت", "كل ما سبق"], 
        correct: "لتوفير مستوى الاضاءة المناسب"
    },
    { 
        question: "من مميزات  مصابيح الهالوجين", 
        answers: ["الطيف اللونى لهذا النوع قريب من الطيف اللونى لضوء الشمس",
            "لونها اصفر دافئ","ممتازة للانارة المركزة وذلك بسبب الحجم الصغير","سعرها رخيص بشكل عام","كل ما سبق"], 
        correct: "كل ما سبق"
    },
    { 
        question: "من عيوب  مصابيح الهالوجين", 
        answers: ["انها تستهلك طاقة كبيرة",
            "لايمكن استخدام هذا النوع فى الانارة العامة والارتفاعات العالية","فترة العمر القصير والتى لاتتعدى 6000 ساعة مما يرفع من تكاليف الصيانة لهذا النوع","كل ما سبق"], 
        correct: "كل ما سبق"
    },
    {
        question: "من إستخدامات مصابيح الهالوجين..........",
        answers: ["انارة المحلات والمعارض", "انارة الصور واللوحات الفنية","انارة المجسمات الفنية","الانارة المنزلية","كل ما سبق"], 
        correct: "كل ما سبق"
    },
    {
        question: " للمصابيح الفلورسنت نوعان هما مصابيح النيون ( بمحول عادي ) المصابيح المدمجة الموفرة",
        answers: ["اجابة صحيحة", "اجابة خاطئة"], 
        correct: "اجابة صحيحة" 
    },
    {
        question: "إستخدامات مصابيح الهاليد المعدني",
        answers: ["انارة الشوارع","انارة الملاعب","انارة المطارات","انارة الساحات العامة","كل ما سبق"], 
        correct: "كل ما سبق"
    },
    {
        question: "مصابيح الليد عبارة عن لمبة ضوء ......................... أي لا تحتوي على ................",
        answers: [" الكترونية   -  فتيلة", "كهربية   - غاز ","الكترونية  - غاز"], 
        correct: " الكترونية   -  فتيلة"
    },

    {
        question: "تتميز المصابيح عن بعضها من خلال........ ",
        answers: ["القدرة المأخوذة و الفيض الضوئي و الكفاية الضوئية", "لون الضوء و السلوك عند الوصل والفصل و مدة الصلاحية", "كل ما سبق"], 
        correct: "كل ما سبق"
    },

    {
        question: "من الممكن ان تكون الاضاءة وسيلة من وسائل .................... بالمكان عن طريق الاستفادة بالـظل وبلون .................... المستخدم",
        answers: ["الترفيه - الضوء", "الديكور - الحائط","الديكور - الضوء"], 
        correct: "الديكور - الضوء"
    },
    {

        question: "مميزات المصابيح الموفرة للطاقة",
        answers: ["تتميز بأنها تستهلك كمية صغيرة من الطاقة الكهربية","تعطى نفس كمية الضوء الصادرة من المصابيح العادية","عمرها الافتراضي يصل الى خمس أضعاف اللمبات العادية","كل ما سبق"], 
        correct: "كل ما سبق"
    },
   

    { 
        question: "يمكن حساب سرعة الضوء كالتالي ( سرعة الضوء  = ........ *  .......... )", 
        answers: [
            "التردد * معامل الانتفاع", 
            "الزمن الدوري * طول الموجة",
           "التردد * طول الموجة"
        ], 
        correct: "التردد * طول الموجة"
    },
    { 
        question: "الاضاءة المختلطة .........", 
        answers: [
            "الاضاءة المباشرة", 
          "الاضاءة الغير مباشرة",
            "الاضاءة المباشرة والغير مباشرة"
        ], 
        correct: "الاضاءة المباشرة والغير مباشرة"
    },
    { 
        question: "يمكن الحصول على الاضاءة المختلطة .........", 
        answers: [
            "وضع جهاز واحد له خاصية الانتشار", 
          "وضع نوعين أو اكثر من أجهزة الاضاءة",
            "كل ما سبق"
        ], 
        correct:  "كل ما سبق"
    },
    { 
        question: "الغرض من الاضاءة الديكورية والاضاءة المركزة .........", 
        answers: [
           "جذب انتباه الاشخاص الى عناصر أكثر أهمية في المكان", 
         "تجعل المكان يبدو أكثر جاذبية كبيرة في التصميم",
            "كل ما سبق"
        ], 
        correct:  "كل ما سبق"
    },
    { 
        question: "اسم الجهاز المستخدم لحساب شدة الاستضاءة  (الفوتومترات )اللوكسميتر", 
        answers: [
           "اجابة صحيحة", 
         "اجابة خاطئة",
           
        ], 
        correct:  "اجابة صحيحة"
    },
    { 
        question: "طريقة قياس الجهاز المستخدم لحساب شدة الاستضاءة  ", 
        answers: [
          "عند توصيل جهاز قياس ميكرو أميتر لقياس الامبير", 
         " فان تيار صغير يسري بداخله يتناسب هذا التيار مع شد ة االضاءة الساقطة على الخلية ",
         "يتم تدريج جهاز اللوكسميتر مباشرة للقياس بوحده اللوكس",
         "ممكن عمل تيارات اخرى للقياس وذلك بزياد ة مدى القياس",
         "كل ما سبق"
           
        ], 
        correct:  "كل ما سبق"
    },   
    // أضف بقية الأسئلة هنا
];

let shuffledQuestions1 = [];
let currentQuestionIndex1 = 0;
let userAnswers1 = [];

// خلط الأسئلة
function shuffleQuestions() {
    shuffledQuestions1 = [...questions];
    shuffledQuestions1.sort(() => Math.random() - 0.5);
    shuffledQuestions1 = shuffledQuestions1.slice(0, 20); // اختيار أول 10 أسئلة فقط
}

// تحميل السؤال الأول عند فتح الصفحة
document.addEventListener("DOMContentLoaded", () => {
    shuffleQuestions(); // خلط الأسئلة عند تحميل الصفحة
    loadQuestion();
});

function loadQuestion() {
    const questionContainer = document.getElementById("question-text1");
    const answersContainer = document.getElementById("answers1");

    // تحديث نص السؤال
    const currentQuestion = shuffledQuestions1[currentQuestionIndex1];
    questionContainer.innerHTML = currentQuestion.question;

    // تحديث خيارات الإجابة
    answersContainer.innerHTML = ""; // مسح الخيارات القديمة
    currentQuestion.answers.forEach(answer => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${answer}"> ${answer}`;
        answersContainer.appendChild(label);
    });

    // إظهار أو إخفاء الأزرار حسب السؤال
    const nextBtn = document.getElementById("next-btn1");
    const submitBtn = document.getElementById("submit-btn1");

    if (currentQuestionIndex1 === shuffledQuestions1.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

function highlightCorrectAnswer() {
    const currentQuestion = shuffledQuestions1[currentQuestionIndex1];
    const answerLabels = document.querySelectorAll("#answers1 label");

    answerLabels.forEach(label => {
        const input = label.querySelector("input");
        if (input.value === currentQuestion.correct) {
            label.style.backgroundColor = "#5C9E5B"; // أخضر للإجابة الصحيحة
            // label.textContent += " (الإجابة صحيحة)";
            // alert("الاجابة صحيحة")
        } else if (input.checked) {
            label.style.backgroundColor = "#F3360E"; // أحمر للإجابة الخاطئة
            // label.textContent += " (الإجابة خاطئة)";
            // alert("الاجابة خاطئة")
        }
    });
}

let isTransitioning = false; // متغير لتتبع حالة الانتقال

function nextQuestion() {
    if (isTransitioning) {
        return; // منع تكرار الضغط أثناء الانتقال
    }

    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert("يرجى اختيار إجابة قبل الانتقال للسؤال التالي.");
        return; // منع الانتقال إذا لم يتم اختيار إجابة
    }

    userAnswers1.push(selectedAnswer.value); // حفظ الإجابة المختارة
    highlightCorrectAnswer();

    isTransitioning = true; // تعيين حالة الانتقال

    setTimeout(() => {
        currentQuestionIndex1++;
        if (currentQuestionIndex1 < shuffledQuestions1.length) {
            loadQuestion();
        } else {
            submitQuiz();
        }
        isTransitioning = false; // إعادة تعيين حالة الانتقال بعد التحميل
    }, 2000); // الانتقال للسؤال التالي بعد ثانيتين
}

function submitQuiz() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        userAnswers1.push(selectedAnswer.value);
    }

    let score = 0;
    userAnswers1.forEach((answer, index) => {
        if (answer === shuffledQuestions1[index].correct) {
            score++;
        }
    });

    const resultContainer = document.getElementById("result");
    resultContainer.style.display = "block";
    resultContainer.innerHTML = `لقد حصلت على <strong>${score}/${shuffledQuestions1.length}</strong>`;
    let element = document.querySelector('.custom-subtitle');

    if (score === shuffledQuestions1.length) {
        resultContainer.innerHTML += "<br>رائع! إجاباتك كلها صحيحة! مع تمنياتي للجميع بالتفوق  أ / علاء فريد";
        element.style.display = 'none';
    } else {
        resultContainer.innerHTML += "<br>يمكنك تحسين أدائك في المرة القادمة . مع تمنياتي للجميع بالتفوق  أ / علاء فريد";
        element.style.display = 'none';
    }

    document.getElementById("quiz-container").style.display = "none";
}
