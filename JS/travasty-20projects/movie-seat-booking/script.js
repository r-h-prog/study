const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// int型に変換
let ticketPrice = +movieSelect.value

// 選択した映画のインデックスと値段を保存
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('seletedeMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

function updateSelectedCount() {
  // 選択された座席を全て取得
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  // 選択したシートのインデックスを配列化する
  const seatsIndex = [...selectedSeats].map( (seat) => {
    // seatsは予約されていないシート
    // seatsのうちseatのindex番号を取得
    return [...seats].indexOf(seat);
  })

  // localStorageにデータを保存
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  // 配列の長さが選択された座席の数
  const selectedSeatscount = selectedSeats.length;

  count.innerText = selectedSeatscount;
  total.innerText = selectedSeatscount * ticketPrice;

}

movieSelect.addEventListener('change', e => {
  ticketPrice = +e.target.value;
  // selectedIndexプロパティを使用
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
})

container.addEventListener('click', e => {
  if (
    e.target.classList.contains('seat') && !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
})
