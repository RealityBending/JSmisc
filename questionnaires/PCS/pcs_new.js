var pcs_path = "https://realitybending.github.io/JSmisc/questionnaires/PCS/"

// Start ========================================================================
const pcs_preload = {
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
    images: [`${pcs_path}/images/stimulus.png`, `${pcs_path}/images/headphones.png`, `${pcs_path}/images/instructions.jpg`],
}


const pcs_instructions = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        showQuestionNumbers: false,
        completeText: "Let's start",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "pcs_instructions",
                        html:
                            "<div style='display: flex;'>" +
                            "<div style='width: 60%; margin-right: 20px;'>" +
                            "<h2>Before you start..</h2>" +
                            "Please find a comfortable position in front of the computer making sure you are at a sufficient distance to hold your hands in front of you without touching anything.</p>" +
                            "Make sure you will not be disturbed for the next 60 minutes. The experiment should be completed in a quiet environment and using <b>headphones</b> throughout. " +
                            "Audio instructions will shortly be played. " +
                            "<p><b> NOTE. Some of the audio recordings have periods of silence where it may sound like the recording has stopped or ended prematurely - it won't have." +
                            "These periods of silence are there for you to focus on the imaginative exercises. Please focus on doing that and wait for the instructions to restart. </b>" +
                            "<p> Please concentrate on the voice and follow the instructions given. </p>" +
                            "</div>" +
                            "<div style='width: 40%;'>" +
                            `<img src='${pcs_path}/images/instructions.jpg' alt='Illustration' style='width: 100%;'>` +
                            "</div>" +
                            "</div>",
                    },
                ],
            },
        ],
    },
}

const pcs_audiotest = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        goNextPageAutomatic: false,
        completeText: "Continue",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "audio-player",
                        html: `<audio autoplay><source src='${pcs_path}/audio/hello_audiotest.mp3' type='audio/mp3'></audio>`
                    },
                    {
                        type: "radiogroup",
                        choices: ["Hello", "Goodbye", "How Are You", "Thank You"],
                        title: "What did you hear?",
                        isRequired: true,
                        name: "AudioTest",
                        screen: "hello_test"
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_audiotest",
    },
    trial_duration: 3000, // 3 seconds
}

