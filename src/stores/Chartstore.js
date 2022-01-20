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
    dataLine: [25, 30, 45, 60, 10, 65, 75],
    updateLine() {
      const newData = this.dataLine.map((value) => value + 7);
      this.dataLine = newData;
    },
    filterLine() {
      this.dataLine = this.dataLine.filter((value) => value < 38);
    },
    addLine() {
      let arr = [
        ...this.dataLine,
        this.dataLine.push(Math.round(Math.random() * 100)),
      ];
      this.dataLine = arr;
    },
    pieData: [
      {
        name: "apples",
        value: 100,
      },
      {
        name: "bananas",
        value: 300,
      },
      {
        name: "cherries",
        value: 250,
      },
    ],
    randomize() {
      this.pieData = [
        {
          name: "apples",
          value: Math.round(Math.random() * 100),
        },
        {
          name: "bananas",
          value: Math.round(Math.random() * 200),
        },
        {
          name: "cherries",
          value: Math.round(Math.random() * 300),
        },
      ];
    },
  };
};
