/**
 * Draw the goalie area (penalty + goal box) on one side.
 * side: 'left' | 'right'
 */
function drawGoalArea(side, {
  lineWidth = 2,
  color = '#00cec9',
  pitchPadding = 10,      // distance from end line
  penaltyDepth = 80,      // how far the penalty box extends into the field
  penaltyHeight = 120,    // vertical height of the penalty box
  goalDepth = 24,         // how far the goal box extends into the field
  goalHeight = 60         // vertical height of the goal box
} = {}) {
  ctx.save();
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = color;

  const cy = canvas.height / 2;
  const penTop  = cy - penaltyHeight / 2;
  const goalTop = cy - goalHeight   / 2;

  // x positions depend on the side
  const penX  = side === 'left'
    ? pitchPadding
    : canvas.width - pitchPadding - penaltyDepth;

  const goalX = side === 'left'
    ? pitchPadding
    : canvas.width - pitchPadding - goalDepth;

  // draw rectangles
  ctx.strokeRect(penX,  penTop,  penaltyDepth, penaltyHeight);
  ctx.strokeRect(goalX, goalTop, goalDepth,   goalHeight);

  ctx.restore();
}

 /** Draw the vertical midline and the center circle */
  function drawCenterLineAndCircle({
    lineWidth = 2,
    color = '#00cec9',
    circleRadius = 30
  } = {}) {
    ctx.save();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;

    // Vertical midline
    const midX = canvas.width / 2;
    ctx.beginPath();
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX, canvas.height);
    ctx.stroke();

    // Center circle
    const cx = midX;
    const cy = canvas.height / 2;
    ctx.beginPath();
    ctx.arc(cx, cy, circleRadius, 0, Math.PI * 2);
    ctx.stroke();

    // Center spot
    ctx.beginPath();
    ctx.arc(cx, cy, 2, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();

    ctx.restore();
  }


// Example: draw on both ends
drawGoalArea('left');
drawGoalArea('right');
drawCenterLineAndCircle();
// Iniciar juego from geomegol.js
iniciarJuego();

