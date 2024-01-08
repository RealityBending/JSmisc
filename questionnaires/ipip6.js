// Mini-IPIP6 questionnaire (Milojev et al., 2013) - 24 items
// Direct extension from the original 20-item five-factor Mini-IPIP (Donnellan et al., 2006) with the inclusion
// of an additional four items assessing the Honesty-Humility factor—two from Campbell et al.'s (2004) Psychological Entitlement scale
// and two from the HEXACO-PI-R Honesty-Humility scale.
var ipip6_items = [
    "I am the life of the party",
    "I sympathise with others' feelings",
    "I get chores done right away",
    "I have frequent mood swings",
    "I have a vivid imagination",
    "I feel entitled to more of everything",
    "I don't talk a lot",
    "I am not interested in other people's problems",
    "I have difficulty understanding abstract ideas",
    "I like order",
    "I make a mess of things",
    "I deserve more things in life",
    "I do not have a good imagination",
    "I feel others' emotions",
    "I am relaxed most of the time",
    "I get upset easily",
    "I seldom feel blue",
    "I would like to be seen driving around in a really expensive car",
    "I keep in the background",
    "I am not really interested in others",
    "I am not interested in abstract ideas",
    "I often forget to put things back in their proper place",
    "I talk to a lot of different people at parties",
    "I would get a lot of pleasure from owning expensive luxury goods",
]

var ipip6_dimensions = [
    "Extraversion_1",
    "Agreeableness_2",
    "Conscientiousness_3",
    "Neuroticism_4",
    "Openness_5",
    "HonestyHumility_6_R",
    "Extraversion_7_R",
    "Agreeableness_8_R",
    "Openness_9_R",
    "Conscientiousness_10",
    "Conscientiousness_11_R",
    "HonestyHumility_12_R",
    "Openness_13_R",
    "Agreeableness_14",
    "Neuroticism_15_R",
    "Neuroticism_16",
    "Neuroticism_17_R",
    "HonestyHumility_18_R",
    "Extraversion_19_R",
    "Agreeableness_20_R",
    "Openness_21_R",
    "Conscientiousness_22_R",
    "Extraversion_23",
    "HonestyHumility_24_R",
]

var ipip6_instructions =
    "<p><b>About your personality...</b></p>" +
    "<p> Please answer the following questions based on how accurately each statement describes you in general.</p>"

// Make questions
function ipip6(
    required = true,
    ticks = ["Inaccurate", "Accurate"],
    items = ipip6_items,
    dimensions = ipip6_dimensions
) {
    var questions = []
    for (const [index, element] of items.entries()) {
        questions.push({
            prompt: "<b>" + element + "</b>",
            name: dimensions[index],
            ticks: ticks,
            required: required,
            min: 0,
            max: 1,
            step: 0.01,
            slider_start: 0.5,
        })
    }
    return questions
}

function ipip_plotdata(screen = "questionnaire_ipip6") {
    var data = jsPsych.data.get().filter({ screen: screen })
    data = JSON.parse(data["trials"][0]["response"])

    // Make scores
    extraversion =
        data["Extraversion_1"] +
        (1 - data["Extraversion_7_R"]) +
        (1 - data["Extraversion_19_R"]) +
        data["Extraversion_23"]
    extraversion = (extraversion / 4) * 100

    agreeableness =
        data["Agreeableness_2"] +
        (1 - data["Agreeableness_8_R"]) +
        data["Agreeableness_14"] +
        (1 - data["Agreeableness_20_R"])
    agreeableness = (agreeableness / 4) * 100

    conscientiousness =
        data["Conscientiousness_3"] +
        data["Conscientiousness_10"] +
        (1 - data["Conscientiousness_22_R"]) +
        (1 - data["Conscientiousness_11_R"])
    conscientiousness = (conscientiousness / 4) * 100

    neuroticism =
        data["Neuroticism_4"] +
        (1 - data["Neuroticism_15_R"]) +
        data["Neuroticism_16"] +
        (1 - data["Neuroticism_17_R"])
    neuroticism = (neuroticism / 4) * 100

    openness =
        data["Openness_5"] +
        (1 - data["Openness_9_R"]) +
        (1 - data["Openness_13_R"]) +
        (1 - data["Openness_21_R"])
    openness = (openness / 4) * 100

    honesty_humility =
        1 -
        data["HonestyHumility_6_R"] +
        (1 - data["HonestyHumility_12_R"]) +
        (1 - data["HonestyHumility_18_R"]) +
        (1 - data["HonestyHumility_24_R"])
    honesty_humility = (honesty_humility / 4) * 100

    // Prepare output
    var output = {
        names: [
            "Extraversion",
            "Agreeableness",
            "Conscientiousness",
            "Neuroticism",
            "Openness",
            "Honesty/Humility",
        ],
        scores: [
            extraversion,
            agreeableness,
            conscientiousness,
            neuroticism,
            openness,
            honesty_humility,
        ],
        label: "Your personality traits (%)",
    }

    return output
}
