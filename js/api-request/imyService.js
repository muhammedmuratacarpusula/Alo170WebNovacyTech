$(function () {
  const webData = getWebData();
  
  var buYil = webData.istatistik.buYil;
  var bugunCozumSaglandi = webData.istatistik.bugunBasvuruCozumSagladi;
  var bugunGorusmeSagladi = webData.istatistik.bugunGorusmeSagladi;
  var suanGorusmede = webData.istatistik.suandaGorusme;
  var buAy = webData.istatistik.buAyCozumBuldu;

  var formattedBuYil = buYil.toLocaleString('tr-TR');
  var formattedBugunCozumSaglandi = bugunCozumSaglandi.toLocaleString('tr-TR');
  var formattedBugunGorusmeSagladi = bugunGorusmeSagladi.toLocaleString('tr-TR');
  var formattedSuanGorusmede = suanGorusmede.toLocaleString('tr-TR');
  var formattedBuAy = buAy.toLocaleString('tr-TR');
  
  // istatistik verileri değişkenden html elementlerine değerleri yazdırılıyor
  document.getElementById('gorusmede').textContent = formattedSuanGorusmede // şuanda görüşmede olan vatandaşlar
  document.getElementById('bugunGorusmeSagladi').textContent = formattedBugunGorusmeSagladi // bugün ne kadar görüşme sağlandı
  document.getElementById('bugunBasvuruCozumSagladi').textContent = formattedBugunCozumSaglandi // bugün kaç vatandaş çözüme ulaştı
  document.getElementById('buYilGorusmeSaglayanVatandaslar').textContent = formattedBuYil // bu yıl kaç gorusme saglandı
  document.getElementById('buAyGorusmeSaglayanVatandaslar').textContent = formattedBuAy // bu ay kaç görüşme sağlandı
  //console.log(webData.kvkk)


  //Haberler ve duyurular html elementine yazdırılıyor
  webData.haberler.map((news, index) => {
    let modalFooterContent;
    if (index == 0) {
      modalFooterContent = `
      <button class="btn btn-primary" data-mdb-target="#modal-new-id-${webData.haberler[index + 1].id}" data-mdb-toggle="modal" data-mdb-dismiss="modal" >
        Sonraki Haber
      </button>`;
    }
    else if (index + 1 == webData.haberler.length) {
      modalFooterContent = `
      <button class="btn btn-primary" data-mdb-target="#modal-new-id-${webData.haberler[index - 1].id}" data-mdb-toggle="modal" data-mdb-dismiss="modal">
        Önceki Haber
      </button>`;
    }
    else {
      modalFooterContent = `
      <button class="btn btn-primary" data-mdb-target="#modal-new-id-${webData.haberler[index - 1].id}" data-mdb-toggle="modal" data-mdb-dismiss="modal">
        Önceki Haber
      </button>
      <button class="btn btn-primary" data-mdb-target="#modal-new-id-${webData.haberler[index + 1].id}" data-mdb-toggle="modal" data-mdb-dismiss="modal">
        Sonraki Haber
      </button>`;
    }
    document.getElementById("newsElement").innerHTML += `
      <div class="card newsCards" style="margin-bottom: 30px;">
            <img src="${news.imageUrl}" class="card-img-top newsImgs" alt="haber resim" />
          <div class="card-body">
              <h5 class="card-title">${news.title}</h5>
              <p class="card-text" style="text-overflow: ellipsis; width:300px; white-space: nowrap; overflow: hidden;">${news.content}</p>
              
          </div>
          <div class="card-footer"><button data-mdb-toggle="modal" href="#modal-new-id-${news.id}" class="btn btn-primary">Haberin Detayı</button> </div>
      </div>
    `;

    document.getElementById('newsModalsArea').innerHTML += `
    <!-- News Modal -->
    <div class="modal fade" style="overflow: scroll; z-index: 10000" id="modal-new-id-${news.id}" tabindex="-1" aria-labelledby="newsModalLabel${news.id}"
      aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="newsModalLabel${news.id}">${news.title}</h5>
            <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="col-md-12">
              <img src="${news.imageUrl}" class="img-fluid" /><br /><br />
              <div id="newsDetail_content">${news.content}</div>
            </div>
          </div>
          <div id="modal-footer-new-${news.id}" class="modal-footer">
            ${modalFooterContent}
          </div>
        </div>
      </div>
    </div>`;
  });

  //SGK TV html elementine yazdırılıyor
  webData.sgkTv.map(sgkTV_prop => {
    document.getElementById("sgkTVelement").innerHTML += `
      <div class="card newsCards" style="margin-bottom: 30px;">
          <img class="card-img-top img-fluid" alt="haber resim" src="${sgkTV_prop.imageUrl}" />
        <div class="card-body">
            <h5 class="card-title">${sgkTV_prop.title}</h5>
            <p class="card-text" style="text-overflow: ellipsis; width:300px; white-space: nowrap; overflow: hidden;"></p>
            <a class="btn btn-primary" data-fancybox data-width="1600" data-height="900" href="${sgkTV_prop.videoUrl}">
            <i class="bi bi-play"></i>
            </a>
        </div>
      </div>
    `;
  });

  //Pratik Bilgiler html elemtine yazdırılıyor
  webData.pratikBilgiler.map(pratikBilgiler_prop => {
    document.getElementById("bilgilendirme").innerHTML += `
    <div class="accordion accordion-borderless" id="accordionFlush${pratikBilgiler_prop.id}">
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-heading-${pratikBilgiler_prop.id}">
            <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
              data-mdb-target="#flush-collapse-${pratikBilgiler_prop.id}" aria-expanded="false" aria-controls="flush-collapse-${pratikBilgiler_prop.id}">
              <strong class="accordionBtn">${pratikBilgiler_prop.title}</strong>
            </button>
          </h2>
          <div id="flush-collapse-${pratikBilgiler_prop.id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${pratikBilgiler_prop.id}"
            data-mdb-parent="#accordionFlush${pratikBilgiler_prop.id}">
            <div class="accordion-body">
            ${pratikBilgiler_prop.content}
            </div>
          </div>
        </div>
    </div>
    `;
    // alo 170 bilgilendirmeyi hata oluştuğu için ekrana yazdırma
    // document.getElementById("bilgilendirme").hidden = true
  });

  // s.s.s istekleri
  const sssData = getSSSMainCategories();
  // ana başlıklar html elementine yazdırılıyor...
  sssData.Result.map(sss_prop => {
    document.getElementById("ex1").innerHTML += `
    <li class="nav-item" role="presentation">
      <a
        class="nav-link"
        id="ex3-tab-${sss_prop.Id}"
        data-mdb-toggle="tab"
        data-sss-main-id="${sss_prop.Id}"
        href="#ex3-tabs-${sss_prop.Id}"
        role="tab"
        aria-controls="ex3-tabs-${sss_prop.Id}"
        aria-selected="true"
        >
        ${sss_prop.Name}
        </a>
    </li>
    `;

    document.getElementById("ex2-content").innerHTML += `
      <div class="tab-pane fade" id="ex3-tabs-${sss_prop.Id}" role="tabpanel" aria-labelledby="ex3-tab-${sss_prop.Id}">
        <div class="row">
          <div class="col-4" style="overflow-y: scroll; max-height: 440px;">
            <div id="subCategories${sss_prop.Id}"class="list-group list-group-light" role="tablist">
            </div>
          </div>
          <div class="col-8" style="overflow-y: scroll; max-height: 440px;">
            <div class="tab-content" id="nav-tabContent">
              <div class="tab-pane fade" id="subCategoryContent${sss_prop.Id}" role="tabpanel">
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });

  const tempSSSMains = document.querySelectorAll("a[data-sss-main-id]");
  tempSSSMains.forEach(sssMainTitle => {
    sssMainTitle.addEventListener("click", () => renderSubCategories(sssMainTitle.getAttribute("data-sss-main-id")), false);
  });
  document.getElementById('ex3-tab-' + sssData.Result[0].Id).click();

  // Categories Sub Menu Render
  function renderSubCategories(mainCategoryId) {
    document.getElementById("subCategories" + mainCategoryId).innerHTML = "";
    let subCategories = getSSSSubCategories(mainCategoryId);
    subCategories.Result.map(subCategory => {
      document.getElementById("subCategories" + mainCategoryId).innerHTML += `
      <a class="list-group-item list-group-item-action px-3 border-0" id="list-sub-category-${subCategory.Id}" data-sub-category-id="${subCategory.Id}"
        data-mdb-toggle="list" href="#subCategoryContent${mainCategoryId}" role="tab" aria-controls="subCategoryContent${mainCategoryId}">${subCategory.Name}</a>
      `;
    });

    const tempSSSSubCategories = document.querySelectorAll("a[data-sub-category-id]");
    tempSSSSubCategories.forEach(subCategoryTitle => {
      subCategoryTitle.addEventListener("click", () => renderSubCategoryContent(subCategoryTitle.getAttribute("data-sub-category-id"), subCategoryTitle.textContent || subCategoryTitle.innerText, mainCategoryId), false);
    });
    document.getElementById('list-sub-category-' + subCategories.Result[0].Id).click();
  }

  // Categories Sub Menu Item Content Render
  function renderSubCategoryContent(subCategoryId, subCategoryTitle, mainCategoryId) {

    document.getElementById("subCategoryContent" + mainCategoryId).innerHTML = ``

    document.getElementById("searchBarArea").innerHTML = `
      <div class="input-group" >
        <input id="searchInput${mainCategoryId}" type="search" class="form-control  btn-outline-primary"
          placeholder="${subCategoryTitle} içinde ara" aria-label="Search" aria-describedby="search-addon" />
      </div > `;

    let subCategoryContent = getSSSSubCategoryContent(subCategoryId);
    subCategoryContent.Result.map(subContent => {
      document.getElementById("subCategoryContent" + mainCategoryId).innerHTML += `
      <div class="accordion accordion-borderless" id="accordionFlush${subContent.Id}">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-heading-${subContent.Id}">
              <button class="accordion-button collapsed" type="button" data-mdb-toggle="collapse"
                data-mdb-target="#flush-collapse-${subContent.Id}" aria-expanded="false" aria-controls="flush-collapse-${subContent.Id}">
                <strong data-search-id="accordionFlush${subContent.Id}" class="accordionBtn searchElement">${subContent.Title}</strong>
              </button>
            </h2>
            <div id="flush-collapse-${subContent.Id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-${subContent.Id}"
              data-mdb-parent="#accordionFlush${subContent.Id}">
              <div class="accordion-body" >
              ${subContent.Content}
              </div>
            </div>
          </div>
      </div>
      `;

      //SSS Search 
      document.getElementById(`searchInput${mainCategoryId}`).addEventListener("keyup", (event) => {
        var searchInput, filter, strong, i, txtValue;
        searchInput = document.getElementById(`searchInput${mainCategoryId}`);
        filter = searchInput.value.toUpperCase();
        strong = document.querySelectorAll("strong.searchElement");
        for (i = 0; i < strong.length; i++) {
          // a = strong[i].getElementsByTagName("a")[0];
          txtValue = strong[i].textContent || strong[i].innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            document.getElementById(`${strong[i].getAttribute("data-search-id")}`).style.display = "";
          } else {
            document.getElementById(`${strong[i].getAttribute("data-search-id")}`).style.display = "none";
          }
        }
      });

    });
  }

  // İhbar - Şikayet Modal Scripts
  let kisiselBilgiCheck = document.getElementById('kisiselBilgiCheck');
  let ihbarForm = document.getElementById("ihbarForm");

  let ihbarTcInput = document.getElementById('ihbarTc');
  let ihbarAdInput = document.getElementById('ihbarAd');
  let ihbarSoyadInput = document.getElementById('ihbarSoyad');
  let ihbarDogumTarihInput = document.getElementById('ihbarDogumTarih');
  let ihbarTelefonInput = document.getElementById('ihbarTelefon');

  let ihbarBildirimSebebiInput = document.getElementById('ihbarBildirimSebebi');
  let ihbarKurumlarInput = document.getElementById('ihbarKurumlar');
  let ihbarKonularInput = document.getElementById('ihbarKonular');
  let ihbarAltKonularInput = document.getElementById('ihbarAltKonular');
  let ihbarMesajInput = document.getElementById('ihbarMesaj');

  let succesAlertDiv = document.getElementById('succesAlertDiv');
  let succesAlertMessage = document.getElementById('succesAlertMessage');
  let infoAlertDiv = document.getElementById('infoAlertDiv');
  let infoAlertMessage = document.getElementById('infoAlertMessage');



  projects().Result.map(Result => {
    ihbarKurumlarInput.innerHTML += `
      <option value="${Result.Id}">${Result.Name}</option>
      `;
  });

  let ihbarData = {
    "bildirimSebebi": {
      "true": [],
      "false": []
    },
    "kurumKonular": [
      // {
      //   "projectId": null,
      //   "data": {
      //     "true": [],
      //     "false": []
      //   }
      // }
    ],
    "konularAltKonular": [
      // {
      //   "subjectId": null,
      //   "data": []
      // }
    ]
  };

  function renderBildirimSebebi(isUnknown) {
    ihbarBildirimSebebiInput.innerHTML = `<option  value="" selected>Bildirim sebebi</option>`;
    if (ihbarData.bildirimSebebi[isUnknown].length == 0) {
      ihbarData.bildirimSebebi[isUnknown] = reasons(isUnknown).Result;
    }
    ihbarData.bildirimSebebi[isUnknown].map(Result => {
      ihbarBildirimSebebiInput.innerHTML += `
      <option value="${Result.Id}">${Result.Name}</option>
      `;
    });
  }

  function renderSubject(projectId, isUnknown) {
    ihbarKonularInput.innerHTML = `<option  value="" selected>Konu</option>`;
    let tempKonu = ihbarData.kurumKonular.filter(konu => konu.projectId === projectId);
    if (tempKonu.length == 0) {
      tempKonu = subjects(projectId, isUnknown).Result;
      let pushData = {
        "projectId": projectId,
        "data": {
          "true": null,
          "false": null
        }
      }
      pushData.data[isUnknown] = tempKonu;
      ihbarData.kurumKonular.push(pushData);
    }
    else {
      tempKonu = tempKonu[0];
      if (tempKonu.data[isUnknown] == null) {
        tempKonu = subjects(projectId, isUnknown).Result;
        ihbarData.kurumKonular.filter(function (konu, index) {
          if (konu.projectId === projectId) {
            konu.data[isUnknown] = tempKonu;
          }
        });
      }
      else {
        tempKonu = tempKonu.data[isUnknown];
      }
    }
    // console.log(tempKonu);
    tempKonu.map(Result => {
      ihbarKonularInput.innerHTML += `
      <option value="${Result.Id}">${Result.Name}</option>
      `;
    });
  }

  function renderSubSubject(subjectId) {
    ihbarAltKonularInput.innerHTML = `<option value="" selected>Alt konu</option>`;

    let tempAltKonular = ihbarData.konularAltKonular.filter(altKonular => altKonular.subjectId === subjectId);
    if (tempAltKonular.length == 0) {
      tempAltKonular = subSubjects(subjectId).Result
      ihbarData.konularAltKonular.push({
        "subjectId": subjectId,
        "data": tempAltKonular
      });
    }
    else {
      tempAltKonular = tempAltKonular[0];
      tempAltKonular = tempAltKonular.data;
    }
    tempAltKonular.map(Result => {
      ihbarAltKonularInput.innerHTML += `
      <option value="${Result.Id}">${Result.Name}</option>
      `;
    });
  }

  ihbarKurumlarInput.addEventListener('change', (event) => {
    let isUnknown = kisiselBilgiCheck.checked ? 'true' : 'false';
    renderSubject(ihbarKurumlarInput.value, isUnknown);
    ihbarAltKonularInput.innerHTML = `<option value="" selected>Alt konu</option>`;
  });

  ihbarKonularInput.addEventListener('change', (event) => {
    renderSubSubject(ihbarKonularInput.value);
  });

  renderBildirimSebebi('false');

  kisiselBilgiCheck.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      ihbarTcInput.required = false;
      ihbarAdInput.required = false;
      ihbarSoyadInput.required = false;
      ihbarDogumTarihInput.required = false;
      ihbarTelefonInput.required = false;
      renderBildirimSebebi('true');
      renderSubject(ihbarKurumlarInput.value, 'true');
    } else {
      ihbarTcInput.required = true;
      ihbarAdInput.required = true;
      ihbarSoyadInput.required = true;
      ihbarDogumTarihInput.required = true;
      ihbarTelefonInput.required = true;
      renderBildirimSebebi('false');
      renderSubject(ihbarKurumlarInput.value, 'false');
    }
    renderSubSubject(ihbarKonularInput.value);
  });

  ihbarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    succesAlertDiv.classList.add("alertHide");
    infoAlertDiv.classList.add("alertHide");
    let data = {
      "ProjectId": ihbarKurumlarInput.value,
      "ReasonId": ihbarBildirimSebebiInput.value,
      "SubjectId": ihbarKonularInput.value,
      "SubSubjectId": ihbarAltKonularInput.value,
      "Description": ihbarMesajInput.value
    }
    let checkResponse = true;
    if (!kisiselBilgiCheck.checked) {
      checkResponse = TCNoKontrol(ihbarTcInput.value);
      if (checkResponse) {
        data["FirstName"] = ihbarAdInput.value;
        data["LastName"] = ihbarSoyadInput.value;
        data["Phone"] = ihbarTelefonInput.value;
        data["IdentityNo"] = ihbarTcInput.value;
        data["Birthdate"] = ihbarDogumTarihInput.value;
      }
      else {
        infoAlertMessage.innerHTML = "TC Kimlik numarası geçersiz";
        infoAlertDiv.classList.remove("alertHide");
      }
    }

    if (checkResponse) {
      postNotice(data).done(function (response) {
        console.log(response)
        if (response.Code != 400) {
          /// tasarımsal
          document.getElementById("modal_body").style = "filter: blur(8px);"
       }
        if (response.State) {
          succesAlertMessage.innerHTML = response.Message;
          succesAlertDiv.classList.remove("alertHide");
        } else {
          infoAlertMessage.innerHTML = response.Message;
          infoAlertDiv.classList.remove("alertHide");
        }
      });
    }
  });

  // Notification Check
  let notificationArea = document.getElementById('bildirimSonucArea');
  let notificationResultText = document.getElementById('bildirimSonucText');
  let notificationCheckButton = document.getElementById('bildirimSorguButton');
  let notificationAreaClose = document.getElementById('bildirimSonucAreaClose');

  var sorgulamaLimit = 0

  notificationAreaClose.onclick = function () {
    notificationArea.classList.remove('show');
  }

  notificationCheckButton.onclick = function () {
    sorgulamaLimit++
    if (sorgulamaLimit > 3) {
      //get the closable setting value.
      var closable = alertify.alert().setting('closable');
      //grab the dialog instance using its parameter-less constructor then set multiple settings at once.
      alertify.alert()
        .setting({
          'title': 'Uyarı',
          'label': 'Tamam',
          'message': 'Çok fazla bildirim sorgulama işlemi yaptınız, Lütfen daha sonra tekrar deneyiniz.',
          'onok': function () { alertify.success("Detaylı bilgi için Alo 170'i arayabilirsiniz."); }
        }).show();
    }
    else if (document.getElementById("bildirimSorguTC").value == "" || document.getElementById("bildirimSorguNo").value == "") {
      //get the closable setting value.
      var closable = alertify.alert().setting('closable');
      //grab the dialog instance using its parameter-less constructor then set multiple settings at once.
      alertify.alert()
        .setting({
          'title': 'Uyarı',
          'label': 'Tamam',
          'message': 'Lütfen tüm bilgilerinizi eksiksiz giriniz.',
          'onok': function () { alertify.success("Detaylı bilgi için Alo 170'i arayabilirsiniz."); }
        }).show();
    }
    else {
      var data = {
        "KimlikNo": document.getElementById("bildirimSorguTC").value,
        "BildirimNo": document.getElementById("bildirimSorguNo").value
      }

      postNotificationCheck(data).done(function (response) {
        if (response.State) {
          notificationArea.style.color = "#155724";
          notificationArea.style.backgroundColor = "#d4edda";
          notificationArea.style.borderColor = "#c3e6cb";
        }
        else {
          notificationArea.style.color = "#721c24";
          notificationArea.style.backgroundColor = "#f8d7da";
          notificationArea.style.borderColor = "#f5c6cb";
        }
        notificationResultText.textContent = response.Message;
      });

      notificationArea.classList.add('show');
    }
  };
});