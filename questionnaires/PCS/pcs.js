// Put code here
var pcs_preload = {
    type: jsPsychPreload,
    audio: ["audio/PC1.mp3", "audio/PC2.mp3", "audio/PC3.mp3", "audio/PC4.mp3"],
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

var pcs_part1 = {
    type: jsPsychAudioKeyboardResponse,
    on_start: function () {
        document.body.style.cursor = "none"
    },
    stimulus: ["audio/PC1.mp3"],
    prompt: "<img src='headphones.png'>",
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_part2 = {
    type: jsPsychAudioKeyboardResponse,
    stimulus: ["audio/PC2.mp3"],
    prompt: "<img src='stimulus.png'>",
    choices: ["s"],
    response_ends_trial: true,
    trial_ends_after_audio: true,
}

var pcs_finish = {
    type: jsPsychHtmlButtonResponse,
    on_start: function () {
        document.body.style.backgroundColor = "white"
        document.body.style.cursor = "auto"
    },
    stimulus: "<h1>End</h1>" + "<p>Thank for completing this part of the experiment</p>",
    choices: ["Continue"],
}
