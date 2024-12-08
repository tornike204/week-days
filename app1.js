function click(){
    const day = document.getElementById("box").value.toLowerCase();
    let activity;

    // Use switch to suggest activity based on the day
    switch (day) {
      case "monday":
        activity = "Start your week with some exercise!";
        break;
      case "tuesday":
        activity = "Focus on learning something new today.";
        break;
      case "wednesday":
        activity = "Midweek! How about cooking a nice meal?";
        break;
      case "thursday":
        activity = "Catch up with friends or family.";
        break;
      case "friday":
        activity = "It's almost the weekend! Watch a movie.";
        break;
      case "saturday":
        activity = "Enjoy outdoor activities like hiking.";
        break;
      case "sunday":
        activity = "Relax and prepare for the upcoming week.";
        break;
      default:
        activity = "Hmm, that doesn't seem like a valid day!";
    }

    // Use if-else to check if it's a weekday or weekend
    if (["saturday", "sunday"].includes(box)) {
      activity += " It's the weekend, have fun!";
    } else if (["monday", "tuesday", "wednesday", "thursday", "friday"].includes(box)) {
      activity += " It's a weekday, stay productive!";
    }

    // Display the result
    document.getElementById("ice").textContent = activity;
  }
  let button = document.getElementById('spicy');
  button.addEventListener('click',() => {
    click();
  });

