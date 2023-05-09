const container = document.querySelector("#container");

const bttn = document.querySelector("button");

bttn.addEventListener(
  "click",
  async function getData() {
    const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/galleryList1?numOfRows=5&pageNo=99&MobileOS=ETC&MobileApp=test&arrange=A&_type=json&serviceKey=qkyEsGBB8XHbymBfRMrib612fKfVwC8R9zVCCake7mo0%2BXsyG0dnWLp7%2FlPoGnr2mAK%2B1zTW66Dvjn6ujbPXQA%3D%3D`;

    const fetchData = await fetch(url);

    const toJson = await fetchData.json();

    const data = await toJson.response.body.items.item;

    {
      data.map((datas, i) => {
        const link = document.createElement("div");
        link.id = "list";

        const image = document.createElement("img");
        image.src = datas.galWebImageUrl;
        console.log(image.src);

        const text = document.createElement("span");
        text.innerText = `
        ${i + 1}번째 사진
        제목: ${datas.galTitle}
        장소: ${datas.galPhotographyLocation}`;
        const button = document.createElement("button");
        button.className = "bttn";
        button.innerText = "더보기";

        container.appendChild(link);
        link.appendChild(image);
        link.appendChild(text);
        link.appendChild(button);

        button.addEventListener("click", (e) => {
          const div = document.createElement("div");
          div.className = "list2";

          let year = datas.galCreatedtime.substring(0, 4);
          let month = datas.galCreatedtime.substring(4, 6);
          let day = datas.galCreatedtime.substring(6, 8);
          let hour = datas.galCreatedtime.substring(8, 10);
          let minute = datas.galCreatedtime.substring(10, 12);
          let second = datas.galCreatedtime.substring(12);
          let date = `${year}/${month}/${day} ${hour}:${minute}:${second}`;

          const detailText = document.createElement("span");
          detailText.innerText = `
            ${datas.galTitle}의 상세 정보 
            등록일 : ${date} 
            촬영자 : ${datas.galPhotographer}
            검색 키워드 : ${datas.galSearchKeyword}`;

          const xButton = document.createElement("button");

          xButton.innerText = "X";
          xButton.id = "bttn2";

          button.style.display = "none";

          div.appendChild(detailText);
          div.appendChild(xButton);
          link.appendChild(div);

          xButton.addEventListener("click", (e) => {
            xButton.parentNode.remove();
            button.style.display = "flex";
          });
        });
      });
    }
  },
  { once: true }
);
