var pcs_path = "https://realitybending.github.io/JSmisc/questionnaires/PCS/"

// Start ========================================================================
var pcs_preload = {
    type: jsPsychPreload,
    audio: [
        `${pcs_path}/audio/hello_audiotest.mp3`,
        `${pcs_path}/audio/intro.mp3`,
        `${pcs_path}/audio/hand_lowering.mp3`,
        `${pcs_path}/audio/taste.mp3`,
        `${pcs_path}/audio/arm_rigid.mp3`,
        `${pcs_path}/audio/arm_immobile.mp3`,
        `${pcs_path}/audio/Music.mp3`,
        `${pcs_path}/audio/amnesia.mp3`,
        `${pcs_path}/audio/remember_everything.mp3`,
        `${pcs_path}/audio/magnetic_hands.mp3`,
        `${pcs_path}/audio/mosquito.mp3`,
        `${pcs_path}/audio/negative_visual.mp3`,
        `${pcs_path}/audio/PSS1.mp3`,
        `${pcs_path}/audio/PSS2_remember_everything.mp3`,
    ],
    images: [`${pcs_path}/stimulus.png`, `${pcs_path}/headphones.png`],
}


var pcs_instructions = {
    type: jsPsychHtmlButtonResponse,
    on_start: function () {
        document.body.style.backgroundColor = "white"
    },
    stimulus:
        '<h1 style="color:black;">Instructions</h1>' +
        '<p style="color:black;">Please find a comfortable position in front of the computer making sure you are at a sufficient distance to hold your hands in front of you without touching anything.</p>' +
        '<p style="color:black;">Audio instructions will shortly be played. Make sure you are using <b>headphones</b>.<br>Please concentrate on the voice and follow the instructions given.</p>',
    choices: ["Start"],
    on_finish: function(){
        if (jsPsych.pluginAPI.audioContext()) {
            jsPsych.pluginAPI.audioContext().resume();
        }
    }
}

var pcs_audiotest = {
    type: jsPsychAudioButtonResponse,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    stimulus: `${pcs_path}/audio/hello_audiotest.mp3`,
    choices: ["Hello", "Goodbye", "How Are You", "Thank You"],
    prompt: '<p style="color:black"> What did you hear?</p>',
}

// Introduction
var pcs_intro = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: `${pcs_path}/audio/intro.mp3`, 
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

// Hand Lowering (audio + ratings)
var pcs_handlowering_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    stimulus: [`${pcs_path}/audio/hand_lowering.mp3`],
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_handlowering_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
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

// Taste (audio + rating to sweet and sour)
var pcs_taste_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/taste.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_taste_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Taste Experience 1</h2>" +
        '<p style="color:black;">You were told that you would have a SWEET taste in your mouth, and then you were told that you have a SOUR taste in your mouth.</p>',
    questions: [
        {
            prompt: "How strongly did you taste a SWEET taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
            name: "PCS_TasteExperienceSweet",
            labels: ["No taste", "1", "2", "3", "4", "Strong taste"],
        },
        {
            prompt: "How strongly did you taste a SOUR taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
            name: "PCS_TasteExperienceSour",
            labels: ["No taste", "1", "2", "3", "4", "Strong taste"],
        },
    ],
}

// Arm Rigidity (audio + rating)
var pcs_armrigidity_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/arm_rigid.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_armrigidity_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Arm Rigidity (Right Arm)</h2>" +
        '<p style="color:black;">You were told to extend your right arm straight out, then to notice it becoming stiff, and then told to try to bend it.</p>',
    questions: [
        {
            prompt: "How stiff did your arm feel, where 0 means no more stiffness than normal and 5 means you could feel a stiffness so compelling no amount of effort would overcome it?",
            name: "PCS_ArmRigidity",
            labels: ["Normal/no stiffness", "1", "2", "3", "4", "Very stiff"],
        },
    ],
}

// Arm Immobile (audio + rating)
var pcs_armrimmobile_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/arm_immobile.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_armrimmobile_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Arm Immobilization (Left Arm)</h2>" +
        '<p style="color:black;">You were told how heavy your left hand and arm felt and then told to try to lift your hand up.</p>',
    questions: [
        {
            prompt: "How strongly did you feel a heaviness in your hand, where 0 means you felt no heaviness at all and 5 means your hand felt so heavy it was as if a very heavy object was actually pressing it down?",
            name: "PCS_ArmImmobilization",
            labels: ["Normal/no heaviness", "1", "2", "3", "4", "Very heavy"],
        },
    ],
}

// Music (audio + rating)
var pcs_music_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/Music.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_music_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Music Hallucination</h2>" +
        '<p style="color:black;">You were asked to hold your right hand up when you could satisfactorily hear the recording of Happy Birthday to You.</p>',
    questions: [
        {
            prompt: "Report how clearly you heard the music, where 0 means you did not hear any music at all and 5 means you heard it so clearly it was as though it was coming from the best sound system.",
            name: "PCS_MusicHallucination",
            labels: ["No music", "1", "2", "3", "4", "Clearly heard music"],
        },
    ],
}

// Amnesia 1 (audio + written response)
var pcs_amnesia_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/amnesia.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_amnesia_w = {
    type: jsPsychSurveyText,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    questions: [
        {
            prompt: '<p style="color:black;">Please briefly type, in your own words, a list of the things that happened since the beginning of this set of exercises. Do not go into detail. You are limited to 600 characters and the system will automatically accept whatever you have written after 1 minutes.</p>',
            trial_duration: 60000,
            choices: ["s"],
        },
    ],
}

