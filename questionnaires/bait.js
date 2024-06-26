// Beliefs about Artificial Images Technology (BAIT)
// History:
// - BAIT-Original: Items specifically about CGI and artificial media originally in Makowski et al. (FakeFace study)
// - BAIT-14: Validated in FictionEro (with new items + removal of "I think"), where it was mixed with the 6 most
//   loading items of the positive and negative attitutes dimensions from the General Attitudes towards
//   Artificial Intelligence Scale (GAAIS; Schepman et al., 2020, 2022)
// - BAIT-14: Used in FakeNewsValidation
// - BAIT-12 (Current version): Used in FakeFace2.
//   - Removed 2 GAAIS items (GAAIS_Negative_9, GAAIS_Positive_7)
//   - Replaced "Artificial Intelligence" with "AI
//   - Change display (Analog scale -> Likert scale)

const bait_items = [
    // BAIT items
    "Current AI algorithms can generate very realistic images",
    "Images of faces or people generated by AI always contain errors and artifacts",
    "Videos generated by AI have obvious problems that make them easy to spot as fake",
    "Current AI algorithms can generate very realistic videos",
    "Computer-Generated Images (CGI) are capable of perfectly imitating reality",
    "Technology allows the creation of environments that seem just as real as reality",
    "AI assistants can write texts that are indistinguishable from those written by humans",
    "Documents and paragraphs written by AI usually read differently compared to Human productions",

    // Expectations
    // "Current AI algorithms can already create content that is indistinguishable from reality",

    // Discrimination skills
    // "I can easily distinguish between real and AI-generated images",
    // "I can easily distinguish between real and AI-generated text",

    // Attitutes (adapted from GAAIS; Schepman et al., 2023)
    "AI is dangerous",
    "I am worried about future uses of AI",
    "AI is exciting",
    "Much of society will benefit from a future full of AI",
]

const bait_dimensions = [
    "BAIT_1_ImagesRealistic",
    "BAIT_2_ImagesIssues",
    "BAIT_3_VideosRealistic",
    "BAIT_4_VideosIssues",
    "BAIT_5_ImitatingReality",
    "BAIT_6_EnvironmentReal",
    "BAIT_7_TextRealistic",
    "BAIT_8_TextIssues",
    "BAIT_9_NegativeAttitutes", // GAAIS_Negative_10
    "BAIT_10_NegativeAttitutes", // GAAIS_Negative_15
    "BAIT_11_PositiveAttitutes", // GAAIS_Positive_12
    "BAIT_12_PositiveAttitutes", // GAAIS_Positive_17
]

function bait_questions(
    required = true,
    ticks = ["Disagree", "Agree"], // In Schepman et al. (2022) they removed 'Strongly'
    items = bait_items,
    dimensions = bait_dimensions
) {
    // AI Expertise
    aiexpertise = [
        {
            title: "How knowledgeable do you consider yourself about Artificial Intelligence (AI) technology?",
            name: "BAIT_AI_Knowledge",
            type: "rating",
            displayMode: "buttons",
            isRequired: required,
            minRateDescription: "Not at all",
            maxRateDescription: "Expert",
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        },
    ]

    // Make questions
    var questions = []
    for (const [index, element] of items.entries()) {
        q = {
            title: element,
            name: dimensions[index],
            type: "rating",
            displayMode: "buttons",
            // scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        questions.push(q)
    }

    // Randomize order
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[questions[i], questions[j]] = [questions[j], questions[i]]
    }

    return [
        { elements: aiexpertise },
        {
            elements: questions,
            description:
                "We are interested in your thoughts about Artificial Intelligence (AI). Please read the statements below carefully and indicate the extent to which you agree with each statement.",
        },
    ]
}

// Feedback ========================================================================================================
function bait_feedback(screen = "questionnaire_bait") {
    let dat = jsPsych.data.get().filter({ screen: screen })
    dat = dat["trials"][0]["response"]

    let score = (dat["BAIT_11_PositiveAttitutes"] + dat["BAIT_12_PositiveAttitutes"]) / 2
    let score_pop = 3.89 // Computed in FictionEro
    let text = "XX"
    if (score < score_pop) {
        text = "less"
    } else {
        text = "more"
    }

    let feedback =
        "<h2>Thank you!</h2>" +
        "Based on your answers, it seems like you are <b>" +
        text +
        "</b> positive and enthusiastic about AI (your score = " +
        Math.round((score / 6) * 100, 2) +
        "%) compared to the average population (average score = " +
        Math.round((score_pop / 6) * 100, 2) +
        "%)."
    return feedback
}
