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
var pcs_assessment0 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Depth of Experience</h2>" +
        '<p style="color:black;">We began the session with an exercise where you imagined yourself walking down some stairs.</p>',
    questions: [
        {
            prompt: "How absorbed did you feel in your imagination, where 0 means not at all absorbed, 1 means slightly absorbed and 5 means very deeply absorbed in your imagination?How deep was your experience?",
            name: "PCS_Depth",
            labels: ["Not at all", "1", "2", "3", "4", "Very deep"],
        },
    ],
}

var pcs_assessment1 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Hand Lowering</h2>" +
        '<p style="color:black;">You were told to extend your right arm straight out and feel it becoming heavy as though a weight were pulling the hand and arm down.</p>',
    questions: [
        {
            prompt: "How strongly did you feel your hand become heavy, where 0 means you felt your arm was no more heavy than normal and 5 means you felt your arm becoming as heavy as if you had a heavy object in your hand, pulling it down?",
            name: "PCS_HandLowering",
            labels: ["Normal heaviness", "1", "2", "3", "4", "Very heavy"],
        },
    ],
}

var pcs_assessment2 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
            document.body.style.backgroundColor = "white"
            document.body.style.cursor = "auto"
        },
    preamble: 
        "<h2>Moving Hands Together</h2>"+
        '<p style="color:black;">You were next told to hold your hands out in front of you about a foot apart and then told to imagine a force pulling your hands together.</p>',
    questions: [
        {
            prompt: "How strongly did you feel a force between your hands,  where 0 means you felt no force at all and 5 means you felt a force so strong it was as if your hands were real magnets?",
            name: "PCS_MovingHandsTogether",
            labels: ["No force ", "1", "2", "3", "4", "Strong Force"],
        },
    ],
}

var pcs_assessment3 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Experience of Mosquito</h2>" +
        '<p style="color:black;">You were next told to become aware of the buzzing of a mosquito which was said to become annoying, and then you were told to brush it off.</p>',
    questions: [
        {
            prompt: "How strongly did you feel the sensation of a mosquito being there, in either sound or touch, where 0 means you felt no sensation and 5 means you felt by any means as if there actually was a mosquito there?",
            name: "PCS_ExperienceMosquito",
            labels: ["No mosquito", "1", "2", "3", "4", "Like a real mosquito"],
        },
    ],
} 

var pcs_assessment4a = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Taste Experience 1</h2>" +
        '<p style="color:black;">You were next told that you would have a SWEET taste in your mouth.</p>',
    questions: [
        {
            prompt: "How strongly did you taste a SWEET taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
            name: "PCS_TasteExperienceSweet",
            labels: ["No taste", "1", "2", "3", "4", "Strong taste"],
        },
    ],
}

var pcs_assessment4b = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Taste Experience 2</h2>" +
        '<p style="color:black;">You were next told that you would have a SOUR taste in your mouth.</p>',
    questions: [
        {
            prompt: "How strongly did you taste a SOUR taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
            name: "PCS_TasteExperienceSour",
            labels: ["No taste", "1", "2", "3", "4", "Strong taste"],
        },
    ],
}

var pcs_assessment5 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Arm Rigidity (Right Arm)</h2>" +
        '<p style="color:black;">You were next told to extend your right arm straight out, then to notice it becoming stiff, and then told to try to bend it.</p>',
    questions: [
        {
            prompt: "How stiff did your arm feel, where 0 means no more stiffness than normal and 5 means you could feel a stiffness so compelling no amount of effort would overcome it?",
            name: "PCS_ArmRigidity",
            labels: ["Normal/no stiffness", "1", "2", "3", "4", "Very stiff"],
        },
    ],
}

var pcs_assessment6 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Arm Immobilization (Left Arm)</h2>" + 
        '<p style="color:black;">You were next told how heavy your left hand and arm felt and then told to try to lift your hand up.</p>',
    questions: [
        {
            prompt: "How strongly did you feel a heaviness in your hand, where 0 means you felt no heaviness at all and 5 means your hand felt so heavy it was as if a very heavy object was actually pressing it down?",
            name: "PCS_ArmImmobilization",
            labels: ["Normal/no heaviness", "1", "2", "3", "4", "Very heavy"],
        },
    ],
}

var pcs_assessment7 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Music Hallucination</h2>" +
        '<p style="color:black;">Next you were asked to hold your right hand up when you could satisfactorily hear the recording of Happy Birthday to You.</p>',
    questions: [
        {
            prompt: "Report how clearly you heard the music, where 0 means you did not hear any music at all and 5 means you heard it so clearly it was as though it was coming from the best sound system.",
            name: "PCS_MusicHallucination",
            labels: ["No music", "1", "2", "3", "4", "Clearly heard music"],
        },
    ],
}

var pcs_assessment8 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Negative Hallucination</h2>" +
        '<p style="color:black;">You were next told to open your eyes and look at a picture of two coloured balls. You then typed in the colour of the balls that you saw.</p>',
    questions: [
        {
            prompt: "How invisible was a third ball, where 0 means you saw three balls clearly, and 5 means you only saw two balls, and any number in between means you had some difficulty in seeing a third ball?",
            name: "PCS_NegativeVisualHallucination",
            labels: ["Saw three balls", "1", "2", "3", "4", "Saw two balls"],
        },
    ],
}

var pcs_assessment9 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Amnesia</h2>"+
        '<p style="color:black;">You were then told that you would not be able to remember anything you did during the session until you were told “now you can remember anything”.</p>',
    questions: [
        {
            prompt: "How hard was it to remember events before you were told “now you can remember everything”, where 0 means you could remember events as easily as normal and 5 means you found it so difficult to remember it was as if there was an actual blank in your memory?",
            name: "PCS_Amnesia",
            labels: ["Normal memory", "1", "2", "3", "4", "No memory"],
        },
    ],
}

var pcs_assessment10 = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    preamble: 
        "<h2>Post-Session Experience </h2>" + 
        '<p style="color:black;">You were told that you would press the space bar six times in a row, but that you would forget that you were told to do so.</p>',
    questions: [
        {
            prompt: "Report how strong an urge you felt to press the space bar, where 0 means you had no urge whatsoever and 5 means you had a clear urge to press the space bar repeatedly.",
            name: "PCS_PostSessionExperience_a",
            labels: ["No urge", "1", "2", "3", "4", "Clear urge"],
        },
        {
            prompt: "Report how clearly you remembered being given the instruction to press the space bar six times, where 0 means you were able at that time to remember the instruction normally and 5 means you had no memory of the instruction at that time to press the space bar, where 0 means you had no urge whatsoever and 5 means you had a clear urge to press the space bar repeatedly.",
            name: "PCS_PostSessionExperience_b",
            labels: ["Normal memory of instruction", "1", "2", "3", "4", "No memory of instruction"],
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