type StatusInfo = Readonly<{
  status: boolean;
}>;

const expandOrCloseAll = (status: any, open: boolean = true) => {
  const openStatus: StatusInfo = { status: open };
  const newOpenStatus = Object.assign({});

  for (let key1 in status) {
    if (key1 !== "status") {
      newOpenStatus[key1] = openStatus;
      for (let key2 in status[key1]) {
        if (key2 !== "status") {
          newOpenStatus[key1][key2] = openStatus;
        }
      }
    }
  }

  return newOpenStatus;
};

export { expandOrCloseAll };
