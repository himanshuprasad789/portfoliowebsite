const wrapper = document.getElementById("wrapper");
// console.log("hello")
function rand(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const validConfig = [
    { configuration: 3, roundness: 5 },
    { configuration: 3, roundness: 2 },
    { configuration: 3, roundness: 3 },
    { configuration: 2, roundness: 1 },
    { configuration: 2, roundness: 2 },
    { configuration: 4, roundness: 4 }
  ];
  let prev=1
  const uniqRand=(min,max,prev)=>{
    let next=prev
    while(prev===next) next=rand(min,max)
    return next

  }
  setInterval(() => {
    const index = uniqRand(0, validConfig.length - 1,prev);
    // const index=prev++%6
    const combination = validConfig[index];
    wrapper.dataset.configuration = combination.configuration;
    wrapper.dataset.roundness = combination.roundness;
  }, 3000);
  