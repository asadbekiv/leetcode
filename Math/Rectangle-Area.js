var computeArea = function (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
  let firstArea = (ax2 - ax1) * (ay2 - ay1);
  let secondArea = (bx2 - bx1) * (by2 - by1);
  let overlapWith = Math.min(ax2, bx2) - Math.max(ax1, bx1);
  let overlapHigh = Math.min(ay2, by2) - Math.max(ay1, by1);

  let overlapArea = Math.max(overlapHigh, 0) * Math.max(overlapWith, 0);

  return firstArea + secondArea - overlapArea;
};
