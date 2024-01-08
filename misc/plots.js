// Plots ======================================================================

function plot_getsize() {
    if (typeof window.screen.height == "number") {
        var size = Math.min(...[window.screen.height, window.screen.width]);
        size = Math.floor(size / 2);
    } else {
        var size = [300, 300];
    }
    return [size, size];
}

function make_radarplot(
    names = ["A", "B", "C", "D"],
    scores = [1, 2, 3, 4],
    label = "Your score",
    color = [255, 99, 132]
) {
    // Aesthetics
    var string_color = color.join(",");
    var alpha = 0.5;

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
                    suggestedMin: 0,
                    suggestedMax: 5,
                },
            },
        },
    };
    return plot;
}
