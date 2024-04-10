// Put code here
var pcs_preload = {
    type: jsPsychPreload,
    audio: [
        "audio/PC1a.mp3",
        "audio/PC1b.mp3",
        "audio/PC1c.mp3",
        "audio/PC2a.mp3",
        "audio/PC2b.mp3",
        "audio/PC3.mp3",
        "audio/PC4.mp3",
    ],
    images: ["stimulus.png"],
}

var pcs_instructions = {
    type: jsPsychHtmlButtonResponse,
    on_start: function () {
        document.body.style.backgroundColor = "black"
    },
    stimulus:
        '<h1 style="color:white;">Instructions</h1>' +
        '<p style="color:white;">Audio instructions will shortly be played. Make sure you are using <b>headphones</b>.<br>Please concentrate on the voice and follow the instructions given.</p>',
    choices: ["Start"],
}

// Part 1 ========================================================================
var pcs_part1a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: ["audio/PC1a.mp3"],
    prompt: "<img src='headphones.png'>",
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_part1b = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: ["audio/PC1b.mp3"],
    prompt: "<img src='stimulus.png'>",
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_part1c = {
    type: jsPsychAudioKeyboardResponse,
    prompt: '<p style="color:white;">Please wait...</p>',
    stimulus: ["audio/PC1c.mp3"],
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_part1_q1 = {
    type: jsPsychSurveyText,
    questions: [{ prompt: '<p style="color:white;">Color: </p>', name: "PCS_Q1", required: true }],
}

// Part 2 ========================================================================
var pcs_part1a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: ["audio/PC2a.mp3"],
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

// Evaluatiopn ========================================================================
var pcs_assessment = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: "<h2>Few questions...</h2>",
    questions: [
        {
            prompt: "How deep was your experience?",
            name: "PCS_Depth",
            labels: ["Not at all", "1", "2", "3", "4", "Very deep"],
        },
        {
            prompt: "How strongly did you feel your hand become heavy, BLABLA...",
            name: "PCS_HandLowering",
            labels: ["Normal heaviness", "1", "2", "3", "4", "Very heavy"],
        },
    ],
}
var pcs_finish = {
    type: jsPsychHtmlButtonResponse,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    stimulus: "<h1>End</h1>" + "<p>Thank for completing this part of the experiment. BLABLA</p>",
    choices: ["Continue"],
}
