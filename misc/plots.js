// Plots ======================================================================
// Should be loaded with:
//    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
//    <script src="https://realitybending.github.io/JSmisc/misc/plots.js"></script>

function plot_getsize() {
    if (typeof window.screen.height == "number") {
        var size = Math.min(...[window.screen.height, window.screen.width])
        size = Math.floor(size / 2)
    } else {
        var size = [300, 300]
    }
    return [size, size]
}

// Radar plot ======================================================================

function make_radarplot(
    names = ["A", "B", "C", "D"],
    scores = [1, 2, 3, 4],
    minmax = [0, 5],
    label = "Your score",
    color = [255, 99, 132]
) {
    // Aesthetics
    var string_color = color.join(", ")
    var alpha = 0.5

    // Make plot
    var plot = {
        type: "radar",
        data: {
            labels: names,
            datasets: [
                {
                    label: label,
                    data: scores,
                    fill: true,
                    backgroundColor: "rgba(" + string_color + "," + alpha + ")",
                    borderColor: "rgb(" + string_color + ")",
                    pointBackgroundColor: "rgb(" + string_color + ")",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgb(" + string_color + ")",
                },
            ],
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3,
                },
            },
            scales: {
                r: {
                    suggestedMin: minmax[0],
                    suggestedMax: minmax[1],
                },
            },
        },
    }
    return plot
}

// Bar plot ======================================================================

function make_barplot(
    names = ["Average Population Score", "Your Score"],
    scores = [0.5, 0.6],
    minmax = [0, 5],
    label = "Game Score",
    colors = [
        [54, 162, 235],
        [255, 99, 132],
    ]
) {
    string_colors = []
    for (var i = 0; i < colors.length; i++) {
        c = "rgba(" + colors[i].join(", ") + ", 1)"
        string_colors.push(c)
    }

    var plot = {
        type: "bar",
        data: {
            labels: names,
            datasets: [
                {
                    label: label,
                    data: scores,
                    backgroundColor: string_colors,
                    borderColor: string_colors,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    suggestedMin: minmax[0],
                    suggestedMax: minmax[1],
                },
            },
        },
    }
    return plot
}
