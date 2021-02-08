var fixation_cross = {
    type: 'html-keyboard-response',
    stimulus: "<div style='font-size:5em'>+</div>",
    choices: jsPsych.NO_KEYS,
    trial_duration: function () { return randomInteger(250, 750) },
    data: { object: 'fixation_cross' }
}
