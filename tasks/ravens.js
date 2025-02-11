function ravens_makestimuli(path = "img/") {
    var stims = [
        { item: "a11", n_choices: 6, correct: 4 },
        { item: "a24", n_choices: 6, correct: 4 },
        // { item: "a28", n_choices: 8, correct: 7 },
        // { item: "a36", n_choices: 8, correct: 1 },
        // { item: "a43", n_choices: 8, correct: 4 },
        // { item: "a48", n_choices: 8, correct: 5 },
        // { item: "a49", n_choices: 8, correct: 6 },
        // { item: "a53", n_choices: 8, correct: 0 },
        // { item: "a55", n_choices: 8, correct: 1 },
        // { item: "b10", n_choices: 6, correct: 2 },
        // { item: "b16", n_choices: 6, correct: 1 },
        // { item: "b21", n_choices: 6, correct: 3 },
        // { item: "b30", n_choices: 8, correct: 3 },
        // { item: "b34", n_choices: 8, correct: 5 },
        // { item: "b44", n_choices: 8, correct: 3 },
        // { item: "b50", n_choices: 8, correct: 5 },
        // { item: "b52", n_choices: 8, correct: 1 },
        // { item: "b57", n_choices: 8, correct: 0 },
    ]
    let timelineVars = []
    for (let i = 0; i < stims.length; i++) {
        stims[i].path = `<img src=${path + stims[i].item}.png></img>`
        stims[i].n_cols = stims[i].n_choices / 2
        stims[i].choices = []
        for (let j = 1; j <= stims[i].n_choices; j++) {
            stims[i].choices.push(`<img src=${path + stims[i].item}_${j}.png></img>`)
        }
    }
    return stims
}

const ravens_stims = ravens_makestimuli("stimuli/")

const ravens_preload = {
    type: jsPsychPreload,
    images: ravens_stims.flatMap(({ path, choices }) => [path, ...choices]).map((str) => str.match(/(?<=src=)["']?([^"'>]+\.png)/)[1]),
    message: "Loading images. This may take a moment depending on your internet connection.",
    error_message:
        "<p>The experiment failed to load. Please try restarting your browser.</p><p>If this error persists after 2-3 tries, please contact the experimenter.</p>",
    continue_after_error: false,
    show_progress_bar: true,
    max_load_time: 30000,
}

function ravens_maketrial() {
    return {
        type: jsPsychHtmlButtonResponse,
        prompt: "<p>Which option completes the pattern?</p>",
        stimulus: jsPsych.timelineVariable("path"),
        choices: jsPsych.timelineVariable("choices"),
        grid_columns: jsPsych.timelineVariable("n_cols"),
        trial_duration: null,
        data: {
            screen: "ravens_trial",
            correct: jsPsych.timelineVariable("correct"),
        },
        on_finish: function (data) {
            data.error = data.response != data.correct
        },
    }
}

function ravens_procedure() {
    return {
        timeline: [ravens_maketrial()],
        timeline_variables: ravens_stims,
        randomize_order: false,
    }
}
// const ravens_trial = {
//     type: jsPsychHtmlButtonResponse,
//     prompt: "<p>Which option completes the pattern?</p>",
//     stimulus: jsPsych.timelineVariable("path"),
//     choices: jsPsych.timelineVariable("choices"),
//     grid_columns: jsPsych.timelineVariable("n_cols"),
//     trial_duration: null,
//     data: {
//         screen: "ravens_trial",
//         correct: jsPsych.timelineVariable("correct"),
//     },
//     on_finish: function (data) {
//         data.error = data.response != data.correct
//     },
// }

// const ravens_procedure = {
//     timeline: [ravens_trial],
//     timeline_variables: ravens_stims,
//     randomize_order: false,
// }
