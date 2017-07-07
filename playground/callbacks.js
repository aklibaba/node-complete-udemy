const getUser  = (id, callback) => {
  const user = {
    id,
    name: "Alex"
  };
  setTimeout(() => {
    callback(user)
  }, 2000)
};

getUser(31, (user) => {
  console.log(user);
});