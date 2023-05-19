const tbody = document.querySelector("tbody");

async function getAllProduct() {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
}

function goToDetail(id) {
  window.location.assign(`details.html?id=${id}`);
}

function renderProductsList(data) {
  if (!Array.isArray(data) || data.length === 0) return;

  if (!tbody) return;
  let listProducts = "";
  data.forEach((item) => {
    listProducts += `<tr>
    <td class="item-id">${item.id}</td>
   <td>
    <div class="d-flex align-items-center">
       <img
         src="${item.image}"
         alt=""
     style="width: 45px; height: 45px"
          class="rounded-circle"
     />
       <div class="ms-3">
         <p class="fw-bold mb-1">${item.category}</p>
          <p class="text-muted mb-0">${item.description}</p>
        </div>
      </div>
    </td>
    <td>
      ${item.title}
    </td>
    <td>
   ${item.price}
  </td>
  <td><p class="fw-normal mb-1">${item.rating.rate}</p>
 <p class="text-muted mb-0">${item.rating.count}</p></td>

</tr>`;
    tbody.innerHTML = listProducts;
  });

  const allTr = document.querySelectorAll("tbody > tr");
  [...allTr].forEach((item) =>
    item.addEventListener("click", function () {
      const tdId = item.querySelector(".item-id");
      const id = tdId.textContent;
      goToDetail(id);
    })
  );
}

(async () => {
  tbody.innerText = "LOADING....";
  const data = await getAllProduct();

  renderProductsList(data);
})();
