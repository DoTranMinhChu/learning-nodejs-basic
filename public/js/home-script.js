
function pagingListProduct(page, length) {
    const pagingListProduct = $('#paging-list-products')
    pagingListProduct.html('');
    for (let i = 0; i < length; i++) {
        pagingListProduct.append(`
        <div class="paging-item ${page == i + 1 ? 'active' : ''}" onclick="changePage(${i + 1})">${i + 1}</div>
        `)
    }
}


function changePage(page) {
    $.ajax({
        url: `/api/product?page=${page}`,
        type: 'GET',
        dataType: 'json'
    })
        .then(data => {
            pagingListProduct(page, data.total_page)
            const listPorductTag = $('#list-products')
            listPorductTag.html('');
            listPorductTag.append(`
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
    
                    </tbody>
                </table>
            `)
            const tbodyListProductTag = $('#list-products tbody')
            for (let i = 0; i < data.data.length; i++) {
                let product = data.data[i];
                tbodyListProductTag.append(`
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.type}</td>
                        <td>${product.price}</td>
                        <td><img src=${product.image} alt="prd-img"></img></td>
                    </tr>
                `)
            }




        })
        .catch(err => {
            console.log(err)
        })
}

changePage(1)




