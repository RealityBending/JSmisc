// Brief Personality Inventory for DSM-V (PID-5) - Maladaptive Traits
var pid5_items = [
    "People would describe me as reckless",
    "I feel like I act totally on impulse",
    "Even though I know better, I can't stop making rash decisions",
    "I often feel like nothing I do really matters",
    "Others see me as irresponsible",
    "I'm not good at planning ahead",
    "My thoughts often don't make sense to others",
    "I worry about almost everything",
    "I get emotional easily, often for very little reason",
    "I fear being alone in life more than anything else",
    "I get stuck on one way of doing things, even when it's clear it won't work",
    "I have seen things that weren't really there",
    "I steer clear of romantic relationships",
    "I'm not interested in making friends",
    "I get irritated easily by all sorts of things",
    "I don't like to get too close to people",
    "It's no big deal if I hurt other people's feelings",
    "I rarely get enthusiastic about anything",
    "I crave attention",
    "I often have to deal with people who are less important than me",
    "I often have thoughts that make sense to me but that other people say are strange",
    "I use people to get what I want",
    "I often 'zone out' and then suddenly come to and realise that a lot of time has passed",
    "Things around me often feel unreal, or more real than usual",
    "It is easy for me to take advantage of others",
]

var pid5_dimensions = [
    "Disinhibition_1",
    "Disinhibition_2",
    "Disinhibition_3",
    "Detachment_4",
    "Disinhibition_5",
    "Disinhibition_6",
    "Psychoticism_7",
    "NegativeAffect_8",
    "NegativeAffect_9",
    "NegativeAffect_10",
    "NegativeAffect_11",
    "Psychoticism_12",
    "Detachment_13",
    "Detachment_14",
    "NegativeAffect_15",
    "Detachment_16",
    "Antagonism_17",
    "Detachment_18",
    "Antagonism_19",
    "Antagonism_20",
    "Psychoticism_21",
    "Antagonism_22",
    "Psychoticism_23",
    "Psychoticism_24",
    "Antagonism_25",
]

var pid5_instructions =
    "<h2>About yourself...</h2>" +
    "<p>Below is a list of things different people might say about themselves. Please select the response that best describes you.</p>"

// Format PID-5 items ------------------------------------------------
// Make questions
function pid5(
    required = true,
    ticks = [
        "Very or Often False",
        "Sometimes or Somewhat False",
        "Sometimes or Somewhat True",
        "Very or Often True",
    ],
    items = pid5_items,
    dimensions = pid5_dimensions
) {
    var questions = []
    for (const [index, element] of items.entries()) {
        questions.push({
            prompt: "<b>" + element + "</b>",
            name: dimensions[index],
            labels: ticks,
            required: true,
        })
    }
    return questions
}

