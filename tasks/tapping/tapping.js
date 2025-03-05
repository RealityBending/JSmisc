// Written by: Max Lovell
// Originally at https://github.com/SussexPsychologySoftware/tapping

// JS CODE -----------------------------------------
// Globals for easier access

// Canvas
let clock
let ctx
// timers
let startTime
let pressTime
let tapping_animationID
// constants
const TWO_PI = Math.PI * 2

// ARCS ----
function drawClockOutline(clockRadius = 140) {
    const center = clock.width / 2
    ctx.beginPath()
    ctx.strokeStyle = "black"
    ctx.arc(center, center, clockRadius, 0, 2 * Math.PI)
    ctx.stroke()
}

function drawArc(angle, lineLength = 120, startAngle = 0) {
    const center = clock.width / 2
    ctx.beginPath()
    ctx.fillStyle = "green"
    ctx.moveTo(center, center)
    ctx.arc(center, center, lineLength, startAngle - Math.PI / 2, angle - Math.PI / 2)
    ctx.lineTo(center, center)
    ctx.fill()
}

function drawCenterDot(radius = 5) {
    const center = clock.width / 2
    ctx.beginPath()
    ctx.arc(center, center, radius, 0, TWO_PI)
    ctx.fillStyle = "black"
    ctx.fill()
}

// HAND DRAWING HELPERS ---
function drawLine(x1, y1, x2, y2, color) {
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
}

function drawHand(angle, colour = "black", startOffset = 0, lineLength = 120) {
    const center = clock.width / 2
    const x1 = center + Math.sin(angle) * startOffset
    const y1 = center - Math.cos(angle) * startOffset
    const x2 = x1 + Math.sin(angle) * lineLength
    const y2 = y1 - Math.cos(angle) * lineLength
    drawLine(x1, y1, x2, y2, colour)
}

function drawArrowhead(headLength, angle, distance, colour, outwards = true) {
    const center = clock.width / 2

    // Arrow tip location
    const tipX = center + Math.sin(angle) * distance
    const tipY = center - Math.cos(angle) * distance

    // Line end location
    const lineX = center + Math.sin(angle) * (distance - (outwards ? headLength : -headLength))
    const lineY = center - Math.cos(angle) * (distance - (outwards ? headLength : -headLength))

    // Draw
    ctx.beginPath()
    ctx.fillStyle = colour
    ctx.moveTo(tipX, tipY)

    // Left side of arrowhead
    ctx.lineTo(lineX + Math.sin(angle - Math.PI / 2) * headLength, lineY - Math.cos(angle - Math.PI / 2) * headLength)

    // Right side of arrowhead
    ctx.lineTo(lineX + Math.sin(angle + Math.PI / 2) * headLength, lineY - Math.cos(angle + Math.PI / 2) * headLength)

    ctx.lineTo(tipX, tipY)
    ctx.fill()
}

function drawArrow(angle, colour, outwards = true, start = 0, length = 120, headLength = 12) {
    if (outwards) {
        drawHand(angle, colour, 0, length - headLength)
        drawArrowhead(headLength, angle, length, colour, outwards)
    } else {
        drawHand(angle, colour, start + headLength, length)
        drawArrowhead(headLength, angle, start, colour, outwards)
    }
}

function time2Rads(time) {
    const propTrialLeft = time / duration
    return (propTrialLeft * TWO_PI + startAngle) % TWO_PI
}

// TRIAL FUNCTIONS
function drawClock(condition = "external", startAngle = 0, targetAngle = 0, duration = 3000) {
    let radius = Math.round(window.innerHeight * 0.15)
    let handlength = Math.round(radius * 0.8)

    // DURING
    ctx.clearRect(0, 0, clock.width, clock.height)
    drawClockOutline(radius) // clockRadius is a function of window height

    // Hands
    const currentTime = performance.now() - startTime
    const angle = time2Rads(currentTime)
    drawHand(angle, "black", 0, handlength) // angle, colour, startOffset, lineLength
    drawArc(angle, handlength, startAngle)

    // Arrows
    if (pressTime) drawArrow(time2Rads(pressTime), "blue", true, 0, handlength, radius * 0.05)
    if (condition === "external") drawArrow(targetAngle, "red", false, radius * 1, radius * 0.5, radius * 0.05)

    drawCenterDot() // Draw the center dot
    if (currentTime >= duration) stopClock()
}

function stopClock() {
    if (tapping_animationID) {
        cancelAnimationFrame(tapping_animationID)
        tapping_animationID = undefined
    }
}

function animateClock() {
    drawClock(condition, startAngle, targetAngle)
    if (performance.now() - startTime < duration) {
        tapping_animationID = requestAnimationFrame(animateClock)
    } else {
        stopClock()
    }
}

function tapping_stimulus(c, condition = "external", startAngle = 0, targetAngle = 0, duration = 3000) {
    // START
    clock = c
    ctx = c.getContext("2d")
    ctx.lineWidth = 5
    pressTime = undefined
    startTime = performance.now()
    drawClock(condition, startAngle, targetAngle, duration)
    tapping_animationID = requestAnimationFrame(animateClock)
    document.addEventListener("keydown", tapping_keyListener)
}

function tapping_keyListener(e) {
    if (e.key === " ") {
        pressTime = performance.now() - startTime
        document.removeEventListener("keydown", tapping_keyListener)
    }
}

function tapping_maketrials(nTrials = 10, condition = "external") {
    var trials = []
    var min_distance = 0.5 // buffer on end angle in percentage
    for (let i = 0; i < nTrials; i++) {
        // Generate random angles in radians
        let start_angle = Math.random() * TWO_PI
        // Calculate target angle ensuring minimum distance from start (between min_distance and 0.95)
        let target_angle = Math.random() * (0.95 - min_distance) + min_distance
        if (condition === "internal") target_angle = 0

        // Add timeline vars trial info
        let trial_info = {
            startAngle: start_angle,
            targetAngle: start_angle + target_angle * TWO_PI,
            condition: condition,
            duration: (Math.random() * 2 + 4) * 1000, // random between 4 and 6 seconds
        }
        trials.push(trial_info)
    }
    return trials
}