// Introduction
const pcs_intro = {
    type: jsPsychAudioKeyboardResponse,
    // on_start: function () {
    //     document.body.style.cursor = "none"
    // },
    stimulus: `${pcs_path}/audio/intro.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

// Hand Lowering (audio + ratings)
const pcs_handlowering_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/hand_lowering.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_handlowering_a",
    }
}

const pcs_handlowering_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Hand Lowering",
        description: "You were told to extend your right arm straight out and feel it becoming heavy as though a weight were pulling the hand and arm down",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How strongly did you feel your hand become heavy, where 0 means you felt your arm was no more heavy than normal and 5 means you felt your arm becoming as heavy as if you had a heavy object in your hand, pulling it down?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Normal Heaviness",
                        maxRateDescription: "Very heavy",
                        rateMin: 0,
                        rateMax: 5,
                        rateCount: 6,
                        name: "HandLowering_r",
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_handlowering_r"
    }
}


// Magnetic Hands (audio + rating)
const pcs_magnetichands_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/magnetic_hands.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_magnetichands_a",
    }
}

const pcs_magnetichands_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Magnetic Hands",
        description: "You were told to hold your hands out in front of you about a foot apart and then told to imagine a force pulling your hands together.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How strongly did you feel a force between your hands, where 0 means you felt no force at all and 5 means you felt a force so strong it was as if your hands were real magnets?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "No force",
                        maxRateDescription: "Strong Force",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "MovingHandsTogether_r",
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_magnetichands_r",
    }
}

// Mosquito (audio + rating)
const pcs_mosquito_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/mosquito.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_mosquito_a",
    }
}

const pcs_mosquito_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Experience of Mosquito",
        description: "You were told to become aware of the buzzing of a mosquito which was said to become annoying, and then you were told to brush it off.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How strongly did you feel the sensation of a mosquito being there, in either sound or touch, where 0 means you felt no sensation and 5 means you felt by any means as if there actually was a mosquito there?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "No mosquito",
                        maxRateDescription: "Like a real mosquito",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "Mosquito_r",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_mosquito_r",
    }
}


// Taste (audio + rating to sweet and sour)
const pcs_taste_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/taste.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_taste_a",
    }
}

const pcs_taste_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Taste Experience ",
        description: "You were told that you would have a SWEET taste in your mouth, and then you were told that you have a SOUR taste in your mouth.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How strongly did you taste a SWEET taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "No taste",
                        maxRateDescription: "Strong taste",
                        rateMin: 0,
                        rateMax: 5,
                        rateCount: 6,
                        name: "TasteSweet_r",
                    },
                    {
                        type: "rating",
                        title: "How strongly did you taste a SOUR taste in your mouth, where 0 means you felt no taste at all and 5 means you felt a strong taste?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "No taste",
                        maxRateDescription: "Strong taste",
                        rateMin: 0,
                        rateMax: 5,
                        rateCount: 6,
                        name: "TasteSour_r",
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_taste_r"
    }
}

// Arm Rigidity (audio + rating)
const pcs_armrigidity_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/arm_rigid.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_armrigidity_a",
    }
}

const pcs_armrigidity_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Arm Rigidity (Right Arm)",
        description: "You were told to extend your right arm straight out, then to notice it becoming stiff, and then told to try to bend it.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How stiff did your arm feel, where 0 means no more stiffness than normal and 5 means you could feel a stiffness so compelling no amount of effort would overcome it?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Normal/ no stiffness",
                        maxRateDescription: "Very stiff",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "ArmRigidity_r",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_armrigidity_r"
    }
}

// Arm Immobile (audio + rating)
const pcs_armrimmobile_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/arm_immobile.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_armimmobile_a",
    }
}

const pcs_armrimmobile_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Arm Immobilization (Left Arm)",
        description: "You were told how heavy your left hand and arm felt and then told to try to lift your hand up.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How stiff did your arm feel, where 0 means no more stiffness than normal and 5 means you could feel a stiffness so compelling no amount of effort would overcome it?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Normal/ no heaviness",
                        maxRateDescription: "Very heavy",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "ArmImmobility_r",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_armrimmobile_r"
    }
}

const pcs_music_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/Music.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_MusicHallucination_a",
    }
}

const pcs_music_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Music Hallucination",
        description: "You were asked to hold your right hand up when you could satisfactorily hear the recording of Happy Birthday to You.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "Report how clearly you heard the music, where 0 means you did not hear any music at all and 5 means you heard it so clearly it was as though it was coming from the best sound system.",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "No music",
                        maxRateDescription: "Clearly heard music",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "MusicHallucination_r",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_music_r"
    }
}


// Negative visual illusion (audio(s) + image + multiple choice response)
const pcs_balls_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/negative_visual.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_balls_a",
    }
}

/// Balls (audio + multiple choice ) maybe this works? (see https://www.jspsych.org/7.2/plugins/audio-button-response/)
const pcs_balls_a2 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/negative_visualb.mp3`,
    prompt: `<img src='${pcs_path}/images/stimulus.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_balls_b",
    }
}

const pcs_balls_mc = {
    type: jsPsychSurvey,
    survey_json: {
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        title: "What color balls did you see in the screen?",
                        type: "checkbox",
                        choices: ["Yellow", "Red", "Green", "Blue", "Purple", "Orange", "No Balls Were Presented"],
                        isRequired: true,
                        name: "Balls_mc",
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_balls_mc",
    },
}

const pcs_balls_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Negative Hallucination",
        description: "You were next told to open your eyes and look at a picture of two coloured balls. You then indicated the colour of the balls that you saw.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        title: "How invisible was a third ball, where 0 means you saw three balls clearly, and 5 means you only saw two balls, and any number in between means you had some difficulty in seeing a third ball?",
                        type: "rating",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Saw three balls",
                        maxRateDescription: "Saw two balls",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "NegativeVisualHallucination_r"
                    }
                ]
            }
        ]
    },
    data: {
        screen: "pcs_negativehallucination",
    },
}

// Amnesia 1 (audio + written response)
const pcs_amnesia_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/amnesia.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_amnesia_a",
    }
}

const pcs_amnesia_w = {
    type: jsPsychSurvey,
    survey_json: {
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "comment",
                        title: "Please briefly type, in your own words, a list of the things that happened since the beginning of this set of exercises." +
                            " Do not go into detail. You are limited to 600 characters and the system will automatically accept whatever you have written after 2 minutes.",
                        isRequired: true,
                        placeholder: "Write here",
                        name: "Amnesia_w",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_amnesia_w"
    },
    on_load: function () {
        setTimeout(function () {
            jsPsych.finishTrial()
        }, 120000) // 1 minute
    }
}


// Post-session experience (audio + keyboard presses + ratings)
const pcs_pse_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/PSS1.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_pse_a",
    }
}

const pcs_press = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "<h2><br>PLEASE WAIT</br></h2>",
    response_ends_trial: false,
    choices: [" "], // Spacebar as the key to press
    on_start: function () {
        keyPressCount = 0
    },
    on_finish: function (data) {
        data.keyPressCount = keyPressCount
    },
    on_load: function () {
        // Listen for keydown events and increment counter when space is pressed
        document.addEventListener("keydown", function (event) {
            if (event.code === "Space") {
                keyPressCount++
                if (keyPressCount === 6) {
                    jsPsych.finishTrial() // End trial after 6 spacebar presses
                }
            }
        })
    },
    trial_duration: 10000, // Ends automatically after 10 seconds
    data: {
        screen: "pcs_press"
    },
}

const pcs_pse_a2 = {
    type: jsPsychAudioKeyboardResponse,
    choices: [""],
    stimulus: `${pcs_path}/audio/PSS2_remember_everything.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    response_ends_trial: false,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_pse_a2",
    }
}

