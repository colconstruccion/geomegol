/** Mark the horizontal (width) scale every 10 units */
function drawWidthMarks({
  step = 10,
  lineLength = 6,
  color = '#636e72',
  font = '10px Arial'
} = {}) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = 'center';

  for (let x = 0; x <= canvas.width; x += step) {
    // Top tick
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, lineLength);
    ctx.stroke();

    // Bottom tick
    ctx.beginPath();
    ctx.moveTo(x, canvas.height);
    ctx.lineTo(x, canvas.height - lineLength);
    ctx.stroke();

    // Label (only every 50 to reduce clutter, optional)
    if (x % 50 === 0) {
      ctx.fillText(x, x, lineLength + 10);
      ctx.fillText(x, x, canvas.height - lineLength - 2);
    }
  }
  ctx.restore();
}

/** Mark the vertical (height) scale every 10 units */
/** Mark the vertical (height) scale every 10 units */
function drawHeightMarks({
  step = 10,
  lineLength = 6,
  color = '#636e72',
  font = '10px Arial'
} = {}) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.font = font;
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';

  for (let y = 0; y <= canvas.height; y += step) {
    // Left tick
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(lineLength, y);
    ctx.stroke();

    // Right tick
    ctx.beginPath();
    ctx.moveTo(canvas.width, y);
    ctx.lineTo(canvas.width - lineLength, y);
    ctx.stroke();

    // Label (every 50 for clarity)
    if (y % 50 === 0) {
      let label = y;

      // Swap 50 ↔ 150
      if (y === 50) label = 150;
      else if (y === 150) label = 50;

      ctx.fillText(label, lineLength + 18, y);
      ctx.fillText(label, canvas.width - lineLength - 2, y);
    }
  }

  ctx.restore();
}