// Amnesia 2 (audio + written response)
var pcs_remember_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/remember_everything.mp3`],

    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_remember_w = {
    type: jsPsychSurveyText,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    questions: [
        {
            prompt: '<p style="color:black;">Briefly type anything else that you now remember that you did not remember previously. Please do not go in to detail. You are limited to 600 characters and the system will automatically accept whatever you have written after 1 minutes.</p>',
            trial_duration: 60000,
            choices: ["s"],
        },
    ],
}

var pcs_amnesia_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Amnesia</h2>" +
        "<p>You were then told that you would not be able to remember anything you did during the session until you were told 'now you can remember anything'.",
    questions: [
        {
            prompt: 'How hard was it to remember events before you were told "now you can remember everything", where 0 means you could remember events as easily as normal and 5 means you found it so difficult to remember it was as if there was an actual blank in your memory?',
            name: "PCS_Amnesia",
            labels: ["Normal memory", "1", "2", "3", "4", "No memory"],
        },
    ],
}

// Magnetic Hands (audio + rating)
var pcs_magnetichands_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/magnetic_hands.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_magnetichands_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Magnetic Hands</h2>" +
        '<p style="color:black;">You were told to hold your hands out in front of you about a foot apart and then told to imagine a force pulling your hands together.</p>',
    questions: [
        {
            prompt: "How strongly did you feel a force between your hands,  where 0 means you felt no force at all and 5 means you felt a force so strong it was as if your hands were real magnets?",
            name: "PCS_MovingHandsTogether",
            labels: ["No force ", "1", "2", "3", "4", "Strong Force"],
        },
    ],
}

// Mosquito (audio + rating)
var pcs_mosquito_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/mosquito.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_mosquito_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    preamble:
        "<h2>Experience of Mosquito</h2>" +
        '<p style="color:black;">You were told to become aware of the buzzing of a mosquito which was said to become annoying, and then you were told to brush it off.</p>',
    questions: [
        {
            prompt: "How strongly did you feel the sensation of a mosquito being there, in either sound or touch, where 0 means you felt no sensation and 5 means you felt by any means as if there actually was a mosquito there?",
            name: "PCS_ExperienceMosquito",
            labels: ["No mosquito", "1", "2", "3", "4", "Like a real mosquito"],
        },
    ],
}

// Negative visual illusion (audio(s) + image + multiple choice response)
var pcs_balls_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/negative_visual.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}
/// Balls (audio + multiple choice ) maybe this works? (see https://www.jspsych.org/7.2/plugins/audio-button-response/)
var pcs_balls_a2 = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/negative_visualb.mp3`],
    prompt: `<img src='${pcs_path}/stimulus.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_duration: 120000,
}

var pcs_balls_mc = {
    type: jsPsychSurveyMultiChoice,
    on_start: function () {
        document.body.style.cursor = "auto"
    },
    css_classes: ["blacktext"],
    questions: [
        {
            prompt: '<p style="color:black">What color balls did you see in the screen?</p>',
            name: "PCS_Q1",
            options: [
                "Yellow",
                "Red",
                "Green",
                "Blue",
                "Purple",
                "Orange",
                "No Balls Were Presented",
            ],
            required: true,
        },
    ],
}
// Post-session experience (audio + keyboard presses + ratings)
var pcs_pse_a = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: [`${pcs_path}/audio/PSS1.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_press = {
    timeline: [
        {
            type: jsPsychHtmlKeyboardResponse,
            prompt: "PLEASE WAIT",
            choices: ["s"],
            response_ends_trial: true,
            trial_duration: 10000,
        },
    ],
    repetitions: 6,
}

var pcs_pse_a2 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: [`${pcs_path}/audio/PSS2_remember_everything.mp3`],
    prompt: `<img src='${pcs_path}/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_pss_r = {
    type: jsPsychSurveyLikert,
    on_start: function () {
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
            labels: [
                "Normal memory of instruction",
                "1",
                "2",
                "3",
                "4",
                "No memory of instruction",
            ],
        },
    ],
}

var pcs_finish = {
    type: jsPsychHtmlButtonResponse,
    stimulus:
        "<h1>End</h1>" +
        '<p>You may recall that during the session today, you were asked to hold up your hand when you heard a recording of "HappyBirthday to You". In fact, no recording was played - there was no music in the room. Also, near the end of the session, you were told that you would see two balls on the screen. Actually, there were three balls in the picture. The purpose of these two items was not to deceive you. We know from past research that the perception of persons who are highly skilled in controlling their subjective experience will sometimes be altered to coincide with that which was proposed. Our intention with respect to these items was to assess your ability to create perceptual alterations.' +
        "<p>Thank for completing this part of the experiment.</p>",
    choices: ["Continue"],
}

// Timeline ========================================================================
var pcs_timeline = {
    timeline: [
        pcs_preload,
        pcs_instructions,
        pcs_audiotest,
        pcs_intro,
        pcs_handlowering_a,
        pcs_handlowering_r,
        pcs_taste_a,
        pcs_taste_r,
        pcs_armrigidity_a,
        pcs_armrigidity_r,
        pcs_armrimmobile_a,
        pcs_armrimmobile_r,
        pcs_music_a,
        pcs_music_r,
        pcs_amnesia_a,
        pcs_amnesia_w,
        pcs_remember_a,
        pcs_remember_w,
        pcs_amnesia_r,
        pcs_magnetichands_a,
        pcs_magnetichands_r,
        pcs_mosquito_a,
        pcs_mosquito_r,
        pcs_balls_a,
        pcs_balls_a2,
        pcs_balls_mc,
        pcs_pse_a,
        pcs_press,
        pcs_pse_a2,
        pcs_pss_r,
        pcs_finish,
    ],
}