const pcs_pss_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Post-Session Experience",
        description: "You were told that you would press the space bar six times in a row, but that you would forget that you were told to do so. ",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "Report how strong an urge you felt to press the space bar, where 0 means you had no urge whatsoever and 5 means you had a clear urge to press the space bar repeatedly.",
                        minRateDescription: "No urge",
                        maxRateDescription: "Clear urge",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        isRequired: true,
                        name: "PostSessionExperiencea_r"
                    },
                    {
                        type: "rating",
                        title: "Report how clearly you remembered being given the instruction to press the space bar six times, where 0 means you were able at that time to remember the instruction normally and 5 means you had no memory of the instruction at that time to press the space bar, where 0 means you had no urge whatsoever and 5 means you had a clear urge to press the space bar repeatedly.",
                        isRequired: true,
                        minRateDescription: "Normal memory of instruction",
                        maxRateDescription: "No memory of instruction",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "PostSessionExperienceb_mr",
                    },
                ],
            }
        ]
    }, data: {
        screen: "pcs_pss_r",
    }
}

// Amnesia 2 (audio + written response)
const pcs_remember_a = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: `${pcs_path}/audio/remember_everything.mp3`,
    prompt: `<img src='${pcs_path}/images/headphones.png'>`,
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
    data: {
        screen: "pcs_remember_a",
    }
}

const pcs_remember_w = {
    type: jsPsychSurvey,
    survey_json: {
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "comment",
                        title: "Briefly type anything else that you now remember that you did not remember previously." +
                            " Please do not go in to detail. You are limited to 600 characters and the system will automatically accept whatever you have written after 2 minutes.",
                        isRequired: true,
                        placeholder: "Write here",
                        name: "Remember_w",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_remember_w"
    },
    on_load: function () {
        setTimeout(function () {
            jsPsych.finishTrial()
        }, 120000) // 2 minutes
    }
}

const pcs_remember_r = {
    type: jsPsychSurvey,
    survey_json: {
        title: "Amnesia",
        description: "You were then told that you would not be able to remember anything you did during the session until you were told 'now you can remember anything'.",
        completeText: "Continue",
        goNextPageAutomatic: false,
        showQuestionNumbers: false,
        pages: [
            {
                elements: [
                    {
                        type: "rating",
                        title: "How hard was it to remember events before you were told 'now you can remember everything', where 0 means you could remember events as easily as normal and 5 means you found it so difficult to remember it was as if there was an actual blank in your memory?",
                        displayMode: "buttons",
                        isRequired: true,
                        minRateDescription: "Normal memory",
                        maxRateDescription: "No memory",
                        rateCount: 6,
                        rateMin: 0,
                        rateMax: 5,
                        name: "Remember_r",
                    },
                ]
            }
        ]
    },
    data: {
        screen: "pcs_remember_r",
    }
}


const pcs_finish = {
    type: jsPsychSurvey,
    survey_json: {
        showQuestionNumbers: false,
        completeText: "Finish",
        pages: [
            {
                elements: [
                    {
                        type: "html",
                        name: "pcs_finish",
                        html:
                            "<h2>End</h2>" +
                            "<p>You may recall that during the session today, you were asked to hold up your hand when you heard a recording of <b style='color:green;'>'Happy Birthday to You'</b>." +
                            " In fact, no recording was played—there <b>was no music in the room</b>." +
                            "<p> Also, near the end of the session, you were told that you would see two balls on the screen. Actually, there were three balls in the picture." +
                            "<p> The purpose of these two items was not to deceive you. We know from past research that the perception of persons who are highly skilled in controlling their subjective experience will sometimes be altered to coincide with that which was proposed." +
                            " <b>Our intention with respect to these items was to assess your ability to create perceptual alterations</b>.</p>" +
                            "<p>Thank you for completing this part of the experiment.</p>"
                    }
                ],
            },
        ],
    },
    data: { screen: "pcs_final" },
}


// Timeline ========================================================================
const pcs_timeline = {
    timeline: [
        pcs_preload,
        pcs_instructions,
        pcs_audiotest,
        pcs_intro,
        pcs_handlowering_a, // 1
        pcs_handlowering_r,
        pcs_magnetichands_a, // 2
        pcs_magnetichands_r,
        pcs_mosquito_a, // 3
        pcs_mosquito_r,
        pcs_taste_a, // 4
        pcs_taste_r,
        pcs_armrigidity_a, // 5
        pcs_armrigidity_r,
        pcs_armrimmobile_a, // 6
        pcs_armrimmobile_r,
        pcs_music_a, // 7
        pcs_music_r,
        pcs_balls_a, // 8
        pcs_balls_a2,
        pcs_balls_mc,
        pcs_balls_r,
        pcs_amnesia_a, // 9
        pcs_amnesia_w,
        pcs_pse_a, // 10
        pcs_press,
        pcs_pse_a2,
        pcs_pss_r,
        pcs_remember_a,
        pcs_remember_w,
        pcs_remember_r,
        pcs_finish,
    ],
}
