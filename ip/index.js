//axios import buraya gelecek
import axios from "axious";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");

async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

const getIP = async function () {
  const IPm = await axios.get(
    "https://apis.ergineer.com/ipgeoapi/195.142.68.7"
  );
  console.log("async / await le gelen data > ", IPm.data);
};
getIP();

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/

const myFunction = function (nesne) {
  const ilkDiv = document.createElement("div");
  ilkDiv.className = "card";

  const foto = document.createElement("img");
  foto.setAttribute("src", "{ülke bayrağı url}????????????????");

  const ikinciDiv = document.createElement("div");
  ikinciDiv.className = "card-info";

  const baslik = document.createElement("h3");
  baslik.className = "ip";
  baslik.textContent = "{ip adresi}?????????????????";

  const pUlke = document.createElement("p");
  pUlke.className = "ulke";
  pUlke.textContent = "{ülke bilgisi (ülke kodu)}????????????????";

  const pEnlemBoylam = document.createElement("p");
  pEnlemBoylam.textContent =
    "Enlem: {enlem} Boylam: {boylam}???????????????????";

  const pSehir = document.createElement("p");
  pSehir.textContent = "Şehir: {şehir}????????????????";

  const pSaat = document.createElement("p");
  pSaat.textContent = "Saat dilimi: {saat dilimi}????????????????????";

  const pPara = document.createElement("p");
  pPara.textContent = "Para birimi: {para birimi}?????????????????";

  const pISP = document.createElement("p");
  pISP.textContent = "ISP: {isp}?????????????????????????????";

  ikinciDiv.append(baslik, pUlke, pEnlemBoylam, pSehir, pSaat, pPara, pISP);
  ilkDiv.append(foto, ikinciDiv);

  return ilkDiv;
};

const buDiv = document.querySelector(".card");
const haberHaber = myFunction();
buDiv.append(haberHaber);

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek
