export const Chartstore = () => {
  return {
    data: [25, 30, 45, 60, 10, 65, 75],
    update() {
      const newData = this.data.map((value) => value + 5);
      this.data = newData;
    },
    filter() {
      this.data = this.data.filter((value) => value < 35);
    },
    add() {
      let arr = [...this.data, this.data.push(Math.round(Math.random() * 100))];
      this.data = arr;
    },
  };
};
