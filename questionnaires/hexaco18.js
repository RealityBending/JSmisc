// HEX-ACO-18
// Olaru, G., & Jankowsky, K. (2022). The HEX-ACO-18: Developing an age-invariant HEXACO short scale using ant colony optimization. Journal of Personality Assessment, 104(4), 435-446.
// A selection of HEXACO items using a new methodology to develop a short scale that is invariant across age groups.
const hexaco18_items = [
    "I wouldn't pretend to like someone just to get that person to do favors for me.",
    "I would like to be seen driving around in a very expensive car.", // Reversed
    "I want people to know that I am an important person of high status.", // Reversed
    "Even in an emergency I wouldn't feel like panicking.", // Reversed
    "When I suffer from a painful experience, I need someone to make me feel comfortable.",
    "I sometimes can't help worrying about little things.",
    "I feel that I am an unpopular person.", // Reversed
    "I rarely express my opinions in group meetings.", // Reversed
    "Most people are more upbeat and dynamic than I generally am.", // Reversed
    "I rarely hold a grudge, even against people who have badly wronged me.",
    "I generally accept people's faults without complaining about them.",
    "I find it hard to keep my temper when people insult me.", // Reversed
    "Often when I set a goal, I end up quitting without having reached it.", // Reversed
    "I make a lot of mistakes because I don't think before I act.", // Reversed
    "When working, I sometimes have difficulties due to being disorganized.", // Reversed
    "I think that paying attention to radical ideas is a waste of time.", // Reversed
    "If I had the opportunity, I would like to attend a classical music concert.",
    "I would enjoy creating a work of art, such as a novel, a song, or a painting.",
]

const hexaco18_dimensions = [
    "HEXACO18_HonestyHumility_Sincerity_1_NR",
    "HEXACO18_HonestyHumility_GreedAvoidance_2_R",
    "HEXACO18_HonestyHumility_Modesty_3_R",
    "HEXACO18_Emotionality_Fearfulness_4_R",
    "HEXACO18_Emotionality_Dependence_5_NR",
    "HEXACO18_Emotionality_Anxiety_6_NR",
    "HEXACO18_Extraversion_SocialSelfEsteem_7_R",
    "HEXACO18_Extraversion_SocialBoldness_8_R",
    "HEXACO18_Extraversion_Liveliness_9_R",
    "HEXACO18_Agreeableness_Forgiveness_10_NR",
    "HEXACO18_Agreeableness_Gentleness_11_NR",
    "HEXACO18_Agreeableness_Patience_12_R",
    "HEXACO18_Conscientiousnes_Diligence_13_R",
    "HEXACO18_Conscientiousnes_Prudence_14_R",
    "HEXACO18_Conscientiousnes_Organization_15_R",
    "HEXACO18_Openness_Unconventionality_16_R",
    "HEXACO18_Openness_AestheticAppreciation_17_NR",
    "HEXACO18_Openness_Creativity_18_NR",
]

function make_hexaco18(
    required = true,
    ticks = ["Inaccurate", "Accurate"],
    items = hexaco18_items,
    dimensions = hexaco18_dimensions
) {
    var questions1_3 = []
    var questions4_6 = []
    var questions7_9 = []
    var questions10_12 = []
    var questions13_15 = []
    var questions16_18 = []
    for (const [index, element] of items.entries()) {
        q = {
            title: element,
            name: dimensions[index],
            type: "rating",
            displayMode: "buttons",
            scaleColorMode: "colored",
            isRequired: required,
            minRateDescription: ticks[0],
            maxRateDescription: ticks[1],
            rateValues: [0, 1, 2, 3, 4, 5, 6],
        }
        if (index < 3) {
            questions1_3.push(q)
        } else if (index < 6) {
            questions4_6.push(q)
        } else if (index < 9) {
            questions7_9.push(q)
        } else if (index < 12) {
            questions10_12.push(q)
        } else if (index < 15) {
            questions13_15.push(q)
        } else {
            questions16_18.push(q)
        }
    }
    return [
        { elements: questions1_3 },
        { elements: questions4_6 },
        { elements: questions7_9 },
        { elements: questions10_12 },
        { elements: questions13_15 },
        { elements: questions16_18 },
    ]
}
