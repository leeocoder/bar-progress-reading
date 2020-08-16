const postWrapper = document.querySelector(".post-wrap");
//Create Bar
let bar = document.createElement("div");
//Bar styling
bar.style.height = "4px";
bar.style.width = "0";
bar.style.backgroundColor = "#6633cc";
bar.style.position = "fixed";
bar.style.top = 0;
bar.style.left = 0;
bar.style.zIndex = "9999";
bar.style.transition = "0.2s";

//Add bar to body of the page
document.body.append(bar);

//loading bar
function updateBar() {
  //get the height of the page
  const postHeight = postWrapper.offsetHeight;

  //verify the position of the page where i'm
  currentPosition = window.pageYOffset;
  //3 rule
  const updatedBar = (currentPosition * 100) / postHeight;
  bar.style.width = `${updatedBar}%`;
}

window.addEventListener("load", () => {
  //verify the moviment of scrool
  document.addEventListener("scroll", updateBar);
});
