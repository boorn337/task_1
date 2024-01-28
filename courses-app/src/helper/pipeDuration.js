const pipeDuration = (minutes) => {
      const num = Number.parseInt(minutes);
      const hours = num / 60;
      let rhours = Math.floor(hours);
      const minut = (hours - rhours) * 60;
      let rminut = Math.floor(minut);
      rhours = rhours < 9 ? "0" + rhours : rhours;
      rminut = rminut < 9 ? "0" + rminut : rminut;
      const time = rhours + ":" + rminut;
      return time
}

export default pipeDuration;