//axios import buraya gelecek
import axios from "axios";

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
import "babel-core/register";
import "babel-polyfill";

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

const responseStatic = {
  sorgu: "195.142.68.7",
  durum: "OK",
  kıta: "Asia",
  ülke: "Turkey",
  ülkeKodu: "TR",
  ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
  bölge: "16",
  bölgeAdı: "Bursa Province",
  şehir: "Bursa",
  zip: "16250",
  enlem: 40.22619999999999862438926356844604015350341796875,
  boylam: 29.0722999999999984765963745303452014923095703125,
  saatdilimi: "Europe/Istanbul",
  parabirimi: "TRY",
  isp: "Superonline Iletisim Hizmetleri",
  organizasyon: "BNG-SOL",
  as: "AS34984 Superonline Iletisim Hizmetleri A.S.",
};

const cardCreator = (data) => {
  const card = `<div class="card">
<img src="https://flagsapi.com/${data["ülkeKodu"]}/flat/64.png" />
<div class="card-info">
  <h3 class="ip">${data["sorgu"]}</h3>
  <p class="ulke">${data["ülkeKodu"]}</p>
  <p>Enlem: ${data["enlem"]} Boylam: ${data["boylam"]}</p>
  <p>Şehir: ${data["şehir"]}</p>
  <p>Saat dilimi: ${data["saatdilimi"]}</p>
  <p>Para birimi: ${data["parabirimi"]}</p>
  <p>ISP: ${data["isp"]}</p>
</div>
  </div>`;
  return card;
};

document.querySelector(".cards").innerHTML = cardCreator(responseStatic);

//BUNDAN SONRASI DİNAMİK IP ALMA

async function geoAPI() {
  await ipAdresimiAl();
  console.log("IP adresim", benimIP);
  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then(function (response) {
      console.log("2. IP adresim: ", benimIP);
      console.log(response.data);
      document.querySelector(".cards").innerHTML = cardCreator(response.data);
    })
    .catch(function (response) {
      console.error("Hata alındı.");
    })
    .finally(function () {
      console.log("3. IP adresim: ", benimIP);
    });
}
geoAPI();

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
