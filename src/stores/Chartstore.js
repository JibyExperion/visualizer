export const Chartstore = () => {
  return {
    data: [25, 30, 45, 60, 10, 65, 75],
    update() {
      const newData = this.data.filter((value) => value + 5);
      console.log(newData)
    },
    filter() {
      this.data = this.data.filter((value) => value < 35);
    },
    add() {
      return this.data.push(Math.round(Math.random() * 100));
    },
  };
};
