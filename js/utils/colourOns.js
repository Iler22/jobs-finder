// colours the overall wellbeing score rendered on the map city popups
export const colourOns = (avg) => {
  if (avg < 7) {
    return `<b class="red"> Overall: ${avg}</b>`;
  } else if (avg >= 7 && avg < 7.5) {
    return `<b class="yellow"> Overall: ${avg}</b>`;
  } else {
    return `<b class="green"> Overall: ${avg}</b>`;
  }
};
