const p = document.querySelector('.show-classdemo');
console.log('p', p);

function showClassDemo(item) {
  switch (item) {
    case 'w01_dom_22':
      p.innerHTML = `<iframe src='./demo/w01_dom_22/index.html' width='100%' height='100%' />`;
      break;
    case 'w02_tictactoe_22':
      p.innerHTML = `<iframe src='./demo/w02_tictactoe_22/tictactoe_22.html' width='100%' height='100%' />`;
      break;
    case 'w03_basics_22':
      p.innerHTML = `<iframe src='./demo/w03_basics_22/p1_22.html' width="100%" height="100%" />`;
      break;
    case 'w04_p1_22':
      p.innerHTML = `<iframe src='./demo/w04_basics_22/p1/p1_22.html' width="100%" height="100%" />`;
      break;
    case 'w04_p2_22':
      p.innerHTML = `<iframe src='./demo/w04_basics_22/p2/p2_22.html' width="100%" height="100%" />`;
      break;
  }
}
