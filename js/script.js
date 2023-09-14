function validateInput(inputElement) {
  const inputValue = inputElement.value;

  // Hapus karakter yang bukan angka dari input
  inputElement.value = inputValue.replace(/[^0-9]/g, '');
}

// function buat bikin paragraph
function createParagraph(text) {
  const paragraph = document.createElement('p');
  paragraph.textContent = text;
  return paragraph;
}

function hitungLuasPersegi() {
  event.preventDefault();
  const sisi = parseFloat(document.getElementById('luasPersegiInput').value);
  if (isNaN(sisi)) return;
  const luas = sisi * sisi;

  // bikin div buat nampung hasil
  const resultDiv = document.createElement('div');
  resultDiv.appendChild(createParagraph('L = S x S'));
  resultDiv.appendChild(createParagraph(`L = ${sisi} x ${sisi}`));
  resultDiv.appendChild(createParagraph(`L = ${luas}`));

  // buat clear div kalo ada
  const hasilLuasPersegi = document.getElementById('hasilLuasPersegi');
  hasilLuasPersegi.innerHTML = '';

  // masukin result ke div
  hasilLuasPersegi.appendChild(resultDiv);
}

function hitungKelilingPersegi() {
  event.preventDefault();
  const sisi = parseFloat(
    document.getElementById('kelilingPersegiInput').value
  );
  if (isNaN(sisi)) return;
  const keliling = 4 * sisi;

  const resultDiv = document.createElement('div');
  resultDiv.appendChild(createParagraph(`K = 4 x Sisi`));
  resultDiv.appendChild(createParagraph(`K = 4 x ${sisi}`));
  resultDiv.appendChild(createParagraph(`K = ${keliling}`));

  const hasilKelilingPersegi = document.getElementById('hasilKelilingPersegi');
  hasilKelilingPersegi.innerHTML = '';

  hasilKelilingPersegi.appendChild(resultDiv);
}
