function calculatediscount(){
    let salesprice =document.getElementById('billamount').value
    let discount =document.getElementById('percentage')

    let discountprice= salesprice * (discount/100);
    let totalprice =salesprice-discountprice

    console.log('discountprice')
}

document.getElementById('result-discount').innerHTML ='your discount is N' + discountprice
document.getElementById('result-total').innerHTML = 'You will pay N' + totalprice

document.getElementById('bill').value=""
document.getElementById('percentage').value=""