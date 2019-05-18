let nama, daftar, utama;
nama = document.getElementById("nama");
daftar = document.getElementById("daftar");
utama = document.getElementById("utama");

daftar.addEventListener('click', () => {
    utama.innerHTML =`${utama.innerHTML} <div class="col-lg-3 col-sm-6 mt-7">
    <form class="form-inline"> 
            <div class="input-group">
                <input type="text" class="form-control" placeholder="Tulis Skill Anda">
                <div class="input-group-append">
                    <button style="background: #eee;" type="button" class="btn">TAMBAH</button>
                </div>
            </div>
        </form>
<h2 class="my-3 text-warning">${nama.value}</h2>
<ul class="skill">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                    </ul>
</div>`
});